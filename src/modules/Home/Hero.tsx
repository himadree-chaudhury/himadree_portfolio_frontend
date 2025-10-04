import Profile from "@/assets/images/himadree-chaudhury.png";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto px-4 pb-20 lg:pb-32 pt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-4 py-2 rounded-full">
                  Available for opportunities
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Himadree Chaudhury
                </span>
              </h1>

              <p className="text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-300">
                Full Stack Developer
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Passionate about creating elegant solutions to complex problems.
                Specialized in building modern web applications with
                cutting-edge technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="https://drive.google.com/file/d/1P6UhNf6lhIyQJKW3qTQM7t7tNbQkMyVz/view?usp=sharing"
                  target="_blank"
                  download
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/himadree-chaudhury"
                target="_blank"
                className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/himadree-chaudhury/"
                target="_blank"
                className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              </Link>
              {/* <a
                href="mailto:himchy2001@gmail.com?subject=Hello&body=This%20is%20a%20test%20email."
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              </a> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  5+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  50+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Projects Done
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  30+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 rounded-3xl">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-2">
                  <Image
                    src={Profile}
                    alt="Profile"
                    className="w-80 h-96 lg:w-96 lg:h-[480px] object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      Available
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      For hire
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
