import type { Metadata } from "next";
import { ventures } from "@/data/ventures";
import { VentureCard } from "@/components/projects/VentureCard";

export const metadata: Metadata = {
  title: "Ventures — John Mthembu",
  description:
    "Products and ventures built by John Mthembu — beyond client work, building products and platforms.",
};

export default function VenturesPage() {
  return (
    <div className="pt-32 pb-20 section-dark min-h-screen">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-margin)]">
        <p className="text-label text-stone-light mb-4">Ventures</p>
        <h1 className="font-display text-display-xl text-ivory max-w-3xl">
          Beyond client work, I build
        </h1>
        <p className="mt-6 text-body-lg text-stone-light max-w-xl">
          A collection of products, platforms, and creative ventures — from active
          businesses to experimental prototypes.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture, i) => (
            <VentureCard key={venture.id} venture={venture} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
