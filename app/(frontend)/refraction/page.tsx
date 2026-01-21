import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import refractionLogo from '/components/images/refraction/TEDxNortheasternU_Refraction_Logo.png'

export default function RefractionOverview() {
  return (
    <div className="w-full p-6 !pt-0 border-y xl:border xl:rounded-md md:p-12 border-renaissance-light bg-[#748cab]/30">
      <div className="mx-auto font-serif prose">
        <div className="-ml-3.5 my-20">
          <Image
            src={refractionLogo}
            alt="Refraction Logo"
            className="h-auto max-w-full mx-auto w-[28rem]"
          />
        </div>
        
        <h1 className="text-center text-4xl mb-8">TEDxNortheasternU: Refraction</h1>
        
        <p>
          Our 2025 flagship event centers on the theme of <strong>Refraction</strong>, 
          exploring how ideas, perspectives, and experiences bend and transform when 
          they pass through different mediums. Just as light refracts when it moves 
          from air to water, revealing new colors and dimensions, our speakers will 
          examine how challenges redirect our paths, how different cultural lenses 
          reshape our understanding, and how moments of change reveal hidden possibilities.
        </p>
        
        <p>
          Refraction is about transformation through transition. It's about the beauty 
          that emerges when we're willing to shift angles, the innovation born from 
          viewing problems through multiple perspectives, and the growth that comes 
          from allowing our experiences to bend us into new shapes. Through this lens, 
          we'll explore stories of resilience, reimagination, and the remarkable ways 
          individuals and ideas evolve when they encounter new environments.
        </p>
        
        <div className="mt-12 aspect-video">
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.youtube.com/embed/xcy24Vj0YS4"
            title="TEDxNortheasternU 2025: Refraction"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
        
        <p>
          <strong>Join us on February 21st, 2026 @ ISEC.</strong> Tickets out soon!
        </p>
        
        {/* Uncomment when tickets are ready */}
        {/* <Link
          href="/refraction/tickets"
          className="inline-flex items-center gap-2 px-6 py-2 mt-4 text-xl no-underline uppercase transition-colors rounded-full text-[#748cab] font-renaissance bg-[#1d2d44] w-max hover:bg-black"
        >
          Get Your Ticket to Refraction <ArrowRightIcon size={16} />
        </Link> */}
      </div>
    </div>
  )
}