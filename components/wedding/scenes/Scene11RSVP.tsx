'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, User, Phone, MessageSquare, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

interface SceneProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

// Validation schema
const rsvpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  attendance: z.enum(['yes', 'no']),
  message: z.string().optional()
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

export default function Scene11RSVP({ onNext, onPrev, isActive }: SceneProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: '',
      phone: '',
      attendance: 'yes',
      message: ''
    },
    mode: 'onChange'
  });

  const watchedAttendance = watch('attendance');

  const onSubmit = async (data: RSVPFormData) => {
    setIsLoading(true);
    setSubmitError(null);

    try {
      // EmailJS configuration
      const templateParams = {
        to_name: 'Koketso & Neo',
        from_name: data.name,
        guest_name: data.name,
        guest_phone: data.phone,
        attendance: data.attendance === 'yes' ? 'Will Attend' : 'Cannot Attend',
        message: data.message || 'No special message',
        reply_to: data.phone
      };

      // Send email via EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams
      );

      console.log('RSVP submitted successfully:', data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to send RSVP:', error);
      setSubmitError('Failed to send RSVP. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="relative w-full h-full bg-gradient-to-b from-white to-beige overflow-hidden">
      {/* Watercolor border effect (consistent with other scenes) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dusty-blue/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dusty-blue/10 to-transparent" />
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-dusty-blue/10 to-transparent" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-dusty-blue/10 to-transparent" />
      </div>

      <div className="flex flex-col items-center justify-start min-h-full px-6 py-8 text-center relative z-10 overflow-y-auto">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-lg w-full mt-4 mb-8"
            >
              <div 
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-dusty-blue/20"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
              >
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl mb-4"
                  >
                    💌
                  </motion.div>
                  <h3 className="typography-heading text-dusty-blue mb-2">
                    Please RSVP
                  </h3>
                  <div className="w-16 h-px bg-dusty-blue mx-auto mb-4" />
                  <p className="typography-body text-gray-600">
                    Your presence would make our special day complete
                  </p>
                  <div className="bg-dusty-blue/10 rounded-xl p-4 mt-4">
                    <p className="typography-caption text-dusty-blue font-medium">
                      Please respond by 01 December 2025
                    </p>
                  </div>
                </div>

                <form 
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-5"
                  onClick={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => e.stopPropagation()}
                >
                  {/* Error Message */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm"
                    >
                      {submitError}
                    </motion.div>
                  )}
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label className="flex items-center typography-caption text-gray-700 mb-2">
                      <User size={16} className="mr-2 text-dusty-blue" />
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.name ? 'border-red-300 focus:border-red-500' : 'border-dusty-blue/20 focus:border-dusty-blue'} focus:ring-2 focus:ring-dusty-blue/20 outline-none transition-all typography-body bg-white/80`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </motion.div>

                  {/* Phone Number */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="flex items-center typography-caption text-gray-700 mb-2">
                      <Phone size={16} className="mr-2 text-dusty-blue" />
                      Phone Number *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.phone ? 'border-red-300 focus:border-red-500' : 'border-dusty-blue/20 focus:border-dusty-blue'} focus:ring-2 focus:ring-dusty-blue/20 outline-none transition-all typography-body bg-white/80`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </motion.div>

                  {/* Attendance */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label className="block typography-caption text-gray-700 mb-3">
                      Will you be attending? *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="flex items-center justify-center p-3 border-2 border-dusty-blue/20 rounded-xl cursor-pointer hover:bg-dusty-blue/10 transition-colors">
                        <input
                          {...register('attendance')}
                          type="radio"
                          value="yes"
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                          watchedAttendance === 'yes' 
                            ? 'bg-dusty-blue border-dusty-blue' 
                            : 'border-gray-300'
                        }`}>
                          {watchedAttendance === 'yes' && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                        <span className="typography-caption">✨ Yes, I'll be there!</span>
                      </label>
                      <label className="flex items-center justify-center p-3 border-2 border-dusty-blue/20 rounded-xl cursor-pointer hover:bg-dusty-blue/10 transition-colors">
                        <input
                          {...register('attendance')}
                          type="radio"
                          value="no"
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                          watchedAttendance === 'no' 
                            ? 'bg-dusty-blue border-dusty-blue' 
                            : 'border-gray-300'
                        }`}>
                          {watchedAttendance === 'no' && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                        <span className="typography-caption">😢 Sorry, can't make it</span>
                      </label>
                    </div>
                  </motion.div>

                  {/* Special Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label className="flex items-center typography-caption text-gray-700 mb-2">
                      <MessageSquare size={16} className="mr-2 text-dusty-blue" />
                      Special Message
                    </label>
                    <textarea
                      {...register('message')}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-dusty-blue/20 focus:border-dusty-blue focus:ring-2 focus:ring-dusty-blue/20 outline-none transition-all typography-body resize-none bg-white/80"
                      placeholder="Any special wishes for the happy couple..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading || !isValid}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className={`w-full py-4 rounded-xl typography-button shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isLoading || !isValid
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-dusty-blue to-dusty-blue/80 text-white hover:from-dusty-blue/90 hover:to-dusty-blue/70'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send RSVP</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center max-w-md mt-8 mb-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl mb-6"
              >
                🎉
              </motion.div>
              <CheckCircle className="w-12 h-12 text-dusty-blue mx-auto mb-6" />
              <h2 className="typography-heading text-dusty-blue mb-4">
                Re a leboga!
              </h2>
              <div className="w-16 h-px bg-dusty-blue mx-auto mb-4" />
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

      {/* Decorative elements - consistent with other scenes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-dusty-blue/10 text-2xl"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          >
            {['✨', '🌟', '💫', '🤍', '💙', '🌸'][i]}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
