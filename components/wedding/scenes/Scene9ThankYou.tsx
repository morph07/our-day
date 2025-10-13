'use client';

import { motion } from 'framer-motion';
import { Share2, Calendar, Download } from 'lucide-react';

interface SceneProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

export default function Scene9ThankYou({ isActive }: SceneProps) {
  const shareOnWhatsApp = () => {
    const message = encodeURIComponent(
      "You're invited to Koketso & Neo's wedding! 💙\n06 December 2025 • Letsholathebe, Botswana\n\nView their beautiful invitation: " + (typeof window !== 'undefined' ? window.location.href : '')
    );
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/?text=${message}`, '_blank');
    }
  };

  const addToCalendar = () => {
    // Create ICS file content
    const eventDetails = {
      title: 'Koketso & Neo Wedding',
      start: '20251206T050000Z', // 5 AM UTC (adjust for Botswana timezone)
      end: '20251206T193000Z', // 7:30 PM UTC
      location: 'Letsholathebe, Botswana',
      description: 'Join us for our special day of love and celebration!',
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding Invitation//EN
BEGIN:VEVENT
UID:${Date.now()}@wedding.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${eventDetails.start}
DTEND:${eventDetails.end}
SUMMARY:${eventDetails.title}
DESCRIPTION:${eventDetails.description}
LOCATION:${eventDetails.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'koketso-neo-wedding.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const saveTheDate = () => {
    // Create a simple image or PDF download
    // For now, we'll just trigger the calendar download
    addToCalendar();
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-dusty-blue/20 via-white to-beige/30 overflow-hidden">
      {/* Background hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-dusty-blue/10 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 4,
            }}
          >
            💙
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-lg"
        >
          {/* Thank you message */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="text-6xl mb-6">💝</div>
            <h2 className="text-3xl font-script text-dusty-blue mb-4">
              With love and gratitude
            </h2>
            <div className="w-24 h-px bg-dusty-blue mx-auto mb-6" />
            <h1 className="text-4xl font-script text-gray-700">
              Koketso & Neo
            </h1>
          </motion.div>

          {/* Couple monogram */}
          <motion.div
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-lg border-2 border-dusty-blue/20 flex items-center justify-center">
              <span className="text-2xl font-script text-dusty-blue">K💍N</span>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="space-y-4"
          >
            {/* Share on WhatsApp */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareOnWhatsApp}
              className="w-full bg-green-500 text-white py-3 px-6 rounded-full font-serif font-medium shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Share2 size={20} />
              <span>Share on WhatsApp</span>
            </motion.button>

            {/* Save the Date */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={saveTheDate}
              className="w-full bg-dusty-blue text-white py-3 px-6 rounded-full font-serif font-medium shadow-lg hover:bg-dusty-blue/90 transition-colors flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Save the Date</span>
            </motion.button>

            {/* Add to Calendar */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addToCalendar}
              className="w-full bg-silver text-gray-700 py-3 px-6 rounded-full font-serif font-medium shadow-lg hover:bg-silver/90 transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar size={20} />
              <span>Add to Calendar</span>
            </motion.button>
          </motion.div>

          {/* Final message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-dusty-blue/20">
              <p className="text-sm font-serif text-gray-600 italic leading-relaxed">
                &ldquo;Love is not just looking at each other, it&apos;s looking in the same direction together.&rdquo;
              </p>
              <p className="text-xs font-serif text-gray-500 mt-2">
                — Antoine de Saint-Exupéry
              </p>
            </div>
          </motion.div>

          {/* Soft outro music fade indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-6"
          >
            <p className="text-xs font-serif text-gray-400 italic">
              🎵 Music fading softly...
            </p>
          </motion.div>
        </motion.div>

        {/* Floating musical notes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`note-${i}`}
              className="absolute text-dusty-blue/20 text-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 3,
              }}
            >
              🎵
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
