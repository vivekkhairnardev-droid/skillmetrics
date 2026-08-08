import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skillmetrics.net";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Explicit rules for AI Search Engines (ChatGPT, Claude, Gemini, Perplexity)
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Google-Extended",
          "PerplexityBot",
          "Bytespider",
          "Applebot-Extended"
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
