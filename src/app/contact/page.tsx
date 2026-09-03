import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Contact — John Mthembu",
  description:
    "Get in touch with John Mthembu for digital design, creative direction, and product design projects.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
        <div className="max-w-3xl">
          <p className="text-label text-stone mb-4">Contact</p>
          <h1 className="font-display text-display-xl">
            Have an idea worth building?
          </h1>
          <p className="font-editorial text-display-sm text-stone mt-4 max-w-lg">
            Let&apos;s create something meaningful.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-14 lg:items-start">
          <div className="lg:col-span-7">
            <h2 className="text-label text-stone mb-8">Send a message</h2>
            <ContactForm />
          </div>

          <aside className="lg:col-span-5 lg:pl-4">
            <div className="space-y-10 border-t border-ink/10 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <div>
                <h2 className="text-label text-stone mb-3">Email</h2>
                <a
                  href="mailto:john@icreativate.co.za"
                  className="font-display text-display-sm link-hover"
                  data-cursor="pointer"
                >
                  john@icreativate.co.za
                </a>
              </div>

              <div>
                <h2 className="text-label text-stone mb-3">Availability</h2>
                <p className="text-stone leading-relaxed">
                  Based in Johannesburg. Open to AI consulting, digital
                  transformation, product strategy, UX/UI engagements, and
                  collaborative ventures.
                </p>
              </div>

              <div>
                <h2 className="text-label text-stone mb-3">Social</h2>
                <a
                  href="https://www.linkedin.com/in/john-mthembu-2b8171122/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-display-sm link-hover"
                  data-cursor="pointer"
                >
                  LinkedIn
                </a>
              </div>

              <MagneticButton
                href="/work"
                className="border border-ink/20 px-6 py-3 text-label text-ink transition-colors hover:border-ink"
              >
                View my work →
              </MagneticButton>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
