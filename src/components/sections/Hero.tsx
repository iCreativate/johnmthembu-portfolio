"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const heroImages = [
  { src: "/images/hero/collage-01.png", alt: "Creative design workspace", className: "col-span-2 row-span-2" },
  { src: "/images/hero/collage-02.png", alt: "Modern architecture project", className: "col-span-1" },
  { src: "/images/hero/collage-03.png", alt: "TFT Bible Class digital platform", className: "col-span-1" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-end pb-16 pt-32 lg:pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--page-margin)]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 lg:items-end">
          <motion.div
            className="lg:col-span-7"
            style={reducedMotion ? {} : { y, opacity }}
          >
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-label text-stone mb-8"
            >
              Creative Director · AI Developer · Full-Stack Architect
            </motion.p>

            <motion.h1
              id="hero-heading"
              initial={reducedMotion ? false : { opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-display-xl max-w-4xl"
            >
              I don&apos;t just make things look good.{" "}
              <span className="text-stone">I design experiences,</span>{" "}
              solve problems{" "}
              <span className="font-editorial text-accent">and turn ideas into products.</span>
            </motion.h1>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="text-body-lg text-stone max-w-md">
                13+ years delivering brand, digital, and AI-powered solutions —
                from enterprise campaigns to shipped SaaS platforms.
              </p>

              <div className="flex gap-4">
                <MagneticButton
                  href="/work"
                  className="border border-ink px-6 py-3 text-label text-ink transition-colors hover:bg-ink hover:text-ivory"
                >
                  View work
                </MagneticButton>
                <MagneticButton
                  href="/about"
                  className="px-6 py-3 text-label text-stone link-hover"
                >
                  About
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:col-span-5 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-3"
            style={reducedMotion ? {} : { y: imageY }}
            initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            <div className={`relative overflow-hidden ${heroImages[0].className} min-h-[280px]`}>
              <Image
                src={heroImages[0].src}
                alt={heroImages[0].alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 0vw, 25vw"
              />
            </div>
            {heroImages.slice(1).map((img, i) => (
              <div key={img.src} className={`relative overflow-hidden min-h-[136px]`}>
                <motion.div
                  className="relative h-full w-full"
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.1 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 0vw, 15vw"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Mobile hero image */}
          <motion.div
            className="relative aspect-[16/10] overflow-hidden lg:hidden"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/images/hero/collage-01.png"
              alt="Selected creative work"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 h-px w-full origin-left bg-ink/10"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
