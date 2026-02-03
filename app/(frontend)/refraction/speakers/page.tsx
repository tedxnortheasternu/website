'use client'

import Image, { StaticImageData } from 'next/image'

import chrisRyan from '@/components/images/refraction/chris_ryan.jpg'
import rohanVenkatesh from '@/components/images/refraction/rohan_venkatesh.jpg'
import khushiShah from '@/components/images/refraction/khushi_shah.jpeg'
import kellyCervantes from '@/components/images/refraction/kelly_cervantes.jpg'
import tiffanyJoseph from '@/components/images/refraction/tiffany_joseph.jpeg'
import dianeShannon from '@/components/images/refraction/diane_shannon.jpg'
import darinDetwiler from '@/components/images/refraction/daren_detweiler.jpg'

import { cn } from '@/lib/utils'

type Speaker = {
  photo: StaticImageData | string
  name: string
  pronouns: string
  title: string
  headline: string
  bio: string
  speechDescription: string
}

// Example speakers - replace with actual data
const speakers: Speaker[] = [
  {
    photo: chrisRyan,
    name: 'Chris Ryan',
    pronouns: 'he/him',
    title: 'Third Places: Reimagining Architecture to Encourage Connection',
    headline: 'Architect and developer with 20+ years designing activity-driven Third Places. Harvard GSD grad, former NU professor, featured in Forbes and Fast Company',
    bio: ' is an architect, developer, builder, and lifelong athlete whose 20+ years of experience and passion for activity-driven environments fuel his work transforming bold ideas into award-winning Third Places. Chris\'s work has been featured in Forbes and Fast Company, and he was a former professor at the NU School of Architecture. He has a Master of Architecture from the Harvard GSD.',
    speechDescription: 'This talk uncovers how modern third places—activity-driven, community-shaping spaces—could be the antidote to our most modern problems.',
  },
  {
    photo: rohanVenkatesh,
    name: 'Rohan Venkatesh',
    pronouns: 'he/him',
    title: 'When Life Doesn’t Go Back to Normal',
    headline: 'Brain cancer survivor and former investment banker exploring how adversity drives personal growth.',
    bio: ' is a graduate of Northeastern University. He began his career in investment banking and private equity, following a carefully planned path after college. In 2021, shortly before relocating to New York City for his next role, he was diagnosed with brain cancer. Today, Rohan is a brain cancer survivor who is exploring how people respond to adversity and how those responses can lead to growth. This talk marks his first time sharing that journey on a public stage.',
    speechDescription: 'This talk highlights how we can’t always avoid adversity, but we don’t have to remain impervious to it. What matters is how we respond, and whether that response allows us to grow.',
  },
  {
    photo: khushiShah,
    name: 'Khushi Shah',
    pronouns: 'she/her',
    title: 'Girls Like Me: Why Empowerment Isn’t Enough',
    headline: 'Founder of NASA-recognized Drizzl and advocate for systemic change in female excellence and opportunity.',
    bio: ' is a third-year undergraduate Computer Science and Business Administration student at Northeastern University, concentrating in entrepreneurial startups and corporate innovation. She is the founder and CEO of Drizzl, a patent-pending smart irrigation system recognized by NASA, Google, Forbes Ignite, and the U.S. Navy for its innovative approach to reducing water waste. A UN speaker, published author, reality TV-featured entrepreneur, e.l.f. Cosmetics x Her Campus 22 Under 22 honoree, content creator, and active leader in Northeastern’s entrepreneurial community, Khushi uses her platform to explore the intersection of confidence and opportunity as girls grow - and why redesigning systems, not just empowering individuals, is the key to changing the narrative of female excellence globally.',
    speechDescription: 'This talk is a powerful reflection on how societal expectations shape girls’ confidence and calls for redesigning systems - not just empowering individuals - so that ambition, leadership, and innovation by women and marginalized groups become defaults rather than exceptions.',
  },
  {
    photo: kellyCervantes,
    name: 'Kelly Cervantes',
    pronouns: 'she/her',
    title: 'There are No Winners at the Grief Olympics',
    headline: 'Award-winning writer and advocate exploring grief, motherhood, and healing through bestselling books and work featured in the New York Times, CNN, and People.',
    bio: ' is an award-winning writer, speaker, and advocate best known for her books, USA Today Bestselling Normal Broken: The Grief Companion for When it’s Time to Heal But You’re Not Sure You Want to and The Luckiest: A Memoir of Love, Loss, Motherhood, and the Pursuit of Self. She has been published in The Chicago Tribune, Fortune, and Cosmopolitan, as well as quoted in the New York Times, CNN, and People. Born and raised in the Midwest, Kelly currently resides in Maplewood, NJ, with her family.',
    speechDescription: 'This talk challenges us and our societal urge to rank our relative losses - reframing grief as a shared human experience that resists scorekeeping.',
  },
  {
    photo: tiffanyJoseph,
    name: 'Dr. Tiffany Joseph, PhD',
    pronouns: 'he/him',
    title: 'Imagining a Better Healthcare System in the Face of Shifting Paradigms',
    headline: 'Sociology professor and award-winning author examining race, immigration, and healthcare access through groundbreaking research at Northeastern University.',
    bio: ' is an author, professor, and researcher of sociology and anthropology who examines race, immigration, and healthcare access. She is known for her award winning research publications and her books: Race on the Move: Brazilian Migrants and the Global Reconstruction and Not All In: Race, Immigration, and Healthcare Exclusion in the Age of Obamacare. Dr. Joseph is an associate professor of Sociology and International Affairs at Northeastern University and continues to conduct ground-breaking research in intersections between accessibility and healthcare. Joseph currently lives with her husband and two children in Massachusetts.',
    speechDescription: 'This talk peels back the layers and history of the US healthcare system as an urgent message to unite for reform.',
  },
  {
    photo: dianeShannon,
    name: 'Dr. Diane Shannon, MD',
    pronouns: 'she/her',
    title: 'Riding the Waves: Lessons from Surfing to Beat Burnout',
    headline: 'Physician turned coach and podcast host helping clinicians recover from burnout and build sustainable careers.',
    bio: ' is a physician writer, advocate, and certified coach who left clinical practice after experiencing early-career burnout to dedicate herself to addressing clinician wellness, system inefficiencies, and patient safety. For over 20 years, she has championed solutions to physician burnout, co-authoring Preventing Physician Burnout: Curing the Chaos and Returning Joy to the Practice of Medicine (2016). Since becoming a certified coach in 2019, she has supported hundreds of clinicians in building sustainable, fulfilling careers. She launched her podcast, Vital Signs: Thriving as a Woman in Medicine, in January 2024 and continues to speak and write on clinician wellness. In her free time, she enjoys spending time with her three young adult children, traveling with her husband, and surfing.',
    speechDescription: 'This talk sheds light on making small, intentional microchanges that restore balance, agency, and joy—allowing us to stay in our professions and thrive instead of wiping out.',
  },
  {
    photo: darinDetwiler,
    name: 'Dr. Darin Detwiler, PhD',
    pronouns: 'he/him',
    title: 'Why Didn’t Someone Stop This? How Leaders Fall into the Certainty Gap',
    headline: 'Food safety expert, former nuclear submariner, and Northeastern professor driving ethical leadership and public health reforms across industry, government, and academia.',
    bio: ' is an internationally recognized author and expert in food policy, risk communication, and leadership ethics. A former nuclear submariner and federal advisor, he brings over 30 years of experience working with industry, government, and academia to strengthen systems of public health and safety. As an Associate Teaching Professor at Northeastern University, Dr. Detwiler educates future leaders on the critical importance of ethical decision-making and action in high-risk environments. His work has influenced major reforms in food safety and earned him recognition as a leading voice for accountability - especially when the cost of inaction is measured in lives.',
    speechDescription: 'In this powerful and deeply personal talk, Dr. Darin Detwiler (a veteran, educator, and food safety advocate) reveals how hesitation at critical moments can lead to irreversible harm. Drawing from high-stakes experiences aboard a Cold War submarine and decades working with food industry and policymakers, he introduces the “Certainty Gap”: the dangerous space between recognizing risk and having the courage to act. With striking clarity and a story that reshaped the course of his life, Detwiler challenges today’s and tomorrow’s leaders to confront the invisible threats around them - not with delay, but with decisive action.',
  }
  // Add more speakers here following the same structure
]

