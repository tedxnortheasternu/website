// MailingListService.ts
/services/MailingListService

export async function subscribeToMailingListService(email: string): Promise<{ message: string }> {
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error('Failed to subscribe to the mailing list');
  }

  return { message: 'Successfully subscribed to the mailing list' };
}
