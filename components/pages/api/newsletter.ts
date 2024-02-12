// pages/api/subscribe.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { subscribeToMailingList } from '@/services/MailingListService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const formData = req.body;
        try {
            const result = await subscribeToMailingList(formData);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Failed to subscribe to newsletter' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
