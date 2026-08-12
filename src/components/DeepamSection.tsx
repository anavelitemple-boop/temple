'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DeepamSection() {
  const [isLit, setIsLit] = useState(false);
  const [lampCount, setLampCount] = useState(108);

  const handleLightLamp = () => {
    if (!isLit) {
      setIsLit(true);
      setLampCount(prev => prev + 1);
    } else {
      setIsLit(false);
    }
  };

  return (
    <section className="py-16 bg-maroon-dark text-cream relative overflow-hidden border-y-2 border-gold/40">
      {/* Decorative Traditional Lamp Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,169,60,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-gold text-lg block mb-2">🪔 തസ്മൈ ശ്രീ ഗുരുവേ നമഃ 🪔</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gold tracking-wide">
          ദീപം തെളിയിക്കുക
        </h2>
        <p className="mt-4 text-cream/80 max-w-xl mx-auto font-medium">
          നിങ്ങളുടെ പ്രാർത്ഥനയ്ക്കായി ഒരു ദീപം തെളിയിക്കാം. മനസ്സിന്റെ അന്ധകാരം നീക്കി പ്രകാശം പരക്കട്ടെ.
        </p>

        {/* The Lamp Interactive Display Area */}
        <div className="my-10 relative flex flex-col items-center justify-center min-h-[220px]">
          
          {/* Flame & Smoke Particles */}
          <div className="absolute top-[20px] flex flex-col items-center justify-end h-[60px] w-[60px] z-20">
            <AnimatePresence>
              {isLit && (
                <>
                  {/* Smoke Particle */}
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-cream/40 absolute top-[-10px] animate-smoke"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                  {/* Flame Wrapper */}
                  <motion.div
                    className="relative w-7 h-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                  >
                    {/* Flame Inner Gold */}
                    <div className="w-full h-full rounded-b-full rounded-t-[60%_80%] bg-gradient-to-t from-gold via-brass to-cream animate-flame absolute inset-0 filter drop-shadow-[0_0_12px_rgba(212,175,55,0.9)]" />
                    {/* Flame Core Red/Orange */}
                    <div className="w-3 h-5 rounded-b-full rounded-t-[60%_80%] bg-orange-600 absolute bottom-1 left-2 animate-pulse opacity-85" />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Lamp Stand / Plate Silhouette */}
          <div className="relative w-48 h-28 flex items-center justify-center">
            {/* The Brass Lamp Body */}
            <svg 
              className={`w-36 h-24 transition-all duration-500 ${isLit ? 'drop-shadow-[0_0_25px_rgba(212,175,55,0.65)]' : ''}`}
              viewBox="0 0 100 60" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Stand */}
              <path d="M45 42 L55 42 L53 52 L47 52 Z" fill="#B38F24" />
              <path d="M35 52 L65 52 L62 56 L38 56 Z" fill="#91721D" />
              
              {/* Main Bowl */}
              <path d="M15 32 C15 32 18 45 50 45 C82 45 85 32 85 32 C85 32 80 42 50 42 C20 42 15 32 15 32 Z" fill="#D4AF37" />
              <ellipse cx="50" cy="32" rx="35" ry="6" fill="#C59B27" />
              <ellipse cx="50" cy="32" rx="31" ry="4.5" fill="#8F6B13" />

              {/* Oil inside bowl */}
              <ellipse cx="50" cy="32.5" rx="28" ry="3" fill="#E67E22" opacity="0.8" />
              
              {/* Highlight Lines */}
              <path d="M16 33.5 C30 40.5 70 40.5 84 33.5" stroke="#FAF6EE" strokeWidth="0.5" strokeLinecap="round" opacity="0.6" />
            </svg>
          </div>

          {/* Lamp count indicator */}
          <div className="mt-4 text-sm font-bold text-gold tracking-wide bg-maroon p-2 rounded-lg border border-gold/30">
            തെളിയിക്കപ്പെട്ട ദീപങ്ങൾ: {lampCount}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleLightLamp}
          className={`px-8 py-3 rounded-full font-bold text-maroon-dark tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg border-2 ${
            isLit 
              ? 'bg-cream text-maroon border-cream hover:bg-cream-dark' 
              : 'bg-gold hover:bg-gold-dark text-maroon border-gold-dark/30 hover:shadow-gold/20'
          }`}
        >
          {isLit ? 'ദീപം അണയ്ക്കുക' : 'ദീപം തെളിയിക്കുക'}
        </button>
      </div>
    </section>
  );
}
