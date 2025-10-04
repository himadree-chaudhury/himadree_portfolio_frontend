import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export default function FeaturedProjects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/projects/ecommerce.jpg",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 2,
      title: "AI Chat Application",
      description:
        "Real-time chat application powered by AI with natural language processing and sentiment analysis.",
      image: "/projects/chat-app.jpg",
      tags: ["React", "Node.js", "Socket.io", "OpenAI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management System",
      description:
        "Collaborative project management tool with kanban boards, time tracking, and team collaboration features.",
      image: "/projects/task-manager.jpg",
      tags: ["Vue.js", "Express", "MongoDB", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and
            expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video bg-slate-200 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 text-slate-900 dark:text-white" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                      >
                        <Github className="h-5 w-5 text-slate-900 dark:text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
