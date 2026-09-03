"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { clients } from "@/data/clients";

export function ClientMarquee() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const doubled = [...clients, ...clients];

  return (
    <section ref={ref} className="section-padding overflow-hidden" aria-labelledby="clients-heading">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)] mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-label text-stone mb-4">Experience across sectors</p>
          <h2 id="clients-heading" className="font-display text-display-md max-w-lg">
            Brands & industries I&apos;ve worked within
          </h2>
          <p className="mt-3 text-caption text-stone max-w-md">
            Automotive, telecommunications, financial services, and consumer brands —
            including Toyota, Lexus, Coca-Cola, Cell C, Investec, FNB, RMB, Absa, and PPS.
          </p>
        </motion.div>
      </div>

      <div className="relative" aria-hidden="true">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ivory to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ivory to-transparent z-10" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex"
        >
          <motion.ul
            className="flex shrink-0 items-center gap-16 px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
            }}
            role="list"
          >
            {doubled.map((client, i) => (
              <li
                key={`${client.id}-${i}`}
                className="font-display text-display-sm text-ink/20 whitespace-nowrap select-none"
              >
                {client.name}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
