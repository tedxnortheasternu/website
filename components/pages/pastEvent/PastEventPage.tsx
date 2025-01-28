import { EncodeDataAttributeCallback } from '@sanity/react-loader'

import ImageBox from '@/components/shared/ImageBox'
import dayjs from '@/lib/dayjs'
import type { UpcomingEventPayload } from '@/types'

export interface PastEventPageProps {
  data: Array<{ event: UpcomingEventPayload }> | null
  encodeDataAttribute?: EncodeDataAttributeCallback
  slug: string
}

export function PastEventPage({
  data,
  encodeDataAttribute,
  slug,
}: PastEventPageProps) {
  const currentSlug = slug
  if (!data || data.length === 0) return <p>No data available</p>

  const eventObject = data.find((d) => d.event[0].event.slug === currentSlug)
  if (!eventObject) return <p>No event found for this slug</p>
  const { event } = eventObject.event[0]
  const name = event.name
  const startDateTime = event.startDateTime
  const briefDescription = event.briefDescription
  const coverGraphic = event.coverGraphic

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
