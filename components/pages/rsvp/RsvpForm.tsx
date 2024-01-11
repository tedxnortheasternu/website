'use client'
import { useForm, ValidationError } from '@formspree/react'
import { AlertTriangleIcon, ArrowRightIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function RsvpForm() {

    const [state, handleOnSubmit] = useForm('xayrnqdn')

    if (state.succeeded) {  
        return (
            <div className="text-center">
                <p>Thanks for the Rsvp!</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleOnSubmit} className="max-w-sm mx-auto space-y-5">
            <div>
                <label
                    htmlFor='firstName'
                    className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                >
                    Preferred first name
                </label>
                <input
                    type='text'
                    id='firstName'
                    name="firstName"
                    className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Samuel"
                    required
                />
                <ValidationError prefix="FirstName" field="firstName" errors={state.errors} />
            </div>

            <div>
                <label
                    htmlFor='lastName'
                    className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                >
                    Preferred last name
                </label>
                <input
                    type='text'
                    id='lastName'
                    name="lastName"
                    className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Serif"
                    required
                />
                <ValidationError prefix="LastName" field="lastName" errors={state.errors} />
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
                    htmlFor='diet'
                    className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                >
                    Dietary Allergies/Restrictions
                </label>
                <p className="text-slate-700 dark:text-white text-xs mb-2">
                    We strive to cater to various dietary needs, including vegetarian, vegan, gluten-free, and any specific food allergies. This information will help us ensure that your meal preferences are accommodated during the event.
                </p>
                <input
                    type='text'
                    id='diet'
                    name="diet"
                    className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="vegetarian"
                />
                <ValidationError prefix="Diet" field="diet" errors={state.errors} />
            </div>

            <div>
                <label
                    htmlFor='accommodations'
                    className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                >
                    Accessibility Accommodations
                </label>
                <p className="text-slate-700 dark:text-white text-xs mb-2">
                    We are committed to making this event inclusive and accessible for all attendees. Please share any disability-related accommodations needed to facilitate your participation.
                </p>
                <input
                    type='text'
                    id='accommodations'
                    name="accommodations"
                    className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="wheelchair"
                />
                <ValidationError prefix="Accommodations" field="accommodations" errors={state.errors} />
            </div>

            <div>
                <label
                    htmlFor='comments'
                    className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                >
                    Feedback/Comments
                </label>
                <p className="text-slate-700 dark:text-white text-xs mb-2">
                    We value your thoughts and suggestions! Please use this space to share any feedback, comments, or specific requests you might have regarding the event.
                </p>
                <textarea
                    id='comments'
                    name="comments"
                    className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="give your feedback here"
                />
                <ValidationError prefix="Comments" field="comments" errors={state.errors} />
            </div>
            {state.errors ? (
                <Alert variant="destructive">
                    <AlertTriangleIcon className="w-4 h-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        <ValidationError errors={state.errors} />
                    </AlertDescription>   
                </Alert>
            ): null}
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