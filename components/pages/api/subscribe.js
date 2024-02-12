import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email_address } = req.body;

    try {
      const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
      const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., us5
      const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;

      const response = await fetch(https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members, {
        method: 'POST',
        headers: {
          Authorization: apikey ${MAILCHIMP_API_KEY},
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address,
          status: 'subscribed', // or 'pending' if you want double opt-in
        }),
      });

      if (!response.ok) {
        throw new Error(Error: ${response.statusText});
      }

      const data = await response.json();
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(Method ${req.method} Not Allowed);
  }
}