export interface BlogPost {
  id: number | string;
  _id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: any;
  mainImage?: string;
  main_image?: string;
  publishedAt?: string;
  published_at?: string;
  created_at?: string;
  readingTime?: string;
  reading_time?: string;
  category?: string;
  authorName?: string;
  author_name?: string;
  authorRole?: string;
  author_role?: string;
  authorAvatar?: string;
  author_avatar?: string;
  author?: {
    name: string;
    role: string;
    avatar?: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  seo_title?: string;
  seo_description?: string;
}

export interface CaseStudy {
  id: number | string;
  _id?: string;
  title: string;
  slug: string;
  companyName?: string;
  company_name?: string;
  industry?: string;
  logo?: string;
  coverImage?: string;
  cover_image?: string;
  excerpt?: string;
  challenge?: string;
  solution?: string;
  testimonialQuote?: string;
  testimonial_quote?: string;
  testimonialAuthor?: string;
  testimonial_author?: string;
  testimonialRole?: string;
  testimonial_role?: string;
  results?: Array<{ metric: string; label: string }>;
  publishedAt?: string;
  published_at?: string;
  created_at?: string;
  content?: any;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  seo_title?: string;
  seo_description?: string;
}

export interface ResourceItem {
  id: number | string;
  _id?: string;
  title: string;
  slug: string;
  category?: string;
  badge?: string;
  readTime?: string;
  read_time?: string;
  summary?: string;
  description?: string;
  image?: string;
  author?: string;
  authorName?: string;
  author_name?: string;
  authorRole?: string;
  author_role?: string;
  keyTakeaways?: string[];
  content?: any;
  publishedAt?: string;
  published_at?: string;
  created_at?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  seo_title?: string;
  seo_description?: string;
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
