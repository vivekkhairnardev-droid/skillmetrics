"use server";

import { sql } from "@/lib/db";
import type { BlogPost, CaseStudy, ResourceItem, SiteSettingsData, ContactPageData } from "./types";

// Helper to disable caching if needed, though we handle it at the Next.js page level
const fetchOptions = { cache: "no-store" as const };

// Dummy urlFor helper for backward compatibility (in case components import it)
function urlFor(source: any) {
  if (typeof source === "string") return source;
  if (source?.asset?.url) return source.asset.url;
  return "/skillmetrics.png";
}

// ----- Blog Posts -----

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sql`
      SELECT * FROM posts ORDER BY published_at DESC;
    `;

    return (posts || []).map((p: any) => ({
      _id: String(p.id),
      title: p.title || "Untitled Article",
      slug: p.slug || String(p.id),
      excerpt: p.excerpt || "Read the latest update on SkillMetrics.",
      mainImage: p.main_image || "/skillmetrics.png",
      publishedAt: p.published_at
        ? new Date(p.published_at).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      readingTime: p.reading_time || "5 min read",
      category: p.category || "Product Updates",
      author: {
        name: p.author_name || "SkillMetrics Team",
        role: p.author_role || "Product Editorial",
        avatar: p.author_avatar || undefined,
      },
      seo: {
        metaTitle: p.seo_title || p.title,
        metaDescription: p.seo_description || p.excerpt,
      },
      content: p.content || p.excerpt,
    }));
  } catch (error) {
    console.warn("Neon fetch error (posts):", error);
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const allPosts = await getBlogPosts();
  return allPosts.find((p) => p.slug === slug || p._id === slug);
}

// ----- Case Studies -----

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const studies = await sql`
      SELECT * FROM case_studies ORDER BY published_at DESC;
    `;

    return (studies || []).map((s: any) => ({
      _id: String(s.id),
      title: s.title || "Untitled Case Study",
      slug: s.slug || String(s.id),
      companyName: s.company_name || "Company",
      companyLogo: s.company_logo || undefined,
      industry: s.industry || "Other",
      excerpt: s.excerpt || "",
      coverImage: s.cover_image || "/skillmetrics.png",
      challenge: s.challenge || undefined,
      solution: s.solution || undefined,
      results: Array.isArray(s.results) ? s.results : [],
      testimonialQuote: s.testimonial_quote || undefined,
      testimonialAuthor: s.testimonial_author || undefined,
      testimonialRole: s.testimonial_role || undefined,
      content: s.content || undefined,
      publishedAt: s.published_at
        ? new Date(s.published_at).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      seo: {
        metaTitle: s.seo_title || s.title,
        metaDescription: s.seo_description || s.excerpt,
      },
    }));
  } catch (error) {
    console.warn("Neon fetch error (case studies):", error);
    return [];
  }
}

export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | undefined> {
  const all = await getCaseStudies();
  return all.find((s) => s.slug === slug || s._id === slug);
}

// ----- Resources & Frameworks -----

export async function getResources(): Promise<ResourceItem[]> {
  try {
    const items = await sql`
      SELECT * FROM resources ORDER BY published_at DESC;
    `;

    return (items || []).map((r: any) => ({
      _id: String(r.id),
      title: r.title || "Untitled Resource",
      slug: r.slug || String(r.id),
      category: r.category || "Skill Frameworks",
      badge: r.badge || "Featured Resource",
      readTime: r.read_time || "10 min read",
      summary: r.summary || "",
      image: r.image || "/skillmetrics.png",
      author: r.author || "SkillMetrics Practice Group",
      authorRole: r.author_role || "Talent Architecture & Research",
      publishedAt: r.published_at
        ? new Date(r.published_at).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      keyTakeaways: Array.isArray(r.key_takeaways) ? r.key_takeaways : [],
      content: r.content || undefined,
      seo: {
        metaTitle: r.seo_title || r.title,
        metaDescription: r.seo_description || r.summary,
      },
    }));
  } catch (error) {
    console.warn("Neon fetch error (resources):", error);
    return [];
  }
}

