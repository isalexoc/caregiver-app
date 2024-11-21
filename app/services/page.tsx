import {
  Heart,
  Home,
  Users,
  Brain,
  Stethoscope,
  ArrowRight,
  Utensils,
  Activity,
  Leaf,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Personal Care Assistance",
    href: "/services/personal-care",
    description: "Bathing, dressing, and hygiene assistance for daily living.",
    icon: <Heart className="h-8 w-8 text-primary" />,
  },
  {
    title: "In-Home Support",
    href: "/services/in-home-support",
    description: "Housekeeping, meal preparation, and mobility assistance.",
    icon: <Home className="h-8 w-8 text-primary" />,
  },
  {
    title: "Companionship Services",
    href: "/services/companionship",
    description: "Social interaction and mental health support for well-being.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    title: "Specialized Care",
    href: "/services/specialized-care",
    description: "Tailored care for elderly and chronic illness management.",
    icon: <Brain className="h-8 w-8 text-primary" />,
  },
  {
    title: "Medical Services",
    href: "/services/medical",
    description: "Medication reminders and health monitoring by professionals.",
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
  },
  {
    title: "Nutrition Support",
    href: "/services/nutrition",
    description:
      "Personalized meal planning and dietary guidance for optimal health.",
    icon: <Utensils className="h-8 w-8 text-primary" />,
  },
  {
    title: "Exercise Support",
    href: "/services/exercise",
    description:
      "Tailored physical activity programs to maintain and improve mobility.",
    icon: <Activity className="h-8 w-8 text-primary" />,
  },
  {
    title: "Healthy Lifestyle Methodology",
    href: "/services/healthy-lifestyle",
    description:
      "Holistic approach to promote overall well-being and quality of life.",
    icon: <Leaf className="h-8 w-8 text-primary" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Our Comprehensive Care Services
      </h1>
      <p className="text-lg mb-12 text-center max-w-2xl mx-auto text-muted-foreground">
        At Essential Care Services, we offer a wide range of care services
        tailored to meet the unique needs of each individual, promoting health,
        independence, and overall well-being.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <Card key={index} className="bg-card transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {service.description}
              </CardDescription>
              <Button asChild variant="outline" className="w-full">
                <Link href={service.href}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-20 bg-accent rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Choose Essential Care Services?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
            <p className="text-muted-foreground">
              Tailored services to meet individual needs and preferences.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Stethoscope className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Staff</h3>
            <p className="text-muted-foreground">
              Highly trained and experienced caregivers and medical
              professionals.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
            <p className="text-muted-foreground">
              Comprehensive care addressing physical, mental, and emotional
              well-being.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Experience Our Comprehensive Care?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
          Let us help you or your loved ones with compassionate, personalized
          care that promotes a healthy and fulfilling lifestyle. Contact us
          today for a free consultation.
        </p>
        <Button asChild size="lg">
          <Link href="/contact" className="text-white dark:text-black">
            Contact Us
          </Link>
        </Button>
      </section>
    </div>
  );
}
