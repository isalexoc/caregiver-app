import Testimonials from "@/components/testimonials";
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
