import { defineType, defineField } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Studies",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Case Study Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL Path)",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "companyName",
      title: "Company / Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      options: {
        list: [
          { title: "Manufacturing", value: "Manufacturing" },
          { title: "Automotive", value: "Automotive" },
          { title: "IT & Software", value: "IT & Software" },
          { title: "Pharmaceuticals", value: "Pharmaceuticals" },
          { title: "Food & Beverage", value: "Food & Beverage" },
          { title: "Engineering", value: "Engineering" },
          { title: "FMCG", value: "FMCG" },
          { title: "Other", value: "Other" },
        ],
      },
    }),
    defineField({
      name: "excerpt",
      title: "Short Summary",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "challenge",
      title: "The Challenge",
      type: "text",
      description: "What problem was the client facing?",
    }),
    defineField({
      name: "solution",
      title: "The Solution",
      type: "text",
      description: "How did SkillMetrics solve it?",
    }),
    defineField({
      name: "results",
      title: "Key Results / Metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "metric", title: "Metric Value", type: "string" }),
            defineField({ name: "label", title: "Metric Label", type: "string" }),
          ],
          preview: {
            select: { title: "metric", subtitle: "label" },
          },
        },
      ],
    }),
    defineField({
      name: "testimonialQuote",
      title: "Client Testimonial Quote",
      type: "text",
    }),
    defineField({
      name: "testimonialAuthor",
      title: "Testimonial Author Name",
      type: "string",
    }),
    defineField({
      name: "testimonialRole",
      title: "Testimonial Author Role",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Full Case Study Content (Rich Text)",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Number", value: "number" },
          ],
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alt Text" },
            { name: "caption", type: "string", title: "Caption" },
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "seo",
      title: "SEO Metadata",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
        defineField({ name: "metaDescription", title: "Meta Description", type: "text" }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "companyName",
      media: "coverImage",
    },
  },
  orderings: [
    {
      title: "Publish Date (New First)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
