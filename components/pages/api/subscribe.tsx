// pages/api/subscribe.ts
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const apiKey = process.env.MAILCHIMP_API_KEY;
      const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

      const response = await axios.post(
        `https://us17.api.mailchimp.com/3.0/lists/${audienceId}/members`,
        {
          email_address: email,
          status: 'subscribed',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      console.log('Successfully subscribed:', response.data);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error subscribing:', error.response?.data);
      res.status(500).json({ error: 'Error subscribing' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
