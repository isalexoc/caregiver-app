"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CallToAction() {
  return (
    <section className="py-24 px-4 mb-24 bg-gradient-to-br from-secondary/50 to-primary/50 rounded-3xl overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-white/25 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-black/25"></div>
      <div className="container mx-auto relative z-10">
        <Card className="bg-background/80 backdrop-blur-sm border-none shadow-2xl">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-primary">
                  Ready to Experience Exceptional Care?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Contact us today to learn how we can provide personalized care
                  for you or your loved ones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link
                      href="/contact"
                      className="text-white dark:text-black"
                    >
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Link href="/services">Our Services</Link>
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">
                      info@essentialcare.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-30 blur-xl"></div>
                <Image
                  src="/team.jpg"
                  alt="Caring professional with a client"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-lg w-full h-auto relative z-10"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
