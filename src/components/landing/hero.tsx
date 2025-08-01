import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import RegistrationDialog from './registration-dialog';

export default function Hero() {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 bg-secondary/50">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Healthy juices"
          data-ai-hint="healthy juices lifestyle"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      <div className="container relative z-10 px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <Badge variant="outline" className="py-2 px-4 rounded-full border-primary/50 text-primary font-medium">
            Starts on August 15th, 2024
          </Badge>
          <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
            Revitalize Your Vibe with the VSB Challenge
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Embark on a transformative journey to cleanse your body, boost your energy, and elevate your spirit. Join our guided juice fast challenge today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <RegistrationDialog>
              <Button size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="shadow-lg hover:shadow-xl transition-shadow">
                Join for 25RM
              </Button>
            </RegistrationDialog>
            <a href="#benefits">
              <Button size="lg" variant="outline">Learn More</Button>
            </a>
          </div>
          <p className="text-sm font-semibold text-primary">
            Hurry! Only 17 seats left for this cohort!
          </p>
        </div>
      </div>
    </section>
  );
}
