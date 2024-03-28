import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* <div className="flex flex-col items-center justify-center w-full max-w-screen-xl gap-4 p-4 mx-auto text-center border-y xl:my-2 lg:flex-row xl:border bg-renaissance-light xl:rounded-md border-renaissance-dark">
        <p className="!m-0 text-pretty">
          Join us for <strong>TEDxNortheasternU: Renaissance</strong>, our 2024
          flagship speaker event, on February 24th.
        </p>
        <Link
          href="/renaissance"
          className="shrink-0 inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold text-renaissance-light transition-colors rounded-full bg-renaissance-dark w-max hover:bg-black"
        >
          Learn More <ArrowRightIcon size={16} />
        </Link>
      </div> */}

      <main className="w-full max-w-screen-xl mx-auto my-8 md:my-12">
        {children}
      </main>
    </div>
  )
}
