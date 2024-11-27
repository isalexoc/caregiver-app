import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Personal Care Assistance",
    href: "/services/personal-care",
    description: "Bathing, dressing, and hygiene assistance for daily living.",
  },
  {
    title: "In-Home Support",
    href: "/services/in-home-support",
    description: "Housekeeping, meal preparation, and mobility assistance.",
  },
  {
    title: "Companionship Services",
    href: "/services/companionship",
    description: "Social interaction and mental health support for well-being.",
  },
  {
    title: "Specialized Care",
    href: "/services/specialized-care",
    description: "Tailored care for elderly and chronic illness management.",
  },
  {
    title: "Medical Services",
    href: "/services/medical",
    description: "Medication reminders and health monitoring by professionals.",
  },
  {
    title: "Nutrition Support",
    href: "/services/nutrition",
    description:
      "Personalized meal planning and dietary guidance for optimal health.",
  },
  {
    title: "Exercise Support",
    href: "/services/exercise",
    description:
      "Tailored physical activity programs to maintain and improve mobility.",
  },
  {
    title: "Healthy Lifestyle Methodology",
    href: "/services/healthy-lifestyle",
    description:
      "Holistic approach to promote overall well-being and quality of life.",
  },
];

export const resources: { title: string; href: string; description: string }[] =
  [
    {
      title: "FAQs",
      href: "/resources/faqs",
      description: "Answers to common questions about our services and care.",
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Insightful articles on home care, health, and well-being.",
    },
    {
      title: "Testimonials",
      href: "/testimonials",
      description: "Hear from our clients and their families about our care.",
    },
    {
      title: "Caregiver Resources",
      href: "/resources/caregiver",
      description: "Guides and tips for caregivers to provide the best care.",
    },
    {
      title: "Insurance & Partnerships",
      href: "/resources/insurance-partnerships",
      description: "Information on insurance coverage and partnerships.",
    },
    {
      title: "Pricing",
      href: "/resources/pricing",
      description:
        "Details on our pricing and payment options for care services.",
    },
    {
      title: "For Families",
      href: "/resources/for-families",
      description: "Resources and support for families of loved ones in care.",
    },
    {
      title: "For Patients",
      href: "/resources/for-patients",
      description: "Information and resources for patients receiving care.",
    },
    {
      title: "Contact Us",
      href: "/contact",
      description: "Get in touch with us for inquiries, feedback, or support.",
    },
    {
      title: "Careers",
      href: "/resources/careers",
      description:
        "Join our team of compassionate caregivers and professionals.",
    },
    {
      title: "Elevator Pitch",
      href: "/resources/elevator-pitch",
      description:
        "Learn about our mission, values, and services in a nutshell. For investors and partners.",
    },
  ];

export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="p-2"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {resources.map((resource) => (
                <ListItem
                  key={resource.title}
                  title={resource.title}
                  href={resource.href}
                  className="p-2"
                >
                  {resource.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="relative flex h-full w-full select-none flex-col justify-end rounded-md no-underline outline-none focus:shadow-md overflow-hidden group"
                    href="/"
                  >
                    <Image
                      src="/team3.jpg"
                      alt="Essential Care Services background"
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="relative z-10 bg-black bg-opacity-50 p-6 w-full h-full flex flex-col justify-end">
                      <div className=" mb-2 text-lg font-medium text-white">
                        Essential Care Services
                      </div>
                      <p className="text-sm leading-tight text-gray-200">
                        Compassionate care for your loved ones, tailored to
                        their unique needs.
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about/#mission" title="Our Mission & Vision">
                Learn about our commitment to exceptional care.
              </ListItem>
              <ListItem href="/about/#team" title="Meet the Team">
                Get to know our dedicated caregivers and staff.
              </ListItem>
              <ListItem href="/about/#story" title="Our Story">
                Discover how we became leaders in home care services.
              </ListItem>
              <ListItem href="/contact" title="Contact Us">
                Reach out to us for inquiries, feedback, or support.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/testimonials" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Testimonials
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
