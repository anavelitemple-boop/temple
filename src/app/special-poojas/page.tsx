import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Calendar, Award, Compass, Flame } from 'lucide-react';

export const metadata = {
  title: 'വിശേഷ ചടങ്ങുകൾ | Anaveli Temple',
  description: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിലെപ്രത്യേക പൂജകളും ചടങ്ങുകളും.',
};

const specialEvents = [
  {
    title: 'ഉത്സവ ചടങ്ങുകൾ (Festival Rituals)',
    icon: Flame,
    items: [
      {
        name: 'കളമെഴുത്തും പാട്ടും',
        desc: 'ഭദ്രകാളി ദേവിയുടെ രൂപം പ്രകൃതിദത്തമായ പഞ്ചവർണ്ണപ്പൊടികൾ കൊണ്ട് വരച്ച് ഭക്തിനിർഭരമായ പാട്ടുകളോടെയുള്ള പരമ്പരാഗത ചടങ്ങ്.',
        time: 'വാർഷിക ഉത്സവം'
      },
      {
        name: 'പൊങ്കാല സമർപ്പണം',
        desc: 'ക്ഷേത്ര സന്നിധിയിൽ ഭക്തരായ സ്ത്രീകൾ മൺകലങ്ങളിൽ ദേവിക്ക് പ്രിയപ്പെട്ട പൊങ്കാല നിവേദ്യം തയ്യാറാക്കി സമർപ്പിക്കുന്ന പവിത്രമായ ചടങ്ങ്.',
        time: 'ഉത്സവ ദിനം'
      },
      {
        name: 'താലപ്പൊലി ഘോഷയാത്ര',
        desc: 'മംഗളകരമായ ജീവിതത്തിനും ഐശ്വര്യത്തിനുമായി ഭക്തർ താലമേന്തി ദേവിയെ എഴുന്നള്ളിക്കുന്ന മനോഹരമായ ചടങ്ങ്.',
        time: 'ഉത്സവ സന്ധ്യ'
      }
    ]
  },
  {
    title: 'പ്രത്യേക പ്രതിമാസ പൂജകൾ (Monthly Special Poojas)',
    icon: Calendar,
    items: [
      {
        name: 'ആയില്യ പൂജ',
        desc: 'നാഗദൈവങ്ങൾക്കായി എല്ലാ ആയില്യം നക്ഷത്രത്തിലും വിശേഷാൽ അഭിഷേകവും പൂജകളും ചടങ്ങുകളും.',
        time: 'എല്ലാ ആയില്യം നക്ഷത്രത്തിലും'
      },
      {
        name: 'ഭഗവതി സേവ',
        desc: 'സർവ്വ ഐശ്വര്യത്തിനും ദുരിതനിവാരണത്തിനുമായി സന്ധ്യയ്ക്ക് ദേവിക്ക് സമർപ്പിക്കുന്ന വിശേഷാൽ തന്ത്രി പൂജ.',
        time: 'എല്ലാ കർക്കടക മാസത്തിലും'
      },
      {
        name: 'വിഷുക്കണി ദർശനം',
        desc: 'മേടമാസ ഒന്നാം തീയതി പുലർച്ചെ ഐശ്വര്യ പൂർണ്ണമായ വിഷുക്കണി ദർശനവും കൈനീട്ട വിതരണവും.',
        time: 'വിഷു ദിനം'
      }
    ]
  }
];

export default function SpecialPoojasPage() {
  return (
    <div className="py-16 bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title="പ്രത്യേക പൂജകളും ചടങ്ങുകളും" 
          subtitle="ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിലെ പ്രധാന വാർഷിക ഉത്സവ ചടങ്ങുകളും വിശേഷാൽ പ്രതിമാസ പൂജകളും" 
        />

        <div className="space-y-12 mt-12">
          {specialEvents.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx} className="bg-cream border border-gold/30 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 border-b border-gold/20 pb-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-maroon/5 text-gold border border-gold/20">
                    <Icon size={22} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-maroon">
                    {section.title}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx}
                      className="bg-cream-dark/20 border border-gold/15 rounded-xl p-5 hover:border-gold hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-2 py-0.5 rounded-full mb-3">
                          {item.time}
                        </span>
                        <h3 className="text-lg font-bold text-black mb-2">
                          {item.name}
                        </h3>
                        <p className="text-maroon-light/80 text-xs sm:text-sm font-medium leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
