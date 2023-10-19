'use client'
import NavBar from 'components/global/Navbar/NavbarLayout'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import copres from '../../images/Co-Pres.jpg'
import copres2 from '../../images/Co-Pres2.png'
import commengang from '../../images/CommEnga.jpeg'
import fundraising from '../../images/Fundraising.jpg'
import person from '../../images/kaamil_thobani.jpg'
import operations from '../../images/Operations.jpg'
import speakerdev from '../../images/Speakerdev.png'
import speakerTalk from '../../images/speakers.jpg'

export default function AboutPage() {
  const [width, setWidth] = useState(0)

  return (
    <div className="flex flex-col h-screen">
      {/* Top Section */}
      <div className="flex flex-1">
        <div className="w-1/2">
          {/* Image */}
          <Image
            src={speakerTalk}
            alt="speaker"
            width={width < 1024 ? '600' : '700'}
            height={width < 1024 ? '600' : '700'}
            className="object-left w-full "
          />
        </div>
        <div className="w-1/2 p-4 pl-6">
          {/* Text Section */}
          <h1 className="text-2xl font-bold">
            Innovative ideas. Groundbreaking research. Breakthrough
            technologies.{' '}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            posuere urna.
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-1 p-4">
        <div className="w-1/2 p-4">
          {/* Big Quote */}
          <blockquote className="py-40 text-2xl italic">
            “Ideas worth spreading”— A grassroots initiative
          </blockquote>
        </div>
        <div className="w-1/2 p-4">
          {/* Text Section */}
          <h2 className="text-xl font-semibold">Our Values</h2>
          <p>
            TEDx is a grassroots initiative, created in the spirit of TED’s
            overall mission to research and discover “ideas worth spreading.”
            TEDx brings the spirit of TED to local communities around the globe
            through TEDx events. These events are organized by passionate
            individuals who seek to uncover new ideas and to share the latest
            research in their local areas that spark conversations in their
            communities.TEDx events include live speakers and recorded TED
            Talks, and are organized independently under a free license granted
            by TED. These events are not controlled by TED, but event organizers
            agree to abide by our format, and are offered guidelines for
            curation, speaker coaching, event organizing and more. They learn
            from us and from each other. More than 3,000 events are now held
            annually.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-1 p-4">
        <div className="w-1/2 p-4">
          {/* Text Section */}
          <h2 className="text-2xl font-semibold">
            Our Executive Leadership Team
          </h2>
          <div className="flex flex-wrap space-y-2">
            <div className="w-full sm:w-1/3">
              <div className="flex flex-col py-4 space-y-2">
                <div>
                  <h3 className="text-l">CAMPUSES</h3>
                  <p className="font-bold">2</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3">
              <div className="flex flex-col py-4 space-y-2">
                <div>
                  <h3 className="text-l">MEMBERS</h3>
                  <p className="font-bold">48</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3">
              <div className="flex flex-col py-4 space-y-2">
                <div>
                  <h3 className="text-l">TEAMS</h3>
                  <p className="font-bold">6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-4">
          {/* Executive Team */}
          <div className="flex flex-wrap space-y-2">
            {/* First row of executives */}
            <div className="w-full sm:w-1/3">
              <div className="flex flex-col space-y-2">
                <div className="py-2">
                  <Image
                    src={copres}
                    alt="Logo"
                    width={width < 1024 ? '150' : '250'}
                    height={width < 1024 ? '45' : '74'}
                    className="object-cover w-24 h-24"
                  />
                  <h4 className="font-semibold font-m">Jay Sella</h4>
                  <h5 className="text-sm">Co-President</h5>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3">
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src={copres2}
                    alt="Logo"
                    width={width < 1024 ? '150' : '250'}
                    height={width < 1024 ? '45' : '74'}
                    className="object-cover w-24 h-24"
                  />
                  <h4 className="font-semibold font-m">Camilla Gallardo</h4>
                  <h5 className="text-sm">Co-President</h5>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3">
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src={commengang}
                    alt="Logo"
                    width={width < 1024 ? '150' : '250'}
                    height={width < 1024 ? '45' : '74'}
                    className="object-cover w-24 h-24"
                  />
                  <h4 className="font-semibold font-m">Valentina Ribeiro</h4>
                  <h5 className="text-sm">Community Engagement</h5>
                </div>
              </div>
            </div>

            {/* Second row of executives */}
            <div className="w-full sm:w-1/3">
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src={speakerdev}
                    alt="Logo"
                    width={width < 1024 ? '150' : '250'}
                    height={width < 1024 ? '45' : '74'}
                    className="object-cover w-24 h-24"
                  />
                  <h4 className="font-semibold font-m">Ellee Tomaru</h4>
                  <h5 className="text-sm">Speaker Development</h5>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3">
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src={operations}
                    alt="Logo"
                    width={width < 1024 ? '150' : '250'}
                    height={width < 1024 ? '45' : '74'}
                    className="object-cover w-24 h-24"
                  />
                  <h4 className="font-semibold font-m">Allison Evin</h4>
                  <h5 className="text-sm">Operations</h5>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3">
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src={fundraising}
                    alt="Logo"
                    width={width < 1024 ? '150' : '250'}
                    height={width < 1024 ? '45' : '74'}
                    className="object-cover w-24 h-24"
                  />
                  <h4 className="font-semibold font-m">Sophie Lin</h4>
                  <h5 className="text-sm">Fundraising</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
