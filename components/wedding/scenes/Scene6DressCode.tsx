'use client';

import { motion } from 'framer-motion';

interface SceneProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

export default function Scene6DressCode({ isActive }: SceneProps) {
  const colorSwatches = [
    { name: 'Dusty Blue', color: '#A3BFD9', textColor: 'text-white' },
    { name: 'Pure White', color: '#FFFFFF', textColor: 'text-gray-700', border: true },
    { name: 'Silver', color: '#C5C6C7', textColor: 'text-gray-700' },
    { name: 'Soft Beige', color: '#EAE6E1', textColor: 'text-gray-700' },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-dusty-blue/10 via-white to-beige/20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523A3BFD9%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-lg"
        >
          {/* Header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="text-5xl mb-4">👗</div>
            <h2 className="typography-heading text-dusty-blue mb-2">
              Dress Code
            </h2>
            <div className="w-16 h-px bg-dusty-blue mx-auto" />
          </motion.div>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="typography-subheading text-gray-800 mb-4">
              Dusty Blue and White
            </h3>
            <p className="typography-body italic text-dusty-blue mb-6">
              Colors of peace and purity
            </p>
          </motion.div>

          {/* Color swatches */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 gap-4 mb-8"
          >
            {colorSwatches.map((swatch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1 + index * 0.1,
                  ease: 'easeOut' 
                }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-16 h-16 rounded-full shadow-lg mb-2 flex items-center justify-center ${swatch.border ? 'border-2 border-dusty-blue/30' : ''}`}
                  style={{ backgroundColor: swatch.color }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: 'easeInOut',
                      delay: index * 0.5 
                    }}
                    className={`text-xs font-body ${swatch.textColor}`}
                  >
                    ✨
                  </motion.div>
                </div>
                <span className="text-xs font-body text-gray-600">
                  {swatch.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Dress code details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="space-y-6"
          >
            {/* Gentlemen */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-dusty-blue/20">
              <div className="flex items-center justify-center mb-3">
                <span className="text-2xl mr-2">🤵</span>
                <h4 className="typography-subheading text-lg text-gray-800">
                  Gentlemen
                </h4>
              </div>
              <p className="typography-caption text-gray-600">
                Navy or Dusty tones
              </p>
            </div>

            {/* Ladies */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-dusty-blue/20">
              <div className="flex items-center justify-center mb-3">
                <span className="text-2xl mr-2">👰</span>
                <h4 className="typography-subheading text-lg text-gray-800">
                  Ladies
                </h4>
              </div>
              <p className="typography-caption text-gray-600">
                Flowing whites & pastels
              </p>
            </div>
          </motion.div>

          {/* Bottom message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-8"
          >
            <p className="typography-caption text-gray-500 italic">
              Let us celebrate in harmony and elegance
            </p>
          </motion.div>
        </motion.div>

        {/* Floating fashion elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-dusty-blue/20 text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 3,
              }}
            >
              {['💎', '🌸', '🦋', '✨'][Math.floor(Math.random() * 4)]}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
