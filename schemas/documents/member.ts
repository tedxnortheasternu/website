import { UserIcon } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'member',
  title: 'Member',
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
      name: 'team',
      title: 'Team',
      to: [{ type: 'team' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'reference',
      name: 'campus',
      title: 'Campuses',
      to: [{ type: 'campus' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'major',
      title: 'Major',
      description: 'eg: Computer Science',
    }),
    defineField({
      type: 'string',
      name: 'hometown',
      title: 'Hometown',
      description: 'City and State or City and Country, eg: Dallas, TX',
    }),
    defineField({
      type: 'string',
      name: 'goToIceCream',
      title: 'Go-to Ice Cream Flavor',
      description: 'eg: Chocolate Chunk',
    }),
    defineField({
      type: 'string',
      name: 'position',
      title: 'Go-to Ice Cream Flavor',
      description: 'eg: Chocolate Chunk',
    }),
  ],
})
