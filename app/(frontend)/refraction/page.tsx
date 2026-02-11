import { ArrowRightIcon, InfoIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import refractionLogo from '/components/images/refraction/TEDxNortheasternU_Refraction_Logo.png'

export default function RefractionOverview() {
  return (
    <div className="w-full p-6 !pt-0 border-y xl:border xl:rounded-md md:p-12 border-renaissance-light bg-[#000000]">
      <div className="mx-auto font-serif prose prose-p:text-[#b8c3d4] prose-strong:text-[#b8c3d4]">
        <div className="-mx-6 md:-mx-12 -my-6 md:-my-12">
          <Image
            src={refractionLogo}
            alt="Refraction Logo"
            className="h-auto w-full"
          />  
        </div>

        <div className="flex justify-center mb-4">
          <Link
            href="https://nuhuskies.evenue.net/event/SL2526/TED0221"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-2xl no-underline uppercase transition-colors rounded-full text-[#b8c3d4] font-renaissance bg-[#1d2d44] hover:bg-black">
            Get Your Ticket to{' '}
            <span className="refraction-rainbow">Refraction</span>{' '}
            <ArrowRightIcon size={16} />
          </Link>


          <div className="group relative flex items-center gap-2">
            <InfoIcon size={20} className="text-[#b8c3d4] cursor-help" />
            <div className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 px-4 py-3 bg-[#1d2d44] text-[#b8c3d4] text-sm rounded-lg shadow-lg border border-[#748cab]">
              <p className="text-center">
                <strong>NEU Students & Staff:</strong> Log in with your Husky credentials to get discounted tickets for $10! (regular price: $15)
              </p>
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#1d2d44]"></div>
            </div>
          </div>
        </div>
  
        <h1 className="text-center text-4xl mb-8 text-[#b8c3d4]">
          TEDxNortheasternU: <span className="refraction-rainbow">Refraction</span>
        </h1>
        
        <p>
          Our 2026 flagship event centers on the theme of <span className="refraction-rainbow">Refraction</span>, 
          exploring how ideas, perspectives, and experiences bend and transform when 
          they pass through different mediums. Just as light refracts when it moves 
          from air to water, revealing new colors and dimensions, our speakers will 
          examine how challenges redirect our paths, how different cultural lenses 
          reshape our understanding, and how moments of change reveal hidden possibilities.
        </p>
        
        <p>
          <span className="refraction-rainbow">Refraction</span> is about transformation through transition. It&apos;s about the beauty 
          that emerges when we&apos;re willing to shift angles, the innovation born from 
          viewing problems through multiple perspectives, and the growth that comes 
          from allowing our experiences to bend us into new shapes. Through this lens, 
          we&apos;ll explore stories of resilience, reimagination, and the remarkable ways 
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
          <strong>Join us on February 21st, 2026 @ ISEC.</strong> Tickets out now!
        </p>
      </div>
    </div>
  )
}