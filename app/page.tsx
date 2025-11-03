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

      {/* ==== HERO ==== */}
      <section id="home">
        <HeroSection />
      </section>

      {/* ==== FEATURES ==== */}
      <section id="features">
        <FeaturesSection />
      </section>

      {/* ==== STACKING CARDS ==== */}
      <section id="stacking-cards">
        <StackingCardsSection />
      </section>

      {/* ==== HOW IT WORKS ==== */}
      <section id="how-it-works">
        <HowItWorksSection />
      </section>

      {/* ==== TESTIMONIAL ==== */}
      <section id="testimonials">
        <TestimonialSection />
      </section>

      {/* ==== JOIN US ==== */}
      <section id="join-us">
        <JoinUsSection />
      </section>

      {/* ==== OUR STORY ==== */}
      <section id="story">
        <OutStorySection />
      </section>

      {/* ==== FOOTER ==== */}
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
