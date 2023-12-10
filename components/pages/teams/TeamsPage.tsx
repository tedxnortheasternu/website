import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import { TeamsPayload } from 'types'

import { TeamsListItem } from './TeamsListItem'

export interface TeamsPageProps {
  data: TeamsPayload[] | null
}

export function TeamsPage({ data = [] }: TeamsPageProps) {
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          TedXNortheasternU Teams
        </h1>
      </div>

      {/* Events List */}
      {data && data.length > 0 ? (
        <div className="mx-auto border rounded-md border-slate-200 overflow-clip">
          {data.map((team, key) => {
            const href = resolveHref('team', team.slug)
            if (!href) return null
            return (
              <Link key={key} href={href}>
                <TeamsListItem team={team} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      ) : (
        // TODO: improve styling
        <div className="text-center">No Teams.</div>
      )}
    </div>
  )
}

export default TeamsPage
