import { Metadata } from "next";
import Image from "next/image";
import {
  Heart,
  Book,
  Calendar,
  Users,
  HelpCircle,
  FileText,
  Clipboard,
  Brain,
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
  title: "For Families | Essential Care Services",
  description:
    "Resources, guides, and support for families of our care recipients. Learn how we can help you and your loved ones.",
};

export default function ForFamiliesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">For Families</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Supporting you and your loved ones every step of the way
        </p>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/family.jpg"
            alt="Family Support"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          How We Support Families
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Compassionate Care",
              description:
                "Our caregivers provide warm, empathetic support to your loved ones, ensuring they feel comfortable and valued.",
            },
            {
              icon: Calendar,
              title: "Flexible Scheduling",
              description:
                "We work with your family's schedule to provide care when you need it most, adapting to your changing needs.",
            },
            {
              icon: Users,
              title: "Family Involvement",
              description:
                "We encourage family participation and keep you informed every step of the way, maintaining open lines of communication.",
            },
            {
              icon: Book,
              title: "Educational Resources",
              description:
                "Access to guides and information to help you navigate the care journey, empowering you with knowledge and support.",
            },
            {
              icon: HelpCircle,
              title: "24/7 Support",
              description:
                "Our team is available around the clock to address your concerns and questions, providing peace of mind at all times.",
            },
            {
              icon: FileText,
              title: "Personalized Care Plans",
              description:
                "We develop care plans tailored to your loved one's specific needs and preferences, ensuring individualized attention.",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <item.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Family Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Clipboard,
              title: "Care Planning Guide",
              description:
                "Our comprehensive guide walks you through the process of planning care for your loved one, covering assessment, goal-setting, and implementation strategies.",
            },
            {
              icon: Users,
              title: "Family Caregiver Handbook",
              description:
                "This handbook offers practical tips and advice for family members providing care, including self-care strategies, communication techniques, and managing caregiver stress.",
            },
            {
              icon: Heart,
              title: "Understanding Home Care",
              description:
                "Learn about the different types of home care services available, including personal care, companionship, and specialized care for conditions like dementia or post-operative recovery.",
            },
            {
              icon: Brain,
              title: "Communicating with Caregivers",
              description:
                "Discover best practices for effective communication with your care team, ensuring seamless coordination and the best possible care for your loved one.",
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
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              q: "How do I know if my loved one needs home care?",
              a: "Signs that your loved one might benefit from home care include difficulty with daily activities, forgetfulness, mobility issues, or recovery after hospitalization. Our team can provide a free assessment to determine the level of care needed.",
            },
            {
              q: "Can I choose the caregiver for my loved one?",
              a: "While we carefully match caregivers based on your loved one's needs and preferences, we're always open to your input. If you're not satisfied with the assigned caregiver, we'll work with you to find a better match.",
            },
            {
              q: "How do you ensure the quality of care?",
              a: "We maintain high standards through rigorous caregiver screening, ongoing training, regular quality checks, and open communication with families. We also encourage feedback and conduct regular satisfaction surveys.",
            },
            {
              q: "What if I need to change the care schedule?",
              a: "We understand that care needs can change. We offer flexible scheduling and can adjust your care plan as needed. Simply contact our care coordination team to discuss any changes.",
            },
            {
              q: "How do I get started with your services?",
              a: "Getting started is easy. Contact us to schedule a free consultation. We'll assess your loved one's needs, answer your questions, and create a personalized care plan.",
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
              Our family care coordinators are here to answer your questions and
              provide support.
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
