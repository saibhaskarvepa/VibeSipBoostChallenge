'use client';

import RegistrationDialog from './registration-dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <Image
            src="/images/drink.png"
            alt="Vibe Sip Boost Juice"
            data-ai-hint="juice glass fruits"
            width={250}
            height={250}
            className="rounded-full shadow-lg"
          />
          <h1 className="text-5xl font-headline tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
            Vibe Sip Boost
          </h1>
          <h2 className="text-3xl font-body sm:text-4xl md:text-5xl text-primary">
            Revitalize Your Body with Fresh Juices
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
             <RegistrationDialog>
               <Button size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="shadow-lg hover:shadow-xl transition-shadow">
                 Join the Challenge
               </Button>
             </RegistrationDialog>
           </div>
        </div>
      </div>
    </section>
  );
}