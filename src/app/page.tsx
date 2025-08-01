import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Benefits from '@/components/landing/benefits';
import WhatsIncluded from '@/components/landing/whats-included';
import HowItWorks from '@/components/landing/how-it-works';
import Cta from '@/components/landing/cta';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatsIncluded />
        <Benefits />
        <HowItWorks />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
