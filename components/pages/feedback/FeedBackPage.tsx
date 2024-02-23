import { FeedBackForm } from './FeedBackForm'

export default function FeedBackPage() {
  return (
    <div className="w-full p-6 font-serif border xl:rounded-md md:p-12 border-renaissance-light bg-renaissance-light/15">
      <div className="mx-auto mb-8 text-center">
        <h1 className="text-2xl font-bold md:text-3xl text-renaissance-dark">
          Share Feedback
        </h1>
        <p className="mt-2 text-renaissance-dark/85">
          Please share any feedback from Renaissance so that we can improve our
          future events.
        </p>
      </div>

      <div className="max-w-md p-8 mx-auto border rounded-md border-renaissance-mid">
        <FeedBackForm />
      </div>
    </div>
  )
}
