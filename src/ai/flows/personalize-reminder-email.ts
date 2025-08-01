'use server';
/**
 * @fileOverview A personalized reminder email AI agent.
 *
 * - personalizeReminderEmail - A function that handles the personalized reminder email process.
 * - PersonalizedReminderEmailInput - The input type for the personalizeReminderEmail function.
 * - PersonalizedReminderEmailOutput - The return type for the personalizeReminderEmail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedReminderEmailInputSchema = z.object({
  userName: z.string().describe('The name of the user.'),
  challengeName: z.string().describe('The name of the challenge.'),
  challengeStartDate: z.string().describe('The start date of the challenge.'),
  userProgress: z.string().describe('The current progress of the user in the challenge.'),
  motivationalMessage: z.string().describe('A general motivational message for the user.'),
});
export type PersonalizedReminderEmailInput = z.infer<typeof PersonalizedReminderEmailInputSchema>;

const PersonalizedReminderEmailOutputSchema = z.object({
  personalizedEmail: z.string().describe('The personalized reminder email content.'),
});
export type PersonalizedReminderEmailOutput = z.infer<typeof PersonalizedReminderEmailOutputSchema>;

export async function personalizeReminderEmail(input: PersonalizedReminderEmailInput): Promise<PersonalizedReminderEmailOutput> {
  return personalizeReminderEmailFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeReminderEmailPrompt',
  input: {schema: PersonalizedReminderEmailInputSchema},
  output: {schema: PersonalizedReminderEmailOutputSchema},
  prompt: `You are an AI email assistant specializing in creating personalized reminder emails for users participating in challenges.

  Create a personalized reminder email for the user to keep them motivated and informed about the challenge.
  Use the following information to create the email:

  User Name: {{{userName}}}
  Challenge Name: {{{challengeName}}}
  Challenge Start Date: {{{challengeStartDate}}}
  User Progress: {{{userProgress}}}
  Motivational Message: {{{motivationalMessage}}}

  Compose a personalized email that is both motivating and informative, encouraging the user to continue participating in the challenge.
  The email should be concise and engaging, highlighting the user's progress and the benefits of completing the challenge.
  The email should remind the user about the challenge start date and provide a general motivational message.
  Remember to keep the email short and sweet, focusing on encouragement and information.
  The tone of the email should be positive and supportive, aimed at boosting the user's confidence and commitment.

  Output the personalized email content.
  `,
});

const personalizeReminderEmailFlow = ai.defineFlow(
  {
    name: 'personalizeReminderEmailFlow',
    inputSchema: PersonalizedReminderEmailInputSchema,
    outputSchema: PersonalizedReminderEmailOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
