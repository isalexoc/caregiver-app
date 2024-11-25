import { Sparkles, UserCheck, HeartPulse, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const FeatureCard = ({ title, description, icon, linkHref, bgImage }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden relative h-full">
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/20 z-10"></div>
      <CardHeader className="relative z-20">
        <div className="w-16 h-16 rounded-full dark:bg-black/70 flex items-center justify-center mb-4 transition-colors duration-300">
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold mb-2 text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-20">
        <CardDescription className="text-foreground/90 font-medium text-base p-4 rounded-md bg-background/60 backdrop-blur-sm">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="relative z-20">
        <Button
          variant="secondary"
          asChild
          className="font-semibold transition-colors duration-300 bg-primary hover:bg-primary/90 text-white dark:text-black"
        >
          <Link
            href={linkHref}
            className="flex items-center"
            aria-label={`Learn more about ${title}`}
          >
            {title} <span className="sr-only">about {title}</span>{" "}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Exceptional Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            title="Personalized Care"
            description="We create tailored care plans to meet individual needs and preferences, ensuring the highest quality of life for our clients."
            icon={<Sparkles className="w-8 h-8 text-primary-foreground" />}
            linkHref="/services/personal-care"
            bgImage="https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <FeatureCard
            title="Experienced Caregivers"
            description="Our team consists of highly trained and compassionate professionals dedicated to providing exceptional care."
            icon={<UserCheck className="w-8 h-8 text-primary-foreground" />}
            linkHref="/about"
            bgImage="/team2.jpg"
          />
          <FeatureCard
            title="24/7 Support"
            description="We offer round-the-clock assistance, giving you and your loved ones peace of mind at all times."
            icon={<HeartPulse className="w-8 h-8 text-primary-foreground" />}
            linkHref="/contact"
            bgImage="/support.jpg"
          />
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="default">
            <Link href="/services" className="text-white dark:text-black">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
