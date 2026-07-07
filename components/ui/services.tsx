import { Rocket, Lightbulb, Building2, TrendingUp, Users, Target } from "lucide-react";

export default function Services() {
  return (
    <section
      id="service"
      className="bg-gradient-to-b from-[#050B14] via-[#0A1224] to-[#050B14] py-20 px-6 sm:px-8 lg:px-12 lg:py-28 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">Capabilities</h2>
          <p className="font-serif-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Services
          </p>
          <p className="mt-4 text-slate-300">
            Precision capital advisory services engineered to protect founders through seed, growth, and exit phases.
          </p>
        </div>

        {/* Grid of Cards with Premium Hover Animations */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Startup Valuation */}
          <div className="relative overflow-hidden rounded-2xl h-[450px] group/card border border-white/5 shadow-lg bg-[#09111E] hover:border-white/15 transition-all duration-500">
            <img
              src="/hero-slide-1.png"
              alt="Startup Valuation background"
              className="absolute inset-0 h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/75 group-hover/card:bg-black/45 transition-colors duration-500 z-0"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 mb-6 backdrop-blur-sm group-hover/card:scale-110 group-hover/card:rotate-3 group-hover/card:border-white/30 transition-all duration-500">
                <Rocket className="h-7 w-7" />
              </div>
              <div className="transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="font-serif-heading text-xl font-bold text-white uppercase tracking-wider">
                  Startup Valuation
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-200 group-hover/card:opacity-100 transition-opacity duration-500">
                  Know what your startup is worth before fundraising. Get data-driven valuations for Idea,
                  Pre-Seed, Seed, and Growth-stage startups using industry-standard methodologies.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Seed & Angel Round Valuation */}
          <div className="relative overflow-hidden rounded-2xl h-[450px] group/card border border-white/5 shadow-lg bg-[#09111E] hover:border-white/15 transition-all duration-500">
            <img
              src="/hero-slide-2.png"
              alt="Seed & Angel Round Valuation background"
              className="absolute inset-0 h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/75 group-hover/card:bg-black/45 transition-colors duration-500 z-0"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 mb-6 backdrop-blur-sm group-hover/card:scale-110 group-hover/card:rotate-3 group-hover/card:border-white/30 transition-all duration-500">
                <Lightbulb className="h-7 w-7" />
              </div>
              <div className="transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="font-serif-heading text-xl font-bold text-white uppercase tracking-wider">
                  Seed & Angel Round Valuation
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-200 group-hover/card:opacity-100 transition-opacity duration-500">
                  Raise capital with confidence. Determine a fair valuation for angel investors and
                  early-stage funding rounds based on traction, market size, team strength, and growth potential.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: MSME Business Valuation */}
          <div className="relative overflow-hidden rounded-2xl h-[450px] group/card border border-white/5 shadow-lg bg-[#09111E] hover:border-white/15 transition-all duration-500">
            <img
              src="/hero-slide-3.png"
              alt="MSME Business Valuation background"
              className="absolute inset-0 h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/75 group-hover/card:bg-black/45 transition-colors duration-500 z-0"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 mb-6 backdrop-blur-sm group-hover/card:scale-110 group-hover/card:rotate-3 group-hover/card:border-white/30 transition-all duration-500">
                <Building2 className="h-7 w-7" />
              </div>
              <div className="transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="font-serif-heading text-xl font-bold text-white uppercase tracking-wider">
                  MSME Business Valuation
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-200 group-hover/card:opacity-100 transition-opacity duration-500">
                  Understand the true value of your business. Ideal for MSMEs seeking funding, partnerships,
                  mergers, acquisitions, or strategic planning.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Series A, B & C Valuation */}
          <div className="relative overflow-hidden rounded-2xl h-[450px] group/card border border-white/5 shadow-lg bg-[#09111E] hover:border-white/15 transition-all duration-500">
            <img
              src="/hero-slide-4.png"
              alt="Series A, B & C Valuation background"
              className="absolute inset-0 h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/75 group-hover/card:bg-black/45 transition-colors duration-500 z-0"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 mb-6 backdrop-blur-sm group-hover/card:scale-110 group-hover/card:rotate-3 group-hover/card:border-white/30 transition-all duration-500">
                <TrendingUp className="h-7 w-7" />
              </div>
              <div className="transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="font-serif-heading text-xl font-bold text-white uppercase tracking-wider">
                  Series A, B & C Valuation
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-200 group-hover/card:opacity-100 transition-opacity duration-500">
                  Built for scaling companies. Advanced valuation models considering revenue growth, market
                  expansion, financial performance, and future projections.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: ESOP Valuation */}
          <div className="relative overflow-hidden rounded-2xl h-[450px] group/card border border-white/5 shadow-lg bg-[#09111E] hover:border-white/15 transition-all duration-500">
            <img
              src="/hero-slide-1.png"
              alt="ESOP Valuation background"
              className="absolute inset-0 h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/75 group-hover/card:bg-black/45 transition-colors duration-500 z-0"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 mb-6 backdrop-blur-sm group-hover/card:scale-110 group-hover/card:rotate-3 group-hover/card:border-white/30 transition-all duration-500">
                <Users className="h-7 w-7" />
              </div>
              <div className="transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="font-serif-heading text-xl font-bold text-white uppercase tracking-wider">
                  ESOP Valuation
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-200 group-hover/card:opacity-100 transition-opacity duration-500">
                  Create employee ownership plans with accuracy. Determine the fair market value of shares
                  for ESOP issuance, employee buybacks, and compliance requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Card 6: Second Opinion Valuation */}
          <div className="relative overflow-hidden rounded-2xl h-[450px] group/card border border-white/5 shadow-lg bg-[#09111E] hover:border-white/15 transition-all duration-500">
            <img
              src="/hero-slide-2.png"
              alt="Second Opinion Valuation background"
              className="absolute inset-0 h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/75 group-hover/card:bg-black/45 transition-colors duration-500 z-0"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 mb-6 backdrop-blur-sm group-hover/card:scale-110 group-hover/card:rotate-3 group-hover/card:border-white/30 transition-all duration-500">
                <Target className="h-7 w-7" />
              </div>
              <div className="transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="font-serif-heading text-xl font-bold text-white uppercase tracking-wider">
                  Second Opinion Valuation (Free)
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-200 group-hover/card:opacity-100 transition-opacity duration-500">
                  Already have a valuation report? Verify it. Get an independent expert review of your
                  existing valuation and identify assumptions, risks, and hidden gaps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
