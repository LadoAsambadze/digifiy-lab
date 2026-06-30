import Hero from "@/components/sections/Hero";
import AiSpotlight from "@/components/sections/AiSpotlight";
import Services from "./_components/Services";
import WhyWebsite from "./_components/WhyWebsite";
import Portfolio from "./_components/Portfolio";
import Process from "./_components/Process";
import Testimonials from "./_components/Testimonials";
import Cta from "./_components/Cta";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      {/* ══ HERO 1 — flagship ══ */}
      <Hero />

      {/* ══ SERVICES ══ */}
      <Services />

      {/* ══ AI & AUTOMATION ══ */}
      <AiSpotlight />

      {/* ══ WHY WEBSITE ══ */}
      <WhyWebsite />

      {/* ══ PORTFOLIO ══ */}
      <Portfolio />

      {/* ══ PROCESS ══ */}
      <Process />

      {/* ══ TESTIMONIALS ══ */}
      <Testimonials />

      {/* ══ CTA ══ */}
      <Cta />
    </main>
  );
}
