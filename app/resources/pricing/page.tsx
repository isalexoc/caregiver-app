import { Metadata } from "next";
import { Shield, DollarSign, Clock, Calendar, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Essential Care Services",
  description:
    "Understand our pricing structure, insurance coverage, and payment options for our high-quality home care services.",
};

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Pricing and Payment Options</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Transparent pricing for quality care
        </p>
      </section>

      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Insurance Coverage</CardTitle>
            <CardDescription>
              Understanding your insurance benefits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Normally, health insurance providers are responsible for the cost
              of our services. We work directly with insurance companies to
              manage billing and payments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <Shield className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Coverage Verification</h3>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll help you understand your insurance benefits and
                    coverage for our services.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <DollarSign className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Direct Billing</h3>
                  <p className="text-sm text-muted-foreground">
                    We handle all billing directly with your insurance provider
                    for your convenience.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Private Pay Options
        </h2>
        <p className="text-center mb-8">
          If you don&apos;t have insurance coverage or prefer to pay privately,
          we offer flexible payment options:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: "Hourly Rates",
              description:
                "Flexible pricing based on the level of care and time required.",
            },
            {
              icon: Calendar,
              title: "Weekly Packages",
              description:
                "Discounted rates for consistent weekly care schedules.",
            },
            {
              icon: CreditCard,
              title: "Payment Methods",
              description:
                "We accept various payment methods including credit cards and electronic transfers.",
            },
          ].map((option, index) => (
            <Card key={index}>
              <CardHeader>
                <option.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{option.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              q: "How much do your services cost?",
              a: "Our pricing varies based on the level of care needed. We offer a free consultation to provide a detailed quote tailored to your specific needs.",
            },
            {
              q: "Do you offer any discounts?",
              a: "We occasionally offer promotional discounts. Long-term care packages may also come with reduced rates. Please inquire about current offers during your consultation.",
            },
            {
              q: "What forms of payment do you accept?",
              a: "We accept cash, checks, and all major credit cards. We can also bill long-term care insurance directly if applicable.",
            },
            {
              q: "Is there a minimum number of hours required?",
              a: "We have a minimum of 6 hours per visit to ensure quality care, but this can vary based on specific needs and care plans.",
            },
            {
              q: "Do you offer any financial assistance programs?",
              a: "While we don't offer direct financial assistance, we can provide information on various financial assistance options and help you explore potential funding sources.",
            },
          ].map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Need More Information?</CardTitle>
            <CardDescription>
              Our care coordinators are here to discuss pricing and payment
              options tailored to your needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact" className="text-white dark:text-black">
                  Call Us Now
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
