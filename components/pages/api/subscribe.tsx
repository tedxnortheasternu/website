import mailchimp from '@mailchimp/mailchimp_marketing'
import md5 from 'md5'
import { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { email_address, status } = req.body

  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
  })

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address,
      status: status === 'subscribed' ? 'subscribed' : 'pending',
    })

    res.status(200).json({
      message: 'You will receive article updates in ${email_address}',
    })
  } catch (err) {
    let errorMessage = 'Error adding to mailing list'
    if (err.response) {
      try {
        const errorResponse = JSON.parse(err.response.text)
        errorMessage = errorResponse.title
      } catch (parseError) {
        // Fallback error message
      }
    }
    return res.status(err.status || 500).json({ message: errorMessage })
  }
}
