import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { title } from 'lib/demo.data';
import { defineArrayMember, defineField, defineType } from 'sanity'


export default defineType({
  type: 'document',
  name: 'campus',
  title: 'Campus',
  icon: DocumentIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'eg: Boston',
      validation: (rule) => rule.required(),
    }),
  ],
})
