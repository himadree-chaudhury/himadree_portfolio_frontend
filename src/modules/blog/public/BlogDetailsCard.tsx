"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  slug: string;
  poster: string | null;
  content: string;
  excerpt: string;
  published: boolean;
  authorId: number;
  views: number;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string | null;
    image: string | null;
  };
  categories: Array<{
    categoryId: number;
    category: {
      name: string;
    };
  }>;
  tags: Array<string | null>;
  galleries: Array<string | null>;
}

interface BlogDetailsCardProps {
  blog: Blog;
  className?: string;
}

const BlogDetailsCard = ({ blog, className }: BlogDetailsCardProps) => {
  // Format dates
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <Card className={cn("max-w-3xl mx-auto my-8", className)}>
      <CardHeader>
        <h1 className="text-3xl font-bold text-foreground">{blog.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={blog.author.image ?? undefined}
                alt={blog.author.name ?? "Author"}
              />
              <AvatarFallback>
                {blog.author.name
                  ? blog.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                  : "NA"}
              </AvatarFallback>
            </Avatar>
            <span>{blog.author.name ?? "Unknown Author"}</span>
          </div>
          <span>·</span>
          <span>{formatDate(blog.createdAt)}</span>
          <span>·</span>
          <span>
            {blog.views} {blog.views === 1 ? "View" : "Views"}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        {/* Poster Image */}
        {blog.poster ? (
          <div className="relative w-full h-64 mb-6">
            <Image
              src={blog.poster}
              alt={blog.title}
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        ) : (
          <div className="w-full h-64 mb-6 bg-muted rounded-md flex items-center justify-center">
            <span className="text-muted-foreground">No Poster Image</span>
          </div>
        )}

        {/* Categories */}
        {blog.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.categories.map((cat) => (
              <Badge key={cat.categoryId} variant="secondary">
                <Link
                  href={`/categories/${cat.categoryId}`}
                  className="hover:underline"
                >
                  {cat.category.name}
                </Link>
              </Badge>
            ))}
          </div>
        )}

        {/* Excerpt */}
        {blog.excerpt && (
          <p className="text-muted-foreground italic mb-4">{blog.excerpt}</p>
        )}

        {/* Content */}
        <div
          className="prose prose-sm max-w-none text-foreground"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Tags */}
        {blog.tags.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag ?? tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Galleries */}
        {blog.galleries.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blog.galleries.map((gallery, index) => (
                <Image
                  key={index}
                  src={gallery ?? "/placeholder.png"}
                  alt="Gallery Image"
                  width={300}
                  height={200}
                  className="object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        )}

        {/* Meta Info */}
        <div className="mt-6 text-sm text-muted-foreground">
          <p>Updated: {formatDate(blog.updatedAt)}</p>
          <p>
            <Link href={`/blogs/${blog.slug}`} className="hover:underline">
              Permalink
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogDetailsCard;
