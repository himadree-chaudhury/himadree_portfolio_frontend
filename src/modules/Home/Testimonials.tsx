import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      image: "/testimonials/sarah.jpg",
      testimonial:
        "Working with this developer was an absolute pleasure. The attention to detail and commitment to delivering quality work exceeded our expectations. Our project was completed on time and within budget.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Digital Solutions",
      image: "/testimonials/michael.jpg",
      testimonial:
        "Exceptional technical skills combined with great communication. The developer understood our requirements perfectly and delivered a solution that transformed our business processes.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "StartupHub",
      image: "/testimonials/emily.jpg",
      testimonial:
        "Incredible work ethic and problem-solving abilities. They tackled complex challenges with ease and provided innovative solutions. Highly recommend for any web development project.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "CTO",
      company: "Innovation Labs",
      image: "/testimonials/david.jpg",
      testimonial:
        "A true professional who brings both technical expertise and creative thinking to every project. The quality of code and architectural decisions made were outstanding.",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      role: "Marketing Director",
      company: "Growth Co.",
      image: "/testimonials/lisa.jpg",
      testimonial:
        "The developer's ability to translate our vision into reality was impressive. They provided valuable insights and suggestions that improved the final product significantly.",
      rating: 5,
    },
    {
      name: "James Miller",
      role: "Business Owner",
      company: "Miller Enterprises",
      image: "/testimonials/james.jpg",
      testimonial:
        "Professional, reliable, and skilled. The project was delivered ahead of schedule with exceptional quality. Will definitely work together on future projects.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-slate-200 dark:border-slate-800"
            >
              <CardContent className="p-8 space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <Quote className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "100%", label: "Client Satisfaction" },
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
