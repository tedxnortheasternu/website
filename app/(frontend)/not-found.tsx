import { ArrowRightIcon } from '@sanity/icons'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-xl mx-auto h-52 bg-slate-50 xl:rounded-md">
      <h2 className="mb-2 text-3xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-xs font-bold text-white uppercase transition-colors bg-red-600 rounded-full w-max hover:bg-red-700"
      >
        Return Home <ArrowRightIcon />
      </Link>
    </div>
  )
}
