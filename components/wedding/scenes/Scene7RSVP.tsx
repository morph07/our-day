'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// import emailjs from '@emailjs/browser';
import { Heart, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface SceneProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

const rsvpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  guests: z.number().min(1, 'At least 1 guest required').max(10, 'Maximum 10 guests'),
  attendance: z.enum(['yes', 'no']),
  message: z.string().optional(),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

export default function Scene7RSVP({ isActive }: SceneProps) {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      guests: 1,
      attendance: 'yes',
    },
  });

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Initialize EmailJS with your public key
      // You'll need to set up EmailJS service and get these IDs
      // const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      // const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      // const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      // const templateParams = {
      //   to_name: 'Koketso & Neo',
      //   from_name: data.name,
      //   guest_count: data.guests,
      //   attendance: data.attendance === 'yes' ? 'Will attend' : 'Cannot attend',
      //   message: data.message || 'No additional message',
      //   reply_to: 'noreply@wedding.com',
      // };

      // For demo purposes, we'll simulate the email sending
      // In production, uncomment the line below and set up EmailJS
      // await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('RSVP submission error:', error);
      setSubmitError('Failed to send RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRSVPClick = () => {
    setShowForm(true);
  };

  if (isSubmitted) {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-green-50 to-dusty-blue/20 overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          >
            <div className="text-6xl mb-6">🎉</div>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-script text-dusty-blue mb-4">
              Re a leboga!
            </h2>
            <p className="text-lg font-serif text-gray-700 mb-2">
              Thank you for your RSVP
            </p>
            <p className="text-sm font-serif text-gray-600">
              We can&apos;t wait to celebrate with you
            </p>
          </motion.div>

          {/* Confetti animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-dusty-blue rounded-full"
                initial={{
                  x: (typeof window !== 'undefined' ? window.innerWidth : 400) / 2,
                  y: (typeof window !== 'undefined' ? window.innerHeight : 800) / 2,
                  scale: 0,
                }}
                animate={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 400),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeOut',
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-white via-beige/30 to-dusty-blue/20 overflow-hidden">
      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full px-8 text-center relative z-10">
        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div
              key="invitation"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-md"
            >
              {/* Header */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="mb-8"
              >
                <div className="text-5xl mb-4">💌</div>
                <h2 className="text-2xl font-script text-dusty-blue mb-2">
                  RSVP
                </h2>
                <div className="w-16 h-px bg-dusty-blue mx-auto" />
              </motion.div>

              {/* Main message */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-6"
              >
                <p className="text-lg font-serif opacity-90">Let love unfold</p>
                <p className="text-lg font-serif text-gray-700 leading-relaxed">
                  Kindly confirm your attendance by
                </p>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-dusty-blue/20">
                  <h3 className="text-2xl font-serif font-medium text-dusty-blue mb-2">
                    15 November 2025
                  </h3>
                </div>

                <p className="text-sm font-serif text-gray-600 italic">
                  Tap below to RSVP
                </p>

                {/* RSVP Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRSVPClick}
                  className="inline-flex items-center space-x-2 bg-dusty-blue text-white px-8 py-4 rounded-full font-serif font-medium shadow-lg hover:bg-dusty-blue/90 transition-colors"
                >
                  <Heart size={20} />
                  <span>I&apos;ll be there 💙</span>
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="max-w-md w-full"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-dusty-blue/20">
                <h3 className="text-xl font-script text-dusty-blue mb-6 text-center">
                  RSVP Details
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-serif text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-dusty-blue/30 focus:border-dusty-blue focus:ring-2 focus:ring-dusty-blue/20 outline-none transition-colors font-serif"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 font-serif">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label className="block text-sm font-serif text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <input
                      {...register('guests', { valueAsNumber: true })}
                      type="number"
                      min="1"
                      max="10"
                      className="w-full px-4 py-3 rounded-lg border border-dusty-blue/30 focus:border-dusty-blue focus:ring-2 focus:ring-dusty-blue/20 outline-none transition-colors font-serif"
                    />
                    {errors.guests && (
                      <p className="text-red-500 text-xs mt-1 font-serif">
                        {errors.guests.message}
                      </p>
                    )}
                  </div>

                  {/* Attendance */}
                  <div>
                    <label className="block text-sm font-serif text-gray-700 mb-2">
                      Will you attend? *
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          {...register('attendance')}
                          type="radio"
                          value="yes"
                          className="mr-2 text-dusty-blue focus:ring-dusty-blue"
                        />
                        <span className="font-serif text-sm">Yes, I&apos;ll be there!</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          {...register('attendance')}
                          type="radio"
                          value="no"
                          className="mr-2 text-dusty-blue focus:ring-dusty-blue"
                        />
                        <span className="font-serif text-sm">Sorry, can&apos;t make it</span>
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-serif text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      {...register('message')}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-dusty-blue/30 focus:border-dusty-blue focus:ring-2 focus:ring-dusty-blue/20 outline-none transition-colors font-serif resize-none"
                      placeholder="Any special message for the couple..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-dusty-blue text-white py-3 rounded-lg font-serif font-medium shadow-lg hover:bg-dusty-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send RSVP</span>
                      </>
                    )}
                  </motion.button>

                  {submitError && (
                    <div className="flex items-center space-x-2 text-red-500 text-sm font-serif">
                      <AlertCircle size={16} />
                      <span>{submitError}</span>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-dusty-blue/10 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          >
            💝
          </motion.div>
        ))}
      </div>
    </div>
  );
}
