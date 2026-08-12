import React from 'react';
import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import PoojaSection from '@/components/PoojaSection';
import AnnouncementSection from '@/components/AnnouncementSection';
import Gallery from '@/components/Gallery';
import { safeFetch, mockData, urlFor } from '@/lib/sanity';
import { homepageQuery, poojasQuery, announcementsQuery, galleryQuery } from '@/lib/queries';

export const revalidate = 60; // Revalidate cache every 60 seconds

export default async function Home() {
  // Fetch homepage configurations
  const homepageContent = await safeFetch<any>(homepageQuery, {}, mockData.homepage);
  
  // Fetch active poojas
  const poojas = await safeFetch<any[]>(poojasQuery, {}, mockData.poojas);
  
  // Fetch announcements
  const announcements = await safeFetch<any[]>(announcementsQuery, {}, mockData.announcements);
  
  // Fetch gallery images
  const galleryRaw = await safeFetch<any[]>(galleryQuery, {}, []);
  
  // Format gallery items to include structured categories
  const galleryItems = galleryRaw.length > 0 ? galleryRaw.map((item: any) => ({
    title: item.title,
    image: item.image,
    categoryName: item.category?.malayalamName || 'ക്ഷേത്രം',
    categoryId: item.category?.name || 'temple'
  })) : mockData.gallery;

  const targetCountdownDate = homepageContent.festivalRef?.startDate || '2026-02-15T08:00:00.000Z';
  const targetCountdownName = homepageContent.festivalRef?.name || 'ആനവേലി ക്ഷേത്ര പെരുന്നാൾ';

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        heroTitle={homepageContent.heroTitle}
        heroSubtitle={homepageContent.heroSubtitle}
        heroDescription={homepageContent.heroDescription}
        primaryCTA={homepageContent.primaryCTA}
        secondaryCTA={homepageContent.secondaryCTA}
        festivalDate={targetCountdownDate}
        festivalName={targetCountdownName}
        heroImageUrl={'/temple-photo.jpg'}
        heroVideoUrl={homepageContent.heroVideoFileUrl || homepageContent.heroVideoUrl}
      />

      {/* Quick Action Navigation Grid */}
      <QuickLinks />

      {/* Today's Poojas */}
      <PoojaSection poojas={poojas} />

      {/* Photo Gallery preview (ക്ഷേത്ര ദർശനം) */}
      <Gallery items={galleryItems} isHomePreview={true} />

      {/* Announcements (പ്രധാന അറിയിപ്പുകൾ) */}
      <AnnouncementSection announcements={announcements} />
    </div>
  );
}
