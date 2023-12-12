import { ArrowRightIcon, ClockIcon, MapPinIcon } from 'lucide-react'
import Link from 'next/link'

import type { PositionPayload } from '@/types'

interface PositionProps {
  position: PositionPayload
  odd: number
}

export function PositionListItem(props: PositionProps) {
  const { position, odd } = props

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
            Position
            <span className="text-slate-400">&middot;</span>
            {position.team ? (
              <span className="bg-red-600 rounded-full px-2 py-0.5 text-white">
                {position.team.name}
              </span>
            ) : null}
          </div>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
            {position.name}
          </h3>

          {/* Date/Time/Location */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-100">
              <MapPinIcon />
              {position.campuses.map(({ name }) => name).join(' · ')}
            </div>
            <div className="flex flex-col gap-2 px-4 pt-4 pb-3 rounded-md bg-slate-100">
              <ClockIcon />
              {position.expectedHoursPerWeek.min ?? 0}-
              {position.expectedHoursPerWeek.max ?? 10} hrs/week
            </div>
          </div>
        </div>

        <div>
          {/* Overview  */}
          <p>{position.description}</p>

          <Link
            target="_blank"
            href="https://airtable.com/shrZ5zWkRRS75nEvN"
            className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-xs font-bold text-white uppercase transition-colors bg-red-600 rounded-full w-max hover:bg-red-700"
          >
            Apply Today <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
