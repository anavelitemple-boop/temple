'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomSlide {
  title?: string;
  type?: string;
  icon?: string;
  date?: string;
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
    description: 'രാവിലെ: 5:00 AM – 10:00 AM | വൈകുന്നേരം: 5:00 PM – 7:30 PM',
  },
  {
    title: 'ഇന്നത്തെ പൂജ',
    type: 'പൂജ വിവരങ്ങൾ',
    icon: '👤',
    description: 'Time (തീയതി / സമയം): | പേര്: | നാൾ:',
  }
];

export default function DailyUpdatesCarousel({ slides: customSlides }: DailyUpdatesCarouselProps) {
  const activeSlides = (customSlides && customSlides.length > 0) ? customSlides : defaultSlides;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : activeSlides.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
  };

  const currentSlide = activeSlides[currentIndex] || activeSlides[0];

  // Helper to format string descriptions nicely into bulleted or line-separated format
  const renderFormattedDescription = (desc?: string) => {
    if (!desc) return null;

    // Handle "രാവിലെ: 5:00 AM – 10:00 AM | വൈകുന്നേരം: 5:00 PM – 7:30 PM" or multi-part strings
    const parts = desc.split('|').map(s => s.trim()).filter(Boolean);
    if (parts.length > 1) {
      return (
        <div className="space-y-1.5 text-xs sm:text-sm">
          {parts.map((part, idx) => (
            <div key={idx} className="flex items-center gap-2 text-cream/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              <span>{part}</span>
            </div>
          ))}
        </div>
      );
    }

    // Handle newline-separated or colon-separated items if applicable
    const lines = desc.split('\n').filter(Boolean);
    return (
      <div className="space-y-1 text-xs sm:text-sm text-cream/90 font-medium leading-relaxed">
        {lines.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    );
  };

  return (
    <div 
      onClick={handleNext}
      className="bg-black/40 backdrop-blur-md border border-gold/30 p-6 rounded-2xl max-w-md w-full h-[230px] flex flex-col justify-between text-cream relative overflow-hidden cursor-pointer group shadow-2xl hover:border-gold/50 transition-all duration-300"
    >
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-gold hover:text-black text-cream border border-white/10 hover:border-gold transition-all duration-200 opacity-80 group-hover:opacity-100 cursor-pointer shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-gold hover:text-black text-cream border border-white/10 hover:border-gold transition-all duration-200 opacity-80 group-hover:opacity-100 cursor-pointer shadow-lg"
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
              idx === currentIndex ? 'bg-gold w-6' : 'bg-white/30 hover:bg-white/60 w-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.3 }}
          className="flex-grow flex flex-col justify-between pb-4 px-5"
        >
          {/* Header & Title */}
          <div>
            <div className="flex items-center justify-between border-b border-gold/20 pb-2">
              <h3 className="text-gold font-bold text-lg tracking-wide text-left drop-shadow-sm">
                {currentSlide.title || 'വിശേഷങ്ങൾ'}
              </h3>
              <span className="text-xl filter drop-shadow">{currentSlide.icon || '🪔'}</span>
            </div>

            {/* Badge Type & Optional Date below Title */}
            <div className="mt-2.5 text-left flex items-center justify-between gap-2">
              <span className="inline-block text-[11px] sm:text-xs tracking-wider text-gold font-semibold bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/30">
                {currentSlide.type || 'അറിയിപ്പ്'}
              </span>
              {currentSlide.date && (
                <span className="text-[11px] text-gold/90 font-medium bg-black/50 px-2.5 py-0.5 rounded-full border border-gold/20">
                  📅 {currentSlide.date}
                </span>
              )}
            </div>
          </div>

          {/* Description Content at Bottom */}
          <div className="mt-3 text-left">
            {currentSlide.content ? (
              currentSlide.content
            ) : (
              renderFormattedDescription(currentSlide.description)
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
