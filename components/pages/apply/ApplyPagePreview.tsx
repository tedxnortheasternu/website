'use client'

import dynamic from 'next/dynamic'

import type { ApplyPageProps } from './ApplyPage'

// Re-exported components using next/dynamic ensures they're not bundled
// and sent to the browser unless actually used, with draftMode().enabled.

const ApplyPage = dynamic(() => import('./ApplyPage'))

export default function ApplyPagePreview({ data }: ApplyPageProps) {
  if (!data) {
    return (
      <div className="text-center">
        Please start editing your event documents to see the preview!
      </div>
    )
  }

  return <ApplyPage data={data} />
}
