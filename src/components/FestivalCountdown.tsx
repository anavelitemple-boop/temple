'use client';

import React, { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

interface FestivalCountdownProps {
  targetDate?: string;
  festivalName?: string;
}

export default function FestivalCountdown({ 
  targetDate = '2026-02-15T08:00:00.000Z', 
  festivalName = 'ആനവേലി ക്ഷേത്ര പെരുന്നാൾ' 
}: FestivalCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isCompleted: false,
      };
    };

    // Initial run
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="bg-maroon-dark/95 border-2 border-gold/60 p-6 rounded-2xl shadow-xl max-w-md w-full text-center text-cream gold-glow relative overflow-hidden backdrop-blur-md">
      {/* Decorative Traditional Lamp */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3">
        <span className="text-xl">🪔</span>
      </div>

      <h3 className="text-gold font-bold text-lg mb-4 tracking-wider">
        {festivalName}
      </h3>
      
      {timeLeft.isCompleted ? (
        <div className="py-4 text-xl font-bold text-gold">
          പെരുന്നാൾ ചടങ്ങുകൾ നടന്നുകൊണ്ടിരിക്കുന്നു / സമാപിച്ചു!
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 md:gap-4 justify-center">
          <div className="bg-maroon p-2 md:p-3 rounded-lg border border-gold/25">
            <div className="text-2xl md:text-3xl font-extrabold text-gold">{timeLeft.days}</div>
            <div className="text-[10px] md:text-xs text-cream/70 mt-1 font-semibold">ദിവസം</div>
          </div>
          <div className="bg-maroon p-2 md:p-3 rounded-lg border border-gold/25">
            <div className="text-2xl md:text-3xl font-extrabold text-gold">{timeLeft.hours}</div>
            <div className="text-[10px] md:text-xs text-cream/70 mt-1 font-semibold">മണിക്കൂർ</div>
          </div>
          <div className="bg-maroon p-2 md:p-3 rounded-lg border border-gold/25">
            <div className="text-2xl md:text-3xl font-extrabold text-gold">{timeLeft.minutes}</div>
            <div className="text-[10px] md:text-xs text-cream/70 mt-1 font-semibold">മിനിറ്റ്</div>
          </div>
          <div className="bg-maroon p-2 md:p-3 rounded-lg border border-gold/25">
            <div className="text-2xl md:text-3xl font-extrabold text-gold">{timeLeft.seconds}</div>
            <div className="text-[10px] md:text-xs text-cream/70 mt-1 font-semibold">സെക്കൻഡ്</div>
          </div>
        </div>
      )}
      <p className="text-[10px] md:text-xs text-gold/80 mt-4 italic">
        ഉത്സവ കൊടിയേറ്റ് തീയതി: {new Date(targetDate).toLocaleDateString('ml-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
    </div>
  );
}
