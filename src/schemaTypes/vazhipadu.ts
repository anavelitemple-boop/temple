import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'vazhipadu',
  title: 'Vazhipadus (വഴിപാടുകൾ)',
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
      name: 'price',
      title: 'Price in INR (വില)',
      type: 'number',
    }),
    defineField({
      name: 'category',
      title: 'Category (വിഭാഗം)',
      type: 'string',
      options: {
        list: [
          {title: 'ശിവൻ (Shiva)', value: 'shiva'},
          {title: 'ഗണപതി (Ganapathy)', value: 'ganapathy'},
          {title: 'ദേവി (Devi)', value: 'devi'},
          {title: 'മറ്റുള്ളവ (Others)', value: 'others'},
        ],
      },
    }),
  ],
})
