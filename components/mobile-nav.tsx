import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileNavSheet from "./mobile-nav-sheet";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { components, resources } from "@/components/nav-menu";
import Image from "next/image";
import logo from "@/public/ecslogo.png";

const combinedNavItems = [...components, ...resources];

export default function MobileNav() {
  return (
    <MobileNavSheet>
      <div className="flex flex-col items-center mb-6 pt-6">
        <Image
          src={logo}
          alt="Essential Care Services Logo"
          width={120}
          height={120}
          className="mb-4"
        />
        <DialogTitle className="text-2xl font-bold text-primary">
          Menu
        </DialogTitle>
      </div>
      <DialogDescription className="sr-only">
        Navigate through the menu items
      </DialogDescription>
      <div className="flex flex-col">
        {combinedNavItems.map(
          (item, index) =>
            item.href && (
              <MobileNavItem
                key={item.href}
                href={item.href}
                isLast={index === combinedNavItems.length - 1}
              >
                {item.title}
              </MobileNavItem>
            )
        )}
      </div>
    </MobileNavSheet>
  );
}

interface MobileNavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isLast?: boolean;
}

function MobileNavItem({
  href,
  className,
  children,
  isLast,
  ...props
}: MobileNavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "py-3 px-6 text-base transition-colors hover:bg-accent hover:text-accent-foreground",
        !isLast && "border-b border-border",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
