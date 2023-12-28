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
          {positions.map((position) => {
            return <PositionListItem key={position._id} position={position} />
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
