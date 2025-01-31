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
    photo: cutlerPhoto, //todo
    name: 'Adrian Luzio',
    pronouns: 'he/him',
    headline: 'Entrepreneurship & Finance Senior at Northeastern University',
    bio: " is a senior at Northeastern University, pursuing a Business Administration degree with concentrations in Entrepreneurial Startups and Finance. Diagnosed with ADHD at a young age, Adrian’s journey is one of resilience, growth, and transformation. From navigating the challenges of ADHD to pursuing his ambitions, Adrian has cultivated a unique perspective on self-perception, identity, and embracing challenges. Adrian reframes ADHD as a sensitivity rather than a limitation—an opportunity to uncover one’s unique rhythm. By rejecting societal labels, he inspires others to rewrite their narratives, viewing challenges as catalysts for growth, self-discovery, and purpose. His story highlights universal lessons in resilience and individuality, resonating far beyond ADHD.",
  },
  {
    photo: aliotoPhoto, //todo
    name: 'Brecker Ferguson',
    pronouns: 'he/him',
    headline: 'A Global Advocate for Sustainability, Business Innovation, and Social Impact Leadership',
    bio: ' is a sustainability scholar graduating from Northeastern University this spring. His research focuses on the intersections of the environment, society, and economics worldwide. He has worked as a nonprofit consultant, a conservation researcher in South Africa, a nonprofit program director in South Africa, and in business development for a climate tech startup. Brecker loves to travel and learn about places near and far. In his free time, Brecker plays the cello and writes, and he expects to publish a memoir later in 2025.',
  },
  {
    photo: murphyPhoto, //todo
    name: 'Janine Hamner Holman',
    pronouns: 'she/her',
    headline: 'Champion for Workplace Excellence, Organizational Growth, and Inclusive Leadership',
    bio: ' brings over 30 years of experience helping organizations and leaders thrive. As the CEO of J&J Consulting Group, she specializes in leadership development, team performance, and creating workplace cultures where people want to stay and succeed. Janine has worked with Fortune 200 companies, nonprofits, and public sector organizations, blending practical strategies with cutting-edge insights to drive real results. She’s also the host of The Cost of Not Paying Attention podcast and the author of Mind the Gap: A Thought Leader’s Guide to 21st Century Leadership. Her work is about making workplaces better for everyone.',
  },
  {
    photo: redwoodPhoto, //todo
    name: 'Jarrett Lobb',
    pronouns: 'he/him',
    headline: 'Future Legal Advocate Driving Reform, Policy Research, and Community Impact',
    bio: " is a second-year undergraduate at Northeastern University, pursuing a combined major in mathematics and political science with a concentration in law and legal studies. Jarrett developed an intense interest in the US criminal justice system after a transformative summer volunteering experience at the Haley House Soup Kitchen. By sharing powerful stories from his internship, Jarrett highlights the damage caused by a justice system intended to re-build. Outside of academics, Jarett is actively involved in the Northeastern Debate Society and the Student Alliance for Prison Reform. Some of his favorite hobbies include rock climbing, skateboarding, and spending time with his three pups\!",
  },
  {
    photo: dasPhoto, //todo
    name: 'Naomi Rajput',
    pronouns: 'she/her',
    headline: 'Advancing Neuroscience, DEI, and Community Impact Through Research and Leadership',
    bio: " is a dedicated researcher, visionary entrepreneur, and champion of Diversity, Equity, and Inclusion, with a strong focus on healthcare and neuroscience. Her work spans pediatric research, addressing early speech intervention, infant-mother relationships, and digital health, while also collaborating with startups to innovate and validate groundbreaking healthcare solutions. A dynamic leader, Naomi empowers underrepresented communities, particularly Asian Americans and women, by merging her academic expertise with impactful advocacy initiatives. As a talented musician, she has performed over 40 shows across Massachusetts, seamlessly blending Indian Classical and Western music. Naomi exemplifies determination, innovation, and a relentless commitment to advancing research, entrepreneurship, and the arts.",
  },
  {
    photo: liuPhoto, //todo
    name: 'Zara Poon',
    pronouns: 'she/her',
    headline: 'Bridging Bioengineering, Neuroscience, and Mental Health Advocacy',
    bio: ' is a fourth-year undergraduate student at Northeastern University majoring in Bioengineering and Biochemistry. Originally from Berkeley Heights, New Jersey, Zara draws from her personal experiences to explore themes of resilience, self-compassion, and recovery. In her TEDx talk, she opens up about her journey with an eating disorder, providing a candid look into the challenges of recovery and the importance of addressing mental health with empathy. Through her story, Zara hopes to inspire others to embrace vulnerability and navigate life\'s struggles with courage and understanding.',
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
