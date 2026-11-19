import { CalendarDays } from 'lucide-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

// Every field here is additive relative to the original single-field schema,
// so existing `pastEvent` documents open without a migration. The type name
// must stay `pastEvent` or the live documents are orphaned.
export default defineType({
  name: 'pastEvent',
  title: 'Past Event',
  type: 'document',
  icon: CalendarDays,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'e.g. "TEDxNortheasternU 2026"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'theme',
      title: 'Theme',
      description: 'e.g. "Refraction"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description:
        'Generated from the theme. The year is part of the URL already, so do not add it here.',
      // Default slugify on purpose: no year prefix (see `event.ts`, whose
      // prefix uses the Studio's load-time year, not the event's).
      options: {
        source: 'theme',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'number',
      name: 'eventYear',
      title: 'Event Year',
      description:
        'The year the event happened, not the current year. Used in the archive URL.',
      validation: (rule) => rule.required().integer().min(2010),
    }),
    defineField({
      type: 'date',
      name: 'eventDate',
      title: 'Event Date',
      options: {
        dateFormat: 'MMMM D, YYYY',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'boolean',
      name: 'published',
      title: 'Show on the Past Events page',
      description:
        'Leave off while entering content. The page is still reachable at its direct URL for review.',
      initialValue: false,
    }),
    defineField({
      type: 'string',
      name: 'tagline',
      title: 'Tagline',
    }),
    defineField({
      type: 'text',
      name: 'briefDescription',
      title: 'Brief Description',
      description: 'Shown on the Past Events index card.',
      validation: (rule) => rule.max(200),
    }),
    defineField({
      type: 'array',
      name: 'overview',
      title: 'Overview',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      type: 'image',
      name: 'coverGraphic',
      title: 'Cover Graphic',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'logo',
      title: 'Logo',
    }),
    defineField({
      type: 'reference',
      name: 'campus',
      title: 'Campus',
      to: [{ type: 'campus' }],
    }),
    defineField({
      type: 'string',
      name: 'location',
      title: 'Location',
    }),
    defineField({
      type: 'url',
      name: 'recapVideoUrl',
      title: 'Recap Video URL',
    }),
    defineField({
      type: 'url',
      name: 'talksPlaylistUrl',
      title: 'Talks Playlist URL',
    }),
    defineField({
      type: 'url',
      name: 'flickrUrl',
      title: 'Flickr URL',
    }),
    defineField({
      type: 'url',
      name: 'programUrl',
      title: 'Program URL',
    }),
    defineField({
      type: 'array',
      name: 'talks',
      title: 'Talks',
      of: [defineArrayMember({ type: 'talk' })],
    }),
    defineField({
      type: 'array',
      name: 'performers',
      title: 'Performers',
      of: [
        defineArrayMember({ type: 'reference', to: [{ type: 'performer' }] }),
      ],
    }),
    defineField({
      type: 'array',
      name: 'schedule',
      title: 'Schedule',
      of: [defineArrayMember({ type: 'scheduleSession' })],
    }),
    defineField({
      type: 'array',
      name: 'gallery',
      title: 'Gallery',
      description: 'Up to 24 photos.',
      of: [defineArrayMember({ type: 'galleryImage' })],
      options: {
        layout: 'grid',
      },
      validation: (rule) => rule.max(24),
    }),
    defineField({
      type: 'array',
      name: 'sponsors',
      title: 'Sponsors',
      of: [
        defineArrayMember({ type: 'reference', to: [{ type: 'sponsor' }] }),
      ],
    }),
    defineField({
      type: 'reference',
      name: 'event',
      title: 'Linked Event document (optional)',
      to: [{ type: 'event' }],
    }),
  ],
  preview: {
    select: {
      theme: 'theme',
      title: 'title',
      eventYear: 'eventYear',
      media: 'coverGraphic',
      eventName: 'event.name',
    },
    prepare({ theme, title, eventYear, media, eventName }) {
      return {
        title: theme || title || eventName || 'Untitled past event',
        subtitle: eventYear ? String(eventYear) : undefined,
        media,
      }
    },
  },
})
