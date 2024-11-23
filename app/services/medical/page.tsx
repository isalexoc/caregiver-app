import { Metadata } from "next";
import Image from "next/image";
import {
  Stethoscope,
  Pill,
  Clipboard,
  Activity,
  Clock,
  UserCheck,
  ShieldCheck,
  HeartPulse,
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
  title: "Medical Services | Essential Care Services",
  description:
    "Professional medical care services including medication management, health monitoring, and specialized nursing care for various medical conditions.",
};

export default function MedicalServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Medical Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Professional healthcare tailored to your needs
        </p>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/medical1.jpg"
            alt="Medical Services"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Medical Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Pill,
              title: "Medication Management",
              description:
                "Ensuring proper medication administration and monitoring",
            },
            {
              icon: Activity,
              title: "Health Monitoring",
              description:
                "Regular vital signs checks and health status updates",
            },
            {
              icon: Clipboard,
              title: "Care Plan Management",
              description: "Developing and maintaining personalized care plans",
            },
            {
              icon: Stethoscope,
              title: "Nursing Care",
              description:
                "Skilled nursing services for various medical conditions",
            },
            {
              icon: HeartPulse,
              title: "Chronic Disease Management",
              description: "Specialized care for chronic health conditions",
            },
            {
              icon: Clock,
              title: "24/7 Medical Support",
              description:
                "Round-the-clock availability for medical assistance",
            },
          ].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Choose Our Medical Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {[
              {
                icon: UserCheck,
                title: "Experienced Professionals",
                description:
                  "Our team consists of highly qualified and experienced healthcare professionals",
              },
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                description:
                  "We maintain strict quality standards in all our medical services",
              },
              {
                icon: Clipboard,
                title: "Personalized Care",
                description:
                  "Each care plan is tailored to the individual needs of our clients",
              },
              {
                icon: Clock,
                title: "Timely Care",
                description:
                  "We ensure prompt and efficient delivery of medical services",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <feature.icon className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
            <Image
              src="/medical3.jpg"
              alt="Medical Professional"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question:
                "What types of medical conditions do you provide care for?",
              answer:
                "We provide care for a wide range of medical conditions, including but not limited to chronic diseases, post-operative care, and general health management. Our team is equipped to handle various health needs and can provide personalized care plans.",
            },
            {
              question:
                "How do you ensure the quality of your medical services?",
              answer:
                "We maintain high-quality standards through rigorous training of our staff, regular quality audits, and adherence to best practices in healthcare. We also stay updated with the latest medical advancements and incorporate them into our care practices.",
            },
            {
              question: "Can you provide 24/7 medical support?",
              answer:
                "Yes, we offer round-the-clock medical support. Our team is available 24/7 to address any medical concerns or emergencies that may arise, ensuring that our clients always have access to the care they need.",
            },
            {
              question: "How do you handle medication management?",
              answer:
                "Our medication management service includes proper administration of medications, monitoring for side effects, keeping track of medication schedules, and coordinating with physicians for any necessary adjustments. We ensure that all medications are taken as prescribed.",
            },
          ].map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-16">
        <div className="bg-accent rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h2 className="text-3xl font-semibold mb-4">
              Need Medical Assistance?
            </h2>
            <p className="text-lg mb-4">
              Our team of healthcare professionals is ready to provide you with
              top-quality medical care.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="text-white dark:text-black">
                Contact Us
              </Link>
            </Button>
          </div>
          <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
            <Image
              src="/medical2.jpg"
              alt="Medical Care Team"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
