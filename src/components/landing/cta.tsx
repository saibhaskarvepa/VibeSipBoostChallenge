import { Button } from '@/components/ui/button';
import RegistrationDialog from './registration-dialog';

export default function Cta() {
  return (
    <section id="join" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your Life?</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Don't wait to start your journey towards better health and vitality. Secure your spot in the VSB Challenge now!
          </p>
          <div className="w-full max-w-sm space-y-2">
            <RegistrationDialog>
              <Button type="submit" size="lg" className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                Join the Challenge
              </Button>
            </RegistrationDialog>
            <p className="text-xs text-muted-foreground">Limited spots available. Register now to avoid disappointment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
