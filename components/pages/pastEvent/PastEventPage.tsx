import { EncodeDataAttributeCallback } from '@sanity/react-loader'

import ImageBox from '@/components/shared/ImageBox'
import dayjs from '@/lib/dayjs'
import type { UpcomingEventPayload } from '@/types'

import { EventPageProps } from '../event/EventPage'

export interface PastEventPageProps {
  data: UpcomingEventPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function PastEventPage({
  data,
  encodeDataAttribute,
}: EventPageProps) {
  if (!data) return <p>No event data available.</p>

  const { name, briefDescription, coverGraphic, startDateTime } = data

  // Debug output
  console.log('Event Data:', data)

  return (
    <div className="max-w-4xl p-6 mx-auto">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">{name}</h1>
        <h2 className="text-xl text-gray-600">
          {dayjs(startDateTime).format('MMMM D, YYYY')}
        </h2>
      </div>

      {coverGraphic ? (
        <div className="my-6">
          <ImageBox
            data-sanity={encodeDataAttribute?.('coverGraphic')}
            image={coverGraphic}
            alt={`Cover image of ${name}`}
            className="object-cover w-full"
          />
        </div>
      ) : (
        <div className="bg-gray-200" style={{ height: '450px' }}>
          No cover image available
        </div>
      )}

      <div className="text-lg text-gray-700">
        <p>{briefDescription || 'No description provided'}</p>
      </div>
    </div>
  )
}

export default PastEventPage
