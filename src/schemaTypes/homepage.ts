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
      name: 'heroVideoFile',
      title: 'Hero Background Video File (വീഡിയോ ഫയൽ അപ്‌ലോഡ് - MP4/WebM)',
      type: 'file',
      options: {
        accept: 'video/mp4,video/webm,video/*',
      },
      description: 'Upload an MP4/WebM video file directly from your computer for the Hero section background.',
    }),
    defineField({
      name: 'heroVideoUrl',
      title: 'Hero Background Video URL (വീഡിയോ ലിങ്ക് - Alternative)',
      type: 'url',
      description: 'Optional direct MP4 link if not uploading a file.',
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
    defineField({
      name: 'carouselSlides',
      title: 'Hero Carousel Slides (ഹീറോ സ്ലൈഡറുകൾ / അറിയിപ്പ് കാർഡുകൾ)',
      type: 'array',
      description: 'Add, edit, or remove slides in the Hero Live Updates Carousel.',
      of: [
        {
          type: 'object',
          title: 'Carousel Slide',
          fields: [
            defineField({
              name: 'title',
              title: 'Slide Title (തലക്കെട്ട്)',
              type: 'string',
            }),
            defineField({
              name: 'type',
              title: 'Badge Type (വിഭാഗം / ടാഗ്)',
              type: 'string',
              description: 'e.g. നട തുറക്കുന്ന സമയം, ഇന്നത്തെ വിശേഷാൽ പൂജ, പ്രധാന അറിയിപ്പ്',
            }),
            defineField({
              name: 'icon',
              title: 'Emoji Icon (ഐക്കൺ)',
              type: 'string',
              description: 'e.g. 🪔, 👤, 📢',
            }),
            defineField({
              name: 'description',
              title: 'Description Content (വിവരണം)',
              type: 'text',
            }),
          ],
        },
      ],
    }),
  ],
})
