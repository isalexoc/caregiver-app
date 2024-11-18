import Image from "next/image";
import SectionTitle from "@/components/section-title";
import { CheckCircle } from "lucide-react";

export default function QualityCommitment() {
  const commitments = [
    "Rigorous caregiver screening and training",
    "Regular quality assessments and improvements",
    "Adherence to industry best practices",
    "Continuous education and skill development for our staff",
  ];

  return (
    <section className="bg-muted py-12 px-4 mb-24">
      <div className="container mx-auto">
        <SectionTitle className="text-center">
          Our Commitment to Quality
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6">
              At Essential Care, we are committed to providing the highest
              quality of care to our clients. Our dedication to excellence is
              reflected in every aspect of our service.
            </p>
            <ul className="space-y-4">
              {commitments.map((commitment, index) => (
                <li
                  key={index}
                  className="flex items-center transform transition-all duration-300 hover:scale-105"
                >
                  <CheckCircle className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                  <span>{commitment}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
              alt="Quality Care"
              width={500}
              height={300}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
