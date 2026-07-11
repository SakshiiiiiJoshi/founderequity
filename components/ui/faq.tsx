"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: "What types of businesses do you value?",
      a: "We provide valuation services for startups, MSMEs, privately held companies, family-owned businesses, listed companies, and growth-stage enterprises across diverse industries.",
    },
    {
      q: "Do you value businesses that are not yet profitable?",
      a: "Yes. We value pre-revenue, early-stage, and loss-making businesses by assessing their growth potential, market opportunity, business model, competitive positioning, and future cash flow prospects.",
    },
    {
      q: "Can you help us avoid unnecessary dilution or accepting a lower valuation?",
      a: "Yes. We provide independent, well-supported valuations that strengthen your position during fundraising, equity negotiations, mergers, acquisitions, and strategic transactions.",
    },
    {
      q: "How long does the valuation process take?",
      a: "Most valuation engagements are completed within 24 to 48 hours, depending on the scope of work, business complexity, and availability of the required information.",
    },
    {
      q: "Can you justify your valuation if investors challenge it?",
      a: "Yes. Every valuation is supported by transparent assumptions, robust financial analysis, industry benchmarks, and internationally recognized valuation methodologies, making it easier to defend during discussions with investors and stakeholders.",
    },
    {
      q: "How do you protect our confidential business information?",
      a: "Client confidentiality is fundamental to our practice. All information shared with us is handled securely, and we are happy to execute a Non-Disclosure Agreement (NDA) whenever required.",
    },
    {
      q: "What makes Founder's Equity different?",
      a: "Every valuation is tailored to your business, industry, growth stage, and valuation objective. We don't rely on generic templates—we deliver independent, research-driven, and decision-focused valuations designed to support fundraising, strategic planning, and long-term value creation.",
    },
    {
      q: "How are your valuation fees determined?",
      a: "Our fees are based on the scope of engagement, business complexity, valuation purpose, reporting requirements, and turnaround timeline. We provide a transparent quotation before commencing any engagement.",
    },
    {
      q: "How do we get started?",
      a: "Simply schedule an introductory consultation. We'll understand your requirements, define the scope of work, share a tailored proposal, and guide you through the entire valuation process.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 px-6 sm:px-8 lg:px-12 lg:py-28 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] border-t border-slate-200"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">FAQ</h2>
          <p className="font-serif-heading mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-slate-700">
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
                className="group border border-slate-200/80 bg-white rounded-2xl p-6 cursor-pointer hover:border-blue-500/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-sans text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                    {faq.q}
                  </h4>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 group-hover:text-blue-600 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </div>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center bg-white border border-slate-200/80 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg hover:border-blue-500/20 transition-all duration-300">
          <h4 className="font-serif-heading text-lg font-bold text-slate-900 uppercase tracking-wider">
            Still have questions?
          </h4>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Schedule a confidential consultation, and we'll be happy to discuss your valuation requirements and
            recommend the most suitable approach for your business.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#050B14] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#0B1528] hover:scale-105 hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] cursor-pointer"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
