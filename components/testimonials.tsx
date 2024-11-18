import SectionTitle from "@/components/section-title";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John D.",
      quote:
        "The care provided by Essential Care has been exceptional. It's given our family peace of mind.",
    },
    {
      name: "Sarah M.",
      quote:
        "The caregivers are not just professional, but also incredibly kind and compassionate.",
    },
    {
      name: "Robert L.",
      quote:
        "I couldn't be more satisfied with the personalized care plan they developed for my mother.",
    },
  ];

  return (
    <section className="bg-accent py-12 px-4 rounded-lg mb-24">
      <div className="container mx-auto">
        <SectionTitle className="text-center text-accent-foreground">
          What Our Clients Say
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <p className="text-muted-foreground mb-4">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="font-semibold text-primary">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
