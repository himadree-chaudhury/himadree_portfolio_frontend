"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ExternalLinkIcon } from "lucide-react";

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  poster: string | null;
  excerpt: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  links: Array<{
    name: string;
    url: string;
  }>;
  technologies: Array<{
    technologyId: number;
    technology: {
      name: string;
    };
  }>;
  galleries: Array<any>;
}

interface ProjectDetailsCardProps {
  project: Project;
  className?: string;
}

const ProjectDetailsCard = ({
  project,
  className,
}: ProjectDetailsCardProps) => {
  // Format dates
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <Card className={cn("max-w-3xl mx-auto my-8", className)}>
      <CardHeader>
        <h1 className="text-3xl font-bold text-foreground">{project.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{formatDate(project.createdAt)}</span>
          <span>·</span>
          <span>
            {project.views} {project.views === 1 ? "View" : "Views"}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        {/* Poster Image */}
        {project.poster ? (
          <div className="relative w-full h-64 mb-6">
            <Image
              src={project.poster}
              alt={project.title}
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        ) : (
          <div className="w-full h-64 mb-6 bg-muted rounded-md flex items-center justify-center">
            <span className="text-muted-foreground">No Poster Image</span>
          </div>
        )}

        {/* Technologies */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech.technologyId} variant="secondary">
                {tech.technology.name}
              </Badge>
            ))}
          </div>
        )}

        {/* Excerpt */}
        {project.excerpt && (
          <p className="text-muted-foreground italic mb-4">{project.excerpt}</p>
        )}

        {/* Description */}
        <div className="prose prose-sm max-w-none text-foreground mb-6">
          <div dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <div className="flex flex-wrap gap-2">
              {project.links.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex items-center gap-1"
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                    <ExternalLinkIcon className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Galleries */}
        {project.galleries.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.galleries.map((gallery, index) => (
                <Image
                  key={index}
                  src={gallery.url ?? "/placeholder.png"}
                  alt={gallery.alt ?? `Gallery image ${index + 1}`}
                  width={300}
                  height={200}
                  className="object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        )}

        {/* Meta Info */}
        <div className="text-sm text-muted-foreground">
          <p>Updated: {formatDate(project.updatedAt)}</p>
          <p>
            <Link
              href={`/projects/${project.slug}`}
              className="hover:underline"
            >
              Permalink
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDetailsCard;
