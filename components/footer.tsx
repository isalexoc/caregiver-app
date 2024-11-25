import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Follow from "@/components/follow";
import { Suspense } from "react";
import OpenCrispChat from "@/components/open-crisp-chat";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">
              Essential Care Services
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Providing quality care services for those in need.
            </p>
            <Follow />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/data-privacy"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                >
                  Data Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">
              Contact Us
            </h3>

            <div className="flex flex-col space-y-2">
              <a
                href="https://maps.app.goo.gl/iEwh1FSAU9RYCTes8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 mt-1 hover:underline"
              >
                <div className="flex space-x-2 text-gray-700 dark:text-gray-300 items-center">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div className="flex flex-col">
                    <p>129 Pewter Lane Stafford VA, 22554</p>
                  </div>
                </div>
              </a>
              <a
                href="tel:+15406813507"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:underline"
              >
                <Phone className="h-5 w-5" />
                <span>(540) 681-3507</span>
              </a>
              <a
                href="mailto:info@ecservices.app"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:underline"
              >
                <Mail className="h-5 w-5" />
                <span>info@ecservices.app</span>
              </a>
              <Suspense fallback={<div>Loading...</div>}>
                <OpenCrispChat />
              </Suspense>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Essential Care. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
