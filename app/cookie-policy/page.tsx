import {
  Cookie,
  Info,
  Shield,
  Settings,
  Clock,
  Globe,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CookiePolicyPage() {
  const sections = [
    {
      title: "What Are Cookies",
      icon: <Cookie className="h-6 w-6" />,
      content:
        "Cookies are small pieces of data stored on your device (computer or mobile device) when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.",
    },
    {
      title: "How We Use Cookies",
      icon: <Info className="h-6 w-6" />,
      content:
        "We use cookies to understand how you use our website, remember your preferences, and improve your overall experience. This includes essential cookies for website functionality and optional cookies for analytics and personalization.",
    },
    {
      title: "Types of Cookies We Use",
      icon: <Shield className="h-6 w-6" />,
      content:
        "We use both session and persistent cookies on our website. Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them manually.",
    },
    {
      title: "Managing Cookies",
      icon: <Settings className="h-6 w-6" />,
      content:
        "You can control and manage cookies in various ways. You can delete all cookies that are already on your device and set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our website.",
    },
  ];

  const cookieTypes = [
    {
      name: "Essential",
      description: "Necessary for the website to function properly",
    },
    {
      name: "Analytics",
      description: "Help us understand how visitors interact with our website",
    },
    {
      name: "Functionality",
      description: "Enable enhanced functionality and personalization",
    },
    {
      name: "Advertising",
      description:
        "Used to deliver relevant ads and track ad campaign performance",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Cookie Policy</h1>
      <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
        This Cookie Policy explains how Essential Care Services uses cookies and
        similar technologies to recognize you when you visit our website.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
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
        <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cookie Type</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cookieTypes.map((type, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{type.name}</TableCell>
                <TableCell>{type.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">
          Detailed Cookie Information
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {sections.map((section, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{section.content}</p>
                <p className="mt-2 text-muted-foreground">
                  For more detailed information about{" "}
                  {section.title.toLowerCase()}, please contact our privacy
                  officer.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-16 bg-accent rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Globe className="h-6 w-6 mr-2" />
          Third-Party Cookies
        </h2>
        <p className="text-muted-foreground mb-4">
          In addition to our own cookies, we may also use various third-party
          cookies to report usage statistics of the Service, deliver
          advertisements on and through the Service, and so on.
        </p>
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center">
          <Clock className="h-4 w-4 mr-2" />
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center">
          <HelpCircle className="h-4 w-4 mr-2" />
          If you have any questions about our Cookie Policy, please contact us.
        </p>
      </div>
    </div>
  );
}
