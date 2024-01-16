import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import map from '@/components/images/renaissance/map.png'

export default function RenaissanceSpeakers() {
  return (
    <div className="w-full p-6 font-serif border-y xl:border xl:rounded-md md:p-12 border-renaissance-light bg-renaissance-light/15">
      <div className="max-w-2xl mx-auto mb-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-center md:text-3xl text-renaissance-dark">
            Location
          </h1>
        </div>

        <div className="p-8 rounded-md bg-renaissance-dark text-renaissance-light">
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
            className="inline-flex items-center gap-2 px-6 py-2 mx-auto mt-4 text-xl uppercase transition-colors rounded-full text-renaissance-dark font-renaissance bg-renaissance-light w-max hover:bg-white"
          >
            Get Directions <ArrowRightIcon size={16} />
          </Link>
        </div>

        <div className="bg-renaissance-light">
          <Image
            src={map}
            alt="Map of Boston, MA showing the venue's location"
            className="w-full h-auto max-w-full mt-4 rounded-md aspect-video"
          />
        </div>

        <Link
          href="/renaissance/tickets"
          className="inline-flex items-center gap-2 px-6 py-2 mx-auto mt-12 text-xl uppercase transition-colors rounded-full text-renaissance-light font-renaissance bg-renaissance-dark w-max hover:bg-black"
        >
          Get Your Ticket to Renaissance <ArrowRightIcon size={16} />
        </Link>
      </div>
    </div>
  )
}
