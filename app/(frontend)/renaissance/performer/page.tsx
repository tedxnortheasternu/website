// NU Sanskriti Component (NU_Sanskriti.tsx)

import Image from 'next/image'
import React from 'react'

import logo from '@/components/images/NUS Transparent.png'

const NUSanskriti: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-orange-100">
      {/* Logo Section */}
      {/* Uncomment if using imported logo */}*{/* Name Section */}
      <h1 className="mt-4 font-bold text-6axl">NU Sanskriti</h1>
      <Image
        src={logo}
        alt="NUSankrit Logo"
        className="h-auto max-w-full mx-auto w-[28rem]"
      />
      {/* Description Section */}
      <p className="max-w-4xl p-4 mt-4 text-justify text-md">
        NU Sanskriti, the official Indian Students Association, is dedicated to
        passionately championing the beauty and rich heritage of India culture.
        Serving as a dynamic platform, the association aims to bridge diverse
        perspectives and foster a profound understanding of Indian traditions.
        Throughout the year, the club tirelessly organizes a myriad of events in
        unique ways, creating opportunities for the 9000 Indian students on
        campus to experience a sense of belonging and find a safe haven to
        showcase their individuality while adapting to different cultures.
      </p>
      {/* Ticket Button Section */}
      <button className="px-4 py-2 mt-4 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-700">
        Get Your Ticket to Renaissance
      </button>
    </div>
  )
}

export default NUSanskriti
