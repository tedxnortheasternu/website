// MailingListForm.tsx

import React, { useState } from 'react';
import { subscribeToMailingList } from '@/app/mailinglist';

export default function MailingListForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('email', email); // Append the email field to the FormData object
  
      const response = await subscribeToMailingList(formData);
      setMessage(response.message);
      setEmail('');
      setError('');
    } catch (error) {
      setError('Failed to subscribe. Please try again.');
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