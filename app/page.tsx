"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import { Rocket, Lightbulb, Building2, TrendingUp, Users, Target, ChevronDown } from "lucide-react";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

function Spotlight({ className, fill }: SpotlightProps) {
  return (
    <svg
      className={`animate-spotlight pointer-events-none absolute z-[1] h-[220%] w-[180%] lg:w-[120%] opacity-0 ${className || ""}`}
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

interface FAQItem {
  q: string;
  a: string;
}

interface Cell {
  char: string;
  opacity: number;
}

interface Row {
  cells: Cell[];
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
  const isLightSection = activeSection === "about" || activeSection === "contact" || activeSection === "footer";
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const faqs: FAQItem[] = [
    {
      q: "What types of businesses do you value?",
      a: "We provide valuation services for startups, MSMEs, privately held companies, family-owned businesses, listed companies, and growth-stage enterprises across diverse industries."
    },
    {
      q: "Do you value businesses that are not yet profitable?",
      a: "Yes. We value pre-revenue, early-stage, and loss-making businesses by assessing their growth potential, market opportunity, business model, competitive positioning, and future cash flow prospects."
    },
    {
      q: "Can you help us avoid unnecessary dilution or accepting a lower valuation?",
      a: "Yes. We provide independent, well-supported valuations that strengthen your position during fundraising, equity negotiations, mergers, acquisitions, and strategic transactions."
    },
    {
      q: "How long does the valuation process take?",
      a: "Most valuation engagements are completed within 24 to 48 hours, depending on the scope of work, business complexity, and availability of the required information."
    },
    {
      q: "Can you justify your valuation if investors challenge it?",
      a: "Yes. Every valuation is supported by transparent assumptions, robust financial analysis, industry benchmarks, and internationally recognized valuation methodologies, making it easier to defend during discussions with investors and stakeholders."
    },
    {
      q: "How do you protect our confidential business information?",
      a: "Client confidentiality is fundamental to our practice. All information shared with us is handled securely, and we are happy to execute a Non-Disclosure Agreement (NDA) whenever required."
    },
    {
      q: "What makes Founder's Equity different?",
      a: "Every valuation is tailored to your business, industry, growth stage, and valuation objective. We don't rely on generic templates—we deliver independent, research-driven, and decision-focused valuations designed to support fundraising, strategic planning, and long-term value creation."
    },
    {
      q: "How are your valuation fees determined?",
      a: "Our fees are based on the scope of engagement, business complexity, valuation purpose, reporting requirements, and turnaround timeline. We provide a transparent quotation before commencing any engagement."
    },
    {
      q: "How do we get started?",
      a: "Simply schedule an introductory consultation. We'll understand your requirements, define the scope of work, share a tailored proposal, and guide you through the entire valuation process."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "service", "contact", "faq", "footer"];

      // Force footer active when scrolled to the absolute bottom of the page
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);
      if (isAtBottom) {
        setActiveSection("footer");
        return;
      }

      const scrollPosition = window.scrollY + 100; // Trigger line offset closer to header
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
  const aboutRef = useRef<HTMLDivElement>(null);
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
  const asciiDome = useMemo<Row[]>(() => {
    const cols = 90; // Large horizontal resolution
    const rows = 23; // Large vertical density
    // Monospace band pattern for realistic ASCII visual scanning lines
    const rowChars = [
      "I", "|", "l", "-", "I", "|", "ll", "-", "I", "|", "l", "ll",
      "I", "|", "l", "-", "I", "|", "ll", "-", "I", "|", "ll"
    ];

    const result: Row[] = [];
    for (let r = 0; r < rows; r++) {
      const cells: Cell[] = [];
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

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

      <main className="flex-grow">

        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden">
          <HeroParallaxDemo />
        </section>

        {/* What & Who We Are Section */}
        <section id="about" ref={aboutRef} className="py-20 px-6 sm:px-8 lg:px-12 lg:py-28 border-t border-slate-200 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] overflow-hidden">
          <div className="mx-auto max-w-7xl">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">About Us</p>
              <h2 className="font-serif-heading mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Built for Ambition.<br />Trusted by Investors.
              </h2>
              <p className="mt-4 text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                We partner with ambitious founders to establish equity preservation strategies, simulate future capital rounds, and build institutional financial models.
              </p>
            </div>

            {/* Redesigned 3-Card Grid */}
            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out transform ${
              isAboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}>
              
              {/* Card 1: Light Theme Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col justify-between min-h-[500px] p-8">
                {/* Background Pattern: Subtle Vertical Stripes */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-500" style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 20px)'
                }}></div>
                {/* Subtle Radial Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-200/20 blur-2xl group-hover:bg-blue-200/30 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Precision & Compliance
                  </div>
                  <h3 className="font-serif-heading text-2xl font-extrabold text-slate-900 mt-6 leading-tight">
                    Strategic Equity<br />Preservation
                  </h3>
                  <p className="text-slate-600 text-sm mt-4 leading-relaxed max-w-xs">
                    Designed for ambitious founders to build investor-grade financial models, structure valuation models, and project dilution with absolute precision.
                  </p>
                  
                  <a 
                    href="#contact"
                    className="inline-flex items-center justify-center mt-6 px-6 py-2.5 rounded-full bg-slate-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
                  >
                    Request Valuation
                  </a>
                </div>

                {/* Bottom Branding & Logos */}
                <div className="relative z-10 border-t border-slate-100 pt-6 flex items-end justify-between mt-12">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest text-slate-400 font-extrabold">Advisory Framework</span>
                    <span className="text-xs font-extrabold text-slate-800 tracking-tight mt-0.5">FOUNDER'S EQUITY</span>
                  </div>
                  {/* Elegant abstract line logo or stamp */}
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 rounded-lg px-2.5 py-1.5 shadow-sm">
                    <span className="h-4 w-4 rounded-full border border-blue-500 border-dashed flex items-center justify-center text-[8px] text-blue-600 font-extrabold">★</span>
                    <div className="flex flex-col">
                      <span className="text-[7px] leading-none font-bold text-slate-500 uppercase tracking-widest">AICPA / IVS</span>
                      <span className="text-[8px] font-extrabold text-slate-800 uppercase tracking-wider leading-none mt-0.5">COMPLIANT</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Dark Blue/Sky Glassmorphic Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B2545] via-[#081F37] to-[#051020] border border-[#0284C7]/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 flex flex-col justify-between min-h-[500px] p-8">
                {/* Background glow animation effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.15),transparent_60%)] pointer-events-none"></div>
                <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-sky-500/10 blur-3xl group-hover:bg-sky-500/15 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-950/60 border border-sky-800/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-400">
                    24/7 Dedicated Support
                  </div>
                  <h3 className="font-serif-heading text-2xl font-extrabold text-white mt-6 leading-tight">
                    Dedicated Advisory &<br />Capital Consulting
                  </h3>
                  <p className="text-sky-100/80 text-sm mt-4 leading-relaxed max-w-xs">
                    Partner with seasoned financial advisors to shape your capital narrative. No automated bots. No template reports. Real experts in your corner.
                  </p>
                  
                  <a 
                    href="#contact"
                    className="inline-flex items-center justify-center mt-6 px-6 py-2.5 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 shadow-md"
                  >
                    Schedule Call
                  </a>
                </div>

                {/* Wireframe Grid/Globe Graphic at Bottom */}
                <div className="relative h-28 w-full mt-8 overflow-hidden rounded-xl border border-sky-900/30 bg-sky-950/20 flex items-center justify-center pointer-events-none">
                  {/* Curved Grid lines */}
                  <svg className="absolute inset-0 w-full h-full text-sky-500/10 group-hover:text-sky-500/20 transition-colors duration-500" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Vertical lines */}
                    <path d="M10,0 Q30,50 10,100 M20,0 Q40,50 20,100 M30,0 Q50,50 30,100 M40,0 Q60,50 40,100 M50,0 Q70,50 50,100 M60,0 Q80,50 60,100 M70,0 Q90,50 70,100 M80,0 Q95,50 80,100 M90,0 Q99,50 90,100" fill="none" stroke="currentColor" strokeWidth="0.3" />
                    {/* Horizontal lines */}
                    <path d="M0,10 Q50,30 100,10 M0,20 Q50,40 100,20 M0,30 Q50,50 100,30 M0,40 Q50,60 100,40 M0,50 Q50,70 100,50 M0,60 Q50,80 100,60 M0,70 Q50,90 100,70 M0,80 Q50,95 100,80 M0,90 Q50,99 100,90" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  </svg>
                  {/* Glowing core */}
                  <div className="absolute w-20 h-20 rounded-full bg-sky-500/5 group-hover:bg-sky-500/10 blur-xl transition-all duration-500"></div>
                  <span className="relative z-10 text-[10px] text-sky-400 font-bold uppercase tracking-widest opacity-60">Global Network</span>
                </div>
              </div>

              {/* Card 3: Dark Slate/Black Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1528] via-[#050B14] to-[#02050A] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500 flex flex-col justify-between min-h-[500px] p-8">
                {/* Background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_50%)] pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#38BDF8]">
                    Assets Under Advisory
                  </div>
                  
                  {/* Giant Stat Display */}
                  <div className="mt-8">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">Cumulative Value</span>
                    <div className="text-5xl font-extrabold text-white tracking-tight mt-1 group-hover:text-[#38BDF8] transition-colors duration-500 font-sans">
                      $90M+
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mt-6 leading-relaxed max-w-xs">
                    Ambitious founders, venture funds, and growth-stage companies rely on our independent valuations to confidently negotiate terms.
                  </p>
                </div>

                {/* SVG Particle Chart Wave & Action Button */}
                <div className="relative mt-8">
                  {/* SVG Wavy dotted graph lines */}
                  <div className="h-24 w-full relative overflow-hidden rounded-xl bg-black/30 border border-white/[0.03] p-2 flex flex-col justify-end">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <line x1="0" y1="25" x2="200" y2="25" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="3,3" />
                      <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="3,3" />
                      <line x1="0" y1="75" x2="200" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="3,3" />
                      
                      {/* Main Chart Paths */}
                      <path 
                        d="M0,80 Q25,85 50,60 T100,50 T150,30 T200,10" 
                        fill="none" 
                        stroke="rgba(56, 189, 248, 0.4)" 
                        strokeWidth="1.5" 
                        className="group-hover:stroke-[#38BDF8] transition-colors duration-500" 
                      />
                      <path 
                        d="M0,80 Q25,85 50,60 T100,50 T150,30 T200,10" 
                        fill="none" 
                        stroke="rgba(56, 189, 248, 0.7)" 
                        strokeWidth="3" 
                        strokeDasharray="1,5" 
                        strokeLinecap="round"
                        className="animate-[dash_20s_linear_infinite]"
                      />
                      <path 
                        d="M0,90 Q30,70 60,75 T120,40 T180,25 T200,20" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.15)" 
                        strokeWidth="1" 
                      />
                    </svg>
                    <div className="absolute inset-x-2 bottom-1.5 flex justify-between text-[8px] font-bold text-slate-500 tracking-wider">
                      <span>VALUATION TREND</span>
                      <span>+57% YOY</span>
                    </div>
                  </div>

                  {/* Button & Subtitle */}
                  <div className="flex items-center justify-between mt-6 pt-2">
                    <span className="text-[10px] text-slate-400 font-bold tracking-tight">
                      Independent. Research-driven.
                    </span>
                    <a 
                      href="#service"
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/5 hover:bg-[#38BDF8] hover:text-slate-950 text-white border border-white/10 hover:border-transparent text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Service Section */}
        <section id="service" className="bg-gradient-to-b from-[#050B14] via-[#0A1224] to-[#050B14] py-20 px-6 sm:px-8 lg:px-12 lg:py-28 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">Capabilities</h2>
              <p className="font-serif-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Services
              </p>
              <p className="mt-4 text-slate-400">
                Precision capital advisory services engineered to protect founders through seed, growth, and exit phases.
              </p>
            </div>

            {/* Simple Grid */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {/* Card 1: Startup Valuation */}
              <div className="relative overflow-hidden rounded-2xl h-[450px] group/card border border-white/5 shadow-lg bg-[#09111E]">
                <img
                  src="/hero-slide-1.png"
                  alt="Startup Valuation background"
                  className="absolute inset-0 h-full w-full object-cover group-hover/card:scale-105 transition-transform duration-500 pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/65 group-hover/card:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-left">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-sm">
                    <Rocket className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold text-white uppercase tracking-wider">Startup Valuation</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    Know what your startup is worth before fundraising. Get data-driven valuations for Idea, Pre-Seed, Seed, and Growth-stage startups using industry-standard methodologies.
                  </p>
                </div>
              </div>

              {/* Card 2: Seed & Angel Round Valuation */}
              <div className="relative overflow-hidden rounded-2xl h-[450px] group/card border border-white/5 shadow-lg bg-[#09111E]">
                <img
                  src="/hero-slide-2.png"
                  alt="Seed & Angel Round Valuation background"
                  className="absolute inset-0 h-full w-full object-cover group-hover/card:scale-105 transition-transform duration-500 pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/65 group-hover/card:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-left">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-sm">
                    <Lightbulb className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold text-white uppercase tracking-wider">Seed & Angel Round Valuation</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    Raise capital with confidence. Determine a fair valuation for angel investors and early-stage funding rounds based on traction, market size, team strength, and growth potential.
                  </p>
                </div>
              </div>

              {/* Card 3: MSME Business Valuation */}
              <div className="relative overflow-hidden rounded-2xl h-[450px] group/card border border-white/5 shadow-lg bg-[#09111E]">
                <img
                  src="/hero-slide-3.png"
                  alt="MSME Business Valuation background"
                  className="absolute inset-0 h-full w-full object-cover group-hover/card:scale-105 transition-transform duration-500 pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/65 group-hover/card:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-left">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-sm">
                    <Building2 className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold text-white uppercase tracking-wider">MSME Business Valuation</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    Understand the true value of your business. Ideal for MSMEs seeking funding, partnerships, mergers, acquisitions, or strategic planning.
                  </p>
                </div>
              </div>

              {/* Card 4: Series A, B & C Valuation */}
              <div className="relative overflow-hidden rounded-2xl h-[450px] group/card border border-white/5 shadow-lg bg-[#09111E]">
                <img
                  src="/hero-slide-4.png"
                  alt="Series A, B & C Valuation background"
                  className="absolute inset-0 h-full w-full object-cover group-hover/card:scale-105 transition-transform duration-500 pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/65 group-hover/card:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-left">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-sm">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold text-white uppercase tracking-wider">Series A, B & C Valuation</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    Built for scaling companies. Advanced valuation models considering revenue growth, market expansion, financial performance, and future projections.
                  </p>
                </div>
              </div>

              {/* Card 5: ESOP Valuation */}
              <div className="relative overflow-hidden rounded-2xl h-[450px] group/card border border-white/5 shadow-lg bg-[#09111E]">
                <img
                  src="/hero-slide-1.png"
                  alt="ESOP Valuation background"
                  className="absolute inset-0 h-full w-full object-cover group-hover/card:scale-105 transition-transform duration-500 pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/65 group-hover/card:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-left">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-sm">
                    <Users className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold text-white uppercase tracking-wider">ESOP Valuation</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    Create employee ownership plans with accuracy. Determine the fair market value of shares for ESOP issuance, employee buybacks, and compliance requirements.
                  </p>
                </div>
              </div>

              {/* Card 6: Second Opinion Valuation */}
              <div className="relative overflow-hidden rounded-2xl h-[450px] group/card border border-white/5 shadow-lg bg-[#09111E]">
                <img
                  src="/hero-slide-2.png"
                  alt="Second Opinion Valuation background"
                  className="absolute inset-0 h-full w-full object-cover group-hover/card:scale-105 transition-transform duration-500 pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/65 group-hover/card:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-left">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-sm">
                    <Target className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold text-white uppercase tracking-wider">Second Opinion Valuation (Free)</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    Already have a valuation report? Verify it. Get an independent expert review of your existing valuation and identify assumptions, risks, and hidden gaps.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-20 px-6 sm:px-8 lg:px-12 lg:py-28 bg-gradient-to-br from-[#F3F4F6] via-[#EBF3FC] to-[#E2E8F0] border-t border-slate-200">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

              {/* Contact Information */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Inquiries</h2>
                  <p className="font-serif-heading mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Get in Touch
                  </p>
                  <p className="mt-4 text-slate-600 max-w-md">
                    Schedule a private advisory consultation. We will analyze your cap structure, simulate future funding rounds, and establish equity preservation strategies.
                  </p>

                  <div className="mt-10 space-y-6">
                    <a href="mailto:amoghshirke.valuation@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold group-hover:text-slate-700 transition-colors">Email</p>
                        <span className="text-sm font-semibold text-slate-800 hover:underline">
                          amoghshirke.valuation@gmail.com
                        </span>
                      </div>
                    </a>

                    <a href="https://www.linkedin.com/in/amogh-shirke" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold group-hover:text-slate-700 transition-colors">LinkedIn</p>
                        <span className="text-sm font-semibold text-slate-800 hover:underline">
                          amogh-shirke
                        </span>
                      </div>
                    </a>

                    <a href="https://thebombayvaluationdesk.substack.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.539 8.242H1.46V5.406h21.078v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.078V0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold group-hover:text-slate-700 transition-colors">Substack</p>
                        <span className="text-sm font-semibold text-slate-800 hover:underline">
                          The Bombay Valuation Desk
                        </span>
                      </div>
                    </a>
                  </div>
                </div>


              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8 hover:border-blue-400/40 transition-all duration-300">
                  {formSubmitted ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 border border-green-200 text-green-600">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-serif-heading text-lg font-bold text-slate-900 mt-4">Message Sent</h3>
                      <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto">
                        Thank you for reaching out. An advisor will contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
                            placeholder="Alex Chen"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            Work Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
                            placeholder="alex@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
                          placeholder="Tell us about your venture advisory or capital structuring goals..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-full bg-blue-600 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg focus:outline-none cursor-pointer"
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

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-6 sm:px-8 lg:px-12 lg:py-28 bg-gradient-to-b from-[#050B14] via-[#0B1528] to-[#030712] border-t border-white/5">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">FAQ</h2>
              <p className="font-serif-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Frequently Asked Questions
              </p>
              <p className="mt-4 text-slate-400">
                Quick answers to common questions about our valuation methodologies, timelines, and advisory services.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="group border border-white/5 bg-[#09111E]/40 rounded-2xl p-6 cursor-pointer hover:border-[#38BDF8]/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-sans text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors duration-200">
                        {faq.q}
                      </h4>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-400 group-hover:text-[#38BDF8] transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-[#38BDF8]" : ""
                          }`}
                      />
                    </div>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 overflow-hidden"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-relaxed text-slate-300 border-t border-white/5 pt-4">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Still Have Questions CTA */}
            <div className="mt-16 text-center bg-[#09111E]/40 border border-white/5 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm shadow-lg hover:border-[#38BDF8]/20 transition-all duration-300">
              <h4 className="font-serif-heading text-lg font-bold text-white uppercase tracking-wider">
                Still have questions?
              </h4>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Schedule a confidential consultation, and we'll be happy to discuss your valuation requirements and recommend the most suitable approach for your business.
              </p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex rounded-full bg-white px-8 py-3 text-xs font-bold uppercase tracking-wider text-black shadow-md transition-all hover:bg-neutral-100 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] cursor-pointer"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer Section */}
      <footer id="footer" className="border-t border-slate-200 bg-gradient-to-br from-[#F3F4F6] via-[#EBF3FC] to-[#E2E8F0] py-12 px-6 sm:px-8 lg:px-12 text-slate-600">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">

            {/* Logo & Compliance (Left) */}
            <div className="md:col-span-4">
              <Image
                src="/logo-v2.png"
                alt="Founder's Equity Logo"
                width={175}
                height={80}
                className="h-14 w-auto object-contain opacity-95 invert"
              />
              <p className="mt-6 text-xs leading-relaxed text-slate-500 max-w-md">
                Disclaimer: Founder's Equity is a financial advisory and consulting firm. We do not provide legal, accounting, tax, or SEC broker-dealer services. All advisory models and illustrative summaries are for planning purposes.
              </p>
            </div>

            {/* Quick Links (Middle-Left) */}
            <div className="md:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600">Website</h4>
              <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-500">
                <li>
                  <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
                </li>
                <li>
                  <a href="#service" className="hover:text-blue-600 transition-colors">Service</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
                </li>
              </ul>
            </div>

            {/* Social Links (Middle-Right Column) */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600">Publications &amp; Social</h4>
              <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-500">
                <li>
                  <a href="https://www.linkedin.com/in/amogh-shirke" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://thebombayvaluationdesk.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5722] transition-colors flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.539 8.242H1.46V5.406h21.078v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.078V0z" />
                    </svg>
                    Substack
                  </a>
                </li>
              </ul>
            </div>

            {/* Office Contact (Right) */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600">Office Contact</h4>
              <a href="mailto:amoghshirke.valuation@gmail.com" className="hover:text-blue-600 transition-colors font-semibold text-slate-700 block mt-4">
                amoghshirke.valuation@gmail.com
              </a>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 border-t border-slate-300 pt-6 flex flex-col justify-between gap-4 sm:flex-row text-[10px] font-semibold text-slate-500">
            <p>&copy; {new Date().getFullYear()} Founder's Equity Partners Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Advisory</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Chat Bubble */}
      <a
        href="#faq"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0072FF] shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 group animate-bounce"
        style={{ animationDuration: '3s' }}
        aria-label="View frequently asked questions"
      >
        {/* Active pulse dot */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white"></span>
        </span>
        {/* SVG Message Icon */}
        <svg
          className="h-6 w-6 text-white transition-colors"
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
