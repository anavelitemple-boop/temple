import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { safeFetch } from '@/lib/sanity';
import { newsQuery } from '@/lib/queries';
import NewsListClient from '@/components/NewsListClient';

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

        <NewsListClient newsList={newsList} />

      </div>
    </div>
  );
}


