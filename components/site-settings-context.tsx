"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Filter out undefined, null, and empty string values so they don't override defaults
function filterEmpty(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined && value !== null && value !== "") {
      result[key] = value;
    }
  }
  return result;
}


export interface NavLinkItem {
  id: string;
  label: string;
  url: string;
}

export interface SiteSettings {
  // General settings
  siteName: string;
  tagline: string;
  supportEmail: string;
  timezone: string;
  language: string;
  logoUrl: string;
  faviconUrl: string;

  // Content settings
  navbarVariant: "live_component" | "modern_glass" | "minimal_enterprise" | "centered_brand";
  footerVariant: "dark_matrix" | "minimal_utility" | "brand_yellow";
  navLinks: NavLinkItem[];
  heroTitle: string;
  heroSub: string;
  heroCtaText: string;
  calendlyUrl: string;
  heroBgStyle: "dark_grid" | "crisp_light" | "brand_gradient" | "obsidian_minimal";

  // Feature Card Images
  card1Image: string;
  card2Image: string;
  card3Image: string;
  card4Image: string;
  card5Image: string;

  featuresTitle: string;
  featuresSubtitle: string;
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  comparisonTitle: string;
  comparisonSubtitle: string;
  whyUsTitle: string;
  whyUsSubtitle: string;
  roiTitle: string;
  roiSubtitle: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;

  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;

  // Banner settings
  bannerEnabled: boolean;
  bannerText: string;
  bannerLink: string;

  // SEO settings
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  allowIndexing: boolean;
  googleAnalyticsId: string;
  googleSiteVerification: string;
}

export const defaultSiteSettings: SiteSettings = {
  siteName: "SkillMetrics Inc.",
  tagline: "India's #1 Skill Matrix & Competency Management Platform",
  supportEmail: "support@skillmetrics.io",
  timezone: "Asia/Kolkata",
  language: "en-US",
  logoUrl: "/logo-3.png",
  faviconUrl: "/favicon.ico",

  navbarVariant: "live_component",
  footerVariant: "dark_matrix",
  navLinks: [
    { id: "1", label: "Integrations", url: "/integrations" },
    { id: "2", label: "Resources", url: "/resources" },
    { id: "3", label: "Contact Us", url: "/contact" },
  ],
  heroTitle: "India's #1 Skill Management Software",
  heroSub: "Automate workforce skill matrices, benchmark role competencies, and evaluate developer capabilities 3x faster with objective AI assessments.",
  heroCtaText: "Book a Demo",
  calendlyUrl: "https://calendly.com/vivekkhairnar-dev/new-meeting",
  heroBgStyle: "dark_grid",

  card1Image: "/skillmetrics.png",
  card2Image: "/emp.jpg",
  card3Image: "/ai_asses.png",
  card4Image: "/multi-skilling.png",
  card5Image: "/compentancy-mapping.jpg",

  featuresTitle: "Everything Your Engineering Org Needs to Scale Talent",
  featuresSubtitle: "Scroll to explore how SkillMetrics automates technical evaluations, eliminates skill blind spots, and accelerates workforce capability.",
  capabilitiesTitle: "Core Platform Capabilities",
  capabilitiesSubtitle: "Purpose-built tools designed for technical recruiters, hiring managers, and enterprise engineering leads.",
  comparisonTitle: "Legacy Excel Spreadsheets vs. SkillMetrics Intelligence",
  comparisonSubtitle: "Drag the interactive slider below to see how error-prone manual spreadsheets compare to automated, real-time AI skill matrix tracking.",
  whyUsTitle: "Why Engineering Leaders Choose SkillMetrics",
  whyUsSubtitle: "Built specifically to eliminate engineering interview friction, reduce bad hires, and maximize developer productivity across your engineering organization.",
  roiTitle: "Save Up To $1M+ In Annual Engineering & Hiring Costs",
  roiSubtitle: "By automating technical candidate screening, eliminating mis-hires, and reclaiming developer interview hours, SkillMetrics delivers measurable enterprise savings from Month 1.",
  testimonialsTitle: "What Our Clients Say",
  testimonialsSubtitle: "Trusted by CTOs, VPs of Engineering, and HR Leaders at leading tech enterprises.",

  stat1Value: "1 Lakh+",
  stat1Label: "Skilled Up",
  stat2Value: "50+",
  stat2Label: "Organizations",
  stat3Value: "50,000+",
  stat3Label: "Reskilled",

  bannerEnabled: false,
  bannerText: "",
  bannerLink: "",

  metaTitle: "Skill Management & Training | Competency-Based System",
  metaDescription: "Optimize competency and skill management to enhance workforce performance. Streamline development, skill matrices, training records, and developer capability tracking with SkillMetrics.",
  keywords: "Skill Management, Competency Based System, Skill Matrix, Workforce Performance",
  allowIndexing: true,
  googleAnalyticsId: "G-SKILLMETRICS99",
  googleSiteVerification: "google-site-verification-skillmetrics-12345",
};

interface SiteSettingsContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  resetSettings: () => void;
}

const SiteSettingsContext = createContext<SiteSettingsContextType>({
  settings: defaultSiteSettings,
  updateSettings: () => { },
  resetSettings: () => { },
});

const STORAGE_KEY = "skillmetrics_site_settings";

export function SiteSettingsProvider({
  children,
  initialSanityData,
}: {
  children: React.ReactNode;
  initialSanityData?: Partial<SiteSettings>;
}) {
  // Normalize Sanity field names to context field names
  // Sanity uses 'heroSubtitle' but context uses 'heroSub'
  const normalizedSanity = { ...(initialSanityData || {}) } as any;
  if (normalizedSanity.heroSubtitle && !normalizedSanity.heroSub) {
    normalizedSanity.heroSub = normalizedSanity.heroSubtitle;
  }

  // Merge: defaults < sanityData < localStorage
  const baseSettings = { ...defaultSiteSettings, ...filterEmpty(normalizedSanity) };
  const [settings, setSettings] = useState<SiteSettings>(baseSettings);

  // Load from localStorage on mount (localStorage overrides Sanity values for admin panel)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSettings({ ...baseSettings, ...JSON.parse(stored) });
      }
    } catch (e) {
      console.error("Failed to load site settings from storage:", e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        window.dispatchEvent(new Event("site-settings-updated"));
      } catch (e) {
        console.error("Failed to save site settings:", e);
      }
      return updated;
    });
  };

  const resetSettings = () => {
    setSettings(defaultSiteSettings);
    try {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new Event("site-settings-updated"));
    } catch (e) {
      console.error("Failed to reset site settings:", e);
    }
  };

  useEffect(() => {
    const handleUpdate = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setSettings({ ...defaultSiteSettings, ...JSON.parse(stored) });
        }
      } catch (e) {
        console.error("Failed to sync site settings:", e);
      }
    };

    window.addEventListener("site-settings-updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("site-settings-updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return (
    <SiteSettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
