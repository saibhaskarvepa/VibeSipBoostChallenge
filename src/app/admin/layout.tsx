import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Mail, Users } from "lucide-react";
import { Logo } from "@/components/icons";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh flex flex-col bg-muted/30">
       <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-semibold">VSB Challenge Admin</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/admin/personalize-email">
                <Mail className="mr-2 h-4 w-4" />
                Personalize Email
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="container max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
