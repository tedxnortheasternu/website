import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

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

      {/* General Application CTA */}
      <div className="mb-8 p-6 text-center border rounded-md border-slate-200 bg-slate-50">
        <p className="mb-4 text-slate-700">
          Interested in joining our team? Check out our open positions below or apply now using the general team application!
        </p>
        <Link
          target="_blank"
          href="https://airtable.com/appaQrU3UQvRIleJT/shr67F3NWrxOUSiw6"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white uppercase transition-colors bg-red-600 rounded-full hover:bg-red-700"
        >
          Apply to Join TEDx <ArrowRightIcon size={16} />
        </Link>
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
        <div className="text-center text-slate-500">No specific positions are listed right now. Use the application link above to express your interest.</div>
      )}
    </div>
  )
}

export default ApplyPage
