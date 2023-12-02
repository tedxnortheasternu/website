import dayjs from 'dayjs'
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react'
import type { UpcomingEventPayload } from 'types'

interface EventProps {
  event: UpcomingEventPayload
  odd: number
}

export function EventsListItem(props: EventProps) {
  const { event, odd } = props

  return (
    <div
      className={`flex flex-col p-4 transition hover:bg-slate-50 xl:flex-row ${
        odd && 'border-t border-slate-100 xl:flex-row-reverse'
      }`}
    >
      <div className="grid justify-between w-full gap-8 p-3 md:grid-cols-2">
        <div className="">
          {/* Tags */}
          <div className="mb-2 text-xs font-bold uppercase">
            Event &middot;{' '}
            {event.category ? (
              <span className="bg-red-600 rounded-full px-2 py-0.5 text-white">
                {event.category.name}
              </span>
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
              {dayjs(event.startDateTime).format('MMM. D, YYYY')}
            </div>
            <div className="flex flex-col gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-100">
              <ClockIcon />
              {dayjs(event.startDateTime).format('h:mma')} -{' '}
              {dayjs(event.endDateTime).format('h:mma')}
            </div>
            <div className="flex flex-col col-span-2 gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-100">
              <MapPinIcon />
              {event.location}
            </div>
          </div>
        </div>

        <div className="">
          {/* Overview  */}
          {event.briefDescription ? (
            <p className="">{event.briefDescription}</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
