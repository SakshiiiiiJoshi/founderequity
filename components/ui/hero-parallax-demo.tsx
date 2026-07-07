"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Capital Structure Modeling",
    link: "#service",
    thumbnail: "/hero-slide-2.png",
  },
  {
    title: "Founder Equity Planning",
    link: "#service",
    thumbnail: "/hero-slide-1.png",
  },
  {
    title: "Venture Financing Advisory",
    link: "#service",
    thumbnail: "/hero-slide-4.png",
  },
  {
    title: "Cap Table Audit",
    link: "#service",
    thumbnail: "/hero-slide-2.png",
  },
  {
    title: "Institutional Dilution Analysis",
    link: "#service",
    thumbnail: "/hero-slide-3.png",
  },
  {
    title: "Secondary Liquidity Structuring",
    link: "#service",
    thumbnail: "/hero-slide-1.png",
  },
  {
    title: "Growth Capital Advisory",
    link: "#service",
    thumbnail: "/hero-slide-4.png",
  },
  {
    title: "Corporate Governance Review",
    link: "#service",
    thumbnail: "/hero-slide-3.png",
  },
  {
    title: "M&A Advisory Services",
    link: "#service",
    thumbnail: "/hero-slide-2.png",
  },
  {
    title: "Equity Incentive Design",
    link: "#service",
    thumbnail: "/hero-slide-1.png",
  },
  {
    title: "Seed Stage Capital Planning",
    link: "#service",
    thumbnail: "/hero-slide-4.png",
  },
  {
    title: "Exit Strategy Modeling",
    link: "#service",
    thumbnail: "/hero-slide-3.png",
  },
  {
    title: "Dilution Simulation",
    link: "#service",
    thumbnail: "/hero-slide-2.png",
  },
  {
    title: "Founder Liquidity Advisory",
    link: "#service",
    thumbnail: "/hero-slide-1.png",
  },
  {
    title: "Pre-IPO Equity Structure",
    link: "#service",
    thumbnail: "/hero-slide-4.png",
  },
];
