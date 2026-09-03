"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding" aria-labelledby="contact-cta-heading">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden border border-ink/10 p-10 lg:p-16"
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--ink) 0, var(--ink) 1px, transparent 1px, transparent 80px)",
            }}
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-label text-stone mb-4">Contact</p>
              <h2 id="contact-cta-heading" className="font-display text-display-lg">
                Let&apos;s work together
              </h2>
              <p className="mt-4 text-body-lg text-stone max-w-md">
                Whether it&apos;s a brand, a product, or an idea that needs shaping — I&apos;d
                love to hear about it.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <MagneticButton
                href="/contact"
                className="border border-ink bg-ink px-8 py-4 text-label text-ivory transition-colors hover:bg-charcoal"
              >
                Get in touch
              </MagneticButton>
              <MagneticButton
                href="mailto:john@icreativate.co.za"
                className="border border-ink/20 px-8 py-4 text-label text-ink transition-colors hover:border-ink"
              >
                john@icreativate.co.za
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
