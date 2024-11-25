import { Metadata } from "next";
import Image from "next/image";
import {
  Book,
  Heart,
  Brain,
  Users,
  Lightbulb,
  Award,
  FileText,
  Clock,
  Coffee,
  Smile,
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
  title: "Caregiver Resources | Essential Care Services",
  description:
    "Access valuable resources, training materials, and support for caregivers to provide the best possible care for our clients.",
};

export default function CaregiverResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Caregiver Resources</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Empowering our caregivers with knowledge and support
        </p>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/caregiver.jpg"
            alt="Caregiver Support"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Caregiver Resource Center
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Book,
              title: "Care Guides",
              description:
                "Comprehensive guides on various care techniques and best practices.",
            },
            {
              icon: Heart,
              title: "Self-Care Resources",
              description:
                "Tools and tips for maintaining your own well-being as a caregiver.",
            },
            {
              icon: Brain,
              title: "Continuing Education",
              description:
                "Online courses and webinars to expand your caregiving knowledge.",
            },
            {
              icon: Users,
              title: "Caregiver Community",
              description:
                "Connect with fellow caregivers for support and advice.",
            },
            {
              icon: Lightbulb,
              title: "Innovation in Care",
              description:
                "Stay updated on the latest caregiving technologies and methods.",
            },
            {
              icon: Award,
              title: "Certification Programs",
              description:
                "Enhance your skills with specialized caregiver certifications.",
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
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Caregiver Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Clock,
              title: "Time Management",
              description:
                "Learn effective strategies for balancing care tasks and personal time.",
            },
            {
              icon: Coffee,
              title: "Stress Relief",
              description:
                "Discover techniques for managing stress and preventing burnout.",
            },
            {
              icon: FileText,
              title: "Documentation",
              description:
                "Best practices for maintaining accurate and thorough care records.",
            },
            {
              icon: Smile,
              title: "Building Rapport",
              description:
                "Tips for developing strong, positive relationships with clients.",
            },
          ].map((tip, index) => (
            <Card key={index}>
              <CardHeader>
                <tip.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tip.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Caregiver Training and Development</CardTitle>
            <CardDescription>
              We are committed to your growth and success as a caregiver.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Our comprehensive training program includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Initial orientation and onboarding</li>
              <li>Ongoing skill development workshops</li>
              <li>
                Specialized training for specific care needs (e.g., dementia
                care, post-operative care)
              </li>
              <li>Annual refresher courses</li>
              <li>Leadership and career advancement opportunities</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              q: "How can I access the online training materials?",
              a: "You can access all online training materials through our caregiver portal. Log in with your credentials and navigate to the 'Training' section.",
            },
            {
              q: "What should I do if I encounter an emergency situation with a client?",
              a: "In case of a medical emergency, call 911 immediately. Then, contact our 24/7 support line for guidance on next steps and documentation.",
            },
            {
              q: "How often are caregivers required to complete continuing education?",
              a: "We recommend completing at least 12 hours of continuing education annually. Some specialized roles may require additional training.",
            },
            {
              q: "Can I suggest topics for future training sessions?",
              a: "We welcome input from our caregivers. You can submit suggestions through the caregiver portal or discuss them with your supervisor.",
            },
            {
              q: "What support is available if I'm feeling overwhelmed or stressed?",
              a: "We offer confidential counseling services and have a dedicated caregiver support team. Don't hesitate to reach out to your supervisor or HR for assistance.",
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
            <CardTitle>Need Additional Support?</CardTitle>
            <CardDescription>
              Our caregiver support team is here to help you succeed in your
              role.
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
