"use client";

import { useState, useEffect, useMemo, useRef } from "react";
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

  // Dynamic scroll state to track which section is currently in viewport
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "service", "contact"];
      const scrollPosition = window.scrollY + 220; // Trigger line offset
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer state for scroll-reveal transition
  const aboutRef = useRef(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Dense ASCII dome data visualization matching the reference image exactly
  const asciiDome = useMemo(() => {
    const cols = 90; // Large horizontal resolution
    const rows = 23; // Large vertical density
    // Monospace band pattern for realistic ASCII visual scanning lines
    const rowChars = [
      "I", "|", "l", "-", "I", "|", "ll", "-", "I", "|", "l", "ll",
      "I", "|", "l", "-", "I", "|", "ll", "-", "I", "|", "ll"
    ];
    
    const result = [];
    for (let r = 0; r < rows; r++) {
      const cells = [];
      const char = rowChars[r % rowChars.length];
      for (let c = 0; c < cols; c++) {
        const dx = (c - (cols / 2)) / (cols / 2); // -1 to 1
        // Smooth parabolic dome mathematical boundary curve
        const threshold = Math.pow(Math.abs(dx), 1.7) * rows;
        if (r >= threshold) {
          // Opacity fades out radially towards the bottom/sides
          const dist = Math.sqrt(dx * dx + Math.pow((r - 2) / rows, 2));
          const opacity = Math.max(0.04, (1.1 - dist) * 0.9);
          cells.push({ char, opacity });
        } else {
          cells.push({ char: " ", opacity: 0 });
        }
      }
      result.push({ cells });
    }
    return result;
  }, []);

  // Hero/About Images list for the about section card slideshow
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
    }, 4000);
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
      <header className={`fixed top-6 z-50 w-full px-6 sm:px-8 lg:px-12 transition-all duration-500 ${
        activeSection === "home" ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"
      }`}>
        <div className="mx-auto max-w-7xl flex items-center justify-between w-full">
          
          {/* Left: Logo (Outside capsule, visible on dark background) */}
          <a href="#home" className="flex items-center gap-3 transition-opacity hover:opacity-90 pl-1">
            <Image
              src="/logo-v2.png"
              alt="Founder's Equity Logo"
              width={200}
              height={100}
              priority
              className="h-16 w-auto object-contain py-0.5"
            />
          </a>

          {/* Center: Central Floating Capsule Navigation Pill */}
          <nav className="hidden md:flex items-center bg-[#0b0c0e]/70 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider text-white/70 shadow-lg">
            <a 
              href="#home" 
              className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                activeSection === "home" ? "bg-palette-sky/20 text-palette-sky" : "hover:text-white"
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                activeSection === "about" ? "bg-palette-sky/20 text-palette-sky" : "hover:text-white"
              }`}
            >
              About
            </a>
            <a 
              href="#service" 
              className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                activeSection === "service" ? "bg-palette-sky/20 text-palette-sky" : "hover:text-white"
              }`}
            >
              Service
            </a>
            <a 
              href="#contact" 
              className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                activeSection === "contact" ? "bg-palette-sky/20 text-palette-sky" : "hover:text-white"
              }`}
            >
              Contact Us
            </a>
          </nav>

          {/* Right: Desktop CTA Button (Outside capsule) */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-black shadow-md hover:bg-neutral-100 transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              Get in Touch <span className="text-[10px]">➔</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full p-2 text-white hover:bg-white/10 focus:outline-none md:hidden mr-1"
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
          <div className="absolute top-18 left-6 right-6 bg-[#0b0c0e]/95 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
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
                Contact Us
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center rounded-full bg-white py-3 text-xs font-bold uppercase tracking-wider text-black shadow-md flex items-center justify-center gap-2"
              >
                Get in Touch <span>➔</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden px-6 pt-36 pb-12 sm:px-8 lg:px-12 lg:pt-48 lg:pb-16 hero-radial-bg">
          {/* Spotlight overlay */}
          <Spotlight className="-top-40 left-0 md:left-10 lg:left-20 md:-top-20" fill="white" />

          {/* Vertical Grid Line Aesthetics */}
          <div className="absolute inset-0 flex justify-between pointer-events-none opacity-10">
            <div className="w-[1px] h-full grid-line-glow left-[15%] absolute"></div>
            <div className="w-[1px] h-full grid-line-glow left-[50%] absolute"></div>
            <div className="w-[1px] h-full grid-line-glow left-[85%] absolute"></div>
          </div>

          {/* Subtle gradient shape glows (Emerald / Teal reference style signatures) */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-teal-500/10 blur-[130px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-[120px] -translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="mx-auto max-w-7xl relative z-10 flex flex-col items-center">
            
            

            {/* Main Centered Content */}
            <div className="max-w-4xl text-center flex flex-col items-center">
              <h1 className="font-sans text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl uppercase animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
                Your numbers have a story,<br />
                we make sure investors believe it.
              </h1>


              {/* Pill-shaped buttons */}
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row items-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-450">
                <a
                  href="#contact"
                  className="rounded-full bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg transition-all hover:bg-neutral-100 hover:scale-105 hover:shadow-xl"
                >
                  Schedule Consultation
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white/10 hover:scale-105 flex items-center gap-1.5"
                >
                  What &amp; Who We Are <span className="text-[14px]">↗</span>
                </a>
              </div>
            </div>

            {/* Dense wide ASCII dome (Bell Curve visual grid) */}
            <div className="mt-14 w-full max-w-5xl select-none pointer-events-none flex flex-col items-center animate-in fade-in duration-1000 delay-600">
              <div className="flex flex-col items-center font-mono tracking-[0.1em] text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] leading-tight select-none pointer-events-none">
                {asciiDome.map((row, rIdx) => (
                  <div key={rIdx} className="flex justify-center gap-[4px] whitespace-nowrap">
                    {row.cells.map((cell, cIdx) => (
                      <span 
                        key={cIdx} 
                        className="inline-block transition-opacity duration-300"
                        style={{ 
                          opacity: cell.opacity,
                          color: 'rgba(255, 255, 255, 0.85)',
                          width: '1ch',
                          textAlign: 'center'
                        }}
                      >
                        {cell.char}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </section>

        {/* What & Who We Are Section */}
        <section id="about" ref={aboutRef} className="py-20 px-6 sm:px-8 lg:px-12 lg:py-28 border-t border-slate-100 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Image Card with Overlay Stats */}
              <div className={`lg:col-span-5 w-full transition-all duration-1000 ease-out transform ${
                isAboutVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}>
                <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[480px] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-100 bg-palette-ice">
                  
                  {/* Fading slideshow image container */}
                  {heroImages.map((img, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        activeImageIndex === idx ? "opacity-100 z-0" : "opacity-0"
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

                  {/* Dark overlay gradient behind glass card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none" />

                  {/* Frosted Glass overlay card */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glassmorphic-card-light shadow-2xl z-20 max-w-[340px]">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-palette-dark/70">
                      Our Impact
                    </p>
                    <h4 className="font-sans text-lg font-extrabold text-primary mt-1">
                      Our Funds Over Time
                    </h4>
                    
                    <div className="mt-4 grid grid-cols-2 gap-4 border-t border-black/5 pt-3">
                      <div>
                        <p className="text-xl md:text-2xl font-sans font-extrabold text-primary tracking-tight">$35M</p>
                        <p className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Fund I (2024)</p>
                      </div>
                      <div>
                        <p className="text-xl md:text-2xl font-sans font-extrabold text-primary tracking-tight">$55M</p>
                        <p className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Fund II (2025)</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Title, Content description, list and Stat counters */}
              <div className={`lg:col-span-7 w-full flex flex-col justify-center transition-all duration-1000 ease-out delay-200 transform ${
                isAboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}>
                
                {/* Section title pill */}
                <div className="flex justify-start">
                  
                </div>

                <h2 className="font-sans mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl leading-tight">
                  A Family Office Built on Experience and Alignment
                </h2>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  We back search funds, independent sponsors, and long term holding companies with aligned capital and real-world expertise.
                </p>

                {/* Core Items Stacked */}
                <div className="mt-8 space-y-4">
                  
                  <div className="group flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/40 hover:bg-slate-50 transition-colors">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-palette-ice text-xs font-bold text-primary">1</span>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-primary">Startups chase funding, numbers no one believes.</h4>
                      <p className="mt-1 text-xs text-slate-500">
                        Growth models built in isolation often lack institutional feasibility. We bring institutional discipline to your spreadsheets.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/40 hover:bg-slate-50 transition-colors">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-palette-ice text-xs font-bold text-primary">2</span>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-primary">Bootstrapped ventures thriving on ground, invisible on paper.</h4>
                      <p className="mt-1 text-xs text-slate-500">
                        Operational profitability doesn't automatically translate to venture capital readiness. We structure your financials to make ground success leap off the paper.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/40 hover:bg-slate-50 transition-colors">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-palette-ice text-xs font-bold text-primary">3</span>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-primary">VCs sitting across decks that collapse under one question.</h4>
                      <p className="mt-1 text-xs text-slate-500">
                        A single unbacked dilution assumption can break investor trust. We ensure your cap table logic is bulletproof under intense partner scrutiny.
                      </p>
                    </div>
                  </div>

                </div>

                {/* More on Approach Link */}
                <div className="mt-6 flex justify-start">
                  <a 
                    href="#service"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-palette-dark hover:text-accent border-b border-palette-dark hover:border-accent pb-0.5 transition-all duration-300"
                  >
                    More on Our Approach ➔
                  </a>
                </div>

                {/* 3 Horizontal Stat Counters */}
                <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
                  <div>
                    <p className="text-3xl md:text-5xl font-sans font-extrabold text-primary tracking-tight">$90M+</p>
                    <p className="text-[10px] font-semibold text-slate-500 mt-1 uppercase tracking-wider leading-tight">Assets under advisory</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-5xl font-sans font-extrabold text-primary tracking-tight">25+</p>
                    <p className="text-[10px] font-semibold text-slate-500 mt-1 uppercase tracking-wider leading-tight">Transactions completed</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-5xl font-sans font-extrabold text-primary tracking-tight">18+</p>
                    <p className="text-[10px] font-semibold text-slate-500 mt-1 uppercase tracking-wider leading-tight">Years of experience</p>
                  </div>
                </div>

              </div>

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
                src="/logo-v2.png"
                alt="Founder's Equity Logo"
                width={175}
                height={80}
                className="h-10 w-auto object-contain opacity-90"
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

      {/* Floating Chat Bubble */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.16)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 group animate-bounce"
        style={{ animationDuration: '3s' }}
        aria-label="Contact advisory team"
      >
        {/* Active pulse dot */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white"></span>
        </span>
        {/* SVG Message Icon */}
        <svg
          className="h-6 w-6 text-slate-700 transition-colors group-hover:text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </a>

    </div>
  );
}
