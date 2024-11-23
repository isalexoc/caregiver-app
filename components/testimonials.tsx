import Image from "next/image";
import SectionTitle from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  picture: string;
}

interface UserApi {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  picture: {
    large: string;
  };
}

const generateQuote = () => {
  const beginnings = [
    "I'm amazed by",
    "I can't express how grateful I am for",
    "Our family is so thankful for",
    "We're truly impressed with",
    "It's remarkable how",
  ];

  const middles = [
    "the exceptional care",
    "the compassionate service",
    "the professional assistance",
    "the personalized attention",
    "the dedicated support",
  ];

  const endings = [
    "provided by Essential Care Services.",
    "we've received from the caregivers.",
    "that has made such a difference in our lives.",
    "which has greatly improved our loved one's quality of life.",
    "offered by the entire team at Essential Care.",
  ];

  return `${beginnings[Math.floor(Math.random() * beginnings.length)]} ${
    middles[Math.floor(Math.random() * middles.length)]
  } ${endings[Math.floor(Math.random() * endings.length)]}`;
};

async function getTestimonials(qty: number): Promise<Testimonial[]> {
  const response = await fetch(`https://randomuser.me/api/?results=${qty}`);
  const data = await response.json();

  return data.results.map((user: UserApi) => ({
    name: `${user.name.first} ${user.name.last}`,
    role: user.gender === "female" ? "Client" : "Family Member",
    quote: generateQuote(),
    picture: user.picture.large,
  }));
}

export default async function Testimonials({ qty: number = 3 }) {
  const testimonials = await getTestimonials(number);

  return (
    <section className="bg-accent py-16 px-4 rounded-lg mb-24">
      <div className="container mx-auto">
        <SectionTitle className="text-center text-accent-foreground mb-12">
          What Our Clients Say
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card overflow-visible">
              <CardContent className="p-6 relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-background">
                    <Image
                      src={testimonial.picture}
                      alt={testimonial.name}
                      fill
                      sizes="50px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <QuoteIcon className="text-primary w-8 h-8 mb-4 mx-auto mt-8" />
                <p className="text-muted-foreground mb-4 text-center">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="text-center">
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
