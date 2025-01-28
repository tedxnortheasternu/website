import { ArrowRightIcon } from 'lucide-react'
import { Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

import aliotoPhoto from '@/components/images/renaissance/alioto.png'
import chungPhoto from '@/components/images/renaissance/chung.png'
import colipanoPhoto from '@/components/images/renaissance/colipano.png'
import cutlerPhoto from '@/components/images/renaissance/cutler.png'
import dasPhoto from '@/components/images/renaissance/das.png'
import liuPhoto from '@/components/images/renaissance/liu.png'
import murphyPhoto from '@/components/images/renaissance/murphy.png'
import redwoodPhoto from '@/components/images/renaissance/redwood.png'
import zaranorthover from '@/components/images/uncharted/Zara_Northover.png'
import { cn } from '@/lib/utils'

type Speaker = {
  photo: StaticImageData
  name: string
  pronouns: string
  headline: string
  bio: string
}

const speakers: Speaker[] = [
  {
    photo: zaranorthover,
    name: 'Zara Northover',
    pronouns: 'she/her',
    headline: 'Cognitive Psychologist, Executive Director, Professor',
    bio: ' is an award-winning academic leader, executive director, and professor in cognitive psychology. She has extensive research expertise in cognitive aging, emotional memory, and cross-cultural cognition. Dr. Chung has served in a variety of senior leadership roles and is committed to empowering leaders to reach their full potential through her work in executive coaching and consulting. Dr. Chung currently serves as the Executive Director of The Mills Institute and is dedicated to developing transformative programs and research to drive positive societal impact through a humanics-driven lens.',
  },
  {
    photo: cutlerPhoto,
    name: 'William Cutler',
    pronouns: 'he/him',
    headline: 'Computer Scientist, Physicist, Advocate',
    bio: ", a Northeastern University senior, is pursuing a combined major in Computer Science and Physics. His unique interest lies at the crossroads of these fields, which he has developed through co-op experiences and research internships. These include two software development co-ops, software and physics research internships in quantum computing, and a nuclear fusion experiment co-op. William brings a fresh viewpoint on blending sciences and humanities, particularly in political discourse. He advocates for the use of a scientific approach to navigate and enrich political conversations in today's divided climate. As graduation nears, William is eager to delve deeper into these intersections and apply his insights to societal challenges.",
  },
  {
    photo: aliotoPhoto,
    name: 'Dr. Nicole Alioto',
    pronouns: 'she/her',
    headline: 'CEO, Strategic Planner, Professor',
    bio: ' has engaged with clients in the education and public sector for over 20 years. Her extensive professional experience spans institutional research, strategic planning, and program evaluation at various institutions and agencies. Dr. Alioto has taught statistics and research methods at several institutions, developing and teaching a specialized graduate course in predictive analytics and data mining aimed at professionals in government settings. As the CEO of Alla Breve Consulting, her goal is to assist public sector organizations and educational institutions in streamlining their strategic planning and analysis processes.',
  },
  {
    photo: murphyPhoto,
    name: 'Cate Murphy',
    pronouns: 'she/her',
    headline: 'Leader, Pharmacist, P3 Student',
    bio: ' is a P3 student in Northeastern’s Doctor of Pharmacy program. Her choice to pursue pharmacy was inspired by her late father’s cancer treatment with an experimental protocol that has since been approved by the FDA. In his honor, she works at Massachusetts General Hospital in the ambulatory oncology infusion pharmacy preparing chemotherapy and immunotherapy regimens for patients. She serves as President of Lambda Kappa Sigma and is a member of both the national Pharmacy Leadership Society and the Northeastern University Choral Society and Chamber Singers.',
  },
  {
    photo: redwoodPhoto,
    name: 'Leeyan Redwood',
    pronouns: 'she/her',
    headline: 'Athlete, Singer, Youth Mentor',
    bio: " is a first-generation Jamaican-American and a distinguished alumna of Northeastern's College of Arts, Media and Design. A former Track and Field captain, she holds the third-longest shot put record in the University's history. Now, she channels her energy into a non-profit career, focusing on community engagement and youth mentorship. She is dedicated to providing opportunities and advocacy for those without a voice. Leeyan is also an accomplished singer who performed the national anthem at a sold-out Boston Red Sox game. She cherishes her Jamaican heritage, especially enjoying her mother's famous curry goat and oxtail dishes.",
  },
  {
    photo: dasPhoto,
    name: 'Debpriya Das',
    pronouns: 'she/her',
    headline: 'International Academic, Schwarzman Scholar, Biology Teacher',
    bio: " recently graduated from Northeastern University's MBA program and is currently pursuing pre-medicine studies at Columbia University. She has an international academic background with a Bachelor's Degree in Neuroscience from the National University of Singapore and the University of Melbourne, and a Master's Degree in Global Affairs from China's Tsinghua University. Debpriya stands out as the first Bangladeshi to receive the Schwarzman Scholarship and has been recognized with esteemed accolades including Northeastern's Huntington 100 and the Women Who Empower Innovator Award. Above all, she is recognized as an accomplished biology teacher and is the founder of Bioland, her own coaching center.",
  },
  {
    photo: liuPhoto,
    name: 'Melody Liu',
    pronouns: 'she/her',
    headline: 'Co-founder, Software Engineer, Digital Illustrator',
    bio: ' is a 2023 Northeastern University graduate with a degree in Computer Science and Business Administration, and is the co-founder of the Digital Illustration Association (DIA) at NU. She shared a simple yet powerful mission: to create a welcoming and open-minded community that embraces digital illustration in all its forms. Whether through drawing-parties, art challenges, or supportive critiques, Melody helped create a space where artists of all experience levels can connect with patrons and each other, fostering both personal and artistic growth.',
  },
]

export const metadata: Metadata = {
  title: 'Speakers',
}

export default function RenaissanceSpeakers() {
  return (
    <div className="w-full p-6 font-serif border-y xl:border xl:rounded-md md:p-12 border-renaissance-light bg-[#748cab]/25">
      <div className="max-w-2xl mx-auto mb-8">
        <h1 className="text-2xl font-bold text-center md:text-3xl text-renaissance-dark">
          Meet Our Speakers!
        </h1>
      </div>

      <div className="max-w-2xl mx-auto space-y-12 md:space-y-24">
        {speakers.map((s, i) => (
          <div key={i} className="renaissance-speaker">
            <div className="grid gap-2 md:grid-cols-2">
              <Image
                src={s.photo}
                alt={`Portrait of ${s.name}`}
                className="w-[50%] md:w-full h-auto max-w-full rounded-md aspect-square [grid-area:speaker-photo]"
              />

              <div
                className={cn(
                  'flex flex-col justify-end px-6 py-8 md:p-8 rounded-md [grid-area:speaker-info]',
                  i < 4 ? 'bg-[#1d2d44]' : 'bg-[#748cab]',
                )}
              >
                <p
                  className={cn(
                    'text-xl leading-none font-renaissance',
                    i < 4
                      ? 'text-[#748cab]/85'
                      : 'text-[#1d2d44]/85',
                  )}
                >
                  {s.headline}
                </p>
                <h2
                  className={cn(
                    'mt-2 text-3xl whitespace-nowrap',
                    i < 4 ? 'text-[#748cab]' : 'text-renaissance-dark',
                  )}
                >
                  <span className="text-4xl font-bold whitespace-normal">
                    {s.name}
                  </span>{' '}
                  &middot; {s.pronouns}
                </h2>
              </div>
            </div>
            <p className="p-6 mt-2 leading-7 rounded-md md:p-8 text-pretty bg-[#748cab]/25">
              <b className="text-renaissance-dark">{s.name}</b>
              {s.bio}
            </p>
          </div>
        ))}
      </div>

      {/* <div className="max-w-2xl mx-auto">
        <Link
          href="/renaissance/tickets"
          className="inline-flex items-center gap-2 px-6 py-2 mt-12 text-xl uppercase transition-colors rounded-full text-renaissance-light font-renaissance bg-renaissance-dark w-max hover:bg-black"
        >
          Get Your Ticket to Renaissance <ArrowRightIcon size={16} />
        </Link>
      </div> */}
    </div>
  )
}
