import BlogCard from "@/modules/blog/public/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "List of all blogs",
};

const BlogPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    next: {
      tags: ["blogs"],
    },
  });
  const data = await res.json();
  const blogs = data?.data;
  console.log(blogs);

  return (
    <div>
      <h1 className="my-5">Blog Posts</h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {blogs &&
          blogs.map(
            (blog: {
              id: number;
              title: string;
              slug: string;
              poster: string;
              content: string;
              excerpt: string;
              published: boolean;
              authorId: number;
              views: number;
              createdAt: string;
              updatedAt: string;
            }) => <BlogCard key={blog.id} blog={blog} />
          )}
      </div>
    </div>
  );
};
export default BlogPage;
