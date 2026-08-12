import type { Metadata } from 'next';
import { Baloo_Chettan_2 } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const baloo = Baloo_Chettan_2({
  weight: ['400', '600', '700', '800'],
  subsets: ['malayalam'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ആനവേലി ക്ഷേത്രം | Anaveli Temple',
  description: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിന്റെ ഔദ്യോഗിക വെബ്സൈറ്റ്. പൂജകൾ, വഴിപാടുകൾ, ഉത്സവങ്ങൾ തുടങ്ങിയ വിവരങ്ങൾ അറിയാം.',
  keywords: ['Anaveli Temple', 'ആനവേലി ക്ഷേത്രം', 'Kerala Temples', 'Bhadrakaali Temple Pathanamthitta'],
  openGraph: {
    title: 'ആനവേലി ക്ഷേത്രം | Anaveli Temple',
    description: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിന്റെ ഔദ്യോഗിക വെബ്സൈറ്റ്.',
    locale: 'ml_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ml" className={`${baloo.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Floating Mobile Sticky CTAs */}
        <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 lg:hidden">
          <a 
            href="https://wa.me/919447000000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            aria-label="WhatsApp Us"
          >
            <span className="text-xl">💬</span>
          </a>
          <a 
            href="tel:+919447000000" 
            className="w-12 h-12 rounded-full bg-maroon text-gold flex items-center justify-center shadow-lg border border-gold/40 transition-transform hover:scale-110"
            aria-label="Call Temple"
          >
            <span className="text-xl">📞</span>
          </a>
        </div>
      </body>
    </html>
  );
}
