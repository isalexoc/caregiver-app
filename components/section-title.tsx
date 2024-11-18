import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2 className={`text-3xl font-bold mb-8 text-primary ${className}`}>
      {children}
    </h2>
  );
}
