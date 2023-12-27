import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { Header } from '@/components/shared/Header'
import { SponsorListItem } from '@/components/shared/sponsor/SponsorListItem'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import { EventsListItem } from '../events/EventsListItem'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title = '', overview = [] } = data ?? {}

  return (
    <div className="max-w-3xl mx-auto space-y-16">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}

      {data?.upcomingEvents ? (
        <section>
          <h2 className="mb-6 text-3xl font-bold text-center">
            Upcoming Events
          </h2>

          <div className="border rounded-md border-slate-200">
            {data?.upcomingEvents.map((event, key) => {
              const href = resolveHref('event', event.slug)
              if (!href) return null
              return (
                <Link key={key} href={href}>
                  <EventsListItem event={event} odd={key % 2} />
                </Link>
              )
            })}
          </div>
        </section>
      ) : null}

      {data?.sponsors ? (
        <section>
          <h2 className="mb-6 text-3xl font-bold text-center">Sponsors</h2>

          <div className="grid items-center border rounded-md md:grid-cols-3 border-slate-200">
            {data?.sponsors.map((sponsor, key) => {
              return <SponsorListItem key={key} sponsor={sponsor} />
            })}
          </div>
        </section>
      ) : null}
    </div>
  )
}
      

export default HomePage
