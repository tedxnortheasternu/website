import { defineField, defineType } from 'sanity'

// A named image type (rather than an inline image) so `GalleryImagePayload`
// in types/index.ts has something to map to.
export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      type: 'string',
      name: 'caption',
      title: 'Caption',
    }),
    defineField({
      type: 'string',
      name: 'credit',
      title: 'Photo Credit',
    }),
  ],
})
