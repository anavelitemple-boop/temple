import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'history',
  title: 'History Timeline (ചരിത്രം)',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year or Period (വർഷം / കാലഘട്ടം)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title (തലക്കെട്ട്)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description (വിവരണം)',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Historical Image (ചിത്രം)',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
