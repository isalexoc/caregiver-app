import { Heart, Check, Users, Clock, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

export default function PersonalCarePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Personal Care Assistance
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Compassionate support for daily living activities, tailored to
              your unique needs and preferences.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="text-white dark:text-black">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/service1-1.jpg"
              alt="Caregiver assisting an elderly person"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Our Personal Care Services
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Our personal care assistance is designed to help individuals maintain
          their independence and dignity while receiving the support they need
          for daily activities.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Bathing Assistance",
              description:
                "Gentle support for personal hygiene and bathing routines.",
            },
            {
              title: "Dressing and Grooming",
              description:
                "Help with clothing selection and personal appearance.",
            },
            {
              title: "Mobility Assistance",
              description:
                "Safe transfers and support for walking or using mobility aids.",
            },
            {
              title: "Toileting and Incontinence Care",
              description:
                "Discreet and respectful assistance with toileting needs.",
            },
            {
              title: "Medication Reminders",
              description: "Timely reminders to take prescribed medications.",
            },
            {
              title: "Meal Assistance",
              description:
                "Help with eating and drinking for those who need it.",
            },
          ].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-accent rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Choose Our Personal Care Services?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
            <p className="text-muted-foreground">
              Our caregivers provide support with empathy and respect.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Personalized Approach
            </h3>
            <p className="text-muted-foreground">
              Care plans tailored to individual needs and preferences.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            <p className="text-muted-foreground">
              Round-the-clock care to ensure continuous support.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Caregivers
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/3">
            <Image
              src="/service1-2.jpg"
              alt="Our professional caregivers"
              width={300}
              height={250}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              Experienced and Compassionate Professionals
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Our caregivers are carefully selected, thoroughly vetted, and
              extensively trained to provide the highest quality of personal
              care. They are:
            </p>
            <ul className="space-y-2">
              {[
                "Certified and experienced in personal care",
                "Trained in safety and emergency procedures",
                "Compassionate and patient",
                "Respectful of client privacy and dignity",
                "Committed to ongoing professional development",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question:
                "How do you ensure the quality of personal care services?",
              answer:
                "We maintain high standards through rigorous caregiver selection, ongoing training, regular quality assessments, and client feedback.",
            },
            {
              question:
                "Can personal care services be customized to individual needs?",
              answer:
                "Absolutely. We create personalized care plans based on each client's unique requirements, preferences, and health conditions.",
            },
            {
              question: "What if I need to change my care schedule?",
              answer:
                "We understand that needs can change. Our care coordinators are always available to adjust your care plan and schedule as needed.",
            },
            {
              question: "Are your caregivers insured and bonded?",
              answer:
                "Yes, all our caregivers are fully insured and bonded for your peace of mind and protection.",
            },
          ].map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="text-center bg-accent rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Experience Our Personal Care Services?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
          Let us help you or your loved ones maintain independence and dignity
          with our compassionate personal care assistance.
        </p>
        <Button asChild size="lg">
          <Link href="/contact" className="text-white dark:text-black">
            Schedule a Free Consultation
          </Link>
        </Button>
      </section>
    </div>
  );
}
