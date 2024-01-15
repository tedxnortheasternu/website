import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { EventsPage } from '@/components/pages/events/EventsPage'
import { loadEventsPage } from '@/sanity/loader/loadQuery'
const EventsPagePreview = dynamic(
  () => import('@/components/pages/events/EventsPagePreview'),
)

export default async function ApplyRoute() {
  const initial = await loadEventsPage()

  if (draftMode().isEnabled) {
    return <EventsPagePreview initial={initial} />
  }

  if (!initial.data) {
    return <div className="text-center">There are no upcoming events.</div>
  }

  return <EventsPage data={initial.data} />
}
