import { FeatureCard } from "../Card/FeatureCard";
import feature1 from "@/public/feature_1.svg";
import feature2 from "@/public/feature_2.svg";
import feature3 from "@/public/feature_3.svg";

export function FeaturesSection() {
  const features = [
    {
      icon: feature1,
      title: "Quote faster. Work smarter.",
      subtitle1: "75% of customers choose the first quote they receive.",
      subtitle2: "→ Speed = more wins. Fixxa puts you first every time.",
    },
    {
      icon: feature2,
      title: "Look like a pro. Win more jobs.",
      subtitle1: "Professional quotes increase client trust by 3× and boost win rates by 18%.",
      subtitle2: "→ A clean, branded quote instantly sets you apart.",
    },
    {
      icon: feature3,
      title: "Instant payments. Less chasing.",
      subtitle1: "Trades who offer instant pay links get paid 2–3× faster than those who send bank details manually.",
      subtitle2: "→ No more chasing. Just cash in the bank.",
    },
  ];

  return (
    <section className="bg-[#F8F8FF] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
