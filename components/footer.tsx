import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">
              Essential Care Services
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Providing quality care services for those in need.
            </p>
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
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">
              Contact Us
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              123 Care Street, City, State 12345
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Phone: (123) 456-7890
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Email: info@essentialcare.com
            </p>
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
