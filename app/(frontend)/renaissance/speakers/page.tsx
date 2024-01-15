import { ArrowRightIcon } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import aliotoPhoto from '@/components/images/renaissance/alioto.png'
import chungPhoto from '@/components/images/renaissance/chung.png'
import colipanoPhoto from '@/components/images/renaissance/colipano.png'
import cutlerPhoto from '@/components/images/renaissance/cutler.png'
import dasPhoto from '@/components/images/renaissance/das.png'
import liuPhoto from '@/components/images/renaissance/liu.png'
import murphyPhoto from '@/components/images/renaissance/murphy.png'
import redwoodPhoto from '@/components/images/renaissance/redwood.png'
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
    photo: chungPhoto,
    name: 'Dr. Christie Chung',
    pronouns: 'she/her',
    headline: 'Cognitive Psychology Expert, Executive Director, Professor',
    bio: 'Dr. Chung is an award-winning academic leader, executive director, and professor in cognitive psychology. She has extensive expertise in cognitive aging research and is dedicated to developing transformative programs and research to drive positive societal impact through a humanics-driven lens. Dr. Chung currently serves as the Executive Director of The Mills Institute and as a Professor of Psychology at Northeastern University.',
  },
  {
    photo: cutlerPhoto,
    name: 'William Cutler',
    pronouns: 'he/him',
    headline: 'Computer Scientist, Physicist, Advocate',
    bio: "William Cutler, a Northeastern University senior, is pursuing a combined major in Computer Science and Physics. His unique interest lies at the crossroads of these fields, which he has developed through co-op experiences and research internships. These include two software development co-ops, software and physics research internships in quantum computing, and a nuclear fusion experiment co-op. William brings a fresh viewpoint on blending sciences and humanities, particularly in political discourse. He advocates for the use of a scientific approach to navigate and enrich political conversations in today's divided climate. As graduation nears, William is eager to delve deeper into these intersections and apply his insights to societal challenges.",
  },
  {
    photo: redwoodPhoto,
    name: 'Leeyan Redwood',
    pronouns: 'she/her',
    headline: 'Athlete, Singer, Youth Mentor',
    bio: "Leeyan Redwood is a first-generation Jamaican-American and a distinguished alumna of Northeastern's College of Arts, Media and Design. As a former Track and Field captain, she holds the third longest shot put record in the University's history. Now, she channels her energy into a non-profit career, focusing on community engagement and youth mentorship. With a passion for youth development, particularly through sports, she is dedicated to providing opportunities and advocacy for those without a voice. Her talents extend beyond the track; she is also an accomplished singer, having performed the national anthem at a sold-out Boston Red Sox game. She cherishes her Jamaican heritage, especially enjoying her mother's famous curry goat and oxtail dishes. A Long Island native, she loves relaxing at the beach with iced coffee, pizza, and bagels.",
  },
  {
    photo: murphyPhoto,
    name: 'Cate Murphy',
    pronouns: 'she/her',
    headline: 'Sterile Compounding Technician, President',
    bio: 'Cate Murphy is a P3 Doctor of Pharmacy student at Northeastern University where she serves as the President of Lambda Kappa Sigma. She is also an active member of Phi Lambda Sigma, NU Choral Society, and NU Chamber Singers. Cate currently works at Massachusetts General Hospital as a sterile compounding technician in the ambulatory oncology infusion pharmacy, a commitment in honor of her father who passed away in 2017 after an eight-month battle with esophageal cancer.',
  },
  {
    photo: aliotoPhoto,
    name: 'Dr. Nicole Alioto',
    pronouns: 'she/her',
    headline: 'CEO, Strategic Planner, Professor',
    bio: 'Dr. Alioto has engaged with clients in the education and public sector for over 20 years. Her extensive professional experience spans institutional research, strategic planning, and program evaluation at various institutions and agencies. Dr. Alioto has taught statistics and research methods at several institutions. She also developed and taught a specialized graduate course in predictive analytics and data mining, aimed at professionals in government settings. As the CEO of Alla Breve Consulting, her goal is to assist public sector organizations and educational institutions in streamlining their strategic planning and analysis processes.',
  },
  {
    photo: dasPhoto,
    name: 'Debpriya Das',
    pronouns: 'she/her',
    headline: 'International Academic, Schwarzman Scholar, Biology Teacher',
    bio: "Debpriya Das recently graduated from Northeastern University's MBA program and is currently pursuing pre-medicine studies at Columbia University. She has an international academic background with a Bachelor's Degree in Neuroscience from the National University of Singapore and the University of Melbourne, and a Master's Degree in Global Affairs from China's Tsinghua University. Debpriya stands out as the first Bangladeshi to receive the Schwarzman Scholarship and has been recognized with esteemed accolades including Northeastern's Huntington 100 and the Women Who Empower Innovator Award. Above all, she is recognized as an accomplished biology teacher and is the founder of Bioland, her own coaching center.",
  },
  {
    photo: colipanoPhoto,
    name: 'Chloe Colipano',
    pronouns: 'she/they',
    headline: 'CEO, Instagram Content Creator, Marketer',
    bio: "Chloe Colipano, a Business Administration and Communications student at Northeastern University with a focus on Marketing, is deeply engaged in the world of entrepreneurship and brand building. They serve as the CEO of Hoosky, a parody clothing merchandise brand at NU, and also engage in nonprofit marketing and philanthropic initiatives. During high school, Chloe developed a personal brand on Instagram, amassing around 50k followers and reachingachieving up to 55k+ likes per post. Since then, Chloe's interest has evolved into exploring how individuals utilize social media for financial, cultural, social, and personal decision-making.",
  },
  {
    photo: liuPhoto,
    name: 'Melody Liu',
    pronouns: 'she/her',
    headline: 'Co-founder, Software Engineer, Digital Illustrator',
    bio: 'Melody Liu is a 2023 graduate from Northeastern University with a degree in Computer Science and Business Administration, and is the co-founder of the Digital Illustration Association (DIA) at NU. DIA was driven by a simple yet powerful mission: to create a welcoming and open-minded community that embraces digital illustration in all its forms. Whether through drawing-parties, art challenges, or supportive critiques, DIA is a place where artists of all experience levels can connect with patrons and each other, fostering both personal and artistic growth.',
  },
]

