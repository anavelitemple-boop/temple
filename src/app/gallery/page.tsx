import React from 'react';
import Gallery from '@/components/Gallery';
import { safeFetch, mockData } from '@/lib/sanity';
import { galleryQuery } from '@/lib/queries';

export const revalidate = 60;

export const metadata = {
  title: 'ക്ഷേത്ര ദർശനം - ഫോട്ടോ ഗാലറി | Anaveli Temple',
  description: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിലെ പ്രധാന ചടങ്ങുകളുടെയും ദർശനത്തിന്റെയും ഫോട്ടോകൾ.',
};

export default async function GalleryPage() {
  const galleryRaw = await safeFetch<any[]>(galleryQuery, {}, []);
  
  const galleryItems = galleryRaw.length > 0 ? galleryRaw.map((item: any) => ({
    title: item.title,
    image: item.image,
    categoryName: item.category?.malayalamName || 'ക്ഷേത്രം',
    categoryId: item.category?.name || 'temple'
  })) : mockData.gallery;

  return (
    <div className="bg-cream min-h-screen">
      <Gallery items={galleryItems} />
    </div>
  );
}
