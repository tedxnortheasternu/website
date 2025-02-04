import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { InTheNewsPage } from '@/components/pages/inTheNews/InTheNewsPage'
import { loadNewsPage } from '@/sanity/loader/loadQuery'
console.log('entered in the news')
const InTheNewsPagePreview = dynamic(
  () => import('@/components/pages/inTheNews/InTheNewsPagePreview'),
)

export default async function InTheNewsRoute() {
  const initial = await loadNewsPage()
  console.log('entered in the news')
  console.log('Fetched initial data: ', initial)


  if (draftMode().isEnabled) {
    return <InTheNewsPagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        No stories are available right now. Please check back later.
      </div>
    )
  }

  console.log('Outside slug')

  return <InTheNewsPage data={initial.data} />
}
