'use client'

import dynamic from 'next/dynamic'

import type { TeamsPageProps } from './TeamsPage'

// Re-exported components using next/dynamic ensures they're not bundled
// and sent to the browser unless actually used, with draftMode().enabled.

const TeamsPage = dynamic(() => import('./TeamsPage'))

export default function TeamsPagePreview({ data }: TeamsPageProps) {
  if (!data) {
    return (
      <div className="text-center">
        Please start editing your teams documents to see the preview!
      </div>
    )
  }

  return <TeamsPage data={data} />
}
