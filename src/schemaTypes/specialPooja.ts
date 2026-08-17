import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'specialPooja',
  title: 'Special Poojas (വിശേഷാൽ പൂജകൾ)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (തലക്കെട്ട് / പൂജയുടെ പേര്)',
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
      title: 'Date / Period (തീയതി / സമയം)',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Summary (ചുരുക്കം)',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Detailed Content (വിശദമായ പൂജാ വിവരങ്ങൾ)',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image (ചിത്രം)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF Document (അനുബന്ധ PDF രേഖകൾ)',
      type: 'file',
      options: {
        accept: '.pdf'
      }
    }),
  ],
})
