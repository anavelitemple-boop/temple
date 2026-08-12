import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { safeFetch, mockData, urlFor } from '@/lib/sanity';
import { newsBySlugQuery } from '@/lib/queries';
import { Calendar, ChevronLeft } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;

  // Fetch article
  let article = await safeFetch<any>(newsBySlugQuery, { slug }, null);

  // Fallback to mock data if not found
  if (!article) {
    article = mockData.news.find(n => n.slug === slug) || mockData.news[0];
  }

  const imageUrl = urlFor(article.image) || 'https://images.unsplash.com/photo-1609137144814-118804c8f5d1?q=80&w=1200';

  return (
    <div className="py-16 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <Link 
          href="/news" 
          className="inline-flex items-center gap-1 text-maroon hover:text-gold font-bold text-sm mb-8 transition-colors"
        >
          <ChevronLeft size={18} />
          <span>അറിയിപ്പുകളിലേക്ക് മടങ്ങാം</span>
        </Link>

        <article className="bg-cream border border-gold/30 rounded-2xl overflow-hidden shadow-sm p-6 md:p-10">
          
          <div className="flex items-center gap-1.5 text-gold-dark text-xs font-bold mb-4">
            <Calendar size={14} />
            <span>{new Date(article.date).toLocaleDateString('ml-IN', { dateStyle: 'long' })}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-maroon mb-6 leading-tight">
            {article.malayalamTitle || article.title}
          </h1>

          {/* Large image */}
          <div className="relative w-full h-[40vh] md:h-[50vh] rounded-xl overflow-hidden bg-maroon-dark/10 mb-8 border border-gold/20">
            <Image
              src={imageUrl}
              alt={article.malayalamTitle || article.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="prose max-w-none text-maroon-light font-semibold text-sm md:text-base leading-relaxed space-y-4">
            {Array.isArray(article.content) ? (
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
              <p>{article.content || article.summary}</p>
            )}
          </div>

        </article>

      </div>
    </div>
  );
}
