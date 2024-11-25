import { Metadata } from "next";
import Image from "next/image";
import { Shield, Check, HelpCircle, FileText } from "lucide-react";

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
  title: "Insurance Partnerships | Essential Care Services",
  description:
    "Learn about our insurance partnerships and how we work with various providers to ensure you receive the care you need.",
};

const insuranceCategories = [
  {
    name: "Medicare",
    description:
      "Federal health insurance program for seniors and certain younger individuals with disabilities",
    partners: [
      "Medicare Part A",
      "Medicare Part B",
      "Medicare Advantage Plans",
    ],
  },
  {
    name: "Medicaid",
    description:
      "Joint federal and state program that provides health coverage to eligible low-income individuals",
    partners: [
      "State Medicaid Programs",
      "Medicaid Waiver Programs",
      "Medicaid Managed Care Plans",
    ],
  },
  {
    name: "Private Insurance",
    description: "Health insurance plans offered by private companies",
    partners: [
      "Blue Cross Blue Shield",
      "UnitedHealthcare",
      "Aetna",
      "Cigna",
      "Humana",
    ],
  },
  {
    name: "Long-Term Care",
    description:
      "Insurance that helps cover the costs of long-term care services",
    partners: [
      "Genworth",
      "New York Life",
      "Northwestern Mutual",
      "Mutual of Omaha",
    ],
  },
];

export default function InsurancePartnershipsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Insurance Partnerships</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Working together to provide you with quality care
        </p>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/insurance.jpg"
            alt="Insurance Partnerships"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Insurance Partners
        </h2>
        <Tabs
          defaultValue={insuranceCategories[0].name.toLowerCase()}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2">
            {insuranceCategories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name.toLowerCase()}
                className="px-2 py-1"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {insuranceCategories.map((category) => (
            <TabsContent
              key={category.name}
              value={category.name.toLowerCase()}
              className="mt-12 md:mt-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.partners.map((partner, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        <span>{partner}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          How We Work with Insurance Providers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Coverage Verification",
              description:
                "We verify your insurance coverage to ensure you receive all eligible benefits.",
            },
            {
              icon: FileText,
              title: "Claims Processing",
              description:
                "Our team handles all the paperwork, submitting claims directly to your insurance provider.",
            },
            {
              icon: HelpCircle,
              title: "Benefit Explanation",
              description:
                "We help you understand your insurance benefits and how they apply to our services.",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <item.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Need Help Understanding Your Coverage?</CardTitle>
            <CardDescription>
              Our insurance specialists are here to assist you with any
              questions about your coverage and our partnerships.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact" className="text-white dark:text-black">
                  Call Us Now
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: "What if my insurance isn't listed?",
              a: "We work with many insurance providers not listed here. Contact us to verify your coverage.",
            },
            {
              q: "Do you accept Medicare?",
              a: "Yes, we accept various Medicare plans. Our team can help determine your specific coverage.",
            },
            {
              q: "How do I know what services are covered?",
              a: "We provide a free insurance verification and will explain your coverage in detail.",
            },
            {
              q: "What if I don't have insurance?",
              a: "We offer private pay options and can discuss payment plans to suit your needs.",
            },
          ].map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
