// NU Sanskriti Component (NU_Sanskriti.tsx)

import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '@/components/images/NUS Transparent.png'

const NUSanskriti: React.FC = () => {
  return (
    <div className="w-full p-6 font-serif border-orange-100 border-y xl:border xl:rounded-md md:p-12 bg-orange-50">
      {/* Logo Section */}
      {/* Uncomment if using imported logo */}
      {/* Name Section */}
      <h1 className="text-2xl font-bold text-center md:text-3xl text-renaissance-dark">
        NU Sanskriti
      </h1>
      <Image
        src={logo}
        alt="NUSankrit Logo"
        className="h-auto max-w-full mx-auto w-[28rem]"
      />
      {/* Description Section */}
      <p className="max-w-2xl p-4 mt-4 text-justify text-md">
        NU Sanskriti, the official Indian Students Association, is dedicated to
        passionately championing the beauty and rich heritage of India culture.
        Serving as a dynamic platform, the association aims to bridge diverse
        perspectives and foster a profound understanding of Indian traditions.
        Throughout the year, the club tirelessly organizes a myriad of events in
        unique ways, creating opportunities for the 9000 Indian students on
        campus to experience a sense of belonging and find a safe haven to
        showcase their individuality while adapting to different cultures.
      </p>
      <Link
        href="/renaissance/tickets"
        className="inline-flex items-center gap-2 px-6 py-2 mx-auto mt-12 text-xl uppercase transition-colors rounded-full text-renaissance-light font-renaissance bg-renaissance-dark w-max hover:bg-black"
      >
        Get Your Ticket to Renaissance <ArrowRightIcon size={16} />
      </Link>
    </div>
  )
}

export default NUSanskriti
