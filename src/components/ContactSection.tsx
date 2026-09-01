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
    <section className="py-[20px] bg-cream border-t border-gold/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="ബന്ധപ്പെടുക" 
          subtitle="ക്ഷേത്ര ഭരണസമിതിയുമായി ബന്ധപ്പെടുന്നതിന്" 
        />

        <div className="mt-8 bg-cream border border-gold/30 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Address */}
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gold/5 border border-gold/20">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark mb-3">
                <MapPin size={22} />
              </div>
              <h4 className="text-xs font-bold text-maroon-light uppercase tracking-wider mb-1">മേൽവിലാസം</h4>
              <p className="text-maroon text-xs sm:text-sm font-bold leading-relaxed">
                {address}
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gold/5 border border-gold/20">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark mb-3">
                <Phone size={22} />
              </div>
              <h4 className="text-xs font-bold text-maroon-light uppercase tracking-wider mb-1">ഫോൺ നമ്പർ</h4>
              <a href={`tel:${cleanPhone}`} className="text-maroon text-sm sm:text-base font-bold hover:text-gold transition-colors">
                {phone}
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gold/5 border border-gold/20">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark mb-3">
                <Mail size={22} />
              </div>
              <h4 className="text-xs font-bold text-maroon-light uppercase tracking-wider mb-1">ഇമെയിൽ</h4>
              <a href={`mailto:${email}`} className="text-maroon text-xs sm:text-sm font-bold hover:text-gold transition-colors break-all">
                {email}
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-gold/20 flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <Button 
              href={mapsUrl}
              target="_blank"
              variant="gold"
              className="flex-1 text-center py-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold"
            >
              <Compass size={18} />
              <span>ഗൂഗിൾ മാപ്പ് (Google Maps)</span>
            </Button>

            <a 
              href={`https://wa.me/${cleanWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-lg font-extrabold bg-[#25D366] hover:bg-[#1ea34e] text-white transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm shadow-sm"
            >
              <MessageCircle size={18} className="text-white" />
              <span>വാട്സ്ആപ്പ് ചാനൽ</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
