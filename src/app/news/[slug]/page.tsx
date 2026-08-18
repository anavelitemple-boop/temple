import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { safeFetch, mockData, urlFor } from '@/lib/sanity';
import { newsBySlugQuery } from '@/lib/queries';
import { Calendar, ChevronLeft } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import PdfDownloadButton from '@/components/PdfDownloadButton';
import NewsDetailClient from '@/components/NewsDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;

  // Fetch article
  let article = await safeFetch<any>(newsBySlugQuery, { slug }, null);

  // Fallback if not found by exact slug
  if (!article) {
    article = await safeFetch<any>(
      `*[_type in ["announcement", "news"] && published != false][0]{
        ...,
        "imageUrl": image.asset->url,
        "pdfUrl": pdfFile.asset->url
      }`,
      {},
      mockData.news[0]
    );
  }

  let rawImg = article?.imageUrl || urlFor(article?.image);
  if (!rawImg || rawImg.startsWith('/images/')) {
    rawImg = 'https://images.unsplash.com/photo-1609137144814-118804c8f5d1?q=80&w=1200';
  }
  const imageUrl = rawImg;
  const displayTitle = article?.malayalamTitle || article?.title || 'അറിയിപ്പ്';
  const displayDate = article?.date 
    ? new Date(article.date).toLocaleDateString('ml-IN', { dateStyle: 'long' }) 
    : '';

  return (
    <div className="py-16 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation & PDF Download button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-1 text-maroon hover:text-gold font-bold text-sm transition-colors"
          >
            <ChevronLeft size={18} />
            <span>അറിയിപ്പുകളിലേക്ക് മടങ്ങാം</span>
          </Link>

          <PdfDownloadButton pdfUrl={article?.pdfUrl} variant="compact" className="hidden md:inline-flex" />
        </div>

        <article className="bg-cream border border-gold/30 rounded-2xl overflow-hidden shadow-sm p-6 md:p-10">
          
          {displayDate && (
            <div className="flex items-center gap-1.5 text-gold-dark text-xs font-bold mb-4">
              <Calendar size={14} />
              <span>{displayDate}</span>
            </div>
          )}

          <h1 className="text-2xl md:text-3xl font-extrabold text-maroon mb-6 leading-tight">
            {displayTitle}
          </h1>

          {/* Large image with mobile view lightbox support */}
          <NewsDetailClient imageUrl={imageUrl} displayTitle={displayTitle} />

          {/* Body Content */}
          <div className="prose max-w-none text-maroon-light font-semibold text-sm md:text-base leading-relaxed space-y-4">
            {article?.description && (
              <p className="whitespace-pre-line text-base">{article.description}</p>
            )}
            {Array.isArray(article?.content) ? (
              article.content.map((block: any, idx: number) => {
                if (block._type === 'block') {
                  return (
                    <p key={idx}>
                      {block.children?.map((child: any) => child.text).join('')}
                    </p>
                  );
                }
                return null;
              })
            ) : (
              typeof article?.content === 'string' && <p>{article.content}</p>
            )}
            {article?.summary && !article?.description && (
              <p>{article.summary}</p>
            )}
          </div>

          {/* PDF Download Section Box (Only shown if Admin uploaded a PDF) */}
          {article?.pdfUrl && (
            <div className="mt-10 pt-6 border-t border-gold/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-cream-dark/30 p-5 rounded-xl border border-gold/20">
              <div>
                <h4 className="font-bold text-maroon text-base">രേഖകൾ / മാധ്യമ ഫയലുകൾ</h4>
                <p className="text-xs text-maroon-light font-medium mt-0.5">
                  ഈ അറിയിപ്പുമായി ബന്ധപ്പെട്ട PDF രേഖ ഇവിടെ നിന്നും ഡൗൺലോഡ് ചെയ്യാം.
                </p>
              </div>
              <PdfDownloadButton pdfUrl={article.pdfUrl} variant="primary" />
            </div>
          )}

        </article>

      </div>
    </div>
  );
}

