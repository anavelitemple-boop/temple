import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'festival',
  title: 'Festival (പെരുന്നാൾ / ഉത്സവം)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Festival Name (ഉത്സവത്തിന്റെ പേര്)',
      type: 'string',
      initialValue: 'ആനവേലി ക്ഷേത്ര പെരുന്നാൾ',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date (തുടങ്ങുന്ന തീയതി)',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date (അവസാനിക്കുന്ന തീയതി)',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description (വിവരണം)',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Banner Image (ചിത്രം)',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'status',
      title: 'Status (നില)',
      type: 'string',
      options: {
        list: [
          {title: 'വരാനിരിക്കുന്നത് (Upcoming)', value: 'upcoming'},
          {title: 'നടന്നുകൊണ്ടിരിക്കുന്നത് (Ongoing)', value: 'ongoing'},
          {title: 'കഴിഞ്ഞത് (Completed)', value: 'completed'},
        ],
      },
      initialValue: 'upcoming',
    }),
  ],
})
