import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'templeInfo',
  title: 'Temple Information (ക്ഷേത്ര വിവരങ്ങൾ)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Temple Name (ക്ഷേത്രത്തിന്റെ പേര്)',
      type: 'string',
      initialValue: 'ആനവേലി ക്ഷേത്രം',
    }),
    defineField({
      name: 'mainDeity',
      title: 'Main Deity (പ്രധാന പ്രതിഷ്ഠ)',
      type: 'string',
      initialValue: 'ശ്രീ മഹാദേവൻ',
    }),
    defineField({
      name: 'subDeities',
      title: 'Sub Deities (ഉപദേവതകൾ)',
      type: 'array',
      of: [{type: 'string'}],
      initialValue: ['ഗണപതി', 'അയ്യപ്പൻ', 'ദേവി', 'നാഗരാജാവ്'],
    }),
    defineField({
      name: 'darshanTimings',
      title: 'Darshan Timings (ദർശന സമയം)',
      type: 'text',
      initialValue: 'രാവിലെ 05:00 AM - 11:30 AM\nവൈകുന്നേരം 05:00 PM - 08:00 PM',
    }),
    defineField({
      name: 'historyOverview',
      title: 'History Overview (ചരിത്ര വിവരണം)',
      type: 'text',
      initialValue: 'ശതവർഷങ്ങൾ പഴക്കമുള്ള ആനവേലി ക്ഷേത്രം ഗ്രാമത്തിന്റെ ആത്മീയതയുടെയും സംസ്കാരത്തിന്റെയും കേന്ദ്രമാണ്...',
    }),
  ],
})
