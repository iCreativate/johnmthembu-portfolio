"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ImageReveal } from "@/components/ui/ImageReveal";
import type { Project } from "@/types";

interface CaseStudyPreviewProps {
  project: Project;
}

export function CaseStudyPreview({ project }: CaseStudyPreviewProps) {
  const nextProject = project; // placeholder for next project navigation in case study page

  return (
    <section className="section-padding border-t border-ink/10">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
        <p className="text-label text-stone mb-8">Next project</p>
        <Link href={`/work/${nextProject.slug}`} className="group block" data-cursor="pointer">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <ImageReveal
              src={nextProject.thumbnail}
              alt={nextProject.title}
              aspectRatio="16/10"
            />
            <div>
              <h3 className="font-display text-display-md transition-colors group-hover:text-accent">
                {nextProject.title}
              </h3>
              <p className="mt-3 text-body-lg text-stone">{nextProject.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-label">
                View project
                <motion.span className="inline-block group-hover:translate-x-1 transition-transform">
                  →
                </motion.span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
