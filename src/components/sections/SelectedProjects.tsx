"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export function SelectedProjects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const selected = projects.filter((p) => !p.featured).slice(0, 6);

  return (
    <section ref={ref} className="section-padding" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-label text-stone mb-4">More projects</p>
          <h2 id="projects-heading" className="font-display text-display-lg">
            A curated selection
          </h2>
        </motion.div>

        <ProjectGrid projects={selected} />
      </div>
    </section>
  );
}
