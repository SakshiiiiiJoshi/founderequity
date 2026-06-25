"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import { Rocket, Lightbulb, Building2, TrendingUp, Users, Target, ChevronDown } from "lucide-react";

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
  const isLightSection = activeSection === "about" || activeSection === "contact" || activeSection === "footer";
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const faqs = [
    {
      q: "What methodologies do you use for startup valuation?",
      a: "We use a blend of industry-standard methodologies tailored to your startup's stage: the Scorecard Method, Berkus Method, Venture Capital (VC) method, and Discounted Cash Flow (DCF) models with multiple scenarios."
    },
    {
      q: "How long does a valuation advisory project take?",
      a: "Early-stage valuations (Pre-Seed/Seed) are typically completed within 3 to 5 business days. More complex growth-stage models (Series A/B/C) and ESOP compliance valuations take 7 to 10 business days."
    },
    {
      q: "What is the 'Second Opinion Valuation' process?",
      a: "If you already have a valuation report, our experts will review it for free. We inspect the underlying cap table projections, growth assumptions, and dilution risks to identify gaps or over-inflated figures."
    },
    {
      q: "Can you help design our ESOP pool and structuring?",
      a: "Yes, we assist founders in designing equity incentive pools (ESOPs) that align early employee contributions with future capital rounds, minimizing dilution while maximizing retention."
    },
    {
      q: "Do you act as an SEC-registered broker-dealer?",
      a: "No. Founder's Equity is a pure strategic financial advisory and consulting firm. We do not raise capital directly, distribute securities, or provide SEC broker-dealer transaction services."
    },
    {
      q: "What information do I need to prepare for a valuation?",
      a: "We typically require your current cap table, historical financial statements (if any), a 3-to-5-year revenue forecast, and details about your recent product/traction milestones."
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
      <header className="fixed top-6 z-50 w-full px-6 sm:px-8 lg:px-12 transition-all duration-500 translate-y-0 opacity-100">
        <div className="mx-auto max-w-7xl flex items-center justify-between w-full">

          {/* Left: Logo (Outside capsule, visible on dark/light backgrounds) */}
          <a href="#home" className="flex items-center gap-3 transition-opacity hover:opacity-90 pl-1">
            <Image
              src="/logo-v2.png"
              alt="Founder's Equity Logo"
              width={200}
              height={100}
              priority
              className={`h-16 w-auto object-contain py-0.5 transition-all duration-300 ${isLightSection ? "invert" : ""
                }`}
            />
          </a>

          {/* Center: Central Floating Capsule Navigation Pill */}
          <nav className="hidden md:flex items-center bg-[#0D1B2A]/70 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider text-white/70 shadow-lg">
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
              className={`rounded-full px-6 py-2.5 text-[10px] font-extrabold uppercase tracking-wider shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5 ${isLightSection
                  ? "bg-[#050B14] text-white hover:bg-[#0B1528] shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                  : "bg-white text-black hover:bg-neutral-100"
                }`}
            >
              Get in Touch <span className="text-[10px]">➔</span>
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
        <section id="home" className="relative overflow-hidden">
          <HeroParallaxDemo />
        </section>

        {/* What & Who We Are Section */}
        <section id="about" ref={aboutRef} className="py-20 px-6 sm:px-8 lg:px-12 lg:py-28 border-t border-slate-200 bg-gradient-to-b from-[#F3F4F6] via-[#EBF3FC] to-[#F3F4F6] overflow-hidden">
          <div className="mx-auto max-w-7xl">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-blue-600 shadow-sm">
                Who We Are
              </div>
              <h2 className="font-serif-heading mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                About Us
              </h2>
              <p className="mt-4 text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                We partner with ambitious founders to establish equity preservation strategies, simulate future capital rounds, and build institutional financial models.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column: Visual Growth Dashboard */}
              <div className={`lg:col-span-5 w-full flex justify-center lg:justify-start transition-all duration-1000 ease-out transform ${isAboutVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}>
                <div className="w-full max-w-[460px] p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:border-blue-400/40 transition-all duration-500 group flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                          Performance Tracker
                        </p>
                        <h4 className="font-serif-heading text-2xl font-extrabold text-slate-900 mt-2">
                          Advisory Capital
                        </h4>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1">
                        +57.1% Growth
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                      Founder's Equity acts as the bridging mechanism between scale operations and institutional backing.
                    </p>

                    {/* Animated SVG Chart Graphic */}
                    <div className="my-8 relative h-48 bg-slate-50/50 rounded-2xl border border-slate-100 p-4 overflow-hidden flex flex-col justify-end">
                      {/* Background Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-40">
                        <div className="w-full border-t border-dashed border-slate-200"></div>
                        <div className="w-full border-t border-dashed border-slate-200"></div>
                        <div className="w-full border-t border-dashed border-slate-200"></div>
                        <div className="w-full border-t border-dashed border-slate-200"></div>
                      </div>

                      {/* Main Bars */}
                      <div className="flex justify-around items-end h-full z-10 pt-4 relative">
                        {/* Bar 1 */}
                        <div className="flex flex-col items-center gap-2 group/bar w-16">
                          <div className="relative w-full rounded-t-xl bg-gradient-to-t from-blue-500 to-[#38BDF8] h-24 group-hover/bar:h-[105px] transition-all duration-500 shadow-[0_4px_12px_rgba(56,189,248,0.2)]">
                            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-800 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300">$35M</span>
                          </div>
                          <span className="text-[10px] font-bold text-slate-400">Fund I (2024)</span>
                        </div>

                        {/* Bar 2 */}
                        <div className="flex flex-col items-center gap-2 group/bar w-16">
                          <div className="relative w-full rounded-t-xl bg-gradient-to-t from-blue-600 to-[#0072FF] h-36 group-hover/bar:h-[155px] transition-all duration-500 shadow-[0_4px_16px_rgba(0,114,255,0.3)]">
                            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-800 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300">$55M</span>
                          </div>
                          <span className="text-[10px] font-bold text-slate-400">Fund II (2025)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Info inside the card */}
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                    <div className="border-r border-slate-100">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Fund I Value</span>
                      <p className="text-xl font-bold text-slate-800 mt-0.5">$35,000,000</p>
                    </div>
                    <div className="pl-2">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Fund II Value</span>
                      <p className="text-xl font-bold text-slate-800 mt-0.5">$55,000,000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Value Propositions */}
              <div className={`lg:col-span-7 w-full flex flex-col justify-center transition-all duration-1000 ease-out transform ${isAboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}>

                {/* Core Items Stacked */}
                <div className="space-y-4 w-full">

                  {/* Prop 1 */}
                  <div className="group relative flex items-start gap-5 p-6 rounded-2xl border border-slate-200/60 bg-white hover:bg-slate-50/50 hover:border-blue-400/40 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                    {/* Accent sidebar strip */}
                    <div className="absolute left-0 top-5 bottom-5 w-[4px] rounded-r-lg bg-slate-200 group-hover:bg-blue-600 transition-all duration-300"></div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                      <Rocket className="h-6 w-6" />
                    </div>

                    <div>
                      <h4 className="font-sans text-base font-bold text-slate-900 tracking-wide">
                        <span className="text-blue-600 transition-colors duration-300 group-hover:text-blue-600">Ambitious startups.</span> Investor-ready numbers.
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                        We help founders build financial models and forecasts that transform vision into a language investors understand and trust.
                      </p>
                    </div>
                  </div>

                  {/* Prop 2 */}
                  <div className="group relative flex items-start gap-5 p-6 rounded-2xl border border-slate-200/60 bg-white hover:bg-slate-50/50 hover:border-blue-400/40 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                    {/* Accent sidebar strip */}
                    <div className="absolute left-0 top-5 bottom-5 w-[4px] rounded-r-lg bg-slate-200 group-hover:bg-blue-600 transition-all duration-300"></div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                      <Building2 className="h-6 w-6" />
                    </div>

                    <div>
                      <h4 className="font-sans text-base font-bold text-slate-900 tracking-wide">
                        <span className="text-blue-600 transition-colors duration-300 group-hover:text-blue-600">Strong businesses.</span> Hidden value.
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                        Operational success often remains invisible without the right financial structure. We ensure your performance is reflected on paper as clearly as it is in reality.
                      </p>
                    </div>
                  </div>

                  {/* Prop 3 */}
                  <div className="group relative flex items-start gap-5 p-6 rounded-2xl border border-slate-200/60 bg-white hover:bg-slate-50/50 hover:border-blue-400/40 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                    {/* Accent sidebar strip */}
                    <div className="absolute left-0 top-5 bottom-5 w-[4px] rounded-r-lg bg-slate-200 group-hover:bg-blue-600 transition-all duration-300"></div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                      <Target className="h-6 w-6" />
                    </div>

                    <div>
                      <h4 className="font-sans text-base font-bold text-slate-900 tracking-wide">
                        <span className="text-blue-600 transition-colors duration-300 group-hover:text-blue-600">Stories inspire.</span> Numbers convince.
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                        Valuation is the bridge between ambition and credibility. We help businesses align their narrative with the financial evidence behind it.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Full-width Stats Panel */}
            <div className={`mt-16 w-full p-8 md:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-100 transition-all duration-1000 ease-out transform ${isAboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}>
              <div className="flex flex-col justify-center">
                <p className="text-4xl md:text-5xl font-sans font-extrabold text-blue-600 tracking-tight">
                  $90M+
                </p>
                <p className="text-xs font-bold text-slate-500 mt-2 uppercase tracking-widest leading-relaxed">
                  Assets under advisory
                </p>
              </div>
              <div className="flex flex-col justify-center md:pl-10 pt-6 md:pt-0">
                <p className="text-4xl md:text-5xl font-sans font-extrabold text-blue-600 tracking-tight">
                  25+
                </p>
                <p className="text-xs font-bold text-slate-500 mt-2 uppercase tracking-widest leading-relaxed">
                  Transactions completed
                </p>
              </div>
              <div className="flex flex-col justify-center md:pl-10 pt-6 md:pt-0">
                <p className="text-4xl md:text-5xl font-sans font-extrabold text-blue-600 tracking-tight">
                  18+
                </p>
                <p className="text-xs font-bold text-slate-500 mt-2 uppercase tracking-widest leading-relaxed">
                  Years of experience
                </p>
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
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                        <a href="mailto:advisory@foundersequity.com" className="text-sm font-semibold text-slate-800 hover:underline">
                          advisory@foundersequity.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Location</p>
                        <p className="text-sm font-semibold text-slate-800">San Francisco, CA &amp; New York, NY</p>
                      </div>
                    </div>
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
                        className="w-full rounded-full bg-blue-600 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg focus:outline-none cursor-pointer"
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
          </div>
        </section>

      </main>

      {/* Footer Section */}
      <footer id="footer" className="border-t border-slate-200 bg-gradient-to-br from-[#F3F4F6] via-[#EBF3FC] to-[#E2E8F0] py-12 px-6 sm:px-8 lg:px-12 text-slate-600">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">

            {/* Logo & Compliance (Left) */}
            <div className="md:col-span-6">
              <Image
                src="/logo-v2.png"
                alt="Founder's Equity Logo"
                width={175}
                height={80}
                className="h-10 w-auto object-contain opacity-95 invert"
              />
              <p className="mt-6 text-xs leading-relaxed text-slate-500 max-w-md">
                Disclaimer: Founder's Equity is a financial advisory and consulting firm. We do not provide legal, accounting, tax, or SEC broker-dealer services. All advisory models and illustrative summaries are for planning purposes.
              </p>
            </div>

            {/* Quick Links (Middle) */}
            <div className="md:col-span-3">
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

            {/* Office Info (Right) */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600">Office Contact</h4>
              <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                Founder's Equity Partners Inc.<br />
                One Maritime Plaza, Suite 1400<br />
                San Francisco, CA 94111<br />
                <a href="mailto:advisory@foundersequity.com" className="hover:text-blue-600 transition-colors font-semibold text-slate-700">
                  advisory@foundersequity.com
                </a>
              </p>
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
