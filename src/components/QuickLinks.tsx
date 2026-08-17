'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Scroll, Gift, Calendar, Image, FileText, MapPin, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const quickActions = [
  { title: 'പൂജ ബുക്കിംഗ്', desc: 'പൂജകൾ ബുക്ക് ചെയ്യാം', href: '/pooja-booking', icon: Calendar },
  { title: 'ക്ഷേത്ര പൂജകൾ', desc: 'പ്രധാന നിത്യപൂജകൾ', href: '/poojakal', icon: Scroll },
  { title: 'വഴിപാടുകൾ', desc: 'വഴിപാട് വിവരങ്ങൾ', href: '/poojakal#vazhipadu', icon: Gift },
  { title: 'വിശേഷാൽ പൂജകൾ', desc: 'വരാനിരിക്കുന്ന പൂജാകാര്യങ്ങൾ', href: '/special-poojas', icon: Flame },
  { title: 'ഗാലറി', desc: 'ക്ഷേത്ര ദൃശ്യങ്ങൾ', href: '/gallery', icon: Image },
  { title: 'അറിയിപ്പുകൾ', desc: 'പ്രധാന അറിയിപ്പുകൾ', href: '/news', icon: FileText },
  { title: 'വഴി കണ്ടെത്തുക', desc: 'ക്ഷേത്ര ലൊക്കേഷൻ', href: '/contact', icon: MapPin },
];

export default function QuickLinks() {
  return (
    <section className="py-[20px] bg-cream-dark/30 border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {quickActions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link key={idx} href={item.href} className="group">
                <motion.div 
                  className="bg-cream border border-gold/30 hover:border-gold p-4 rounded-xl shadow-sm text-center flex flex-col items-center justify-center h-full transition-all duration-300 hover:shadow-md cursor-pointer relative overflow-hidden"
                  whileHover={{ y: -4 }}
                >
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-full bg-maroon-dark/5 flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-cream transition-colors duration-300 mb-3`}>
                    <Icon size={24} />
                  </div>
                  
                  <h4 className="text-maroon font-bold text-sm tracking-wide mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-maroon-light/70 font-semibold line-clamp-2">
                    {item.desc}
                  </p>

                  {/* Decorative underline */}
                  <div className="w-0 h-[2px] bg-gold group-hover:w-1/2 transition-all duration-300 mt-2" />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

