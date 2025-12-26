import { FeaturesSection } from "@/components/Home/FeaturesSection";
import { HeroSection } from "@/components/Home/HeroSection";
import OutStorySection from "@/components/Home/OutStorySection";
import { StackingCardsSection } from "@/components/Home/StackingCardsSection";
import { PricingSection } from "@/components/Home/PricingSection";
import { Footer } from "@/components/Home/Footer";
import { Navbar } from "@/components/Home/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ==== HERO ==== */}
      <section id="home">
        <HeroSection />
      </section>

      {/* ==== FEATURES ==== */}
      <section id="features">
        <FeaturesSection />
      </section>

      {/* ==== STACKING CARDS ==== */}
      <StackingCardsSection />


      {/* ==== HOW IT WORKS, TESTIMONIAL, JOIN US ==== */}
      {/* <HowItWorksSection />
        <TestimonialSection />
        <JoinUsSection /> */}

      {/* ==== OUR STORY ==== */}
      <section id="story">
        <OutStorySection />
      </section>

       {/* ==== PRICING ==== */}
      <section id="pricing">
        <PricingSection />
      </section>

      {/* ==== FOOTER ==== */}
      <Footer />
    </>
  );
}
