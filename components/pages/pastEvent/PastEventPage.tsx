import { EncodeDataAttributeCallback } from '@sanity/react-loader'

import ImageBox from '@/components/shared/ImageBox'
import dayjs from '@/lib/dayjs'
import type { UpcomingEventPayload } from '@/types'

export interface PastEventPageProps {
  data: Array<{ event: UpcomingEventPayload }> | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function PastEventPage({
  data,
  encodeDataAttribute,
}: PastEventPageProps) {
  if (!data || data.length === 0) return <p>No data available</p>

  // Assuming you're still just displaying the first event
  const { event } = data[1]
  const { name, briefDescription, coverGraphic, startDateTime } = event

  // Debug: Check the structure of the coverGraphic
  console.log('Cover Graphic Info:', coverGraphic)

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
            alt={`Cover image for ${name}`}
            className="relative aspect-[16/9]"
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
