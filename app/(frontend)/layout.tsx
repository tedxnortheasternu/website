import '@/styles/index.css'

import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { Suspense } from 'react'

import { Footer } from '@/components/global/Footer'
import { Navbar } from '@/components/global/Navbar'
import { PreviewBanner } from '@/components/preview/PreviewBanner'
import { token } from '@/lib/sanity.fetch'

const PreviewProvider = dynamic(
  () => import('@/components/preview/PreviewProvider'),
)

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const isDraftMode = draftMode().isEnabled

  const layout = (
    <div className="flex flex-col min-h-screen text-black bg-white">
      {isDraftMode && <PreviewBanner />}
      <Navbar />
      <main className="max-w-screen-xl mx-auto my-8">
        <Suspense>{children}</Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  )

  if (isDraftMode) {
    return <PreviewProvider token={token!}>{layout}</PreviewProvider>
  }

  return layout
}
