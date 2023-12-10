import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { LiveQuery } from 'next-sanity/preview/live-query'

import ApplyPage from '@/components/pages/apply/ApplyPage'
import ApplyPagePreview from '@/components/pages/apply/ApplyPagePreview'
import {
  getPositionsAcceptingApplications,
  getSettings,
} from '@/lib/sanity.fetch'
import { defineMetadata } from '@/lib/utils.metadata'
import { positionsAcceptingApplicationsQuery } from '@/sanity/lib/queries'

export const runtime = 'edge'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings()

  return defineMetadata({
    description: '',
    image: settings?.ogImage,
    title: 'Apply · Open Positions',
  })
}

export default async function IndexRoute() {
  const data = await getPositionsAcceptingApplications()

  if (!data && !draftMode().isEnabled) {
    return (
      <div className="text-center">
        We do not currently have any positions accepting applications.
      </div>
    )
  }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={positionsAcceptingApplicationsQuery}
      initialData={data}
      as={ApplyPagePreview}
    >
      <ApplyPage data={data} />
    </LiveQuery>
  )
}
