import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage Content (ഹോംപേജ് വിവരങ്ങൾ)',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title (ഹീറോ തലക്കെട്ട്)',
      type: 'string',
      initialValue: 'ആനവേലി ക്ഷേത്രം',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle (ഹീറോ ഉപതലക്കെട്ട്)',
      type: 'string',
      initialValue: 'നമ്മുടെ ഗ്രാമത്തിന്റെ ആത്മീയ പൈതൃകം',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description (ഹീറോ വിവരണം)',
      type: 'text',
      initialValue: 'ആനവേലി ശ്രീ മഹാദേവ ക്ഷേത്രത്തിന്റെ വെബ്സൈറ്റിലേക്ക് ഹൃദയം നിറഞ്ഞ സ്വാഗതം. ഭഗവാന്റെ കാരുണ്യവും അനുഗ്രഹവും എന്നും നിങ്ങളോടൊപ്പം ഉണ്ടാകട്ടെ.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image (ചിത്രം)',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroVideoUrl',
      title: 'Hero Background Video URL (വീഡിയോ ലിങ്ക് / MP4)',
      type: 'url',
      description: 'Direct link to an MP4 background video. If provided, video will play in background with image fallback.',
    }),
    defineField({
      name: 'primaryCTA',
      title: 'Primary CTA Text (പ്രധാന ബട്ടൺ പേര്)',
      type: 'string',
      initialValue: 'ക്ഷേത്രത്തെ അറിയാം',
    }),
    defineField({
      name: 'secondaryCTA',
      title: 'Secondary CTA Text (രണ്ടാമത്തെ ബട്ടൺ)',
      type: 'string',
      initialValue: 'പരിപാടികൾ കാണാം',
    }),
    defineField({
      name: 'festivalRef',
      title: 'Active Festival Countdown (പെരുന്നാൾ കൗണ്ട്ഡൗൺ)',
      type: 'reference',
      to: [{type: 'festival'}],
    }),
  ],
})
