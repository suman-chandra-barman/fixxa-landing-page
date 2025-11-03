"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface StackingCardProps {
  index: number
  badge: string
  heading: string
  description: string
  subText: string
  imageSrc: string
  backgroundColor: string
  imagePosition: "left" | "right"
}

export function StackingCard({
  badge,
  heading,
  description,
  subText,
  imageSrc,
  backgroundColor,
  imagePosition,
}: StackingCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate scale and position based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        scale,
        opacity,
      }}
      className="sticky top-0 flex items-center justify-center"
    >
      <div
        className={`w-full container mx-auto px-4 sm:px-6 lg:px-8 py-12 rounded-2xl ${backgroundColor}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className={imagePosition === "right" ? "md:order-1" : "md:order-2"}
            initial={{ opacity: 0, x: imagePosition === "right" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 font-urbanist">
              <div className="inline-flex items-center gap-2 bg-white/30 px-3 py-1 rounded-full">
                <span className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide">{badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{heading}</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{description}</p>
              <p className="text-sm sm:text-base text-gray-600 italic pt-2">{subText}</p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className={imagePosition === "right" ? "md:order-2" : "md:order-1"}
            initial={{ opacity: 0, x: imagePosition === "right" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center justify-end">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt="Feature mockup"
                className="h-full object-cover rounded-xl"
                width={400}
                height={300}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
