import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Events (പരിപാടികൾ)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title (പരിപാടിയുടെ പേര്)',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Event Date (തീയതി)',
      type: 'date',
    }),
    defineField({
      name: 'time',
      title: 'Time (സമയം)',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location (സ്ഥലം)',
      type: 'string',
      initialValue: 'ക്ഷേത്ര മൈതാനം',
    }),
    defineField({
      name: 'description',
      title: 'Description (വിവരണം)',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Event Image (ചിത്രം)',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'type',
      title: 'Event Type (വിഭാഗം)',
      type: 'string',
      options: {
        list: [
          {title: 'വരാനിരിക്കുന്നത് (Upcoming)', value: 'upcoming'},
          {title: 'കഴിഞ്ഞത് (Past)', value: 'past'},
        ],
      },
      initialValue: 'upcoming',
    }),
  ],
})
