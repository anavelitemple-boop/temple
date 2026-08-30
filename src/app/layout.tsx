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
    // Main English Keywords
    'Anaveli Temple',
    'Anaveli Sree Bhadrakali Temple',
    'Anaveli Bhagavathi Temple',
    'Anaveli Temple Kerala',
    'Anaveli Sree Bhadrakali Temple Kerala',
    'Anaveli Temple Alappuzha',
    'Anaveli Bhagavathi Temple Alappuzha',
    'Bhadrakali Temple Kerala',
    'Bhagavathi Temple Kerala',
    'Kerala Hindu Temple',
    'Hindu Temple in Kerala',
    'Famous Temples in Kerala',
    'Ancient Temple in Kerala',
    'Kerala Bhadrakali Temple',
    'Bhadrakali Devi Temple',
    'Bhagavathi Temple Alappuzha',
    'Devi Temple Alappuzha',
    'Temple near Alappuzha',
    'Temples near Alappuzha',
    'Kerala Temple',
    'Hindu Temple Alappuzha',
    // Pooja & Vazhipadu Keywords
    'Anaveli Temple Pooja',
    'Anaveli Temple Vazhipadu',
    'Anaveli Temple Pooja Timings',
    'Anaveli Temple Opening Time',
    'Anaveli Temple Darshan',
    'Anaveli Temple Offerings',
    'Anaveli Temple Booking',
    'Temple Pooja Booking Kerala',
    'Bhadrakali Pooja Kerala',
    'Bhagavathi Pooja Kerala',
    'Devi Pooja Kerala',
    'Special Pooja Kerala',
    'Temple Vazhipadu Kerala',
    'Vazhipadu Booking Kerala',
    'Temple Festival Kerala',
    'Bhadrakali Temple Festival',
    'Bhagavathi Temple Festival',
    'Temple Ulsavam Kerala',
    'Temple Ulsavam Alappuzha',
    // Location Keywords
    'Anaveli Temple Location',
    'Anaveli Temple Address',
    'Anaveli Temple Route',
    'How to reach Anaveli Temple',
    'Anaveli Temple Alappuzha Kerala',
    'Anaveli Temple near Alappuzha',
    'Anaveli Temple near Ambalappuzha',
    'Anaveli Temple Kerala Map',
    'Anaveli Temple Directions',
    'Bhadrakali Temple Alappuzha Kerala',
    // Malayalam Keywords (പ്രധാന മലയാളം Keywords)
    'ആനവേലി ക്ഷേത്രം',
    'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രം',
    'ആനവേലി ഭദ്രകാളി ക്ഷേത്രം',
    'ആനവേലി ഭഗവതി ക്ഷേത്രം',
    'ആനവേലി ക്ഷേത്രം കേരളം',
    'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രം കേരളം',
    'ആനവേലി ക്ഷേത്രം ആലപ്പുഴ',
    'ആനവേലി ഭഗവതി ക്ഷേത്രം ആലപ്പുഴ',
    'ഭദ്രകാളി ക്ഷേത്രം',
    'ഭദ്രകാളി ക്ഷേത്രം കേരളം',
    'ഭഗവതി ക്ഷേത്രം കേരളം',
    'ദേവി ക്ഷേത്രം കേരളം',
    'ഹിന്ദു ക്ഷേത്രം കേരളം',
    'കേരളത്തിലെ ക്ഷേത്രങ്ങൾ',
    'ആലപ്പുഴയിലെ ക്ഷേത്രങ്ങൾ',
    'ആലപ്പുഴ ക്ഷേത്രം',
    'പ്രസിദ്ധമായ ക്ഷേത്രങ്ങൾ കേരളം',
    'പുരാതന ക്ഷേത്രം കേരളം',
    // പൂജ / വഴിപാട് Keywords
    'ആനവേലി ക്ഷേത്രത്തിലെ പൂജ',
    'ആനവേലി ക്ഷേത്രത്തിലെ വഴിപാട്',
    'ആനവേലി ക്ഷേത്ര പൂജ സമയം',
    'ആനവേലി ക്ഷേത്ര ദർശനം',
    'ആനവേലി ക്ഷേത്ര വഴിപാട്',
    'ആനവേലി ക്ഷേത്ര വഴിപാട് ബുക്കിംഗ്',
    'ആനവേലി ക്ഷേത്ര പൂജ ബുക്കിംഗ്',
    'ഭദ്രകാളി പൂജ',
    'ഭദ്രകാളി പൂജ കേരളം',
    'ഭഗവതി പൂജ',
    'ദേവി പൂജ',
    'പ്രത്യേക പൂജ',
    'ക്ഷേത്ര വഴിപാട്',
    'ക്ഷേത്ര വഴിപാട് ബുക്കിംഗ്',
    'ക്ഷേത്ര പൂജ ബുക്കിംഗ്',
    'ക്ഷേത്ര ദർശന സമയം',
    'ക്ഷേത്ര പൂജ സമയം',
    'ഇന്നത്തെ പൂജ',
    'ഇന്നത്തെ വഴിപാട്',
    'പ്രത്യേക വഴിപാട്',
    // ഉത്സവ Keywords
    'ആനവേലി ക്ഷേത്ര ഉത്സവം',
    'ആനവേലി ക്ഷേത്ര ഉത്സവം കേരളം',
    'ആനവേലി ഭദ്രകാളി ഉത്സവം',
    'ക്ഷേത്ര ഉത്സവം',
    'ഭദ്രകാളി ക്ഷേത്ര ഉത്സവം',
    'ഭഗവതി ക്ഷേത്ര ഉത്സവം',
    'കേരള ക്ഷേത്ര ഉത്സവങ്ങൾ',
    'ക്ഷേത്ര പെരുന്നാൾ',
    'ക്ഷേത്ര ആഘോഷങ്ങൾ',
    'വിശേഷാൽ പൂജ',
    'ഉത്സവ പൂജ',
    'ക്ഷേത്ര ചടങ്ങുകൾ',
    // Location Malayalam Keywords
    'ആനവേലി ക്ഷേത്രം എവിടെ',
    'ആനവേലി ക്ഷേത്ര വിലാസം',
    'ആനവേലി ക്ഷേത്രം എങ്ങനെ എത്താം',
    'ആനവേലി ക്ഷേത്രത്തിലേക്ക് വഴി',
    'ആനവേലി ക്ഷേത്രം ആലപ്പുഴ',
    'ആലപ്പുഴ ഭദ്രകാളി ക്ഷേത്രം',
    'ആലപ്പുഴ ഭഗവതി ക്ഷേത്രം',
    'ആലപ്പുഴയിലെ ഭദ്രകാളി ക്ഷേത്രം',
    'ആലപ്പുഴയിലെ ക്ഷേത്രങ്ങൾ',
    'കേരളത്തിലെ ഭദ്രകാളി ക്ഷേത്രങ്ങൾ'
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
