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
  heroCtaLink: string;
  heroCta2Text: string;
  heroCta2Link: string;
  calendlyUrl: string;
  heroBgStyle: "dark_grid" | "crisp_light" | "brand_gradient" | "obsidian_minimal";
  heroImage: string;

  // Feature Card Titles, Descriptions & Images
  card1Title: string;
  card1Desc: string;
  card1Desc2: string;
  card1Image: string;

  card2Title: string;
  card2Desc: string;
  card2Desc2: string;
  card2Image: string;

  card3Title: string;
  card3Desc: string;
  card3Image: string;

  card4Title: string;
  card4Desc: string;
  card4Image: string;

  card5Title: string;
  card5Desc: string;
  card5Desc2: string;
  card5Image: string;

  featuresTitle: string;
  featuresSubtitle: string;
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  cap1Title: string;
  cap1Badge: string;
  cap1Desc: string;
  cap2Title: string;
  cap2Badge: string;
  cap2Desc: string;
  cap3Title: string;
  cap3Badge: string;
  cap3Desc: string;
  cap4Title: string;
  cap4Badge: string;
  cap4Desc: string;
  cap5Title: string;
  cap5Badge: string;
  cap5Desc: string;
  cap6Title: string;
  cap6Badge: string;
  cap6Desc: string;
  comparisonTitle: string;
  comparisonSubtitle: string;
  whyUsTitle: string;
  whyUsSubtitle: string;
  whyUsImage: string;
  whyUsBullet1: string;
  whyUsBullet2: string;
  whyUsBullet3: string;
  whyUsBullet4: string;
  whyUsBullet5: string;
  whyUsBullet6: string;
  whyUsBullet7: string;
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
  heroCtaLink: "/book-demo",
  heroCta2Text: "Start Free Trial",
  heroCta2Link: "/book-demo",
  heroImage: "/hero.png",
  calendlyUrl: "https://calendly.com/vivekkhairnar-dev/new-meeting",
  heroBgStyle: "dark_grid",

  card1Title: "Skill Matrix",
  card1Desc: "A virtually 'unbreakable' tool that basically works in real-time to showcase essential skills or competencies of your staff members, particularly, need to perform a certain task.",
  card1Desc2: "Additionally, Extra features enable you to harmonize your overall organizational activities based on performance, delivery, and core competencies.",
  card1Image: "/skillmetrics.png",

  card2Title: "Employee Metrics",
  card2Desc: "Employee competency matrix visually tracks employee skills with a super dynamic matrix grid view. Discover missing competencies, and find the right candidates for the right tasks at the right time.",
  card2Desc2: "Flexible customisations in grid view can yield you the best results in employee matrices. What are those customisations? How organisations have benefitted using these tailor-made solutions?",
  card2Image: "/emp.jpg",

  card3Title: "AI-Based Assessments",
  card3Desc: "Interactive AI bots to create super easy assessments. Self integrated, system enabled with flexible adaptability to controlling environment makes your observation tasks hassle free and step ahead.",
  card3Image: "/ai_asses.png",

  card4Title: "Multi-Skilling",
  card4Desc: "Build cross-functional teams with multi-skilling matrix dashboards. Identify talent overlap, plan succession, and train workforce for emerging technical demands.",
  card4Image: "/multi-skilling.png",

  card5Title: "Competency Mapping",
  card5Desc: "Map exact technical skills to job roles. Establish clear skill expectations and measure skill gaps across departments.",
  card5Desc2: "Standardize role benchmarks to streamline promotion criteria and internal mobility.",
  card5Image: "/compentancy-mapping.jpg",

  featuresTitle: "Everything Your Engineering Org Needs to Scale Talent",
  featuresSubtitle: "Scroll to explore how SkillMetrics automates technical evaluations, eliminates skill blind spots, and accelerates workforce capability.",
  capabilitiesTitle: "Core Platform Capabilities",
  capabilitiesSubtitle: "Purpose-built tools designed for technical recruiters, hiring managers, and enterprise engineering leads.",
  cap1Title: "Skill Matrix",
  cap1Badge: "REAL-TIME MATRIX",
  cap1Desc: "Real-time competency tracking and automated skill visualization grid. Discover missing competencies, assign right candidates to right tasks, and eliminate spreadsheet errors.",
  cap2Title: "Employee Metrics",
  cap2Badge: "TALENT ANALYTICS",
  cap2Desc: "Dynamic grid view with custom tailoring & performance tracking. Track employee growth over time with customizable matrix views and automated capability reports.",
  cap3Title: "AI-Based Assessments",
  cap3Badge: "AUTOMATED EVALUATION",
  cap3Desc: "Interactive AI engine for rapid, highly accurate candidate evaluation. Minimizes manual work, boosts employee engagement, and delivers precise skill scores automatically.",
  cap4Title: "Multi-Skilling",
  cap4Badge: "MANPOWER ALLOCATION",
  cap4Desc: "Flexible workforce allocation & runtime problem-solving. Equip employees with multiple skills, adjust manpower on the fly, and manage shifts with one click.",
  cap5Title: "Competency Mapping",
  cap5Badge: "GAP ANALYSIS",
  cap5Desc: "Functional radars, capability graphs, and training feedback. Imprint employee capabilities through radar charts, functional graphs, and flexible assessment reports.",
  cap6Title: "Up-Skilling & Re-Skilling",
  cap6Badge: "CONTINUOUS LEARNING",
  cap6Desc: "Continuous workforce learning pathways aligned to tech trends. Expand employee skillsets to keep pace with changing market demands, tech stacks, and industry shifts.",
  comparisonTitle: "Legacy Excel Spreadsheets vs. SkillMetrics Intelligence",
  comparisonSubtitle: "Drag the interactive slider below to see how error-prone manual spreadsheets compare to automated, real-time AI skill matrix tracking.",
  whyUsTitle: "Why Engineering Leaders Choose SkillMetrics",
  whyUsSubtitle: "Built specifically to eliminate engineering interview friction, reduce bad hires, and maximize developer productivity across your engineering organization.",
  whyUsImage: "/skillmetrics.png",
  whyUsBullet1: "Get rid of cumbersome manual spreadsheet, broken excel formulas.",
  whyUsBullet2: "Identify key staff members.",
  whyUsBullet3: "Minimise/Maximise trainings as circumstances demand.",
  whyUsBullet4: "Build & assign exact trainings aligned to skills.",
  whyUsBullet5: "One click Reports.",
  whyUsBullet6: "Collaborative view dashboards.",
  whyUsBullet7: "Better employee insights with highly interactive radars.",
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
  refetchSettings: () => Promise<void>;
}

