import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Article Title",
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
      name: "authorName",
      title: "Author Name",
      type: "string",
      initialValue: "SkillMetrics Team",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "Product Updates",
      options: {
        list: [
          { title: "Product Updates", value: "Product Updates" },
          { title: "Industry Insights", value: "Industry Insights" },
          { title: "Engineering", value: "Engineering" },
          { title: "HR & Talent", value: "HR & Talent" },
          { title: "Case Study", value: "Case Study" },
          { title: "Company News", value: "Company News" },
        ],
      },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt / Summary",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
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
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
        }),
        defineField({
          name: "keywords",
          title: "Target Keywords",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
    defineField({
      name: "content",
      title: "Post Body Content (Rich Text)",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Number", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    name: "blank",
                    title: "Open in new tab?",
                    type: "boolean",
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "authorName",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
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
