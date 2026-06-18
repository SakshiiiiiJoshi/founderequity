"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      <header className="sticky top-0 z-50 w-full border-b border-subtle bg-glass backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
          {/* Logo 1 - Wordmark + Icon */}
          <a href="#home" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <Image
              src="/logo-full.png"
              alt="Founder's Equity Logo"
              width={200}
              height={100}
              priority
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#home" className="transition-colors hover:text-primary">
              Home
            </a>
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>
            <a href="#service" className="transition-colors hover:text-primary">
              Service
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact Us
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-background shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="border-t border-subtle bg-background px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4 text-base font-semibold text-slate-600">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-primary"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-primary"
              >
                About
              </a>
              <a
                href="#service"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-primary"
              >
                Service
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-primary"
              >
                Contact Us
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center rounded-full bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wider text-background shadow-sm hover:bg-primary-hover"
              >
                Get in Touch
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden px-6 pt-16 pb-20 sm:px-8 lg:px-12 lg:pt-24 lg:pb-32">
          {/* Subtle gradient shapes in background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-primary-light/35 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-[400px] w-[400px] rounded-full bg-accent-light/45 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
              
              {/* Hero Text */}
              <div className="flex flex-col text-center lg:col-span-7 lg:text-left">
                <div className="inline-flex items-center justify-center self-center rounded-full bg-accent-light px-4 py-1.5 text-xs font-bold tracking-wide text-primary lg:self-start">
            
                </div>
                <h1 className="font-serif-heading mt-6 text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl uppercase">
                  Your numbers have a story,<br />
                  we make sure investors believe it.
                </h1>
                
                {/* Custom SVG flow diagram matching notebook sketch */}
                <div className="mt-10 mb-6 flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4">
                  <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-subtle shadow-sm">
                    {/* Pulsing loading circle representation */}
                    <div className="relative flex h-6 w-6 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-30"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent"></span>
                    </div>
                    
                    {/* Animated connecting line */}
                    <svg className="w-12 h-2" viewBox="0 0 50 8" fill="none">
                      <path d="M0 4H50" stroke="#6A89A7" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_2s_linear_infinite]" />
                    </svg>

                    {/* FE Circle badge */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-background font-bold text-xs">
                      FE
                    </div>

                    {/* Connecting line */}
                    <svg className="w-12 h-2" viewBox="0 0 50 8" fill="none">
                      <path d="M0 4H50" stroke="#6A89A7" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_2s_linear_infinite]" />
                    </svg>

                    {/* Bain Capital Ventures text */}
                    <span className="text-xs font-bold tracking-wider text-primary uppercase">
                      Bain Capital Ventures
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 italic max-w-sm">
                    Aligning founder metrics with premier venture firms.
                  </p>
                </div>

                <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <a
                    href="#contact"
                    className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-background shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-xl"
                  >
                    Schedule Consultation
                  </a>
                  <a
                    href="#about"
                    className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-slate-50 hover:text-primary"
                  >
                    What &amp; Who We Are
                  </a>
                </div>
              </div>

              {/* Hero Graphic - Premium Glassmorphic Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-palette-slate bg-palette-ice p-8 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
                      <Image
                        src="/logo-icon.png"
                        alt="Founder's Equity Icon"
                        width={28}
                        height={28}
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif-heading text-base font-bold text-primary">Founder's Equity</h3>
                      <p className="text-xs text-slate-600 font-semibold">Valuation &amp; Capital Advisory</p>
                    </div>
                  </div>

                  {/* Clean abstract layout representing growth */}
                  <div className="mt-8 space-y-6">
                    <div className="rounded-lg bg-white p-4 border border-subtle">
                      <div className="flex justify-between text-xs text-slate-500 font-semibold">
                        <span>Equity Structure Optimization</span>
                        <span className="text-accent font-bold">Aligned</span>
                      </div>
                      <div className="mt-2.5 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "85%" }} />
                      </div>
                    </div>

                    <div className="rounded-lg bg-white p-4 border border-subtle">
                      <div className="flex justify-between text-xs text-slate-500 font-semibold">
                        <span>Vesting &amp; Dilution Modeling</span>
                        <span className="text-accent font-bold">Clear</span>
                      </div>
                      <div className="mt-2.5 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-slate-300 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary opacity-80">Institutional Strategy</p>
                    <p className="font-serif-heading mt-1 text-2xl font-bold text-primary">Strategic Alignment</p>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      We model complex exit scenarios, option pools, and cap table cascades to secure your financial legacy.
                    </p>
                  </div>
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
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent">Philosophy</h2>
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
