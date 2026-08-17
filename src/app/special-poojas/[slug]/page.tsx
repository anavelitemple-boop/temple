import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { safeFetch, urlFor } from '@/lib/sanity';
import { specialPoojaBySlugQuery } from '@/lib/queries';
import { Calendar, ChevronLeft, Flame } from 'lucide-react';
import PdfDownloadButton from '@/components/PdfDownloadButton';
import { defaultSpecialPoojas } from '../page';

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export default async function SpecialPoojaDetailPage({ params }: Props) {
  const { slug } = await params;

  // Fetch special pooja detail from Sanity CMS
  let item = await safeFetch<any>(specialPoojaBySlugQuery, { slug }, null);

  // Fallback to default list item if not found in CMS
  if (!item) {
    item = defaultSpecialPoojas.find(
      (p) => p.slug === slug || p._id === slug
    ) || defaultSpecialPoojas[0];
  }

  let rawImg = item?.imageUrl || urlFor(item?.image);
  if (!rawImg || rawImg.startsWith('/images/')) {
    rawImg = 'https://images.unsplash.com/photo-1609137144814-118804c8f5d1?q=80&w=1200';
  }
  const imageUrl = rawImg;
  const displayTitle = item?.malayalamTitle || item?.title || 'വിശേഷാൽ പൂജ';
  const displayDate = item?.date || 'വിശേഷാൽ ദിനം';

  return (
    <div className="py-16 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation & PDF Download button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link 
            href="/special-poojas" 
            className="inline-flex items-center gap-1 text-maroon hover:text-gold font-bold text-sm transition-colors"
          >
            <ChevronLeft size={18} />
            <span>വിശേഷാൽ പൂജകളിലേക്ക് മടങ്ങാം</span>
          </Link>

          <PdfDownloadButton pdfUrl={item?.pdfUrl} variant="compact" className="hidden md:inline-flex" />
        </div>

        <article className="bg-cream border border-gold/30 rounded-2xl overflow-hidden shadow-sm p-6 md:p-10">
          
          {displayDate && (
            <div className="flex items-center gap-1.5 text-gold-dark text-xs font-bold mb-4">
              <Flame size={15} />
              <span>{displayDate}</span>
            </div>
          )}

          <h1 className="text-2xl md:text-3xl font-extrabold text-maroon mb-6 leading-tight">
            {displayTitle}
          </h1>

          {/* Featured Image */}
          <div className="relative w-full h-[40vh] md:h-[50vh] rounded-xl overflow-hidden bg-maroon-dark/10 mb-8 border border-gold/20">
            <Image
              src={imageUrl}
              alt={displayTitle}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Detailed Content */}
          <div className="prose max-w-none text-maroon-light font-semibold text-sm md:text-base leading-relaxed space-y-4">
            {item?.description && (
              <p className="whitespace-pre-line text-base">{item.description}</p>
            )}
            {item?.summary && !item?.description && (
              <p className="text-base">{item.summary}</p>
            )}
          </div>

          {/* PDF Download Section Box (Only shown if Admin uploaded a PDF) */}
          {item?.pdfUrl && (
            <div className="mt-10 pt-6 border-t border-gold/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-cream-dark/30 p-5 rounded-xl border border-gold/20">
              <div>
                <h4 className="font-bold text-maroon text-base">രേഖകൾ / മാധ്യമ ഫയലുകൾ</h4>
                <p className="text-xs text-maroon-light font-medium mt-0.5">
                  ഈ വിശേഷാൽ പൂജയുമായി ബന്ധപ്പെട്ട PDF രേഖ ഇവിടെ നിന്നും ഡൗൺലോഡ് ചെയ്യാം.
                </p>
              </div>
              <PdfDownloadButton pdfUrl={item.pdfUrl} title="പൂജാ വിവരങ്ങളുടെ PDF" variant="primary" />
            </div>
          )}

        </article>

      </div>
    </div>
  );
}