export default function RenaissanceSpeakers() {
  return (
    <div className="w-full p-6 font-serif border md:rounded-md md:p-12 border-renaissance-light bg-renaissance-light/15">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-8 text-2xl font-bold md:text-3xl text-renaissance-dark">
          Meet Our Speakers!
        </h1>
      </div>

      <div className="max-w-2xl mx-auto space-y-24">
        {speakers.map((s, i) => (
          <div key={i} className="grid gap-4">
            <div
              className="grid gap-2 md:grid-cols-2"
              style={{
                gridTemplateAreas:
                  i % 2 === 0
                    ? '"speaker-photo speaker-info"'
                    : '"speaker-info speaker-photo"',
              }}
            >
              <Image
                src={s.photo}
                alt={`Portrait of ${s.name}`}
                className="w-full h-auto max-w-full rounded-md aspect-square [grid-area:speaker-photo]"
              />

              <div
                className={cn(
                  'flex flex-col justify-end p-6 md:p-8 rounded-md [grid-area:speaker-info]',
                  i < 4 ? 'bg-renaissance-light' : 'bg-renaissance-dark',
                )}
              >
                <p
                  className={cn(
                    'text-xl leading-none font-renaissance',
                    i < 4
                      ? 'text-renaissance-dark/85'
                      : 'text-renaissance-light/85',
                  )}
                >
                  {s.headline}
                </p>
                <h2
                  className={cn(
                    'mt-2 text-3xl',
                    i < 4 ? 'text-renaissance-dark' : 'text-renaissance-light',
                  )}
                >
                  <span className="text-4xl font-bold">{s.name}</span> &middot;{' '}
                  {s.pronouns}
                </h2>
              </div>
            </div>
            <div>
              <p className="mt-6 leading-7">{s.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <Link
          target="_blank"
          href="/renaissance/tickets"
          className="inline-flex items-center gap-2 px-6 py-2 mt-12 text-xl text-white no-underline uppercase transition-colors rounded-full font-renaissance bg-renaissance-dark w-max hover:bg-renaissance-dark/85"
        >
          Get Your Ticket to Renaissance <ArrowRightIcon size={16} />
        </Link>
      </div>
    </div>
  )
}
