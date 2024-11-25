import { Metadata } from "next";
import Image from "next/image";
import {
  Heart,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Smile,
  Clock,
  DollarSign,
  Shield,
  Send,
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
  title: "Caregiver Careers | Essential Care Services",
  description:
    "Join our team of compassionate caregivers at Essential Care Services. Make a difference in people's lives every day.",
};

export default function CaregiverCareersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Become a Caregiver</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Join our team and make a meaningful impact every day
        </p>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Compassionate Caregiver with Client"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Choose Essential Care Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Meaningful Work",
              description: "Make a real difference in people's lives every day",
            },
            {
              icon: Users,
              title: "Supportive Team",
              description: "Join a collaborative and caring work environment",
            },
            {
              icon: Award,
              title: "Professional Growth",
              description:
                "Opportunities for advancement and skill development",
            },
            {
              icon: Clock,
              title: "Flexible Schedules",
              description: "Work hours that fit your lifestyle",
            },
            {
              icon: DollarSign,
              title: "Competitive Pay",
              description: "Fair compensation for your valuable work",
            },
            {
              icon: GraduationCap,
              title: "Ongoing Training",
              description: "Continuous learning and skill enhancement",
            },
          ].map((benefit, index) => (
            <Card key={index}>
              <CardHeader>
                <benefit.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Caregiver Roles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "In-Home Caregiver",
              description:
                "Provide compassionate care and assistance with daily living activities in clients' homes",
            },
            {
              title: "Specialized Care Provider",
              description:
                "Offer specialized care for clients with specific conditions such as dementia or post-operative needs",
            },
            {
              title: "Respite Caregiver",
              description:
                "Provide temporary relief care for family caregivers, ensuring continuity of care",
            },
            {
              title: "Live-In Caregiver",
              description:
                "Offer round-the-clock care and companionship for clients needing constant support",
            },
          ].map((role, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{role.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">What We Look For</CardTitle>
            <CardDescription>
              Essential qualities for our caregivers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
              {[
                { icon: Heart, quality: "Compassion and empathy" },
                { icon: Shield, quality: "Reliability and trustworthiness" },
                { icon: Users, quality: "Strong communication skills" },
                { icon: Smile, quality: "Positive attitude" },
                { icon: Briefcase, quality: "Professional demeanor" },
                {
                  icon: GraduationCap,
                  quality: "Willingness to learn and grow",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span>{item.quality}</span>
                </li>
              ))}
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
              q: "What qualifications do I need to become a caregiver?",
              a: "While specific requirements may vary, we generally look for individuals with a high school diploma or equivalent, a valid driver's license, and a caring personality. Previous caregiving experience or relevant certifications are beneficial but not always required.",
            },
            {
              q: "What kind of training do you provide?",
              a: "We offer comprehensive initial training covering essential caregiving skills, safety procedures, and company policies. We also provide ongoing training opportunities to help you grow in your role and stay updated with best practices in caregiving.",
            },
            {
              q: "How flexible are the work schedules?",
              a: "We offer various scheduling options to accommodate different lifestyles. This includes full-time, part-time, and flexible hour positions. We work with you to find a schedule that fits your needs while ensuring consistent care for our clients.",
            },
            {
              q: "What kind of support can I expect on the job?",
              a: "You'll have access to a supportive team, including care coordinators and supervisors. We provide 24/7 on-call support for any questions or concerns that may arise during your shift.",
            },
            {
              q: "Are there opportunities for career advancement?",
              a: "Yes! We believe in promoting from within and offer various paths for career growth. This could include moving into specialized care roles, becoming a team lead, or transitioning into care coordination or management positions.",
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
        <Card className="bg-secondary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">
              Ready to Start Your Caregiving Journey?
            </CardTitle>
            <CardDescription className="text-primary-foreground/70">
              Join our team of compassionate caregivers today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full md:w-auto hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                <Link
                  href="/contact"
                  className="dark:text-white text-black flex gap-2 items-center"
                >
                  Apply Now <Send className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
