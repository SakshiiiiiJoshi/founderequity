"use client";

import { useRef } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="service"
      className="relative bg-gradient-to-b from-[#050B14] via-[#0A1224] to-[#050B14] py-20 px-6 sm:px-8 lg:px-12 lg:py-28 border-t border-white/5 overflow-hidden"
    >
      {/* ── Ambient glow decorations ── */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#38BDF8]/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-[400px] w-[400px] rounded-full bg-[#818CF8]/[0.04] blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* ── Header ── */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
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

        {/* ── 3x3 Grid ── */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="relative overflow-hidden rounded-2xl h-[380px] border border-white/[0.06] shadow-lg bg-[#09111E] hover:border-white/15 transition-all duration-500 cursor-pointer">
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

                      {/* Description */}
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
      </div>
    </section>
  );
}
