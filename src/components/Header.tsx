'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

import { safeFetch, mockData, client } from '@/lib/sanity';
import { siteSettingsQuery } from '@/lib/queries';

export const navLinks = [
  { name: 'ഹോം', href: '/' },
  { name: 'പൂജ ബുക്കിംഗ്', href: '/pooja-booking' },
  { name: 'ക്ഷേത്ര പൂജകൾ', href: '/poojakal' },
  { name: 'വഴിപാടുകൾ', href: '/poojakal#vazhipadu' },
  { name: 'ഗാലറി', href: '/gallery' },
  { name: 'അറിയിപ്പുകൾ', href: '/news' },
  { name: 'ബന്ധപ്പെടുക', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [priestPhone, setPriestPhone] = useState('');
  const [priestButtonText, setPriestButtonText] = useState('ക്ഷേത്ര പൂജാരിയെ വിളിക്കാം');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    async function loadSiteSettings() {
      try {
        const settings = await client.fetch(siteSettingsQuery, {}, { useCdn: false });
        if (settings) {
          if (settings.priestPhone !== undefined) setPriestPhone(settings.priestPhone || '');
          if (settings.priestButtonText) setPriestButtonText(settings.priestButtonText);
        }
      } catch (e) {
        // Fallback
      }
    }
    loadSiteSettings();
  }, []);

  const formattedPriestLabel = React.useMemo(() => {
    if (!priestPhone) return priestButtonText;
    const cleanNumber = priestPhone.trim();
    if (priestButtonText.includes(cleanNumber) || /\d{5}/.test(priestButtonText)) {
      return priestButtonText;
    }
    return `${priestButtonText} - ${cleanNumber}`;
  }, [priestButtonText, priestPhone]);

  const getTelHref = (phone: string) => {
    if (!phone) return '#';
    const trimmed = phone.trim();
    if (trimmed.startsWith('+')) {
      return `tel:${trimmed.replace(/[^\d+]/g, '')}`;
    }
    const digits = trimmed.replace(/\D/g, '');
    if (digits.length === 10) {
      return `tel:+91${digits}`;
    }
    return `tel:${digits}`;
  };

  // Determine if we should display the transparent navbar theme
  const isHomepage = pathname === '/';
  const showTransparentTheme = isHomepage && !isScrolled;

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center px-4 w-full pointer-events-none">
      {/* Centered Floating Pill Navbar */}
      <div 
        className={`w-full max-w-5xl border rounded-full px-6 py-2.5 flex items-center justify-between pointer-events-auto transition-all duration-500 ${
          showTransparentTheme
            ? 'bg-white/60 backdrop-blur-lg border-white/20 shadow-none text-black'
            : 'bg-white/90 backdrop-blur-md border-gold/20 shadow-md text-black'
        }`}
      >
        
        {/* Brand Title */}
        <Link href="/" className="flex flex-col text-left">
          <h1 className="text-sm sm:text-base font-bold tracking-wide text-black">
            ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രം
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-600/20 text-emerald-800'
                    : 'text-black hover:bg-gold/10 hover:text-gold-dark'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href={getTelHref(priestPhone || '+91 9895873935')}
            className="bg-[#25D366] hover:bg-[#1ea34e] text-white flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm"
          >
            <Phone size={12} />
            <span>വിളിക്കുക</span>
          </a>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 focus:outline-none cursor-pointer text-black hover:text-gold"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="w-full max-w-sm mt-2 bg-white/95 backdrop-blur-md border border-gold/30 rounded-2xl shadow-xl p-4 pointer-events-auto lg:hidden animate-fade-in">
          <div className="flex flex-col gap-2 text-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 px-4 rounded-xl text-sm font-extrabold transition-all ${
                    isActive
                      ? 'bg-emerald-600/15 text-emerald-800'
                      : 'text-maroon hover:bg-gold/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-200/80 flex justify-center">
              <a
                href={getTelHref(priestPhone)}
                className="flex items-center justify-center gap-2.5 bg-black hover:bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold w-full transition-colors shadow-sm"
              >
                <Phone size={16} />
                <span>{formattedPriestLabel}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
