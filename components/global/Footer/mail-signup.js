'use client';
import { useState } from 'react';

// ... (imports and other code)

export default function NewsLetterSignUpForm() {
    const [email, setEmail] = useState({
      email: '',
      subcriptionResponse: '',
      error: false,
    });

    const handleSubmit = async (e) => {
      try {
        const signup = await fetch('/api/subscribe.ts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email_address: email.email,
            status: 'subscribed',
          }),
        });

        if (signup.ok) {
          setEmail({
            email: '',
            subcriptionResponse: 'Subscription successful!',
            error: false,
          });
        } else {
          setEmail({ ...email, subcriptionResponse: 'Subscription failed. Please try again.', error: true });
        }
      } catch (error) {
        setEmail({ ...email, subcriptionResponse: 'Subscription failed. Please try again.', error: true });
      }
    };

    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
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

          <button type={'submit'}>
            Notify me
          </button>

          <p style={{ color: email.error ? 'red' : 'green' }}>
            {email?.subcriptionResponse}
          </p>
        </form>
      </div>
    );
  }