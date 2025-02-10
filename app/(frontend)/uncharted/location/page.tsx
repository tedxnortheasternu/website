import { ArrowRightIcon } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import map from '@/components/images/renaissance/map.png'

export const metadata: Metadata = {
  title: 'Location',
}

export default function RenaissanceLocation() {
  return (
    <div className="w-full p-6 font-serif border-y xl:border xl:rounded-md md:p-12 border-[#748cab] bg-[#748cab]/15">
      <div className="max-w-2xl mx-auto mb-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-center md:text-3xl text-[#1d2d44]">
            Location
          </h1>
        </div>

        <div className="p-8 rounded-md bg-[#1d2d44] text-[#748cab]">
          <p className="text-lg leading-tight text-balance">
            <strong>
              Northeastern {"University's"} Interdisciplinary Science and
              Engineering Complex (ISEC)
            </strong>
          </p>
          <p>805 Columbus Ave, Boston, MA 02120</p>

          <Link
            target="_blank"
            href="https://www.google.com/maps/dir//Northeastern+University+Interdisciplinary+Science+and+Engineering+Complex,+805+Columbus+Ave,+Boston,+MA+02120/@42.3377192,-71.0895366,17z/"
            className="inline-flex items-center gap-2 px-6 py-2 mx-auto mt-4 text-xl uppercase transition-colors rounded-full text-[#1d2d44] font-renaissance bg-[#748cab] w-max hover:bg-white"
          >
            Get Directions <ArrowRightIcon size={16} />
          </Link>
        </div>

        <div className="p-8 rounded-md bg-[#748cab] text-[#1d2d44]">
          <p className="text-md leading-tight">
            Parking is not included in the ticket price, and unfortunately, we are unable to reimburse any parking expenses. However, there are several convenient options nearby. Free street parking is available on most of Columbus Avenue throughout the weekend, as well as on certain sections of surrounding streets like Tremont and Camden. To help you find free parking, we recommend using the Spot Angel app, but please be sure to check street signs for any restrictions before you park.
            <br></br>
            <br></br>
            For those who prefer garage parking, the Renaissance Park and Columbus garages are just a 3-minute walk from ISEC, and both charge a $20 fee on weekends.
          </p>
        </div>

        <div className="bg-[#748cab]">
          <Image
            src={map}
            alt="Map of Boston, MA showing the venue's location"
            className="w-full h-auto max-w-full mt-4 rounded-md aspect-video"
          />
        </div>

        {/* <Link
          href="/renaissance/tickets"
          className="inline-flex items-center gap-2 px-6 py-2 mx-auto mt-12 text-xl uppercase transition-colors rounded-full text-renaissance-light font-renaissance bg-renaissance-dark w-max hover:bg-black"
        >
          Get Your Ticket to Renaissance <ArrowRightIcon size={16} />
        </Link> */}
      </div>
    </div>
  )
}
