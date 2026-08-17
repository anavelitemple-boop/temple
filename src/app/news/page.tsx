import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { safeFetch, mockData, urlFor } from '@/lib/sanity';
import { newsQuery } from '@/lib/queries';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronRight } from 'lucide-react';
import PdfDownloadButton from '@/components/PdfDownloadButton';

export const revalidate = 60;

export default async function NewsPage() {
  const newsList = await safeFetch<any[]>(newsQuery, {}, []);

  return (
    <div className="py-16 bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title="വാർത്തകളും അറിയിപ്പുകളും" 
          subtitle="ആനവേലി ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട സമഗ്ര വിവരങ്ങളും പ്രധാന തീരുമാനങ്ങളും" 
        />

        <div className="space-y-8 mt-10">
          {newsList.length === 0 ? (
            <div className="text-center py-12 text-maroon-light font-bold">
              അറിയിപ്പുകൾ ലഭ്യമല്ല
            </div>
          ) : (
            newsList.map((item, idx) => {
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
                  {/* Image */}
                  <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 bg-maroon-dark/10 rounded-xl overflow-hidden">
                    <Image
                      src={imgUrl}
                      alt={displayTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, 250px"
                      className="object-cover"
                    />
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
          }))}
        </div>

      </div>
    </div>
  );
}

