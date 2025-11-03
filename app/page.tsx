import { FeaturesSection } from "@/components/Home/FeaturesSection";
import { HeroSection } from "@/components/Home/HeroSection";
import { HowItWorksSection } from "@/components/Home/HowItWorksSection";
import OutStorySection from "@/components/Home/OutStorySection";
import { Navbar } from "@/components/Shared/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <OutStorySection />
    </div>
  );
}
