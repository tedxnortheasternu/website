'use client'

import {
  ArrowRightIcon,
  CalendarIcon,
  CalendarPlusIcon,
  ClockIcon,
  MapPinIcon,
} from 'lucide-react'
import Link from 'next/link'

import dayjs from '@/lib/dayjs'
import { downloadICS } from '@/lib/utils'
import { resolveHref } from '@/sanity/lib/utils'
import type { UpcomingEventPayload } from '@/types'

interface EventProps {
  event: UpcomingEventPayload
}

export function EventsListItem(props: EventProps) {
  const { event } = props

  if (!event) return null

  return (
    <div className="flex flex-col p-4 border-t first:border-0 border-slate-200">
      <div className="grid gap-8 p-3 md:grid-cols-2">
        <div>
          {/* Tags */}
          <div className="flex flex-row items-center gap-1.5 mb-2 text-xs font-bold uppercase">
            Event
            {event.category ? (
              <>
                <span className="text-slate-400">&middot;</span>
                <span className="bg-red-600 rounded-full px-2 py-0.5 text-white">
                  {event.category.name}
                </span>
              </>
            ) : null}
          </div>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
            {event.name}
          </h3>

          {/* Date/Time/Location */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-100">
              <CalendarIcon />
              {dayjs(event.startDateTime).local().format('MMM. D, YYYY')}
            </div>
            <div className="flex flex-col gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-100">
              <ClockIcon />
              {dayjs(event.startDateTime).local().format('h:mma')} -{' '}
              {dayjs(event.endDateTime).local().format('h:mma z')}
            </div>
            <div className="flex flex-col col-span-2 gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-100">
              <MapPinIcon />
              {event.location}
            </div>
          </div>
        </div>

        <div>
          {/* Overview  */}
          {event.briefDescription ? <p>{event.briefDescription}</p> : null}

          <button
            onClick={() =>
              downloadICS(
                event.name,
                event.startDateTime,
                event.endDateTime,
                event.briefDescription ?? '',
                event.location,
              )
            }
            className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-xs font-bold text-white uppercase transition-colors bg-red-600 rounded-full w-max hover:bg-red-700"
          >
            Add to Calendar <CalendarPlusIcon size={16} />
          </button>

          <Link
            href={resolveHref('event', event.slug)}
            className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-xs font-bold text-red-600 uppercase transition-colors rounded-full w-max hover:text-red-700"
          >
            View Details <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
