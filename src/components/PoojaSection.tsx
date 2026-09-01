import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';

interface Pooja {
  name: string;
  malayalamName: string;
  time: string;
  price?: number;
  description?: string;
  active?: boolean;
}

interface PoojaSectionProps {
  poojas: Pooja[];
}

export default function PoojaSection({ poojas }: PoojaSectionProps) {
  // Default fixed 4 poojas order as requested
  const defaultFixedPoojas: Pooja[] = [
    { name: 'Nirmalya Darshanam', malayalamName: 'നിർമ്മാല്യ ദർശനം', time: '06:00 AM', description: 'പള്ളിയുണർവിനു ശേഷമുള്ള ദേവിയുടെ ആദ്യ ദർശനം.' },
    { name: 'Deeparadhana', malayalamName: 'ദീപാരാധന', time: '06:30 PM', description: 'സന്ധ്യാസമയത്തെ കർപ്പൂര ദീപ ദർശനം.' },
    { name: 'Ganapathy Homam', malayalamName: 'ഗണപതി ഹോമം', time: '07:00 AM', description: 'വിഘ്നനിവാരണത്തിനായി വിഘ്നേശ്വരന് സമർപ്പിക്കുന്ന ഹോമം.' },
    { name: 'Athazha Pooja', malayalamName: 'അത്താഴപൂജ', time: '07:30 PM', description: 'രാത്രി നടയടയ്ക്കുന്നതിന് മുൻപുള്ള അവസാന പൂജ.' },
  ];

  // If poojas prop comes from Sanity CMS, prioritize matching CMS items or fallback to fixed items
  const displayPoojas = defaultFixedPoojas.map((fixedItem) => {
    const matched = poojas.find(
      (p) => p.malayalamName?.trim() === fixedItem.malayalamName || p.name?.toLowerCase() === fixedItem.name.toLowerCase()
    );
    return matched || fixedItem;
  });

  return (
    <section className="py-[20px] bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="ക്ഷേത്ര പൂജകൾ" 
          subtitle="നിത്യേന ക്ഷേത്രത്തിൽ നടന്നുപോരുന്ന പ്രധാന പൂജകളും സമയവിവരങ്ങളും" 
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-8">
          {displayPoojas.map((pooja, index) => (
            <div 
              key={index} 
              className="bg-cream border border-gold/30 rounded-xl p-3.5 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start gap-2.5 hover:border-gold"
            >
              {/* Lamp Icon Wrapper */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-100/60 border border-emerald-300 flex items-center justify-center text-sm sm:text-lg shrink-0">
                🪔
              </div>
              
              <div className="flex-grow w-full">
                <h3 className="text-sm sm:text-lg font-bold text-maroon">
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
          ))}
        </div>

        <div className="text-center mt-8">
          <Button href="/poojakal" variant="primary">
            ക്ഷേത്ര പൂജകൾ കാണാം
          </Button>
        </div>
      </div>
    </section>
  );
}
