import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

const BASE_URL = "https://jetzaviation.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/about/team", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/about/testimonials", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/services/aircraft-brokerage", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/services/aircraft-acquisition", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/services/aircraft-valuation", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/services/aviation-consulting", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/resources", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/resources/aircraft-comparison", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/resources/market-insights", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.8 },
  ].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/resources/market-insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
