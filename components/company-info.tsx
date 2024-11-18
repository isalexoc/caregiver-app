import { Heart, Shield, Users, Smile } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutUsSectionComponent() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-primary">Who We Are</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Essential Care Services is a leading provider of compassionate
              home care, dedicated to enhancing the quality of life for seniors
              and individuals with disabilities.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Our team of highly trained caregivers is committed to supporting
              our clients&apos; independence, dignity, and overall well-being.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                src: "/wwa1.jpg",
                alt: "Caregiver assisting an elderly person",
              },
              {
                src: "/wwa2.jpg",
                alt: "Home care equipment",
              },
              {
                src: "/wwa3.jpg",
                alt: "Caregiver and client smiling",
              },
              {
                src: "/wwa4.jpg",
                alt: "Medication management",
              },
            ].map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 h-36 lg:h-60 "
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Compassionate Care",
              description:
                "Our team is dedicated to providing care with empathy, understanding, and respect for each client's unique situation.",
              icon: Heart,
              color: "text-red-500",
            },
            {
              title: "Professional Excellence",
              description:
                "We maintain the highest standards of care through ongoing training, rigorous hiring practices, and adherence to industry best practices.",
              icon: Shield,
              color: "text-blue-500",
            },
            {
              title: "Personalized Approach",
              description:
                "We develop individualized care plans tailored to meet the specific needs, preferences, and goals of each client and their family.",
              icon: Users,
              color: "text-green-500",
            },
            {
              title: "24/7 Availability",
              description:
                "Our services are available round-the-clock, ensuring that our clients receive the care they need, whenever they need it.",
              icon: Shield,
              color: "text-purple-500",
            },
            {
              title: "Qualified Caregivers",
              description:
                "Our caregivers are carefully selected, thoroughly screened, and receive ongoing training to provide the best possible care.",
              icon: Users,
              color: "text-yellow-500",
            },
            {
              title: "Improved Quality of Life",
              description:
                "We strive to enhance our clients' overall well-being, promoting independence and bringing joy to their daily lives.",
              icon: Smile,
              color: "text-pink-500",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  <item.icon className={`w-8 h-8 mr-3 ${item.color}`} />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
