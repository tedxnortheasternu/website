import { Tag } from 'lucide-react'
import { defineType } from 'sanity'

export default defineType({
  name: 'eventCategory',
  title: 'Event Category',
  type: 'document',
  icon: Tag,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the event category',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the event category',
    },
  ],
})
