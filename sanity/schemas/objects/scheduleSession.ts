import { defineField, defineType } from 'sanity'

// A titled block of the program, e.g. "Session 1". Array order is display
// order, so there is deliberately no `order` field here or on the items.
export default defineType({
  name: 'scheduleSession',
  title: 'Schedule Session',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [{ type: 'scheduleItem' }],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({ title, items }) {
      const count = Array.isArray(items) ? items.length : 0
      return {
        title,
        subtitle: `${count} ${count === 1 ? 'item' : 'items'}`,
      }
    },
  },
})
