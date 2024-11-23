import { Metadata } from "next";
import Image from "next/image";
import {
  Heart,
  Brain,
  Stethoscope,
  Clock,
  UserPlus,
  Clipboard,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specialized Care Services | Essential Care Services",
  description:
    "Our specialized care services cater to individuals with unique health needs, providing expert care and support for complex medical conditions.",
};

export default function SpecializedCarePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Specialized Care Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Expert care for complex medical needs
        </p>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/specialized2.jpg"
            alt="Specialized Care Services"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Specialized Care Offerings
        </h2>
        <Tabs defaultValue="dementia" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="dementia">Dementia Care</TabsTrigger>
            <TabsTrigger value="palliative">Palliative Care</TabsTrigger>
            <TabsTrigger value="disability">Disability Support</TabsTrigger>
            <TabsTrigger value="postop">Post-Operative Care</TabsTrigger>
          </TabsList>
          <TabsContent value="dementia" className="mt-12 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle>Dementia Care</CardTitle>
                <CardDescription>
                  Specialized support for individuals living with dementia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our dementia care services are designed to provide
                  compassionate support and maintain the dignity of individuals
                  living with various forms of dementia. Our trained caregivers
                  use evidence-based techniques to manage symptoms and improve
                  quality of life.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="palliative" className="mt-12 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle>Palliative Care</CardTitle>
                <CardDescription>
                  Comfort and support for individuals with serious illnesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our palliative care services focus on providing relief from
                  the symptoms and stress of serious illness. We work alongside
                  the primary healthcare team to improve quality of life for
                  both the patient and their family.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="disability" className="mt-12 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle>Disability Support</CardTitle>
                <CardDescription>
                  Empowering individuals with disabilities to live independently
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our disability support services are tailored to meet the
                  unique needs of individuals with various disabilities. We
                  focus on promoting independence, facilitating community
                  participation, and enhancing overall well-being.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="postop" className="mt-12 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle>Post-Operative Care</CardTitle>
                <CardDescription>
                  Supporting recovery and rehabilitation after surgery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our post-operative care services ensure a smooth transition
                  from hospital to home. We provide skilled nursing care, pain
                  management, wound care, and assistance with daily activities
                  to promote faster recovery and prevent complications.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Choose Our Specialized Care
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Expertise",
              description:
                "Our caregivers are specially trained in various areas of complex care",
            },
            {
              icon: Heart,
              title: "Compassion",
              description:
                "We provide empathetic care that respects the dignity of each individual",
            },
            {
              icon: Stethoscope,
              title: "Medical Oversight",
              description:
                "Our services are supervised by qualified healthcare professionals",
            },
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Care Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Clipboard,
              step: "Assessment",
              description: "Comprehensive evaluation of care needs",
            },
            {
              icon: UserPlus,
              step: "Care Plan",
              description: "Tailored plan developed with healthcare team",
            },
            {
              icon: Clock,
              step: "Ongoing Care",
              description: "Regular, scheduled care visits",
            },
            {
              icon: ShieldCheck,
              step: "Monitoring",
              description: "Continuous assessment and plan adjustments",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <item.icon className="w-12 h-12 mb-4 text-primary" />
              <CardTitle className="mb-2">{item.step}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-accent rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h2 className="text-3xl font-semibold mb-4">
              Need Specialized Care?
            </h2>
            <p className="text-lg mb-4">
              Our team is ready to provide expert care tailored to your unique
              needs.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="text-white dark:text-black">
                Get Specialized Care
              </Link>
            </Button>
          </div>
          <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
            <Image
              src="/specialized1.jpg"
              alt="Specialized Care Team"
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
