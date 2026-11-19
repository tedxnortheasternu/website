import 'server-only'

import { groq } from 'next-sanity'

import { client } from '@/sanity/lib/client'
import { pastEventPaths } from '@/sanity/lib/queries'
import { token } from '@/sanity/lib/token'

// Used in `generateStaticParams`
export function generateStaticSlugs(type: string) {
  // Not using loadQuery as it's optimized for fetching in the RSC lifecycle
  return client
    .withConfig({
      token,
      perspective: 'published',
      useCdn: false,
      stega: false,
    })
    .fetch<string[]>(
      groq`*[_type == $type && defined(slug.current)]{"slug": slug.current}`,
      { type },
    )
}

// `generateStaticSlugs` only returns `{slug}`, which can't satisfy the
// `pastevents/[year]/[slug]` route, so past events get their own helper.
export function generatePastEventParams() {
  return client
    .withConfig({
      token,
      perspective: 'published',
      useCdn: false,
      stega: false,
    })
    .fetch<{ year: string; slug: string }[]>(pastEventPaths)
}
