import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { CapabilitySection } from "@/components/sections/CapabilitySection";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { VenturesSection } from "@/components/sections/VenturesSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <CapabilitySection />
      <ClientMarquee />
      <SelectedProjects />
      <VenturesSection />
      <ExperienceTimeline compact />
      <AboutSection />
      <ContactCTA />
    </>
  );
}
