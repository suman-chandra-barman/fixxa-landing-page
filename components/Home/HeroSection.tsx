"use client";

import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect, useCallback } from "react";

export function HeroSection() {
  const [videoState, setVideoState] = useState<"loading" | "playing" | "error">(
    "loading",
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedPlaying = useRef(false);

  const showVideo = useCallback(() => {
    if (!hasStartedPlaying.current) {
      hasStartedPlaying.current = true;
      setVideoState("playing");
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // If video is already playing or ready
    if (video.readyState >= 3 || !video.paused) {
      requestAnimationFrame(() => showVideo());
      return;
    }

    const handleCanPlayThrough = () => showVideo();
    const handlePlaying = () => showVideo();
    const handleTimeUpdate = () => {
      // If time is updating, video is definitely playing
      if (video.currentTime > 0) {
        showVideo();
      }
    };

    // Only show error after a timeout and if video never started
    let errorTimeout: ReturnType<typeof setTimeout>;
    const handleStalled = () => {
      errorTimeout = setTimeout(() => {
        if (!hasStartedPlaying.current && video.readyState < 3) {
          setVideoState("error");
        }
      }, 10000); // 10 second timeout
    };

    video.addEventListener("canplaythrough", handleCanPlayThrough);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("stalled", handleStalled);

    // Fallback: check video state after mount
    const checkInterval = setInterval(() => {
      if (video.readyState >= 3 || video.currentTime > 0) {
        showVideo();
        clearInterval(checkInterval);
      }
    }, 500);

    // Clear interval after 15 seconds regardless
    const clearFallback = setTimeout(() => {
      clearInterval(checkInterval);
      if (!hasStartedPlaying.current) {
        setVideoState("error");
      }
    }, 15000);

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("stalled", handleStalled);
      clearInterval(checkInterval);
      clearTimeout(clearFallback);
      clearTimeout(errorTimeout);
    };
  }, [showVideo]);

  const handleRetry = () => {
    hasStartedPlaying.current = false;
    setVideoState("loading");
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch(() => {});
    }
  };

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
            {videoState === "loading" && (
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
            {videoState === "error" && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/30 rounded-lg z-10">
                <div className="text-center p-6">
                  <p className="text-muted-foreground mb-3">
                    Unable to load video
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRetry}
                    className="rounded-full"
                  >
                    Retry
                  </Button>
                </div>
              </div>
            )}

            <video
              ref={videoRef}
              className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                videoState === "playing" ? "opacity-100" : "opacity-0"
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/video/hero-video-poster.jpg"
              aria-label="Hero demonstration video"
            >
              <source src="/video/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
