import { HeroSection } from "@/components/Home/HeroSection";
import { Navbar } from "@/components/Shared/Navbar";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <HeroSection />
    </div>
  );
}
