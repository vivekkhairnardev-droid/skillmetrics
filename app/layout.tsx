import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteSettingsProvider } from "@/components/site-settings-context";
import { JsonLd } from "@/components/json-ld";
import { sql } from "@/lib/db";

// Always fetch fresh settings from DB
export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skillmetrics.net";
  let dbSettings: any = null;

  try {
    const siteSettings = await sql`SELECT * FROM site_settings WHERE id = 1 LIMIT 1;`;
    if (siteSettings && siteSettings[0]) {
      dbSettings = siteSettings[0];
    }
  } catch (e) {
    console.error("Failed to fetch site settings for metadata:", e);
  }

  const title =
    dbSettings?.meta_title ||
    "Skill Management & Training | Competency-Based System | SkillMetrics";
  const description =
    dbSettings?.meta_description ||
    "India's #1 Skill Management Software. Automate workforce skill matrices, benchmark role competencies, and evaluate developer capabilities 3x faster with objective AI assessments.";

  const keywordsString =
    dbSettings?.keywords ||
    "Skill Management, Competency Based System, Skill Matrix, Workforce Performance, Training Records, Employee Assessments, AI Skills Software, Developer Competency Mapping";
  const keywords = keywordsString.split(",").map((k: string) => k.trim());

  const allowIndexing = dbSettings?.allow_indexing ?? true;

  return {
    title: {
      default: title,
      template: "%s | SkillMetrics Intelligence"
    },
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: "/"
    },
    robots: {
      index: allowIndexing,
      follow: allowIndexing,
      googleBot: {
        index: allowIndexing,
        follow: allowIndexing,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "SkillMetrics",
      images: [
        {
          url: `${baseUrl}/skillmetrics.png`,
          width: 1200,
          height: 630,
          alt: "SkillMetrics — India's #1 Skill Management Software"
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/skillmetrics.png`],
      creator: "@skillmetrics"
    },
    verification: {
      google: dbSettings?.google_site_verification || undefined
    }
  };
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch site settings and page_content from Neon Postgres database
  let dbSettings = null;
  let dbPageContent = null;

  try {
    const siteSettings = await sql`SELECT * FROM site_settings WHERE id = 1 LIMIT 1;`;
    if (siteSettings && siteSettings[0]) {
      dbSettings = siteSettings[0];
    }
  } catch (e) {
    console.error("Failed to fetch site settings from database:", e);
  }

  try {
    const homeContent = await sql`SELECT * FROM page_content WHERE page_slug = 'home';`;
    if (homeContent && homeContent.length > 0) {
      dbPageContent = homeContent;
    }
  } catch (e) {
    console.error("Failed to fetch home page content from database:", e);
  }

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, geistSans.variable, geistMono.variable, plusJakartaSans.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd />
        <SiteSettingsProvider initialDbData={dbSettings} initialPageContent={dbPageContent}>
          {children}
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
