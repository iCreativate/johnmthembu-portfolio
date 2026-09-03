"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { usePrefersReducedMotion, useMediaQuery } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export function CursorFollower() {
  const reducedMotion = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px) and (pointer: fine)");
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 280, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!isDesktop || reducedMotion) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor='pointer']");
      setHovering(!!interactive);
    };

    const handleDown = () => setClicking(true);
    const handleUp = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [isDesktop, reducedMotion, cursorX, cursorY]);

  if (!isDesktop || reducedMotion) return null;

  return (
    <motion.div
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-[9997] mix-blend-difference",
        "hidden lg:block"
      )}
      style={{ x, y }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          width: clicking ? 12 : hovering ? 48 : 24,
          height: clicking ? 12 : hovering ? 48 : 24,
          marginLeft: clicking ? -6 : hovering ? -24 : -12,
          marginTop: clicking ? -6 : hovering ? -24 : -12,
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-full border border-white bg-transparent"
      />
    </motion.div>
  );
}
