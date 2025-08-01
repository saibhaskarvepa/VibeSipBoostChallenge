'use client';

import RegistrationDialog from './registration-dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40 bg-background">
      <div className="absolute inset-0 z-0 opacity-20">
         <svg
          className="absolute bottom-0 left-0 w-full h-auto text-primary/40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,213.3C672,181,768,139,864,138.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
         <div className="absolute top-1/4 left-0 w-full h-24 bg-primary/40 rounded-full animate-flow-right-to-left animation-delay-none" />
        <div className="absolute top-1/2 left-0 w-full h-32 bg-accent/40 rounded-full animate-flow-left-to-right animation-delay-2000" />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <Image
            src="/images/drink.png"
            alt="Vibe Sip Boost Juice"
            data-ai-hint="juice glass fruits"
            width={150}
            height={150}
            style={{ objectFit: "contain" }}
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