const SiteSettingsContext = createContext<SiteSettingsContextType>({
  settings: defaultSiteSettings,
  updateSettings: () => { },
  resetSettings: () => { },
  refetchSettings: async () => { },
});

const STORAGE_KEY = "skillmetrics_site_settings";

export function SiteSettingsProvider({
  children,
  initialDbData,
  initialPageContent,
}: {
  children: React.ReactNode;
  initialDbData?: any;
  initialPageContent?: any[] | null;
}) {
  // Normalize and map database (snake_case) settings to context settings (camelCase)
  const dbMapped: Record<string, any> = {};
  if (initialDbData) {
    const mapping: Record<string, string> = {
      hero_title: "heroTitle",
      hero_subtitle: "heroSub",
      hero_cta_text: "heroCtaText",
      hero_image: "heroImage",
      calendly_url: "calendlyUrl",
      card1_image: "card1Image",
      card2_image: "card2Image",
      card3_image: "card3Image",
      card4_image: "card4Image",
      card5_image: "card5Image",
      features_title: "featuresTitle",
      features_subtitle: "featuresSubtitle",
      capabilities_title: "capabilitiesTitle",
      capabilities_subtitle: "capabilitiesSubtitle",
      comparison_title: "comparisonTitle",
      comparison_subtitle: "comparisonSubtitle",
      why_us_title: "whyUsTitle",
      why_us_subtitle: "whyUsSubtitle",
      roi_title: "roiTitle",
      roi_subtitle: "roiSubtitle",
      stat1_value: "stat1Value",
      stat1_label: "stat1Label",
      stat2_value: "stat2Value",
      stat2_label: "stat2Label",
      stat3_value: "stat3Value",
      stat3_label: "stat3Label",
      testimonials_title: "testimonialsTitle",
      testimonials_subtitle: "testimonialsSubtitle",
      banner_enabled: "bannerEnabled",
      banner_text: "bannerText",
      banner_link: "bannerLink",
      meta_title: "metaTitle",
      meta_description: "metaDescription",
    };

    for (const [dbKey, contextKey] of Object.entries(mapping)) {
      if (initialDbData[dbKey] !== undefined && initialDbData[dbKey] !== null && initialDbData[dbKey] !== "") {
        dbMapped[contextKey] = initialDbData[dbKey];
      }
    }
  }

  // Map page_content table sections (from /admin/pages editor) into site settings
  if (initialPageContent && Array.isArray(initialPageContent)) {
    initialPageContent.forEach((row: any) => {
      const secId = row.section_id;
      const json = row.content_json || {};

      if (secId === "hero") {
        if (json.title) dbMapped.heroTitle = json.title;
        if (json.subtitle) dbMapped.heroSub = json.subtitle;
        if (json.ctaText) dbMapped.heroCtaText = json.ctaText;
        if (json.ctaLink) dbMapped.heroCtaLink = json.ctaLink;
        if (json.ctaText2) dbMapped.heroCta2Text = json.ctaText2;
        if (json.ctaLink2) dbMapped.heroCta2Link = json.ctaLink2;
        if (json.image) dbMapped.heroImage = json.image;
      } else if (secId === "features") {
        if (json.title) dbMapped.featuresTitle = json.title;
        if (json.subtitle) dbMapped.featuresSubtitle = json.subtitle;
      } else if (secId === "card1") {
        if (json.title) dbMapped.card1Title = json.title;
        if (json.description) dbMapped.card1Desc = json.description;
        if (json.description2) dbMapped.card1Desc2 = json.description2;
        if (json.image) dbMapped.card1Image = json.image;
      } else if (secId === "card2") {
        if (json.title) dbMapped.card2Title = json.title;
        if (json.description) dbMapped.card2Desc = json.description;
        if (json.description2) dbMapped.card2Desc2 = json.description2;
        if (json.image) dbMapped.card2Image = json.image;
      } else if (secId === "card3") {
        if (json.title) dbMapped.card3Title = json.title;
        if (json.description) dbMapped.card3Desc = json.description;
        if (json.image) dbMapped.card3Image = json.image;
      } else if (secId === "card4") {
        if (json.title) dbMapped.card4Title = json.title;
        if (json.description) dbMapped.card4Desc = json.description;
        if (json.image) dbMapped.card4Image = json.image;
      } else if (secId === "card5") {
        if (json.title) dbMapped.card5Title = json.title;
        if (json.description) dbMapped.card5Desc = json.description;
        if (json.description2) dbMapped.card5Desc2 = json.description2;
        if (json.image) dbMapped.card5Image = json.image;
      } else if (secId === "capabilities") {
        if (json.title) dbMapped.capabilitiesTitle = json.title;
        if (json.subtitle) dbMapped.capabilitiesSubtitle = json.subtitle;
        if (json.cap1Title) dbMapped.cap1Title = json.cap1Title;
        if (json.cap1Badge) dbMapped.cap1Badge = json.cap1Badge;
        if (json.cap1Desc) dbMapped.cap1Desc = json.cap1Desc;
        if (json.cap2Title) dbMapped.cap2Title = json.cap2Title;
        if (json.cap2Badge) dbMapped.cap2Badge = json.cap2Badge;
        if (json.cap2Desc) dbMapped.cap2Desc = json.cap2Desc;
        if (json.cap3Title) dbMapped.cap3Title = json.cap3Title;
        if (json.cap3Badge) dbMapped.cap3Badge = json.cap3Badge;
        if (json.cap3Desc) dbMapped.cap3Desc = json.cap3Desc;
        if (json.cap4Title) dbMapped.cap4Title = json.cap4Title;
        if (json.cap4Badge) dbMapped.cap4Badge = json.cap4Badge;
        if (json.cap4Desc) dbMapped.cap4Desc = json.cap4Desc;
        if (json.cap5Title) dbMapped.cap5Title = json.cap5Title;
        if (json.cap5Badge) dbMapped.cap5Badge = json.cap5Badge;
        if (json.cap5Desc) dbMapped.cap5Desc = json.cap5Desc;
        if (json.cap6Title) dbMapped.cap6Title = json.cap6Title;
        if (json.cap6Badge) dbMapped.cap6Badge = json.cap6Badge;
        if (json.cap6Desc) dbMapped.cap6Desc = json.cap6Desc;
      } else if (secId === "comparison") {
        if (json.title) dbMapped.comparisonTitle = json.title;
        if (json.subtitle) dbMapped.comparisonSubtitle = json.subtitle;
      } else if (secId === "why_us") {
        if (json.title) dbMapped.whyUsTitle = json.title;
        if (json.subtitle) dbMapped.whyUsSubtitle = json.subtitle;
        if (json.image) dbMapped.whyUsImage = json.image;
        if (json.bullet1) dbMapped.whyUsBullet1 = json.bullet1;
        if (json.bullet2) dbMapped.whyUsBullet2 = json.bullet2;
        if (json.bullet3) dbMapped.whyUsBullet3 = json.bullet3;
        if (json.bullet4) dbMapped.whyUsBullet4 = json.bullet4;
        if (json.bullet5) dbMapped.whyUsBullet5 = json.bullet5;
        if (json.bullet6) dbMapped.whyUsBullet6 = json.bullet6;
        if (json.bullet7) dbMapped.whyUsBullet7 = json.bullet7;
      } else if (secId === "roi") {
        if (json.title) dbMapped.roiTitle = json.title;
        if (json.subtitle) dbMapped.roiSubtitle = json.subtitle;
      } else if (secId === "stats") {
        if (json.stat1Value) dbMapped.stat1Value = json.stat1Value;
        if (json.stat1Label) dbMapped.stat1Label = json.stat1Label;
        if (json.stat2Value) dbMapped.stat2Value = json.stat2Value;
        if (json.stat2Label) dbMapped.stat2Label = json.stat2Label;
        if (json.stat3Value) dbMapped.stat3Value = json.stat3Value;
        if (json.stat3Label) dbMapped.stat3Label = json.stat3Label;
      } else if (secId === "testimonials") {
        if (json.title) dbMapped.testimonialsTitle = json.title;
        if (json.subtitle) dbMapped.testimonialsSubtitle = json.subtitle;
      }
    });
  }

  // Merge: defaultSiteSettings < dbMapped (PostgreSQL DB data takes top priority)
  const baseSettings = {
    ...defaultSiteSettings,
    ...filterEmpty(dbMapped)
  };
  const [settings, setSettings] = useState<SiteSettings>(baseSettings);

  // Sync settings when server-side initialDbData / initialPageContent change
  useEffect(() => {
    setSettings({
      ...defaultSiteSettings,
      ...filterEmpty(dbMapped)
    });
  }, [initialDbData, initialPageContent]);

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

  const refetchSettings = async () => {
    try {
      const resPage = await fetch("/api/content?page=home", { cache: "no-store" });
      const pageData = await resPage.json();
      const freshDbMapped: Record<string, any> = {};

      if (pageData.success && Array.isArray(pageData.data)) {
        pageData.data.forEach((sec: any) => {
          const secId = sec.section_id;
          const json = sec.content_json || {};
          if (secId === "hero") {
            if (json.title) freshDbMapped.heroTitle = json.title;
            if (json.subtitle) freshDbMapped.heroSub = json.subtitle;
            if (json.ctaText) freshDbMapped.heroCtaText = json.ctaText;
            if (json.ctaLink) freshDbMapped.heroCtaLink = json.ctaLink;
            if (json.ctaText2) freshDbMapped.heroCta2Text = json.ctaText2;
            if (json.ctaLink2) freshDbMapped.heroCtaLink2 = json.ctaLink2;
            if (json.image) freshDbMapped.heroImage = json.image;
          } else if (secId === "features") {
            if (json.title) freshDbMapped.featuresTitle = json.title;
            if (json.subtitle) freshDbMapped.featuresSubtitle = json.subtitle;
          } else if (secId === "card1") {
            if (json.title) freshDbMapped.card1Title = json.title;
            if (json.description) freshDbMapped.card1Desc = json.description;
            if (json.description2) freshDbMapped.card1Desc2 = json.description2;
            if (json.image) freshDbMapped.card1Image = json.image;
          } else if (secId === "card2") {
            if (json.title) freshDbMapped.card2Title = json.title;
            if (json.description) freshDbMapped.card2Desc = json.description;
            if (json.description2) freshDbMapped.card2Desc2 = json.description2;
            if (json.image) freshDbMapped.card2Image = json.image;
          } else if (secId === "card3") {
            if (json.title) freshDbMapped.card3Title = json.title;
            if (json.description) freshDbMapped.card3Desc = json.description;
            if (json.image) freshDbMapped.card3Image = json.image;
          } else if (secId === "card4") {
            if (json.title) freshDbMapped.card4Title = json.title;
            if (json.description) freshDbMapped.card4Desc = json.description;
            if (json.image) freshDbMapped.card4Image = json.image;
          } else if (secId === "card5") {
            if (json.title) freshDbMapped.card5Title = json.title;
            if (json.description) freshDbMapped.card5Desc = json.description;
            if (json.description2) freshDbMapped.card5Desc2 = json.description2;
            if (json.image) freshDbMapped.card5Image = json.image;
          } else if (secId === "capabilities") {
            if (json.title) freshDbMapped.capabilitiesTitle = json.title;
            if (json.subtitle) freshDbMapped.capabilitiesSubtitle = json.subtitle;
            if (json.cap1Title) freshDbMapped.cap1Title = json.cap1Title;
            if (json.cap1Badge) freshDbMapped.cap1Badge = json.cap1Badge;
            if (json.cap1Desc) freshDbMapped.cap1Desc = json.cap1Desc;
            if (json.cap2Title) freshDbMapped.cap2Title = json.cap2Title;
            if (json.cap2Badge) freshDbMapped.cap2Badge = json.cap2Badge;
            if (json.cap2Desc) freshDbMapped.cap2Desc = json.cap2Desc;
            if (json.cap3Title) freshDbMapped.cap3Title = json.cap3Title;
            if (json.cap3Badge) freshDbMapped.cap3Badge = json.cap3Badge;
            if (json.cap3Desc) freshDbMapped.cap3Desc = json.cap3Desc;
            if (json.cap4Title) freshDbMapped.cap4Title = json.cap4Title;
            if (json.cap4Badge) freshDbMapped.cap4Badge = json.cap4Badge;
            if (json.cap4Desc) freshDbMapped.cap4Desc = json.cap4Desc;
            if (json.cap5Title) freshDbMapped.cap5Title = json.cap5Title;
            if (json.cap5Badge) freshDbMapped.cap5Badge = json.cap5Badge;
            if (json.cap5Desc) freshDbMapped.cap5Desc = json.cap5Desc;
            if (json.cap6Title) freshDbMapped.cap6Title = json.cap6Title;
            if (json.cap6Badge) freshDbMapped.cap6Badge = json.cap6Badge;
            if (json.cap6Desc) freshDbMapped.cap6Desc = json.cap6Desc;
          } else if (secId === "comparison") {
            if (json.title) freshDbMapped.comparisonTitle = json.title;
            if (json.subtitle) freshDbMapped.comparisonSubtitle = json.subtitle;
          } else if (secId === "why_us") {
            if (json.title) freshDbMapped.whyUsTitle = json.title;
            if (json.subtitle) freshDbMapped.whyUsSubtitle = json.subtitle;
            if (json.image) freshDbMapped.whyUsImage = json.image;
            if (json.bullet1) freshDbMapped.whyUsBullet1 = json.bullet1;
            if (json.bullet2) freshDbMapped.whyUsBullet2 = json.bullet2;
            if (json.bullet3) freshDbMapped.whyUsBullet3 = json.bullet3;
            if (json.bullet4) freshDbMapped.whyUsBullet4 = json.bullet4;
            if (json.bullet5) freshDbMapped.whyUsBullet5 = json.bullet5;
            if (json.bullet6) freshDbMapped.whyUsBullet6 = json.bullet6;
            if (json.bullet7) freshDbMapped.whyUsBullet7 = json.bullet7;
          } else if (secId === "roi") {
            if (json.title) freshDbMapped.roiTitle = json.title;
            if (json.subtitle) freshDbMapped.roiSubtitle = json.subtitle;
          } else if (secId === "stats") {
            if (json.stat1Value) freshDbMapped.stat1Value = json.stat1Value;
            if (json.stat1Label) freshDbMapped.stat1Label = json.stat1Label;
            if (json.stat2Value) freshDbMapped.stat2Value = json.stat2Value;
            if (json.stat2Label) freshDbMapped.stat2Label = json.stat2Label;
            if (json.stat3Value) freshDbMapped.stat3Value = json.stat3Value;
            if (json.stat3Label) freshDbMapped.stat3Label = json.stat3Label;
          } else if (secId === "testimonials") {
            if (json.title) freshDbMapped.testimonialsTitle = json.title;
            if (json.subtitle) freshDbMapped.testimonialsSubtitle = json.subtitle;
          }
        });
      }

      setSettings((prev) => ({
        ...prev,
        ...filterEmpty(freshDbMapped)
      }));
    } catch (e) {
      console.error("Failed to refetch settings from DB:", e);
    }
  };

  useEffect(() => {
    // Refetch latest DB settings on initial mount
    refetchSettings();

    const handleUpdate = () => {
      refetchSettings();
    };

    window.addEventListener("site-settings-updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    window.addEventListener("focus", handleUpdate);

    return () => {
      window.removeEventListener("site-settings-updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
      window.removeEventListener("focus", handleUpdate);
    };
  }, []);

  return (
    <SiteSettingsContext.Provider value={{ settings, updateSettings, resetSettings, refetchSettings }}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
