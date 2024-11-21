import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Testimonials from "@/components/testimonials";
import { Suspense } from "react";
import { TestimonialsSkeleton } from "@/components/skeletons";
import { Award, Heart, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center">
          About Essential Care Services
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/3">
            <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-[250px] sm:max-w-[400px] mx-auto md:mx-0">
              {["/about1.jpg", "/about2.jpg", "/about3.jpg", "/about4.jpg"].map(
                (index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-lg shadow-md"
                  >
                    <Image
                      src={index}
                      alt={`Essential Care Services image ${index}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <p className="text-base sm:text-lg mb-4">
              Essential Care Services is a leading provider of compassionate,
              high-quality care for individuals in need. With over a decade of
              experience and a team of skilled professionals, we strive to
              enhance the quality of life for our clients and their families.
            </p>
            <p className="text-base sm:text-lg">
              Our personalized approach ensures that each client receives the
              attention and care they deserve, tailored to their unique needs
              and preferences. We believe in empowering our clients to live
              their lives to the fullest, with dignity and independence.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16" id="story">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our History</h2>
        <div className="bg-accent rounded-lg p-8 shadow-md">
          <p className="text-lg mb-4">
            Founded in 2024 by a group of passionate healthcare professionals,
            Essential Care Services began with a simple mission: to provide
            exceptional care that truly makes a difference in people&apos;s
            lives.
          </p>
          <p className="text-lg mb-4">
            Over the time, we&apos;ve grown from a small team serving our local
            community to a comprehensive care provider with a wide range of
            services. Throughout our growth, we&apos;ve remained committed to
            our core values and the personal touch that sets us apart.
          </p>
          <p className="text-lg">
            Today, Essential Care Services is proud to be a trusted name in home
            care, known for our dedication to excellence and our genuine care
            for every client we serve.
          </p>
        </div>
      </section>

      <section
        className="py-16 bg-gradient-to-b from-background to-accent/10"
        id="mission"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Compassion</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We approach every client with empathy and understanding,
                  ensuring they feel valued and respected. Our care goes beyond
                  physical needs to nurture emotional and social well-being.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Excellence</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We are committed to delivering the highest standard of care
                  through continuous learning and improvement. Our team
                  undergoes regular training to stay at the forefront of best
                  practices in home care.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Integrity</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We uphold the highest ethical standards in all our
                  interactions, fostering trust and reliability. Transparency
                  and honesty are the foundations of our relationships with
                  clients, families, and partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Personal Care</h3>
              <p>
                Assistance with daily activities such as bathing, dressing, and
                grooming, tailored to each client&apos;s needs and preferences.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Companionship</h3>
              <p>
                Engaging social interaction, from conversation to shared
                activities, promoting mental and emotional well-being.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Medication Management
              </h3>
              <p>
                Ensuring proper medication administration and monitoring for
                potential side effects or interactions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Specialized Care</h3>
              <p>
                Tailored care plans for conditions such as dementia,
                Parkinson&apos;s, and post-operative recovery.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16" id="team">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Wilma Corrales",
              position: "CEO and active caregiver",
              image: "/wilma.png",
            },
            {
              name: "Ysmael Orraiz",
              position: "Head of Care Coordination",
              image: "/ysmael.jpg",
            },
            {
              name: "Isaac Orraiz",
              position: "Lead of Tech Department",
              image: "/isaac.jpg",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-muted-foreground">{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <Suspense fallback={<TestimonialsSkeleton />}>
          <Testimonials />
        </Suspense>
      </section>

      <section className="bg-accent rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Experience Our Care?
        </h2>
        <p className="text-lg mb-6">
          Let us help you or your loved ones with compassionate, personalized
          care. Contact us for a free consultation and learn how we can support
          your unique needs.
        </p>
        <Button asChild>
          <Link href="/contact" className="text-white dark:text-black">
            Contact Us Today
          </Link>
        </Button>
      </section>
    </div>
  );
}
