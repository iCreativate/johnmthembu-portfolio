"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const sectors = [
  { label: "Automotive", brands: ["Toyota", "Lexus"] },
  { label: "Telecom", brands: ["Cell C"] },
  { label: "Finance", brands: ["Investec", "FNB", "RMB", "Absa", "PPS"] },
  { label: "Consumer", brands: ["Coca-Cola", "Cadbury"] },
] as const;

export function ClientMarquee() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative"
      aria-labelledby="clients-heading"
    >
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)] py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-label text-stone mb-2">Experience across sectors</p>
            <h2
              id="clients-heading"
              className="font-display text-display-md tracking-tight text-ink"
            >
              Brands that{" "}
              <span className="font-editorial text-accent">shaped</span> the craft
            </h2>
          </div>
          <p className="max-w-xs text-caption text-stone sm:text-right">
            Agency & consultancy work across automotive, telecom, finance, and consumer.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-5 md:gap-6"
          role="list"
        >
          {sectors.map((sector, i) => (
            <li
              key={sector.label}
              className="flex flex-col gap-2 border-t border-ink/10 pt-4 sm:flex-row sm:items-baseline sm:gap-8 md:gap-12"
            >
              <span className="shrink-0 text-label text-accent sm:w-28">
                {sector.label}
              </span>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                {sector.brands.map((brand) => (
                  <span
                    key={brand}
                    className="font-display text-[clamp(1.25rem,2vw,1.65rem)] tracking-tight text-ink transition-colors duration-300 hover:text-accent"
                  >
                    {brand}
                  </span>
                ))}
              </div>
              <span className="hidden text-label text-stone/30 sm:ml-auto sm:inline">
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
