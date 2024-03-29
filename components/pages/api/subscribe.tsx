import mailchimp from '@mailchimp/mailchimp_marketing';
import md5 from 'md5';
import { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { email_address, status } = req.body;

  // Set the mailchimp config with your API key and server prefix
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
  });

  const subscriberHash = md5(email_address.toLowerCase());

  // Set the Audience ID generated earlier to add email to that audience
  try {
    await mailchimp.lists.setListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      subscriberHash,
      {
        email_address,
        status_if_new: status,
      }
    );

    res.status(200).json({
      message: `You will receive article updates in ${email_address}`,
    });
  } catch (err) {
    const errorResponse = JSON.parse(err.response.text);
    return res.status(err.status).json({ message: errorResponse.title });
  }
}