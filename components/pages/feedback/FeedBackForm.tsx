'use client'

import { ArrowRightIcon, Loader } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'

import { createRenaissanceFeedback } from '@/app/actions'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const initialState = {
  email: '',
  feedback: 'feedback',
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
    return (
      <p className="text-center">
        Thank you for submitting your feedback. Thank you for coming to the
        Renaissance!
      </p>
    )
  }

  return (
    <form action={formAction} className="max-w-sm mx-auto font-sans">
      <div className="flex flex-row gap-2"></div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-semibold text-renaissance-dark"
        >
          Email Address
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

      <Label
        htmlFor="feedback"
        className="block mb-2 text-sm font-semibold text-renaissance-dark"
      >
        Thank you for coming!
      </Label>

      <div className="mt-8 mb-6">
        <hr className="h-px bg-gray-200 border-0" />
      </div>

      <div className="mb-5">
        <label
          htmlFor="feedback"
          className="block mb-2 text-sm font-semibold text-renaissance-dark"
        >
          Feedback/Comments
        </label>
        <p className="mb-2 text-xs text-slate-700">
          We value your thoughts and suggestions! Please use this space to share
          any feedback, comments, or specific requests you might have regarding
          the event.
        </p>
        <textarea
          id="feedback"
          name="feedback"
          className="border border-renaissance-mid bg-transparent text-renaissance-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5"
          placeholder="Lorem ipsum..."
        />
      </div>

      <SubmitButton />

      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  )
}
