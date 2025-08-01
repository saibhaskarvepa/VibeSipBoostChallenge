import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "SL",
    image: "https://placehold.co/100x100.png",
    text: "The VSB Challenge was a game-changer! I felt so energized and light afterwards. The recipes were delicious and the community support was fantastic. Highly recommend!",
    rating: 5,
  },
  {
    name: "John D.",
    avatar: "JD",
    image: "https://placehold.co/100x100.png",
    text: "I was skeptical at first, but this challenge exceeded all my expectations. I lost weight, my skin cleared up, and I have so much more mental clarity. I can't wait for the next one!",
    rating: 5,
  },
  {
    name: "Aisha B.",
    avatar: "AB",
    image: "https://placehold.co/100x100.png",
    text: "A truly revitalizing experience. The daily guidance helped me stay on track. It's amazing how much better I feel in just a short time. Thank you, VSB team!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline sm:text-4xl md:text-5xl">Hear From Our Community</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Real people, real results. See what past participants have to say.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-background">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}