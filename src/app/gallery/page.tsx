import React from 'react';
import Gallery from '@/components/Gallery';
import { safeFetch, mockData } from '@/lib/sanity';
import { galleryQuery } from '@/lib/queries';

export const revalidate = 60;

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
