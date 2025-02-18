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
      type: 'image',
      name: 'articlePhoto',
      title: 'Upload an article photo'
    }),
    defineField({
      type: 'datetime',
      name: 'postDateTime',
      title: 'Posting Date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'linkToArticle',
      title: 'Insert Link to Article'
    }),
    defineField({
      type: 'string',
      name: 'articleType',
      title: 'Insert the article type (ex. Blog, Op-ed, etc)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'semesterPosted',
      title: 'Insert the semester this was posted (ex. Fall 2024, Spring 2025)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'color',
      name: 'readMoreButtonColor',
      title: 'Pick a color for the read more button',
    }),
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
