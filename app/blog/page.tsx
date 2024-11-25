import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ChevronRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogPagination from "@/components/blog-pagination";

const POSTS_PER_PAGE = 6;

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: number;
  coverImage: string;
  content: string;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  const blogDir = path.join(process.cwd(), "blog-posts");
  const files = await fs.readdir(blogDir);

  const posts: BlogPost[] = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(blogDir, file);
      const content = await fs.readFile(filePath, "utf8");
      const { data, content: postContent } = matter(content);
      return {
        slug: file.replace(/\.mdx?$/, ""),
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        author: data.author,
        readTime: data.readTime,
        coverImage: data.coverImage,
        content: postContent,
      };
    })
  );

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const paginatedPosts = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Essential Care Blog
          </h1>
          <p className="text-xl md:text-2xl opacity-80">
            Insights, tips, and stories about caregiving
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post) => (
            <Card
              key={post.slug}
              className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={
                    post.coverImage || `/placeholder.svg?height=192&width=384`
                  }
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col space-y-3 border-t pt-4">
                <div className="flex justify-between items-center w-full text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center justify-center text-white dark:text-black"
                  >
                    Read more <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <BlogPagination
            currentPage={page}
            totalPages={Math.ceil(posts.length / POSTS_PER_PAGE)}
          />
        </div>
      </div>
    </div>
  );
}
