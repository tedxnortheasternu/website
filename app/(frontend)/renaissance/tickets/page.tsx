import { ArrowRightIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

const PUBLIC_LINK =
  'https://nuhuskies.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS:ATHLETICS:SL2324:TED0224:&linkID=northeastern-athletics&siteId=ev_northeastern-athletics'
const STUDENTS_LINK =
  'https://nuhuskies.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=ST:ATHLETICS:SL2324:TED0224:S3&linkID=northeastern-athletics&shopperContext=ST&groupCode=SL&siteId=ev_northeastern-athletics'

export const metadata: Metadata = {
  title: 'Tickets',
}

export default function RenaissanceSpeakers() {
  return (
    <div className="w-full p-6 font-serif border-y xl:border xl:rounded-md md:p-12 border-renaissance-light bg-renaissance-light/15">
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <h1 className="text-2xl font-bold md:text-3xl text-renaissance-dark">
          Tickets
        </h1>
      </div>

      <div className="grid max-w-2xl gap-4 mx-auto mb-8 md:grid-cols-2">
        <div className="flex flex-col justify-between p-8 rounded-md bg-renaissance-light text-renaissance-dark">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Northeastern Students</h2>
            <p className="leading-snug">
              Discounted student tickets are available for $10.
            </p>
          </div>

          <div>
            <Link
              href={STUDENTS_LINK}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-2 mt-8 mb-3 text-xl uppercase transition-colors rounded-full text-renaissance-light font-renaissance bg-renaissance-dark w-max hover:bg-black"
            >
              Purchase for $10 <ArrowRightIcon />
            </Link>
            <p className="ml-5 leading-snug uppercase font-renaissance">
              *Limit one (1) per person
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between p-8 rounded-md bg-renaissance-dark text-renaissance-light">
          <div>
            <h2 className="mb-4 text-3xl font-bold">General Public</h2>
            <p className="leading-snug">
              Tickets are available to the general public for $15 each.
            </p>
          </div>

          <div>
            <Link
              href={PUBLIC_LINK}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-2 mx-auto mt-8 mb-3 text-xl uppercase transition-colors rounded-full text-renaissance-dark font-renaissance bg-renaissance-light w-max hover:bg-white"
            >
              Purchase for $15 <ArrowRightIcon />
            </Link>
            <p className="ml-5 leading-snug uppercase font-renaissance">
              *Limit two (2) per person
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <p className="mt-2 text-center text-renaissance-dark/85 text-balance">
          If you require disability-related accommodations to participate in
          this event, please{' '}
          <Link
            href="/contact"
            target="_blank"
            className="border-b border-b-renaissance-mid text-renaissance-dark"
          >
            contact us
          </Link>{' '}
          by February 10th.
        </p>
      </div>
    </div>
  )
}
