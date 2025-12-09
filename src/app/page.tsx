import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { DemoSection } from "@/components/home/DemoSection";
import { Testimonials } from "@/components/home/Testimonials";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQ } from "@/components/home/FAQ";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <HeroSection />
      <StatsSection />
      <ProblemSolution />
      <FeaturesGrid />
      <HowItWorks />
      <DemoSection />
      <Testimonials />
      <PricingSection />
      <FAQ />
      <CTASection />
    </main>
  );
}
