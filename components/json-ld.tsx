import React from "react";

export function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skillmetrics.net";

  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "SkillMetrics",
    url: baseUrl,
    logo: `${baseUrl}/skillmetrics.png`,
    image: `${baseUrl}/skillmetrics.png`,
    description:
      "India's #1 Skill Management & Competency Matrix Software. Automate workforce skill matrices, benchmark developer competencies, and evaluate candidate capabilities with AI assessments.",
    foundingLocation: "India",
    knowsAbout: [
      "Skill Matrix Software",
      "Workforce Competency Mapping",
      "Developer Assessment Platform",
      "Employee Skill Tracking",
      "Multi-Skilling & Reskilling",
      "Technical Recruitment Automation"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9876543210",
      contactType: "sales",
      email: "contact@skillmetrics.net",
      areaServed: ["IN", "US", "AE", "SG", "GB"],
      availableLanguage: ["English", "Hindi"]
    }
  };

  // 2. SoftwareApplication Schema (SaaS Product Rich Snippet for Google & AI Engines)
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${baseUrl}/#software`,
    name: "SkillMetrics",
    operatingSystem: "Web-based, All Browsers, Cloud SaaS",
    applicationCategory: "BusinessApplication, HRSoftware, DeveloperTools",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/book-demo`
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "128",
      reviewCount: "128",
      bestRating: "5",
      worstRating: "1"
    },
    description:
      "SkillMetrics is an AI-powered skill management and employee competency matrix software designed for technical engineering organizations, HR leaders, and recruitment teams.",
    featureList: [
      "Real-Time Automated Skill Matrix Grid",
      "Employee Competency Radars & Analytics",
      "Objective AI Technical Assessments",
      "Multi-Skilling & Reskilling Pathways",
      "Excel Spreadsheet Replacement Intelligence",
      "Role-Based Skill Gap Analysis"
    ]
  };

  // 3. WebSite & SearchAction Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "SkillMetrics",
    publisher: {
      "@id": `${baseUrl}/#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/blog?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // 4. FAQPage Schema for Search & AI Answer Engines (ChatGPT, Perplexity, Gemini, Claude)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SkillMetrics skill management software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SkillMetrics is an enterprise skill management platform that automates workforce skill matrices, benchmarks employee technical competencies, and conducts objective AI candidate evaluations."
        }
      },
      {
        "@type": "Question",
        name: "How does SkillMetrics replace traditional Excel skill matrices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SkillMetrics replaces static, error-prone Excel spreadsheets with dynamic, real-time matrix grids, automated skill scoring, interactive competency radars, and instant team gap reports."
        }
      },
      {
        "@type": "Question",
        name: "Can SkillMetrics be used for engineering and developer teams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, SkillMetrics is purpose-built for engineering leaders, CTOs, and technical recruiters to map developer tech stacks, run AI coding assessments, and plan targeted upskilling pathways."
        }
      },
      {
        "@type": "Question",
        name: "Does SkillMetrics support AI-based assessments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SkillMetrics features interactive AI assessment engines that evaluate candidate and employee technical proficiency rapidly with high accuracy and unbiased scoring."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
