"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { careerEras, careerJourney } from "@/data/experience";
import { PortraitImage } from "@/components/ui/PortraitImage";
import { LinkedText } from "@/components/ui/LinkedText";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = usePrefersReducedMotion();
  const onAboutPage = pathname === "/about";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const studioY = useTransform(scrollYProgress, [0, 1], [-8, 16]);

  return (
    <section
      ref={ref}
      className="relative section-dark section-padding overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(184,92,56,0.14),transparent_70%)] blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ivory/12 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-md">
              <motion.div
                style={reducedMotion ? undefined : { y: portraitY }}
                className="relative z-10 overflow-hidden border border-ivory/10"
              >
                <PortraitImage className="h-auto w-full object-cover" />
              </motion.div>

              <motion.div
                style={reducedMotion ? undefined : { y: studioY }}
                className="relative z-20 mt-4 w-[85%] overflow-hidden border border-ivory/10 sm:ml-auto lg:-mt-12"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/images/about/studio.png"
                    alt="Creative studio workspace"
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                </div>
              </motion.div>

              <p className="mt-5 text-label text-stone-light/45">
                Johannesburg · Since 2014
              </p>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-label text-stone-light mb-4">About</p>
            <h2
              id="about-heading"
              className="font-display text-display-lg tracking-tight text-ivory max-w-xl"
            >
              A journey from craft to{" "}
              <span className="font-editorial text-accent">creation</span>
            </h2>

            <p className="mt-6 text-body-lg text-stone-light leading-relaxed max-w-xl">
              Creative Director, AI Developer, and Full-Stack Architect — 13+ years
              delivering brand, digital, and AI-powered work for Toyota, Lexus,
              Coca-Cola, Cell C, Investec, FNB, RMB, Absa, and PPS.
            </p>
            <p className="mt-5 text-stone-light leading-relaxed max-w-xl">
              Founder of{" "}
              <a
                href="https://icreativate.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent link-hover"
                data-cursor="pointer"
              >
                iCreativate
              </a>
              . Design leadership meets engineering — shipping products like{" "}
              <LinkedText text="PropReady, Timely Mate, Timely Invoices, and Peboli" />.
            </p>

            {/* Compact evolution arc */}
            <div className="mt-10 border-t border-ivory/10 pt-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-label text-stone-light">Evolution</p>
                <p className="hidden text-caption text-stone-light/40 sm:block">
                  {careerJourney.length} stages · one path
                </p>
              </div>

              <ol
                className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4"
                role="list"
              >
                {careerEras.map((era, i) => {
                  const isLast = i === careerEras.length - 1;
                  return (
                    <motion.li
                      key={era.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                      className="relative"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="text-label text-accent/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "font-display text-display-sm",
                            isLast ? "text-accent" : "text-ivory"
                          )}
                        >
                          {era.label}
                        </span>
                        {!isLast && (
                          <span
                            className="hidden font-editorial text-ivory/25 sm:inline"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-caption text-stone-light leading-relaxed">
                        {era.summary}
                      </p>
                    </motion.li>
                  );
                })}
              </ol>

              {/* Compact stage strip — names only */}
              <ul
                className="mt-8 flex flex-wrap gap-x-1 gap-y-2 border-t border-ivory/[0.07] pt-6"
                role="list"
              >
                {careerJourney.map((step, i) => (
                  <li
                    key={step.stage}
                    className="flex items-center text-caption text-stone-light/70"
                  >
                    <span className="text-ivory/85">{step.stage}</span>
                    {i < careerJourney.length - 1 && (
                      <span className="mx-2 text-ivory/20" aria-hidden="true">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              {!onAboutPage && (
                <Link
                  href="/about"
                  className="text-label text-ivory link-hover"
                  data-cursor="pointer"
                >
                  More about me →
                </Link>
              )}
              <Link
                href="/experience"
                className="text-label text-accent link-hover"
                data-cursor="pointer"
              >
                Full timeline →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
