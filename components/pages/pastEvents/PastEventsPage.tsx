import React from 'react'

import type { PastEventCardPayload } from '@/types'

import { PastEventsListItem } from './PastEventsListItem'

export interface PastEventsPageProps {
  data: PastEventCardPayload[] | null
}

export function PastEventsPage({ data }: PastEventsPageProps) {
  if (!data || data.length === 0) {
    return <div className="text-center">No Past Events</div>
  }

  return (
    <div className="max-w-screen-lg px-4 py-8 mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold md:text-5xl">Past Events</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {data.map((event) => (
          <PastEventsListItem key={event._id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default PastEventsPage
