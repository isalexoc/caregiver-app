"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function OpenCrispChat() {
  const openChat = () => {
    if (typeof window !== "undefined" && window.$crisp) {
      window.$crisp.push(["do", "chat:open"]);
    }
  };

  return (
    <Button onClick={openChat} variant="secondary" className="w-full md:w-auto">
      <MessageCircle className="mr-2 h-4 w-4" /> Live Chat
    </Button>
  );
}
