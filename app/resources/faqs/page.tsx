import { Suspense } from "react";
import OpenCrispChat from "@/components/open-crisp-chat";
import { Metadata } from "next";
import {
  Mail,
  Phone,
  MessageCircle,
  Users,
  DollarSign,
  Shield,
  Clipboard,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Essential Care Services",
  description:
    "Find answers to common questions about our in-home care services, caregivers, pricing, and more.",
};

const faqCategories = [
  {
    name: "General",
    icon: MessageCircle,
    questions: [
      {
        q: "What services does Essential Care Services offer?",
        a: "We offer a range of in-home care services including personal care, companionship, medication management, and specialized care for conditions like dementia.",
      },
      {
        q: "How long have you been in business?",
        a: "Essential Care Services has been providing quality in-home care from 2024.",
      },
      {
        q: "Are your services available 24/7?",
        a: "Yes, our services are available 24 hours a day, 7 days a week, including holidays.",
      },
      {
        q: "Do you offer services in languages other than English?",
        a: "Yes, we have caregivers who speak various languages. Please inquire about specific language needs.",
      },
      {
        q: "How do I get started with your services?",
        a: "You can start by contacting us for a free consultation. We'll assess your needs and create a personalized care plan.",
      },
      // ... (add more questions to reach at least 20 for this category)
    ],
  },
  {
    name: "Caregivers",
    icon: Users,
    questions: [
      {
        q: "How are your caregivers selected?",
        a: "Our caregivers undergo a rigorous selection process including background checks, interviews, and skills assessments.",
      },
      {
        q: "What kind of training do your caregivers receive?",
        a: "All our caregivers receive comprehensive initial training and ongoing education in various aspects of care.",
      },
      {
        q: "Can I choose my caregiver?",
        a: "We strive to match you with the most suitable caregiver based on your needs and preferences. You can request a change if you're not satisfied.",
      },
      {
        q: "Are your caregivers insured and bonded?",
        a: "Yes, all our caregivers are fully insured and bonded for your peace of mind.",
      },
      {
        q: "What if my regular caregiver is sick or on vacation?",
        a: "We always have backup caregivers available to ensure continuity of care.",
      },
      // ... (add more questions to reach at least 20 for this category)
    ],
  },
  {
    name: "Services",
    icon: Clipboard,
    questions: [
      {
        q: "What types of personal care services do you provide?",
        a: "Our personal care services include bathing, dressing, grooming, toileting, and mobility assistance.",
      },
      {
        q: "Do you offer specialized care for dementia patients?",
        a: "Yes, we have caregivers specially trained in dementia care to provide appropriate support and engagement.",
      },
      {
        q: "Can your caregivers prepare meals?",
        a: "Absolutely, meal preparation is one of our core services. We can accommodate dietary restrictions and preferences.",
      },
      {
        q: "Do you provide transportation services?",
        a: "No, our caregivers do not provide transportation for errands, appointments, or social activities.",
      },
      {
        q: "Can your caregivers administer medication?",
        a: "Our caregivers can provide medication reminders. For medication administration, we work with licensed nurses.",
      },
      // ... (add more questions to reach at least 20 for this category)
    ],
  },
  {
    name: "Pricing",
    icon: DollarSign,
    questions: [
      {
        q: "Who is responsible for the cost of care?",
        a: "Normally, the health insurance provider is responsible for the cost of our services. We work directly with insurance companies to manage billing and payments.",
      },
      {
        q: "What if I don't have insurance coverage?",
        a: "If you don't have insurance coverage, we offer private pay options. In these cases, we will provide a quote to be accepted and start the plan.",
      },
      {
        q: "How much do your services cost?",
        a: "Our pricing varies based on the level of care needed. We offer a free consultation to provide a detailed quote.",
      },
      {
        q: "Do you offer any discounts?",
        a: "We occasionally offer promotional discounts. Long-term care packages may also come with reduced rates.",
      },
      {
        q: "What forms of payment do you accept?",
        a: "We accept cash, checks, and all major credit cards. We can also bill long-term care insurance directly.",
      },
      {
        q: "Is there a minimum number of hours required?",
        a: "We have a minimum of 6 hours per visit to ensure quality care, but this can vary based on specific needs.",
      },
      {
        q: "Do you offer any financial assistance programs?",
        a: "We can provide information on various financial assistance options and help you explore potential funding sources.",
      },
      // ... (add more questions to reach at least 20 for this category)
    ],
  },
  {
    name: "Insurance",
    icon: Shield,
    questions: [
      {
        q: "Do you accept long-term care insurance?",
        a: "Yes, we work with most long-term care insurance providers. We can help you understand your policy and benefits.",
      },
      {
        q: "Does Medicare cover your services?",
        a: "We can guide you on potential coverage for our services.",
      },
      {
        q: "Do you accept Medicaid?",
        a: "We work with certain Medicaid waiver programs. Eligibility and coverage vary by state and individual circumstances.",
      },
      {
        q: "Can you help me understand my insurance coverage?",
        a: "Absolutely. Our team can review your policy with you and explain how it applies to our services.",
      },
      {
        q: "What if I don't have insurance?",
        a: "We offer private pay options and can discuss various payment plans to suit your needs.",
      },
      // ... (add more questions to reach at least 20 for this category)
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Find answers to common questions about our services and care
        </p>
      </section>

      <section className="mb-16">
        <Tabs
          defaultValue={faqCategories[0].name.toLowerCase()}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {faqCategories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name.toLowerCase()}
                className="px-2 py-1"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {faqCategories.map((category) => (
            <TabsContent
              key={category.name}
              value={category.name.toLowerCase()}
              className="mt-20 md:mt-12 lg:mt-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.name} FAQs</CardTitle>
                  <CardDescription>
                    Frequently asked questions about{" "}
                    {category.name.toLowerCase()} topics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.q}</AccordionTrigger>
                        <AccordionContent>{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Didn&apos;t Find Your Answer?</CardTitle>
            <CardDescription>
              Our team is here to help you with any additional questions you may
              have.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <a
                href="mailto:info@ecservices.app"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:underline border p-2 rounded-lg"
              >
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>

              <a
                href="tel:+15406813507"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:underline border p-2 rounded-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Call Us</span>
              </a>
              <Suspense fallback={<div>Loading...</div>}>
                <OpenCrispChat />
              </Suspense>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
