"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SceneProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

export default function Scene6DressCode({ isActive }: SceneProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate consistent positions for floating elements (from Scene2)
  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    x: (i * 67 + 50) % 400,
    y: (i * 89 + 100) % 600,
    duration: 4 + (i % 3),
    delay: i * 0.3,
    symbol: ["💙", "✨", "🌸", "💫", "🤍", "🌟"][i],
  }));

  const colorSwatches = [
    {
      name: "Dark Slate Blue",
      color: "#214662",
      textColor: "text-gray-700",
      border: true,
    },
    {
      name: "Dusty Blue",
      color: "#7393b3",
      textColor: "text-gray-700",
      border: true,
    },
    {
      name: "Baby Blue",
      color: "#a7c7e7",
      textColor: "text-gray-700",
      border: true,
    },
    {
      name: "Light Gray",
      color: "#d3d3d3",
      textColor: "text-gray-700",
      border: true,
    },
    {
      name: "Cream",
      color: "#f8f5f1",
      textColor: "text-gray-700",
      border: true,
    },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-white to-beige">
      {/* Watercolor border effect (from Scene2) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dusty-blue/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dusty-blue/10 to-transparent" />
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-dusty-blue/10 to-transparent" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-dusty-blue/10 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full overflow-y-auto">
        <div className="flex flex-col items-center justify-start min-h-full px-8 py-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-lg"
          >
            {/* Header with flower illustration (from Scene2) */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="mb-4 flex justify-center">
                <img
                  src="/images/illustrations/Married Couple Wedding.png"
                  alt="Decorative flower illustration"
                  className="w-42 h-42 object-contain"
                />
              </div>
              <h2 className="typography-heading text-dusty-blue mb-2">
                Dress Code & Theme
              </h2>
              <div className="w-16 h-px bg-dusty-blue mx-auto" />
            </motion.div>

            {/* Theme Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <h3 className="typography-subheading text-gray-800 mb-2">
                Wedding Theme
              </h3>
              <p className="typography-body text-dusty-blue mb-2">
                Dusty Blue & White
              </p>
              {/* Theme color swatches */}
              <div className="flex justify-center space-x-4 mb-6">
                {colorSwatches.map((swatch) => (
                  <div
                    key={swatch.name}
                    className={`flex flex-col items-center`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full shadow-lg ${
                        swatch.border ? "border-2 border-white" : ""
                      }`}
                      style={{ backgroundColor: swatch.color }}
                    />
                    <span
                      className={`text-xs font-body mt-2 ${swatch.textColor}`}
                    >
                      {swatch.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-16 h-px bg-dusty-blue mx-auto mb-6" />
            </motion.div>

            {/* Matsela Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-8"
            >
              {/* Matsela Header */}
              <div className="text-center mb-8">
                <motion.h3
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="typography-subheading text-gray-800 mb-2"
                >
                  Dress Code
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="typography-body text-dusty-blue mb-2"
                >
                  Formal
                </motion.p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="h-px bg-dusty-blue mx-auto mb-4"
                />
              </div>
            </motion.div>

            {/* Bottom message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-8"
            >
              <p className="typography-caption text-gray-500 italic">
                Let us celebrate in harmony and elegance
              </p>
            </motion.div>
          </motion.div>

          {/* Floating elements - matching Scene2 style */}
          {isMounted && (
            <div className="absolute inset-0 pointer-events-none">
              {floatingElements.map((element, i) => (
                <motion.div
                  key={i}
                  className="absolute text-dusty-blue/20 text-2xl"
                  initial={{
                    x: element.x,
                    y: element.y,
                    rotate: 0,
                  }}
                  animate={{
                    rotate: 360,
                    y: [element.y, element.y - 20, element.y],
                  }}
                  transition={{
                    duration: element.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: element.delay,
                  }}
                >
                  {element.symbol}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
