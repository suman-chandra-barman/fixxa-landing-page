"use client";

import { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TestimonialCard } from "../Card/TestimonialCard";
import user1 from "@/public/testimonial_1.jpg";
import user2 from "@/public/testimonial_2.jpg";
import user3 from "@/public/testimonial_3.jpg";
import user4 from "@/public/testimonial_4.jpg";

const testimonials = [
  {
    id: 1,
    image: user1,
    name: "Lana Yalo",
    role: "Electrician",
  },
  {
    id: 2,
    image: user2,
    name: "Alex Morgan",
    role: "Plumber",
  },
  {
    id: 3,
    image: user3,
    name: "John Doe",
    role: "Groundworker",
  },
  {
    id: 4,
    image: user4,
    name: "Lee Harris",
    role: "Painter & Decorator",
  },
  {
    id: 5,
    image: user1,
    name: "Lana Yalo",
    role: "Electrician",
  },
  {
    id: 6,
    image: user2,
    name: "Alex Morgan",
    role: "Plumber",
  },
  {
    id: 7,
    image: user3,
    name: "John Doe",
    role: "Groundworker",
  },
  {
    id: 8,
    image: user4,
    name: "Lee Harris",
    role: "Painter & Decorator",
  },
];

export function TestimonialSection() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiperInstance = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: "auto",
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    });

    setSwiper(swiperInstance);

    return () => {
      swiperInstance.destroy();
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            What tradespeople <span className="italic">thoughts</span>
          </h2>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <div ref={swiperRef} className="swiper">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="swiper-slide">
                  <TestimonialCard
                    image={testimonial.image}
                    name={testimonial.name}
                    role={testimonial.role}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
