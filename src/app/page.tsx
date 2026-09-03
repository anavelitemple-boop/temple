import React from 'react';
import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import PoojaSection from '@/components/PoojaSection';
import AnnouncementSection from '@/components/AnnouncementSection';
import Gallery from '@/components/Gallery';
import ContactSection from '@/components/ContactSection';
import { safeFetch, mockData, urlFor } from '@/lib/sanity';
import { homepageQuery, poojasQuery, announcementsQuery, galleryQuery, siteSettingsQuery } from '@/lib/queries';

export const revalidate = 0; // Disable caching to reflect Sanity CMS edits instantly

export default async function Home() {
  // Fetch homepage configurations
  const homepageContent = await safeFetch<any>(homepageQuery, {}, mockData.homepage);
  
  // Fetch site settings
  const siteSettings = await safeFetch<any>(siteSettingsQuery, {}, mockData.siteSettings);

  // Fetch active poojas
  const poojas = await safeFetch<any[]>(poojasQuery, {}, mockData.poojas);
  
  // Fetch announcements
  const announcements = await safeFetch<any[]>(announcementsQuery, {}, []);
  
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HinduTemple',
    'name': 'Anaveli Sree Bhadrakali Temple',
    'alternateName': 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രം',
    'description': 'Official Website of Anaveli Sree Bhadrakali Temple, Ambalappuzha, Alappuzha, Kerala.',
    'url': 'https://www.anavelitemple.online',
    'telephone': '+917356462150',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Koppara Anavelil',
      'addressLocality': 'Ambalappuzha',
      'addressRegion': 'Alappuzha, Kerala',
      'postalCode': '688005',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 9.3833,
      'longitude': 76.3667
    },
    'sameAs': [
      'https://maps.app.goo.gl/WY18Ci7aZHFzmEUD8'
    ]
  };

  return (
    <div className="flex flex-col gap-[20px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <Hero 
        heroTitle={homepageContent.heroTitle}
        heroSubtitle={homepageContent.heroSubtitle}
        heroDescription={homepageContent.heroDescription}
        primaryCTA={homepageContent.primaryCTA}
        secondaryCTA={homepageContent.secondaryCTA}
        heroImageUrl={urlFor(homepageContent.heroImage)}
        heroVideoUrl={homepageContent.heroVideoUrl}
        heroVideoFileUrl={homepageContent.heroVideoFileUrl}
        festivalDate={targetCountdownDate}
        festivalName={targetCountdownName}
        carouselSlides={homepageContent.carouselSlides}
      />

      {/* Quick Action Navigation Grid */}
      <QuickLinks />

      {/* Today's Poojas */}
      <PoojaSection poojas={poojas} />

      {/* Photo Gallery preview (ക്ഷേത്ര ദർശനം) */}
      <Gallery items={galleryItems} isHomePreview={true} />

      {/* Announcements (പ്രധാന അറിയിപ്പുകൾ) */}
      <AnnouncementSection announcements={announcements} />

      {/* Contact Details (ബന്ധപ്പെടുക) */}
      <ContactSection settings={siteSettings} />
    </div>
  );
}
