import React from "react";
import { sql } from "@/lib/db";
import { ResourcesClientPage } from "./resources-client";

export const dynamic = "force-dynamic";

export default async function ResourcesPage() {
  let blogs: any[] = [];
  let caseStudies: any[] = [];
  let customResources: any[] = [];

  try {
    const [dbBlogs, dbStudies, dbRes] = await Promise.all([
      sql`SELECT * FROM posts WHERE published = true ORDER BY created_at DESC;`,
      sql`SELECT * FROM case_studies ORDER BY created_at DESC;`,
      sql`SELECT * FROM resources ORDER BY created_at DESC;`,
    ]);

    if (dbBlogs && Array.isArray(dbBlogs)) blogs = dbBlogs;
    if (dbStudies && Array.isArray(dbStudies)) caseStudies = dbStudies;
    if (dbRes && Array.isArray(dbRes)) customResources = dbRes;
  } catch (e) {
    console.error("Error fetching resources from DB:", e);
  }

  return (
    <ResourcesClientPage
      initialBlogs={blogs}
      initialCaseStudies={caseStudies}
      initialResources={customResources}
    />
  );
}
