import {
  Shield,
  Trash2,
  Eye,
  Lock,
  FileText,
  Clock,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DataPrivacyDeletionPage() {
  const sections = [
    {
      title: "Data Collection",
      icon: <Eye className="h-6 w-6" />,
      content:
        "We collect personal information necessary for providing our care services, including name, contact details, health information, and service preferences.",
    },
    {
      title: "Data Protection",
      icon: <Shield className="h-6 w-6" />,
      content:
        "We implement robust security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.",
    },
    {
      title: "Data Usage",
      icon: <FileText className="h-6 w-6" />,
      content:
        "Your data is used solely for providing and improving our services, communicating with you, and complying with legal obligations.",
    },
    {
      title: "Data Retention",
      icon: <Clock className="h-6 w-6" />,
      content:
        "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.",
    },
    {
      title: "Data Deletion",
      icon: <Trash2 className="h-6 w-6" />,
      content:
        "You have the right to request deletion of your personal data. We will comply with your request unless we have a legal obligation to retain the data.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Data Privacy and Deletion
      </h1>
      <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
        At Essential Care Services, we are committed to protecting your privacy
        and ensuring you have control over your personal data.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <Card key={index} className="bg-card">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {section.icon}
              </div>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{section.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">
          Your Data Privacy Rights
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Right to Access</AccordionTrigger>
            <AccordionContent>
              You have the right to request a copy of the personal information
              we hold about you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Right to Rectification</AccordionTrigger>
            <AccordionContent>
              You can request that we correct any information you believe is
              inaccurate or incomplete.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Right to Erasure</AccordionTrigger>
            <AccordionContent>
              You can request that we erase your personal data under certain
              conditions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Right to Restrict Processing</AccordionTrigger>
            <AccordionContent>
              You have the right to request that we restrict the processing of
              your personal data under certain circumstances.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Right to Data Portability</AccordionTrigger>
            <AccordionContent>
              You have the right to request that we transfer your data to
              another controller.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-16 bg-accent rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Lock className="h-6 w-6 mr-2" />
          Data Deletion Process
        </h2>
        <p className="text-muted-foreground mb-4">
          To request deletion of your personal data:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground mb-4">
          <li>Contact our Data Protection Officer</li>
          <li>
            Send an email to info@ecservices.app requesting data deletition
          </li>
          <li>Verify your identity</li>
          <li>Specify the data you want deleted</li>
          <li>We&apos;ll process your request within 30 days</li>
        </ol>
        <Button asChild>
          <Link href="/contact" className="text-white dark:text-black">
            Contact Data Protection Officer
          </Link>
        </Button>
      </div>

      <div className="mt-16 bg-warning/10 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-warning">
          <AlertTriangle className="h-6 w-6 mr-2" />
          Important Notice
        </h2>
        <p className="text-muted-foreground mb-4">
          Please note that deleting your data may affect our ability to provide
          services to you. Some information may be retained for legal or
          regulatory reasons.
        </p>
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center">
          <Clock className="h-4 w-4 mr-2" />
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center">
          <HelpCircle className="h-4 w-4 mr-2" />
          If you have any questions about our data practices, please contact us.
        </p>
      </div>
    </div>
  );
}
