import React from "react";
import { getBlogPosts, getCaseStudies, getResources } from "@/lib/sanity/client";
import { ResourcesClientPage } from "./resources-client";

export const dynamic = "force-dynamic";

export default async function ResourcesPage() {
  const [blogs, caseStudies, customResources] = await Promise.all([
    getBlogPosts(),
    getCaseStudies(),
    getResources(),
  ]);

  return (
    <ResourcesClientPage
      initialBlogs={blogs}
      initialCaseStudies={caseStudies}
      initialResources={customResources}
    />
  );
}
