import React from "react";
import { sql } from "@/lib/db";
import { CaseStudiesClientPage } from "./case-studies-client";

export const dynamic = "force-dynamic";

export default async function CaseStudiesPage() {
  let studies: any[] = [];
  try {
    const dbStudies = await sql`SELECT * FROM case_studies ORDER BY created_at DESC;`;
    if (dbStudies && Array.isArray(dbStudies)) studies = dbStudies;
  } catch (e) {
    console.error("Error fetching case studies from DB:", e);
  }

  return <CaseStudiesClientPage studies={studies} />;
}
