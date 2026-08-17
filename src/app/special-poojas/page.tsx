import React from 'react';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import PdfDownloadButton from '@/components/PdfDownloadButton';
import { safeFetch, urlFor } from '@/lib/sanity';
import { specialPoojasQuery } from '@/lib/queries';
import { Calendar, Flame, Sparkles } from 'lucide-react';

export const revalidate = 60;

export const metadata = {
  title: 'വിശേഷാൽ പൂജകൾ | Anaveli Temple',
  description: 'ക്ഷേത്രസന്നിധിയിൽ വരാനിരിക്കുന്ന വിശേഷാൽ പൂജകളും അതിനോട് അനുബന്ധിച്ച പൂജാതി കാര്യങ്ങളും.',
};

const defaultSpecialPoojas = [
  {
    title: 'കളമെഴുത്തും പാട്ടും',
    malayalamTitle: 'കളമെഴുത്തും പാട്ടും',
    date: 'വാർഷിക ഉത്സവം',
    summary: 'ഭദ്രകാളി ദേവിയുടെ രൂപം പഞ്ചവർണ്ണപ്പൊടികൾ കൊണ്ട് വരച്ച് ഭക്തിനിർഭരമായ പാട്ടുകളോടെയുള്ള പരമ്പരാഗത ചടങ്ങ്.',
    description: 'ഭദ്രകാളി ദേവിയുടെ അനുഗ്രഹം തേടി പ്രകൃതിദത്തമായ പഞ്ചവർണ്ണപ്പൊടികൾ കൊണ്ട് ഭീമമായ രൂപം വരച്ച് തിരിയുഴിച്ചിലും കള പാട്ടും നടത്തി ദേവിയെ പ്രീതിപ്പെടുത്തുന്ന പ്രാചീനമായ തന്ത്രിക് അനുഷ്ഠാനം.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144814-118804c8f5d1?q=80&w=800',
  },
  {
    title: 'മഹാ പൊങ്കാല സമർപ്പണം',
    malayalamTitle: 'മഹാ പൊങ്കാല സമർപ്പണം',
    date: 'ഉത്സവ തിരുനാൾ',
    summary: 'ക്ഷേത്ര സന്നിധിയിൽ ഭക്തജനങ്ങൾ മൺകലങ്ങളിൽ ദേവിക്ക് പൊങ്കാല നിവേദ്യം തയ്യാറാക്കി സമർപ്പിക്കുന്ന പവിത്ര ചടങ്ങ്.',
    description: 'ആഗ്രഹ സാഫല്യത്തിനും കുടുംബ ഐശ്വര്യത്തിനുമായി വ്രതശുദ്ധിയോടെ നൂറുകണക്കിന് ഭക്തർ ക്ഷേത്ര മുറ്റത്ത് പൊങ്കാല അർപ്പിച്ചു പ്രാർത്ഥിക്കുന്നു.',
    imageUrl: 'https://images.unsplash.com/photo-1545232979-fbf592af5fef?q=80&w=800',
  },
  {
    title: 'വിശേഷാൽ ഭഗവതി സേവ & ആയില്യ പൂജ',
    malayalamTitle: 'വിശേഷാൽ ഭഗവതി സേവ & ആയില്യ പൂജ',
    date: 'മാസാന്ത ചടങ്ങുകൾ',
    summary: 'സർവ്വ ഐശ്വര്യത്തിനും ദുരിതനിവാരണത്തിനുമായി സന്ധ്യയ്ക്ക് സമർപ്പിക്കുന്ന തന്ത്രി പൂജയും നാഗപൂജയും.',
    description: 'എല്ലാ മാസത്തെയും വിശേഷാൽ ദിവസങ്ങളിൽ ദേവിയുടെ സന്നിധിയിൽ വിളക്കുപൂജയും നാഗതറയിൽ ആയില്യ പൂജയും സർപ്പബലിയും നടത്തപ്പെടുന്നു.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144814-118804c8f5d1?q=80&w=800',
  }
];

export default async function SpecialPoojasPage() {
  const itemsList = await safeFetch<any[]>(specialPoojasQuery, {}, defaultSpecialPoojas);
  const displayItems = itemsList.length > 0 ? itemsList : defaultSpecialPoojas;

  return (
    <div className="py-16 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title="ക്ഷേത്രസന്നിധിയിൽ വരാനിരിക്കുന്ന വിശേഷാൽ പൂജകളും അതിനോട് അനുബന്ധിച്ച പൂജാതി കാര്യങ്ങളും" 
          subtitle="ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിലെ പ്രധാന വിശേഷാൽ പൂജകളുടെയും പ്രത്യേക ചടങ്ങുകളുടെയും വിവരങ്ങൾ" 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayItems.map((item, idx) => {
            const imgUrl = item.imageUrl || urlFor(item.image) || 'https://images.unsplash.com/photo-1609137144814-118804c8f5d1?q=80&w=600';
            const displayTitle = item.malayalamTitle || item.title || 'വിശേഷാൽ പൂജ';
            const displayDate = item.date || 'വരാനിരിക്കുന്ന ചടങ്ങ്';
            const displayDesc = item.description || item.summary || '';

            return (
              <div 
                key={idx}
                className="bg-cream border border-gold/25 hover:border-gold rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-52 w-full bg-maroon-dark/10">
                  <Image
                    src={imgUrl}
                    alt={displayTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-maroon/90 text-gold px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                    <Flame size={13} />
                    <span>{displayDate}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-maroon mb-3 leading-snug">
                      {displayTitle}
                    </h3>
                    {displayDesc && (
                      <p className="text-maroon-light/80 text-sm font-semibold leading-relaxed">
                        {displayDesc}
                      </p>
                    )}
                  </div>

                  {/* PDF Download Button - Only renders if admin uploaded a PDF in CMS */}
                  {item.pdfUrl && (
                    <div className="pt-4 border-t border-gold/20">
                      <PdfDownloadButton 
                        pdfUrl={item.pdfUrl} 
                        title="പൂജാ വിവരങ്ങളുടെ PDF"
                        className="w-full"
                        variant="secondary"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
