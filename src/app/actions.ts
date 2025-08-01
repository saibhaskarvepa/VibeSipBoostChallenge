'use server';

import { z } from 'zod';

const registrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  whatsapp: z.string().min(10, 'Please enter a valid WhatsApp number. It should start with +60.').startsWith('+60', 'WhatsApp number must start with +60'),
});

export type RegistrationState = {
  errors?: {
    name?: string[];
    email?: string[];
    whatsapp?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function registerForChallenge(
  prevState: RegistrationState,
  formData: FormData
): Promise<RegistrationState> {
  const validatedFields = registrationSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    whatsapp: formData.get('whatsapp'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid data. Please check your inputs.',
      success: false,
    };
  }

  // Here you would typically handle payment processing,
  // save the user to a database, and send a confirmation email.
  // For this demonstration, we will just log the data and simulate success.
  console.log('New Challenge Registration:', validatedFields.data);

  return {
    message: 'Registration successful!',
    success: true,
  };
}
