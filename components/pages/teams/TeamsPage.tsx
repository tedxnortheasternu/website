import { TeamsPagePayload } from '@/types'

import { TeamsListItem } from './TeamsListItem'

export interface TeamsPageProps {
  data: TeamsPagePayload | null
}

export function TeamsPage({ data }: TeamsPageProps) {
  if (!data || data.length === 0) {
    return <div className="text-center">No Teams.</div>
  }
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Our Teams
        </h1>
      </div>

      <div className="flex flex-col border rounded-md border-slate-200">
        {/* Teams List */}
        {data.map((team) => {
          return <TeamsListItem key={team.slug} team={team} />
        })}
      </div>
    </div>
  )
}

export default TeamsPage
