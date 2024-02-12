// MailingListService.ts

export async function subscribeToMailingListService(email: string): Promise<{ message: string }> {
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_API_SERVER;
    const batchId = process.env.MAILCHIMP_AUDIENCE_ID;

    const data = {
        email_address: email,
        status: 'subscribed' // 'subscribed' to add the user to the list
    };

    try {
        const response = await fetch(`https://${batchId}.api.mailchimp.com/3.0/lists/${listId}/members`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(`apikey:${apiKey}`).toString('base64')}`
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.detail || 'Failed to subscribe to the mailing list');
        }

        return { message: 'Successfully subscribed to the mailing list' };
    } catch (error) {
        console.log(error)
        throw new Error('Failed to subscribe to the mailing list');
    }
}
