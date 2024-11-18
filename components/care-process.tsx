import SectionTitle from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import {
  UserPlus,
  ClipboardCheck,
  UserCheck,
  HeartHandshake,
} from "lucide-react";

export default function CareProcess() {
  const steps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We meet to understand your unique needs and situation.",
      icon: UserPlus,
      color: "text-blue-500 dark:text-blue-400",
    },
    {
      step: 2,
      title: "Care Plan Development",
      description:
        "We create a personalized care plan tailored to your requirements.",
      icon: ClipboardCheck,
      color: "text-green-500 dark:text-green-400",
    },
    {
      step: 3,
      title: "Caregiver Matching",
      description:
        "We carefully match you with the perfect caregiver for your needs.",
      icon: UserCheck,
      color: "text-purple-500 dark:text-purple-400",
    },
    {
      step: 4,
      title: "Ongoing Support",
      description:
        "We provide continuous care, adjustments, and support as needed.",
      icon: HeartHandshake,
      color: "text-red-500 dark:text-red-400",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto">
        <SectionTitle className="text-center mb-16">
          Our Care Process
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card
              key={step.step}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-none bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 relative flex flex-col justify-between h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-secondary-foreground transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-secondary-foreground/80 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <div
                    className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold ${step.color}`}
                  >
                    {step.step}
                  </div>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-2xl h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}
