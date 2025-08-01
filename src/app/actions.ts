'use server';

import { z } from 'zod';
import { Resend } from 'resend';

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
  
  const { name, email, whatsapp } = validatedFields.data;

  // Send email notification
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
      await resend.emails.send({
        from: 'VSB Challenge <onboarding@resend.dev>',
        to: 'saibhaskar.as400@gmail.com',
        subject: 'New VSB Challenge Registration!',
        html: `
          <h1>New Registration!</h1>
          <p>A new user has registered for the VSB Challenge.</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>WhatsApp:</strong> ${whatsapp}</li>
          </ul>
        `,
      });
    } catch (error) {
      console.error('Failed to send registration email:', error);
      // We don't want to block the user registration if the email fails.
      // You might want to add more robust error handling or logging here.
      return {
        message: 'Registration successful, but failed to send notification email.',
        success: true,
      }
    }
  } else {
    console.warn('RESEND_API_KEY is not set. Skipping email notification.');
  }

  return {
    message: 'Registration successful!',
    success: true,
  };
}
