import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, BotMessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 bg-card">
      <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-4">
          <h2 className="text-3xl font-headline sm:text-4xl md:text-5xl">Simple Steps to a New You</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We've designed the challenge to be straightforward and supportive. Follow these simple steps to begin your transformation.
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 mt-1 text-primary flex-shrink-0" />
              <span>
                <strong>Register:</strong> Secure your spot and receive your Introduction Manual and video link instantly.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 mt-1 text-primary flex-shrink-0" />
              <span>
                <strong>Prepare:</strong> Follow our easy guide to prepare your body and mind for the juice fast.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 mt-1 text-primary flex-shrink-0" />
              <span>
                <strong>Begin:</strong> Start the challenge with our community, supported by daily check-ins and motivation.
              </span>
            </li>
          </ul>
          <Card className="mt-6 bg-primary/10 border-primary/20">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <BotMessageSquare className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline text-2xl">AI-Powered Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stay motivated with our unique GenAI tool that crafts personalized reminder emails just for you, keeping you informed and inspired throughout the challenge. 
                <Link href="/admin/personalize-email" className="text-primary underline ml-1">See how it works</Link>.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Woman smiling with juice"
              data-ai-hint="woman healthy smoothie"
              width={600}
              height={600}
              className="rounded-xl shadow-2xl"
            />
        </div>
      </div>
    </section>
  );
}
