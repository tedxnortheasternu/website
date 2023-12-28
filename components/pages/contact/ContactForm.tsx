'use client'

import { useForm, ValidationError } from '@formspree/react'
import { AlertTriangleIcon, ArrowRightIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mzbnbplb')

  if (state.succeeded) {
    return (
      <div className="text-center">
        <p>Thanks for reaching out!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-5">
      <div>
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
        >
          Your name
        </label>
        <input
          type="name"
          id="name"
          name="name"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Samuel Serif"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="samuel.serif@northeastern.edu"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-slate-900 bg-slate-50 rounded-md border border-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ask a question..."
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      {state.errors ? (
        <Alert variant="destructive">
          <AlertTriangleIcon className="w-4 h-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            <ValidationError errors={state.errors} />
          </AlertDescription>
        </Alert>
      ) : null}
      <button
        type="submit"
        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white uppercase transition-colors bg-red-600 rounded-full w-max hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
        disabled={state.submitting}
      >
        Submit <ArrowRightIcon size={16} />
      </button>
    </form>
  )
}
