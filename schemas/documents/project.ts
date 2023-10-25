import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'project',
  title: 'Project',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'This field is the title of your project.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description: 'Unique slug to be inputted',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'overview',
      title: 'Overview',
      description:
        'Used both for the <meta> description tag for SEO, and project subheader.',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      type: 'image',
      name: 'coverImage',
      title: 'Cover Image',
      description:
        'This image will be used as the cover image for the project. If you choose to add it to the show case projects, this is the image displayed in the list within the homepage.',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'duration',
      name: 'duration',
      title: 'Duration',
    }),
    defineField({
      type: 'string',
      name: 'client',
      title: 'Client',
    }),
    defineField({
      type: 'url',
      name: 'site',
      title: 'Site',
    }),
    defineField({
      type: 'array',
      name: 'tags',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      type: 'array',
      name: 'description',
      title: 'Project Description',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                type: 'object',
                name: 'link',
                title: 'Link',
                fields: [
                  {
                    type: 'url',
                    name: 'href',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
          styles: [],
        }),
        // Custom blocks
        defineArrayMember({
          type: 'timeline',
          name: 'timeline',
        }),
        defineField({
          type: 'image',
          name: 'image',
          title: 'Image',
          icon: ImageIcon,
          options: {
            hotspot: true,
          },
          preview: {
            select: {
              imageUrl: 'asset.url',
              title: 'caption',
            },
          },
          fields: [
            defineField({
              type: 'string',
              name: 'caption',
              title: 'Caption',
            }),
            defineField({
              type: 'string',
              name: 'alt',
              title: 'Alt text',
              description:
                'Alternative text for screenreaders. Falls back on caption if not set',
            }),
          ],
        }),
      ],
    }),
  ],
})
