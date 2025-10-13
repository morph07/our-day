'use client';

import { motion } from 'framer-motion';
import { RotateCcw, Heart } from 'lucide-react';

interface SceneProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

export default function Scene10Extras({ isActive }: SceneProps) {
  const replayStory = () => {
    // This will be handled by the parent WeddingStory component
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  // Placeholder engagement photos - in production, these would be real photos
  const engagementPhotos = [
    { id: 1, alt: 'Koketso and Neo engagement photo 1' },
    { id: 2, alt: 'Koketso and Neo engagement photo 2' },
    { id: 3, alt: 'Koketso and Neo engagement photo 3' },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-beige via-white to-dusty-blue/20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_#A3BFD9_1px,_transparent_1px),_radial-gradient(circle_at_75%_75%,_#A3BFD9_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-start h-full px-6 py-8 relative z-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-md w-full"
        >
          {/* Header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-center mb-8"
          >
            <div className="text-5xl mb-4">📸</div>
            <h2 className="text-2xl font-script text-dusty-blue mb-2">
              Our Journey to Forever
            </h2>
            <div className="w-16 h-px bg-dusty-blue mx-auto" />
          </motion.div>

          {/* Engagement photo carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <div className="space-y-4">
              {engagementPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.2,
                    ease: 'easeOut' 
                  }}
                  className="relative"
                >
                  {/* Placeholder for engagement photos */}
                  <div className="w-full h-48 bg-gradient-to-br from-dusty-blue/20 to-beige/30 rounded-xl shadow-lg border border-dusty-blue/20 flex items-center justify-center">
                    <div className="text-center text-dusty-blue/60">
                      <Heart size={32} className="mx-auto mb-2" />
                      <p className="text-sm font-serif">
                        Engagement Photo {index + 1}
                      </p>
                      <p className="text-xs font-serif opacity-70 mt-1">
                        {photo.alt}
                      </p>
                    </div>
                  </div>

                  {/* Photo overlay text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3"
                  >
                    <p className="text-xs font-serif text-gray-600 italic text-center">
                      {index === 0 && "The moment we knew..."}
                      {index === 1 && "Love in every glance..."}
                      {index === 2 && "Building our forever..."}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video loop placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mb-8"
          >
            <div className="w-full h-32 bg-gradient-to-r from-dusty-blue/30 to-silver/30 rounded-xl shadow-lg border border-dusty-blue/20 flex items-center justify-center">
              <div className="text-center text-dusty-blue/70">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-3xl mb-2"
                >
                  ▶️
                </motion.div>
                <p className="text-sm font-serif">
                  Short Video Loop
                </p>
                <p className="text-xs font-serif opacity-70">
                  Our love story in motion
                </p>
              </div>
            </div>
          </motion.div>

          {/* Replay button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={replayStory}
              className="bg-dusty-blue text-white py-4 px-8 rounded-full font-serif font-medium shadow-lg hover:bg-dusty-blue/90 transition-colors flex items-center space-x-3 mx-auto"
            >
              <RotateCcw size={24} />
              <span>Replay the Story</span>
            </motion.button>
          </motion.div>

          {/* Final blessing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.1 }}
            className="mt-8 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-dusty-blue/20">
              <p className="text-sm font-serif text-gray-600 italic leading-relaxed mb-3">
                &ldquo;Two souls with but a single thought, two hearts that beat as one.&rdquo;
              </p>
              <div className="flex items-center justify-center space-x-2 text-dusty-blue">
                <span className="text-lg font-script">K</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  💙
                </motion.span>
                <span className="text-lg font-script">N</span>
              </div>
              <p className="text-xs font-serif text-gray-500 mt-3">
                December 6, 2025 • Letsholathebe, Botswana
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating celebration elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-dusty-blue/20 text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 4,
              }}
            >
              {['🎊', '🎉', '💫', '⭐', '💝'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
