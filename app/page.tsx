import { FeaturesSection } from "@/components/Home/FeaturesSection";
import { HeroSection } from "@/components/Home/HeroSection";
import { StackingCardsSection } from "@/components/Home/StackingCardsSection";
import { PricingSection } from "@/components/Home/PricingSection";
import { Footer } from "@/components/Home/Footer";
import { Navbar } from "@/components/Home/Navbar";
import AboutUsSection from "@/components/Home/OutStorySection";

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

      {/* ==== About us ==== */}
      <section id="aboutus">
        <AboutUsSection />
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
