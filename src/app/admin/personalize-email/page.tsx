import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PersonalizeForm } from './personalize-form';

export default function AdminPersonalizeEmailPage() {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">Personalize Reminder Email</CardTitle>
        <CardDescription>
          Use our GenAI tool to create a personalized and motivating reminder email for a challenge participant.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <PersonalizeForm />
      </CardContent>
    </Card>
  );
}
