import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CrispChat from "@/components/crisp-chat";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Essential Care Services | Compassionate Home Care",
  description:
    "Essential Care Services provides high-quality, personalized home care services for seniors and individuals with disabilities. Our compassionate caregivers offer assistance with daily living, companionship, and specialized care.",
  keywords:
    "home care, senior care, disability care, caregivers, companionship, personal assistance, medical care, Essential Care Services",
  authors: [{ name: "Essential Care Services Team" }],
  openGraph: {
    title: "Essential Care Services | Compassionate Home Care",
    description:
      "Providing high-quality, personalized home care services for seniors and individuals with disabilities.",
    url: "https://www.ecservices.app",
    siteName: "Essential Care Services",
    images: [
      {
        url: "https://www.ecservices.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Essential Care Services - Compassionate Home Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Care Services | Compassionate Home Care",
    description:
      "High-quality, personalized home care services for seniors and individuals with disabilities.",
    images: ["https://www.ecservices.app/twitter-image.png"],
    creator: "@EssentialCare",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://www.ecservices.app",
    languages: {
      "en-US": "https://www.ecservices.app",
      "es-ES": "https://www.ecservices.app/es",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#4a90e2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} antialiased flex flex-col min-h-screen`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <CrispChat />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
