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

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Send admin notification
    try {
      console.log('Attempting to send admin notification email...');
      const { data, error } = await resend.emails.send({
        from: 'VSB Challenge <onboarding@resend.dev>',
        to: ['saibhaskar.as400@gmail.com'],
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
       if (error) {
        console.error('Admin Email Resend API Error:', error);
      } else {
        console.log('Admin notification email sent successfully:', data);
      }
    } catch (error) {
      console.error('Failed to send admin notification email:', error);
    }

    // Send user confirmation email
    try {
      console.log(`Attempting to send confirmation email to ${email}...`);
      const { data, error } = await resend.emails.send({
        from: 'VSB Challenge <onboarding@resend.dev>',
        to: [email],
        subject: 'Welcome to the VSB Challenge!',
        html: `
          <h1>Welcome, ${name}!</h1>
          <p>Thank you for registering for the VSB Challenge. We are so excited to have you on board!</p>
          <p>You'll receive another email soon with the instruction manual, video links, and next steps to prepare for the challenge.</p>
          <p>Get ready to revitalize your body and mind!</p>
          <br/>
          <p>Best regards,</p>
          <p>The VSB Challenge Team</p>
        `,
      });
      if (error) {
        console.error('User Confirmation Email Resend API Error:', error);
        return {
          message: 'Registration successful, but we failed to send your confirmation email. Please contact support.',
          success: true,
        }
      }
      console.log('User confirmation email sent successfully:', data);
    } catch (error) {
      console.error('Failed to send user confirmation email:', error);
      return {
        message: 'Registration successful, but there was an issue sending your confirmation email. Please contact support.',
        success: true, 
      }
    }
  } else {
    console.warn('RESEND_API_KEY is not set. Skipping email notifications.');
  }

  return {
    message: 'Registration successful!',
    success: true,
  };
}

export async function sendTestEmail() {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set. Cannot send test email.');
    return { success: false, message: 'RESEND_API_KEY is not set.' };
  }
  
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Test <onboarding@resend.dev>',
      to: ['saibhaskar.as400@gmail.com'],
      subject: 'Resend Test Email',
      html: '<h1>This is a test email</h1><p>If you received this, Resend is working correctly!</p>',
    });

    if (error) {
      console.error('Test Email Resend API Error:', error);
      return { success: false, message: `Failed to send test email: ${error.message}` };
    }

    console.log('Test email sent successfully:', data);
    return { success: true, message: 'Test email sent successfully!' };
  } catch (error) {
    console.error('Failed to send test email:', error);
    return { success: false, message: 'An unexpected error occurred while sending the test email.' };
  }
}