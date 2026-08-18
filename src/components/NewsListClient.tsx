'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronRight, ZoomIn } from 'lucide-react';
import PdfDownloadButton from '@/components/PdfDownloadButton';
import NoticeImageModal from '@/components/NoticeImageModal';
import { urlFor } from '@/lib/sanity';

interface NewsListClientProps {
  newsList: any[];
}

export default function NewsListClient({ newsList }: NewsListClientProps) {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  if (!newsList || newsList.length === 0) {
    return (
      <div className="text-center py-12 text-maroon-light font-bold">
        അറിയിപ്പുകൾ ലഭ്യമല്ല
      </div>
    );
  }

  return (
    <>
      <div className="space-y-8 mt-10">
        {newsList.map((item, idx) => {
          const slug = item.slug?.current || item.slug || item._id;
          const imgUrl = item.imageUrl || urlFor(item.image) || 'https://images.unsplash.com/photo-1609137144814-118804c8f5d1?q=80&w=600';
          const displayTitle = item.malayalamTitle || item.title || 'പ്രധാന അറിയിപ്പ്';
          const displaySummary = item.summary || item.description || '';
          const displayDate = item.date 
            ? new Date(item.date).toLocaleDateString('ml-IN', { dateStyle: 'medium' }) 
            : '';
          
          return (
            <div 
              key={idx} 
              className="bg-cream border border-gold/25 hover:border-gold rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 p-4 md:p-6"
            >
              {/* Image Container with Mobile Lightbox Support */}
              <div 
                className="relative w-full md:w-64 h-56 sm:h-48 md:h-auto min-h-[200px] shrink-0 bg-maroon-dark/10 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage({ url: imgUrl, title: displayTitle })}
              >
                <Image
                  src={imgUrl}
                  alt={displayTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, 250px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-maroon-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 text-cream text-xs font-bold drop-shadow">
                  <ZoomIn size={18} className="text-gold" />
                  <span>ചിത്രം കാണാം</span>
                </div>
                <div className="absolute bottom-2 right-2 sm:hidden bg-black/60 backdrop-blur-sm text-gold px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                  <ZoomIn size={12} />
                  <span>ചിത്രം കാണാം</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  {displayDate && (
                    <div className="flex items-center gap-1.5 text-gold-dark text-xs font-bold mb-3">
                      <Calendar size={14} />
                      <span>{displayDate}</span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-maroon mb-3">
                    {displayTitle}
                  </h3>

                  {displaySummary && (
                    <p className="text-maroon-light/80 text-sm font-semibold line-clamp-3 leading-relaxed mb-4">
                      {displaySummary}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <PdfDownloadButton pdfUrl={item.pdfUrl} variant="compact" />
                  <Link 
                    href={`/news/${slug}`}
                    className="inline-flex items-center gap-1.5 text-maroon hover:text-gold font-bold text-sm transition-colors"
                  >
                    <span>വിശദമായി വായിക്കാം</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <NoticeImageModal 
        isOpen={Boolean(selectedImage)} 
        imageUrl={selectedImage?.url || null}
        title={selectedImage?.title}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
