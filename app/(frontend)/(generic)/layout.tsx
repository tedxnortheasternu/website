import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-center justify-center w-full max-w-screen-xl gap-4 p-4 mx-auto my-2 text-center border bg-renaissance-light md:rounded-md border-renaissance-dark">
        <p className="!m-0">
          Join us for <strong>TEDxNortheasternU: Renaissance</strong>, our 2024
          flagship speaker event, on February 24th.
        </p>
        <Link
          target="_blank"
          href="/renaissance"
          className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold text-white transition-colors rounded-full bg-renaissance-dark w-max hover:bg-renaissance-dark/85"
        >
          Learn More <ArrowRightIcon size={16} />
        </Link>
      </div>

      <main className="w-full max-w-screen-xl mx-auto my-8 md:my-12">
        {children}
      </main>
    </div>
  )
}
