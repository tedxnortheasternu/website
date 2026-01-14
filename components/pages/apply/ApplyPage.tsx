import { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { PositionPayload } from '@/types'

import { PositionListItem } from './PositionListItem'

export interface ApplyPageProps {
  data: PositionPayload[] | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ApplyPage({
  data: positions,
  encodeDataAttribute,
}: ApplyPageProps) {
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Open Positions
        </h1>
      </div>

      {/* Positions List */}
      {positions && positions.length > 0 ? (
        <div className="mx-auto border rounded-md border-slate-200 overflow-clip">
          {positions
            .slice() // Makes a shallow copy of the array
            .sort((a, b) => b.priorityRank - a.priorityRank)
            .map((position) => {
              return <PositionListItem key={position._id} position={position} />
            })}
        </div>
      ) : (
        <div className="text-center">No current positions are available for this semester. If you are interested in joining TEDx, please come back next semester!</div>
      )}
    </div>
  )
}

export default ApplyPage
