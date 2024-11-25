import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactForm from "@/components/contact-form";
import Follow from "@/components/follow";
import { Suspense } from "react";
import OpenCrispChat from "@/components/open-crisp-chat";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-lg mb-12 text-center max-w-2xl mx-auto text-muted-foreground">
        We&apos;re here to help and answer any question you might have. We look
        forward to hearing from you.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <ContactForm />

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>129 Pewter Lane, Stafford VA, 22554</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>(540) 681-3507</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@ecservices.app</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Mon-Fri: 9am-5pm</span>
              </div>
              <div className="flex items-center space-x-2">
                <Suspense fallback={<div>Loading...</div>}>
                  <OpenCrispChat />
                </Suspense>
              </div>
            </CardContent>
          </Card>

          <Follow />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What services do you offer?</AccordionTrigger>
            <AccordionContent>
              We offer a range of care services including personal care, in-home
              support, companionship, specialized care, and medical services.
              Each service is tailored to meet the unique needs of our clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I schedule a service?</AccordionTrigger>
            <AccordionContent>
              To schedule a service, you can contact us via phone, email, or by
              filling out the contact form on this page. One of our care
              coordinators will get in touch with you to discuss your needs and
              set up a care plan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Are your caregivers licensed and insured?
            </AccordionTrigger>
            <AccordionContent>
              Yes, all our caregivers are licensed, insured, and undergo
              thorough background checks. We ensure that they receive ongoing
              training to provide the highest quality of care.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.2776546333613!2d-77.45909548431551!3d38.422501779645856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6eb8a2afd3d35%3A0x8e0f6deef6e5adcc!2s129%20Pewter%20Ln%2C%20Stafford%2C%20VA%2022554!5e0!3m2!1sen!2sus!4v1653933201619!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
