import { ArrowRightIcon } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import agasthya_pic from '@/components/images/xlabs/agasthya-krishna.jpg'
import spiderman from '@/components/images/xlabs/spiderman.jpg'
import rohan_surana from '@/components/images/xlabs/rohan_surana.jpg'
import idea_long_logo from '@/components/images/xlabs/idea-long-logo.png'
import makerspace from '@/components/images/xlabs/makerspace.jpg'

export const metadata: Metadata = {
  title: 'XLabs',
}

export default function XLabs() {
  return (
    <div className="w-full p-6 font-serif border-y xl:border xl:rounded-md md:p-12 border-[#748cab] bg-[#748cab]/15">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-bold md:text-3xl text-[#1d2d44]">
            XLabs
          </h1>
        </div>

        {/* Introduction */}
        <div className="p-8 rounded-md bg-[#1d2d44] text-[#748cab]">
          <p className="text-lg leading-tight text-balance">
            <strong>Explore XLabs</strong>
          </p>
          <p>
            Kaamil Thobani Kaamil Thobani Kaamil Thobani Kaamil Thobani Kaamil
            Thobani Kaamil Thobani Kaamil Thobani Kaamil Thobani.
          </p>
        </div>

        {/* Scrollable Images */}
        <div className="space-y-8">
          {[
            {
              title: 'EXP Makerspace',
              portrait: spiderman,
              logo: makerspace,
              link: 'https://www.instagram.com/expmakerspace',
            },
            {
              title: 'IDEA: Venture Accelerator',
              portrait: rohan_surana,
              logo: idea_long_logo,
              link: 'https://www.instagram.com/ideaneu',
            },
            {
              title: 'Co-Founder Matching',
              portrait: agasthya_pic,
              logo: idea_long_logo,
              link: 'https://www.instagram.com/kaamilthobani',
            },
          ].map(({ title, portrait, logo, link }, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-bold text-[#1d2d44] text-center">
                {title}
              </h3>
              <div className="flex justify-center items-start space-x-4">
                <div className="flex-shrink-0 w-48 h-48 rounded-md overflow-hidden cursor-pointer">
                  <Link href={link} passHref target="_blank">
                    <Image
                      src={portrait}
                      alt={`Portrait of ${title}`}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <Image
                    src={logo}
                    alt={`XLabs Project ${index + 1}`}
                    className="w-full h-auto"
                  />
                  <p className="mt-2 text-center text-[#1d2d44]">
                    Kaamil Thobani Kaamil Thobani Kaamil Thobani Kaamil Thobani.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
