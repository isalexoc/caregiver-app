import {
  Home,
  Utensils,
  Sparkles,
  ShieldCheck,
  Clock,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

export default function InHomeSupportPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              In-Home Support Services
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Comprehensive assistance to help you maintain a comfortable and
              safe living environment in the familiarity of your own home.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="text-white dark:text-black">
                Request In-Home Support
              </Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/in-home.jpg"
              alt="Caregiver providing in-home support"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Our In-Home Support Services
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          We offer a wide range of in-home support services to ensure your
          comfort, safety, and well-being in your own home.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Home className="h-8 w-8 text-primary" />,
              title: "Housekeeping",
              description:
                "Light cleaning, laundry, and maintaining a tidy living space.",
            },
            {
              icon: <Utensils className="h-8 w-8 text-primary" />,
              title: "Meal Preparation",
              description:
                "Nutritious meal planning, grocery shopping, and cooking.",
            },
            {
              icon: <Sparkles className="h-8 w-8 text-primary" />,
              title: "Personal Care",
              description: "Assistance with bathing, dressing, and grooming.",
            },
            {
              icon: <ShieldCheck className="h-8 w-8 text-primary" />,
              title: "Medication Reminders",
              description: "Timely reminders to take prescribed medications.",
            },
            {
              icon: <Clock className="h-8 w-8 text-primary" />,
              title: "24/7 Care",
              description: "Round-the-clock support for those who need it.",
            },
            {
              icon: <Users className="h-8 w-8 text-primary" />,
              title: "Companionship",
              description: "Friendly conversation and social engagement.",
            },
          ].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {service.icon}
                  <span className="ml-2">{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-accent rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Benefits of Our In-Home Support
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Maintain Independence",
              description:
                "Stay in the comfort of your own home while receiving necessary support.",
            },
            {
              title: "Personalized Care",
              description:
                "Tailored services to meet your unique needs and preferences.",
            },
            {
              title: "Peace of Mind",
              description:
                "For both clients and their families, knowing professional care is always available.",
            },
            {
              title: "Improved Quality of Life",
              description:
                "Enhance daily living with assistance in various aspects of home life.",
            },
            {
              title: "Flexible Scheduling",
              description:
                "Arrange support services according to your routine and requirements.",
            },
            {
              title: "Companionship",
              description:
                "Reduce feelings of loneliness with friendly, caring support.",
            },
          ].map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Star className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Caregivers</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/service1-1.jpg"
              alt="Our professional in-home support team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              Dedicated and Skilled Professionals
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Our in-home support team consists of carefully selected and
              thoroughly trained professionals who are:
            </p>
            <ul className="space-y-2">
              {[
                "Experienced in providing in-home care",
                "Trained in safety protocols and emergency procedures",
                "Compassionate and patient",
                "Respectful of client privacy and home environment",
                "Committed to ongoing professional development",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "How do you match caregivers with clients?",
              answer:
                "We carefully consider the client's needs, preferences, and personality to find the best caregiver match, ensuring a comfortable and effective care relationship.",
            },
            {
              question:
                "Can I change the schedule of in-home support services?",
              answer:
                "Yes, we offer flexible scheduling and can adjust your care plan as your needs change. Simply contact our care coordinator to discuss any modifications.",
            },
            {
              question: "What if I need additional services not listed?",
              answer:
                "We offer customized care plans and can often accommodate additional service requests. Please discuss your specific needs with our care coordinator.",
            },
            {
              question: "Are your in-home support services available 24/7?",
              answer:
                "Yes, we offer round-the-clock care for clients who require continuous support, including overnight and weekend services.",
            },
          ].map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="text-center bg-accent rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Experience Our In-Home Support?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
          Let us help you maintain your independence and quality of life with
          our comprehensive in-home support services.
        </p>
        <Button asChild size="lg">
          <Link href="/contact" className="text-white dark:text-black">
            Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
