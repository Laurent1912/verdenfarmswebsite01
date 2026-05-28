import Hero from "@/components/Hero";
import ImpactHighlights from "@/components/ImpactHighlights";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyVerden from "@/components/WhyVerden";
import OurImpact from "@/components/OurImpact";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactHighlights />
      <About />
      <Services />
      <WhyVerden />
      <OurImpact />
      <Projects />
      <Team />
      <FAQ />
      <Gallery />
      <Partners />
      <Contact />
      <FinalCTA />
    </>
  );
}
