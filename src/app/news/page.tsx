import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { safeFetch, mockData, urlFor } from '@/lib/sanity';
import { newsQuery } from '@/lib/queries';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronRight } from 'lucide-react';

export const revalidate = 60;

export default async function NewsPage() {
  const newsList = await safeFetch<any[]>(newsQuery, {}, mockData.news);

  return (
    <div className="py-16 bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title="വാർത്തകളും അറിയിപ്പുകളും" 
          subtitle="ആനവേലി ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട സമഗ്ര വിവരങ്ങളും പ്രധാന തീരുമാനങ്ങളും" 
        />

        <div className="space-y-8 mt-10">
          {newsList.map((item, idx) => {
            const slug = item.slug?.current || item.slug || 'announcement';
            const imgUrl = urlFor(item.image) || 'https://images.unsplash.com/photo-1609137144814-118804c8f5d1?q=80&w=600';
            
            return (
              <div 
                key={idx} 
                className="bg-cream border border-gold/25 hover:border-gold rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 p-4 md:p-6"
              >
                {/* Image */}
                <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 bg-maroon-dark/10 rounded-xl overflow-hidden">
                  <Image
                    src={imgUrl}
                    alt={item.malayalamTitle || item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 250px"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-1.5 text-gold-dark text-xs font-bold mb-3">
                      <Calendar size={14} />
                      <span>{new Date(item.date).toLocaleDateString('ml-IN', { dateStyle: 'medium' })}</span>
                    </div>

                    <h3 className="text-xl font-bold text-maroon mb-3">
                      {item.malayalamTitle || item.title}
                    </h3>

                    <p className="text-maroon-light/80 text-sm font-semibold line-clamp-3 leading-relaxed mb-4">
                      {item.summary}
                    </p>
                  </div>

                  <div>
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

      </div>
    </div>
  );
}
