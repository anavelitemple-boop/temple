'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { urlFor } from '@/lib/sanity';

interface GalleryItem {
  title: string;
  image: any;
  categoryName: string;
  categoryId: string;
}

interface GalleryProps {
  items: GalleryItem[];
  isHomePreview?: boolean;
}

export default function Gallery({ items, isHomePreview = false }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = items;
  // If in preview mode, limit to 4 items. Otherwise show all items.
  const displayItems = isHomePreview ? filteredItems.slice(0, 4) : filteredItems;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev > 0) ? prev - 1 : displayItems.length - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev < displayItems.length - 1) ? prev + 1 : 0);
  };

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="ക്ഷേത്ര ദർശനം" 
          subtitle="ആനവേലി ക്ഷേത്രത്തിലെ പ്രധാന ഫോട്ടോകൾ ഇവിടെ കാണാം" 
        />

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayItems.map((item, idx) => {
              let imgUrl = typeof item.image === 'string' ? item.image : urlFor(item.image);
              if (!imgUrl || imgUrl === '') {
                imgUrl = '/temple-photo.jpg';
              }
              return (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="relative h-64 rounded-xl overflow-hidden shadow-sm border border-gold/20 hover:border-gold cursor-pointer group"
                >
                  <Image
                    src={imgUrl}
                    alt={item.title || 'ക്ഷേത്ര ദൃശ്യം'}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-maroon-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-2xl text-cream drop-shadow-md">🔍</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {isHomePreview && filteredItems.length > 4 && (
          <div className="flex justify-center mt-12">
            <Link
              href="/gallery"
              className="px-8 py-3 rounded-full bg-maroon hover:bg-maroon-light text-cream font-bold text-sm border border-gold/30 cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all text-center inline-block"
            >
              കൂടുതൽ ചിത്രങ്ങൾ കാണുക
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-cream hover:text-gold p-2 cursor-pointer z-50"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
            >
              <X size={36} />
            </button>

            {/* Left Nav */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cream hover:text-gold p-2 bg-maroon-dark/50 rounded-full cursor-pointer z-50"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Center Image Content */}
            <div className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center relative z-40" onClick={e => e.stopPropagation()}>
              <div className="relative w-full h-[65vh]">
                {(() => {
                  const currentItem = displayItems[lightboxIndex];
                  let activeUrl = typeof currentItem.image === 'string' ? currentItem.image : urlFor(currentItem.image);
                  if (!activeUrl || activeUrl === '') activeUrl = '/temple-photo.jpg';
                  return (
                    <Image
                      src={activeUrl}
                      alt={currentItem.title}
                      fill
                      priority
                      className="object-contain"
                    />
                  );
                })()}
              </div>
            </div>

            {/* Right Nav */}
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cream hover:text-gold p-2 bg-maroon-dark/50 rounded-full cursor-pointer z-50"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
