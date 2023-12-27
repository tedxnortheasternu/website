import { MembersPagePayload } from '@/types'

import { MembersListItem } from './MembersListItem'

export interface MembersPageProps {
  data: MembersPagePayload | null
}

export function MembersPage({ data }: MembersPageProps) {
  if (!data || data.teams.length === 0) {
    return <div className="text-center">No Teams.</div>
  }
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Our Team
        </h1>
      </div>

      <div className="space-y-16">
        {/* Teams List */}
        {data.teams.map((team, key) => {
          return (
            <div key={key}>
              <MembersListItem
                team={team}
                members={data.members.filter(
                  (m) =>
                    m?.position?.team?.slug === team.slug ||
                    m.team.slug === team.slug,
                )}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MembersPage
