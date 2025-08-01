import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Zap, HeartPulse, BrainCircuit } from 'lucide-react';

const benefits = [
  {
    icon: <Leaf className="w-10 h-10 text-primary" />,
    title: "Detoxify Your Body",
    description: "Flush out toxins and reset your system with nutrient-dense, fresh juices."
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Boost Energy Levels",
    description: "Experience a natural surge in vitality and alertness as your body absorbs essential vitamins."
  },
  {
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
    title: "Improve Digestion",
    description: "Give your digestive system a well-deserved break, reducing bloating and improving gut health."
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "Enhance Mental Clarity",
    description: "Sharpen your focus and clear mental fog for a more productive and centered mindset."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline sm:text-4xl md:text-5xl">Unlock a Healthier You</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Discover the transformative benefits of our VSB Challenge.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {benefits.map((benefit, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col items-center justify-center text-center p-6 h-full shadow-sm hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="flex flex-col items-center gap-4 pt-6">
                      <div className="rounded-full bg-primary/10 p-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-2xl font-headline">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
