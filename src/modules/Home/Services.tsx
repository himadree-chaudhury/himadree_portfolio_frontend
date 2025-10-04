import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Cloud,
  Database,
  Globe,
  Layout,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import React from "react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

export default function Services() {
  const services: Service[] = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Building responsive, fast, and modern web applications tailored to your needs.",
      features: [
        "Single Page Applications",
        "Progressive Web Apps",
        "RESTful APIs",
        "Real-time Features",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications with native-like performance.",
      features: [
        "React Native Apps",
        "Responsive Design",
        "Offline Support",
        "Push Notifications",
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description:
        "Designing intuitive and engaging user interfaces that users love.",
      features: [
        "Wireframing",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Developing complete e-commerce platforms with payment integration.",
      features: [
        "Shopping Cart",
        "Payment Gateway",
        "Inventory Management",
        "Order Tracking",
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Building robust and scalable backend systems with secure APIs.",
      features: [
        "RESTful APIs",
        "GraphQL",
        "Database Design",
        "Authentication",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "Deploying and maintaining applications with CI/CD pipelines.",
      features: [
        "AWS/Azure Setup",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Monitoring",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive solutions to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500"
            >
              <CardContent className="p-8 space-y-6">
                {/* Icon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="pt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
