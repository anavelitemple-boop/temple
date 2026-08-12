import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'news',
  title: 'News (വാർത്തകൾ)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title in English (ഇംഗ്ലീഷ് തലക്കെട്ട്)',
      type: 'string',
    }),
    defineField({
      name: 'malayalamTitle',
      title: 'Malayalam Title (മലയാളം തലക്കെട്ട്)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (വെബ് ലിങ്ക്)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'date',
      title: 'Published Date (തീയതി)',
      type: 'date',
    }),
    defineField({
      name: 'summary',
      title: 'Summary (ചുരുക്കം)',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Content (വിശദമായ വിവരങ്ങൾ)',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
    defineField({
      name: 'image',
      title: 'Featured Image (പ്രധാന ചിത്രം)',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
