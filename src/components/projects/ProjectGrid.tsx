"use client";

import { AnimatePresence } from "motion/react";
import type { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { FeaturedProject } from "./FeaturedProject";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: Project[];
  variant?: "default" | "curated";
}

export function ProjectGrid({ projects, variant = "default" }: ProjectGridProps) {
  if (variant === "curated") {
    return (
      <div className="flex flex-col gap-20 lg:gap-28">
        <AnimatePresence mode="popLayout">
          {projects.map((project, i) => {
            if (project.layout === "editorial" || project.layout === "full-width") {
              return (
                <div key={project.id} className="full">
                  <FeaturedProject project={project} reversed={i % 2 === 1} />
                </div>
              );
            }

            if (project.layout === "two-column") {
              return (
                <div
                  key={project.id}
                  className="grid grid-cols-1 gap-8 md:grid-cols-2"
                >
                  <ProjectCard project={project} index={i} />
                  {projects[i + 1] && projects[i + 1].layout !== "editorial" ? (
                    <ProjectCard project={projects[i + 1]} index={i + 1} />
                  ) : null}
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className={cn(
                  project.layout === "vertical" && "max-w-md",
                  project.layout === "typography" && "max-w-2xl mx-auto",
                  project.layout === "image-heavy" && "lg:max-w-4xl"
                )}
              >
                <ProjectCard project={project} index={i} />
              </div>
            );
          })}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <AnimatePresence mode="popLayout">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </AnimatePresence>
    </div>
  );
}
