import 'server-only'

import { draftMode } from 'next/headers'

import { client } from '@/sanity/lib/client'
import {
  aboutPageQuery,
  applyPageQuery as applyPageQuery,
  eventBySlugQuery,
  homePageQuery,
  membersPageQuery as membersPageQuery,
  pagesBySlugQuery,
  settingsQuery,
  teamsPageQuery,
  upcomingEventsQuery,
} from '@/sanity/lib/queries'
import { token } from '@/sanity/lib/token'
import {
  AboutPagePayload,
  HomePagePayload,
  MembersPagePayload,
  PagePayload,
  PositionPayload,
  SettingsPayload,
  TeamsPagePayload,
  UpcomingEventPayload,
} from '@/types'

import { queryStore } from './createQueryStore'

const serverClient = client.withConfig({
  token,
  stega: {
    // Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
    enabled: process.env.VERCEL_ENV === 'preview',
  },
})

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient)

const usingCdn = serverClient.config().useCdn
// Automatically handle draft mode
export const loadQuery = ((query, params = {}, options: any = {}) => {
  const {
    perspective = draftMode().isEnabled ? 'previewDrafts' : 'published',
  } = options
  // Don't cache by default
  let revalidate: NextFetchRequestConfig['revalidate'] = 0
  // If `next.tags` is set, and we're not using the CDN, then it's safe to cache
  if (!usingCdn && Array.isArray(options.next?.tags)) {
    revalidate = false
  } else if (usingCdn) {
    revalidate = 60
  }
  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {}),
    },
    perspective,
    // @TODO add support in `@sanity/client/stega` for the below
    // stega: {enabled: draftMode().isEnabled}
  })
}) satisfies typeof queryStore.loadQuery

/**
 * Loaders that are used in more than one place are declared here, otherwise they're colocated with the component
 */

export function loadSettings() {
  return loadQuery<SettingsPayload>(
    settingsQuery,
    {},
    { next: { tags: ['settings', 'home', 'page'] } },
  )
}

export function loadHomePage() {
  return loadQuery<HomePagePayload | null>(
    homePageQuery,
    {},
    { next: { tags: ['home', 'events', 'sponsors'] } },
  )
}

export function loadPage(slug: string) {
  return loadQuery<PagePayload | null>(
    pagesBySlugQuery,
    { slug },
    { next: { tags: [`page:${slug}`] } },
  )
}

export function loadEventsPage() {
  return loadQuery<UpcomingEventPayload[] | null>(
    upcomingEventsQuery,
    {},
    { next: { tags: [`events`] } },
  )
}

export function loadEvent(slug: string) {
  return loadQuery<UpcomingEventPayload | null>(
    eventBySlugQuery,
    { slug },
    { next: { tags: [`event:${slug}`] } },
  )
}

export function loadAboutPage() {
  return loadQuery<AboutPagePayload | null>(
    aboutPageQuery,
    {},
    { next: { tags: [`members`, `teams`] } },
  )
}

export function loadApplyPage() {
  return loadQuery<PositionPayload[] | null>(
    applyPageQuery,
    {},
    { next: { tags: [`positions`] } },
  )
}

export function loadTeamsPage() {
  return loadQuery<TeamsPagePayload | null>(
    teamsPageQuery,
    {},
    { next: { tags: [`teams`] } },
  )
}

export function loadMembersPage() {
  return loadQuery<MembersPagePayload | null>(
    membersPageQuery,
    {},
    { next: { tags: [`members`, `teams`] } },
  )
}

