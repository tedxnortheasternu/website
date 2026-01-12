import { ArrowRightIcon, ClockIcon, MapPinIcon } from 'lucide-react'
import Link from 'next/link'

import { resolveHref } from '@/sanity/lib/utils'
import type { PositionPayload } from '@/types'

interface PositionProps {
  position: PositionPayload
}

export function PositionListItem(props: PositionProps) {
  const { position } = props

  const href = resolveHref('position', position._id)

  if (!href) return null
  console.log(position.name)
  console.log(position.priorityRank)

  return (
    <div className="flex flex-col p-4 transition border-t first:border-0 border-slate-200">
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

          {/* Campuses/Expected Hours */}
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
            href={href}
            className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-xs font-bold text-white uppercase transition-colors bg-red-600 rounded-full w-max hover:bg-red-700"
          >
            Learn More <ArrowRightIcon size={16} />
          </Link>

          <Link
            target="_blank"
            href="https://airtable.com/appaQrU3UQvRIleJT/shrd80SX5RxZBBJ5j"
            className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-xs font-bold text-red-600 uppercase transition-colors rounded-full w-max hover:text-red-700"
          >
            Apply Now <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
