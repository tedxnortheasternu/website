import { UsersIcon } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'team',
  title: 'Team',
  icon: UsersIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'eg: Marketing',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description: 'Generated from name',
      validation: (rule) => rule.required(),
      options: {
        source: 'name', // Specify that the slug is generated from the 'name' field
        maxLength: 200, // Adjust the max length as needed
      },
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
      description: 'Description of the team',
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      type: 'number',
      name: 'priorityRank',
      title: 'Priority Placement Of Team',
      initialValue: 1
    }),
  ],
})
