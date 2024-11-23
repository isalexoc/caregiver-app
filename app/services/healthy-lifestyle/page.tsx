import { Metadata } from "next";
import Image from "next/image";
import Testimonials from "@/components/testimonials";
import {
  Apple,
  Heart,
  Brain,
  Moon,
  Dumbbell,
  Smile,
  Leaf,
  Users,
  ShieldCheck,
  Sun,
  Coffee,
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
import { Suspense } from "react";
import { TestimonialsSkeleton } from "@/components/skeletons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healthy Lifestyle Services | Essential Care Services",
  description:
    "Personalized in-home healthy lifestyle services including nutrition guidance, exercise planning, stress management, and sleep improvement strategies.",
};

export default function HealthyLifestylePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Healthy Lifestyle Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Empowering you to live your best life, right at home
        </p>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/livestyle1.jpg"
            alt="Healthy Lifestyle"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Healthy Lifestyle Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Apple,
              title: "Nutrition Guidance",
              description:
                "Personalized meal planning and dietary advice tailored to your health needs and preferences",
            },
            {
              icon: Dumbbell,
              title: "In-Home Exercise",
              description:
                "Custom fitness routines designed for your living space and mobility level",
            },
            {
              icon: Brain,
              title: "Stress Management",
              description:
                "Techniques and practices to reduce stress and improve mental well-being",
            },
            {
              icon: Moon,
              title: "Sleep Improvement",
              description:
                "Strategies to enhance sleep quality and establish healthy sleep patterns",
            },
            {
              icon: Sun,
              title: "Daily Routine Optimization",
              description:
                "Help in structuring your day for maximum health benefits and productivity",
            },
            {
              icon: Smile,
              title: "Emotional Wellness",
              description:
                "Support in maintaining a positive outlook and emotional balance",
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
          Benefits of a Healthy Lifestyle
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, benefit: "Improved heart health" },
            { icon: Brain, benefit: "Enhanced cognitive function" },
            { icon: Leaf, benefit: "Increased energy levels" },
            { icon: Users, benefit: "Better social connections" },
            { icon: ShieldCheck, benefit: "Stronger immune system" },
            { icon: Smile, benefit: "Improved mood and mental health" },
            { icon: Coffee, benefit: "Better stress management" },
            { icon: Moon, benefit: "Higher quality sleep" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-accent rounded-lg"
            >
              <item.icon className="w-8 h-8 mr-3 text-primary" />
              <span className="text-sm font-medium">{item.benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Approach to Healthy Living
        </h2>
        <Tabs defaultValue="personalized" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="personalized" className="px-2 py-1">
              Personalized
            </TabsTrigger>
            <TabsTrigger value="holistic" className="px-2 py-1">
              Holistic
            </TabsTrigger>
            <TabsTrigger value="evidence-based" className="px-2 py-1">
              Evidence-Based
            </TabsTrigger>
            <TabsTrigger value="supportive" className="px-2 py-1">
              Supportive
            </TabsTrigger>
          </TabsList>
          <TabsContent value="personalized" className="mt-12 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle>Personalized Care</CardTitle>
                <CardDescription>
                  Tailored to your unique needs and circumstances
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We understand that every individual is unique. Our caregivers
                  work closely with you to develop a personalized healthy
                  lifestyle plan that takes into account your health status,
                  preferences, and home environment. This tailored approach
                  ensures that the strategies we implement are both effective
                  and sustainable for you.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="holistic" className="mt-12 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle>Holistic Wellness</CardTitle>
                <CardDescription>
                  Addressing all aspects of your well-being
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our approach to healthy living encompasses all aspects of
                  wellness - physical, mental, and emotional. We don&apos;t just
                  focus on diet or exercise alone, but consider how various
                  lifestyle factors interact to affect your overall health. This
                  comprehensive strategy helps create balance and promotes total
                  well-being.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="evidence-based" className="mt-12 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle>Evidence-Based Practices</CardTitle>
                <CardDescription>
                  Grounded in scientific research and proven methods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our healthy lifestyle recommendations are based on the latest
                  scientific research and proven health practices. We stay
                  up-to-date with current health guidelines and adapt our
                  approaches accordingly. This ensures that the advice and
                  support we provide is credible, effective, and aligned with
                  established health standards.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="supportive" className="mt-12 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle>Supportive Environment</CardTitle>
                <CardDescription>
                  Encouragement and guidance every step of the way
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Adopting a healthy lifestyle is a journey, and our caregivers
                  are there to support you every step of the way. We provide
                  encouragement, answer your questions, and help you overcome
                  obstacles. Our supportive approach helps you stay motivated
                  and committed to your health goals, making it easier to
                  maintain healthy habits long-term.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-16">
        <Suspense fallback={<TestimonialsSkeleton />}>
          <Testimonials />
        </Suspense>
      </section>

      <section className="mb-16">
        <div className="bg-accent rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to Transform Your Lifestyle?
            </h2>
            <p className="text-lg mb-4">
              Our caregivers are ready to support you in achieving a healthier,
              happier life - all from the comfort of your own home.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="text-white dark:text-black">
                Get Started Today
              </Link>
            </Button>
          </div>
          <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
            <Image
              src="/livestyle2.jpg"
              alt="Healthy Lifestyle Transformation"
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
