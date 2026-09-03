import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience — John Mthembu",
  description:
    "Career timeline of John Mthembu — from designer to creative director, product designer, and entrepreneur.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-24 md:pt-28">
      <ExperienceTimeline />
    </div>
  );
}
