import Image from "next/image";
import SectionTitle from "@/components/section-title";
import { CheckCircle, Heart } from "lucide-react";

export default function CommunityInvolvement() {
  const initiatives = [
    "Partnerships with local senior centers",
    "Volunteer programs for our staff",
    "Educational workshops for family caregivers",
    "Sponsorship of community health events",
  ];

  return (
    <section className="py-24 px-4 mb-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto">
        <SectionTitle className="text-center mb-12">
          Community Involvement
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg transform rotate-3"></div>
            <Image
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Community Involvement"
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full h-auto relative z-10"
            />
            <div className="absolute -bottom-4 -left-4 bg-background p-4 rounded-lg shadow-lg z-20 flex items-center space-x-2">
              <Heart className="w-6 h-6 text-red-500" />
              <p className="text-sm font-semibold text-primary">
                Caring for Our Community
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              We believe in giving back to the communities we serve. Essential
              Care actively participates in various community initiatives and
              supports local organizations.
            </p>
            <ul className="space-y-4">
              {initiatives.map((initiative, index) => (
                <li
                  key={index}
                  className="flex items-center p-4 bg-card rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:translate-x-2"
                >
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{initiative}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
