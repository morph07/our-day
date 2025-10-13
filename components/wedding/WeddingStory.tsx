'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { Volume2, VolumeX, RotateCcw } from 'lucide-react';
// import useSound from 'use-sound';

// Import scene components
import Scene1Envelope from './scenes/Scene1Envelope';
import Scene2Blessing from './scenes/Scene2Blessing';
import Scene3DateTheme from './scenes/Scene3DateTheme';
import Scene4Venue from './scenes/Scene4Venue';
import Scene5Schedule from './scenes/Scene5Schedule';
import Scene6DressCode from './scenes/Scene6DressCode';
import Scene7RSVP from './scenes/Scene7RSVP';
import Scene8Scripture from './scenes/Scene8Scripture';
import Scene9ThankYou from './scenes/Scene9ThankYou';
import Scene10Extras from './scenes/Scene10Extras';

const scenes = [
  Scene1Envelope,
  Scene2Blessing,
  Scene3DateTheme,
  Scene4Venue,
  Scene5Schedule,
  Scene6DressCode,
  Scene7RSVP,
  Scene8Scripture,
  Scene9ThankYou,
  Scene10Extras,
];

interface WeddingStoryProps {
  onComplete?: () => void;
}

export default function WeddingStory({ onComplete }: WeddingStoryProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartRef = useRef<number>(0);

  // Background music - placeholder for now, you can add an audio file to public/audio/
  // const [play, { stop, pause, sound }] = useSound('/audio/wedding-music.mp3', {
  //   loop: true,
  //   volume: 0.3,
  // });
  
  // Temporary placeholder functions until audio is added
  const play = () => {};
  const pause = () => {};

  const nextScene = useCallback(() => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(prev => prev + 1);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentScene, onComplete]);

  // Auto-advance timer
  useEffect(() => {
    if (!isPlaying || isPaused) return;

    const timer = setTimeout(() => {
      nextScene();
    }, 5000); // 5 seconds per scene

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying, isPaused, nextScene]);

  // Progress bar animation
  useEffect(() => {
    if (!isPlaying || isPaused) return;

    setProgress(0);
    const startTime = Date.now();
    const duration = 5000;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        progressRef.current = setTimeout(updateProgress, 50);
      }
    };

    updateProgress();

    return () => {
      if (progressRef.current) {
        clearTimeout(progressRef.current);
      }
    };
  }, [currentScene, isPlaying, isPaused]);

  // Audio control
  useEffect(() => {
    if (!isMuted && isPlaying) {
      play();
    } else {
      pause();
    }

    return () => {
      // Cleanup will be handled when audio is implemented
    };
  }, [isMuted, isPlaying]);


  const prevScene = () => {
    if (currentScene > 0) {
      setCurrentScene(prev => prev - 1);
    }
  };

  const goToScene = (index: number) => {
    setCurrentScene(index);
  };

  const restart = () => {
    setCurrentScene(0);
    setIsPlaying(true);
  };

  // Touch handlers for tap/hold
  const handleTouchStart = () => {
    touchStartRef.current = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchDuration = Date.now() - touchStartRef.current;
    const touch = e.changedTouches[0];
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 400;
    const tapX = touch.clientX;

    if (touchDuration < 200) { // Quick tap
      if (tapX < screenWidth / 3) {
        prevScene(); // Left third - previous
      } else if (tapX > (screenWidth * 2) / 3) {
        nextScene(); // Right third - next
      } else {
        // Middle third - pause/play
        setIsPaused(!isPaused);
      }
    }
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextScene,
    onSwipedRight: prevScene,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const CurrentSceneComponent = scenes[currentScene];

  return (
    <div 
      className="relative w-full h-screen bg-black overflow-hidden"
      {...swipeHandlers}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress bars */}
      <div className="absolute top-4 left-4 right-4 z-50 flex gap-1">
        {scenes.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer"
            onClick={() => goToScene(index)}
          >
            <div
              className="h-full bg-white transition-all duration-100 ease-linear"
              style={{
                width: index < currentScene ? '100%' : 
                       index === currentScene ? `${progress}%` : '0%'
              }}
            />
          </div>
        ))}
      </div>

      {/* Audio control */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Restart button (shown on last scene) */}
      {currentScene === scenes.length - 1 && (
        <button
          onClick={restart}
          className="absolute top-4 right-16 z-50 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white"
        >
          <RotateCcw size={20} />
        </button>
      )}

      {/* Scene content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="w-full h-full"
        >
          <CurrentSceneComponent 
            onNext={nextScene}
            onPrev={prevScene}
            isActive={!isPaused}
          />
        </motion.div>
      </AnimatePresence>

      {/* Pause indicator */}
      {isPaused && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-40">
          <div className="text-white text-6xl">⏸️</div>
        </div>
      )}

      {/* Navigation hints */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 text-white/70 text-sm text-center">
        <p>Tap sides to navigate • Hold center to pause • Swipe to change scenes</p>
      </div>
    </div>
  );
}
