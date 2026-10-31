import type { MetadataRoute } from "next";

const baseUrl = "https://www.foundersequity.in";

type RouteConfig = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified?: Date;
};

const routes: RouteConfig[] = [
  // Core pages — highest priority, crawled frequently
  { path: "",               changeFrequency: "weekly",  priority: 1.0 },
  { path: "/services",      changeFrequency: "weekly",  priority: 0.9 },
  { path: "/about",         changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact",       changeFrequency: "monthly", priority: 0.7 },

  // Legal pages — rarely change
  { path: "/privacy-policy",        changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions",  changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified: lastModified ?? new Date(),
    changeFrequency,
    priority,
  }));
}
