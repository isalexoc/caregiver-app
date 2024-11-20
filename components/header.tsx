import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import logo from "@/public/ecslogo.png";
import NavMenu from "./nav-menu";
import MobileNav from "./mobile-nav";
import ThemeToggle from "./app-components-theme-toggle";
import AuthButton from "./auth-button";
import LoadingButton from "./loading-button";

function LoadingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="w-32 h-8 bg-muted rounded animate-pulse" />
        <div className="flex space-x-2">
          <div className="w-10 h-10 bg-muted rounded-full animate-pulse" />
          <div className="w-20 h-10 bg-muted rounded animate-pulse" />
          <div className="w-10 h-10 bg-muted rounded-full animate-pulse" />
        </div>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense fallback={<LoadingHeader />}>
      <header className="flex justify-center items-center sticky top-0 z-50 w-full shadow-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex w-full h-14 items-center justify-between mx-2 md:mx-6">
          <Link href="/" className="mr-2 flex items-center space-x-2 h-32">
            <Image
              src={logo}
              alt="Essential Care Services Logo"
              width={150}
              className="object-cover"
            />
          </Link>
          <div className="hidden md:flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-2 text-sm font-medium">
              <NavMenu />
            </nav>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <ThemeToggle />
              <div className="w-20 h-10 flex items-center justify-center">
                <Suspense fallback={<LoadingButton />}>
                  <AuthButton />
                </Suspense>
              </div>
            </nav>
            <MobileNav />
          </div>
        </div>
      </header>
    </Suspense>
  );
}
