import { HeroSection } from "../components/sections/HeroSection";
import { ProblemSection } from "../components/sections/ProblemSection";
import { FeaturesSection } from "../components/sections/FeaturesSection";
import { DocumentVersioningSection } from "../components/sections/DocumentVersioningSection";
import { HowItWorksSection } from "../components/sections/HowItWorksSection";
import { ForWhomSection } from "../components/sections/ForWhomSection";
import { PricingSection } from "../components/sections/PricingSection";
import { TrustSection } from "../components/sections/TrustSection";
import { CTASection } from "../components/sections/CTASection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <DocumentVersioningSection />
      <HowItWorksSection />
      <ForWhomSection />
      <PricingSection />
      <TrustSection />
      <CTASection />
    </>
  );
}
