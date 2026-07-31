import React from "react";
import { getCaseStudies } from "@/lib/sanity/client";
import { CaseStudiesClientPage } from "./case-studies-client";

export const dynamic = "force-dynamic";

export default async function CaseStudiesPage() {
  const studies = await getCaseStudies();
  return <CaseStudiesClientPage studies={studies} />;
}
