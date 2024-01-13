'use client'

import { ArrowRightIcon, Loader } from 'lucide-react'
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
      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white uppercase transition-colors bg-red-600 rounded-full w-max hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
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
  const [state, formAction] = useFormState(createRenaissanceRsvp, initialState)

  if (state?.success) {
    return (
      <div className="text-center">
        <p>
          Thank you for reserving your seat. We look forward to seeing you at
          Renaissance on Saturday, February 24th!
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="max-w-sm mx-auto">
      <div className="flex flex-row gap-2">
        <div className="flex-1 mb-5">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Sam"
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
            className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Serif"
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
          className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="s.serif@northeastern.edu"
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="pronouns"
          className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
        >
          Pronouns
        </label>
        <input
          type="text"
          id="pronouns"
          name="pronouns"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
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
          className="border border-slate-300 cursor-pointer rounded-md p-2 flex items-center gap-2 text-slate-900 bg-slate-50 [&:has(:checked)]:bg-slate-100"
          htmlFor="rsvp-yes"
        >
          <RadioGroupItem id="rsvp-yes" value="yes" />
          Yes
        </Label>
        <Label
          className="border border-slate-300 cursor-pointer rounded-md p-2 flex items-center gap-2 text-slate-900 bg-slate-50 [&:has(:checked)]:bg-slate-100"
          htmlFor="rsvp-no"
        >
          <RadioGroupItem id="rsvp-no" value="no" />
          No
        </Label>
      </RadioGroup>

      <div className="mt-8 mb-6">
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      </div>

      <div className="mb-5">
        <label
          htmlFor="dietaryRestrictions"
          className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
        >
          Dietary Allergies/Restrictions
          <small className="ml-2 uppercase text-slate-500">Optional</small>
        </label>
        <p className="mb-2 text-xs text-slate-700 dark:text-white">
          We strive to cater to various dietary needs, including vegetarian,
          vegan, gluten-free, and any specific food allergies. This information
          will help us ensure that your meal preferences are accommodated during
          the event.
        </p>
        <input
          type="text"
          id="dietaryRestrictions"
          name="dietaryRestrictions"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="vegetarian"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="accommodations"
          className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
        >
          Accessibility Accommodations
          <small className="ml-2 uppercase text-slate-500">Optional</small>
        </label>
        <p className="mb-2 text-xs text-slate-700 dark:text-white">
          We are committed to making this event inclusive and accessible for all
          attendees. Please share any disability-related accommodations needed
          to facilitate your participation.
        </p>
        <input
          type="text"
          id="accommodations"
          name="accommodations"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="wheelchair access"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="comments"
          className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
        >
          Feedback/Comments
          <small className="ml-2 uppercase text-slate-500">Optional</small>
        </label>
        <p className="mb-2 text-xs text-slate-700 dark:text-white">
          We value your thoughts and suggestions! Please use this space to share
          any feedback, comments, or specific requests you might have regarding
          the event.
        </p>
        <textarea
          id="comments"
          name="comments"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
