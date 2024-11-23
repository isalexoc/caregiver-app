import { Metadata } from "next";
import Image from "next/image";
import {
  Star,
  Heart,
  Users,
  ThumbsUp,
  MessageCircle,
  Award,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Suspense } from "react";
import Testimonials from "@/components/testimonials";
import { TestimonialsSkeleton } from "@/components/skeletons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Testimonials | Essential Care Services",
  description:
    "Read what our clients have to say about our in-home care services. Real stories from real people experiencing the Essential Care difference.",
};

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Real stories from those we&apos;ve had the privilege to serve
        </p>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/testimonials3.jpg"
            alt="Happy Clients"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Our Clients Love Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Compassionate Care",
              description:
                "Our caregivers provide warm, empathetic support to every client",
            },
            {
              icon: Users,
              title: "Personalized Service",
              description:
                "Tailored care plans that meet each individual's unique needs",
            },
            {
              icon: ThumbsUp,
              title: "Professionalism",
              description: "Highly trained staff delivering top-quality care",
            },
            {
              icon: MessageCircle,
              title: "Clear Communication",
              description:
                "We keep families informed and involved every step of the way",
            },
            {
              icon: Award,
              title: "Quality Assurance",
              description: "Rigorous standards ensure the best possible care",
            },
            {
              icon: Star,
              title: "Client Satisfaction",
              description:
                "Our clients' well-being and happiness are our top priorities",
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
        <Suspense fallback={<TestimonialsSkeleton qty={9} />}>
          <Testimonials qty={9} />
        </Suspense>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Commitment to Excellence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">
              At Essential Care Services, we&apos;re dedicated to providing the
              highest quality in-home care. Our commitment to excellence is
              reflected in every aspect of our service, from our rigorous
              caregiver selection process to our ongoing training and quality
              assurance measures.
            </p>
            <p className="text-lg">
              We believe that great care starts with great people. That&apos;s
              why we carefully select compassionate, skilled caregivers who
              share our values and dedication to improving the lives of those we
              serve.
            </p>
            <p className="text-lg">
              But don&apos;t just take our word for it. The stories and
              experiences shared by our clients and their families speak volumes
              about the positive impact our care has on their lives.
            </p>
          </div>
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
            <Image
              src="/testimonials2.jpg"
              alt="Caregiver with Client"
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
              Ready to Experience the Essential Care Difference?
            </h2>
            <p className="text-lg mb-4">
              Join the many satisfied clients who have found comfort, support,
              and improved quality of life with our services.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="text-white dark:text-black">
                Contact Us Today
              </Link>
            </Button>
          </div>
          <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
            <Image
              src="/testimonials1.jpg"
              alt="Happy Client"
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
