"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { experience } from "@/data/experience";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { LinkedText } from "@/components/ui/LinkedText";
import { getProductHref } from "@/lib/product-links";
import { cn } from "@/lib/utils";

function formatYears(entry: (typeof experience)[number]) {
  if (!entry.endYear) return `${entry.year} — Present`;
  if (entry.endYear === entry.year) return entry.year;
  return `${entry.year} — ${entry.endYear}`;
}

export function ExperienceTimeline({
  compact = false,
  showHeading = true,
}: {
  compact?: boolean;
  showHeading?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.85], ["0%", "100%"]);
  const entries = compact ? experience.slice(0, 3) : experience;

  return (
    <section
      ref={ref}
      className="relative section-padding overflow-hidden"
      aria-labelledby={showHeading ? "experience-heading" : undefined}
    >
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[42rem] w-[min(90vw,56rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(184,92,56,0.08),transparent_65%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 lg:mb-28"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-label text-stone mb-5">Experience</p>
                <h2
                  id="experience-heading"
                  className="font-display text-display-xl tracking-tight"
                >
                  A career{" "}
                  <span className="font-editorial text-accent">in motion</span>
                </h2>
                <p className="mt-6 max-w-xl text-body-lg text-stone">
                  From agency craft to founding products — roles that shaped a practice
                  across design, direction, and shipped software.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end">
                <p className="font-editorial text-display-md text-ink/25 leading-none">
                  2014 — Present
                </p>
                {compact && (
                  <Link
                    href="/experience"
                    className="text-label text-accent link-hover"
                    data-cursor="pointer"
                  >
                    Full timeline →
                  </Link>
                )}
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <span className="h-px flex-1 bg-ink/10" />
              <span className="text-label text-stone/50">
                {entries.length.toString().padStart(2, "0")} roles
              </span>
              <span className="h-px w-12 bg-accent/40" />
            </div>
          </motion.div>
        )}

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-[0.4375rem] top-3 bottom-3 w-px bg-ink/[0.08] lg:left-1/2 lg:-translate-x-px">
            {!reducedMotion && (
              <motion.div
                className="w-full origin-top bg-gradient-to-b from-accent via-accent to-accent/30"
                style={{ height: lineHeight }}
              />
            )}
          </div>

          <div className="flex flex-col gap-16 lg:gap-28">
            {entries.map((entry, i) => {
              const years = formatYears(entry);
              const leftSide = i % 2 === 0;

              return (
                <motion.article
                  key={entry.id}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.75,
                    delay: Math.min(i * 0.08, 0.32),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative grid grid-cols-1 gap-5 pl-10 lg:grid-cols-2 lg:gap-20 lg:pl-0"
                >
                  {/* Node */}
                  <motion.div
                    className="absolute left-0 top-3 z-10 lg:left-1/2 lg:-translate-x-1/2"
                    initial={reducedMotion ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    aria-hidden="true"
                  >
                    <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-accent/25" />
                      <span className="relative h-2 w-2 rounded-full bg-accent ring-[3px] ring-ivory" />
                    </span>
                  </motion.div>

                  {/* Meta column */}
                  <div
                    className={cn(
                      "lg:pt-0",
                      leftSide
                        ? "lg:col-start-1 lg:pr-16 lg:text-right"
                        : "lg:col-start-2 lg:row-start-1 lg:pl-16"
                    )}
                  >
                    <div
                      className={cn(
                        "flex flex-wrap items-baseline gap-x-3 gap-y-1",
                        leftSide && "lg:justify-end"
                      )}
                    >
                      <span className="text-label text-stone/45">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <time className="font-display text-display-sm text-accent tracking-tight">
                        {years}
                      </time>
                    </div>
                    <h3 className="font-display text-display-md mt-3 text-ink">
                      {entry.role}
                    </h3>
                    <p className="mt-2 text-caption text-stone">
                      <LinkedText text={entry.company} />
                    </p>
                  </div>

                  {/* Detail column */}
                  <div
                    className={cn(
                      leftSide
                        ? "lg:col-start-2"
                        : "lg:col-start-1 lg:row-start-1 lg:pr-16 lg:text-right"
                    )}
                  >
                    <p
                      className={cn(
                        "text-stone leading-relaxed max-w-xl",
                        !leftSide && "lg:ml-auto"
                      )}
                    >
                      <LinkedText text={entry.description} />
                    </p>

                    {entry.selectedWork.length > 0 && (
                      <ul
                        className={cn(
                          "mt-6 flex flex-wrap gap-x-5 gap-y-2",
                          !leftSide && "lg:justify-end"
                        )}
                        role="list"
                      >
                        {entry.selectedWork.map((work) => {
                          const href = getProductHref(work);
                          return (
                            <li key={work}>
                              {href ? (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-label text-accent link-hover"
                                  data-cursor="pointer"
                                >
                                  {work}
                                </a>
                              ) : (
                                <span className="text-label text-stone/55">
                                  {work}
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
