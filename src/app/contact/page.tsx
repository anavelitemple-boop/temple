import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { safeFetch, mockData } from '@/lib/sanity';
import { siteSettingsQuery } from '@/lib/queries';
import { Phone, Mail, MapPin, Compass } from 'lucide-react';
import Button from '@/components/Button';

export const revalidate = 60;

export default async function ContactPage() {
  const settings = await safeFetch<any>(siteSettingsQuery, {}, mockData.siteSettings);
  const mapsUrl = (settings?.mapsLink && settings.mapsLink !== 'https://maps.google.com' && settings.mapsLink.trim() !== '') 
    ? settings.mapsLink 
    : 'https://maps.app.goo.gl/WY18Ci7aZHFzmEUD8';

  return (
    <div className="py-16 bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title="ബന്ധപ്പെടുക" 
          subtitle="ക്ഷേത്ര ഭരണസമിതിയുമായി ബന്ധപ്പെടുന്നതിനും വഴി കണ്ടെത്തുന്നതിനും" 
        />

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Info Details */}
          <div className="bg-cream border border-gold/30 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-maroon mb-6 border-b border-gold/20 pb-2">
                വിവരങ്ങൾ
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-maroon-light">മേൽവിലാസം</h4>
                    <p className="text-maroon text-sm font-bold mt-1 leading-relaxed">
                      {settings.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-maroon-light">ഫോൺ നമ്പർ</h4>
                    <a href={`tel:${settings.phone}`} className="text-maroon text-base font-bold mt-1 inline-block hover:text-gold transition-colors">
                      {settings.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-maroon-light">ഇമെയിൽ</h4>
                    <a href={`mailto:${settings.email}`} className="text-maroon text-base font-bold mt-1 inline-block hover:text-gold transition-colors">
                      {settings.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-gold/20 flex flex-col gap-3">
              <Button 
                href={mapsUrl}
                target="_blank"
                variant="gold"
                className="w-full text-center py-3 flex items-center justify-center gap-2"
              >
                <Compass size={18} />
                <span>വഴി കണ്ടെത്തുക (Google Maps)</span>
              </Button>

              <a 
                href={`https://wa.me/${settings.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-lg font-extrabold bg-gold hover:bg-gold-dark text-black transition-colors duration-200 block shadow-sm border border-gold-dark/30"
              >
                💬 വാട്സ്ആപ്പിൽ ബന്ധപ്പെടുക
              </a>
            </div>
          </div>

          {/* Interactive Map Block */}
          <div className="bg-cream border border-gold/30 rounded-2xl overflow-hidden shadow-sm h-[400px] md:h-auto relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.3113941457193!2d76.360155!3d9.379469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089c78a362a5bd%3A0xb28c27e59232eb78!2sKoppara%20Anavelil%20Sree%20Devi%20Temple!5e0!3m2!1sen!2sin!4v1723500000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              title="Koppara Anavelil Sree Devi Temple Location Map"
              className="absolute inset-0"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
