import Image from 'next/image'
import Link from 'next/link'
import refractionLogo from '/components/images/refraction/TEDxNortheasternU_Refraction_Logo.png'

export default function RefractionOverview() {
  return (
    <div className="w-full p-6 border-y xl:border xl:rounded-md md:p-12 border-[#1d2d44] bg-[#000000] relative overflow-hidden">
      {/* Organic gradient from black (top-left) to dark purple (bottom-right) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.95) 30%, rgba(30, 10, 50, 0.8) 60%, rgba(50, 15, 80, 0.6) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(40, 15, 70, 0.4) 0%, rgba(30, 10, 50, 0.3) 40%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 1) 100%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Logo */}
        <div className="-mx-6 md:-mx-12 mb-8">
          <Image
            src={refractionLogo}
            alt="TEDxNortheasternU Refraction Logo"
            className="h-auto w-full"
          />
        </div>

        {/* Event passed notice */}
        <div className="text-center mb-10">
          <p className="inline-block px-6 py-2 text-sm uppercase tracking-widest text-[#b8c3d4]/70 font-renaissance border border-[#1d2d44] rounded-full">
            February 21, 2026 &middot; Event has concluded
          </p>
        </div>

        {/* Thank you message */}
        <div className="text-center font-renaissance space-y-6 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#b8c3d4] tracking-tight">
            Thank you for an incredible event.
          </h1>

          <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-[#e778b0f1] via-[#6366f1] to-[#7715fffc] rounded-full" />

          <p className="text-[#b8c3d4]/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            To every speaker, attendee, and member who brought{' '}
            <span className="refraction-rainbow">Refraction</span> to life: your
            energy and curiosity made this event unforgettable. The ideas shared on
            stage will continue to bend, shift, and inspire long after the lights
            have dimmed.
          </p>

          <p className="text-[#b8c3d4]/70 text-base leading-relaxed max-w-2xl mx-auto">
            The event has passed, but the conversations are just beginning.
          </p>
        </div>

        {/* Video embed */}
        <div className="aspect-video mb-12">
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.youtube.com/embed/xcy24Vj0YS4"
            title="TEDxNortheasternU 2026: Refraction"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>

        {/* CTA to previous event page */}
        <div className="flex flex-col items-center gap-6 text-center">
          <Link
            href="/refraction/speakers"
            className="inline-flex items-center gap-2 px-8 py-3 text-lg no-underline transition-all rounded-full text-[#b8c3d4] font-renaissance bg-gradient-to-r from-[#1d2d44] to-[#000000] border border-[#1d2d44] hover:border-[#6366f1] hover:shadow-lg hover:shadow-[#6366f1]/20"
          >
            Meet our <span className="refraction-rainbow">speakers</span>
          </Link>

          <p className="text-[#b8c3d4]/50 text-sm font-renaissance">
            Stay connected — follow TEDxNortheasternU for updates on future events.
          </p>
        </div>
      </div>
    </div>
  )
}