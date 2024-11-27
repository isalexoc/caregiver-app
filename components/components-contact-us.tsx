import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Suspense } from "react";
import OpenCrispChat from "./open-crisp-chat";
import ContactForm from "./contact-form";

export function ContactUs() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 dark:from-blue-50 dark:to-gray-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription className="text-blue-100">
                Reach out to us for more information about Essential Care
                Services or investment opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <a
                href="https://maps.app.goo.gl/iEwh1FSAU9RYCTes8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p>129 Pewter Lane</p>
                  <p>Stafford, VA 22554</p>
                </div>
              </a>
              <a
                href="tel:+15406813507"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p>(540) 681-3507</p>
                </div>
              </a>
              <a
                href="mailto:info@ecservices.app"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p>info@ecservices.app</p>
                </div>
              </a>
              <div className="pt-4">
                <Suspense
                  fallback={<div className="text-center">Loading chat...</div>}
                >
                  <OpenCrispChat />
                </Suspense>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-800 text-white">
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription className="text-green-100">
                We&apos;d love to hear from you. Fill out the form below and
                we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
