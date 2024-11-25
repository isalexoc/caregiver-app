import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

interface BlogHeaderProps {
  title: string;
}

export default function BlogHeader({ title }: BlogHeaderProps) {
  return (
    <div className="mb-8 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
      <div className="flex items-center text-sm text-muted-foreground mb-4">
        <Link
          href="/blog"
          className="flex items-center hover:text-blue-600 transition-colors duration-200"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          <span className="font-medium">Back to Blog</span>
        </Link>
      </div>
      <nav className="text-sm breadcrumbs">
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              href="/"
              className="flex items-center hover:text-blue-600 transition-colors duration-200"
            >
              <Home className="w-4 h-4 mr-1" />
              <span>Home</span>
            </Link>
          </li>
          <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
          <li>
            <Link
              href="/blog"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Blog
            </Link>
          </li>
          <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
          <li className="text-gray-600 dark:text-gray-300 font-medium truncate max-w-[200px] sm:max-w-[580px] md:max-w-[600]">
            {title}
          </li>
        </ol>
      </nav>
    </div>
  );
}
