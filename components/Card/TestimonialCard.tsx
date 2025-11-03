"use client";

import Image, { StaticImageData } from "next/image";

interface TestimonialCardProps {
  image: string | StaticImageData;
  name: string;
  role: string;
}

export function TestimonialCard({ image, name, role }: TestimonialCardProps) {
  return (
    <div className="relative h-96 lg:h-[500px] w-full overflow-hidden rounded-lg shrink-0">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        className="h-full w-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />

      {/* Name and role at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm text-gray-300">{role}</p>
      </div>
    </div>
  );
}
