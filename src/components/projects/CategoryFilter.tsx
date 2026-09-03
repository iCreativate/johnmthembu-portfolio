"use client";

import { motion } from "motion/react";
import { PROJECT_CATEGORIES } from "@/types";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div
      className="flex gap-1 overflow-x-auto pb-2 scrollbar-none"
      role="tablist"
      aria-label="Filter projects by category"
    >
      {PROJECT_CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          role="tab"
          aria-selected={active === cat.id}
          onClick={() => onChange(cat.id)}
          className={cn(
            "relative shrink-0 px-4 py-2 text-label transition-colors",
            active === cat.id ? "text-ink" : "text-stone hover:text-ink"
          )}
          data-cursor="pointer"
        >
          {cat.label}
          {active === cat.id && (
            <motion.span
              layoutId="category-indicator"
              className="absolute bottom-0 left-4 right-4 h-px bg-accent"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
