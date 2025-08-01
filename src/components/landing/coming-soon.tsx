import { Sparkles } from 'lucide-react';

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="w-full py-12 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Sparkles className="w-12 h-12 text-primary" />
          <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl">The Journey Continues...</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            More exciting challenges will be unlocked soon. A global challenge will be announced, so stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
}