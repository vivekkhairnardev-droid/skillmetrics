import { MetadataRoute } from "next";
import { sql } from "@/lib/db";

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
    "/resources",
    "/case-studies",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await sql`SELECT slug, updated_at, created_at FROM posts WHERE published = true ORDER BY created_at DESC;`;
    if (posts && Array.isArray(posts)) {
      blogRoutes = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updated_at ? new Date(post.updated_at) : new Date(post.created_at || Date.now()),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    }
  } catch (e) {
    console.error("Failed to fetch blog routes for sitemap:", e);
  }

  return [...staticRoutes, ...blogRoutes];
}
