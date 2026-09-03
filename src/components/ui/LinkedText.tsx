import type { ReactNode } from "react";
import { getProductLinkPatterns } from "@/lib/product-links";

/**
 * Turns known product names and domains in plain text into external links.
 */
export function LinkedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const patterns = getProductLinkPatterns();
  const parts: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    let earliest: { index: number; length: number; href: string; match: string } | null =
      null;

    for (const { pattern, href } of patterns) {
      pattern.lastIndex = 0;
      const found = pattern.exec(remaining);
      if (!found || found.index === undefined) continue;
      if (!earliest || found.index < earliest.index) {
        earliest = {
          index: found.index,
          length: found[0].length,
          href,
          match: found[0],
        };
      }
    }

    if (!earliest) {
      parts.push(remaining);
      break;
    }

    if (earliest.index > 0) {
      parts.push(remaining.slice(0, earliest.index));
    }

    parts.push(
      <a
        key={`link-${key++}`}
        href={earliest.href}
        target="_blank"
        rel="noopener noreferrer"
        className="link-hover text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:decoration-accent"
        data-cursor="pointer"
      >
        {earliest.match}
      </a>
    );

    remaining = remaining.slice(earliest.index + earliest.length);
  }

  return <span className={className}>{parts}</span>;
}
