import Image from "next/image";
import SectionTitle from "@/components/section-title";
import { CheckCircle, Award } from "lucide-react";

export default function QualityCommitment() {
  const commitments = [
    "Rigorous caregiver screening and training",
    "Regular quality assessments and improvements",
    "Adherence to industry best practices",
    "Continuous education and skill development for our staff",
  ];

  return (
    <section className="py-24 px-4 mb-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto">
        <SectionTitle className="text-center mb-12">
          Our Commitment to Quality
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden rounded-lg">
          <div className="p-8 space-y-8">
            <p className="text-lg text-muted-foreground">
              At Essential Care, we are committed to providing the highest
              quality of care to our clients. Our dedication to excellence is
              reflected in every aspect of our service.
            </p>
            <ul className="space-y-6">
              {commitments.map((commitment, index) => (
                <li
                  key={index}
                  className="flex items-center p-4 bg-secondary/10 rounded-lg transform transition-all duration-300 hover:bg-secondary/20 hover:translate-x-2"
                >
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{commitment}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg transform -rotate-3"></div>
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Quality Care"
              fill
              className="object-cover rounded-r-lg relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-20" />
            <div className="absolute bottom-4 left-4 bg-background p-4 rounded-lg shadow-lg z-30 flex items-center space-x-2">
              <Award className="w-6 h-6 text-primary" />
              <p className="text-sm font-semibold text-primary">
                Certified Quality Care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
