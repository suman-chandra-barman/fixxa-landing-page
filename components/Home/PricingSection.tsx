export function PricingSection() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-urbanist font-bold mb-4">
            Simple, transparent pricing
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {/* Monthly Plan */}
          <div className="bg-[#F8F8FF] rounded-2xl p-8 border-2 border-border hover:border-foreground/20 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-4xl sm:text-5xl font-bold mb-2">£25</div>
              <div className="text-muted-foreground">/ month + VAT</div>
            </div>
          </div>

          {/* Annual Plan */}
          <div className="bg-[#F8F8FF] rounded-2xl p-8 border-2 border-foreground relative hover:border-foreground/80 transition-all duration-300">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-sm font-semibold">
              Save 20%
            </div>
            <div className="text-center mb-6">
              <div className="text-4xl sm:text-5xl font-bold mb-2">£240</div>
              <div className="text-muted-foreground">/ year + VAT</div>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              Save 20% with annual billing
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-[#F8F8FF] rounded-2xl p-8 sm:p-10">
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-foreground text-xl">✔</span>
              <span className="text-foreground font-medium">
                14
                -day free trial
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-foreground text-xl">✔</span>
              <span className="text-foreground font-medium">
                All features included (no tiered pricing)
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-foreground text-xl">✔</span>
              <span className="text-foreground font-medium">No contracts</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-foreground text-xl">✔</span>
              <span className="text-foreground font-medium">
                Cancel anytime
              </span>
            </div>
          </div>

          {/* Payment Section */}
          <div className="border-t border-border pt-8">
            <h3 className="text-xl font-urbanist font-bold mb-4">
              Pay only when you get paid
            </h3>
            <p className="text-foreground mb-2">
              <span className="font-semibold">1.75% + £0.20</span> per invoice
              paid via smart payment links
            </p>
            <p className="text-sm text-muted-foreground">
              (Stripe processing + Fixxa platform fee)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
