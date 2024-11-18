import Image from "next/image";
import { CheckCircle } from "lucide-react";
import SectionTitle from "@/components/section-title";

const WhyUs = () => {
  return (
    <section className="bg-muted p-8 rounded-lg mb-24">
      <div className="container mx-auto">
        <SectionTitle className="text-center">Why Choose Us?</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1576765608135-828d7c1c3803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Caring professional assisting an elderly person"
              width={500}
              height={300}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div>
            <ul className="space-y-4">
              {[
                "Highly trained caregivers",
                "Customized care plans",
                "Comprehensive range of services",
                "Continuous quality assurance",
                "24/7 availability and support",
                "Personalized matching process",
                "Regular care plan reviews and adjustments",
                "Transparent communication with families",
                "Expertise in specialized care (e.g., dementia, post-surgery)",
                "Adherence to strict safety and hygiene protocols",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-center transform transition-all duration-300 hover:scale-105"
                >
                  <CheckCircle className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
