import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import AboutPage from '@/components/pages/about/AboutPage'
import { loadAboutPage } from '@/sanity/loader/loadQuery'
const AboutPagePreview = dynamic(
  () => import('@/components/pages/about/AboutPagePreview'),
)

export default async function AboutRoute() {
  const initial = await loadAboutPage()

  if (draftMode().isEnabled) {
    return <AboutPagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className="text-center">
        There are no positions currently accepting applications.
      </div>
    )
  }

  return <AboutPage data={initial.data} />
}
