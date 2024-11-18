import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function CallToAction() {
  return (
    <section className="bg-secondary py-12 px-4 rounded-lg mb-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-secondary-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-8">
              Contact us today to learn more about our services and how we can
              help you or your loved ones.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary py-3 px-6 text-lg inline-flex items-center hover:scale-105 transition-transform duration-300"
            >
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
              alt="Contact Us"
              width={500}
              height={300}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
