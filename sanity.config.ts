/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { CogIcon } from 'lucide-react'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { presentationTool } from 'sanity/presentation'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import { apiVersion, dataset, projectId } from '@/sanity/lib/api'
import { locate } from '@/sanity/plugins/locate'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
import article from '@/sanity/schemas/documents/article'
import campus from '@/sanity/schemas/documents/campus'
import event from '@/sanity/schemas/documents/event'
import eventCategory from '@/sanity/schemas/documents/eventCategory'
import member from '@/sanity/schemas/documents/member'
import page from '@/sanity/schemas/documents/page'
import position from '@/sanity/schemas/documents/position'
import sponsor from '@/sanity/schemas/documents/sponsor'
import team from '@/sanity/schemas/documents/team'
import duration from '@/sanity/schemas/objects/duration'
import milestone from '@/sanity/schemas/objects/milestone'
import range from '@/sanity/schemas/objects/range'
import timeline from '@/sanity/schemas/objects/timeline'
import home from '@/sanity/schemas/singletons/home'
import settings from '@/sanity/schemas/singletons/settings'

import pastEvents from './sanity/schemas/documents/pastEvents'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'TEDxNortheasternU Website'

export const PREVIEWABLE_DOCUMENT_TYPES = [
  home.name,
  page.name,
  event.name,
] satisfies string[]

export const PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS = [
  page.name,
  event.name,
] satisfies typeof PREVIEWABLE_DOCUMENT_TYPES

// Used to generate URLs for drafts and live previews
export const PREVIEW_BASE_URL = '/api/draft'

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  icon: CogIcon,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,

      // Documents
      article,
      page,
      event,
      pastEvents,
      eventCategory,
      member,
      position,
      team,
      sponsor,
      campus,

      // Objects
      duration,
      milestone,
      range,
      timeline,
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure([home, settings]),
    }),
    // Add the "Open preview" action
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: PREVIEW_BASE_URL,
        },
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
