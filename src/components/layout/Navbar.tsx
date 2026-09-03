"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/ventures", label: "Ventures" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-[var(--page-margin)] pt-4 md:pt-5">
        <motion.nav
          initial={false}
          animate={{
            y: 0,
            boxShadow: scrolled
              ? "0 12px 40px -16px rgba(17,17,16,0.18)"
              : "0 8px 28px -18px rgba(17,17,16,0.1)",
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "pointer-events-auto mx-auto flex max-w-[var(--content-max)] items-center justify-between gap-4 rounded-2xl border px-4 py-3 backdrop-blur-xl transition-[background-color,border-color] duration-500 md:px-5",
            scrolled || menuOpen
              ? "border-ink/10 bg-ivory/85"
              : "border-ink/5 bg-ivory/55"
          )}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-display text-[1.05rem] font-medium tracking-tight text-ink transition-colors hover:text-accent md:text-display-sm"
            data-cursor="pointer"
          >
            John Mthembu
          </Link>

          <ul className="hidden items-center gap-1 lg:flex" role="list">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative block rounded-xl px-3 py-2 text-label transition-colors",
                      active
                        ? "bg-ink/[0.06] text-ink"
                        : "text-stone hover:bg-ink/[0.04] hover:text-ink"
                    )}
                    data-cursor="pointer"
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-ink transition-colors hover:bg-ink/[0.06] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-md lg:hidden"
          >
            <nav
              className="flex h-full flex-col justify-center px-[var(--page-margin)] pt-20"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-5" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "font-display text-display-lg transition-colors",
                        pathname === link.href ? "text-accent" : "text-ivory"
                      )}
                      data-cursor="pointer"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
