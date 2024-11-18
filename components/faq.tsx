import SectionTitle from "@/components/section-title";
import { CheckCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including personal care, companionship, skilled nursing, therapy services, meal preparation, and transportation.",
    },
    {
      question: "How do you select your caregivers?",
      answer:
        "Our caregivers undergo rigorous screening, including background checks, and receive ongoing training to ensure they meet our high standards of care.",
    },
    {
      question: "Can I change my care plan?",
      answer:
        "Absolutely. We understand that care needs can change, and we're flexible in adjusting your care plan as needed.",
    },
    {
      question: "Is your service available 24/7?",
      answer:
        "Yes, we offer round-the-clock care services to ensure your loved ones have support whenever they need it.",
    },
  ];

  return (
    <section className="py-12 px-4 mb-24">
      <div className="container mx-auto">
        <SectionTitle className="text-center">
          Frequently Asked Questions
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-6 transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary flex items-center">
                <CheckCircle
                  className="mr-2 text-primary flex-shrink-0"
                  size={20}
                />
                {faq.question}
              </h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
