import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
      <div className="text-primary mb-6 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
