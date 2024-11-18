import Image from "next/image";
import { CheckCircle } from "lucide-react";
import SectionTitle from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";

const WhyUs = () => {
  const reasons = [
    "Highly trained caregivers",
    "Customized care plans",
    "Comprehensive range of services",
    "Continuous quality assurance",
    "24/7 availability and support",
    "Personalized matching process",
    "Regular care plan reviews",
    "Transparent family communication",
    "Expertise in specialized care",
    "Strict safety protocols",
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto">
        <SectionTitle className="text-center mb-12">
          Why Choose Us?
        </SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl opacity-70 blur-xl"></div>
            <Image
              src="https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Caring professional assisting an elderly person"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto relative z-10 object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
          <Card className="bg-card/50 backdrop-blur-sm border-none shadow-lg order-1 lg:order-2">
            <CardContent className="p-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reasons.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center p-2 rounded-lg transition-all duration-300 hover:bg-primary/10"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