export default function RefractionSpeakers() {
  return (
    <div className="w-full p-6 font-renaissance border-y xl:border xl:rounded-md md:p-12 border-[#1d2d44] bg-[#000000]">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#b8c3d4] font-renaissance">
          Meet Our <span className="refraction-rainbow">Speakers</span>!
        </h1>
        <p className="text-center text-[#b8c3d4]/80 text-lg font-renaissance">
          Discover the voices that will shape our understanding of{' '}
          <span className="refraction-rainbow">Refraction</span>
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
        {speakers.map((speaker, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Main Speaker Card */}
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {/* Speaker Photo */}
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-[#1d2d44] to-[#000000]">
                <Image
                  src={speaker.photo}
                  alt={`Portrait of ${speaker.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Speaker Info */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  {/* Talk Title */}
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#b8c3d4] leading-tight font-renaissance">
                    {speaker.title}
                  </h2>

                  {/* Name and Pronouns */}
                  <div className="mb-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#b8c3d4] mb-1 font-renaissance">
                      {speaker.name}
                    </h3>
                    <p className="text-lg text-[#b8c3d4]/70 font-renaissance">{speaker.pronouns}</p>
                  </div>

                  {/* Headline */}
                  <p className="text-lg md:text-xl font-renaissance text-[#b8c3d4]/90 mb-6 uppercase tracking-wide">
                    {speaker.headline}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="h-1 w-20 bg-gradient-to-r from-[#e778b0f1] via-[#6366f1] to-[#7715fffc] rounded-full" />
              </div>
            </div>

            {/* Bio Section */}
            <div className="mt-6 p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#1d2d44]/50 to-[#000000]/50 border border-[#1d2d44] backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-3 text-[#b8c3d4] font-renaissance">
                About {speaker.name}
              </h4>
              <p className="text-[#b8c3d4]/90 leading-relaxed mb-6 font-renaissance">
                <span className="font-semibold text-[#b8c3d4]">{speaker.name}</span>
                {speaker.bio}
              </p>

              {/* Speech Description */}
              <div className="pt-6 border-t border-[#1d2d44]">
                <h4 className="text-xl font-bold mb-3 text-[#b8c3d4] font-renaissance">
                  About the Talk
                </h4>
                <p className="text-[#b8c3d4]/90 leading-relaxed font-renaissance">
                  {speaker.speechDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State Message */}
      {speakers.length === 0 && (
        <div className="max-w-2xl mx-auto text-center py-12">
          <p className="text-xl text-[#b8c3d4]/70 mb-4 font-renaissance">
            Speaker lineup coming soon!
          </p>
          <p className="text-[#b8c3d4]/50 font-renaissance">
            Check back soon to meet our amazing speakers.
          </p>
        </div>
      )}
    </div>
  )
}
