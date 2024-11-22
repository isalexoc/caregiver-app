"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MobileNavSheetProps {
  children: React.ReactNode;
}

export const SheetContext = React.createContext<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({ setOpen: () => {} });

export default function MobileNavSheet({ children }: MobileNavSheetProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <SheetContext.Provider value={{ setOpen }}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 p-2 text-2xl hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:hidden"
          >
            <Menu className="mobile-nav-icon" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] sm:w-[350px] p-0 bg-gradient-to-b from-background to-accent/10"
          onPointerDownOutside={() => setOpen(false)}
        >
          <div className="flex justify-end p-4">
            <SheetClose asChild>
              <Button
                variant="ghost"
                className="p-2 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
              >
                <span className="sr-only">Close Menu</span>
              </Button>
            </SheetClose>
          </div>
          <ScrollArea className="h-[calc(100vh-80px)]">{children}</ScrollArea>
        </SheetContent>
      </Sheet>
    </SheetContext.Provider>
  );
}
