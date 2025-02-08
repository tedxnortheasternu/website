import { EyeOffIcon, FileTextIcon, RadioIcon } from 'lucide-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'article',
  title: 'Article',
  icon: FileTextIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'authors',
      title: 'Authors',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
      description: 'A brief overview of this article',
      validation: (rule) => rule.required(),
    }),
    defineField({
        type: 'array',
        name: 'content',
        title: 'Content',
        of: [
          defineArrayMember({
            type: 'block',
            styles: [],
            lists: [{
              title: 'Normal', value: 'normal'
            }],
            marks: {
              annotations: [],
              decorators: [],
            },
          }),
        ],
      }),
    defineField({
      type: 'boolean',
      name: 'showArticle',
      title: 'Show Article',
      initialValue: false,
    }),
    defineField({
      type: 'reference',
      name: 'articlePhoto',
      title: 'Article Photo',
      to: [{ type: 'image' }],
    }),
    defineField({
      type: 'datetime',
      name: 'postDateTime',
      title: 'Posting Date',
    }),
    defineField({
      type: 'string',
      name: 'linkToArticle',
      title: 'Insert Link to Article'
    }),
    defineField({
      type: 'string',
      name: 'articleType',
      title: 'Insert the article type (Blog, Op-ed, etc)'
    })
  ],
  preview: {
    select: {
      name: 'title',
      description: 'description',
      showArticle: 'showArticle',
    },
    prepare({ name, description, showArticle }) {
      return {
        title: name,
        subtitle: description,
        media: showArticle ? RadioIcon : EyeOffIcon,
      }
    },
  },
})
