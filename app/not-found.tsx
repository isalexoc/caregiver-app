import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home, Search, ArrowLeft, HelpCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Essential Care Services",
  description:
    "Sorry, the page you are looking for does not exist. Please check the URL or navigate back to our homepage.",
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center items-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">
            404 - Page Not Found
          </CardTitle>
          <CardDescription className="text-xl mb-8">
            Oops! It seems we&apos;ve taken a wrong turn.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8">
            <Image
              src="/404.jpg"
              alt="404 Error Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-center text-lg mb-8">
            We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t
            exist. Don&apos;t worry, though – we&apos;re here to help you find
            your way back!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button asChild className="flex items-center justify-center">
              <Link href="/" className="text-white dark:text-black">
                <Home className="mr-2 h-4 w-4" /> Return Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex items-center justify-center"
            >
              <Link href="/services">
                <Search className="mr-2 h-4 w-4" /> Explore Our Services
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button asChild variant="link" className="flex items-center">
          <Link href="/contact">
            <HelpCircle className="mr-2 h-4 w-4" /> Contact Support
          </Link>
        </Button>
        <Button asChild variant="link" className="flex items-center">
          <Link href="javascript:history.back()">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Link>
        </Button>
      </div>
    </div>
  );
}
