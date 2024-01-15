import { RsvpForm } from './RsvpForm'

export default function RsvpPage() {
  return (
    <>
      <div className="mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl text-[#1D633E]">
          VIP RSVP
        </h1>
        <p className="mt-2 text-slate-600">Please RSVP by February 1, 2024.</p>
      </div>

      <div className="max-w-md p-8 mx-auto border rounded-md border-slate-200">
        <RsvpForm />
      </div>
    </>
  )
}
