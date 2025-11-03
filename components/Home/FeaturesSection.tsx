import { FeatureCard } from "../Card/FeatureCard";
import feature1 from "@/public/feature_1.svg";
import feature2 from "@/public/feature_2.svg";
import feature3 from "@/public/feature_3.svg";

export function FeaturesSection() {
  const features = [
    {
      icon: feature1,
      title: "Quote faster. Work smarter.",
      description:
        "Turn your voice into a quote in seconds — no typing, no hassle.",
    },
    {
      icon: feature2,
      title: "Look like a pro. Win more jobs.",
      description: "Send branded quotes that show clients you mean business.",
    },
    {
      icon: feature3,
      title: "Instant payments. Less chasing.",
      description:
        "Get paid the moment your client accepts — no waiting, no awkward reminders, just cash in the bank.",
    },
  ];

  return (
    <section className="bg-[#F8F8FF] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
