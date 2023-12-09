import { defineField } from 'sanity'

import { RangeInput } from './RangeInput'

export default defineField({
  type: 'object',
  name: 'range',
  title: 'Range',
  components: {
    input: RangeInput,
  },
  fields: [
    defineField({
      type: 'number',
      name: 'min',
      title: 'Min',
    }),
    defineField({
      type: 'number',
      name: 'max',
      title: 'Max',
    }),
  ],
})
