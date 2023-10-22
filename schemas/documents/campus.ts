import { CompassIcon } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'campus',
  title: 'Campus',
  icon: CompassIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'eg: Boston',
      validation: (rule) => rule.required(),
    }),
  ],
})