'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface UpdateSlide {
  title: string;
  type: string;
  icon: string;
  content: React.ReactNode;
}

const slides: UpdateSlide[] = [
  {
    title: 'ദർശന സമയം',
    type: 'നട തുറക്കുന്ന സമയം',
    icon: '🪔',
    content: (
      <div className="space-y-2 mt-2">
        <div className="flex justify-between items-center bg-transparent px-4 py-2 rounded-lg border border-white/15">
          <span className="text-sm text-cream/70 font-semibold">രാവിലെ:</span>
          <span className="text-sm font-bold text-cream">05:00 AM - 11:30 AM</span>
        </div>
        <div className="flex justify-between items-center bg-transparent px-4 py-2 rounded-lg border border-white/15">
          <span className="text-sm text-cream/70 font-semibold">വൈകുന്നേരം:</span>
          <span className="text-sm font-bold text-cream">05:00 PM - 08:00 PM</span>
        </div>
      </div>
    )
  },

  {
    title: 'വഴിപാട് കർത്താവ്',
    type: 'ഇന്നത്തെ വിശേഷാൽ പൂജ',
    icon: '👤',
    content: (
      <div className="space-y-1.5 text-left text-xs font-semibold mt-2">
        <div className="flex justify-between border-b border-white/10 pb-1">
          <span className="text-cream/70">പേര്:</span>
          <span className="text-cream">ശ്രീധരൻ നായരും കുടുംബവും</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-1">
          <span className="text-cream/70">നക്ഷത്രം:</span>
          <span className="text-cream font-bold">രോഹിണി</span>
        </div>
        <div className="flex justify-between">
          <span className="text-cream/70">വഴിപാട്:</span>
          <span className="text-amber-300 font-bold">വിശേഷാൽ ഭഗവതി സേവ</span>
        </div>
      </div>
    )
  },
  {
    title: 'പ്രധാന അറിയിപ്പ്',
    type: 'വിശേഷങ്ങൾ',
    icon: '📢',
    content: (
      <div className="mt-2 text-sm text-cream/80 leading-relaxed font-semibold">
        ക്ഷേത്ര വികസന നവീകരണ പ്രവർത്തനങ്ങൾ പുരോഗമിക്കുന്നു. ഭക്തജനങ്ങളുടെ സഹകരണം പ്രതീക്ഷിക്കുന്നു. വഴിപാടുകൾ ഇപ്പോൾ ഓൺലൈനായി ബുക്ക് ചെയ്യാവുന്നതാണ്.
      </div>
    )
  }
];

export default function DailyUpdatesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

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
        {slides.map((_, idx) => (
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
          {/* Header */}
          <div>
            <div className="flex items-center justify-between border-b border-gold/20 pb-2">
              <span className="text-[10px] uppercase tracking-wider text-gold font-bold bg-maroon px-2 py-0.5 rounded border border-gold/15">
                {slides[currentIndex].type}
              </span>
              <span className="text-xl">{slides[currentIndex].icon}</span>
            </div>
            
            <h3 className="text-gold font-bold text-base mt-2 tracking-wide text-left">
              {slides[currentIndex].title}
            </h3>
          </div>

          {/* Content */}
          <div className="flex-grow flex flex-col justify-center">
            {slides[currentIndex].content}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
