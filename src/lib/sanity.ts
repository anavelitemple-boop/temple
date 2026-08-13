import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7uzr3mel';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

const token = process.env.SANITY_API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2026-08-11',
  useCdn: !token,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  if (!source) return '';
  try {
    return builder.image(source).url();
  } catch (e) {
    return typeof source === 'string' ? source : '';
  }
}

// High Quality Malayalam Mock Data Fallbacks
export const mockData = {
  siteSettings: {
    title: 'ആനവേലി ക്ഷേത്രം',
    description: 'നമ്മുടെ ഗ്രാമത്തിന്റെ ആത്മീയ പൈതൃകം',
    phone: '+91 9895873935',
    priestPhone: '',
    priestButtonText: 'ക്ഷേത്ര പൂജാരിയെ വിളിക്കാം',
    whatsapp: '919895873935',
    email: 'info@anavelitemple.org',
    address: 'കൊപ്പര ആനവേലിൽ ശ്രീ ദേവി ക്ഷേത്രം, അമ്പലപ്പുഴ, ആലപ്പുഴ, കേരളം - 688005',
    mapsLink: 'https://maps.app.goo.gl/WY18Ci7aZHFzmEUD8',
  },
  homepage: {
    heroTitle: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രം',
    heroSubtitle: 'നമ്മുടെ ഗ്രാമത്തിന്റെ ആത്മീയ പൈതൃകം',
    heroDescription: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിന്റെ വെബ്സൈറ്റിലേക്ക് ഹൃദയം നിറഞ്ഞ സ്വാഗതം. ഭഗവതിയുടെ കാരുണ്യവും അനുഗ്രഹവും എന്നും നിങ്ങളോടൊപ്പം ഉണ്ടാകട്ടെ.',
    primaryCTA: 'ക്ഷേത്രത്തെ അറിയാം',
    secondaryCTA: 'പരിപാടികൾ കാണാം',
  },
  poojas: [
    { name: 'Nirmalya Darshanam', malayalamName: 'നിർമ്മാല്യ ദർശനം', time: '05:30 AM', price: 0, description: 'പള്ളിയുണർവിനു ശേഷമുള്ള ഭഗവാന്റെ ആദ്യ ദർശനം.', active: true },
    { name: 'Ganapathy Homam', malayalamName: 'ഗണപതി ഹോമം', time: '06:00 AM', price: 150, description: 'വിഘ്നനിവാരണത്തിനായി വിഘ്നേശ്വരന് സമർപ്പിക്കുന്ന ഹോമം.', active: true },
    { name: 'Deeparadhana', malayalamName: 'ദീപാരാധന', time: '06:30 PM', price: 0, description: 'സന്ധ്യാസമയത്തെ കർപ്പൂര ദീപ ദർശനം.', active: true },
    { name: 'Athazha Pooja', malayalamName: 'അത്താഴപൂജ', time: '07:30 PM', price: 150, description: 'രാത്രി നടയടയ്ക്കുന്നതിന് മുൻപുള്ള അവസാന പൂജ.', active: true },
  ],
  vazhipadus: [
    { name: 'Archana', malayalamName: 'അർച്ചന', description: 'ആയുരാരോഗ്യ സൗഖ്യത്തിനായി അർച്ചന വഴിപാട്.', price: 50, category: 'shiva' },
    { name: 'Pushpanjali', malayalamName: 'പുഷ്പാഞ്ജലി', description: 'കാര്യസിദ്ധിക്കും സർവ്വ വിഘ്ന നിവാരണത്തിനുമായി.', price: 40, category: 'shiva' },
    { name: 'Neyyabhishekam', malayalamName: 'നെയ്യഭിഷേകം', description: 'മഹാദേവന് പ്രിയങ്കരമായ നെയ്യഭിഷേകം.', price: 150, category: 'shiva' },
    { name: 'Kottukal Karikkabhishekam', malayalamName: 'കരിക്കഭിഷേകം', description: 'മാനസിക പ്രശാന്തിക്കും ഉദര രോഗ ശമനത്തിനും.', price: 100, category: 'shiva' },
    { name: 'Ganapathy Homam', malayalamName: 'ഗണപതി ഹോമം', description: 'തടസ്സങ്ങൾ മാറി കാര്യവിജയം നേടാൻ.', price: 250, category: 'ganapathy' },
    { name: 'Muttu Vazhipadu', malayalamName: 'മുട്ടറുക്കൽ', description: 'വിഘ്നങ്ങൾ നീങ്ങാൻ തേങ്ങ മുട്ടറുക്കൽ.', price: 30, category: 'ganapathy' },
    { name: 'Bhagavathy Seva', malayalamName: 'ഭഗവതി സേവ', description: 'ഐശ്വര്യത്തിനും ദുരിത നിവാരണത്തിനുമായി ദേവിക്ക് സമർപ്പിക്കുന്നു.', price: 500, category: 'devi' },
  ],
  announcements: [],
  festivals: [
    {
      name: 'ആനവേലി ക്ഷേത്ര പെരുന്നാൾ 2026',
      startDate: '2026-02-15T08:00:00.000Z',
      endDate: '2026-02-22T22:00:00.000Z',
      description: 'എട്ടു ദിവസങ്ങളിലായി കൊണ്ടാടുന്ന ഈ വർഷത്തെ ഉത്സവ ചടങ്ങുകൾ തന്ത്രിയുടെയും മേൽശാന്തിയുടെയും നേതൃത്വത്തിൽ നടക്കും. സാംസ്കാരിക പരിപാടികളും അന്നദാനവും ഉണ്ടായിരിക്കും.',
      image: '/images/temple-fest.jpg',
      status: 'upcoming'
    }
  ],
  festivalSchedule: [
    { day: 'ഒന്നാം ദിവസം', date: '2026-02-15', title: 'കൊടിയേറ്റ്', time: '07:30 PM', description: 'തൃക്കൊടിയേറ്റോടെ ഉത്സവ ചടങ്ങുകൾക്ക് ഔപചാരികമായ തുടക്കം കുറിക്കുന്നു.' },
    { day: 'രണ്ടാം ദിവസം', date: '2026-02-16', title: 'ശ്രീഭൂതബലി & വിളക്കെഴുന്നള്ളിപ്പ്', time: '08:00 AM & 07:00 PM', description: 'മേളങ്ങളുടെ അകമ്പടിയോടെയുള്ള വിളക്കെഴുന്നള്ളിപ്പ്.' },
    { day: 'ഏഴാം ദിവസം', date: '2026-02-21', title: 'പള്ളിനായാട്ട്', time: '09:00 PM', description: 'ഭഗവാന്റെ പള്ളിനായാട്ട് പുറപ്പാടും അനുബന്ധ ചടങ്ങുകളും.' },
    { day: 'എട്ടാം ദിവസം (ആറാട്ട്)', date: '2026-02-22', title: 'ആറാട്ടെഴുന്നള്ളിപ്പ് & കൊടിയിറക്ക്', time: '05:00 PM', description: 'മംഗളകരമായ ആറാട്ട് കടവിൽ ആറാട്ട് കഴിഞ്ഞ് തിരിച്ചെഴുന്നള്ളത്തോടെ ഉത്സവം സമാപിക്കുന്നു.' },
  ],
  events: [
    {
      title: 'Classical Dance Evening',
      malayalamTitle: 'നൃത്തസന്ധ്യ',
      date: '2026-02-17',
      time: '06:30 PM',
      location: 'ക്ഷേത്ര സാംസ്കാരിക വേദി',
      description: 'പ്രശസ്ത കലാകാരന്മാർ അണിനിരക്കുന്ന ഭരതനാട്യ കച്ചേരി.',
      image: '/images/dance.jpg',
      type: 'upcoming'
    },
    {
      title: 'Devotional Songs Ganamela',
      malayalamTitle: 'ഭക്തിഗാനമേള',
      date: '2026-02-18',
      time: '07:30 PM',
      location: 'ക്ഷേത്ര മൈതാനം',
      description: 'പ്രശസ്ത ഗായകരുടെ നേതൃത്വത്തിൽ ഭക്തിഗാനസുധ.',
      image: '/images/music.jpg',
      type: 'upcoming'
    },
    {
      title: 'Annadanam (Grand Feast)',
      malayalamTitle: 'മഹാപ്രസാദ വിതരണം (അന്നദാനം)',
      date: '2026-02-22',
      time: '12:00 PM',
      location: 'അന്നദാന മണ്ഡപം',
      description: 'ആറാട്ട് പ്രമാണിച്ച് ഭക്തജനങ്ങൾക്കായി വിഭവസമൃദ്ധമായ സദ്യ.',
      image: '/images/feast.jpg',
      type: 'upcoming'
    }
  ],
  news: [
    {
      title: 'Temple Committee Election 2026 Results',
      malayalamTitle: 'പുതിയ ഭരണസമിതി യോഗം ചേർന്നു',
      slug: 'committee-election-2026',
      date: '2026-08-01',
      summary: 'ക്ഷേത്ര വികസന പ്രവർത്തനങ്ങൾ ദ്രുതഗതിയിലാക്കാൻ പുതിയ സമിതി യോഗം തിരുമാനിച്ചു.',
      content: [
        { _type: 'block', children: [{ _type: 'span', text: 'ക്ഷേത്ര ഉപദേശക സമിതിയുടെ പുതിയ ഭാരവാഹികൾ ചാർജെടുത്തു. വരും വർഷങ്ങളിലെ വികസന പ്രവർത്തനങ്ങൾക്ക് രൂപരേഖ തയ്യാറാക്കി.' }] }
      ],
      image: '/images/meeting.jpg'
    },
    {
      title: 'Mandala Pooja Preparation Underway',
      malayalamTitle: 'മണ്ഡല മഹോത്സവം ഒരുക്കങ്ങൾ തുടങ്ങി',
      slug: 'mandala-pooja-prep',
      date: '2026-08-10',
      summary: 'ഇക്കൊല്ലത്തെ മണ്ഡല മകരവിളക്ക് ഉത്സവത്തിനുള്ള ഒരുക്കങ്ങൾ ആരംഭിച്ചു.',
      content: [
        { _type: 'block', children: [{ _type: 'span', text: 'ഭക്തർക്ക് അടിസ്ഥാന സൗകര്യങ്ങൾ വർദ്ധിപ്പിക്കുന്നതിനായി വോളന്റിയർ സേവനം ലഭ്യമാക്കും. സുരക്ഷാ ക്രമീകരണങ്ങളും പൂർത്തിയായി വരുന്നു.' }] }
      ],
      image: '/images/mandala.jpg'
    }
  ],
  gallery: [
    { title: 'ശ്രീകോവിൽ വിളക്കുകൾ', image: '/images/gallery1.jpg', categoryName: 'ക്ഷേത്രം', categoryId: 'temple' },
    { title: 'പെരുന്നാൾ പഞ്ചവാദ്യം', image: '/images/gallery2.jpg', categoryName: 'പെരുന്നാൾ', categoryId: 'festival' },
    { title: 'ദീപലങ്കാരം സന്ധ്യയിൽ', image: '/images/gallery3.jpg', categoryName: 'ദീപാലങ്കാരം', categoryId: 'lighting' },
    { title: 'പൂജാരി പുഷ്പസമർപ്പണം', image: '/images/gallery4.jpg', categoryName: 'ദേവത', categoryId: 'deity' },
    { title: 'ഗ്രാമത്തിന്റെ ഭംഗി', image: '/images/gallery5.jpg', categoryName: 'ഗ്രാമം', categoryId: 'village' },
  ],
  historyTimeline: [
    { year: '1850', title: 'ക്ഷേത്രത്തിന്റെ ഉത്ഭവം', description: 'ഗ്രാമത്തിലെ പൂർവികർ മഹാദേവ ചൈതന്യം ദർശിച്ച് നിർമ്മിച്ച ചെറിയൊരു ആരാധനാലയം.' },
    { year: '1920', title: 'പ്രതിഷ്ഠാ പുനരുദ്ധാരണം', description: 'ക്ഷേത്രം പുനർനിർമ്മിച്ച് പുതിയ ശിലാവിഗ്രഹം ശാസ്ത്രീയ പൂജകളോടെ പ്രതിഷ്ഠിച്ചു.' },
    { year: '1980', title: 'ചുറ്റമ്പലം പണി', description: 'സമൂഹത്തിന്റെ പങ്കാളിത്തത്തോടെ വലിയ ചുറ്റമ്പലവും വിളക്കുമാടവും പൂർത്തിയാക്കി.' },
    { year: '2015', title: 'ധ്വജപ്രതിഷ്ഠ', description: 'പ്രൗഢഗംഭീരമായ കൊടിമരം പ്രതിഷ്ഠിച്ച് വാർഷിക പെരുന്നാൾ കൂടുതൽ സജീവമാക്കി.' },
  ]
};

export async function safeFetch<T>(query: string, params = {}, fallback: T): Promise<T> {
  try {
    const data = await client.fetch(query, params);
    if (data && (!Array.isArray(data) || data.length > 0)) {
      return data;
    }
    return fallback;
  } catch (error) {
    console.warn('Sanity query failed, falling back to mock data', error);
    return fallback;
  }
}
