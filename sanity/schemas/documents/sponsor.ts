import { HelpingHand } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'sponsor',
  title: 'Sponsor',
  icon: HelpingHand,
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'Sponsor Name, eg: Northeastern University',
      validation: (rule) => rule.required(),
    }),

    defineField({
      type: 'image',
      name: 'logo',
      title: 'Logo',
    }),

    defineField({
      type: 'string',
      name: 'description',
      title: 'Brief Descriptio',
      description: 'Description of the sponsor',
    }),

    defineField({
      type: 'url',
      name: 'websiteLink',
      title: 'Website Link',
      description: 'Link to the sponsor website',
      validation: (rule) => rule.required(),
    }),
  ],
})
