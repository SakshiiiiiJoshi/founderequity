"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

function Spotlight({ className, fill }) {
  return (
    <svg
      className={`animate-spotlight pointer-events-none absolute z-[1] h-[220%] w-[180%] lg:w-[120%] opacity-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter-spotlight)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter-spotlight"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="240"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Hero Images auto-cycling list
  const heroImages = useMemo(() => [
    { src: "/hero-slide-1.png", alt: "Business Partnership Meeting Handshake" },
    { src: "/hero-slide-2.png", alt: "Financial Analyst Pointing to Tablet Charts" },
    { src: "/hero-slide-3.png", alt: "Modern Corporate Skyscrapers" },
    { src: "/hero-slide-4.png", alt: "Financial Market Analytics Data Chart" }
  ], []);
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground selection:bg-accent-light selection:text-primary">
      
      {/* Navbar Section */}
      <header className="absolute top-4 z-50 w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between bg-white/95 backdrop-blur-md px-6 py-1.5 rounded-full border border-palette-slate/30 shadow-[0_10px_30px_rgba(56,73,89,0.12)] w-full transition-all duration-300">
          {/* Logo 1 - Wordmark + Icon */}
          <a href="#home" className="flex items-center gap-3 transition-opacity hover:opacity-90 pl-1">
            <Image
              src="/logo-full.png"
              alt="Founder's Equity Logo"
              width={200}
              height={100}
              priority
              className="h-14 w-auto object-contain py-1 mix-blend-multiply"
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-palette-dark/85">
            <a href="#home" className="transition-colors hover:text-accent">
              Home
            </a>
            <a href="#about" className="transition-colors hover:text-accent">
              About
            </a>
            <a href="#service" className="transition-colors hover:text-accent">
              Service
            </a>
            <a href="#contact" className="transition-colors hover:text-accent">
              Contact Us
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-palette-dark to-palette-slate px-6 py-2.5 text-[10px] font-bold uppercase tracking-wider text-background shadow-[0_4px_12px_rgba(56,73,89,0.25)] transition-all hover:shadow-[0_6px_20px_rgba(56,73,89,0.35)] hover:-translate-y-0.5 flex items-center gap-2"
            >
              Get in Touch <span className="text-xs">➔</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full p-2 text-palette-dark hover:bg-slate-100 focus:outline-none md:hidden mr-1"
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
          <div className="absolute top-18 left-4 right-4 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-palette-slate/30 shadow-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider text-palette-dark/85">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-accent border-b border-slate-100"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-accent border-b border-slate-100"
              >
                About
              </a>
              <a
                href="#service"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-accent border-b border-slate-100"
              >
                Service
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-accent border-b border-slate-100"
              >
                Contact Us
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center rounded-full bg-gradient-to-r from-palette-dark to-palette-slate py-3 text-xs font-bold uppercase tracking-wider text-background shadow-md flex items-center justify-center gap-2"
              >
                Get in Touch <span>➔</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden px-6 pt-32 pb-20 sm:px-8 lg:px-12 lg:pt-48 lg:pb-32 bg-palette-dark">
          {/* Spotlight overlay - positioned globally in the section background to cover the whole text without clipping */}
          <Spotlight className="-top-40 left-0 md:left-10 lg:left-20 md:-top-20" fill="white" />

          {/* Subtle gradient shapes in background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-primary-light/10 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-[400px] w-[400px] rounded-full bg-accent-light/15 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
              
              {/* Hero Text */}
              <div className="relative flex flex-col text-center lg:col-span-6 lg:text-left">
                <h1 className="font-serif-heading mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl uppercase relative z-10">
                  Your numbers have a story,<br />
                  we make sure investors believe it.
                </h1>

                <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <a
                    href="#contact"
                    className="rounded-full bg-palette-ice px-8 py-4 text-sm font-semibold text-primary shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-white hover:shadow-xl relative z-10"
                  >
                    Schedule Consultation
                  </a>
                  <a
                    href="#about"
                    className="rounded-full border border-white/30 bg-transparent px-8 py-4 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-white/10 hover:text-white relative z-10"
                  >
                    What &amp; Who We Are
                  </a>
                </div>
              </div>

              {/* Hero Graphic - Clean Auto-cycling Image Slideshow without Text */}
              <div className="lg:col-span-6 w-full flex items-center justify-end">
                <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] rounded-2xl border border-palette-slate bg-palette-ice shadow-2xl overflow-hidden">
                  {/* Cycling Image Container with Fade Transition */}
                  {heroImages.map((img, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        activeImageIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-w-md) 100vw, 500px"
                        className="object-cover"
                        priority={idx === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* What & Who We Are Section */}
        <section id="about" className="py-20 px-6 sm:px-8 lg:px-12 lg:py-28 border-t border-subtle bg-white">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="text-center">
              <p className="font-serif-heading mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                What &amp; Who we are...
              </p>
            </div>

            {/* Core Issues list */}
            <div className="mt-16 space-y-8">
              <div className="flex items-start gap-4 rounded-xl border border-subtle bg-background p-6 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-light text-sm font-bold text-primary">1</span>
                <div>
                  <h4 className="font-serif-heading text-lg font-bold text-primary">Startups chase funding, numbers no one believes.</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Growth models built in isolation often lack institutional feasibility. We bring institutional discipline to your spreadsheets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-subtle bg-background p-6 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-light text-sm font-bold text-primary">2</span>
                <div>
                  <h4 className="font-serif-heading text-lg font-bold text-primary">Bootstrapped ventures thriving on ground, invisible on paper.</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Operational profitability doesn't automatically translate to venture capital readiness. We structure your financials to make ground success leap off the paper.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-subtle bg-background p-6 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-light text-sm font-bold text-primary">3</span>
                <div>
                  <h4 className="font-serif-heading text-lg font-bold text-primary">VCs sitting across decks that collapse under one question.</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    A single unbacked dilution assumption can break investor trust. We ensure your cap table logic is bulletproof under intense partner scrutiny.
                  </p>
                </div>
              </div>
            </div>

            {/* Concluding Block */}
            <div className="mt-16 rounded-2xl border border-palette-slate bg-palette-ice p-8 text-center shadow-md">
              <h3 className="font-serif-heading text-2xl font-bold text-primary leading-snug">
                Valuation is the bridge between Story &amp; Numbers.<br />
                Most get it wrong.
              </h3>
              <p className="mt-4 font-serif-heading text-lg font-semibold text-accent">
                That's exactly what we build for.
              </p>
            </div>
          </div>
        </section>

        {/* Service Section */}
        <section id="service" className="bg-slate-50 py-20 px-6 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent">Capabilities</h2>
              <p className="font-serif-heading mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Our Services
              </p>
              <p className="mt-4 text-slate-600">
                Precision capital advisory services engineered to protect founders through seed, growth, and exit phases.
              </p>
            </div>

            {/* Simple Grid */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-2xl border border-palette-slate bg-palette-ice p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary border border-subtle">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-serif-heading mt-6 text-xl font-bold text-primary">Equity Structuring</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Custom-designed equity models for co-founders, early employees, and key advisors. We align early contributions with future capital realization.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-palette-slate bg-palette-ice p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary border border-subtle">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-serif-heading mt-6 text-xl font-bold text-primary">Venture Advisory</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Transaction guidance through capital raises. We analyze term sheets, model complex dilution impact, and evaluate governance distribution.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-palette-slate bg-palette-ice p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary border border-subtle">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif-heading mt-6 text-xl font-bold text-primary">Founder Liquidity</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Structured secondary sale frameworks that enable orderly liquidity events for founding teams during growth cycles without disrupting the cap table.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-20 px-6 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              
              {/* Contact Information */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-accent">Inquiries</h2>
                  <p className="font-serif-heading mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    Get in Touch
                  </p>
                  <p className="mt-4 text-slate-600 max-w-md">
                    Schedule a private advisory consultation. We will analyze your cap structure, simulate future funding rounds, and establish equity preservation strategies.
                  </p>

                  <div className="mt-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email</p>
                        <a href="mailto:advisory@foundersequity.com" className="text-sm font-semibold text-primary hover:underline">
                          advisory@foundersequity.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Location</p>
                        <p className="text-sm font-semibold text-primary">San Francisco, CA &amp; New York, NY</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge featuring Logo 2 */}
                <div className="hidden lg:flex items-center gap-4 border-t border-slate-200 pt-8 mt-12">
                  <Image
                    src="/logo-icon.png"
                    alt="Founder's Equity Icon"
                    width={40}
                    height={40}
                    className="h-10 w-auto object-contain opacity-40"
                  />
                  <p className="text-xs text-slate-400 leading-normal max-w-xs">
                    Aligned with founders. Designed to keep equity structures optimized, clean, and secure.
                  </p>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-palette-slate bg-palette-ice p-6 shadow-lg sm:p-8">
                  {formSubmitted ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-serif-heading text-lg font-bold text-primary mt-4">Message Sent</h3>
                      <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                        Thank you for reaching out. An advisor will contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="mt-2 w-full rounded-lg border border-palette-slate bg-white px-4 py-3 text-sm text-primary focus:border-primary focus:bg-white focus:outline-none"
                            placeholder="Alex Chen"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                            Work Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="mt-2 w-full rounded-lg border border-palette-slate bg-white px-4 py-3 text-sm text-primary focus:border-primary focus:bg-white focus:outline-none"
                            placeholder="alex@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="mt-2 w-full rounded-lg border border-palette-slate bg-white px-4 py-3 text-sm text-primary focus:border-primary focus:bg-white focus:outline-none"
                          placeholder="Tell us about your venture advisory or capital structuring goals..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-full bg-primary py-4 text-xs font-bold uppercase tracking-wider text-background shadow-md transition-all hover:bg-primary-hover hover:shadow-lg focus:outline-none"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer Section */}
      <footer className="border-t border-palette-slate bg-palette-dark py-12 px-6 sm:px-8 lg:px-12 text-slate-300">
        <div className="mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
            
            {/* Logo & Compliance (Left) */}
            <div className="md:col-span-6">
              <Image
                src="/logo-full.png"
                alt="Founder's Equity Logo"
                width={140}
                height={64}
                className="h-8 w-auto object-contain brightness-0 invert opacity-90"
              />
              <p className="mt-6 text-xs leading-relaxed text-slate-400 max-w-md">
                Disclaimer: Founder's Equity is a financial advisory and consulting firm. We do not provide legal, accounting, tax, or SEC broker-dealer services. All advisory models and illustrative summaries are for planning purposes.
              </p>
            </div>

            {/* Quick Links (Middle) */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-palette-ice">Website</h4>
              <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#service" className="hover:text-white transition-colors">Service</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Office Info (Right) */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-palette-ice">Office Contact</h4>
              <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                Founder's Equity Partners Inc.<br />
                One Maritime Plaza, Suite 1400<br />
                San Francisco, CA 94111<br />
                <a href="mailto:advisory@foundersequity.com" className="hover:text-white transition-colors font-medium text-slate-300">
                  advisory@foundersequity.com
                </a>
              </p>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 border-t border-slate-700/60 pt-6 flex flex-col justify-between gap-4 sm:flex-row text-[10px] font-semibold text-slate-400">
            <p>&copy; {new Date().getFullYear()} Founder's Equity Partners Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Advisory</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
