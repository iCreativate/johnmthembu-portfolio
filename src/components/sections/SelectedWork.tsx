"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { getFeaturedProjects } from "@/data/projects";
import { FeaturedProject } from "@/components/projects/FeaturedProject";

export function SelectedWork() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const featured = getFeaturedProjects().slice(0, 2);

  return (
    <section ref={ref} className="section-padding" aria-labelledby="selected-work-heading">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-label text-stone mb-4"
            >
              Selected work
            </motion.p>
            <motion.h2
              id="selected-work-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-display-lg max-w-xl"
            >
              Crafted with intention, built to perform
            </motion.h2>
          </div>
          <Link
            href="/work"
            className="text-label text-stone link-hover shrink-0"
            data-cursor="pointer"
          >
            View all work →
          </Link>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {featured.map((project, i) => (
            <FeaturedProject key={project.id} project={project} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
