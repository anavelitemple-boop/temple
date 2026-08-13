import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'announcement',
  title: 'Announcements (പ്രധാന അറിയിപ്പുകൾ)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (തലക്കെട്ട്)',
      type: 'string',
    }),
    defineField({
      name: 'malayalamTitle',
      title: 'Malayalam Title (മലയാളം തലക്കെട്ട്)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (ലിങ്ക് / URL Identifier)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description (വിവരണം)',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image (ചിത്രം)',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'date',
      title: 'Date (തീയതി)',
      type: 'date',
    }),
    defineField({
      name: 'published',
      title: 'Published (പ്രസിദ്ധീകരിച്ചിട്ടുണ്ട്)',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage (ഹോംപേജിൽ കാണിക്കുക)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
