"use client";

import Image from "next/image";
import logo from "@/public/logo_white.svg"
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/footer-bg.png)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto p-4 sm:p-8 lg:p-16 bg-linear-to-r from-[#1F151B] via-[#AD4D68] to-[#222545] rounded">
          {/* Main footer grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand section */}
            <div className="space-y-2">
              <Image src={logo} alt="logo"/>
              <p className="text-sm sm:text-base text-gray-200 max-w-xs mt-6">
                Making admin work disappear for freelancepeople everywhere
              </p>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h3 className="font-semibold text-white text-sm sm:text-base">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Terms of service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact us */}
            <div className="space-y-3">
              <h3 className="font-semibold text-white text-sm sm:text-base">
                Contact us
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="tel:+1234567890"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    +1234 567-7890
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:fixxa@example.com"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    fixxa@example.com
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div className="space-y-3">
              <h3 className="font-semibold text-white text-sm sm:text-base">
                Follow us
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    X (twitter)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 sm:mt-12 border-t border-white/10" />

          {/* Bottom copyright */}
          <div className="mt-6 sm:mt-8">
            <p className="text-center text-xs sm:text-sm text-gray-300">
              © 2025 FIXXA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
