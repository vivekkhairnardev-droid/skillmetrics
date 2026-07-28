import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { projectId, dataset } from "./lib/sanity/config";
import { siteSettings, post, caseStudy, contactPage, resource } from "./sanity/schemas";

// Custom desk structure: singletons appear as direct document links, not lists
const singletonTypes = new Set(["siteSettings", "contactPage"]);

const deskStructure = (S: any) =>
  S.list()
    .title("Content Manager")
    .items([
      // Singleton: Site Settings
      S.listItem()
        .title("Homepage & Site Settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Homepage & Site Settings")
        ),

      S.divider(),

      // Blog Posts (list)
      S.documentTypeListItem("post").title("Blog Posts"),

      // Case Studies (list)
      S.documentTypeListItem("caseStudy").title("Case Studies"),

      // Resources & Frameworks (list)
      S.documentTypeListItem("resource").title("Resources & Frameworks"),

      S.divider(),

      // Singleton: Contact Page
      S.listItem()
        .title("Contact Page Settings")
        .id("contactPage")
        .child(
          S.document()
            .schemaType("contactPage")
            .documentId("contactPage")
            .title("Contact Page Settings")
        ),
    ]);

export default defineConfig({
  name: "skillmetrics-cms",
  title: "SkillMetrics Content & SEO Studio",
  projectId,
  dataset,
  basePath: "/studio",

  // Disable Releases & Scheduled Publishing to get simple direct-publish workflow
  releases: { enabled: false },
  scheduledPublishing: { enabled: false },

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
  ],

  schema: {
    types: [siteSettings, post, caseStudy, contactPage, resource],
    // Prevent singletons from appearing in the "Create new document" menu
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) => !singletonTypes.has(schemaType)
      ),
  },

  document: {
    // Prevent singletons from being created via the "new document" button
    actions: (input, context) => {
      if (singletonTypes.has(context.schemaType)) {
        return input.filter(
          ({ action }) =>
            action && !["unpublish", "delete", "duplicate"].includes(action)
        );
      }
      return input;
    },
  },
});
