import { FeaturesSection } from "@/components/Home/FeaturesSection";
import { HeroSection } from "@/components/Home/HeroSection";
import { HowItWorksSection } from "@/components/Home/HowItWorksSection";
import JoinUsSection from "@/components/Home/JoinUsSection";
import OutStorySection from "@/components/Home/OutStorySection";
import { StackingCardsSection } from "@/components/Home/StackingCardsSection";
import { TestimonialSection } from "@/components/Home/TestimonialSection";
import { Footer } from "@/components/Shared/Footer";
import { Navbar } from "@/components/Shared/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StackingCardsSection />
      <HowItWorksSection />
      <TestimonialSection />
      <JoinUsSection />
      <OutStorySection />
      <Footer />
    </>
  );
}
