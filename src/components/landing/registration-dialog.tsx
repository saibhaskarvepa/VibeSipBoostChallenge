'use client';

import React, { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { registerForChallenge, type RegistrationState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Download, Link as LinkIcon, AlertCircle } from 'lucide-react';

interface RegistrationDialogProps {
  children: React.ReactNode;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
      {pending ? 'Registering...' : 'Secure My Spot'}
    </Button>
  );
}

export default function RegistrationDialog({ children }: RegistrationDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const initialState: RegistrationState = { message: '', errors: {}, success: false };
  const [state, dispatch] = useFormState(registerForChallenge, initialState);
  const [formKey, setFormKey] = useState(Date.now());

  useEffect(() => {
    if (state.message && !state.success) {
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: state.message,
      });
    }
  }, [state, toast]);
  
  const resetAndClose = () => {
    setFormKey(Date.now()); // Reset form by changing key
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        {state.success ? (
          <div className="flex flex-col items-center text-center p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-headline mb-2">Registration Successful!</h2>
            <p className="text-muted-foreground mb-6">Welcome to the VSB Challenge! Check your email for the next steps.</p>
             <DialogFooter className="mt-6">
                <Button variant="outline" onClick={resetAndClose}>Close</Button>
            </DialogFooter>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline text-3xl text-center">Join the Challenge</DialogTitle>
              <DialogDescription className="text-center">
                Fill in your details below to secure your spot for just 25RM.
              </DialogDescription>
            </DialogHeader>
            <form key={formKey} action={dispatch} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Juice Wrld" required />
                {state.errors?.name && <p className="text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} />{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                {state.errors?.email && <p className="text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} />{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input id="whatsapp" name="whatsapp" type="tel" placeholder="e.g., 60123456789" required />
                {state.errors?.whatsapp && <p className="text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} />{state.errors.whatsapp[0]}</p>}
              </div>
              <DialogFooter>
                <SubmitButton />
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
