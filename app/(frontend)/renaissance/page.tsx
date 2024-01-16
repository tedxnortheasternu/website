import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import renaissanceLogo from '@/components/images/renaissance-dark.png'

export default function RenaissanceOverview() {
  return (
    <div className="w-full p-6 !pt-0 border-y xl:border xl:rounded-md md:p-12 border-renaissance-light bg-renaissance-light/15">
      <div className="mx-auto font-serif prose">
        <div className="-ml-3.5">
          <Image
            src={renaissanceLogo}
            alt="Renaissance Logo"
            className="h-auto max-w-full mx-auto w-[28rem]"
          />
        </div>

        <p>
          <strong>TEDxNortheasternU: Renaissance</strong> is a day of inspiring
          TEDx Talks and transformative ideas that celebrates the rebirth of
          human potential. It embodies the idea of pushing boundaries, breaking
          barriers, and exploring new frontiers.
        </p>

        <p>
          During intermission, attendees have the opportunity to explore our
          xLabs — dynamic exhibits that allow organizations to actively engage
          with our audience through workshops, arts and crafts, and hands-on
          demonstrations. Renaissance also features music and dance performances
          as a source of entertainment and a reminder of the power of creativity
          in transforming our world.
        </p>

        <p>
          <strong>Join us on February 24th</strong> to share innovative ideas,
          spark creativity, and inspire change across the global Northeastern
          community.{' '}
        </p>

        <Link
          href="/renaissance/tickets"
          className="inline-flex items-center gap-2 px-6 py-2 mt-4 text-xl no-underline uppercase transition-colors rounded-full text-renaissance-light font-renaissance bg-renaissance-dark w-max hover:bg-black"
        >
          Get Your Ticket to Renaissance <ArrowRightIcon size={16} />
        </Link>

        <div className="mt-12 aspect-video">
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.youtube.com/embed/QHgxTwobwXk"
            title="THEME REVEAL | TEDxNortheasternU 2024: Renaissance"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
    </div>
  )
}
