import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings (സൈറ്റ് ക്രമീകരണങ്ങൾ)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title (സൈറ്റ് നാമം)',
      type: 'string',
      initialValue: 'ആനവേലി ക്ഷേത്രം',
    }),
    defineField({
      name: 'description',
      title: 'Site Description (വിവരണം)',
      type: 'text',
      initialValue: 'ആനവേലി ഗ്രാമത്തിന്റെ ആത്മീയ പൈതൃകം',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number (ഫോൺ നമ്പർ)',
      type: 'string',
      initialValue: '+91 9447000000',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number (വാട്സ്ആപ്പ്)',
      type: 'string',
      description: 'Format with country code: e.g. 919447000000',
      initialValue: '919447000000',
    }),
    defineField({
      name: 'email',
      title: 'Email Address (ഇമെയിൽ)',
      type: 'string',
      initialValue: 'info@anavelitemple.org',
    }),
    defineField({
      name: 'address',
      title: 'Address (മേൽവിലാസം)',
      type: 'text',
      initialValue: 'ആനവേലി ശ്രീ മഹാദേവ ക്ഷേത്രം, ആനവേലി പി.ഒ, പത്തനംതിട്ട, കേരളം - 689645',
    }),
    defineField({
      name: 'mapsLink',
      title: 'Google Maps Link (ഗൂഗിൾ മാപ്പ് ലിങ്ക്)',
      type: 'url',
      initialValue: 'https://maps.google.com',
    }),
  ],
})
