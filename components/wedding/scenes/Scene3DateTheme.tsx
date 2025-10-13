'use client';

import { motion } from 'framer-motion';

interface SceneProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

export default function Scene3DateTheme({ isActive }: SceneProps) {
  return (
    <motion.div 
      className="relative w-full h-full overflow-hidden"
      initial={{ background: 'linear-gradient(to bottom right, #ffffff, #EAE6E1)' }}
      animate={{ background: 'linear-gradient(to bottom right, #A3BFD9, #ffffff)' }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#A3BFD9_1px,_transparent_1px)] bg-[length:30px_30px]" />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-lg"
        >
          {/* Heaven's smile */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="text-5xl mb-4">☀️</div>
            <h2 className="typography-heading text-gray-700 mb-2">
              The day the heavens will smile
            </h2>
          </motion.div>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-dusty-blue/20">
              <h1 className="typography-hero text-dusty-blue mb-2">
                Saturday
              </h1>
              <div className="text-6xl font-decorative font-bold text-gray-800 mb-2">
                06
              </div>
              <h2 className="typography-subheading text-gray-700 mb-1">
                December
              </h2>
              <div className="typography-formal text-3xl font-medium text-dusty-blue">
                2025
              </div>
            </div>
          </motion.div>

          {/* Theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="space-y-6"
          >
            <div className="w-16 h-px bg-dusty-blue mx-auto" />
            
            <div>
              <h3 className="typography-subheading text-gray-800 mb-2">
                Theme
              </h3>
              <p className="typography-body text-dusty-blue mb-2">
                Dusty Blue & White
              </p>
              <p className="typography-caption text-gray-600 italic">
                Timeless Grace
              </p>
            </div>

            {/* Color swatches */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex justify-center space-x-4 mt-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-dusty-blue shadow-lg border-2 border-white" />
                <span className="text-xs font-body text-gray-600 mt-2">Dusty Blue</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-dusty-blue/30" />
                <span className="text-xs font-body text-gray-600 mt-2">Pure White</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-silver shadow-lg border-2 border-white" />
                <span className="text-xs font-body text-gray-600 mt-2">Silver</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/30 text-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 3,
              }}
            >
              ❄️
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
