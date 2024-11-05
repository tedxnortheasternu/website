import React from 'react'
import ImageBox from '@/components/shared/ImageBox'
import type { UpcomingEventPayload } from '@/types'
import Link from 'next/link' // Import Link component from next/link

export interface PastEventsListItemProps {
  event: UpcomingEventPayload
}

export function PastEventsListItem({ event }) {
  // Define the URL for the event details page
  const eventDetailsUrl = `/pastevents/${event.event.slug}` // Assuming each event has a unique ID used in the URL

  return (
    <Link href={eventDetailsUrl} passHref>
      {' '}
      {/* Use Link to navigate */}
      <div className="relative overflow-hidden border rounded-md cursor-pointer group">
        {/* Event Image */}
        {event.event.coverGraphic ? (
          <ImageBox
            image={event.event.coverGraphic}
            alt={event.event.name}
            className="object-contain object-center rounded-t-md aspect-square"
          />
        ) : (
          <div className="bg-gray-200 aspect-square">No image available</div> // Placeholder for missing images
        )}

        {/* Name displayed at the bottom of the image */}
        <div className="absolute bottom-0 left-0 w-full p-4 text-lg font-bold text-white bg-black bg-opacity-50">
          {event.event.name}
        </div>

        {/* Description (Optional if you want it to appear here) */}
        {/* <div className="absolute inset-0 p-4 text-white transition-opacity duration-300 ease-in-out bg-black bg-opacity-75 opacity-0 group-hover:opacity-100">
          <p>{event.event.briefDescription}</p>
        </div> */}
      </div>
    </Link>
  )
}

export default PastEventsListItem
