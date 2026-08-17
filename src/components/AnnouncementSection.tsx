import React from 'react';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import Button from './Button';
import PdfDownloadButton from './PdfDownloadButton';
import { urlFor } from '@/lib/sanity';
import { Calendar } from 'lucide-react';

interface Announcement {
  _id?: string;
  slug?: any;
  title?: string;
  malayalamTitle?: string;
  description?: string;
  summary?: string;
  image?: any;
  imageUrl?: string;
  date?: string;
  pdfUrl?: string;
}

interface AnnouncementSectionProps {
  announcements: Announcement[];
}

export default function AnnouncementSection({ announcements }: AnnouncementSectionProps) {
  if (!announcements || announcements.length === 0) {
    return null;
  }

  // Show top 3 announcements
  const featuredAnnouncements = announcements.slice(0, 3);

  return (
    <section className="py-[20px] bg-cream-dark/25 border-y border-gold/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="പ്രധാന അറിയിപ്പുകൾ" 
          subtitle="ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട ഏറ്റവും പുതിയ അറിയിപ്പുകളും വാർത്തകളും" 
        />

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {featuredAnnouncements.map((item, index) => {
            const imageUrl = item.imageUrl || urlFor(item.image) || 'https://images.unsplash.com/photo-1609137144814-118804c8f5d1?q=80&w=600';
            const displayTitle = item.malayalamTitle || item.title || 'പ്രധാന അറിയിപ്പ്';
            const displayDescription = item.description || item.summary || '';
            const displayDate = item.date 
              ? new Date(item.date).toLocaleDateString('ml-IN', { dateStyle: 'medium' }) 
              : '';

            return (
              <div 
                key={index} 
                className="bg-cream rounded-2xl overflow-hidden shadow-sm border border-gold/20 hover:border-gold hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-48 w-full bg-maroon-dark/10">
                  <Image 
                    src={imageUrl} 
                    alt={displayTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  {displayDate && (
                    <div className="flex items-center gap-1.5 text-gold-dark text-xs font-bold mb-3">
                      <Calendar size={14} />
                      <span>{displayDate}</span>
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-maroon mb-3 line-clamp-2">
                    {displayTitle}
                  </h3>

                  {displayDescription && (
                    <p className="text-maroon-light/80 text-sm mb-5 line-clamp-3 font-semibold flex-grow leading-relaxed">
                      {displayDescription}
                    </p>
                  )}

                  <div className="mt-auto space-y-2">
                    <PdfDownloadButton 
                      pdfUrl={item.pdfUrl} 
                      title="PDF ഡൗൺലോഡ്" 
                      className="w-full"
                    />
                    <Button href={`/news/${item.slug?.current || item.slug || item._id}`} variant="secondary" className="w-full text-xs py-2 px-4">
                      കൂടുതൽ വായിക്കാം
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button href="/news" variant="primary">
            എല്ലാ അറിയിപ്പുകളും കാണാം
          </Button>
        </div>
      </div>
    </section>
  );
}
