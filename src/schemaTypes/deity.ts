import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'deity',
  title: 'Deities (പ്രതിഷ്ഠകൾ)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name (പേര്)',
      type: 'string',
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
  ],
})
