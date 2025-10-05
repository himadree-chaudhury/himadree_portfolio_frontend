import ProjectDetailsCard from "@/modules/project/public/ProjectDetailsCard";

// export const generateStaticParams = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`);
//   const data = await res.json();

//   return data?.data
//     .slice(0, 2)
//     .map(
//       (project: {
//         id: number;
//         title: string;
//         slug: string;
//         description: string;
//         poster: string;
//         excerpt: string;
//         views: number;
//         createdAt: string;
//         updatedAt: string;
//       }) => ({
//         slug: project.slug,
//       })
//     );
// };

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${slug}`,
  ).then((res) => res.json().then((data) => data?.data));

  return {
    title: project?.title,
    description: project?.content,
  };
};

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${slug}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const data = await res.json();
  const project = data?.data;

  return (
    <div>
      <ProjectDetailsCard project={project} />
    </div>
  );
};
export default ProjectDetailsPage;
