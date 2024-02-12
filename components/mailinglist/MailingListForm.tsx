// MailingListForm.tsx
'use client'

import React, { useState } from 'react';
import { subscribeToMailingListService } from '@/components/services/MailingListService';

export default function MailingListForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await subscribeToMailingListService(email);
      setMessage(response.message);
      setEmail('');
      setError('');
    } catch (error) {
      setError('Failed to subscribe. Please try again.');
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
      />
      <button type="submit">Subscribe</button>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </form>
  );
}
