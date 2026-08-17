'use client';

import React from 'react';
import { FileText, Download } from 'lucide-react';

interface PdfDownloadButtonProps {
  pdfUrl?: string | null;
  title?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'compact';
}

export default function PdfDownloadButton({
  pdfUrl,
  title = '📄 PDF ഡൗൺലോഡ്',
  className = '',
  variant = 'primary',
}: PdfDownloadButtonProps) {
  // Only render button if admin has uploaded a PDF file
  if (!pdfUrl) {
    return null;
  }

  if (variant === 'compact') {
    return (
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        download
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer ${className}`}
        title="PDF ഡൗൺലോഡ് ചെയ്യുക"
      >
        <FileText size={14} />
        <span>PDF ഡൗൺലോഡ്</span>
        <Download size={14} />
      </a>
    );
  }

  if (variant === 'secondary') {
    return (
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        download
        className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm cursor-pointer ${className}`}
      >
        <FileText size={16} />
        <span>{title}</span>
        <Download size={16} />
      </a>
    );
  }

  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      download
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer ${className}`}
    >
      <FileText size={18} />
      <span>{title}</span>
      <Download size={16} />
    </a>
  );
}

