'use client'

import { ArrowRightIcon, Loader } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'

import { createRenaissanceFeedback } from '@/app/actions'

const initialState = {
  email: '',
  feedback: '',
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="inline-flex items-center gap-2 px-6 py-1.5 mt-2 text-xl text-renaissance-light uppercase transition-colors rounded-full font-renaissance bg-renaissance-dark w-max hover:bg-black"
      aria-disabled={pending}
    >
      Submit{' '}
      {pending ? (
        <Loader size={16} className="animate-spin" />
      ) : (
        <ArrowRightIcon size={16} />
      )}
    </button>
  )
}

export function FeedBackForm() {
  const searchParams = useSearchParams()
  const [state, formAction] = useFormState(
    createRenaissanceFeedback,
    initialState,
  )

  if (state?.success) {
    return <p className="text-center">Thank you for sharing this feedback!</p>
  }

  return (
    <form action={formAction} className="max-w-sm mx-auto font-sans">
      <div className="mb-5">
        <label
          htmlFor="feedback"
          className="block mb-2 text-sm font-semibold text-renaissance-dark"
        >
          Feedback/Comments
        </label>
        <p className="mb-2 text-xs text-slate-700">
          Please use this space to share any feedback, comments, or takeaways
          from our 2024 event, Renaissance.
        </p>
        <textarea
          id="feedback"
          name="feedback"
          className="border border-renaissance-mid bg-transparent text-renaissance-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5"
          placeholder="Lorem ipsum..."
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-semibold text-renaissance-dark"
        >
          Email Address
          <small className="ml-2 font-normal uppercase text-renaissance-mid">
            Optional
          </small>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-renaissance-mid bg-transparent text-renaissance-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5"
          placeholder="s.serif@northeastern.edu"
          defaultValue={searchParams.get('email') ?? ''}
        />
      </div>

      <SubmitButton />

      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  )
}
