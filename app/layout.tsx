import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteSettingsProvider } from "@/components/site-settings-context";
import { getSiteSettings } from "@/lib/sanity/client";

// Always fetch fresh settings from Sanity (no caching)
export const dynamic = "force-dynamic";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skill Management & Training | Competency-Based System",
  description: "Optimize competency and skill management to enhance workforce performance. Streamline development, skill matrices, training records, and developer capability tracking with SkillMetrics.",
  keywords: ["Skill Management", "Competency Based System", "Skill Matrix", "Workforce Performance", "Training Records", "Employee Assessments"],
  openGraph: {
    title: "Skill Management & Training | Competency-Based System",
    description: "Optimize competency and skill management to enhance workforce performance. Streamline development and maximize employee potential today.",
    url: "https://skillmetrics.net",
    siteName: "SkillMetrics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skill Management & Training | Competency-Based System",
    description: "Optimize competency and skill management to enhance workforce performance.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch site settings from Sanity CMS (server-side)
  const sanitySettings = await getSiteSettings();

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, geistSans.variable, geistMono.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteSettingsProvider initialSanityData={sanitySettings as any}>
          {children}
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
