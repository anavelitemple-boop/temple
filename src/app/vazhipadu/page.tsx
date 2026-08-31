import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { safeFetch, mockData } from '@/lib/sanity';
import { vazhipadusQuery, siteSettingsQuery } from '@/lib/queries';
import VazhipaduList from '@/components/VazhipaduList';

export const revalidate = 60;

export const metadata = {
  title: 'വഴിപാടുകൾ',
  description: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിൽ ഭക്തജനങ്ങൾക്ക് സമർപ്പിക്കാവുന്ന പ്രധാന വഴിപാടുകളും നിരക്കുകളും.',
};

export default async function VazhipaduPage() {
  const vazhipadus = await safeFetch<any[]>(vazhipadusQuery, {}, mockData.vazhipadus);
  const settings = await safeFetch<any>(siteSettingsQuery, {}, mockData.siteSettings);

  const whatsappNum = settings.poojaBookingPhone || settings.whatsapp || '917356462150';

  return (
    <div className="py-16 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="വഴിപാടുകൾ" 
          subtitle="ഭക്തജനങ്ങൾക്ക് ചെയ്യാവുന്ന പ്രധാന വഴിപാടുകളും നിരക്കുകളും" 
        />

        <VazhipaduList vazhipadus={vazhipadus} whatsappNum={whatsappNum} />
      </div>
    </div>
  );
}
