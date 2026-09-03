"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { capabilities } from "@/data/capabilities";
import { staggerContainer, fadeUp } from "@/lib/motion";

export function CapabilitySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section-dark section-padding"
      aria-labelledby="capabilities-heading"
    >
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 max-w-2xl"
        >
          <p className="text-label text-stone-light mb-4">Capabilities</p>
          <h2 id="capabilities-heading" className="font-display text-display-lg text-ivory">
            What I bring to every project
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-px bg-ivory/10 md:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.id}
              variants={fadeUp}
              className="bg-dark-section p-8 lg:p-10"
            >
              <span className="text-label text-accent">{cap.number}</span>
              <h3 className="font-display text-display-sm text-ivory mt-4">{cap.title}</h3>
              <p className="mt-3 text-stone-light leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
