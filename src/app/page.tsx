import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Benefits from '@/components/landing/benefits';
import JuiceFastInfo from '@/components/landing/juice-fast-info';
import WhatsIncluded from '@/components/landing/whats-included';
import HowItWorks from '@/components/landing/how-it-works';
import Testimonials from '@/components/landing/testimonials';
import Cta from '@/components/landing/cta';
import ComingSoon from '@/components/landing/coming-soon';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatsIncluded />
        <Benefits />
        <JuiceFastInfo />
        <HowItWorks />
        <Testimonials />
        <Cta />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}