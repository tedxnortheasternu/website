import { UsersIcon } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'teams',
  title: 'Teams',
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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Generated from name',
      validation: (rule) => rule.required(),
      options: {
        source: 'name', // Specify that the slug is generated from the 'name' field
        maxLength: 200, // Adjust the max length as needed
      },
    }),
    defineField({
      name: 'description',
      description: 'description of the team',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.max(155).required(),
    }),
  ],
})
