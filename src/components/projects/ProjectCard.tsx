"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ImageReveal } from "@/components/ui/ImageReveal";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
  className?: string;
}

export function ProjectCard({ project, index = 0, className }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={cn("group", className)}
    >
      <Link href={`/work/${project.slug}`} className="block" data-cursor="pointer">
        <div className="relative overflow-hidden border border-ink/5 bg-ink/[0.03]">
          <ImageReveal
            src={project.thumbnail}
            alt={`${project.title} — ${project.description}`}
            aspectRatio="3/2"
            fit="contain"
            className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/[0.03]" />
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-display-sm transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <p className="mt-1 text-caption text-stone line-clamp-2">{project.description}</p>
          </div>
          <span className="text-label text-stone shrink-0">{project.year}</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-label text-stone/70 border border-stone/20 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-label text-accent link-hover"
          data-cursor="pointer"
        >
          Visit site →
        </a>
      )}
    </motion.article>
  );
}
