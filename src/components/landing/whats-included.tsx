import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText, Video, MessagesSquare } from 'lucide-react';

const includedItems = [
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: 'Introduction Manual',
    description: 'A comprehensive guide to get you started, including recipes, tips, and a detailed schedule.',
  },
  {
    icon: <Video className="w-8 h-8 text-primary" />,
    title: 'Exclusive Video Link',
    description: 'Access to an introductory video that walks you through the entire process and what to expect.',
  },
  {
    icon: <MessagesSquare className="w-8 h-8 text-primary" />,
    title: 'WhatsApp Group',
    description: 'Join our private WhatsApp community for daily support, motivation, and to connect with fellow participants.',
  },
];

export default function WhatsIncluded() {
  return (
    <section id="included" className="w-full py-12 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline sm:text-4xl md:text-5xl">What You'll Get</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Everything you need for a successful and rejuvenating juice fast experience is included.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {includedItems.map((item) => (
            <Card key={item.title} className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-background">
              <CardHeader className="flex flex-col items-center text-center gap-4">
                <div className="rounded-full bg-primary/10 p-4">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
