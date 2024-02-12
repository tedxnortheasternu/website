// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

async function subscribe(email: string) {
  try {
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: email,
      status: "pending", // Use "subscribed" for no double opt-in
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email_address } = req.body;

    if (!email_address) {
      return res.status(400).json({ error: 'Email address is required' });
    }

    try {
      const response = await subscribe(email_address);
      res.status(200).json({ status: 'success', data: response });
    } catch (error) {
      // Log detailed error for server-side debugging
      console.error(error);

      // Send generic error message to client
      res.status(500).json({ status: 'error', message: 'Failed to subscribe, please try again.' });
    }
  } else {
    // If not a POST request, indicate allowed method
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method ${req.method} Not Allowed');
  }
}