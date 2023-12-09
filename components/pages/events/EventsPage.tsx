import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import { UpcomingEventPayload } from 'types'

import { EventsListItem } from './EventsListItem'

export interface EventsPageProps {
  data: UpcomingEventPayload[] | null
}

export function EventsPage({ data = [] }: EventsPageProps) {
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Upcoming Events
        </h1>
      </div>

      {/* Events List */}
      {data && data.length > 0 ? (
        <div className="mx-auto border rounded-md border-slate-200 overflow-clip">
          {data.map((event, key) => {
            const href = resolveHref('event', event.slug)
            if (!href) return null
            return (
              <Link key={key} href={href}>
                <EventsListItem event={event} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      ) : (
        // TODO: improve styling
        <div className="text-center">No events.</div>
      )}
    </div>
  )
}

export default EventsPage
