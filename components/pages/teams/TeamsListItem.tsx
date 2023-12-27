import type { TeamPayload } from '@/types'

interface TeamsProps {
  team: TeamPayload
}

export function TeamsListItem(props: TeamsProps) {
  const { team } = props

  return (
    <div className="flex flex-col p-6 border-t md:p-8 first:border-0 border-slate-200">
      {/* Name */}
      <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
        {team.name} Team
      </h2>

      {/* Description  */}
      <p className="text-lg tracking-tight">{team.description}</p>
    </div>
  )
}
