"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  Rocket,
  Lightbulb,
  Building2,
  Users,
  Landmark,
  BriefcaseBusiness,
  PieChart,
  BookOpen,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, useInView } from "motion/react";

/* ──────────────────────────────────────────────
   Service Data
   ────────────────────────────────────────────── */
const services = [
  {
    title: "Startup Valuation",
    description:
      "Know what your startup is worth before fundraising. Get data-driven valuations for Idea, Pre-Seed, Seed, and Growth-stage startups using industry-standard methodologies.",
    icon: Rocket,
    image: "/hero-slide-1.png",
    accent: "#38BDF8",
  },
  {
    title: "Fundraising Valuation",
    description:
      "Raise capital with confidence at every stage of your growth. Determine a fair valuation for Seed, Angel, Series A, B & C funding rounds based on business fundamentals, market opportunity, financial performance, and growth potential.",
    icon: Lightbulb,
    image: "/hero-slide-2.png",
    accent: "#818CF8",
  },
  {
    title: "MSME Business Valuation",
    description:
      "Understand the true value of your business. Ideal for MSMEs seeking funding, partnerships, mergers, acquisitions, or strategic planning.",
    icon: Building2,
    image: "/hero-slide-3.png",
    accent: "#34D399",
  },
  {
    title: "ESOP Valuation",
    description:
      "Create employee ownership plans with accuracy. Determine the fair market value of shares for ESOP issuance, employee buybacks, and compliance requirements.",
    icon: Users,
    image: "/hero-slide-4.png",
    accent: "#F472B6",
  },
  {
    title: "Valuation Support for Investment Banks",
    description:
      "Support complex capital market and transaction mandates with independent valuation expertise. We assist investment banks with valuation analysis for IPOs, mergers & acquisitions, equity capital markets, and strategic transactions.",
    icon: Landmark,
    image: "/hero-slide-1.png",
    accent: "#FBBF24",
  },
  {
    title: "Valuation Support for PE & VC Funds",
    description:
      "Make investment decisions with greater confidence through independent valuation support. We assist PE/VC funds in evaluating investment opportunities, portfolio companies, funding rounds, and exit transactions.",
    icon: BriefcaseBusiness,
    image: "/hero-slide-2.png",
    accent: "#A78BFA",
  },
  {
    title: "Equity Portfolio Valuation",
    description:
      "Gain deeper insights into the intrinsic value of your equity portfolio. We provide valuation-driven analysis of portfolio holdings to support investment decisions, portfolio reviews, and long-term value creation.",
    icon: PieChart,
    image: "/hero-slide-3.png",
    accent: "#2DD4BF",
  },
  {
    title: "Valuation Support for Chartered Accountants",
    description:
      "Strengthen your client engagements with reliable, independent valuation support. We assist practicing Chartered Accountants with business valuations for fundraising, shareholder transactions, restructuring, regulatory requirements, and strategic planning.",
    icon: BookOpen,
    image: "/hero-slide-4.png",
    accent: "#FB923C",
  },
  {
    title: "Second Opinion Valuation",
    badge: "Free",
    description:
      "Already have a valuation report? Verify it. Get an independent expert review of your existing valuation and identify assumptions, risks, and hidden gaps.",
    icon: ShieldCheck,
    image: "/hero-slide-1.png",
    accent: "#4ADE80",
  },
];

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ── Scroll state tracker ── */
  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Calculate active dot
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 340;
    const gap = 24;
    const idx = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(idx, services.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  /* ── Arrow scroll handler ── */
  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 340;
    const gap = 24;
    const amount = (cardWidth + gap) * 2;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  /* ── Dot click handler ── */
  const scrollToIndex = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 340;
    const gap = 24;
    el.scrollTo({ left: idx * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="service"
      className="relative bg-gradient-to-b from-[#050B14] via-[#0A1224] to-[#050B14] py-20 px-0 lg:py-28 border-t border-white/5 overflow-hidden"
    >
      {/* ── Ambient glow decorations ── */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#38BDF8]/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-[400px] w-[400px] rounded-full bg-[#818CF8]/[0.04] blur-[120px]" />

      <div className="mx-auto max-w-[1440px]">
        {/* ── Header ── */}
        <motion.div
          className="text-center max-w-2xl mx-auto px-6 sm:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
            Capabilities
          </h2>
          <p className="font-serif-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Services
          </p>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Precision valuation and capital advisory services engineered to protect founders, investors, and businesses through every stage of growth.
          </p>
        </motion.div>

        {/* ── Navigation arrows (desktop) ── */}
        <div className="hidden sm:flex items-center justify-end gap-2 px-6 sm:px-8 lg:px-12 mt-10 mb-4">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll services left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll services right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* ── Horizontal scroll container ── */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 sm:px-8 lg:px-12 pb-4 mt-4 sm:mt-0 hide-scrollbar"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                data-card
                className="group relative flex-shrink-0 w-[300px] sm:w-[340px] snap-start"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="relative overflow-hidden rounded-2xl h-[400px] border border-white/[0.06] shadow-lg bg-[#09111E] hover:border-white/15 transition-all duration-500 cursor-pointer">
                  {/* Card image */}
                  <img
                    src={service.image}
                    alt={`${service.title} background`}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                    loading="lazy"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-transparent group-hover:via-[#050B14]/60 transition-colors duration-500 z-[1]" />

                  {/* Accent glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[1]"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${service.accent}10 0%, transparent 70%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 text-left">
                    {/* Icon */}
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-4 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                      style={{
                        boxShadow: `0 0 20px ${service.accent}15`,
                      }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    {/* Title + badge */}
                    <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif-heading text-lg font-bold text-white leading-tight">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30 animate-pulse">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      {/* Description — fades in on hover */}
                      <p className="mt-2.5 text-[13px] leading-relaxed text-slate-300/80 line-clamp-4 group-hover:text-slate-200 transition-colors duration-500">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Top-right accent dot */}
                  <div
                    className="absolute top-4 right-4 h-2 w-2 rounded-full z-10 opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"
                    style={{ backgroundColor: service.accent }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Scroll indicator dots ── */}
        <div className="flex items-center justify-center gap-1.5 mt-6 px-6">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to service ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-2 bg-[#38BDF8]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
