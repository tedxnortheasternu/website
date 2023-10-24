import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'event',
  title: 'Event',
  icon: DocumentIcon,
  fields: [
    defineField({
      type:'string',
      name: 'name',
      title: 'Name',
      description: 'e.g., Speak, See, Succeed: Script + Visuals',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
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
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description: 'Generated ID for the event',
      validation: (rule) => rule.required(),
      options: {
        source: 'name', // Specify that the slug is generated from the 'name' field
        maxLength: 200, // Adjust the max length as needed
      },
    }),
    defineField({
      type: 'reference',
      name: 'category',
      title: 'Category',
      description: 'Event Category (create new categories in Sanity)',
      to: [{ type: 'eventCategory' }], // Reference the 'Event Category' schema
    }),
    defineField({
      type: 'reference',
      name: 'campus',
      title: 'Campus',
      description: 'Event Campus (create new campuses in Sanity)',
      to: [{ type: 'campus' }], // Reference the 'Campus' schema
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
});
