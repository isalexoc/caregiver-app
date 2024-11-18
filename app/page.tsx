import Testimonials from "@/components/testimonials";
import type { Metadata } from "next";
import CareProcess from "@/components/care-process";
import QualityCommitment from "@/components/quality-commitment";
import CommunityInvolvement from "@/components/community-involvement";
import FAQ from "@/components/faq";
import CallToAction from "@/components/call-to-action";
import Hero from "@/components/hero";
import Features from "@/components/features";
import WhyUs from "@/components/why-us";
import AboutUsSectionComponent from "@/components/company-info";
import { TestimonialsSkeleton } from "@/components/skeletons";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Essential Care Services | Compassionate Home Care",
  description:
    "Essential Care Services provides high-quality, personalized home care services for seniors and individuals with disabilities. Our compassionate caregivers offer assistance with daily living, companionship, and specialized care.",
  keywords:
    "home care, senior care, disability care, caregivers, companionship, personal assistance, medical care, Essential Care Services",
  authors: [{ name: "Essential Care Services Team" }],
  openGraph: {
    title: "Essential Care Services | Compassionate Home Care",
    description:
      "Providing high-quality, personalized home care services for seniors and individuals with disabilities.",
    url: "https://caregiver-app-zeta.vercel.app",
    siteName: "Essential Care Services",
    images: [
      {
        url: "https://caregiver-app-zeta.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Essential Care Services - Compassionate Home Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Care Services | Compassionate Home Care",
    description:
      "High-quality, personalized home care services for seniors and individuals with disabilities.",
    images: ["https://caregiver-app-zeta.vercel.app/twitter-image.png"],
    creator: "@EssentialCare",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://caregiver-app-zeta.vercel.app",
    languages: {
      "en-US": "https://caregiver-app-zeta.vercel.app",
      "es-ES": "https://caregiver-app-zeta.vercel.app/es",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#4a90e2",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUsSectionComponent />
      <Suspense fallback={<TestimonialsSkeleton />}>
        <Testimonials />
      </Suspense>
      <CareProcess />
      <QualityCommitment />
      <CommunityInvolvement />
      <CallToAction />
      <Features />
      <WhyUs />
      <FAQ />
    </>
  );
}
