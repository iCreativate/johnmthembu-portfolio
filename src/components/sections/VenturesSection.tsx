"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ventures } from "@/data/ventures";
import { VentureCard } from "@/components/projects/VentureCard";

export function VenturesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const preview = ventures.slice(0, 6);

  return (
    <section
      ref={ref}
      className="section-dark section-padding"
      aria-labelledby="ventures-heading"
    >
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <p className="text-label text-stone-light mb-4">Ventures</p>
            <h2 id="ventures-heading" className="font-display text-display-lg text-ivory">
              Beyond client work, I build
            </h2>
            <p className="mt-4 text-stone-light">
              Products, platforms, and creative ventures — designing and building
              the things I believe should exist.
            </p>
          </div>
          <Link
            href="/ventures"
            className="text-label text-stone-light link-hover shrink-0"
            data-cursor="pointer"
          >
            All ventures →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((venture, i) => (
            <VentureCard key={venture.id} venture={venture} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
