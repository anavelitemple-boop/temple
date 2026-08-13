import { client } from '../src/lib/sanity';

const seedData = async () => {
  console.log('Seeding website content into Sanity Studio...');

  // 1. Site Settings
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രം',
    description: 'നമ്മുടെ ഗ്രാമത്തിന്റെ ആത്മീയ പൈതൃകം',
    phone: '+91 9895873935',
    priestPhone: '+91 96561 13825',
    priestButtonText: 'ക്ഷേത്ര പൂജാരിയെ വിളിക്കാം',
    whatsapp: '919895873935',
    email: 'info@anavelitemple.org',
    address: 'കൊപ്പര ആനവേലിൽ ശ്രീ ദേവി ക്ഷേത്രം, അമ്പലപ്പുഴ, ആലപ്പുഴ, കേരളം - 688005',
    mapsLink: 'https://maps.app.goo.gl/WY18Ci7aZHFzmEUD8',
  });
  console.log('✔ Site Settings created');

  // 2. Festival (for Hero countdown reference)
  const mainFestival = await client.createOrReplace({
    _id: 'festival-2026',
    _type: 'festival',
    name: 'ആനവേലി ക്ഷേത്ര പെരുന്നാൾ 2026',
    startDate: '2026-02-15T08:00:00.000Z',
    endDate: '2026-02-22T22:00:00.000Z',
    description: 'എട്ടു ദിവസങ്ങളിലായി കൊണ്ടാടുന്ന ഈ വർഷത്തെ ഉത്സവ ചടങ്ങുകൾ തന്ത്രിയുടെയും മേൽശാന്തിയുടെയും നേതൃത്വത്തിൽ നടക്കും.',
    status: 'upcoming'
  });
  console.log('✔ Festival document created');

  // 3. Homepage Content
  await client.createOrReplace({
    _id: 'homepage',
    _type: 'homepage',
    heroTitle: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രം',
    heroSubtitle: 'നമ്മുടെ ഗ്രാമത്തിന്റെ ആത്മീയ പൈതൃകം',
    heroDescription: 'ആനവേലി ശ്രീ ഭദ്രകാളി ക്ഷേത്രത്തിന്റെ ഡിജിറ്റൽ സന്നിധിയിലേക്ക് സ്വാഗതം. ശതവർഷങ്ങളുടെ പാരമ്പര്യവും ഗ്രാമത്തിന്റെ തനിമയും വിളിച്ചോതുന്ന പുണ്യ സങ്കേതം.',
    primaryCTA: 'ക്ഷേത്രത്തെ അറിയാം',
    secondaryCTA: 'വഴിപാടുകൾ',
    festivalRef: {
      _type: 'reference',
      _ref: mainFestival._id
    }
  });
  console.log('✔ Homepage document created');

  // 4. Poojas
  const poojas = [
    { _id: 'pooja-1', name: 'Nirmalya Darshanam', malayalamName: 'നിർമ്മാല്യ ദർശനം', time: '05:30 AM', price: 0, description: 'പള്ളിയുണർവിനു ശേഷമുള്ള ഭഗവാന്റെ ആദ്യ ദർശനം.', active: true },
    { _id: 'pooja-2', name: 'Ganapathy Homam', malayalamName: 'ഗണപതി ഹോമം', time: '06:00 AM', price: 150, description: 'വിഘ്നനിവാരണത്തിനായി വിഘ്നേശ്വരന് സമർപ്പിക്കുന്ന ഹോമം.', active: true },
    { _id: 'pooja-3', name: 'Deeparadhana', malayalamName: 'ദീപാരാധന', time: '06:30 PM', price: 0, description: 'സന്ധ്യാസമയത്തെ കർപ്പൂര ദീപ ദർശനം.', active: true },
    { _id: 'pooja-4', name: 'Athazha Pooja', malayalamName: 'അത്താഴപൂജ', time: '07:30 PM', price: 150, description: 'രാത്രി നടയടയ്ക്കുന്നതിന് മുൻപുള്ള അവസാന പൂജ.', active: true },
  ];
  for (const p of poojas) {
    await client.createOrReplace({ _type: 'pooja', ...p });
  }
  console.log('✔ Poojas created');

  // 5. Vazhipadus
  const vazhipadus = [
    { _id: 'vazhipadu-1', name: 'Archana', malayalamName: 'അർച്ചന', description: 'ആയുരാരോഗ്യ സൗഖ്യത്തിനായി അർച്ചന വഴിപാട്.', price: 50, category: 'shiva' },
    { _id: 'vazhipadu-2', name: 'Pushpanjali', malayalamName: 'പുഷ്പാഞ്ജലി', description: 'കാര്യസിദ്ധിക്കും സർവ്വ വിഘ്ന നിവാരണത്തിനുമായി.', price: 40, category: 'shiva' },
    { _id: 'vazhipadu-3', name: 'Neyyabhishekam', malayalamName: 'നെയ്യഭിഷേകം', description: 'മഹാദേവന് പ്രിയങ്കരമായ നെയ്യഭിഷേകം.', price: 150, category: 'shiva' },
    { _id: 'vazhipadu-4', name: 'Karikkabhishekam', malayalamName: 'കരിക്കഭിഷേകം', description: 'മാനസിക പ്രശാന്തിക്കും ഉദര രോഗ ശമനത്തിനും.', price: 100, category: 'shiva' },
    { _id: 'vazhipadu-5', name: 'Ganapathy Homam', malayalamName: 'ഗണപതി ഹോമം', description: 'തടസ്സങ്ങൾ മാറി കാര്യവിജയം നേടാൻ.', price: 250, category: 'ganapathy' },
    { _id: 'vazhipadu-6', name: 'Muttu Vazhipadu', malayalamName: 'മുട്ടറുക്കൽ', description: 'വിഘ്നങ്ങൾ നീങ്ങാൻ തേങ്ങ മുട്ടറുക്കൽ.', price: 30, category: 'ganapathy' },
    { _id: 'vazhipadu-7', name: 'Bhagavathy Seva', malayalamName: 'ഭഗവതി സേവ', description: 'ഐശ്വര്യത്തിനും ദുരിത നിവാരണത്തിനുമായി ദേവിക്ക് സമർപ്പിക്കുന്നു.', price: 500, category: 'devi' },
  ];
  for (const v of vazhipadus) {
    await client.createOrReplace({ _type: 'vazhipadu', ...v });
  }
  console.log('✔ Vazhipadus created');

  // 6. Announcements
  const announcements = [
    {
      _id: 'announcement-1',
      _type: 'announcement',
      title: 'Anaveli Temple Festival 2026',
      malayalamTitle: 'ആനവേലി ക്ഷേത്ര പെരുന്നാൾ 2026',
      description: 'ഈ വർഷത്തെ പെരുന്നാൾ ഫെബ്രുവരി 15 മുതൽ 22 വരെ വളരെ ഭംഗിയായി നടത്തുവാൻ തീരുമാനിച്ചിരിക്കുന്നു. ഭക്തജനങ്ങളുടെ സഹകരണം പ്രതീക്ഷിക്കുന്നു.',
      date: '2026-02-15',
      published: true,
      featured: true
    },
    {
      _id: 'announcement-2',
      _type: 'announcement',
      title: 'Special Pooja Booking Started',
      malayalamTitle: 'പ്രത്യേകം പൂജ ബുക്കിംഗ് ആരംഭിച്ചു',
      description: 'മണ്ഡലകാല പൂജകളുടെ ഓൺലൈൻ / വാട്സ്ആപ്പ് വഴിപാടുകൾ ഇപ്പോൾ ബുക്ക് ചെയ്യാവുന്നതാണ്.',
      date: '2026-08-11',
      published: true,
      featured: true
    },
    {
      _id: 'announcement-3',
      _type: 'announcement',
      title: 'Temple Renovation Work Updates',
      malayalamTitle: 'ക്ഷേത്ര നവീകരണ പ്രവർത്തനങ്ങൾ',
      description: 'ക്ഷേത്ര ചുറ്റമ്പലം നവീകരിക്കുന്നതിനുള്ള പ്രവർത്തനങ്ങൾ ആരംഭിച്ചു. നിങ്ങളുടെ സഹായസഹകരണങ്ങൾ നൽകുക.',
      date: '2026-07-20',
      published: true,
      featured: true
    }
  ];
  for (const a of announcements) {
    await client.createOrReplace(a);
  }
  console.log('✔ Announcements created');

  // 7. Events
  const events = [
    {
      _id: 'event-1',
      _type: 'event',
      title: 'Classical Dance Evening',
      malayalamTitle: 'നൃത്തസന്ധ്യ',
      date: '2026-02-17',
      time: '06:30 PM',
      location: 'ക്ഷേത്ര സാംസ്കാരിക വേദി',
      description: 'പ്രശസ്ത കലാകാരന്മാർ അണിനിരക്കുന്ന ഭരതനാട്യ കച്ചേരി.',
      type: 'upcoming'
    },
    {
      _id: 'event-2',
      _type: 'event',
      title: 'Devotional Songs Ganamela',
      malayalamTitle: 'ഭക്തിഗാനമേള',
      date: '2026-02-18',
      time: '07:30 PM',
      location: 'ക്ഷേത്ര മൈതാനം',
      description: 'പ്രശസ്ത ഗായകരുടെ നേതൃത്വത്തിൽ ഭക്തിഗാനസുധ.',
      type: 'upcoming'
    },
    {
      _id: 'event-3',
      _type: 'event',
      title: 'Annadanam (Grand Feast)',
      malayalamTitle: 'മഹാപ്രസാദ വിതരണം (അന്നദാനം)',
      date: '2026-02-22',
      time: '12:00 PM',
      location: 'അന്നദാന മണ്ഡപം',
      description: 'ആറാട്ട് പ്രമാണിച്ച് ഭക്തജനങ്ങൾക്കായി വിഭവസമൃദ്ധമായ സദ്യ.',
      type: 'upcoming'
    }
  ];
  for (const e of events) {
    await client.createOrReplace(e);
  }
  console.log('✔ Events created');

  // 8. History
  const historyItems = [
    { _id: 'history-1', _type: 'history', year: '1850', title: 'ക്ഷേത്രത്തിന്റെ ഉത്ഭവം', description: 'ഗ്രാമത്തിലെ പൂർവികർ മഹാദേവ ചൈതന്യം ദർശിച്ച് നിർമ്മിച്ച ചെറിയൊരു ആരാധനാലയം.' },
    { _id: 'history-2', _type: 'history', year: '1920', title: 'പ്രതിഷ്ഠാ പുനരുദ്ധാരണം', description: 'ക്ഷേത്രം പുനർനിർമ്മിച്ച് പുതിയ ശിലാവിഗ്രഹം ശാസ്ത്രീയ പൂജകളോടെ പ്രതിഷ്ഠിച്ചു.' },
    { _id: 'history-3', _type: 'history', year: '1980', title: 'ചുറ്റമ്പലം പണി', description: 'സമൂഹത്തിന്റെ പങ്കാളിത്തത്തോടെ വലിയ ചുറ്റമ്പലവും വിളക്കുമാടവും പൂർത്തിയാക്കി.' },
    { _id: 'history-4', _type: 'history', year: '2015', title: 'ധ്വജപ്രതിഷ്ഠ', description: 'പ്രൗഢഗംഭീരമായ കൊടിമരം പ്രതിഷ്ഠിച്ച് വാർഷിക പെരുന്നാൾ കൂടുതൽ സജീവമാക്കി.' },
  ];
  for (const h of historyItems) {
    await client.createOrReplace(h);
  }
  console.log('✔ History items created');

  console.log('\n🎉 ALL WEBSITE CONTENT HAS BEEN SEEDED INTO SANITY STUDIO SUCCESSFULLY!');
};

seedData().catch((err) => {
  console.error('Error seeding Sanity dataset:', err);
});
