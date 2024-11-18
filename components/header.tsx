import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/app-components-theme-toggle";
import { Suspense } from "react";
import Image from "next/image";
import logo from "@/public/ecslogo.png";

function AuthButton() {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="btn btn-primary w-full h-full">Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <div className="flex justify-end">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
          />
        </div>
      </SignedIn>
    </>
  );
}

function LoadingButton() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="loading-pulse w-full h-full"></div>
    </div>
  );
}

export default function Header() {
  return (
    <header className="header">
      <nav className="container-custom header-nav">
        <Link href="/" className="link-primary relative h-10 w-32">
          <Image
            src={logo}
            fill
            sizes="120px"
            alt="Essential Care Services Logo"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="w-24 h-10">
            <Suspense fallback={<LoadingButton />}>
              <AuthButton />
            </Suspense>
          </div>
        </div>
      </nav>
    </header>
  );
}
