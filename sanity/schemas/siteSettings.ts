import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings (Homepage)",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "India's #1 Skill Management Software",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      initialValue:
        "Automate workforce skill matrices, benchmark role competencies, and evaluate developer capabilities 3x faster with objective AI assessments.",
    }),
    defineField({
      name: "heroCtaText",
      title: "Hero CTA Button Text",
      type: "string",
      initialValue: "Book a Demo",
    }),
    defineField({
      name: "calendlyUrl",
      title: "Calendly Booking URL",
      type: "url",
      description: "Custom Calendly link for live demo scheduling (e.g. https://calendly.com/your-org/demo)",
      initialValue: "https://calendly.com/d/cfs8-7x6-q4h",
    }),

    // Feature Section
    defineField({
      name: "featuresTitle",
      title: "Features Section Title",
      type: "string",
      initialValue: "Everything Your Engineering Org Needs to Scale Talent",
    }),
    defineField({
      name: "featuresSubtitle",
      title: "Features Section Subtitle",
      type: "text",
      initialValue:
        "Scroll to explore how SkillMetrics automates technical evaluations, eliminates skill blind spots, and accelerates workforce capability.",
    }),

    // Feature Card Images
    defineField({
      name: "card1Image",
      title: "Feature Card 1 Image (Skill Matrix)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "card2Image",
      title: "Feature Card 2 Image (Employee Metrics)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "card3Image",
      title: "Feature Card 3 Image (AI Assessments)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "card4Image",
      title: "Feature Card 4 Image (Multi-Skilling)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "card5Image",
      title: "Feature Card 5 Image (Competency Mapping)",
      type: "image",
      options: { hotspot: true },
    }),

    // Capabilities Section
    defineField({
      name: "capabilitiesTitle",
      title: "Capabilities Section Title",
      type: "string",
      initialValue: "Core Platform Capabilities",
    }),
    defineField({
      name: "capabilitiesSubtitle",
      title: "Capabilities Section Subtitle",
      type: "text",
      initialValue:
        "Purpose-built tools designed for technical recruiters, hiring managers, and enterprise engineering leads.",
    }),

    // Comparison Section
    defineField({
      name: "comparisonTitle",
      title: "Comparison Section Title",
      type: "string",
      initialValue: "Legacy Excel Spreadsheets vs. SkillMetrics Intelligence",
    }),
    defineField({
      name: "comparisonSubtitle",
      title: "Comparison Section Subtitle",
      type: "text",
      initialValue:
        "Drag the interactive slider below to see how error-prone manual spreadsheets compare to automated, real-time AI skill matrix tracking.",
    }),

    // Why Us Section
    defineField({
      name: "whyUsTitle",
      title: "Why Us Section Title",
      type: "string",
      initialValue: "Why Engineering Leaders Choose SkillMetrics",
    }),
    defineField({
      name: "whyUsSubtitle",
      title: "Why Us Section Subtitle",
      type: "text",
      initialValue:
        "Built specifically to eliminate engineering interview friction, reduce bad hires, and maximize developer productivity across your engineering organization.",
    }),

    // ROI Section
    defineField({
      name: "roiTitle",
      title: "ROI Section Title",
      type: "string",
      initialValue: "Save Up To $1M+ In Annual Engineering & Hiring Costs",
    }),
    defineField({
      name: "roiSubtitle",
      title: "ROI Section Subtitle",
      type: "text",
      initialValue:
        "By automating technical candidate screening, eliminating mis-hires, and reclaiming developer interview hours, SkillMetrics delivers measurable enterprise savings from Month 1.",
    }),

    // Stats
    defineField({
      name: "stat1Value",
      title: "Stat 1 Value",
      type: "string",
      initialValue: "1 Lakh+",
    }),
    defineField({
      name: "stat1Label",
      title: "Stat 1 Label",
      type: "string",
      initialValue: "Skilled Up",
    }),
    defineField({
      name: "stat2Value",
      title: "Stat 2 Value",
      type: "string",
      initialValue: "50+",
    }),
    defineField({
      name: "stat2Label",
      title: "Stat 2 Label",
      type: "string",
      initialValue: "Organizations",
    }),
    defineField({
      name: "stat3Value",
      title: "Stat 3 Value",
      type: "string",
      initialValue: "50,000+",
    }),
    defineField({
      name: "stat3Label",
      title: "Stat 3 Label",
      type: "string",
      initialValue: "Reskilled",
    }),

    // Testimonials Section
    defineField({
      name: "testimonialsTitle",
      title: "Testimonials Section Title",
      type: "string",
      initialValue: "What Our Clients Say",
    }),
    defineField({
      name: "testimonialsSubtitle",
      title: "Testimonials Section Subtitle",
      type: "text",
      initialValue:
        "Trusted by CTOs, VPs of Engineering, and HR Leaders at leading tech enterprises.",
    }),

    // Banner
    defineField({
      name: "bannerEnabled",
      title: "Show Top Banner?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "bannerText",
      title: "Banner Text",
      type: "string",
    }),
    defineField({
      name: "bannerLink",
      title: "Banner Link URL",
      type: "url",
    }),

    // SEO
    defineField({
      name: "metaTitle",
      title: "Meta Title (SEO)",
      type: "string",
      initialValue: "Skill Management & Training | Competency-Based System",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description (SEO)",
      type: "text",
      initialValue:
        "Optimize competency and skill management to enhance workforce performance. Streamline development, skill matrices, training records, and developer capability tracking with SkillMetrics.",
    }),
  ],
  // Singleton - only one document of this type
  preview: {
    prepare() {
      return { title: "Homepage & Site Settings" };
    },
  },
});
