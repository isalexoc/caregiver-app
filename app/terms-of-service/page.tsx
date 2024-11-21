import {
  Scroll,
  Shield,
  Eye,
  UserCheck,
  Scale,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TermsAndConditionsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <Scroll className="h-6 w-6" />,
      content:
        "By accessing or using Essential Care Services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access our services.",
    },
    {
      title: "Privacy Policy",
      icon: <Shield className="h-6 w-6" />,
      content:
        "Your use of Essential Care Services is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.",
    },
    {
      title: "Use of Services",
      icon: <UserCheck className="h-6 w-6" />,
      content:
        "Our services are intended for personal, non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products or services obtained from Essential Care Services.",
    },
    {
      title: "Intellectual Property",
      icon: <Eye className="h-6 w-6" />,
      content:
        "The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary rights.",
    },
    {
      title: "Limitation of Liability",
      icon: <Scale className="h-6 w-6" />,
      content:
        "Essential Care Services shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use or the inability to use our services.",
    },
    {
      title: "Changes to Terms",
      icon: <HelpCircle className="h-6 w-6" />,
      content:
        "We reserve the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms and Conditions.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Terms and Conditions
      </h1>
      <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
        Welcome to Essential Care Services. These terms and conditions outline
        the rules and regulations for the use of our services.
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
        <h2 className="text-2xl font-semibold mb-4">Detailed Terms</h2>
        <Accordion type="single" collapsible className="w-full">
          {sections.map((section, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{section.content}</p>
                <p className="mt-2 text-muted-foreground">
                  For more detailed information about this section, please
                  contact our legal department.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          If you have any questions about these Terms and Conditions, please
          contact us.
        </p>
      </div>
    </div>
  );
}