export async function getResourceBySlug(
  slug: string
): Promise<ResourceItem | undefined> {
  const all = await getResources();
  return all.find((r) => r.slug === slug || r._id === slug);
}

// ----- Site Settings (Singleton) -----

export async function getSiteSettings(): Promise<SiteSettingsData> {
  try {
    const settings = await sql`
      SELECT * FROM site_settings WHERE id = 1 LIMIT 1;
    `;

    if (!settings || settings.length === 0) {
      return {};
    }

    const r = settings[0];
    return {
      heroTitle: r.hero_title || undefined,
      heroSubtitle: r.hero_subtitle || undefined,
      heroCtaText: r.hero_cta_text || undefined,
      calendlyUrl: r.calendly_url || undefined,
      featuresTitle: r.features_title || undefined,
      featuresSubtitle: r.features_subtitle || undefined,
      card1Image: r.card1_image || undefined,
      card2Image: r.card2_image || undefined,
      card3Image: r.card3_image || undefined,
      card4Image: r.card4_image || undefined,
      card5Image: r.card5_image || undefined,
      capabilitiesTitle: r.capabilities_title || undefined,
      capabilitiesSubtitle: r.capabilities_subtitle || undefined,
      comparisonTitle: r.comparison_title || undefined,
      comparisonSubtitle: r.comparison_subtitle || undefined,
      whyUsTitle: r.why_us_title || undefined,
      whyUsSubtitle: r.why_us_subtitle || undefined,
      roiTitle: r.roi_title || undefined,
      roiSubtitle: r.roi_subtitle || undefined,
      stat1Value: r.stat1_value || undefined,
      stat1Label: r.stat1_label || undefined,
      stat2Value: r.stat2_value || undefined,
      stat2Label: r.stat2_label || undefined,
      stat3Value: r.stat3_value || undefined,
      stat3Label: r.stat3_label || undefined,
      testimonialsTitle: r.testimonials_title || undefined,
      testimonialsSubtitle: r.testimonials_subtitle || undefined,
      bannerEnabled: r.banner_enabled ?? false,
      bannerText: r.banner_text || undefined,
      bannerLink: r.banner_link || undefined,
      metaTitle: r.meta_title || undefined,
      metaDescription: r.meta_description || undefined,
    };
  } catch (error) {
    console.warn("Neon fetch error (site settings):", error);
    return {};
  }
}

// ----- Contact Page Settings (Singleton) -----

export async function getContactPageSettings(): Promise<ContactPageData> {
  try {
    const settings = await sql`
      SELECT * FROM contact_page_settings WHERE id = 1 LIMIT 1;
    `;

    if (!settings || settings.length === 0) {
      return {};
    }

    const r = settings[0];
    return {
      heroTitle: r.hero_title || undefined,
      heroSubtitle: r.hero_subtitle || undefined,
      email: r.email || undefined,
      ukOfficeLabel: r.uk_office_label || undefined,
      ukOfficeBadge: r.uk_office_badge || undefined,
      ukOfficeAddress: r.uk_office_address || undefined,
      ukOfficePhone: r.uk_office_phone || undefined,
      indiaOfficeLabel: r.india_office_label || undefined,
      indiaOfficeBadge: r.india_office_badge || undefined,
      indiaOfficeAddress: r.india_office_address || undefined,
      indiaOfficePhone1: r.india_office_phone1 || undefined,
      indiaOfficePhone2: r.india_office_phone2 || undefined,
      operatingHours: r.operating_hours || undefined,
      slaNote: r.sla_note || undefined,
      securityTitle: r.security_title || undefined,
      securityDescription: r.security_description || undefined,
      formTitle: r.form_title || undefined,
      formSubtitle: r.form_subtitle || undefined,
      successMessage: r.success_message || undefined,
      successDescription: r.success_description || undefined,
    };
  } catch (error) {
    console.warn("Neon fetch error (contact page settings):", error);
    return {};
  }
}
