import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { About } from "@/components/About";
import { ProjectFocus } from "@/components/ProjectFocus";
import { HowItWorks } from "@/components/HowItWorks";
import { Governance } from "@/components/Governance";
import { WhySection } from "@/components/WhySection";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollFx } from "@/components/ScrollFx";

export default function HomePage() {
  return (
    <div className="min-h-screen min-h-[100svh]">
      <Header />
      <main>
        <Hero />
        <Mission />
        <About />
        <div className="facet-rule" aria-hidden="true">
          <svg viewBox="0 0 40 24" fill="none">
            <path
              d="M20 2 L34 12 L20 22 L6 12 Z"
              stroke="#B8901F"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M6 12 L20 16 L34 12 M20 2 V16"
              stroke="#B8901F"
              strokeWidth="1"
            />
          </svg>
        </div>
        <ProjectFocus />
        <HowItWorks />
        <Governance />
        <WhySection />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ScrollFx />
    </div>
  );
}
