import { Metadata } from "next";
import Image from "next/image";
import {
  Heart,
  Users,
  Calendar,
  Coffee,
  Book,
  Gamepad2,
  Music,
  Utensils,
  Sparkles,
  Puzzle,
  Target,
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
import Link from "next/link";

export const metadata: Metadata = {
  title: "Companionship Services | Essential Care Services",
  description:
    "Our companionship services provide social interaction, emotional support, and engaging activities to enhance the quality of life for our clients.",
};

export default function CompanionshipPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Companionship Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Enhancing lives through meaningful connections and support
        </p>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/companionship2.jpg"
            alt="Companionship Services"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Key Benefits of Our Companionship Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Emotional Support",
              description: "Providing a caring presence and a listening ear",
            },
            {
              icon: Users,
              title: "Social Interaction",
              description:
                "Engaging in meaningful conversations and activities",
            },
            {
              icon: Calendar,
              title: "Routine Maintenance",
              description: "Assisting with daily schedules and activities",
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
          Companionship Activities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Coffee, activity: "Conversation" },
            { icon: Book, activity: "Reading" },
            { icon: Gamepad2, activity: "Games" },
            { icon: Music, activity: "Music" },
            { icon: Utensils, activity: "Meal Preparation" },
            { icon: Calendar, activity: "Outings" },
            { icon: Users, activity: "Social Events" },
            { icon: Heart, activity: "Emotional Support" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-accent rounded-lg"
            >
              <item.icon className="w-8 h-8 mb-2 text-primary" />
              <span className="font-medium">{item.activity}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Personalized Care Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
            <Image
              src="/companionship1.jpg"
              alt="Personalized Care"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Tailored to Your Needs
            </h3>
            <p className="mb-6">
              Our companionship services are designed to meet the unique needs
              and preferences of each individual. We believe in creating
              meaningful connections that enhance quality of life.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Sparkles, text: "Customized care plans" },
                {
                  icon: Puzzle,
                  text: "Matching caregivers based on personality and interests",
                },
                {
                  icon: Target,
                  text: "Goal-oriented activities to promote well-being",
                },
                {
                  icon: Smile,
                  text: "Focus on building lasting, positive relationships",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <item.icon className="w-6 h-6 mr-2 text-primary" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Enhance Your Quality of Life?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Contact us today to learn more about our companionship services
        </p>
        <Button asChild size="lg">
          <Link href="/contact" className="text-white dark:text-black">
            Get in Touch
          </Link>
        </Button>
      </section>
    </div>
  );
}
