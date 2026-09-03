import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/ventures", label: "Ventures" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark section-padding">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-label text-stone-light mb-6">Get in touch</p>
            <h2 className="font-display text-display-lg text-ivory max-w-2xl">
              Have an idea worth building?
            </h2>
            <p className="font-editorial text-display-sm text-stone-light mt-4 max-w-lg">
              Let&apos;s create something meaningful.
            </p>
            <div className="mt-10">
              <MagneticButton
                href="/contact"
                className="group inline-flex items-center gap-3 border border-ivory/20 px-8 py-4 text-label text-ivory transition-colors hover:bg-ivory hover:text-ink"
              >
                Start a conversation
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </MagneticButton>
            </div>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3" role="list">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-label text-stone-light link-hover transition-colors hover:text-ivory"
                      data-cursor="pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-display-sm text-ivory/40">
            John Mthembu
          </p>
          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="https://www.linkedin.com/in/john-mthembu-2b8171122/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-label text-stone-light link-hover transition-colors hover:text-ivory"
              data-cursor="pointer"
            >
              LinkedIn
            </a>
            <p className="text-caption text-stone-light">
              © {year} John Mthembu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
