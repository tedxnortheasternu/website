'use client'

import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import {
  CalendarIcon,
  CalendarPlusIcon,
  ClockIcon,
  MapPinIcon,
} from 'lucide-react'

import ImageBox from '@/components/shared/ImageBox'
import dayjs from '@/lib/dayjs'
import { downloadICS } from '@/lib/utils'
import type { UpcomingEventPayload } from '@/types'

export interface EventPageProps {
  data: UpcomingEventPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function EventPage({ data, encodeDataAttribute }: EventPageProps) {
  if (!data) return null

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

  console.log(data)
  return (
    <>
      <div className="space-y-6">
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
              data-sanity={encodeDataAttribute?.('coverGraphic')}
              image={coverGraphic}
              alt={`Cover image for ${name}`}
              className="relative aspect-[16/9]"
            />
          ) : null}

          <div className="grid grid-cols-1 p-3 space-y-4 lg:p-4">
            {/* Date/Time/Location */}
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              <div className="flex flex-col gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-100">
                <CalendarIcon />
                {dayjs(startDateTime).local().format('MMM. D, YYYY')}
              </div>
              <div className="flex flex-col gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-100">
                <ClockIcon />
                {dayjs(startDateTime).local().format('h:mma')} -{' '}
                {dayjs(endDateTime).local().format('h:mma z')}
              </div>
              <div className="flex flex-col col-span-2 gap-2 px-4 pt-4 pb-3 rounded-md md:col-span-1 bg-slate-100">
                <MapPinIcon />
                {location}
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-600">{briefDescription}</p>

            <button
              onClick={() =>
                downloadICS(
                  name,
                  startDateTime,
                  endDateTime,
                  briefDescription ?? '',
                  location,
                )
              }
              className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-xs font-bold text-white uppercase transition-colors bg-red-600 rounded-full w-max hover:bg-red-700"
            >
              Add to Calendar <CalendarPlusIcon size={16} />
            </button>

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
