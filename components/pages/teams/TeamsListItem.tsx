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
            {team.name ? (
              <span className="bg-red-600 rounded-full px-2 py-0.5 text-white">
                {team.slug}
              </span>
            ) : null}
          </div>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
            {team.name}
          </h3>

          <div>
            {/* Overview  */}
            {team.description ? <p>{team.description}</p> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
