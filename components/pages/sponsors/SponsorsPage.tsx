import React from 'react'

const SponsorshipTiers = [
  {
    name: 'Bronze',
    price: '$750+',
    benefits: [
      'Complimentary VIP tickets: 3',
      'Recognition on organization website',
      'Recognition in pre-roll and post-roll video credits for each Talk uploaded to the official “TEDx Talks” Youtube Channel',
    ],
  },
  {
    name: 'Silver',
    price: '$1000+',
    benefits: [
      'Complimentary VIP tickets: 4',
      'Recognition on organization website',
      'Recognition in pre-roll and post-roll video credits for each Talk uploaded to the official “TEDx Talks” Youtube Channel',
      'Recognition on social media leading up to and during the event',
      'Opportunity for interactive exhibit space during intermission',
      'Logo placement on presentation slides and event program',
      'Opportunity to place items in attendee and/or speaker gift bags',
    ],
  },
  {
    name: 'Gold',
    price: '$2000+',
    benefits: [
      'Complimentary VIP tickets: 5',
      'Recognition on organization website',
      'Recognition in pre-roll and post-roll video credits for each Talk uploaded to the official “TEDx Talks” Youtube Channel',
      'Recognition on social media leading up to and during the event',
      'Opportunity for interactive exhibit space during intermission',
      'Logo placement on presentation slides and event program',
      'Opportunity to place items in attendee and/or speaker gift bags',
      'On-stage recognition during opening and closing remarks',
      'Half-page advertisement in event program',
      'Logo placement on promotional flyers and day-of posters',
    ],
  },
]

const SponsorsPage: React.FC = () => {
  const getTierColorClass = (tierName: string) => {
    switch (tierName.toLowerCase()) {
      case 'bronze':
        return 'text-orange-600'
      case 'silver':
        return 'text-gray-400'
      case 'gold':
        return 'text-yellow-400'
      default:
        return 'text-black'
    }
  }
  return (
    <div className="container max-w-screen-xl px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">
        Sponsorship Opportunities
      </h1>
      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-semibold">
          Why Sponsor TEDxNortheasternU?
        </h2>
        <p className="text-lg leading-relaxed">
          Our platform lets you engage in authentic dialogue with a passionate,
          open-minded audience. As a sponsor, you can be part of a bigger
          movement to bring people together to share ideas in a noncompetitive,
          collaborative environment. This event has the ability to change the
          way our community perceives the world around them. With your support,
          we hope to expose people to a range of interdisciplinary ideas. TED
          and TEDx are widely known, and by being a partner, you can help bring
          one of the biggest name events to Northeastern University.
        </p>
      </section>
      <section>
        <h2 className="mb-4 text-3xl font-semibold">Sponsorship Tiers</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {SponsorshipTiers.map((tier) => (
            <div key={tier.name} className="p-8 border shadow-lg b ronded-lg">
              <h3
                className={`text-2xl font-semibold mb-3 ${getTierColorClass(tier.name)}`}
              >
                {tier.name} ({tier.price})
              </h3>
              <ul className="pl-5 list-disc list-outside">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="mb-2">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default SponsorsPage
