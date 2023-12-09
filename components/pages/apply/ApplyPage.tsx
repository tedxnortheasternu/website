import { PositionPayload } from 'types'

import { PositionListItem } from './PositionListItem'

export interface ApplyPageProps {
  data: PositionPayload[] | null
}

export function ApplyPage({ data = [] }: ApplyPageProps) {
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Open Positions
        </h1>
      </div>

      {/* Positions List */}
      {data && data.length > 0 ? (
        <div className="mx-auto border rounded-md border-slate-200 overflow-clip">
          {data.map((position, key) => {
            // const href = resolveHref('position', position.slug)
            // if (!href) return null
            // <Link key={key} href={href}>
            // </Link>
            return (
              <PositionListItem key={key} position={position} odd={key % 2} />
            )
          })}
        </div>
      ) : (
        // TODO: improve styling
        <div className="text-center">No positions.</div>
      )}
    </div>
  )
}

export default ApplyPage
