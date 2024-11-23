import { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  Heart,
  Brain,
  Dumbbell,
  Home,
  BrainCog,
  Clock,
  Target,
  Zap,
  Trophy,
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
  title: "In-Home Exercise Services | Essential Care Services",
  description:
    "Professional in-home exercise programs tailored to your needs, including personal training and rehabilitation exercises in the comfort of your own home.",
};

export default function ExerciseServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">In-Home Exercise Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Tailored fitness programs in the comfort of your own home
        </p>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/excercise2.jpg"
            alt="In-Home Exercise Services"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our In-Home Exercise Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Dumbbell,
              title: "Personal Training",
              description:
                "One-on-one sessions tailored to your fitness goals and abilities in your home",
            },
            {
              icon: Home,
              title: "Home-Based Workouts",
              description:
                "Customized exercise routines designed for your living space and available equipment",
            },
            {
              icon: Activity,
              title: "Strength Training",
              description:
                "Programs designed to build muscle and increase overall strength using household items or portable equipment",
            },
            {
              icon: BrainCog,
              title: "Flexibility & Balance",
              description:
                "Sessions focusing on improving flexibility, balance, and core strength in a safe home environment",
            },
            {
              icon: Heart,
              title: "Rehabilitation Exercises",
              description:
                "Specialized exercises for recovery and injury prevention, conducted in your home",
            },
            {
              icon: ShieldCheck,
              title: "Safe Exercise Guidance",
              description:
                "Expert advice on performing exercises safely in your home environment",
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
          Benefits of Regular In-Home Exercise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, benefit: "Improved cardiovascular health" },
            { icon: Brain, benefit: "Enhanced cognitive function" },
            { icon: Zap, benefit: "Increased energy and stamina" },
            { icon: Clock, benefit: "Improved sleep quality" },
            { icon: Trophy, benefit: "Boosted self-confidence" },
            { icon: Target, benefit: "Weight management" },
            { icon: Activity, benefit: "Reduced risk of chronic diseases" },
            { icon: Home, benefit: "Convenience and privacy" },
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
          Our In-Home Exercise Programs
        </h2>
        <Tabs defaultValue="beginners" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="beginners" className="px-2 py-1">
              Beginners
            </TabsTrigger>
            <TabsTrigger value="intermediate" className="px-2 py-1">
              Intermediate
            </TabsTrigger>
            <TabsTrigger value="advanced" className="px-2 py-1">
              Advanced
            </TabsTrigger>
            <TabsTrigger value="seniors" className="px-2 py-1">
              Seniors
            </TabsTrigger>
          </TabsList>
          <TabsContent value="beginners" className="mt-12 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle>Beginner&apos;s Home Fitness Journey</CardTitle>
                <CardDescription>
                  Start your fitness journey with confidence in your own home
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our beginner&apos;s program focuses on building a strong
                  foundation with basic exercises, proper form, and gradual
                  progression. You&apos;ll learn the fundamentals of fitness and
                  develop healthy habits that last a lifetime, all in the
                  comfort of your own home.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="intermediate" className="mt-12 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle>Intermediate Home Fitness Challenge</CardTitle>
                <CardDescription>
                  Take your at-home fitness to the next level
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  For those with some fitness experience, our intermediate
                  program offers more challenging workouts, advanced techniques,
                  and varied routines to keep you motivated and progressing
                  towards your goals, all without leaving your home.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="advanced" className="mt-12 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Home Performance Training</CardTitle>
                <CardDescription>
                  Push your limits and achieve peak performance at home
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our advanced program is designed for fitness enthusiasts
                  looking to maximize their potential at home. Expect
                  high-intensity workouts, specialized training techniques, and
                  personalized performance strategies tailored to your home
                  environment.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="seniors" className="mt-12 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle>Senior In-Home Fitness & Wellness</CardTitle>
                <CardDescription>
                  Stay active and healthy at any age, in your own home
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our senior fitness program focuses on maintaining mobility,
                  strength, and balance in the safety of your home. With
                  low-impact exercises and careful guidance, we help seniors
                  stay active, independent, and enjoy a high quality of life.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          In-Home Exercise Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {[
              {
                title: "Create a Dedicated Space",
                description:
                  "Set up a specific area in your home for exercise to help you stay motivated.",
              },
              {
                title: "Use Household Items",
                description:
                  "Incorporate everyday objects as exercise equipment when specialized gear isn't available.",
              },
              {
                title: "Follow Professional Guidance",
                description:
                  "Always exercise under the supervision or guidance of our trained caregivers.",
              },
              {
                title: "Stay Consistent",
                description:
                  "Maintain a regular exercise schedule to see the best results.",
              },
            ].map((tip, index) => (
              <div key={index} className="flex items-start">
                <Activity className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
            <Image
              src="/excercise2.jpg"
              alt="In-Home Exercise Tips"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-accent rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to Start Your In-Home Fitness Journey?
            </h2>
            <p className="text-lg mb-4">
              Our expert caregivers are here to help you achieve your fitness
              goals in the comfort of your own home.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="text-white dark:text-black">
                Schedule a Free Consultation
              </Link>
            </Button>
          </div>
          <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
            <Image
              src="/excercise3.jpg"
              alt="In-Home Fitness Consultation"
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
