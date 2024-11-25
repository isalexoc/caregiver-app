import { Metadata } from "next";
import Image from "next/image";
import {
  Heart,
  Clipboard,
  Shield,
  Clock,
  Users,
  HelpCircle,
  FileText,
  Book,
  Smile,
  Activity,
} from "lucide-react";

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
  title: "For Patients | Essential Care Services",
  description:
    "Information and resources for patients receiving care from Essential Care Services. Learn about your rights, what to expect, and how we support your well-being.",
};

export default function ForPatientsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">For Patients</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your health, comfort, and well-being are our top priorities
        </p>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/patient.jpg"
            alt="Compassionate Care for Patients"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Patient Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Book,
              title: "Care Guides",
              description:
                "Comprehensive information on managing various health conditions and maintaining wellness.",
            },
            {
              icon: Clipboard,
              title: "Care Plan Access",
              description:
                "Easy access to your personalized care plan and progress updates.",
            },
            {
              icon: Users,
              title: "Support Groups",
              description:
                "Information on local and online support groups for various health conditions.",
            },
            {
              icon: Activity,
              title: "Wellness Tips",
              description:
                "Regular updates with tips for maintaining physical and mental well-being.",
            },
            {
              icon: FileText,
              title: "Medical Records",
              description:
                "Secure access to your medical records and care history.",
            },
            {
              icon: HelpCircle,
              title: "FAQs",
              description:
                "Answers to common questions about our care services and processes.",
            },
          ].map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <resource.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{resource.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Patient Rights and Responsibilities
            </CardTitle>
            <CardDescription>
              Understanding your role in your care
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Your Rights:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Receive high-quality, compassionate care</li>
                  <li>Be treated with dignity and respect</li>
                  <li>Participate in decisions about your care</li>
                  <li>Privacy and confidentiality</li>
                  <li>Access your medical records</li>
                  <li>Voice concerns without fear of retribution</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Your Responsibilities:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Provide accurate health information</li>
                  <li>Follow your care plan</li>
                  <li>Ask questions when you don&apos;t understand</li>
                  <li>Treat caregivers with respect</li>
                  <li>Inform us of any changes in your condition</li>
                  <li>Provide a safe environment for care</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          What to Expect from Our Care
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Heart,
              title: "Compassionate Care",
              description:
                "Our caregivers are dedicated to providing warm, empathetic support tailored to your unique needs.",
            },
            {
              icon: Shield,
              title: "Professional Excellence",
              description:
                "Expect the highest standards of professionalism and expertise from our trained care team.",
            },
            {
              icon: Clock,
              title: "Timely Service",
              description:
                "We respect your time and strive to provide punctual, reliable care according to your schedule.",
            },
            {
              icon: Smile,
              title: "Positive Approach",
              description:
                "Our team focuses on enhancing your quality of life, promoting independence and well-being.",
            },
          ].map((expectation, index) => (
            <Card key={index}>
              <CardHeader>
                <expectation.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{expectation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{expectation.description}</CardDescription>
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
              q: "How do I schedule or change a care appointment?",
              a: "You can schedule or change appointments by calling our care coordination team or using our online patient portal. We strive to accommodate your schedule and any changes you may need.",
            },
            {
              q: "What should I do if I have a concern about my care?",
              a: "We encourage you to speak with your caregiver or care coordinator about any concerns. You can also contact our patient advocacy line for assistance in resolving any issues.",
            },
            {
              q: "How can I access my care plan or medical records?",
              a: "Your care plan and medical records are available through our secure online patient portal. If you need assistance accessing these, our support team can guide you through the process.",
            },
            {
              q: "What if I need care outside of my scheduled times?",
              a: "We understand that care needs can change. Contact our 24/7 care line to discuss adjustments to your care schedule or to arrange for additional care as needed.",
            },
            {
              q: "How do you ensure the quality and safety of care?",
              a: "We maintain strict quality standards through ongoing caregiver training, regular care reviews, and patient feedback. All our caregivers undergo thorough background checks and are fully insured.",
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
            <CardTitle>Need Assistance?</CardTitle>
            <CardDescription>
              Our patient support team is here to help with any questions or
              concerns.
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
