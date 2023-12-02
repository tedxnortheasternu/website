import EventsPage from 'components/pages/events/Events'
import { getUpcomingEvents } from 'lib/sanity.fetch'
import { upcomingEventsQuery } from 'lib/sanity.queries'
import { LiveQuery } from 'next-sanity/preview/live-query'

const upcomingEvents = await getUpcomingEvents()

export default function UpcomingEventsRoute() {
  return (
    <LiveQuery
      query={upcomingEventsQuery}
      initialData={upcomingEvents}
      enabled={false}
    >
      <EventsPage data={upcomingEvents} />
    </LiveQuery>
  )
}
