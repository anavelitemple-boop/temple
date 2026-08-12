import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'festivalSchedule',
  title: 'Festival Schedule (ഉത്സവ പരിപാടികൾ)',
  type: 'document',
  fields: [
    defineField({
      name: 'day',
      title: 'Day Number (ഉത്സവ ദിവസം - e.g. ഒന്നാം ദിവസം)',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date (തീയതി)',
      type: 'date',
    }),
    defineField({
      name: 'title',
      title: 'Program Title (പ്രധാന പരിപാടി)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Details (വിവരങ്ങൾ)',
      type: 'text',
    }),
    defineField({
      name: 'time',
      title: 'Time (സമയം)',
      type: 'string',
    }),
  ],
})
