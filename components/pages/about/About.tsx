import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import aboutPage from '../../images/aboutPage.jpg'
import advisor from '../../images/Advisor.png'
import copres from '../../images/Co-Pres.jpg'
import copres2 from '../../images/Co-Pres2.png'
import commengang from '../../images/CommEnga.jpeg'
import facAdvisorBos from '../../images/FacAdvisorBos.jpg'
import facAdvisorOak from '../../images/FacAdvisorOak.jpg'
import fundraising from '../../images/Fundraising.jpg'
import marketing from '../../images/Marketing.jpeg'
import operations from '../../images/Operations.jpg'
import speakerdev from '../../images/Speakerdev.png'
import TeamMember from './TeamMember'

export default function AboutPage() {
  return (
    <>
      {/* Top Section */}
      <section className="grid items-center max-w-screen-xl gap-5 mx-auto lg:gap-7 md:grid-cols-2 lg:px-4">
        <Image
          src={aboutPage}
          alt="speaker"
          className="object-cover w-full h-full"
        />
        <div className="px-4 md:pl-0 lg:px-0">
          {/* Text Section */}
          <h1 className="mb-2 text-3xl font-bold text-balance">
            Innovative ideas. Groundbreaking research. Breakthrough
            technologies.
          </h1>
          <p>
            {"We're"} a student-run organization that brings together the global
            Northeastern community. Our events feature local speakers who are
            leaders in their fields. We aim to inspire and educate while
            fostering a sense of community and collaboration.
          </p>

          <Link
            href="https://mailchi.mp/39a289393abb/tedxnu-mailing-list"
            className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-sm font-bold text-white transition-colors bg-red-600 rounded-full hover:bg-red-700"
          >
            Join Our Mailing List <ArrowRightIcon size={16} />
          </Link>
        </div>
      </section>

      {/* Middle Section */}
      <div className="grid max-w-screen-xl gap-5 px-4 pt-24 pb-6 mx-auto lg:gap-7 md:py-20 md:grid-cols-2 lg:px-6">
        <div>
          {/* Title */}
          <h2 className="text-4xl font-bold leading-tight text-balance">
            “Ideas worth spreading”&mdash;A grassroots initiative
          </h2>
        </div>

        <div>
          {/* Text Section */}
          <p>
            TEDx is a grassroots initiative, created in the spirit of TED’s
            overall mission to research and discover “ideas worth spreading.”
            TEDx brings the spirit of TED to local communities around the globe
            through TEDx events. These events are organized by passionate
            individuals who seek to uncover new ideas and to share the latest
            research in their local areas that spark conversations in their
            communities.
          </p>
          <p className="mt-5">
            TEDx events include live speakers and recorded TED Talks, and are
            organized independently under a free license granted by TED. These
            events are not controlled by TED, but event organizers agree to
            abide by our format, and are offered guidelines for curation,
            speaker coaching, event organizing and more. They learn from us and
            from each other. More than 3,000 events are now held annually.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid max-w-screen-xl gap-5 px-4 py-6 mx-auto lg:gap-7 md:py-20 md:grid-cols-2 lg:px-6">
        <div>
          {/* Text Section */}
          <h2 className="text-4xl font-bold leading-tight text-balance">
            Multi-disciplinary leaders, from coast to coast
          </h2>

          <div className="flex flex-row gap-6 mt-4">
            <div className="flex flex-col">
              <h3 className="text-sm uppercase">Members</h3>
              <p className="text-2xl font-bold">48</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm uppercase">Teams</h3>
              <p className="text-2xl font-bold">6</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm uppercase">Campuses</h3>
              <p className="text-2xl font-bold">2</p>
            </div>
          </div>
        </div>

        <div>
          {/* Executive Team */}
          <div className="flex flex-wrap gap-4">
            {/* First row of executives */}{' '}
            <TeamMember
              imageSrc={advisor}
              name="Darin Martin"
              title="Organizer + Program Advisor"
            />
            <TeamMember
              imageSrc={facAdvisorBos}
              name="Darin Detwiler"
              title="Faculty Advisor, Boston"
            />
            <TeamMember
              imageSrc={facAdvisorOak}
              name="Christie Chung"
              title="Faculty Advisor, Oakland"
            />
            <TeamMember
              imageSrc={copres}
              name="Jay Sella"
              title="Co-President"
            />
            <TeamMember
              imageSrc={copres2}
              name="Camilla Gallardo"
              title="Co-President"
            />
            <TeamMember
              imageSrc={commengang}
              name="Valentina Ribeiro"
              title="Community Engagement"
            />
            <TeamMember
              imageSrc={fundraising}
              name="Sophie Lin"
              title="Fundraising"
            />
            <TeamMember
              imageSrc={marketing}
              name="Olivia Watson"
              title="Marketing"
            />
            <TeamMember
              imageSrc={operations}
              name="Allison Evin"
              title="Operations"
            />
            <TeamMember
              imageSrc={speakerdev}
              name="Ellee Tomaru"
              title="Speaker Development"
            />
          </div>
        </div>
      </div>
    </>
  )
}
