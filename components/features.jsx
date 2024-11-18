import { Sparkles, UserCheck, HeartPulse } from "lucide-react";
import FeatureCard from "@/components/feature-card";

const Features = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      <FeatureCard
        title="Personalized Care"
        description="Tailored care plans to meet individual needs and preferences."
        icon={<Sparkles size={64} />}
      />
      <FeatureCard
        title="Experienced Caregivers"
        description="Our team consists of highly trained and compassionate professionals."
        icon={<UserCheck size={64} />}
      />
      <FeatureCard
        title="24/7 Support"
        description="Round-the-clock assistance for peace of mind."
        icon={<HeartPulse size={64} />}
      />
    </section>
  );
};

export default Features;
