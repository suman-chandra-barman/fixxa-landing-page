"use client";

import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

export function HeroSection() {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if video is already ready (cached) - defer to avoid sync setState
    if (video.readyState >= 3) {
      requestAnimationFrame(() => {
        setIsVideoLoading(false);
      });
    }

    const handleCanPlay = () => {
      setIsVideoLoading(false);
      setHasVideoError(false);
    };

    const handlePlaying = () => {
      setIsVideoLoading(false);
      setHasVideoError(false);
    };

    const handleError = () => {
      // Only show error if no valid source could be loaded
      if (video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
        setIsVideoLoading(false);
        setHasVideoError(true);
      }
    };

    const handleWaiting = () => {
      // Video is buffering, but don't show loading if it already played
      if (video.readyState < 3 && video.currentTime === 0) {
        setIsVideoLoading(true);
      }
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("error", handleError);
    video.addEventListener("waiting", handleWaiting);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("error", handleError);
      video.removeEventListener("waiting", handleWaiting);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 sm:pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10 py-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-urbanist font-bold leading-tight sm:leading-tight lg:leading-tight">
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
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 cursor-pointer"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Right Video */}
          <div className="relative h-96 sm:h-full min-h-96 lg:min-h-[600px]">
            {/* Loading Spinner */}
            {isVideoLoading && !hasVideoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/20 backdrop-blur-sm z-10 rounded-lg">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border-4 border-foreground/20 border-t-foreground rounded-full animate-spin" />
                  <p className="text-sm text-muted-foreground">
                    Loading video...
                  </p>
                </div>
              </div>
            )}

            {/* Error Fallback */}
            {hasVideoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/30 rounded-lg">
                <div className="text-center p-6">
                  <p className="text-muted-foreground">Unable to load video</p>
                </div>
              </div>
            )}

            <video
              ref={videoRef}
              className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                isVideoLoading ? "opacity-0" : "opacity-100"
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
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
