import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pooja',
  title: 'Poojas (പൂജകൾ)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'English Name (ഇംഗ്ലീഷ് പേര്)',
      type: 'string',
    }),
    defineField({
      name: 'malayalamName',
      title: 'Malayalam Name (മലയാളം പേര്)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description (വിവരണം)',
      type: 'text',
    }),
    defineField({
      name: 'time',
      title: 'Timing (സമയം)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price in INR (വില)',
      type: 'number',
    }),
    defineField({
      name: 'active',
      title: 'Is Active Today? (ഇന്നുണ്ടോ?)',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
