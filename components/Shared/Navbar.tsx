"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import logo from "@/public/logo.svg";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "How it works", href: "#how" },
    { label: "Demo", href: "#demo" },
    { label: "Our story", href: "#story" },
    { label: "Get", href: "#get" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="rounded-full border-foreground text-foreground hover:bg-foreground/10 bg-transparent"
            >
              Amend to get my time back
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground hover:bg-muted/50"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full rounded-full">
              Amend to get my time back
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
