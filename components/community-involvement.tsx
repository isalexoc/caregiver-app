import Image from "next/image";
import SectionTitle from "@/components/section-title";
import { CheckCircle } from "lucide-react";

export default function CommunityInvolvement() {
  const initiatives = [
    "Partnerships with local senior centers",
    "Volunteer programs for our staff",
    "Educational workshops for family caregivers",
    "Sponsorship of community health events",
  ];

  return (
    <section className="py-12 px-4 mb-24">
      <div className="container mx-auto">
        <SectionTitle className="text-center">
          Community Involvement
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
              alt="Community Involvement"
              width={500}
              height={300}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div>
            <p className="text-lg mb-6">
              We believe in giving back to the communities we serve. Essential
              Care actively participates in various community initiatives and
              supports local organizations.
            </p>
            <ul className="space-y-4">
              {initiatives.map((initiative, index) => (
                <li
                  key={index}
                  className="flex items-center transform transition-all duration-300 hover:scale-105"
                >
                  <CheckCircle className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                  <span>{initiative}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
