import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import { MemberPayload, TeamsPayload } from 'types'

import { MembersListItem } from './MembersListItem'

export interface MembersPageProps {
  data: TeamsPayload[] | null
  members: MemberPayload[] | null
}

export function MembersPage({ data = [], members = [] }: MembersPageProps) {
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Our Team
        </h1>
      </div>

      {/* Events List */}
      {data && data.length > 0 ? (
        <div className="mx-auto border rounded-md border-slate-200 overflow-clip">
          {data.map((team, key) => {
            const href = resolveHref('team', team.slug)
            if (!href) return null
            return (
              <div key={key}>
                <MembersListItem team={team} odd={key % 2} members={members} />
              </div>
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

export default MembersPage
