'use client'

import dynamic from 'next/dynamic'

import type { EventsPageProps } from './EventsPage'

// Re-exported components using next/dynamic ensures they're not bundled
// and sent to the browser unless actually used, with draftMode().enabled.

const EventsPage = dynamic(() => import('./EventsPage'))

export default function EventsPagePreview({ data }: EventsPageProps) {
  if (!data) {
    return (
      <div className="text-center">
        Please start editing your event documents to see the preview!
      </div>
    )
  }

  return <EventsPage data={data} />
}
