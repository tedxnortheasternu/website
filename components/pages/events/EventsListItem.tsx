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
      className={`flex flex-col p-4 transition hover:bg-slate-50/50 ${
        odd && 'border-t border-slate-200'
      }`}
    >
      <div className="grid gap-8 p-3 md:grid-cols-2">
        <div>
          {/* Tags */}
          <div className="flex flex-row items-center gap-1.5 mb-2 text-xs font-bold uppercase">
            Event
            <span className="text-slate-400">&middot;</span>
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

        <div>
          {/* Overview  */}
          {event.briefDescription ? <p>{event.briefDescription}</p> : null}
        </div>
      </div>
    </div>
  )
}
