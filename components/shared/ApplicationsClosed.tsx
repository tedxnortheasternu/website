import Link from 'next/link'

type Variant = 'team' | 'speaker'

const COPY: Record<Variant, { title: string; body: string }> = {
  team: {
    title: 'Team Applications Are Closed',
    body: 'We are not accepting team applications right now. Applications reopen at the start of each cycle — follow us on Instagram or check back here for the announcement.',
  },
  speaker: {
    title: 'Speaker Applications Are Closed',
    body: 'We are not accepting speaker applications or nominations right now. Watch for the call for speakers ahead of our next flagship event.',
  },
}

export function ApplicationsClosed({ variant }: { variant: Variant }) {
  const { title, body } = COPY[variant]

  return (
    <div className="max-w-screen-md mx-auto text-center">
      <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
        {title}
      </h1>
      <div className="p-6 mt-8 border rounded-md border-slate-200 bg-slate-50">
        <p className="text-slate-700">{body}</p>
      </div>
      <Link
        href="/"
        className="inline-block mt-6 text-sm font-bold text-red-600 uppercase hover:text-red-700"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default ApplicationsClosed
