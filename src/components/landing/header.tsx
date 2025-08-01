import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import RegistrationDialog from './registration-dialog';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">VSB Challenge</span>
        </a>
        <RegistrationDialog>
          <Button style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            Join Challenge
          </Button>
        </RegistrationDialog>
      </div>
    </header>
  );
}
