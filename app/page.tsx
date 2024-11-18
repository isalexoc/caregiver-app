import Testimonials from "@/components/testimonials";
import CareProcess from "@/components/care-process";
import QualityCommitment from "@/components/quality-commitment";
import CommunityInvolvement from "@/components/community-involvement";
import FAQ from "@/components/faq";
import CallToAction from "@/components/call-to-action";
import Hero from "@/components/hero";
import Features from "@/components/features";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <CareProcess />
      <QualityCommitment />
      <CommunityInvolvement />
      <CallToAction />
      <Features />
      <FAQ />
      <WhyUs />
    </>
  );
}
