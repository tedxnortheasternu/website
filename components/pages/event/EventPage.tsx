import ImageBox from 'components/shared/ImageBox'
import dayjs from 'dayjs'
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react'
import type { UpcomingEventPayload } from 'types'

export interface EventPageProps {
  data: UpcomingEventPayload | null
}

export function EventPage({ data }: EventPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    name,
    briefDescription,
    coverGraphic,
    campuses,
    location,
    category,
    startDateTime,
    endDateTime,
  } = data ?? {}

  return (
    <>
      <div className="mb-20 space-y-6">
        {/* Header */}
        <div className="text-center">
          {category ? (
            <span className="px-4 py-1 font-bold text-white uppercase bg-red-600 rounded-full">
              {category.name}
            </span>
          ) : null}
          <h1 className="mx-auto mt-4 text-3xl font-extrabold md:text-5xl">
            {name}
          </h1>
        </div>

        <div className="border rounded-md">
          {/* Image  */}
          {coverGraphic ? (
            <ImageBox
              image={coverGraphic}
              alt={`Cover image for ${name}`}
              classesWrapper="relative aspect-[16/9]"
            />
          ) : null}

          <div className="grid grid-cols-1 p-3 space-y-4 lg:p-4">
            {/* Date/Time/Location */}
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              <div className="flex flex-col gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-100">
                <CalendarIcon />
                {dayjs(startDateTime).format('MMM. D, YYYY')}
              </div>
              <div className="flex flex-col gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-100">
                <ClockIcon />
                {dayjs(startDateTime).format('h:mma')} -{' '}
                {dayjs(endDateTime).format('h:mma')}
              </div>
              <div className="flex flex-col col-span-2 gap-2 px-4 pt-4 pb-3 rounded-md md:col-span-1 bg-slate-100">
                <MapPinIcon />
                {location}
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-600">{briefDescription}</p>

            {/* Campuses */}
            {campuses ? (
              <>
                <h2 className="text-xs md:text-sm">Campuses</h2>
                <div className="flex flex-row flex-wrap text-md md:text-lg">
                  {campuses?.map((campus, key) => (
                    <div key={key} className="mr-1 break-words ">
                      {campus.name}
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default EventPage
