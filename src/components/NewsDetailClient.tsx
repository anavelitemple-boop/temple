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
        className="relative w-full h-[55vh] max-h-[550px] min-h-[260px] rounded-xl overflow-hidden bg-maroon-dark/20 mb-8 border border-gold/20 cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={imageUrl}
          alt={displayTitle}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-contain sm:object-cover transition-transform duration-500 group-hover:scale-102"
        />
        {/* Overlay Hint */}
        <div className="absolute inset-0 bg-maroon-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-cream text-sm font-bold drop-shadow">
          <ZoomIn size={20} className="text-gold" />
          <span>വലിയ ചിത്രമായി കാണാം (Full View)</span>
        </div>
        {/* Mobile Badge */}
        <div className="absolute bottom-3 right-3 sm:hidden bg-black/70 backdrop-blur-sm text-gold px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
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
