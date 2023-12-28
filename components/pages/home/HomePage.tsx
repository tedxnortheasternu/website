import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { SponsorListItem } from '@/components/shared/sponsor/SponsorListItem'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import aboutPage from '../../images/aboutPage.jpg'
import { EventsListItem } from '../events/EventsListItem'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  return (
    <div className="space-y-16">
      {/* Header */}
      {/* Top Section */}
      <section className="grid items-center max-w-screen-xl gap-5 mx-auto lg:gap-10 md:grid-cols-2">
        <Image
          src={aboutPage}
          alt="speaker talking to a small group"
          className="object-cover w-full h-full"
        />
        <div className="px-4 md:pl-0 lg:px-0">
          {/* Text Section */}
          <h1 className="mb-2 text-3xl font-bold text-balance">
            Innovative ideas. Groundbreaking research. Breakthrough
            technologies.
          </h1>
          <p>
            {"We're"} a student-run organization that brings together the global
            Northeastern community. Our events feature local speakers who are
            leaders in their fields. We aim to inspire and educate while
            fostering a sense of community and collaboration.
          </p>

          <Link
            href="https://mailchi.mp/39a289393abb/tedxnu-mailing-list"
            className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-sm font-bold text-white transition-colors bg-red-600 rounded-full hover:bg-red-700"
          >
            Join Our Mailing List <ArrowRightIcon size={16} />
          </Link>
        </div>
      </section>

      {/* Middle Section */}
      <div className="grid max-w-screen-xl gap-5 px-4 mx-auto lg:gap-10 md:py-20 md:grid-cols-2 lg:px-6">
        <div>
          {/* Title */}
          <h2 className="text-4xl font-bold leading-tight text-balance">
            “Ideas worth spreading”&mdash;A grassroots initiative
          </h2>
        </div>

        <div>
          {/* Text Section */}
          <p>
            TEDx is a grassroots initiative, created in the spirit of TED’s
            overall mission to research and discover “ideas worth spreading.”
            TEDx brings the spirit of TED to local communities around the globe
            through TEDx events. These events are organized by passionate
            individuals who seek to uncover new ideas and to share the latest
            research in their local areas that spark conversations in their
            communities.
          </p>
          <p className="mt-5">
            TEDx events include live speakers and recorded TED Talks, and are
            organized independently under a free license granted by TED. These
            events are not controlled by TED, but event organizers agree to
            abide by our format, and are offered guidelines for curation,
            speaker coaching, event organizing and more. They learn from us and
            from each other. More than 3,000 events are now held annually.
          </p>
        </div>
      </div>
      {/* {title && <Header centered title={title} description={overview} />} */}

      {data?.upcomingEvents ? (
        <section>
          <h2 className="mb-6 text-3xl font-bold text-center">
            Upcoming Events
          </h2>

          <div className="border rounded-md border-slate-200">
            {data?.upcomingEvents.map((event, key) => {
              const href = resolveHref('event', event.slug)
              if (!href) return null
              return (
                <Link key={key} href={href}>
                  <EventsListItem event={event} odd={key % 2} />
                </Link>
              )
            })}
          </div>
        </section>
      ) : null}

      {data?.sponsors ? (
        <section>
          <h2 className="mb-6 text-3xl font-bold text-center">Sponsors</h2>

          <div className="grid items-center border rounded-md md:grid-cols-3 border-slate-200">
            {data?.sponsors.map((sponsor, key) => {
              return <SponsorListItem key={key} sponsor={sponsor} />
            })}
          </div>
        </section>
      ) : null}
    </div>
  )
}

export default HomePage
