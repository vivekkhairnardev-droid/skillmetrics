import { defineType, defineField } from "sanity";

export const resource = defineType({
  name: "resource",
  title: "Resources & Frameworks",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Resource Title",
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
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "Skill Frameworks",
      options: {
        list: [
          { title: "Skill Frameworks", value: "Skill Frameworks" },
          { title: "Whitepapers", value: "Whitepapers" },
          { title: "Playbooks & Guides", value: "Playbooks & Guides" },
          { title: "Templates", value: "Templates" },
          { title: "Security Reports", value: "Security Reports" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "badge",
      title: "Badge Text",
      type: "string",
      initialValue: "Featured Resource",
      description: "e.g. Featured Matrix, Security Report, Playbook, Template",
    }),
    defineField({
      name: "readTime",
      title: "Read Time / CTA Label",
      type: "string",
      initialValue: "10 min read",
      description: "e.g. 10 min read, Download Template",
    }),
    defineField({
      name: "summary",
      title: "Short Summary / Excerpt",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "author",
      title: "Author / Publishing Group",
      type: "string",
      initialValue: "SkillMetrics Practice Group",
    }),
    defineField({
      name: "authorRole",
      title: "Author Role / Division",
      type: "string",
      initialValue: "Talent Architecture & Research",
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "keyTakeaways",
      title: "Key Takeaways / Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "content",
      title: "Full Resource Body Content (Rich Text)",
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
      subtitle: "category",
      media: "image",
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
