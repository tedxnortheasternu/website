import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* <div className="flex flex-col items-center justify-center w-full max-w-screen-xl gap-4 p-4 mx-auto text-center bg-red-300 border-red-800 border-y xl:my-2 lg:flex-row xl:border xl:rounded-md">
        <p className="!m-0 text-pretty">
          <strong>Applications Now Open for TEDxNortheasternU 2024-2025</strong>
        </p>
        <Link
          href="/apply"
          className="shrink-0 inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold transition-colors rounded-full bg-red-500/85 w-max hover:bg-red-400"
        >
          Apply Here <ArrowRightIcon size={16} />
        </Link>
      </div> */}

      <main className="w-full max-w-screen-xl mx-auto my-8 md:my-12">
        {children}
      </main>
    </div>
  )
}
