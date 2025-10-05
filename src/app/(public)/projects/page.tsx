import ProjectCard from "@/modules/project/public/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "List of all blogs",
};

const ProjectPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    cache: "no-store",
    next: {
      tags: ["projects"],
    },
  });
  const data = await res.json();
  const projects = data?.data;
  console.log(projects);

  return (
    <div>
      <h1 className="my-5">Projects</h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {projects &&
          projects.map(
            (project: {
              id: number;
              title: string;
              slug: string;
              description: string;
              poster: string;
              excerpt: string;
              views: number;
              createdAt: string;
              updatedAt: string;
            }) => <ProjectCard key={project.id} project={project} />
          )}
      </div>
    </div>
  );
};
export default ProjectPage;
