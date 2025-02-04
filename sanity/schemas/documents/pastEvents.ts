import { CalendarDays } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pastEvent',
  title: 'Past Event',
  type: 'document',
  icon: CalendarDays,
  fields: [
    defineField({
      type: 'reference',
      name: 'event',
      title: 'Event',
      to: [{ type: 'event' }],
      validation: (rule) => rule.required()
    })
  ]
})
