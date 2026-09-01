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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="ബന്ധപ്പെടുക" 
          subtitle="ക്ഷേത്ര ഭരണസമിതിയുമായി ബന്ധപ്പെടുന്നതിനും വഴി കണ്ടെത്തുന്നതിനും" 
        />

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Info Details & Actions */}
          <div className="bg-cream border border-gold/30 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-maroon mb-6 border-b border-gold/20 pb-2 flex items-center gap-2">
                <span>🪔</span>
                <span>ക്ഷേത്ര വിവരങ്ങൾ</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-maroon-light uppercase tracking-wider">മേൽവിലാസം</h4>
                    <p className="text-maroon text-sm font-bold mt-1 leading-relaxed">
                      {address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-maroon-light uppercase tracking-wider">ഫോൺ നമ്പർ</h4>
                    <a href={`tel:${cleanPhone}`} className="text-maroon text-base font-bold mt-1 inline-block hover:text-gold transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-maroon-light uppercase tracking-wider">ഇമെയിൽ</h4>
                    <a href={`mailto:${email}`} className="text-maroon text-base font-bold mt-1 inline-block hover:text-gold transition-colors">
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Buttons */}
            <div className="mt-8 pt-6 border-t border-gold/20 flex flex-col sm:flex-row gap-3">
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

          {/* Interactive Map Embed */}
          <div className="bg-cream border border-gold/30 rounded-2xl overflow-hidden shadow-sm h-[320px] md:h-auto relative min-h-[300px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.3113941457193!2d76.360155!3d9.379469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089c78a362a5bd%3A0xb28c27e59232eb78!2sKoppara%20Anavelil%20Sree%20Devi%20Temple!5e0!3m2!1sen!2sin!4v1723500000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              title="Koppara Anavelil Sree Devi Temple Location Map"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
