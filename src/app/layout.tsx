import type { Metadata } from 'next';
import { Baloo_Chettan_2 } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { safeFetch, mockData } from '@/lib/sanity';
import { siteSettingsQuery } from '@/lib/queries';

const baloo = Baloo_Chettan_2({
  weight: ['400', '600', '700', '800'],
  subsets: ['malayalam'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.anavelitemple.online'),
  title: {
    default: 'ആനവേലി ക്ഷേത്രം | Anaveli Sree Bhadrakali Temple',
    template: '%s | Anaveli Temple'
  },
  description: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിന്റെ ഔദ്യോഗിക വെബ്സൈറ്റ്. പൂജകൾ, വഴിപാടുകൾ, വിശേഷാൽ പൂജകൾ, ഉത്സവങ്ങൾ തുടങ്ങിയ വിവരങ്ങൾ അറിയാം. Anaveli Sree Bhadrakali Temple official website.',
  keywords: [
    'Anaveli Temple', 
    'ആനവേലി ക്ഷേത്രം', 
    'Anaveli Sree Bhadrakali Temple',
    'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രം',
    'Kerala Temples', 
    'Bhadrakaali Temple Alappuzha',
    'Alappuzha Temples',
    'ആലപ്പുഴ ക്ഷേത്രങ്ങൾ',
    'Temple Vazhipadu Booking',
    'Pooja Timings Anaveli'
  ],
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'ആനവേലി ക്ഷേത്രം | Anaveli Sree Bhadrakali Temple',
    description: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിന്റെ ഔദ്യോഗിക വെബ്സൈറ്റ്.',
    url: 'https://www.anavelitemple.online',
    siteName: 'Anaveli Sree Bhadrakali Temple',
    locale: 'ml_IN',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await safeFetch<any>(siteSettingsQuery, {}, mockData.siteSettings);
  const callerPhone = settings?.bottomCallerPhone || settings?.phone || '+91 7356462150';
  const priestPhone = settings?.priestPhone || settings?.phone || '+91 7356462150';
  const cleanCallerPhone = callerPhone.replace(/\s+/g, '');

  return (
    <html lang="ml" className={`${baloo.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <Header callerPhone={callerPhone} priestPhone={priestPhone} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Floating Mobile Sticky CTAs */}
        <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 lg:hidden">
          <a 
            href={`tel:${cleanCallerPhone}`} 
            className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg border border-white/40 transition-transform hover:scale-110 active:scale-95"
            aria-label="Call Temple"
          >
            <span className="text-xl">📞</span>
          </a>
        </div>
      </body>
    </html>
  );
}
