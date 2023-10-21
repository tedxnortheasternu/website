import Image from 'next/image'

import aboutPage from '../../images/aboutPage.jpg'
import copres from '../../images/Co-Pres.jpg'
import copres2 from '../../images/Co-Pres2.png'
import commengang from '../../images/CommEnga.jpeg'
import fundraising from '../../images/Fundraising.jpg'
import operations from '../../images/Operations.jpg'
import speakerdev from '../../images/Speakerdev.png'
import TeamMember from './TeamMember'

export default function AboutPage() {
  return (
    <main>
      {/* Top Section */}
      <section className="flex flex-1">
        <div className="w-1/2">
          {/* Image */}
          <Image src={aboutPage} alt="speaker" className="object-left w-full" />
        </div>
        <div className="w-1/2 p-4 pl-6">
          {/* Text Section */}
          <h1 className="text-2xl font-bold">
            Innovative ideas. Groundbreaking research. Breakthrough
            technologies.{' '}
          </h1>
          <p>
            We're a student-run organization that brings together the global
            Northeastern community. Our events feature local speakers who are
            leaders in their fields. We aim to inspire and educate while
            fostering a sense of community and collaboration.
          </p>
          <button className="block px-4 py-1 text-white bg-red-700 rounded-full hover:bg-transparent hover:text-red-700 dark:text-white hover:underline">
            Join Our Mailing List →
          </button>
        </div>
      </section>

      {/* Middle Section */}
      <div className="grid max-w-screen-xl gap-6 px-6 py-20 md:grid-cols-2">
        <div>
          {/* Title */}
          <h2 className="text-4xl font-bold leading-tight text-balance">
            “Ideas worth spreading”&mdash;A grassroots initiative
          </h2>
        </div>

        <div>
          {/* Text Section */}
          <h5>
            TEDx is a grassroots initiative, created in the spirit of TED’s
            overall mission to research and discover “ideas worth spreading.”
            TEDx brings the spirit of TED to local communities around the globe
            through TEDx events. These events are organized by passionate
            individuals who seek to uncover new ideas and to share the latest
            research in their local areas that spark conversations in their
            communities.
          </h5>
          <h5 className="py-5">
            TEDx events include live speakers and recorded TED Talks, and are
            organized independently under a free license granted by TED. These
            events are not controlled by TED, but event organizers agree to
            abide by our format, and are offered guidelines for curation,
            speaker coaching, event organizing and more. They learn from us and
            from each other. More than 3,000 events are now held annually.
          </h5>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid max-w-screen-xl gap-6 md:grid-cols-2 md:px-6 md:py-20">
        <div>
          {/* Text Section */}
          <h2 className="text-4xl font-bold leading-tight text-balance">
            Our Executive Leadership Team
          </h2>

          <div className="flex flex-row gap-6 mt-4">
            <div className="flex flex-col">
              <h3 className="text-sm uppercase">Campuses</h3>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm uppercase">Members</h3>
              <p className="text-2xl font-bold">48</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm uppercase">Teams</h3>
              <p className="text-2xl font-bold">6</p>
            </div>
          </div>
        </div>

        <div>
          {/* Executive Team */}
          <div className="flex flex-wrap gap-4">
            {/* First row of executives */}{' '}
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
              imageSrc={speakerdev}
              name="Ellee Tomaru"
              title="Speaker Development"
            />
            <TeamMember
              imageSrc={operations}
              name="Allison Evin"
              title="Operations"
            />
            <TeamMember
              imageSrc={fundraising}
              name="Sophie Lin"
              title="Fundraising"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
