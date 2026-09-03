"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Venture } from "@/types";
import { cn } from "@/lib/utils";

interface VentureCardProps {
  venture: Venture;
  index?: number;
}

const statusLabels: Record<Venture["status"], string> = {
  active: "Active",
  building: "Building",
  experimental: "Experimental",
};

export function VentureCard({ venture, index = 0 }: VentureCardProps) {
  const Wrapper = venture.link ? "a" : "div";
  const wrapperProps = venture.link
    ? {
        href: venture.link,
        target: "_blank",
        rel: "noopener noreferrer",
        "data-cursor": "pointer" as const,
      }
    : {};

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col border border-ivory/10 bg-dark-elevated p-6 lg:p-8 transition-colors hover:border-accent/30"
    >
      <Wrapper {...wrapperProps} className="flex flex-1 flex-col">
        <div className="relative mb-6 aspect-[3/2] overflow-hidden bg-ink/50">
          <Image
            src={venture.image}
            alt={venture.name}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <span
            className={cn(
              "text-label",
              venture.status === "active" && "text-accent",
              venture.status === "building" && "text-stone-light",
              venture.status === "experimental" && "text-stone-light/60"
            )}
          >
            {statusLabels[venture.status]}
          </span>
          {venture.link && (
            <span className="text-label text-stone-light/50 opacity-0 transition-opacity group-hover:opacity-100">
              Visit →
            </span>
          )}
        </div>

        <h3 className="font-display text-display-sm text-ivory mt-3">{venture.name}</h3>
        <p className="text-caption text-accent-muted mt-1">{venture.tagline}</p>
        <p className="mt-3 text-stone-light text-sm leading-relaxed flex-1">
          {venture.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {venture.tags.map((tag) => (
            <span
              key={tag}
              className="text-label text-stone-light/60 border border-ivory/10 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </Wrapper>
    </motion.article>
  );
}
