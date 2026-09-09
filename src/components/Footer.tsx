import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-cream border-t-2 border-gold py-6 md:py-8 pb-16 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center gap-4 md:flex-row md:justify-between text-center md:text-left">
        
        {/* Brand Title */}
        <Link href="/" className="flex items-center justify-center gap-2">
          <span className="text-xl sm:text-2xl shrink-0">🪔</span>
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-gold tracking-wide">
            കൊപ്പാറ ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രം
          </h2>
        </Link>
        
        {/* Nav Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm text-cream/80 font-semibold">
          <Link href="/" className="hover:text-gold transition-colors">ഹോം</Link>
          <span className="text-gold/40">|</span>
          <Link href="/poojakal" className="hover:text-gold transition-colors">പൂജകൾ</Link>
          <span className="text-gold/40">|</span>
          <Link href="/gallery" className="hover:text-gold transition-colors">ഗാലറി</Link>
          <span className="text-gold/40">|</span>
          <Link href="/news" className="hover:text-gold transition-colors">അറിയിപ്പുകൾ</Link>
          <span className="text-gold/40">|</span>
          <Link href="/contact" className="hover:text-gold transition-colors">ബന്ധപ്പെടുക</Link>
        </div>

        {/* Copyright */}
        <p className="text-[11px] sm:text-xs text-cream/60">
          © 2026 കൊപ്പാറ ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രം.
        </p>

      </div>
    </footer>
  );
}
