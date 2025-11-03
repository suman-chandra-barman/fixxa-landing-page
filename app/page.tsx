import { FeaturesSection } from "@/components/Home/FeaturesSection";
import { HeroSection } from "@/components/Home/HeroSection";
import { HowItWorksSection } from "@/components/Home/HowItWorksSection";
import { Navbar } from "@/components/Shared/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
    </div>
  );
}
