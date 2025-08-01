'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { personalizeReminderEmail, type PersonalizedReminderEmailInput } from '@/ai/flows/personalize-reminder-email';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Clipboard, ClipboardCheck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  userName: z.string().min(1, 'User name is required.'),
  challengeName: z.string().min(1, 'Challenge name is required.'),
  challengeStartDate: z.string().min(1, 'Start date is required.'),
  userProgress: z.string().min(1, 'User progress is required.'),
  motivationalMessage: z.string().min(1, 'Motivational message is required.'),
});

export function PersonalizeForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: 'Alex Doe',
      challengeName: 'VSB Challenge',
      challengeStartDate: 'August 8th, 2025',
      userProgress: 'Day 3 of 7',
      motivationalMessage: 'Keep going, you are doing great!',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult('');
    try {
      const output = await personalizeReminderEmail(values);
      setResult(output.personalizedEmail);
    } catch (error) {
      console.error('Error generating personalized email:', error);
      setResult('Failed to generate email. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="challengeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Challenge Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 7-Day Detox" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="challengeStartDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Challenge Start Date</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., August 1st, 2024" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="userProgress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Progress</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Day 3 of 7" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="motivationalMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>General Motivational Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="e.g., You're doing great, keep it up!" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading} style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            {loading ? 'Generating...' : 'Generate Email'}
            <Bot className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Form>
      
      {(loading || result) && <Separator className="my-8" />}

      {loading && (
        <div className="flex items-center justify-center space-x-2">
            <Bot className="h-5 w-5 animate-pulse" />
            <p className="text-muted-foreground">AI is crafting the perfect email...</p>
        </div>
      )}

      {result && (
        <Card className="bg-secondary/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-headline text-2xl">Generated Email</CardTitle>
            <Button variant="ghost" size="icon" onClick={handleCopy}>
              {copied ? <ClipboardCheck className="h-5 w-5 text-green-500" /> : <Clipboard className="h-5 w-5" />}
            </Button>
          </CardHeader>
          <CardContent>
            <Textarea readOnly value={result} className="h-64 bg-background" />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
