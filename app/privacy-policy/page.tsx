import {
  Database,
  Share2,
  Lock,
  UserCheck,
  Bell,
  Eye,
  Settings,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: <Database className="h-6 w-6" />,
      content:
        "We collect personal information that you provide directly to us, such as your name, contact information, and health-related data necessary for our services.",
    },
    {
      title: "How We Use Your Information",
      icon: <Share2 className="h-6 w-6" />,
      content:
        "We use your information to provide and improve our services, communicate with you, and comply with legal obligations.",
    },
    {
      title: "Information Sharing",
      icon: <UserCheck className="h-6 w-6" />,
      content:
        "We may share your information with healthcare providers, insurance companies, and regulatory authorities as required by law or with your consent.",
    },
    {
      title: "Data Security",
      icon: <Lock className="h-6 w-6" />,
      content:
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.",
    },
    {
      title: "Your Rights",
      icon: <Settings className="h-6 w-6" />,
      content:
        "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data.",
    },
    {
      title: "Updates to This Policy",
      icon: <Bell className="h-6 w-6" />,
      content:
        "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
        At Essential Care Services, we are committed to protecting your privacy
        and ensuring the security of your personal information.
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
          Detailed Privacy Information
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {sections.map((section, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{section.content}</p>
                <p className="mt-2 text-muted-foreground">
                  For more detailed information about{" "}
                  {section.title.toLowerCase()}, please refer to the full
                  privacy policy document or contact our privacy officer.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-16 bg-accent rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Eye className="h-6 w-6 mr-2" />
          Cookie Policy
        </h2>
        <p className="text-muted-foreground mb-4">
          We use cookies and similar tracking technologies to track the activity
          on our Service and hold certain information. You can instruct your
          browser to refuse all cookies or to indicate when a cookie is being
          sent.
        </p>
        <p className="text-muted-foreground">
          For more information about the cookies we use, please see our{" "}
          <a href="/cookie-policy" className="text-primary hover:underline">
            Cookie Policy
          </a>
          .
        </p>
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center">
          <HelpCircle className="h-4 w-4 mr-2" />
          If you have any questions about this Privacy Policy, please contact
          us.
        </p>
      </div>
    </div>
  );
}
