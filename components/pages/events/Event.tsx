import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import { UpcomingEvent } from 'types'

import { EventsListItem } from './EventsListItem'

export function EventPage({
  upcomingEvents = [],
}: {
  upcomingEvents: UpcomingEvent[]
}) {
  return (
    <div className="space-y-20">
      {/* Header */}
      <div className="w-5/6 mx-auto text-center lg:w-3/5">
        <div className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Upcoming Events
        </div>
      </div>

      {/* Events List */}
      {upcomingEvents && upcomingEvents.length > 0 ? (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {upcomingEvents.map((event, key) => {
            const href = resolveHref('event', event.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href}>
                <EventsListItem event={event} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      ) : (
        // TODO: improve styling
        <p>No events.</p>
      )}
    </div>
  )
}

export default EventPage
