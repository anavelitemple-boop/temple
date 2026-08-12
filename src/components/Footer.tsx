import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-cream border-t-2 border-gold h-[100px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row justify-between items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">🪔</span>
          <h2 className="text-lg font-bold text-gold tracking-wide">ആനവേലി ക്ഷേത്രം</h2>
        </Link>
        
        <p className="text-[10px] sm:text-xs text-cream/60">
          © 2026 ആനവേലി ക്ഷേത്രം.
        </p>

        <div className="flex gap-3 text-[10px] sm:text-xs text-cream/70 font-semibold">
          <Link href="/" className="hover:text-gold">ഹോം</Link>
          <span>|</span>
          <Link href="/poojakal" className="hover:text-gold">പൂജകൾ</Link>
          <span>|</span>
          <Link href="/gallery" className="hover:text-gold">ഗാലറി</Link>
          <span>|</span>
          <Link href="/news" className="hover:text-gold">അറിയിപ്പുകൾ</Link>
          <span>|</span>
          <Link href="/contact" className="hover:text-gold">ബന്ധപ്പെടുക</Link>
        </div>
      </div>
    </footer>
  );
}
