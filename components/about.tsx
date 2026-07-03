"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Target, Building2 } from "lucide-react";

export default function About() {
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

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 px-6 sm:px-6 lg:px-12 lg:py-24 border-t border-slate-200 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">About Us</h2>

          <h2 className="font-serif-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-tight mt-3">
            Built for Ambition.<br />Trusted by Investors.
          </h2>
          <p className="mt-6 text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            We partner with ambitious founders to establish equity preservation strategies, simulate future capital rounds, and build institutional financial models.
          </p>
        </div>

        {/* 3-Card Grid with Minimalist Premium Design */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out transform ${
            isAboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Card 1: Valuation Advisory (Light Card) */}
          <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 hover:border-blue-500/30 hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col justify-between min-h-[460px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.015)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.06)]">
            {/* Elegant Background Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity duration-500"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #000 1px, transparent 1px),
                  linear-gradient(to bottom, #000 1px, transparent 1px)
                `,
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-200/10 blur-3xl group-hover:bg-blue-200/20 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50/50 px-2.5 py-1 rounded-md border border-blue-100/50">
                  Advisory
                </span>
                <TrendingUp className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="font-serif-heading text-2xl font-extrabold text-slate-900 mt-8 leading-tight">
                Valuation Advisory
              </h3>
              <p className="text-slate-600 text-sm mt-4 leading-relaxed font-sans font-medium">
                We deliver independent, data-driven valuation advisory founded on rigorous financial analysis and globally accepted methodologies. Our valuations are built to stand up to investor scrutiny, support strategic decision-making, and provide a defensible basis for business and investment discussions.
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 border-t border-slate-100 pt-6 flex items-center justify-between mt-10">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-extrabold">
                  Advisory Framework
                </span>
                <span className="text-xs font-extrabold text-slate-800 tracking-tight mt-0.5">
                  FOUNDER'S EQUITY
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Independent Assessment (Navy Card) */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B2545] via-[#081F37] to-[#051020] border border-[#0284C7]/20 hover:border-sky-400/40 hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col justify-between min-h-[460px] p-8 text-white shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(14,165,233,0.12)]">
            {/* Elegant Curve Pattern in Background */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.04] transition-opacity duration-500 flex items-center justify-center">
              <svg className="w-full h-full text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-sky-500/5 blur-3xl group-hover:bg-sky-500/10 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-950/40 px-2.5 py-1 rounded-md border border-sky-900/30">
                  Assessment
                </span>
                <Target className="h-5 w-5 text-sky-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="font-serif-heading text-2xl font-extrabold text-white mt-8 leading-tight">
                Independent Assessment
              </h3>
              <p className="text-sky-100/80 text-sm mt-4 leading-relaxed font-sans font-medium">
                We provide an independent assessment of existing valuation reports through an objective review of methodologies, assumptions, and conclusions. Our goal is to strengthen confidence by delivering an unbiased and well-reasoned perspective.
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 border-t border-sky-950 pt-6 flex items-center justify-between mt-10">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-sky-500 font-extrabold">
                  Independent Audit
                </span>
                <span className="text-xs font-extrabold text-white tracking-tight mt-0.5">
                  DEFENSIBLE ANALYSIS
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Market Insights (Slate/Black Card) */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1528] via-[#050B14] to-[#02050A] border border-white/5 hover:border-slate-700/50 hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col justify-between min-h-[460px] p-8 text-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(56,189,248,0.08)]">
            {/* Elegant Line Chart Path in Background */}
            <div className="absolute inset-x-0 bottom-0 h-40 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-500">
              <svg className="w-full h-full text-white" viewBox="0 0 200 100" preserveAspectRatio="none">
                <path
                  d="M0,85 Q40,65 80,75 T160,35 T200,15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M0,95 Q50,75 100,80 T200,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                />
              </svg>
            </div>
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#38BDF8] bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                  Insights
                </span>
                <Building2 className="h-5 w-5 text-sky-400 group-hover:text-[#38BDF8] group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="font-serif-heading text-2xl font-extrabold text-white mt-8 leading-tight">
                Market Insights
              </h3>
              <p className="text-slate-300 text-sm mt-4 leading-relaxed font-sans font-medium">
                We share thoughtful perspectives on valuation, financial markets, and the broader economic landscape through well-researched insights. Our aim is to help businesses and investors navigate an evolving market environment with greater clarity and confidence.
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 border-t border-slate-900 pt-6 flex items-center justify-between mt-10">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-slate-500 font-extrabold">
                  Market Perspectives
                </span>
                <span className="text-xs font-extrabold text-white tracking-tight mt-0.5">
                  VALUATION TRENDS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
