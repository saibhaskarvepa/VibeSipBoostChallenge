import { Calendar } from 'lucide-react';

export default function ChallengeDate() {
  const challengeDate = process.env.NEXT_PUBLIC_CHALLENGE_START_DATE;

  if (!challengeDate) {
    return null;
  }

  return (
    <section className="w-full pb-12 -mt-24 md:-mt-32">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-accent/20 px-4 py-2 text-lg font-semibold text-accent-foreground backdrop-blur-sm">
            <Calendar className="h-6 w-6" />
            <span>Next Challenge Starts: <strong>{challengeDate}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
