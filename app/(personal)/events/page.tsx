import EventPage from 'components/pages/events/Event'
import { getUpcomingEvents } from 'lib/sanity.fetch'
import { upcomingEventsQuery } from 'lib/sanity.queries'
import { LiveQuery } from 'next-sanity/preview/live-query'

const data = await getUpcomingEvents()

export default function EventRoute() {
  return (
    <LiveQuery query={upcomingEventsQuery} initialData={data} enabled={false}>
      <EventPage data={data} />
    </LiveQuery>
  )
}
