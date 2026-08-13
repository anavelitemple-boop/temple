import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { safeFetch, mockData } from '@/lib/sanity';
import { poojasQuery, vazhipadusQuery, siteSettingsQuery } from '@/lib/queries';
import VazhipaduList from '@/components/VazhipaduList';

export const revalidate = 60;

export default async function PoojakalPage() {
  const poojas = await safeFetch<any[]>(poojasQuery, {}, mockData.poojas);
  const vazhipadus = await safeFetch<any[]>(vazhipadusQuery, {}, mockData.vazhipadus);
  const settings = await safeFetch<any>(siteSettingsQuery, {}, mockData.siteSettings);

  const whatsappNum = settings.whatsapp || '919895873935';

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

        <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-20">
          {poojas.map((pooja, index) => (
            <div 
              key={index} 
              className="bg-cream border border-gold/30 rounded-xl p-3.5 sm:p-5 shadow-sm hover:border-gold transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-maroon">{pooja.malayalamName}</h3>
                  <p className="text-[10px] sm:text-xs text-maroon-light/60 font-bold mt-0.5">{pooja.name}</p>
                </div>
                <span className="bg-maroon text-amber-300 text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full whitespace-nowrap">
                  {pooja.time}
                </span>
              </div>
              <p className="text-maroon-light/80 text-xs sm:text-sm mt-2 sm:mt-3 font-semibold leading-relaxed">
                {pooja.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vazhipadu Section */}
        <div id="vazhipadu" className="pt-8">
          <SectionHeading 
            title="വഴിപാടുകൾ" 
            subtitle="ഭക്തജനങ്ങൾക്ക് ചെയ്യാവുന്ന പ്രധാന വഴിപാടുകളും നിരക്കുകളും" 
          />

          <VazhipaduList vazhipadus={vazhipadus} whatsappNum={whatsappNum} />
        </div>

      </div>
    </div>
  );
}
