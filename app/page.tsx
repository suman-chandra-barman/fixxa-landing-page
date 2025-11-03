import { FeaturesSection } from "@/components/Home/FeaturesSection";
import { HeroSection } from "@/components/Home/HeroSection";
import { Navbar } from "@/components/Shared/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
