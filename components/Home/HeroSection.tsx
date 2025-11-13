"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-urbanist font-bold leading-tight text-balance">
              Tired of wasting{" "}
              <span className="relative inline-block">hours on</span>{" "}
              <span className="italic font-medium">quotes and admin?</span>
            </h1>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              Fixxa turns your voice into ready-to-send quotes and invoices — so
              you can spend less time on paperwork, and more time doing the work
              that pays.
            </p>

            <Button
              size="lg"
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold px-8"
            >
              Get My Time Back
            </Button>
          </div>

          {/* Right Video */}
          <div className="relative h-96 sm:h-full min-h-96 lg:min-h-[600px]">
            <video
              className="shadow-lg w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/video/hero-video-poster.jpg"
              aria-label="Hero demonstration video"
            >
              <source src="/video/hero-video.webm" type="video/webm" />
              <source src="/video/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
