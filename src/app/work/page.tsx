"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { CategoryFilter } from "@/components/projects/CategoryFilter";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) =>
      p.category.includes(activeCategory as (typeof p.category)[number])
    );
  }, [activeCategory]);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-label text-stone mb-4">Index</p>
          <h1 className="font-display text-display-xl max-w-3xl">Work</h1>
          <p className="mt-6 text-body-lg text-stone max-w-xl">
            A curated archive of digital design, product, branding, and experimental
            work — spanning client projects and personal ventures.
          </p>
        </motion.div>

        <div className="mb-12 sticky top-24 z-30 bg-ivory/90 backdrop-blur-md py-4 -mx-[var(--page-margin)] px-[var(--page-margin)]">
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>

        <ProjectGrid projects={filtered} />
      </div>
    </div>
  );
}
