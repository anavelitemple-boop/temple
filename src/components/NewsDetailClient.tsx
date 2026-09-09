'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';
import NoticeImageModal from '@/components/NoticeImageModal';

interface NewsDetailClientProps {
  imageUrl: string;
  displayTitle: string;
}

export default function NewsDetailClient({ imageUrl, displayTitle }: NewsDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="relative w-full rounded-2xl overflow-hidden mb-8 border border-gold/30 bg-maroon-dark/15 cursor-pointer group shadow-md flex items-center justify-center min-h-[280px] sm:min-h-[380px] h-[50vh] max-h-[520px]"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Soft Ambient Blurred Backdrop for seamless letterboxing */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-2xl scale-110 opacity-40 pointer-events-none"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {/* Main Image */}
        <Image
          src={imageUrl}
          alt={displayTitle}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-contain p-2 relative z-10 transition-transform duration-500 group-hover:scale-[1.02] drop-shadow-xl"
        />

        {/* Overlay Hint */}
        <div className="absolute inset-0 z-20 bg-maroon-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-cream text-sm font-bold drop-shadow">
          <ZoomIn size={20} className="text-gold" />
          <span>വലിയ ചിത്രമായി കാണാം (Full View)</span>
        </div>
        {/* Mobile Badge */}
        <div className="absolute bottom-3 right-3 z-20 sm:hidden bg-black/70 backdrop-blur-sm text-gold px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
          <ZoomIn size={14} />
          <span>വലിയ ചിത്രം കാണാം</span>
        </div>
      </div>

      <NoticeImageModal 
        isOpen={isModalOpen}
        imageUrl={imageUrl}
        title={displayTitle}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
