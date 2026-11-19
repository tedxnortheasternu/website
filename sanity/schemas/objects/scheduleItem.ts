import { defineField, defineType } from 'sanity'

type ItemType = 'talk' | 'performance' | 'break'

// The field each item type requires, used by the object-level validation below.
const requiredFieldFor: Record<ItemType, 'speaker' | 'performer' | 'label'> = {
  talk: 'speaker',
  performance: 'performer',
  break: 'label',
}

// One row of an event program. Stores no talk title: the renderer joins on
// speaker id against the event's `talks` array, so the prose lives in one place.
export default defineType({
  name: 'scheduleItem',
  title: 'Schedule Item',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'time',
      title: 'Time',
      description:
        'e.g. "11:15am". Leave blank to share the time slot of the row above.',
    }),
    defineField({
      type: 'string',
      name: 'itemType',
      title: 'Type',
      options: {
        list: [
          { title: 'Talk', value: 'talk' },
          { title: 'Performance', value: 'performance' },
          { title: 'Break', value: 'break' },
        ],
        layout: 'radio',
      },
      initialValue: 'talk',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'reference',
      name: 'speaker',
      title: 'Speaker',
      to: [{ type: 'speaker' }],
      hidden: ({ parent }) => parent?.itemType !== 'talk',
    }),
    defineField({
      type: 'reference',
      name: 'performer',
      title: 'Performer',
      to: [{ type: 'performer' }],
      hidden: ({ parent }) => parent?.itemType !== 'performance',
    }),
    defineField({
      type: 'string',
      name: 'label',
      title: 'Label',
      description: 'e.g. "Lunch", "Opening Remarks".',
      hidden: ({ parent }) => parent?.itemType !== 'break',
    }),
    defineField({
      type: 'text',
      name: 'note',
      title: 'Note',
      rows: 2,
    }),
  ],
  validation: (rule) =>
    rule.custom((value) => {
      const item = value as
        | ({ itemType?: ItemType } & Record<string, unknown>)
        | undefined
      if (!item?.itemType) return true
      const field = requiredFieldFor[item.itemType]
      if (!field || item[field]) return true
      return {
        message: `A ${item.itemType} needs a ${field}.`,
        path: [field],
      }
    }),
  preview: {
    select: {
      time: 'time',
      itemType: 'itemType',
      speakerName: 'speaker.name',
      performerName: 'performer.name',
      label: 'label',
    },
    prepare({ time, itemType, speakerName, performerName, label }) {
      const name =
        itemType === 'talk'
          ? speakerName
          : itemType === 'performance'
            ? performerName
            : label
      return {
        title: name || 'Untitled item',
        subtitle: [time, itemType].filter(Boolean).join(' · '),
      }
    },
  },
})
