import 'server-only'

import type { QueryParams } from '@sanity/client'
import { client } from 'lib/sanity.client'
import {
  eventBySlugQuery,
  eventPaths,
  homePageQuery,
  homePageTitleQuery,
  pagePaths,
  pagesBySlugQuery,
  projectPaths,
  settingsQuery,
  upcomingEventsQuery,
} from 'lib/sanity.queries'
import { draftMode } from 'next/headers'
import type {
  HomePagePayload,
  PagePayload,
  SettingsPayload,
  UpcomingEventPayload,
} from 'types'

import { revalidateSecret } from './sanity.api'

export const token = process.env.SANITY_API_READ_TOKEN

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled
  if (isDraftMode && !token) {
    throw new Error(
      'The `SANITY_API_READ_TOKEN` environment variable is required.',
    )
  }

  // @TODO this won't be necessary after https://github.com/sanity-io/client/pull/299 lands
  const sanityClient =
    client.config().useCdn && isDraftMode
      ? client.withConfig({ useCdn: false })
      : client
  return sanityClient.fetch<QueryResponse>(query, params, {
    // We only cache if there's a revalidation webhook setup
    cache: revalidateSecret ? 'force-cache' : 'no-store',
    ...(isDraftMode && {
      cache: undefined,
      token: token,
      perspective: 'previewDrafts',
    }),
    next: {
      ...(isDraftMode && { revalidate: 30 }),
      tags,
    },
  })
}

export function getSettings() {
  return sanityFetch<SettingsPayload>({
    query: settingsQuery,
    tags: ['settings', 'home', 'page', 'project', 'event'],
  })
}

export function getPageBySlug(slug: string) {
  return sanityFetch<PagePayload | null>({
    query: pagesBySlugQuery,
    params: { slug },
    tags: [`page:${slug}`],
  })
}

export function getHomePage() {
  return sanityFetch<HomePagePayload | null>({
    query: homePageQuery,
    tags: ['home'],
  })
}

export function getHomePageTitle() {
  return sanityFetch<string | null>({
    query: homePageTitleQuery,
    tags: ['home'],
  })
}

export function getUpcomingEvents() {
  return sanityFetch<UpcomingEventPayload[] | null>({
    query: upcomingEventsQuery,
    tags: ['events'],
  })
}

export function getEventBySlug(slug: string) {
  return sanityFetch<UpcomingEventPayload | null>({
    query: eventBySlugQuery,
    params: { slug },
    tags: [`event:${slug}`],
  })
}

export function getEventsPaths() {
  return client.fetch<string[]>(
    eventPaths,
    {},
    { token, perspective: 'published' },
  )
}

export function getPagesPaths() {
  return client.fetch<string[]>(
    pagePaths,
    {},
    { token, perspective: 'published' },
  )
}
export function getProjectsPaths() {
  return client.fetch<string[]>(
    projectPaths,
    {},
    { token, perspective: 'published' },
  )
}
