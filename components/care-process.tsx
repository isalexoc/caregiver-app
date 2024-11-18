import SectionTitle from "@/components/section-title";

export default function CareProcess() {
  const steps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We meet to understand your needs.",
    },
    {
      step: 2,
      title: "Care Plan Development",
      description: "We create a personalized care plan.",
    },
    {
      step: 3,
      title: "Caregiver Matching",
      description: "We match you with the perfect caregiver.",
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "We provide continuous care and adjustments.",
    },
  ];

  return (
    <section className="py-12 px-4 mb-24">
      <div className="container mx-auto">
        <SectionTitle className="text-center">Our Care Process</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col items-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
