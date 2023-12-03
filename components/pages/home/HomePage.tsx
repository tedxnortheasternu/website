import { Header } from 'components/shared/Header'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import type { HomePagePayload, UpcomingEventPayload } from 'types'

import { EventsListItem } from '../events/EventsListItem'

export interface HomePageProps {
  data: HomePagePayload | null
  upcomingEvents: UpcomingEventPayload[] | null
}

export function HomePage({ data, upcomingEvents }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title = '', overview = [] } = data ?? {}

  return (
    <div className="max-w-3xl space-y-16">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}

      {upcomingEvents ? (
        <div>
          <h2 className="mb-6 text-3xl font-bold text-center">
            Upcoming Events
          </h2>

          <div className="border rounded-md border-slate-200">
            {upcomingEvents.map((event, key) => {
              const href = resolveHref('event', event.slug)
              if (!href) return null
              return (
                <Link key={key} href={href}>
                  <EventsListItem event={event} odd={key % 2} />
                </Link>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default HomePage
