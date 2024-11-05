import React from 'react'

import { PastEventsPayload } from '@/types'

import { PastEventsListItem } from './PastEventsListItem'

export interface PastEventsPageProps {
  data: PastEventsPayload | null // This should be an array or null
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
        {data.map(
          (event, index) => (
            console.log(event), // Log each event to see its structure
            (<PastEventsListItem key={event.slug || index} event={event} />)
          ),
        )}
      </div>
    </div>
  )
}

export default PastEventsPage