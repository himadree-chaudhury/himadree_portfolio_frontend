import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description:
        "Creating beautiful, intuitive interfaces with attention to detail",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description:
        "Optimizing applications for speed and exceptional user experience",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"></div>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p className="text-lg leading-relaxed">
                Im a passionate full-stack developer with over 5 years of
                experience in building web applications. I specialize in
                creating seamless user experiences and robust backend systems.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in tech started with a curiosity for how things work,
                which evolved into a career of solving complex problems through
                code. I believe in continuous learning and staying updated with
                the latest technologies.
              </p>
              <p className="text-lg leading-relaxed">
                When Im not coding, you can find me contributing to open-source
                projects, writing technical blog posts, or mentoring aspiring
                developers.
              </p>
            </div>
          </div>

          {/* Right Side - Highlights */}

          {/* Experience Timeline */}
          <Card className="border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Quick Facts
              </h3>
              <div className="space-y-3 text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>📍 Based in Chattogram, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>💼 Open to remote opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>🎓 Engineering Graduate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>🌟 Open Source Contributor</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800"
            >
              <CardContent className="p-2">
                <div>
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300 w-fit mb-2">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
