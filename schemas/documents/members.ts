import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'members',
  title: 'Members',
  icon: DocumentIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'eg: Jay Sella',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'reference',
      to: [{ type: 'teams' }],
      name: 'team',
      title: 'Team',
      description: 'eg: Marketing',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'campus',
      description:
        'eg: Boston',
      title: 'Campus',
      type: 'reference',
      to: [{ type: 'campus' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'major',
      title: 'Major',
      description:
        "eg: Computer Science",
    }),
    defineField({
      name: 'hometown',
      title: 'Hometown',
      description: 'eg: Milwaukee',
      type: 'string',
    }),
    defineField({
      name: 'goTOflavor',
      title: 'Go to ice cream flavor',
      type: 'string',
      description: 'eg: Choclate Chunk',
    }),
  ],
})
