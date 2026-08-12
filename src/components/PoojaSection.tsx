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
  // Take first 4 active poojas for preview
  const activePoojas = poojas.filter(p => p.active !== false).slice(0, 4);

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="ഇന്നത്തെ പൂജകൾ" 
          subtitle="നിത്യേന ക്ഷേത്രത്തിൽ നടന്നുപോരുന്ന പ്രധാന പൂജകളും സമയവിവരങ്ങളും" 
        />

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {activePoojas.map((pooja, index) => (
            <div 
              key={index} 
              className="bg-cream border border-gold/30 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 hover:border-gold"
            >
              {/* Lamp Icon Wrapper */}
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-lg shrink-0 mt-1">
                🪔
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-lg font-bold text-maroon">
                    {pooja.malayalamName}
                  </h3>
                  <span className="bg-maroon-dark text-amber-300 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                    {pooja.time}
                  </span>
                </div>
                {pooja.description && (
                  <p className="text-maroon-light/80 text-sm mt-2 font-medium leading-relaxed">
                    {pooja.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/poojakal" variant="primary">
            എല്ലാ പൂജകളും കാണാം
          </Button>
        </div>
      </div>
    </section>
  );
}
