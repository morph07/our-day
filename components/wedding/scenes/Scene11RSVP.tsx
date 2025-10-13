'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, User, Phone, MessageSquare } from 'lucide-react';

interface SceneProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

export default function Scene11RSVP({ onNext, onPrev, isActive }: SceneProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attendance: 'yes',
    message: ''
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP submitted:', formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <div className="relative w-full h-full bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 overflow-hidden">
      <div className="flex flex-col items-center justify-center min-h-full px-6 py-8 text-center relative z-10">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg w-full"
            >
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-200"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
              >
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">💌</div>
                  <h3 className="typography-hero text-3xl text-purple-700 mb-2">
                    Please RSVP
                  </h3>
                  <div className="w-20 h-1 bg-purple-400 mx-auto rounded-full mb-4" />
                  <p className="typography-caption text-gray-600">
                    Your presence would make our special day complete
                  </p>
                  <div className="bg-purple-50 rounded-xl p-4 mt-4">
                    <p className="typography-caption text-xs text-purple-700 font-medium">
                      Please respond by 15 November 2025
                    </p>
                  </div>
                </div>

                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                  onClick={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => e.stopPropagation()}
                >
                  {/* Name */}
                  <div>
                    <label className="flex items-center text-sm typography-caption text-gray-700 mb-2">
                      <User size={16} className="mr-2 text-purple-600" />
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all typography-caption"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="flex items-center text-sm typography-caption text-gray-700 mb-2">
                      <Phone size={16} className="mr-2 text-purple-600" />
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all typography-caption"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Attendance */}
                  <div>
                    <label className="block text-sm typography-caption text-gray-700 mb-3">
                      Will you be attending? *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="flex items-center justify-center p-3 border-2 border-purple-200 rounded-xl cursor-pointer hover:bg-purple-50 transition-colors">
                        <input
                          name="attendance"
                          type="radio"
                          value="yes"
                          checked={formData.attendance === 'yes'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                          formData.attendance === 'yes' 
                            ? 'bg-purple-600 border-purple-600' 
                            : 'border-gray-300'
                        }`}>
                          {formData.attendance === 'yes' && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                        <span className="typography-caption text-sm">✨ Yes, I'll be there!</span>
                      </label>
                      <label className="flex items-center justify-center p-3 border-2 border-purple-200 rounded-xl cursor-pointer hover:bg-purple-50 transition-colors">
                        <input
                          name="attendance"
                          type="radio"
                          value="no"
                          checked={formData.attendance === 'no'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                          formData.attendance === 'no' 
                            ? 'bg-purple-600 border-purple-600' 
                            : 'border-gray-300'
                        }`}>
                          {formData.attendance === 'no' && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                        <span className="typography-caption text-sm">😢 Sorry, can't make it</span>
                      </label>
                    </div>
                  </div>

                  {/* Special Message */}
                  <div>
                    <label className="flex items-center text-sm typography-caption text-gray-700 mb-2">
                      <MessageSquare size={16} className="mr-2 text-purple-600" />
                      Special Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all typography-caption resize-none"
                      placeholder="Any special wishes for the happy couple..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl typography-button shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send size={18} />
                    <span>Send RSVP</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 2 }}
                className="text-6xl mb-6"
              >
                🎉
              </motion.div>
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="typography-heading text-3xl text-green-700 mb-4">
                Re a leboga!
              </h2>
              <p className="typography-body text-gray-700 mb-2">
                Thank you for your RSVP
              </p>
              <p className="typography-caption text-gray-600 mb-4">
                We can't wait to celebrate with you on our special day
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-200 text-3xl"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          >
            {['💝', '💕', '💖', '🌸', '✨'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
