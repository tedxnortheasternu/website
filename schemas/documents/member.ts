import { UserIcon } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'members',
  title: 'Members',
  icon: UserIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'First and Last, eg: Jay Sella',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'reference',
      to: [{ type: 'teams' }],
      name: 'team',
      title: 'Team',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'campus',
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
      description: 'eg: Computer Science',
    }),
    defineField({
      name: 'hometown',
      title: 'Hometown',
      description: 'City and State or City and Country, eg: Dallas, TX',
      type: 'string',
    }),
    defineField({
      name: 'goToIceCream',
      title: 'Go-to Ice Cream Flavor',
      type: 'string',
      description: 'eg: Chocolate Chunk',
    }),
  ],
})
