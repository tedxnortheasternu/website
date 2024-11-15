import React from 'react'
import ImageBox from '@/components/shared/ImageBox'
import type { UpcomingEventPayload } from '@/types'
import Link from 'next/link' // Ensure it's imported correctly

export interface PastEventsListItemProps {
  event: UpcomingEventPayload
}

export function PastEventsListItem({ event }) {
  const { name, slug, coverGraphic, briefDescription } = event.event

  return (
    <Link href={`/pastevents/${slug}`}>
      <div className="relative overflow-hidden border rounded-md cursor-pointer group">
        {/* Event Image */}
        {coverGraphic ? (
          <ImageBox
            image={coverGraphic}
            alt={name}
            className="object-contain object-center rounded-t-md aspect-square"
          />
        ) : (
          <div className="bg-gray-200 aspect-square">No image available</div>
        )}

        {/* Name displayed at the bottom of the image */}
        <div className="absolute bottom-0 left-0 w-full p-4 text-lg font-bold text-white bg-black bg-opacity-50">
          {name}
        </div>

        {/* Optional description on hover */}
        {/* <div className="absolute inset-0 p-4 text-white transition-opacity duration-300 ease-in-out bg-black bg-opacity-75 opacity-0 group-hover:opacity-100">
          <p>{briefDescription}</p>
        </div> */}
      </div>
    </Link>
  )
}

export default PastEventsListItem
