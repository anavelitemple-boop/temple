'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomSlide {
  title?: string;
  type?: string;
  icon?: string;
  description?: string;
  content?: React.ReactNode;
}

interface DailyUpdatesCarouselProps {
  slides?: CustomSlide[];
}

const defaultSlides: CustomSlide[] = [
  {
    title: 'ദർശന സമയം',
    type: 'നട തുറക്കുന്ന സമയം',
    icon: '🪔',
    description: 'രാവിലെ: 05:00 AM - 11:30 AM | വൈകുന്നേരം: 05:00 PM - 08:00 PM',
  },
  {
    title: 'വഴിപാട് കർത്താവ്',
    type: 'ഇന്നത്തെ വിശേഷാൽ പൂജ',
    icon: '👤',
    description: 'പേര്: ശ്രീധരൻ നായരും കുടുംബവും | നക്ഷത്രം: രോഹിണി | വഴിപാട്: വിശേഷാൽ ഭഗവതി സേവ',
  },
  {
    title: 'പ്രധാന അറിയിപ്പ്',
    type: 'വിശേഷങ്ങൾ',
    icon: '📢',
    description: 'ക്ഷേത്ര വികസന നവീകരണ പ്രവർത്തനങ്ങൾ പുരോഗമിക്കുന്നു. ഭക്തജനങ്ങളുടെ സഹകരണം പ്രതീക്ഷിക്കുന്നു. വഴിപാടുകൾ ഇപ്പോൾ ഓൺലൈനായി ബുക്ക് ചെയ്യാവുന്നതാണ്.',
  }
];

export default function DailyUpdatesCarousel({ slides: customSlides }: DailyUpdatesCarouselProps) {
  const activeSlides = (customSlides && customSlides.length > 0) ? customSlides : defaultSlides;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, activeSlides.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : activeSlides.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
  };

  const currentSlide = activeSlides[currentIndex] || activeSlides[0];

  return (
    <div 
      onClick={handleNext}
      className="bg-transparent border border-white/20 p-6 rounded-2xl max-w-md w-full h-[220px] flex flex-col justify-between text-cream relative overflow-hidden cursor-pointer group"
    >
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-black/40 hover:bg-gold/80 text-cream hover:text-black transition-all opacity-70 group-hover:opacity-100 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-black/40 hover:bg-gold/80 text-cream hover:text-black transition-all opacity-70 group-hover:opacity-100 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight size={18} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
        {activeSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex ? 'bg-gold w-6' : 'bg-white/40 hover:bg-white/70 w-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="flex-grow flex flex-col justify-between pb-4 px-3"
        >
          {/* Header & Title */}
          <div>
            <div className="flex items-center justify-between border-b border-gold/20 pb-1.5">
              <h3 className="text-gold font-bold text-lg tracking-wide text-left">
                {currentSlide.title || 'വിശേഷങ്ങൾ'}
              </h3>
              <span className="text-xl">{currentSlide.icon || '🪔'}</span>
            </div>

            {/* Badge Type below Title */}
            <div className="mt-2 text-left">
              <span className="inline-block text-xs tracking-wide text-gold font-bold bg-black/60 px-2.5 py-1 rounded border border-gold/30">
                {currentSlide.type || 'അറിയിപ്പ്'}
              </span>
            </div>
          </div>

          {/* Description Content at Bottom */}
          <div className="mt-2 text-xs sm:text-sm text-cream/90 leading-relaxed font-semibold text-left">
            {currentSlide.content ? currentSlide.content : (
              <p>{currentSlide.description}</p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
