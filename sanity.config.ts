import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { projectId, dataset } from "./lib/sanity/config";
import {
  siteSettings,
  post,
  caseStudy,
  contactPage,
  resource,
  contactSubmission,
  newsletterSubscription,
  demoRequest,
} from "./sanity/schemas";

// Custom desk structure: singletons appear as direct document links, not lists
const singletonTypes = new Set(["siteSettings", "contactPage"]);
const submissionTypes = new Set([
  "contactSubmission",
  "newsletterSubscription",
  "demoRequest",
]);

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

      S.divider(),

      // Submissions section
      S.documentTypeListItem("contactSubmission").title("Contact Submissions"),
      S.documentTypeListItem("newsletterSubscription").title("Newsletter Subscriptions"),
      S.documentTypeListItem("demoRequest").title("Demo Requests"),
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
    types: [
      siteSettings,
      post,
      caseStudy,
      contactPage,
      resource,
      contactSubmission,
      newsletterSubscription,
      demoRequest,
    ],
    // Prevent singletons and submissions from appearing in the "Create new document" menu
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) =>
          !singletonTypes.has(schemaType) && !submissionTypes.has(schemaType)
      ),
  },

  document: {
    // Customize actions for singletons and submissions
    actions: (input, context) => {
      if (submissionTypes.has(context.schemaType)) {
        // Submissions are read-only logs from forms; only allow viewing or deleting
        return input.filter(
          ({ action }) => action && ["delete", "discardChanges"].includes(action)
        );
      }
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

