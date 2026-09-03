import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { PortraitImage } from "@/components/ui/PortraitImage";
import { LinkedText } from "@/components/ui/LinkedText";

export const metadata: Metadata = {
  title: "About — John Mthembu",
  description:
    "Creative Director, AI Developer, and Full-Stack Architect — 13+ years delivering brand, digital, and AI-powered solutions.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)] mb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-label text-stone mb-4">About</p>
            <h1 className="font-display text-display-xl max-w-3xl">John Mthembu</h1>
            <p className="mt-6 text-body-lg text-stone max-w-2xl">
              Creative Director · AI Developer · Full-Stack Architect · Digital
              Transformation Consultant
            </p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end max-w-sm w-full">
            <PortraitImage className="h-auto w-full object-cover" />
          </div>
        </div>
      </div>

      <AboutSection />

      <section className="section-padding">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
          <h2 className="font-display text-display-lg mb-12">Philosophy</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <blockquote className="font-editorial text-display-md text-charcoal">
              &ldquo;Design is not decoration. It&apos;s the bridge between an idea and
              the experience someone has with it.&rdquo;
            </blockquote>
            <div className="space-y-6 text-stone leading-relaxed">
              <p>
                I work at the intersection of creative direction and technology —
                building brand systems, shipping SaaS platforms, and advising on digital
                transformation. Design leadership and engineering are not separate lanes;
                they reinforce each other.
              </p>
              <p>
                Trained in Graphics &amp; Multimedia Design at Falcon Business Institute
                (2011–2014), with later certification in Outcomes-Based Assessments
                (NQF 5 &amp; 6). My path moved from agency craft at Hellocomputer / FCB
                into leadership, consultancy, and founding{" "}
                <LinkedText text="iCreativate" /> — where product strategy, UX, and
                AI-powered platforms meet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
