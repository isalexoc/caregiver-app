import SectionTitle from "@/components/section-title";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQ() {
  const faqs = [
    {
      question: "What services do you offer?",
      shortAnswer:
        "We offer personal care, companionship, skilled nursing, therapy, meal prep, and transportation.",
    },
    {
      question: "How do you select your caregivers?",
      shortAnswer:
        "Through rigorous screening, background checks, and ongoing training.",
    },
    {
      question: "Can I change my care plan?",
      shortAnswer:
        "Yes, we're flexible and can adjust your care plan as needed.",
    },
    {
      question: "Is your service available 24/7?",
      shortAnswer: "Yes, we offer round-the-clock care services.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto">
        <SectionTitle className="text-center mb-12">
          Frequently Asked Questions
        </SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12 mb-12">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-primary/10 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.shortAnswer}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="default">
            <Link href="/faq" className="text-white dark:text-black">
              See All FAQs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
