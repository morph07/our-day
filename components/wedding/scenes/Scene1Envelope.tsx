'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SceneProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

export default function Scene1Envelope({ onNext }: SceneProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleEnvelopeClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation(); // Prevent event bubbling to parent container
    
    if (isProcessing || isOpened) return; // Prevent double clicks
    
    setIsProcessing(true);
    setIsOpened(true);
    
    setTimeout(() => {
      onNext();
    }, 2000);
  };

  // Generate consistent positions for petals
  const petalPositions = Array.from({ length: 20 }, (_, i) => ({
    initialX: (i * 37 + 123) % 400, // Deterministic but varied positions
    finalX: (i * 43 + 89) % 400,
    delay: (i * 0.1) % 2,
    duration: 4 + (i % 3),
  }));

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-dusty-blue to-blue-300 overflow-hidden">
      {/* Floating petals - only render after mount to avoid hydration mismatch */}
      {isMounted && (
        <div className="absolute inset-0">
          {petalPositions.map((petal, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: petal.initialX,
                y: -10,
                rotate: 0,
              }}
              animate={{
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 10,
                rotate: 360,
                x: petal.finalX,
              }}
              transition={{
                duration: petal.duration,
                repeat: Infinity,
                ease: 'linear',
                delay: petal.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full px-8 text-center">
        {!isOpened ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            {/* Envelope */}
            <motion.div
              className="relative cursor-pointer mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnvelopeClick}
              onTouchEnd={handleEnvelopeClick}
            >
              <div className="w-64 h-40 bg-white rounded-lg shadow-2xl relative overflow-hidden">
                {/* Envelope flap */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-20 bg-silver origin-bottom"
                  style={{
                    clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                  }}
                  animate={isOpened ? { rotateX: 180 } : { rotateX: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
                {/* Envelope body */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-white" />
                
                {/* Wax seal */}
                <motion.div
                  className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-dusty-blue rounded-full flex items-center justify-center text-white text-xs font-script"
                  animate={isOpened ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  K💍N
                </motion.div>
              </div>
            </motion.div>

            {/* Invitation text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white"
            >
              <p className="text-lg mb-4 font-serif">Tap to open the invitation</p>
              <p className="text-sm mb-6 font-serif opacity-90">You are invited to celebrate the union of</p>
              
              <div className="space-y-2">
                <h1 className="text-4xl font-script text-white mb-2">
                  Koketso Morapedi
                </h1>
                <div className="text-2xl font-script text-white/80 mb-2">&</div>
                <h1 className="text-4xl font-script text-white mb-6">
                  Neo Letsholathebe
                </h1>
              </div>

              <div className="space-y-1 font-serif">
                <p className="text-xl font-medium">06 December 2025</p>
                <p className="text-lg opacity-90">Letsholathebe, Botswana</p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center text-white"
          >
            {/* Opened envelope animation */}
            <motion.div
              className="text-6xl mb-8"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 2 }}
            >
              💌
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-3xl font-script mb-4">Welcome to our story...</h2>
              <p className="text-lg font-serif opacity-90">Let love unfold</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
