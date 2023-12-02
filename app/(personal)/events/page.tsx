import EventsPage from 'components/pages/events/EventsPage'
import EventsPagePreview from 'components/pages/events/EventsPagePreview'
import { getSettings, getUpcomingEvents } from 'lib/sanity.fetch'
import { upcomingEventsQuery } from 'lib/sanity.queries'
import { defineMetadata } from 'lib/utils.metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { LiveQuery } from 'next-sanity/preview/live-query'

export const runtime = 'edge'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings()

  return defineMetadata({
    description: '',
    image: settings?.ogImage,
    title: 'Upcoming Events',
  })
}

export default async function IndexRoute() {
  const data = await getUpcomingEvents()

  if (!data && !draftMode().isEnabled) {
    return <div className="text-center">There are no events.</div>
  }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={upcomingEventsQuery}
      initialData={data}
      as={EventsPagePreview}
    >
      <EventsPage data={data} />
    </LiveQuery>
  )
}
