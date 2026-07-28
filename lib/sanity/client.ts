import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { projectId, dataset, apiVersion, useCdn } from "./config";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Ensure live updates show immediately without CDN caching
  stega: false,
});

// Helper to disable Next.js fetch cache for all Sanity queries
const fetchOptions = { cache: "no-store" as const };

// Image URL builder for Sanity-hosted images
const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: any) {
  return builder.image(source);
}

// ----- Blog Posts -----

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage?: string;
  publishedAt: string;
  readingTime?: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  content?: any;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    if (!rawProjectId || rawProjectId === "demo_project_id") {
      return [];
    }
    const posts = await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        "mainImage": mainImage.asset->url,
        publishedAt,
        category,
        "authorName": authorName,
        seo,
        content
      }`,
      {},
      { next: { revalidate: 0 } }
    );

    return (posts || []).map((p: any) => ({
      _id: p._id,
      title: p.title || "Untitled Article",
      slug: p.slug || p._id,
      excerpt: p.excerpt || "Read the latest update on SkillMetrics.",
      mainImage: p.mainImage || "/skillmetrics.png",
      publishedAt: p.publishedAt
        ? new Date(p.publishedAt).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      readingTime: "5 min read",
      category: p.category || "Product Updates",
      author: {
        name: p.authorName || "SkillMetrics Team",
        role: "Product Editorial",
      },
      seo: p.seo || { metaTitle: p.title, metaDescription: p.excerpt },
      content: p.content || p.excerpt,
    }));
  } catch (error) {
    console.warn("Sanity fetch error (posts):", error);
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

export interface CaseStudy {
  _id: string;
  title: string;
  slug: string;
  companyName: string;
  companyLogo?: string;
  industry: string;
  excerpt: string;
  coverImage?: string;
  challenge?: string;
  solution?: string;
  results?: { metric: string; label: string }[];
  testimonialQuote?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
  content?: any;
  publishedAt: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    if (!rawProjectId || rawProjectId === "demo_project_id") {
      return [];
    }
    const studies = await client.fetch(
      `*[_type == "caseStudy"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        companyName,
        "companyLogo": companyLogo.asset->url,
        industry,
        excerpt,
        "coverImage": coverImage.asset->url,
        challenge,
        solution,
        results,
        testimonialQuote,
        testimonialAuthor,
        testimonialRole,
        content,
        publishedAt,
        seo
      }`,
      {},
      { next: { revalidate: 0 } }
    );

    return (studies || []).map((s: any) => ({
      _id: s._id,
      title: s.title || "Untitled Case Study",
      slug: s.slug || s._id,
      companyName: s.companyName || "Company",
      companyLogo: s.companyLogo,
      industry: s.industry || "Other",
      excerpt: s.excerpt || "",
      coverImage: s.coverImage || "/skillmetrics.png",
      challenge: s.challenge,
      solution: s.solution,
      results: s.results || [],
      testimonialQuote: s.testimonialQuote,
      testimonialAuthor: s.testimonialAuthor,
      testimonialRole: s.testimonialRole,
      content: s.content,
      publishedAt: s.publishedAt
        ? new Date(s.publishedAt).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      seo: s.seo,
    }));
  } catch (error) {
    console.warn("Sanity fetch error (case studies):", error);
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

export interface ResourceItem {
  _id: string;
  title: string;
  slug: string;
  category: string;
  badge?: string;
  readTime?: string;
  summary: string;
  image?: string;
  author: string;
  authorRole?: string;
  publishedAt: string;
  keyTakeaways?: string[];
  content?: any;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export async function getResources(): Promise<ResourceItem[]> {
  try {
    const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    if (!rawProjectId || rawProjectId === "demo_project_id") {
      return [];
    }
    const items = await client.fetch(
      `*[_type == "resource"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        category,
        badge,
        readTime,
        summary,
        "image": image.asset->url,
        author,
        authorRole,
        publishedAt,
        keyTakeaways,
        content,
        seo
      }`,
      {},
      { next: { revalidate: 0 } }
    );

    return (items || []).map((r: any) => ({
      _id: r._id,
      title: r.title || "Untitled Resource",
      slug: r.slug || r._id,
      category: r.category || "Skill Frameworks",
      badge: r.badge || "Featured Resource",
      readTime: r.readTime || "10 min read",
      summary: r.summary || "",
      image: r.image || "/skillmetrics.png",
      author: r.author || "SkillMetrics Practice Group",
      authorRole: r.authorRole || "Talent Architecture & Research",
      publishedAt: r.publishedAt
        ? new Date(r.publishedAt).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      keyTakeaways: r.keyTakeaways || [],
      content: r.content,
      seo: r.seo,
    }));
  } catch (error) {
    console.warn("Sanity fetch error (resources):", error);
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

export interface SiteSettingsData {
  heroTitle?: string;
  heroSubtitle?: string;
  heroCtaText?: string;
  featuresTitle?: string;
  featuresSubtitle?: string;
  card1Image?: string;
  card2Image?: string;
  card3Image?: string;
  card4Image?: string;
  card5Image?: string;
  capabilitiesTitle?: string;
  capabilitiesSubtitle?: string;
  comparisonTitle?: string;
  comparisonSubtitle?: string;
  whyUsTitle?: string;
  whyUsSubtitle?: string;
  roiTitle?: string;
  roiSubtitle?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
  testimonialsTitle?: string;
  testimonialsSubtitle?: string;
  bannerEnabled?: boolean;
  bannerText?: string;
  bannerLink?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export async function getSiteSettings(): Promise<SiteSettingsData> {
  try {
    const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    if (!rawProjectId || rawProjectId === "demo_project_id") {
      return {};
    }
    const settings = await client.fetch(
      `*[_type == "siteSettings"][0] {
        heroTitle,
        heroSubtitle,
        heroCtaText,
        featuresTitle,
        featuresSubtitle,
        "card1Image": card1Image.asset->url,
        "card2Image": card2Image.asset->url,
        "card3Image": card3Image.asset->url,
        "card4Image": card4Image.asset->url,
        "card5Image": card5Image.asset->url,
        capabilitiesTitle,
        capabilitiesSubtitle,
        comparisonTitle,
        comparisonSubtitle,
        whyUsTitle,
        whyUsSubtitle,
        roiTitle,
        roiSubtitle,
        stat1Value,
        stat1Label,
        stat2Value,
        stat2Label,
        stat3Value,
        stat3Label,
        testimonialsTitle,
        testimonialsSubtitle,
        bannerEnabled,
        bannerText,
        bannerLink,
        metaTitle,
        metaDescription
      }`,
      {},
      { next: { revalidate: 0 } }
    );
    return settings || {};
  } catch (error) {
    console.warn("Sanity fetch error (site settings):", error);
    return {};
  }
}

// ----- Contact Page Settings (Singleton) -----

export interface ContactPageData {
  heroTitle?: string;
  heroSubtitle?: string;
  email?: string;
  ukOfficeLabel?: string;
  ukOfficeBadge?: string;
  ukOfficeAddress?: string;
  ukOfficePhone?: string;
  indiaOfficeLabel?: string;
  indiaOfficeBadge?: string;
  indiaOfficeAddress?: string;
  indiaOfficePhone1?: string;
  indiaOfficePhone2?: string;
  operatingHours?: string;
  slaNote?: string;
  securityTitle?: string;
  securityDescription?: string;
  formTitle?: string;
  formSubtitle?: string;
  successMessage?: string;
  successDescription?: string;
}

export async function getContactPageSettings(): Promise<ContactPageData> {
  try {
    const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    if (!rawProjectId || rawProjectId === "demo_project_id") {
      return {};
    }
    const settings = await client.fetch(
      `*[_type == "contactPage"][0] {
        heroTitle,
        heroSubtitle,
        email,
        ukOfficeLabel,
        ukOfficeBadge,
        ukOfficeAddress,
        ukOfficePhone,
        indiaOfficeLabel,
        indiaOfficeBadge,
        indiaOfficeAddress,
        indiaOfficePhone1,
        indiaOfficePhone2,
        operatingHours,
        slaNote,
        securityTitle,
        securityDescription,
        formTitle,
        formSubtitle,
        successMessage,
        successDescription
      }`,
      {},
      { next: { revalidate: 0 } }
    );
    return settings || {};
  } catch (error) {
    console.warn("Sanity fetch error (contact page):", error);
    return {};
  }
}
