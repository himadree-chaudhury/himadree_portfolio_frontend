import { Card, CardContent } from "@/components/ui/card";

interface Technology {
  name: string;
  icon: string;
  category: string;
}

export default function TechStack() {
  const technologies: Technology[] = [
    // Frontend
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      category: "Frontend",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      category: "Frontend",
    },

    // Backend
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      category: "Backend",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      category: "Backend",
    },
    {
      name: "NestJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      category: "Backend",
    },

    // Database
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      category: "Database",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      category: "Database",
    },
    {
      name: "Redis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      category: "Database",
    },

    // Tools
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      category: "Tools",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      category: "Tools",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      category: "Tools",
    },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      category: "Tools",
    },
  ];

  const categories = ["Frontend", "Backend", "Database", "Tools"];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Technologies by Category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech) => (
                    <Card
                      key={tech.name}
                      className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 cursor-pointer"
                    >
                      <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                          {tech.name}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Proficiency Level
          </h3>
          <div className="space-y-6">
            {[
              { skill: "Frontend Development", level: 95 },
              { skill: "Backend Development", level: 90 },
              { skill: "Database Management", level: 85 },
              { skill: "DevOps & Deployment", level: 80 },
              { skill: "UI/UX Design", level: 75 },
            ].map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item.skill}
                  </span>
                  <span className="text-sm font-medium">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-slate-400 to-stone-900 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
