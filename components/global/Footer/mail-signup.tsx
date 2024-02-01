'use client'

import React, { FormEvent, useState } from 'react'
const mailchimp = require('@mailchimp/mailchimp_marketing')

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us17',
})

interface EmailState {
  email: string
  subscriptionResponse: string
  error: boolean
}

const NewsLetterSignUpForm: React.FC = () => {
  const [email, setEmail] = useState<EmailState>({
    email: '',
    subscriptionResponse: '',
    error: false,
  })

  const run = async () => {
    try {
      console.log(email.email)
      console.log(mailchimp.server)

      const response = await mailchimp.lists.addListMember('5be1f99edd', {
        email_address: email.email,
        status: 'subscribed',
      })
      console.log(response)

      setEmail({
        email: '',
        subscriptionResponse: 'Subscription successful!',
        error: false,
      })
    } catch (error) {
      console.error('Error subscribing to list:', error)
      setEmail({
        ...email,
        subscriptionResponse: 'Subscription failed. Please try again.',
        error: true,
      })
    }
  }

  return (
    <div>
      <div className="pr-4 md:w-1/2">
        <h2 className="mb-4 text-xl font-bold">Join our Mailing List!</h2>
        <p className="text-sm">
          TEDxNortheasternU was created in the spirit of TED’s mission of ideas
          worth spreading to the Northeastern University community. Subscribe to
          learn more about our xLabs, fundraisers, and Spring conference.
        </p>
      </div>

      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault()
          run()
        }}
      >
        <div className={'inputContainer'}>
          <input
            type={'email'}
            placeholder={'Please enter your email address'}
            value={email.email}
            onChange={(e) => setEmail({ ...email, email: e.target.value })}
            required
          />
        </div>

        <button type={'submit'}>Notify me</button>

        <p style={{ color: email.error ? 'red' : 'green' }}>
          {email.subscriptionResponse}
        </p>
      </form>
    </div>
  )
}

export default NewsLetterSignUpForm
