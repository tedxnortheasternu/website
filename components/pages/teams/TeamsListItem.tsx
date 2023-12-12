import type { TeamsPayload } from 'types'

interface TeamsProps {
  team: TeamsPayload
  odd: number
}

export function TeamsListItem(props: TeamsProps) {
  const { team } = props

  return (
    <div className={`flex flex-col p-4 transition hover:bg-slate-50/50`}>
      <div className="grid gap-8 p-3 md:grid-cols-2">
        <div>
          {/* Tags */}
          <div className="flex flex-row items-center gap-1.5 mb-2 text-xs font-bold uppercase">
            Team
            <span className="text-slate-400">&middot;</span>
          </div>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
            {team.name}
          </h3>

          {/* Overview  */}
          <h4 className="mb-4 text-2xl tracking-tight md:text-2xl">
            {team.description}
          </h4>
        </div>
      </div>
    </div>
  )
}
