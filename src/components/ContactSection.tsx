'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { MapPin, Phone, Mail, Compass, MessageCircle } from 'lucide-react';

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
    <section className="py-[20px] bg-cream-dark/25 border-t border-gold/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="ബന്ധപ്പെടുക" 
          subtitle="ക്ഷേത്ര ഭരണസമിതിയുമായി ബന്ധപ്പെടുന്നതിനും വിവരങ്ങൾ അറിയുന്നതിനും" 
        />

        {/* 3 Clean Matching Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
          {/* Card 1: Address */}
          <div className="bg-cream border border-gold/30 hover:border-gold p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-between h-full group">
            <div className="flex flex-col items-center text-center w-full">
              <div className="w-12 h-12 rounded-full bg-maroon-dark/5 text-maroon group-hover:bg-maroon group-hover:text-cream flex items-center justify-center transition-colors duration-300 mb-3 shrink-0">
                <MapPin size={22} />
              </div>
              <h3 className="text-maroon font-bold text-sm tracking-wide mb-1">മേൽവിലാസം</h3>
              <p className="text-maroon-light/80 text-xs sm:text-sm font-semibold leading-relaxed">
                {address}
              </p>
            </div>
            <div className="w-0 h-[2px] bg-gold group-hover:w-1/2 transition-all duration-300 mt-4" />
          </div>

          {/* Card 2: Phone */}
          <div className="bg-cream border border-gold/30 hover:border-gold p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-between h-full group">
            <div className="flex flex-col items-center text-center w-full">
              <div className="w-12 h-12 rounded-full bg-maroon-dark/5 text-maroon group-hover:bg-maroon group-hover:text-cream flex items-center justify-center transition-colors duration-300 mb-3 shrink-0">
                <Phone size={22} />
              </div>
              <h3 className="text-maroon font-bold text-sm tracking-wide mb-1">ഫോൺ നമ്പർ</h3>
              <a 
                href={`tel:${cleanPhone}`} 
                className="text-maroon font-bold text-base hover:text-gold transition-colors inline-block mt-1"
              >
                {phone}
              </a>
            </div>
            <div className="w-0 h-[2px] bg-gold group-hover:w-1/2 transition-all duration-300 mt-4" />
          </div>

          {/* Card 3: Email */}
          <div className="bg-cream border border-gold/30 hover:border-gold p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-between h-full group">
            <div className="flex flex-col items-center text-center w-full">
              <div className="w-12 h-12 rounded-full bg-maroon-dark/5 text-maroon group-hover:bg-maroon group-hover:text-cream flex items-center justify-center transition-colors duration-300 mb-3 shrink-0">
                <Mail size={22} />
              </div>
              <h3 className="text-maroon font-bold text-sm tracking-wide mb-1">ഇമെയിൽ</h3>
              <a 
                href={`mailto:${email}`} 
                className="text-maroon font-bold text-xs sm:text-sm hover:text-gold transition-colors break-all inline-block mt-1"
              >
                {email}
              </a>
            </div>
            <div className="w-0 h-[2px] bg-gold group-hover:w-1/2 transition-all duration-300 mt-4" />
          </div>
        </div>

        {/* Bottom CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 max-w-lg mx-auto">
          <Button 
            href={mapsUrl}
            target="_blank"
            variant="gold"
            className="w-full sm:w-auto flex-1 text-center py-2.5 px-5 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold"
          >
            <Compass size={18} />
            <span>ഗൂഗിൾ മാപ്പ് (Google Maps)</span>
          </Button>

          <a 
            href={`https://wa.me/${cleanWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 py-2.5 px-5 rounded-lg font-extrabold bg-[#25D366] hover:bg-[#1ea34e] text-white transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm shadow-sm"
          >
            <MessageCircle size={18} className="text-white" />
            <span>വാട്സ്ആപ്പ് ചാനൽ</span>
          </a>
        </div>
      </div>
    </section>
  );
}
