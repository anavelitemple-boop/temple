import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import PoojaBookingClient from '@/components/PoojaBookingClient';
import { safeFetch, mockData } from '@/lib/sanity';
import { siteSettingsQuery, poojaBookingQuery, poojasQuery } from '@/lib/queries';

export const metadata = {
  title: 'പൂജ ബുക്കിംഗ് | ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രം',
  description: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിലെ നിത്യപൂജകളും വെള്ളിയാഴ്ച വിശേഷാൽ പൂജകളും ഓൺലൈനായി ബുക്ക് ചെയ്യാം.'
};

export const revalidate = 0;

export default async function PoojaBookingPage() {
  const settings = await safeFetch<any>(siteSettingsQuery, {}, mockData.siteSettings);
  const cmsBooking = await safeFetch<any>(poojaBookingQuery, {}, null);
  const poojas = await safeFetch<any[]>(poojasQuery, {}, mockData.poojas);

  const whatsappNum = cmsBooking?.whatsappNumber || settings?.poojaBookingPhone || settings?.whatsapp || '917356462150';
  const pageTitle = cmsBooking?.title || 'ക്ഷേത്ര പൂജകൾ & ബുക്കിംഗ്';
  const pageSubtitle = cmsBooking?.subtitle || 'ഭദ്രകാളി ദേവിക്ക് പൂജകൾ ലളിതമായി ബുക്ക് ചെയ്യാം';

  // Use dropdown list configured in Pooja Booking Page Settings in CMS, or fall back to cms poojas
  const combinedPoojasList = (cmsBooking?.poojaList && cmsBooking.poojaList.length > 0)
    ? cmsBooking.poojaList
    : (poojas && poojas.length > 0 ? poojas : []);

  return (
    <div className="py-16 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Heading */}
        <SectionHeading
          title={pageTitle}
          subtitle={pageSubtitle}
        />

        {/* Client side interactive booking component */}
        <div className="mt-6">
          <PoojaBookingClient 
            whatsappNum={whatsappNum} 
            cmsPoojaName={cmsBooking?.defaultPoojaName}
            cmsPoojaPrice={cmsBooking?.defaultPoojaPrice}
            cmsPoojaDescription={cmsBooking?.poojaDescription}
            cmsPoojasList={combinedPoojasList}
          />
        </div>

        {/* User-Friendly Quick Steps Guide */}
        <div className="mt-12 bg-white/80 backdrop-blur-md border border-gold/30 rounded-3xl p-6 sm:p-8 shadow-md">
          <h3 className="text-lg sm:text-xl font-bold text-maroon mb-4 text-center flex items-center justify-center gap-2">
            <span>✨</span> പൂജ ബുക്ക് ചെയ്യേണ്ട വഴി (Quick Guide)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-cream/60 border border-gold/20 p-4 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-gold/20 text-gold-dark font-extrabold flex items-center justify-center mx-auto mb-2 text-sm">1</div>
              <h4 className="font-bold text-sm text-maroon">പൂജയും തീയതിയും ചേർക്കുക</h4>
              <p className="text-xs text-maroon-light/80 mt-1">തീയതി തിരഞ്ഞെടുത്ത് പൂജ ബുക്കിംഗ് ബട്ടൺ ക്ലിക്ക് ചെയ്യുക.</p>
            </div>
            <div className="bg-cream/60 border border-gold/20 p-4 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-gold/20 text-gold-dark font-extrabold flex items-center justify-center mx-auto mb-2 text-sm">2</div>
              <h4 className="font-bold text-sm text-maroon">പേരും നക്ഷത്രവും നൽകുക</h4>
              <p className="text-xs text-maroon-light/80 mt-1">ഭക്തന്റെ പേരും ജനന നക്ഷത്രവും വിവരങ്ങളിൽ രേഖപ്പെടുത്തുക.</p>
            </div>
            <div className="bg-cream/60 border border-gold/20 p-4 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-gold/20 text-gold-dark font-extrabold flex items-center justify-center mx-auto mb-2 text-sm">3</div>
              <h4 className="font-bold text-sm text-maroon">WhatsApp സന്ദേശം അയക്കുക</h4>
              <p className="text-xs text-maroon-light/80 mt-1">നെരിട്ടൊരു ക്ലിക്കിൽ ക്ഷേത്രത്തിലേക്ക് മെസ്സേജ് അയച്ചു ബുക്കിംഗ് ഉറപ്പാക്കുക.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
