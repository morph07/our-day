'use client';

import { motion } from 'framer-motion';

interface SceneProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

export default function Scene2Blessing({ isActive }: SceneProps) {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-white to-beige overflow-hidden">
      {/* Watercolor border effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dusty-blue/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dusty-blue/20 to-transparent" />
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-dusty-blue/10 to-transparent" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-dusty-blue/10 to-transparent" />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-md"
        >
          {/* Decorative element */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="text-6xl mb-4">🤍</div>
            <div className="w-24 h-px bg-dusty-blue mx-auto mb-4" />
          </motion.div>

          {/* Main text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xl font-serif text-gray-700 leading-relaxed">
              Together with our families, we joyfully invite you to witness our covenant of love.
            </p>

            {/* Setswana greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="border-t border-b border-dusty-blue/30 py-4 my-6"
            >
              <p className="text-lg font-serif italic text-dusty-blue">
                Re laletsa lona mo lenyalong la rona
              </p>
              <p className="text-sm font-serif text-gray-600 mt-2">
                We invite you to our wedding
              </p>
            </motion.div>

            {/* Initials with heart */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-3 text-3xl font-script text-dusty-blue">
                <span>K</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-red-400"
                >
                  💙
                </motion.span>
                <span>N</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-dusty-blue/20 text-2xl"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 400),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                rotate: 0,
              }}
              animate={{
                rotate: 360,
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
