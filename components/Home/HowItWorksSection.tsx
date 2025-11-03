"use client";

export function HowItWorksSection() {
  return (
    <section
      className="relative w-full py-16 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/how-it-work-bg.png')" }}
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:gap-12">
          {/* Left side - Heading */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-urbanist font-bold text-white mb-6 sm:mb-8 leading-tight">
              How Fixxa <span className="italic font-light">saves your</span>
              <br />
              <span className="italic">62% time</span>
            </h2>
          </div>

          {/* Right side - Video Player */}
          <div className="relative">
            {/* Video placeholder */}
            <div className="relative w-full max-w-sm aspect-video bg-black/60 rounded-lg overflow-hidden border border-gray-800">
              <video
                className="w-full h-full object-cover"
                src="/video/hero-video.mp4"
                controls
                autoPlay
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
