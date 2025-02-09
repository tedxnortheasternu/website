// NU Sanskriti Component (NU_Sanskriti.tsx)

import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/components/images/NUS Transparent.png'
import NUMalharLogo from '@/components/images/uncharted/NUMalharBG.png'
import NuKaliente from '@/components/images/uncharted/nuKaliente.png'
import { WobbleCard } from '@/components/ui/wobble-card'

const NUSanskriti: React.FC = () => {
  return (
    <div className="w-full p-6 font-serif border-y xl:rounded-md md:p-12 bg-[#748cab]/15">
      {/* Logo Section */}
      {/* Uncomment if using imported logo */}
      {/* Name Section */}
      <div>
        <h1 className="text-2xl font-bold text-center mb-10 md:text-3xl text-[#1d2d44]">
          Performances
        </h1>
        {/* <Image
        src={logo}
        alt="NUSankrit Logo"
        className="h-auto max-w-full mx-auto w-[28rem]"
      /> */}
        {/* Description Section */}
        {/* <p className="max-w-2xl p-4 mt-4 text-justify text-md"> */}
        {/* NU Sanskriti, the official Indian Students Association, is dedicated to
        passionately championing the beauty and rich heritage of India culture.
        Serving as a dynamic platform, the association aims to bridge diverse
        perspectives and foster a profound understanding of Indian traditions.
        Throughout the year, the club tirelessly organizes a myriad of events in
        unique ways, creating opportunities for the 9000 Indian students on
        campus to experience a sense of belonging and find a safe haven to
        showcase their individuality while adapting to different cultures. */}
        {/* </p> */}
        {/* <Link
        href="/renaissance/tickets"
        className="inline-flex items-center gap-2 px-6 py-2 mx-auto mt-12 text-xl uppercase transition-colors rounded-full text-renaissance-light font-renaissance bg-renaissance-dark w-max hover:bg-black"
      >
        Get Your Ticket to Renaissance <ArrowRightIcon size={16} />
      </Link> */}
      </div>

      <div className="grid w-full grid-cols-1 gap-4 mx-auto lg:grid-cols-1 max-w-7xl">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full  bg-[#b87827] min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="flex">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                NU Malhar
              </h2>
              <p className="mt-4 mr-5 text-left text-base/6 text-neutral-200">
                Experience the rich tapestry of Indian classical music with NU
                Malhar, Northeastern University's premier Indian classical music
                ensemble. Featuring a blend of traditional ragas and
                contemporary interpretations, NU Malhar's performance is a deep
                dive into the soul-stirring world of Indian music. Let the
                melodious harmonies of sitars, tablas, and voices transport you
                to a realm of musical bliss that transcends boundaries and
                resonates with the heart.
              </p>
            </div>
            <div className="items-center content-center">
              <Image
                src={NUMalharLogo}
                width={500}
                height={500}
                alt="linear demo image"
                className="rounded-2xl h-auto mx-auto w-[28rem]"
              />
            </div>
          </div>
        </WobbleCard>

        <div className="grid w-full grid-cols-1 gap-4 mx-auto lg:grid-cols-1 max-w-7xl">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full  bg-[#ed2726] min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="flex">
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  NU Kaliente
                </h2>
                <p className="mt-4 mr-5 text-left text-base/6 text-neutral-200">
                  Immerse yourself in the vibrant rhythms and fiery beats of NU
                  Kaliente! This exhilarating performance group brings the
                  essence of Latin dance to life on stage. Witness a captivating
                  dance performed by talented dancers who embody the spirit and
                  passion of Latin culture. NU Kaliente promises an
                  unforgettable performance that will leave you inspired and
                  eager to hit the dance floor!
                </p>
              </div>
              <div className="items-center content-center">
                <Image
                  src={NuKaliente}
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="rounded-2xl h-auto mx-auto w-[28rem]"
                />
              </div>
            </div>
          </WobbleCard>
        </div>

        {/* <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-slate-500 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Nu Sanskriti
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
        src={logo}
        alt="NUSankrit Logo"
        className="h-auto mx-auto w-[28rem]"
      />
      </WobbleCard> */}
      </div>
    </div>
  )
}

export default NUSanskriti
