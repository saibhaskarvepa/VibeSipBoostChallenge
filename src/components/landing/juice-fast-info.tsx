import Image from 'next/image';
import { Leaf, Droplets, Sparkles } from 'lucide-react';

export default function JuiceFastInfo() {
  return (
    <section id="juice-fast-info" className="w-full py-12 md:py-24">
      <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="flex items-center justify-center">
          <Image
            src="/images/juice.png"
            alt="Colorful juices in bottles"
            data-ai-hint="colorful fresh juices"
            width={600}
            height={600}
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-headline sm:text-4xl md:text-5xl">Why a Juice Fast?</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A juice fast is a powerful way to reset your body. By consuming only fresh fruit and vegetable juices, you give your digestive system a rest and flood your body with vitamins, minerals, and antioxidants.
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-4">
              <Leaf className="w-6 h-6 mt-1 text-primary flex-shrink-0" />
              <span>
                <strong>Nutrient Absorption:</strong> Juicing makes it easier for your body to absorb nutrients quickly and efficiently.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Droplets className="w-6 h-6 mt-1 text-primary flex-shrink-0" />
              <span>
                <strong>Hydration:</strong> Juices are incredibly hydrating, helping to flush toxins and improve skin health.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Sparkles className="w-6 h-6 mt-1 text-primary flex-shrink-0" />
              <span>
                <strong>Rest & Repair:</strong> It gives your digestive organs a break, allowing your body to focus on healing and rejuvenation.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}