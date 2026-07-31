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
    keywords?: string[];
  };
}

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
    keywords?: string[];
  };
}

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
  calendlyUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
}

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
