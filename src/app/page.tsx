import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { StackSection } from "@/components/StackSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { personSchema, portfolioSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      <Hero />
      <WorkSection />
      <ExpertiseSection />
      <StackSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
