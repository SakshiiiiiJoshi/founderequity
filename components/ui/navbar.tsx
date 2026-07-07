"use client";

import { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  activeSection: string;
  isLightSection: boolean;
}

export default function Navbar({ activeSection, isLightSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 z-50 w-full px-6 sm:px-8 lg:px-12 transition-all duration-500 translate-y-0 opacity-100">
      <div className="mx-auto max-w-7xl flex items-center justify-between w-full">

        {/* Left: Logo (Outside capsule, visible on dark/light backgrounds) */}
        <a href="#home" className="flex items-center gap-3 transition-opacity hover:opacity-90 pl-1">
          <Image
            src="/logo-v2.png"
            alt="Founder's Equity Logo"
            width={180}
            height={90}
            priority
            className={`h-12 md:h-[3.5rem] w-auto object-contain transition-all duration-300 ${isLightSection ? "invert" : ""
              }`}
          />
        </a>

        {/* Center: Central Floating Capsule Navigation Pill */}
        <nav className="hidden md:flex items-center bg-[#0D1B2A]/70 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10 text-[11px] font-bold uppercase tracking-wider text-white/70 shadow-lg gap-1">
          <a
            href="#home"
            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${activeSection === "home" ? "bg-palette-sky/20 text-palette-sky" : "hover:text-white"
              }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${activeSection === "about" ? "bg-palette-sky/20 text-palette-sky" : "hover:text-white"
              }`}
          >
            About
          </a>
          <a
            href="#service"
            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${activeSection === "service" ? "bg-[#38BDF8]/20 text-[#38BDF8]" : "hover:text-white"
              }`}
          >
            Service
          </a>
          <a
            href="#contact"
            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${activeSection === "contact" ? "bg-[#38BDF8]/20 text-[#38BDF8]" : "hover:text-white"
              }`}
          >
            Contact
          </a>
          <a
            href="#faq"
            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${activeSection === "faq" ? "bg-[#38BDF8]/20 text-[#38BDF8]" : "hover:text-white"
              }`}
          >
            FAQ
          </a>
        </nav>

        {/* Right: Desktop CTA Button (Outside capsule) */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className={`rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5 ${isLightSection
              ? "bg-[#050B14] text-white hover:bg-[#0B1528] shadow-[0_0_15px_rgba(0,0,0,0.1)]"
              : "bg-white text-black hover:bg-neutral-100"
              }`}
          >
            Get in Touch <span className="text-xs">➔</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`rounded-full p-2 focus:outline-none md:hidden mr-1 transition-all duration-300 ${isLightSection ? "text-slate-900 hover:bg-black/5" : "text-white hover:bg-white/10"
            }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="absolute top-18 left-6 right-6 bg-[#0D1B2A]/95 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider text-white/80">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b border-white/5 ${activeSection === "home" ? "text-palette-sky" : "hover:text-white"}`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b border-white/5 ${activeSection === "about" ? "text-palette-sky" : "hover:text-white"}`}
            >
              About
            </a>
            <a
              href="#service"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b border-white/5 ${activeSection === "service" ? "text-palette-sky" : "hover:text-white"}`}
            >
              Service
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b border-white/5 ${activeSection === "contact" ? "text-palette-sky" : "hover:text-white"}`}
            >
              Contact
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b border-white/5 ${activeSection === "faq" ? "text-palette-sky" : "hover:text-white"}`}
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center rounded-full bg-white py-3.5 text-sm font-bold uppercase tracking-wider text-black shadow-md flex items-center justify-center gap-2"
            >
              Get in Touch <span>➔</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
