import { Logo } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-6 border-t bg-card">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2">
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">VSB Challenge</span>
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} VSB Challenge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
