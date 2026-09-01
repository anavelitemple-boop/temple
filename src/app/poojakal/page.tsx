import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { safeFetch, mockData } from '@/lib/sanity';
import { poojasQuery } from '@/lib/queries';

export const revalidate = 60;

export const metadata = {
  title: 'ക്ഷേത്ര പൂജകൾ',
  description: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിലെ നിത്യപൂജകളുടെയും വിശേഷാൽ പൂജകളുടെയും സമയക്രമവും വിവരങ്ങളും.',
};

export default async function PoojakalPage() {
  const poojas = await safeFetch<any[]>(poojasQuery, {}, mockData.poojas);

  return (
    <div className="py-16 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Poojas Section */}
        <SectionHeading 
          title="ക്ഷേത്ര പൂജകൾ" 
          subtitle="നിത്യപൂജകളുടെയും വിശേഷാൽ പൂജകളുടെയും സമയക്രമം" 
        />
        
        {/* Special Pooja Notes */}
        <div className="bg-maroon-dark text-cream border-2 border-gold/45 rounded-xl p-5 mb-10 shadow-md text-center max-w-3xl mx-auto">
          <span className="text-xl">📢</span>
          <h4 className="text-gold font-bold text-base mt-2">വെള്ളിയാഴ്ച പൂജകൾ</h4>
          <p className="text-cream/90 text-sm mt-2 leading-relaxed font-semibold">
            ക്ഷേത്രത്തിൽ എല്ലാ വെള്ളിയാഴ്ചകളിലും വിശേഷാൽ പൂജകളും ഭദ്രകാളി ദേവിക്ക് പ്രത്യേക വഴിപാടുകളും ഉണ്ടായിരിക്കുന്നതാണ്.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-12">
          {poojas.map((pooja, index) => (
            <div 
              key={index} 
              className="bg-cream border border-gold/30 rounded-xl p-3.5 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start gap-2.5 hover:border-gold h-full"
            >
              {/* Lamp Icon Wrapper */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-100/60 border border-emerald-300 flex items-center justify-center text-sm sm:text-lg shrink-0">
                🪔
              </div>

              <div className="flex-grow w-full flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-maroon leading-tight">
                    {pooja.malayalamName}
                  </h3>
                  <div className="mt-1">
                    <span className="bg-black text-amber-400 text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md whitespace-nowrap inline-block">
                      {pooja.time}
                    </span>
                  </div>
                  {pooja.description && (
                    <p className="text-maroon-light/80 text-xs sm:text-sm mt-2 font-medium leading-relaxed">
                      {pooja.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
