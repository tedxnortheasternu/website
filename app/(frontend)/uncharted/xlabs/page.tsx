import { ArrowRightIcon } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import agasthya_pic from '@/components/images/xlabs/agasthya-krishna.jpg'
import spiderman from '@/components/images/xlabs/spiderman.jpg'
import rohan_surana from '@/components/images/xlabs/rohan_surana.jpg'
import idea_long_logo from '@/components/images/xlabs/idea-long-logo.png'
import makerspaceLogo from '@/components/images/xlabs/makerspace-logo-black.png'
import cofoundermatch from '@/components/images/xlabs/cofoundermatching.png'

export const metadata: Metadata = {
  title: 'XLabs',
}

export default function XLabs() {
  const projects = [
    {
      title: 'EXP Makerspace',
      portrait: spiderman,
      logo: makerspaceLogo,
      link: 'https://www.instagram.com/expmakerspace',
      description:
        'Join Isaiah, the creator behind the innovative EXP Makerspaces viral Spiderman outfit, as he shares his unique journey of blending creativity and technology. Discover how he crafted a high-tech Spiderman outfit using the resources and tools available in a makerspace, illustrating the limitless possibilities when imagination meets innovation.',
    },
    {
      title: 'IDEA: Venture Accelerator',
      portrait: rohan_surana,
      logo: idea_long_logo,
      link: 'https://www.instagram.com/ideaneu',
      description:
        'Rohan Surana, CEO and keynote speaker, will introduce "IDEA," Northeastern University\'s premier venture accelerator. Learn about the resources and support IDEA offers to budding entrepreneurs and how students can leverage this platform to turn their innovative ideas into successful business ventures.',
    },
    {
      title: 'Co-Founder Matching',
      portrait: agasthya_pic,
      logo: cofoundermatch,
      link: 'https://www.instagram.com/kaamilthobani',
      description:
        'Agasthya Krishna, a seasoned entrepreneur and founder, will delve into the critical process of finding the right business partner. This session will cover essential strategies and personal anecdotes to help you identify and match with a co-founder who not only shares your vision but also complements your skillset, enhancing your journey to entrepreneurial success.',
    },
  ]

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
          <p>Discover innovative projects and initiatives at XLabs.</p>
        </div>

        {/* Scrollable Images */}
        <div className="space-y-8">
          {projects.map(
            ({ title, portrait, logo, link, description }, index) => (
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
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
