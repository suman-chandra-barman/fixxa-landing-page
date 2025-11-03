"use client";

import { StackingCard } from "../Card/StackingCard";

const cards = [
  {
    index: 0,
    badge: "YOUR TIME BACK",
    heading: "Stop Typing. Start Talking.",
    description: "Every minute spent quoting is time you'll never get back.",
    subText:
      "You finish a long day on-site, then stare at a pile of quotes and invoices. Fixxa gives you that time back — so you can switch off earlier, not stay up late.",
    imageSrc: "/card_1.svg",
    backgroundColor: "bg-yellow-50",
    imagePosition: "right" as const,
  },
  {
    index: 1,
    badge: "CONFIDENCE IN EVERY JOB",
    heading: "You shouldn't lose work because of messy admin.",
    description:
      "Fixxa makes every quote look sharp and professional — without you lifting a finger.",
    subText: "Clients see confidence. You see results.",
    imageSrc: "/card_2.svg",
    backgroundColor: "bg-green-50",
    imagePosition: "right" as const,
  },
  {
    index: 2,
    badge: "INSTANT PAYMENTS",
    heading: "Frustrated with waiting to get paid?",
    description:
      "Send, track, and get paid instantly — no awkward follow-ups, no wasted time.",
    subText: "More time working. Less time worrying.",
    imageSrc: "/card_3.svg",
    backgroundColor: "bg-pink-50",
    imagePosition: "right" as const,
  },
];

export function StackingCardsSection() {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 sm:mb-16 lg:mb-20 font-urbanist font-medium">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-gray-900">
            Stop Typing. <span className="italic">Start Talking.</span>
          </h2>
          <p className="text-3xl sm:text-5xl lg:text-6x text-gray-600 max-w-5xl">
            Because your time belongs for what matters to you — not buried in
            admin
          </p>
        </div>

        {/* Stacking Cards */}
        <div className="relative">
          {cards.map((card) => (
            <StackingCard key={card.index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
