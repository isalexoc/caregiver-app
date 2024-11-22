"use client";

import React, { useState } from "react";
import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { contactFormSchema } from "@/lib/validation";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/actions";

interface ContactFormState {
  isLoading: boolean;
  error: string | null;
}

const ContactForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleFormSubmit = async (
    prevState: ContactFormState,
    formData: FormData
  ) => {
    try {
      const formValues = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        message: formData.get("message") as string,
      };

      await contactFormSchema.parseAsync(formValues);

      const result = await submitContactForm(prevState, formData);

      if (result.status === "SUCCESS") {
        toast({
          title: "Success",
          description: "Your message has been sent successfully",
        });
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;

        setErrors(fieldErrors as unknown as Record<string, string>);

        toast({
          title: "Error",
          description: "Please check your inputs and try again",
          variant: "destructive",
        });

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      toast({
        title: "Error",
        description: "An unexpected error has occurred",
        variant: "destructive",
      });

      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  console.log(state);

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Input placeholder="First Name" name="firstName" required />
          {errors.firstName && (
            <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <Input placeholder="Last Name" name="lastName" required />
          {errors.lastName && (
            <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>
      <div>
        <Input type="email" placeholder="Email" name="email" required />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </div>
      <div>
        <Input type="tel" placeholder="Phone Number" name="phone" required />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>
      <div>
        <Textarea placeholder="Your Message" name="message" required />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
        <Send className="size-4 ml-2" />
      </Button>
    </form>
  );
};

export default ContactForm;
