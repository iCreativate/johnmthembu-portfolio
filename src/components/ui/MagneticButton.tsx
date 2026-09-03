"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  "aria-label"?: string;
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  onClick,
  href,
  type = "button",
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const inner = (
    <motion.span
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  const baseClass = cn(
    "inline-flex items-center justify-center transition-colors duration-300",
    className
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        className="inline-block"
        data-cursor="pointer"
      >
        <a
          href={href}
          className={baseClass}
          aria-label={ariaLabel}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {inner}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="inline-block"
      data-cursor="pointer"
    >
      <button type={type} onClick={onClick} className={baseClass} aria-label={ariaLabel}>
        {inner}
      </button>
    </div>
  );
}
