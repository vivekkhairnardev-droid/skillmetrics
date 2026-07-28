import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/sanity/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skillmetrics.net";

  const staticRoutes = [
    "",
    "/features",
    "/features/skill-matrix",
    "/features/employee-metrics",
    "/features/ai-assessments",
    "/features/multi-skilling",
    "/features/competency-mapping",
    "/integrations",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const posts = await getBlogPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
