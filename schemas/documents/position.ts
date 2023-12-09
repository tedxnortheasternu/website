import { EyeOffIcon, PuzzleIcon, RadioIcon } from 'lucide-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'position',
  title: 'Position',
  icon: PuzzleIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
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
      name: 'campuses',
      title: 'Campuses',
      to: [{ type: 'campus' }],
      description: 'All campuses this position is open to applicants from',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'number',
      name: 'expectedHoursPerWeek',
      title: 'Expected Hours Per Week',
      initialValue: 5,
    }),
    defineField({
      type: 'boolean',
      name: 'acceptingApplications',
      title: 'Accepting Applications',
      initialValue: true,
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
      description: 'A brief overview of this position',
    }),
    defineField({
      type: 'array',
      name: 'responsibilities',
      title: 'Responsibilities',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [],
          lists: [
            {
              title: 'Bullet',
              value: 'bullet',
            },
          ],
          marks: {
            annotations: [],
            decorators: [],
          },
        }),
      ],
    }),
    defineField({
      type: 'array',
      name: 'requirements',
      title: 'Requirements',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [],
          lists: [
            {
              title: 'Bullet',
              value: 'bullet',
            },
          ],
          marks: {
            annotations: [],
            decorators: [],
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      team: 'team.name',
      acceptingApplications: 'acceptingApplications',
    },
    prepare({ name, team, acceptingApplications }) {
      return {
        title: name,
        subtitle: team,
        media: acceptingApplications ? RadioIcon : EyeOffIcon,
      }
    },
  },
})
