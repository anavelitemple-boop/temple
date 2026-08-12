import React from 'react';

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      {/* Brass Lamp Spinner Animation */}
      <div className="relative w-16 h-16 flex items-center justify-center animate-pulse">
        <span className="text-4xl text-gold">🪔</span>
      </div>
      <p className="text-maroon font-bold text-lg animate-pulse">ലോഡ് ചെയ്യുന്നു...</p>
    </div>
  );
}
