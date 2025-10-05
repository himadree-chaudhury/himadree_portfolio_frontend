import BlogDetailsCard from "@/modules/blog/public/BlogDetailsCard";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blog = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${slug}`, {
    next: { revalidate: 10 },
  }).then((res) => res.json().then((data) => data?.data));

  return {
    title: blog?.title,
    description: blog?.content,
  };
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${slug}`, {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();
  const blog = data?.data;

    return <div>
      <BlogDetailsCard blog={blog} />
  </div>;
};
export default BlogDetailsPage;
