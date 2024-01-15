'use server'

import Airtable from 'airtable'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export async function createRenaissanceRsvp(
  prevState: {
    firstName: string
    lastName: string
    pronouns: string
    email: string
    rsvp: 'yes' | 'no'
    dietaryRestrictions: string
    accommodations: string
    comments: string
  },
  formData: FormData,
) {
  const schema = z.object({
    firstName: z.string().min(1).max(50),
    lastName: z.string().min(1).max(50),
    pronouns: z.string().max(50),
    email: z.string().email(),
    rsvp: z.enum(['yes', 'no']),
    dietaryRestrictions: z.string().max(500).optional(),
    accommodations: z.string().max(500).optional(),
    comments: z.string().max(500).optional(),
  })
  const validatedFields = schema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    pronouns: formData.get('pronouns'),
    email: formData.get('email'),
    rsvp: formData.get('rsvp'),
    dietaryRestrictions: formData.get('dietaryRestrictions'),
    accommodations: formData.get('accommodations'),
    comments: formData.get('comments'),
  })

  if (!validatedFields.success) {
    return {
      message: 'Failed to create RSVP',
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const data = validatedFields.data

  try {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
      process.env.AIRTABLE_RSVP_BASE_ID!,
    )
    base('Renaissance').create([
      {
        fields: {
          firstName: data.firstName,
          lastName: data.lastName,
          pronouns: data.pronouns,
          email: data.email,
          rsvp: data.rsvp,
          dietaryRestrictions: data.dietaryRestrictions,
          accommodations: data.accommodations,
          comments: data.comments,
          vip: true,
        },
      },
    ])

    revalidatePath('/renaissance/rsvp')
    return { message: 'Submitted RSVP!', success: true }
  } catch (e) {
    return { message: 'Failed to create RSVP' }
  }
}
