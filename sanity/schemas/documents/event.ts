import { CalendarDays } from 'lucide-react'
import { defineField, defineType } from 'sanity'

const year = new Date().getFullYear().toString() + '/'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarDays,
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'eg: Speak, See, Succeed: Script + Visuals',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description: 'Generated ID for the event',
      validation: (rule) => rule.required(),
      options: {
        source: 'name',
        slugify: (source) =>
          source
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/\+/g, '')
            .replace(/\-+/g, '-')
            .replace(/^/, year)
            .replaceAll(',', '')
            .replaceAll(':', '')
            .slice(0, 200),
        maxLength: 200,
      },
    }),
    defineField({
      type: 'text',
      name: 'briefDescription',
      title: 'Brief Description',
      description: 'A short description of the event',
    }),
    defineField({
      type: 'image',
      name: 'coverGraphic',
      title: 'Cover Graphic',
      description: 'Upload a cover image for the event',
    }),
    defineField({
      type: 'reference',
      name: 'category',
      title: 'Category',
      to: [{ type: 'eventCategory' }], // Reference the 'Event Category' schema
      description: 'Event Category (create new categories in Sanity)',
    }),
    defineField({
      type: 'reference',
      name: 'campuses',
      title: 'Campuses',
      to: [{ type: 'campus' }], // Reference the 'Campus' schema
      description: 'Event Campus (create new campuses in Sanity)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'datetime',
      name: 'startDateTime',
      title: 'Start Date and Time',
      description: 'Date and time when the event starts',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'datetime',
      name: 'endDateTime',
      title: 'End Date and Time',
      description: 'Date and time when the event ends',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'location',
      title: 'Location',
      description: 'Event location',
      validation: (rule) => rule.required(),
    }),
  ],
})
