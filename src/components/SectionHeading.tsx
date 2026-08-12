import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <div className="text-center mb-10 flex flex-col items-center">
      {/* Decorative Traditional Brass Lamp Motif */}
      <div className="flex items-center gap-2 mb-2">
        <div className={`h-[1px] w-12 ${light ? 'bg-gold/50' : 'bg-maroon/30'}`} />
        <span className="text-gold text-xl">🪔</span>
        <div className={`h-[1px] w-12 ${light ? 'bg-gold/50' : 'bg-maroon/30'}`} />
      </div>
      
      <h2 className={`text-3xl md:text-4xl font-bold tracking-wide ${light ? 'text-cream' : 'text-maroon'}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`mt-2 text-sm md:text-base max-w-xl mx-auto font-medium ${light ? 'text-gold' : 'text-maroon-light/80'}`}>
          {subtitle}
        </p>
      )}
      
      <div className="mt-3 flex items-center justify-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
        <span className="w-3 h-1.5 rounded-full bg-gold" />
        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
      </div>
    </div>
  );
}
