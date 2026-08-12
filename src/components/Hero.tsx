'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import DailyUpdatesCarousel from './DailyUpdatesCarousel';

interface HeroProps {
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  festivalDate?: string;
  festivalName?: string;
}

export default function Hero({
  heroTitle = 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രം',
  heroSubtitle = 'നമ്മുടെ ഗ്രാമത്തിന്റെ ആത്മീയ പൈതൃകം',
  heroDescription = 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിന്റെ ഡിജിറ്റൽ സന്നിധിയിലേക്ക് സ്വാഗതം. ശതവർഷങ്ങളുടെ പാരമ്പര്യവും ഗ്രാമത്തിന്റെ തനിമയും വിളിച്ചോതുന്ന പുണ്യ സങ്കേതം.',
  primaryCTA = 'ക്ഷേത്രത്തെ അറിയാം',
  secondaryCTA = 'വഴിപാടുകൾ',
}: HeroProps) {
  return (
    <section className="relative min-h-[65vh] md:h-[75vh] w-full flex flex-col justify-center overflow-hidden bg-charcoal py-8">
      {/* Background Image of the Actual Temple */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-10000 ease-out"
        style={{ 
          backgroundImage: `url('/temple-photo.jpg')`,
        }}
      />

      {/* Dark Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/95 via-charcoal/50 to-charcoal/30 z-1" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,94,58,0.15)_0%,transparent_70%)] pointer-events-none z-1" />

      {/* Top spacing to offset main navbar */}
      <div className="h-28 z-10 shrink-0" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 flex-grow self-center">
        {/* Hero Text */}
        <motion.div 
          className="text-center md:text-left flex-1 max-w-xl animate-fade-in"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gold leading-tight drop-shadow-lg">
            {heroTitle}
          </h1>
          <h2 className="text-lg sm:text-xl font-bold text-cream mt-2 tracking-wide">
            {heroSubtitle}
          </h2>
          <p className="mt-3 text-cream/80 text-xs sm:text-sm md:text-base leading-relaxed hidden sm:block">
            {heroDescription}
          </p>
        </motion.div>

        {/* Daily Updates Carousel - Visible on all screens */}
        <motion.div 
          className="flex-1 flex justify-center md:justify-end w-full mt-4 md:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DailyUpdatesCarousel />
        </motion.div>
      </div>

    </section>
  );
}
