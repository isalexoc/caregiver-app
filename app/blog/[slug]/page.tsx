import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import BlogHeader from "@/components/blog-header";

import { Metadata } from "next";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

interface BlogPostData {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: number;
  coverImage?: string;
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "blog-posts");
  const files = await fs.readdir(blogDir);
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const blogDir = path.join(process.cwd(), "blog-posts");
  const filePath = path.join(blogDir, `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data } = matter(fileContent);
    const postData = data as BlogPostData;

    return {
      title: `${postData.title} | Essential Care Services Blog`,
      description: postData.excerpt,
      openGraph: {
        title: postData.title,
        description: postData.excerpt,
        type: "article",
        publishedTime: postData.date,
        authors: [postData.author],
      },
    };
  } catch (error) {
    console.error("Error reading blog post:", error);
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-semibold mt-6 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-medium mt-4 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-4" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-4" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="mb-2" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic my-4"
      {...props}
    />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 my-4" {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-blue-600 hover:underline" {...props} />
  ),
};

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const blogDir = path.join(process.cwd(), "blog-posts");
  const filePath = path.join(blogDir, `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const postData = data as BlogPostData;

    return (
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <BlogHeader title={postData.title} />
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <div className="flex flex-wrap justify-between items-center text-sm text-muted-foreground mb-4">
            <div className="flex items-center mr-4 mb-2">
              <User className="w-4 h-4 mr-1" />
              {postData.author}
            </div>
            <div className="flex items-center mr-4 mb-2">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(postData.date).toLocaleDateString()}
            </div>
            <div className="flex items-center mb-2">
              <Clock className="w-4 h-4 mr-1" />
              {postData.readTime} min read
            </div>
          </div>
          {postData.coverImage && (
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={postData.coverImage}
                alt={postData.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          )}
        </div>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <MDXRemote source={content} components={components} />
        </div>
      </article>
    );
  } catch (error) {
    console.error("Error rendering blog post:", error);
    notFound();
  }
}
