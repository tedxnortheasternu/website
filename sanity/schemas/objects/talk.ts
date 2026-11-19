import { defineField, defineType } from 'sanity'

// One talk given at one event. Per-appearance details (title, description,
// video) live here rather than on `speaker`, so a speaker document can be
// reused across years.
export default defineType({
  name: 'talk',
  title: 'Talk',
  type: 'object',
  fields: [
    defineField({
      type: 'reference',
      name: 'speaker',
      title: 'Speaker',
      to: [{ type: 'speaker' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Talk Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
      rows: 4,
    }),
    defineField({
      type: 'url',
      name: 'videoUrl',
      title: 'Video URL',
      description: 'Link to the recorded talk, e.g. on YouTube.',
      validation: (rule) => rule.uri({ scheme: ['https'] }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'speaker.name',
      media: 'speaker.photo',
    },
  },
})
