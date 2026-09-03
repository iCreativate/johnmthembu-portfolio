"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  aspectRatio?: string;
  /** cover crops to fill; contain shows the full image inside the frame */
  fit?: "cover" | "contain";
}

export function ImageReveal({
  src,
  alt,
  className,
  priority = false,
  fill = false,
  width,
  height,
  aspectRatio,
  fit = "cover",
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = usePrefersReducedMotion();
  const revealed = isInView || reducedMotion;
  const objectClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        fit === "contain" && "bg-ink/[0.04]",
        className
      )}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <motion.div
        initial={reducedMotion ? false : { scale: fit === "contain" ? 1 : 1.08 }}
        animate={revealed ? { scale: 1 } : { scale: fit === "contain" ? 1 : 1.08 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full w-full"
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className={objectClass}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width ?? 1536}
            height={height ?? 1024}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className={cn("h-full w-full", objectClass)}
          />
        )}

        {!reducedMotion && (
          <motion.div
            initial={{ y: "0%" }}
            animate={revealed ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="pointer-events-none absolute inset-0 z-10 bg-ivory"
            aria-hidden="true"
          />
        )}
      </motion.div>
    </div>
  );
}
