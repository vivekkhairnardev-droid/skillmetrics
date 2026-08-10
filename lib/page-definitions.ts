// Shared page content definitions for the admin Pages editor.
// Each entry defines a page, its sections, and the editable fields within each section.

export type FieldType = "text" | "textarea" | "image";

export interface PageField {
  key: string;
  label: string;
  type: FieldType;
}

export interface PageSection {
  id: string;
  name: string;
  fields: PageField[];
}

export interface PageDefinition {
  slug: string;
  name: string;
  path: string;
  sections: PageSection[];
}

export const ALL_PAGES: PageDefinition[] = [
  {
    slug: "home",
    name: "Home Page",
    path: "/",
    sections: [
      {
        id: "hero",
        name: "Hero Section",
        fields: [
          { key: "title", label: "Hero Title", type: "text" },
          { key: "subtitle", label: "Hero Subtitle", type: "textarea" },
          { key: "ctaText", label: "Primary CTA Button Text", type: "text" },
          { key: "ctaLink", label: "Primary CTA Button Link (URL)", type: "text" },
          { key: "ctaText2", label: "Secondary CTA Button Text", type: "text" },
          { key: "ctaLink2", label: "Secondary CTA Button Link (URL)", type: "text" },
          { key: "image", label: "Hero Right Side Image (URL or Upload)", type: "image" },
        ],
      },
      {
        id: "features",
        name: "Features Section",
        fields: [
          { key: "title", label: "Section Title", type: "text" },
          { key: "subtitle", label: "Section Subtitle", type: "textarea" },
        ],
      },
      {
        id: "card1",
        name: "Feature Card 1 — Skill Matrix",
        fields: [
          { key: "title", label: "Card Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "description2", label: "Additional Info", type: "textarea" },
          { key: "image", label: "Card Image", type: "image" },
        ],
      },
      {
        id: "card2",
        name: "Feature Card 2 — Employee Metrics",
        fields: [
          { key: "title", label: "Card Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "description2", label: "Additional Info", type: "textarea" },
          { key: "image", label: "Card Image", type: "image" },
        ],
      },
      {
        id: "card3",
        name: "Feature Card 3 — AI Assessments",
        fields: [
          { key: "title", label: "Card Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "image", label: "Card Image", type: "image" },
        ],
      },
      {
        id: "card4",
        name: "Feature Card 4 — Multi-Skilling",
        fields: [
          { key: "title", label: "Card Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "image", label: "Card Image", type: "image" },
        ],
      },
      {
        id: "card5",
        name: "Feature Card 5 — Competency Mapping",
        fields: [
          { key: "title", label: "Card Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "description2", label: "Additional Info", type: "textarea" },
          { key: "image", label: "Card Image", type: "image" },
        ],
      },
      {
        id: "capabilities",
        name: "Core Platform Capabilities",
        fields: [
          { key: "title", label: "Section Main Title", type: "text" },
          { key: "subtitle", label: "Section Subtitle", type: "textarea" },
          { key: "cap1Title", label: "Capability 1 Title", type: "text" },
          { key: "cap1Badge", label: "Capability 1 Badge", type: "text" },
          { key: "cap1Desc", label: "Capability 1 Description", type: "textarea" },
          { key: "cap2Title", label: "Capability 2 Title", type: "text" },
          { key: "cap2Badge", label: "Capability 2 Badge", type: "text" },
          { key: "cap2Desc", label: "Capability 2 Description", type: "textarea" },
          { key: "cap3Title", label: "Capability 3 Title", type: "text" },
          { key: "cap3Badge", label: "Capability 3 Badge", type: "text" },
          { key: "cap3Desc", label: "Capability 3 Description", type: "textarea" },
          { key: "cap4Title", label: "Capability 4 Title", type: "text" },
          { key: "cap4Badge", label: "Capability 4 Badge", type: "text" },
          { key: "cap4Desc", label: "Capability 4 Description", type: "textarea" },
          { key: "cap5Title", label: "Capability 5 Title", type: "text" },
          { key: "cap5Badge", label: "Capability 5 Badge", type: "text" },
          { key: "cap5Desc", label: "Capability 5 Description", type: "textarea" },
          { key: "cap6Title", label: "Capability 6 Title", type: "text" },
          { key: "cap6Badge", label: "Capability 6 Badge", type: "text" },
          { key: "cap6Desc", label: "Capability 6 Description", type: "textarea" },
        ],
      },
      {
        id: "comparison",
        name: "Excel vs SkillMetrics",
        fields: [
          { key: "title", label: "Section Title", type: "text" },
          { key: "subtitle", label: "Section Subtitle", type: "textarea" },
        ],
      },
      {
        id: "why_us",
        name: "Why Engineering Leaders Choose Us",
        fields: [
          { key: "title", label: "Section Title", type: "text" },
          { key: "subtitle", label: "Section Subtitle", type: "textarea" },
          { key: "image", label: "Showcase Image", type: "image" },
          { key: "bullet1", label: "Bullet Point 1", type: "text" },
          { key: "bullet2", label: "Bullet Point 2", type: "text" },
          { key: "bullet3", label: "Bullet Point 3", type: "text" },
          { key: "bullet4", label: "Bullet Point 4", type: "text" },
          { key: "bullet5", label: "Bullet Point 5", type: "text" },
          { key: "bullet6", label: "Bullet Point 6", type: "text" },
          { key: "bullet7", label: "Bullet Point 7", type: "text" },
        ],
      },
      {
        id: "roi",
        name: "Annual Savings & ROI",
        fields: [
          { key: "title", label: "Section Title", type: "text" },
          { key: "subtitle", label: "Section Subtitle", type: "textarea" },
        ],
      },
      {
        id: "stats",
        name: "Key Statistics",
        fields: [
          { key: "stat1Value", label: "Stat 1 Value (e.g. 1 Lakh+)", type: "text" },
          { key: "stat1Label", label: "Stat 1 Label (e.g. Skilled Up)", type: "text" },
          { key: "stat2Value", label: "Stat 2 Value (e.g. 50+)", type: "text" },
          { key: "stat2Label", label: "Stat 2 Label (e.g. Organizations)", type: "text" },
          { key: "stat3Value", label: "Stat 3 Value (e.g. 50,000+)", type: "text" },
          { key: "stat3Label", label: "Stat 3 Label (e.g. Reskilled)", type: "text" },
        ],
      },
      {
        id: "testimonials",
        name: "Client Testimonials Header",
        fields: [
          { key: "title", label: "Section Title", type: "text" },
          { key: "subtitle", label: "Section Subtitle", type: "textarea" },
        ],
      },
    ],
  },
  {
    slug: "features",
    name: "Features Index",
    path: "/features",
    sections: [
      {
        id: "hero",
        name: "Hero Section",
        fields: [
          { key: "title", label: "Page Title", type: "text" },
          { key: "subtitle", label: "Page Subtitle", type: "textarea" },
          { key: "badge", label: "Badge Text", type: "text" },
        ],
      },
    ],
  },
  {
    slug: "features-skill-matrix",
    name: "Skill Matrix",
    path: "/features/skill-matrix",
    sections: [
      {
        id: "hero",
        name: "Hero Section",
        fields: [
          { key: "title", label: "Page Title", type: "text" },
          { key: "subtitle", label: "Page Subtitle", type: "textarea" },
        ],
      },
      {
        id: "section1",
        name: "Robust Training & Competency",
        fields: [
          { key: "title", label: "Section Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "description2", label: "Additional Info", type: "textarea" },
          { key: "image", label: "Section Image", type: "image" },
        ],
      },
      {
        id: "section2",
        name: "Assessment Workflow Banner",
        fields: [
          { key: "title", label: "Banner Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
        ],
      },
    ],
  },
  {
    slug: "features-employee-metrics",
    name: "Employee Metrics",
    path: "/features/employee-metrics",
    sections: [
      {
        id: "hero",
        name: "Hero Section",
        fields: [
          { key: "title", label: "Page Title", type: "text" },
          { key: "subtitle", label: "Page Subtitle", type: "textarea" },
        ],
      },
    ],
  },
  {
    slug: "features-ai-assessments",
    name: "AI Assessments",
    path: "/features/ai-assessments",
    sections: [
      {
        id: "hero",
        name: "Hero Section",
        fields: [
          { key: "title", label: "Page Title", type: "text" },
          { key: "subtitle", label: "Page Subtitle", type: "textarea" },
        ],
      },
    ],
  },
  {
    slug: "features-multi-skilling",
    name: "Multi-Skilling",
    path: "/features/multi-skilling",
    sections: [
      {
        id: "hero",
        name: "Hero Section",
        fields: [
          { key: "title", label: "Page Title", type: "text" },
          { key: "subtitle", label: "Page Subtitle", type: "textarea" },
        ],
      },
    ],
  },
  {
    slug: "features-competency-mapping",
    name: "Competency Mapping",
    path: "/features/competency-mapping",
    sections: [
      {
        id: "hero",
        name: "Hero Section",
        fields: [
          { key: "title", label: "Page Title", type: "text" },
          { key: "subtitle", label: "Page Subtitle", type: "textarea" },
        ],
      },
    ],
  },
  {
    slug: "features-up-reskilling",
    name: "Up & Re-Skilling",
    path: "/features/up-reskilling",
    sections: [
      {
        id: "hero",
        name: "Hero Section",
        fields: [
          { key: "title", label: "Page Title", type: "text" },
          { key: "subtitle", label: "Page Subtitle", type: "textarea" },
        ],
      },
    ],
  },
  {
    slug: "features-powerful-dashboards",
    name: "Powerful Dashboards",
    path: "/features/powerful-dashboards",
    sections: [
      {
        id: "hero",
        name: "Hero Section",
        fields: [
          { key: "title", label: "Page Title", type: "text" },
          { key: "subtitle", label: "Page Subtitle", type: "textarea" },
        ],
      },
    ],
  },
  {
    slug: "integrations",
    name: "Integrations",
    path: "/integrations",
    sections: [
      {
        id: "hero",
        name: "Hero Section",
        fields: [
          { key: "title", label: "Page Title", type: "text" },
          { key: "subtitle", label: "Page Subtitle", type: "textarea" },
        ],
      },
      {
        id: "biometric",
        name: "Biometric System Section",
        fields: [
          { key: "title", label: "Section Title", type: "text" },
          { key: "subtitle", label: "Section Subtitle", type: "textarea" },
        ],
      },
      {
        id: "hrms",
        name: "HR Systems Section",
        fields: [
          { key: "title", label: "Section Title", type: "text" },
          { key: "subtitle", label: "Section Subtitle", type: "textarea" },
        ],
      },
      {
        id: "cloud",
        name: "Cloud Server Section",
        fields: [
          { key: "title", label: "Section Title", type: "text" },
          { key: "subtitle", label: "Section Subtitle", type: "textarea" },
        ],
      },
    ],
  },
  {
    slug: "book-demo",
    name: "Book a Demo",
    path: "/book-demo",
    sections: [
      {
        id: "hero",
        name: "Hero Section",
        fields: [
          { key: "badge", label: "Badge Text", type: "text" },
          { key: "title", label: "Page Title", type: "text" },
          { key: "subtitle", label: "Page Subtitle", type: "textarea" },
        ],
      },
    ],
  },
  {
    slug: "contact",
    name: "Contact Page",
    path: "/contact",
    sections: [
      {
        id: "hero",
        name: "Hero Section",
        fields: [
          { key: "heroTitle", label: "Hero Title", type: "text" },
          { key: "heroSubtitle", label: "Hero Subtitle", type: "textarea" },
        ],
      },
      {
        id: "contact_info",
        name: "Contact Info & Offices",
        fields: [
          { key: "email", label: "Official Support Email", type: "text" },
          { key: "ukOfficeLabel", label: "UK Office Label", type: "text" },
          { key: "ukOfficeBadge", label: "UK Office Badge", type: "text" },
          { key: "ukOfficeAddress", label: "UK Office Address", type: "textarea" },
          { key: "ukOfficePhone", label: "UK Office Phone", type: "text" },
          { key: "indiaOfficeLabel", label: "India Office Label", type: "text" },
          { key: "indiaOfficeBadge", label: "India Office Badge", type: "text" },
          { key: "indiaOfficeAddress", label: "India Office Address", type: "textarea" },
          { key: "indiaOfficePhone1", label: "India Office Phone 1", type: "text" },
          { key: "indiaOfficePhone2", label: "India Office Phone 2", type: "text" },
          { key: "operatingHours", label: "Operating Hours", type: "text" },
          { key: "slaNote", label: "SLA Support Note", type: "text" },
        ],
      },
      {
        id: "security",
        name: "Security Audit Box",
        fields: [
          { key: "securityTitle", label: "Security Section Title", type: "text" },
          { key: "securityDescription", label: "Security Description", type: "textarea" },
        ],
      },
      {
        id: "form",
        name: "Contact Form Section",
        fields: [
          { key: "formTitle", label: "Form Title", type: "text" },
          { key: "formSubtitle", label: "Form Subtitle", type: "textarea" },
          { key: "successMessage", label: "Submission Success Message Title", type: "text" },
          { key: "successDescription", label: "Submission Success Description", type: "textarea" },
        ],
      },
    ],
  },
];
