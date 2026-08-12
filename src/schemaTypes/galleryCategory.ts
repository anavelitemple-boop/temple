import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'galleryCategory',
  title: 'Gallery Categories (ഗാലറി വിഭാഗങ്ങൾ)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name in English (വിഭാഗത്തിന്റെ പേര്)',
      type: 'string',
    }),
    defineField({
      name: 'malayalamName',
      title: 'Category Name in Malayalam (മലയാളം പേര്)',
      type: 'string',
    }),
  ],
})
