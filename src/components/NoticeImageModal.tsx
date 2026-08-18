'use client';

import React from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NoticeImageModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  title?: string;
  onClose: () => void;
}

export default function NoticeImageModal({ isOpen, imageUrl, title, onClose }: NoticeImageModalProps) {
  if (!isOpen || !imageUrl) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Header Bar */}
        <div 
          className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-cream z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2 max-w-[80%]">
            <ZoomIn size={18} className="text-gold shrink-0" />
            <h4 className="text-sm font-bold truncate text-cream">
              {title || 'പ്രധാന അറിയിപ്പ് ചിത്രം'}
            </h4>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-maroon/60 hover:bg-maroon text-cream hover:text-gold transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Full Image Container */}
        <div 
          className="relative max-w-4xl max-h-[85vh] w-full h-[75vh] flex items-center justify-center p-2 mt-10"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={imageUrl}
            alt={title || 'Notice Image'}
            fill
            sizes="100vw"
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* Mobile helper hint */}
        <div className="absolute bottom-4 text-center text-xs text-cream/70 bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
          പൂർണ്ണ വിവരങ്ങൾക്ക് ചിത്രം സൂം ചെയ്യാം / ടാപ്പ് ചെയ്യുക
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
