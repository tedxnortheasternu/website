// mailingList.ts

import { z } from 'zod';
import { subscribeToMailingListService } from '@/components/services/MailingListService';

export async function subscribeToMailingList(formData: FormData) {
  const schema = z.object({
    email: z.string().email(),
  });

  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Failed to subscribe to newsletter',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedFields.data;

  try {
    await subscribeToMailingListService(email);
    return { message: 'Subscribed to newsletter!', success: true };
  } catch (error) {
    return { message: 'Failed to subscribe to newsletter' };
  }
}
