'use client';

import React from 'react';
import { MapPin, Phone, Mail, Compass, MessageCircle, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  settings?: any;
}

export default function ContactSection({ settings }: ContactSectionProps) {
  const address = settings?.address || 'കൊപ്പര ആനവേലിൽ ശ്രീ ദേവി ക്ഷേത്രം, അമ്പലപ്പുഴ, ആലപ്പുഴ, കേരളം - 688005';
  const phone = settings?.phone || '+91 7356462150';
  const email = settings?.email || 'anavelitemple@gmail.com';
  const whatsapp = settings?.whatsapp || '917356462150';
  const mapsUrl = (settings?.mapsLink && settings.mapsLink !== 'https://maps.google.com' && settings.mapsLink.trim() !== '') 
    ? settings.mapsLink 
    : 'https://maps.app.goo.gl/WY18Ci7aZHFzmEUD8';

  const cleanPhone = (phone || '').replace(/\s+/g, '');
  const cleanWhatsapp = (whatsapp || '917356462150').replace(/\D/g, '');

  return (
    <section className="py-10 relative overflow-hidden bg-gradient-to-b from-maroon-dark via-charcoal to-maroon-dark text-cream border-y-2 border-gold/30">
      {/* Subtle Background Glow Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Badge & Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-2">
            <Sparkles size={14} />
            <span>ക്ഷേത്ര ബന്ധപ്പെടൽ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gold tracking-wide drop-shadow-md">
            ബന്ധപ്പെടുക
          </h2>
          <p className="text-cream/80 text-xs sm:text-sm mt-1 max-w-lg mx-auto">
            ക്ഷേത്ര ഭരണസമിതിയുമായി ബന്ധപ്പെടുന്നതിനും വിവരങ്ങൾ അറിയുന്നതിനും
          </p>
        </div>

        {/* Info Grid - 3 Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {/* Card 1: Address */}
          <div className="bg-black/30 backdrop-blur-sm border border-gold/30 hover:border-gold p-5 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-gold/15 group-hover:bg-gold group-hover:text-black text-gold flex items-center justify-center shrink-0 border border-gold/30 transition-all duration-300 shadow-inner">
              <MapPin size={22} />
            </div>
            <div>
              <h3 className="text-gold font-bold text-xs uppercase tracking-wider mb-1">മേൽവിലാസം</h3>
              <p className="text-cream text-xs sm:text-sm font-medium leading-relaxed">
                {address}
              </p>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-black/30 backdrop-blur-sm border border-gold/30 hover:border-gold p-5 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-gold/15 group-hover:bg-gold group-hover:text-black text-gold flex items-center justify-center shrink-0 border border-gold/30 transition-all duration-300 shadow-inner">
              <Phone size={22} />
            </div>
            <div>
              <h3 className="text-gold font-bold text-xs uppercase tracking-wider mb-1">ഫോൺ നമ്പർ</h3>
              <a 
                href={`tel:${cleanPhone}`} 
                className="text-cream group-hover:text-gold text-sm sm:text-base font-bold transition-colors block mt-0.5"
              >
                {phone}
              </a>
              <span className="text-[10px] text-cream/60 block mt-1">പ്രവൃത്തി സമയം: 5:00 AM - 7:30 PM</span>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-black/30 backdrop-blur-sm border border-gold/30 hover:border-gold p-5 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-gold/15 group-hover:bg-gold group-hover:text-black text-gold flex items-center justify-center shrink-0 border border-gold/30 transition-all duration-300 shadow-inner">
              <Mail size={22} />
            </div>
            <div className="overflow-hidden">
              <h3 className="text-gold font-bold text-xs uppercase tracking-wider mb-1">ഇമെയിൽ</h3>
              <a 
                href={`mailto:${email}`} 
                className="text-cream group-hover:text-gold text-xs sm:text-sm font-bold transition-colors block break-all mt-0.5"
              >
                {email}
              </a>
              <span className="text-[10px] text-cream/60 block mt-1">അന്വേഷണങ്ങൾ അയക്കാം</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto pt-2">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl font-bold bg-gold hover:bg-gold-light text-black transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md hover:shadow-gold/20"
          >
            <Compass size={18} />
            <span>ഗൂഗിൾ മാപ്പിൽ വഴി കാണാം</span>
          </a>

          <a
            href={`https://wa.me/${cleanWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md"
          >
            <MessageCircle size={18} />
            <span>വാട്സ്ആപ്പ് വഴി സന്ദേശം അയക്കാം</span>
          </a>
        </div>
      </div>
    </section>
  );
}
