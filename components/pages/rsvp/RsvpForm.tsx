'use client'

import { ArrowRightIcon, Loader } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'

import { createRenaissanceRsvp } from '@/app/actions'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  pronouns: '',
  rsvp: 'yes',
  dietaryRestrictions: '',
  accommodations: '',
  comments: '',
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

export function RsvpForm() {
  const searchParams = useSearchParams()
  const [state, formAction] = useFormState(createRenaissanceRsvp, initialState)

  if (state?.success) {
    return (
      <p className="text-center">
        Thank you for submitting your RSVP. We look forward to seeing you at
        Renaissance on Saturday, February 24th!
      </p>
    )
  }

  return (
    <form action={formAction} className="max-w-sm mx-auto font-sans">
      <div className="flex flex-row gap-2">
        <div className="flex-1 mb-5">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-semibold text-renaissance-dark"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="border border-renaissance-mid bg-transparent text-renaissance-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5"
            placeholder="Sam"
            defaultValue={searchParams.get('firstName') ?? ''}
            required
          />
          {state?.errors?.firstName ? (
            <Alert variant="destructive" size="sm" className="mt-2">
              <AlertDescription>{state.errors.firstName}</AlertDescription>
            </Alert>
          ) : null}
        </div>

        <div className="flex-1 mb-5">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-semibold text-renaissance-dark"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="border border-renaissance-mid bg-transparent text-renaissance-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5"
            placeholder="Serif"
            defaultValue={searchParams.get('lastName') ?? ''}
            required
          />
          {state?.errors?.lastName ? (
            <Alert variant="destructive" size="sm" className="mt-2">
              <AlertDescription>{state.errors.lastName}</AlertDescription>
            </Alert>
          ) : null}
        </div>
      </div>

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
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="pronouns"
          className="block mb-2 text-sm font-semibold text-renaissance-dark"
        >
          Pronouns
        </label>
        <input
          type="text"
          id="pronouns"
          name="pronouns"
          className="border border-renaissance-mid bg-transparent text-renaissance-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5"
          placeholder="she/her"
          required
        />
        {state?.errors?.pronouns ? (
          <Alert variant="destructive" size="sm" className="mt-2">
            <AlertDescription>{state.errors.pronouns}</AlertDescription>
          </Alert>
        ) : null}
      </div>

      <Label
        htmlFor="rsvp"
        className="block mb-2 text-sm font-semibold text-renaissance-dark"
      >
        Will you be attending?
      </Label>
      <RadioGroup
        className="flex items-center gap-2.5"
        defaultValue="yes"
        id="rsvp"
        name="rsvp"
      >
        <Label
          className="border border-renaissance-mid bg-transparent cursor-pointer rounded-md p-2 flex items-center gap-2 text-renaissance-dark [&:has(:checked)]:bg-transparent"
          htmlFor="rsvp-yes"
        >
          <RadioGroupItem id="rsvp-yes" value="yes" />
          Yes
        </Label>
        <Label
          className="border border-renaissance-mid bg-transparent cursor-pointer rounded-md p-2 flex items-center gap-2 text-renaissance-dark [&:has(:checked)]:bg-transparent"
          htmlFor="rsvp-no"
        >
          <RadioGroupItem id="rsvp-no" value="no" />
          No
        </Label>
      </RadioGroup>

      <div className="mt-8 mb-6">
        <hr className="h-px bg-gray-200 border-0" />
      </div>

      <div className="mb-5">
        <label
          htmlFor="dietaryRestrictions"
          className="block mb-2 text-sm font-semibold text-renaissance-dark"
        >
          Dietary Allergies/Restrictions
          <small className="ml-2 font-normal uppercase text-renaissance-mid">
            Optional
          </small>
        </label>
        <p className="mb-2 text-xs text-slate-700">
          We strive to cater to various dietary needs, including vegetarian,
          vegan, gluten-free, and any specific food allergies. This information
          will help us ensure that your meal preferences are accommodated during
          the event.
        </p>
        <input
          type="text"
          id="dietaryRestrictions"
          name="dietaryRestrictions"
          className="border border-renaissance-mid bg-transparent text-renaissance-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5"
          placeholder="vegetarian"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="accommodations"
          className="block mb-2 text-sm font-semibold text-renaissance-dark"
        >
          Accessibility Accommodations
          <small className="ml-2 font-normal uppercase text-renaissance-mid">
            Optional
          </small>
        </label>
        <p className="mb-2 text-xs text-slate-700">
          We are committed to making this event inclusive and accessible for all
          attendees. Please share any disability-related accommodations needed
          to facilitate your participation.
        </p>
        <input
          type="text"
          id="accommodations"
          name="accommodations"
          className="border border-renaissance-mid bg-transparent text-renaissance-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5"
          placeholder="wheelchair access"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="comments"
          className="block mb-2 text-sm font-semibold text-renaissance-dark"
        >
          Feedback/Comments
          <small className="ml-2 font-normal uppercase text-renaissance-mid">
            Optional
          </small>
        </label>
        <p className="mb-2 text-xs text-slate-700">
          We value your thoughts and suggestions! Please use this space to share
          any feedback, comments, or specific requests you might have regarding
          the event.
        </p>
        <textarea
          id="comments"
          name="comments"
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
