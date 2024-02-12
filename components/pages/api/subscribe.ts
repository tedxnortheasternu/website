// pages/api/subscribe.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email } = req.body;
        // Add your logic here to handle the subscription
        // For example:
        // await subscribeToMailingList(email);
        res.status(200).json({ message: 'Subscribed successfully' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
