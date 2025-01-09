import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import renaissanceLogo from '@/components/images/renaissance-dark.png'
import unchartedLogo from '@/components/images/uncharted/TEDxNortheasternU_Black_Uncharted_Transparent_1750x475.png'

export default function RenaissanceOverview() {
  return (
    <div className="w-full p-6 !pt-0 border-y xl:border xl:rounded-md md:p-12 border-renaissance-light bg-[#748cab]/30">
      <div className="mx-auto font-serif prose">
        <div className="-ml-3.5 my-20">
          <Image
            src={unchartedLogo}
            alt="Renaissance Logo"
            className="h-auto max-w-full mx-auto w-[28rem]"
          />
        </div>

        <p>
          <strong>TEDxNortheasternU: Uncharted</strong> Uncharted sets forth on
          a day of insightful TEDx Talks and innovative ideas that observe the
          changing present.
        </p>

        <p>
          During the intermission, all attendees are invited to explore xLabs -
          dynamic exhibits that allow organizations to actively engage with our
          audience through workshops, crafts, and hands-on demonstrations. Other
          features include live performances as a source of entertainment and
          showcase the power of innovation in our journey to understanding the
          world.
        </p>

        <p>
          <strong>Join us on Saturday, February 22nd</strong> to spread
          transformative ideas, spark creativity, and inspire change within our
          Northeastern community.{' '}
        </p>

        {/* <Link
          href="/renaissance/tickets"
          className="inline-flex items-center gap-2 px-6 py-2 mt-4 text-xl no-underline uppercase transition-colors rounded-full text-renaissance-light font-renaissance bg-renaissance-dark w-max hover:bg-black"
        >
          Get Your Ticket to Renaissance <ArrowRightIcon size={16} />
        </Link> */}

        {/* <div className="mt-12 aspect-video">
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.youtube.com/embed/QHgxTwobwXk"
            title="THEME REVEAL | TEDxNortheasternU 2025: Uncharted"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div> */}
      </div>
    </div>
  )
}
