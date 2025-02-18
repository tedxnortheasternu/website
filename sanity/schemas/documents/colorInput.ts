// schema.js or schema.ts
import { colorInput } from '@sanity/color-input'
import { defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'readMoreButtonColor',
      title: 'Read More Button Color',
      type: 'color',
    //   options: {
    //     inputComponent: colorInput, 
    //   },
    },
    {
      name: 'alpha',
      title: 'Opacity',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(1),
    },
  ],
});
