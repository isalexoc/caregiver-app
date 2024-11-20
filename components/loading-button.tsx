import { Button } from "@/components/ui/button";

interface LoadingButtonProps {
  className?: string;
}

export default function LoadingButton({ className }: LoadingButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`w-10 h-10 p-0 ${className}`}
      disabled
    >
      <div className="w-5 h-5 rounded-full border-2 border-current border-t-transparent animate-spin" />
      <span className="sr-only">Loading</span>
    </Button>
  );
}
