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
    price: '$1500+',
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

const InKindOptions = [
  { title: 'Food & Beverages' },
  { title: 'Printing' },
  { title: 'Photography & Videography' },
  { title: 'Media Partners' },
  { title: 'Gift Bag Items' },
  { title: 'Staff Shirts' },
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
      {/* In-Kind Sponsorships section */}
      <section className="py-8 mb-12">
        <h2 className="mb-6 text-3xl font-semibold">In-Kind Sponsorships</h2>
        <p className="mb-6 text-lg leading-relaxed">
          Besides cash donations, you can also support us through in-kind
          donations! Below are some possible areas that we have identified. We
          are also open to others and will customize benefits packages based on
          the relative value of the in-kind gift.
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {InKindOptions.map((option, index) => (
            <div
              key={index}
              className="p-4 font-semibold text-center border rounded-lg shadow"
            >
              {option.title}
            </div>
          ))}
        </div>
      </section>

      {/* Limitations section */}
      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-semibold">Limitations</h2>
        <p className="text-lg leading-relaxed">
          As TEDx license holders, we must follow specific rules including those
          around sponsorships and funding. These include that sponsors:
        </p>
        <ul className="pl-5 mb-4 list-disc list-outside">
          <li className="mb-2">
            May have no editorial control or veto power over event programming
          </li>
          <li className="mb-2">
            May not be endorsed via TEDxNortheasternU social media properties
          </li>
          <li className="mb-2">
            May not speak from the main stage at the event
          </li>
        </ul>
      </section>
    </div>
  )
}
export default SponsorsPage
