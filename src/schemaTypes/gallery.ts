import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery (ഫോട്ടോ ഗാലറി)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (തലക്കെട്ട്)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image (ചിത്രം)',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'category',
      title: 'Category (വിഭാഗം)',
      type: 'reference',
      to: [{type: 'galleryCategory'}],
    }),
    defineField({
      name: 'description',
      title: 'Description (വിവരണം)',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Date (തീയതി)',
      type: 'date',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage (ഹോംപേജിൽ കാണിക്കുക)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
