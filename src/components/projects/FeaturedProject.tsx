"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ImageReveal } from "@/components/ui/ImageReveal";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface FeaturedProjectProps {
  project: Project;
  reversed?: boolean;
}

export function FeaturedProject({ project, reversed = false }: FeaturedProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div
        className={cn(
          "grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center",
          reversed && "lg:[&>*:first-child]:order-2"
        )}
      >
        <Link
          href={`/work/${project.slug}`}
          className="lg:col-span-7 block"
          data-cursor="pointer"
        >
          <ImageReveal
            src={project.heroImage}
            alt={`${project.title} — featured project`}
            aspectRatio="3/2"
            fit="contain"
            className="border border-ink/5 transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </Link>

        <div className="lg:col-span-5">
          <span className="text-label text-accent">Featured</span>
          <Link href={`/work/${project.slug}`} data-cursor="pointer">
            <h3 className="font-display text-display-md mt-4 transition-colors hover:text-accent">
              {project.title}
            </h3>
          </Link>
          <p className="mt-4 text-body-lg text-stone max-w-md">{project.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-caption text-stone">
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 text-label text-ink link-hover"
              data-cursor="pointer"
            >
              View case study
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-label text-accent link-hover"
                data-cursor="pointer"
              >
                Visit live site →
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
