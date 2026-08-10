import React from "react";
import { sql } from "@/lib/db";
import { CaseStudiesClientPage } from "./case-studies-client";

export const dynamic = "force-dynamic";

const FALLBACK_CASE_STUDIES = [
  {
    _id: "cs-1",
    id: 1,
    title: "Global Auto OEM Cuts Assembly Line Downtime by 42%",
    slug: "auto-oem-cuts-assembly-downtime",
    companyName: "Apex Automotive Group",
    companyLogo: "/logo-1.png",
    industry: "Automotive",
    excerpt: "How a premier vehicle manufacturer deployed SkillMetrics station matrices across 4 assembly plants to eliminate skill-gaps and prevent unexpected line stops.",
    coverImage: "/automotive-dashboard.png",
    challenge: "Apex Automotive experienced frequent station delays due to uncertified backup operators stepping into critical TAKT-time assembly roles.",
    solution: "Implemented SkillMetrics live station balancing matrices and automated IATF 16949 audit logs across all shift supervisors.",
    results: [
      { metric: "42%", label: "Downtime Cut" },
      { metric: "100%", label: "IATF Compliant" },
      { metric: "4 Plants", label: "Deployed" }
    ],
    publishedAt: "2026-02-10",
    testimonialQuote: "SkillMetrics gave us total visibility into operator readiness. We haven't had a single line stop due to missing skill backups since rollout.",
    testimonialAuthor: "Marcus Vance",
    testimonialRole: "VP of Global Manufacturing Operations"
  },
  {
    _id: "cs-2",
    id: 2,
    title: "Semiconductor Fab Achieves Zero Latent ESD Defects",
    slug: "semiconductor-fab-zero-esd-defects",
    companyName: "SiliconCore Microelectronics",
    companyLogo: "/logo-2.png",
    industry: "Electronics",
    excerpt: "Tracking IPC-A-610 standards and ESD safety credentials across 12 cleanrooms to boost first-pass yield to 99.77%.",
    coverImage: "/electronics-dashboard.png",
    challenge: "Micro-soldering defects and unverified cleanroom gowning protocols led to high scrap rates during SMT board assembly runs.",
    solution: "Deployed digital ESD grounding checks and automated operator micro-soldering skill verification for Class 100 cleanroom bays.",
    results: [
      { metric: "99.77%", label: "First Pass Yield" },
      { metric: "0", label: "ESD Incidents" },
      { metric: "12", label: "Cleanrooms" }
    ],
    publishedAt: "2026-01-24",
    testimonialQuote: "Our cleanroom audit preparation dropped from two weeks to 5 minutes. SkillMetrics makes IPC compliance practically effortless.",
    testimonialAuthor: "Elena Rostova",
    testimonialRole: "Quality Assurance Director"
  },
  {
    _id: "cs-3",
    id: 3,
    title: "Biopharma Giant Automates 21 CFR Part 11 Audit Readiness",
    slug: "biopharma-automates-21-cfr-part-11",
    companyName: "Aura BioMed Global",
    companyLogo: "/logo-3.png",
    industry: "Pharmaceuticals",
    excerpt: "Streamlining sterile fill-finish qualification logs and electronic batch sign-offs across 6 biomanufacturing sites.",
    coverImage: "/pharmaceuticals-dashboard.png",
    challenge: "Manual paper training logs created compliance risks during FDA 21 CFR Part 11 inspections and slowed down lot release times.",
    solution: "SkillMetrics introduced dual-signer e-signatures, automated SOP expiration alerts, and eBMR qualification gates.",
    results: [
      { metric: "100%", label: "21 CFR Part 11" },
      { metric: "3x Faster", label: "Lot Release" },
      { metric: "0", label: "FDA 483 Warnings" }
    ],
    publishedAt: "2026-01-15",
    testimonialQuote: "SkillMetrics eliminated the audit anxiety. During our last FDA inspection, we pulled 50 operator logs in seconds without a single finding.",
    testimonialAuthor: "Dr. Jonathan Thorne",
    testimonialRole: "Head of Regulatory Compliance"
  },
  {
    _id: "cs-4",
    id: 4,
    title: "Food Processor Achieves 100% HACCP & Allergen Compliance",
    slug: "food-processor-haccp-compliance",
    companyName: "PureDairy Global Foods",
    companyLogo: "/logo-4.png",
    industry: "Food & Beverage",
    excerpt: "Eliminating cross-contamination risks and automating shift washdown sign-offs across high-speed packaging lines.",
    coverImage: "/food-beverage-dashboard.png",
    challenge: "Allergen line changeovers required rigid cleaning sign-offs that paper logbooks failed to verify consistently.",
    solution: "Shift supervisors switched to mobile tablet checklists verifying CCP operator certifications and CIP washdown protocols.",
    results: [
      { metric: "98.2%", label: "Hygiene Score" },
      { metric: "0", label: "Cross-Contamination" },
      { metric: "15 min", label: "Changeover Saved" }
    ],
    publishedAt: "2025-12-18",
    testimonialQuote: "The mobile changeover checklists ensure every critical control point is manned by certified staff before a single batch starts.",
    testimonialAuthor: "Sarah Jenkins",
    testimonialRole: "Plant Operations Manager"
  },
  {
    _id: "cs-5",
    id: 5,
    title: "Heavy Equipment Maker Reaches 180+ Days Incident-Free",
    slug: "heavy-equipment-incident-free-record",
    companyName: "Titan Heavy Industries",
    companyLogo: "/logo-5.png",
    industry: "Heavy Manufacturing",
    excerpt: "Enforcing OSHA safety licenses, crane operator credentials, and Lockout-Tagout protocols across metal fabrication shops.",
    coverImage: "/heavy-manufacturing-dashboard.png",
    challenge: "High shop floor machinery rotation increased the risk of unlicensed operators handling overhead cranes and hydraulic presses.",
    solution: "SkillMetrics station risk matrix flagged uncertified operators instantly, blocking high-risk station assignments.",
    results: [
      { metric: "184 Days", label: "Incident-Free" },
      { metric: "100%", label: "OSHA Licensed" },
      { metric: "65%", label: "Risk Reduction" }
    ],
    publishedAt: "2025-11-30",
    testimonialQuote: "Safety is our number one metric. SkillMetrics gave our shop floor foremen the exact tools needed to guarantee 100% licensed operator coverage.",
    testimonialAuthor: "Robert Sterling",
    testimonialRole: "Chief Safety Officer"
  },
  {
    _id: "cs-6",
    id: 6,
    title: "FinTech Leader Automates Developer Skill Matrices",
    slug: "fintech-leader-automates-assessments",
    companyName: "PayGlobe Inc",
    companyLogo: "/logo-3.png",
    industry: "Financial Services",
    excerpt: "How a tier-1 fintech provider reduced candidate screening time by 75% and reclaimed thousands of developer interview hours.",
    coverImage: "/emp.jpg",
    challenge: "PayGlobe was spending 30+ hours of senior developer time per week on manual interviews with high candidate dropout rates.",
    solution: "Integrated SkillMetrics AI screening workflows to automatically evaluate candidate programming proficiency and system design competence.",
    results: [
      { metric: "75%", label: "Time Saved" },
      { metric: "100%", label: "Objective Grading" },
      { metric: "$400K", label: "Annual Savings" }
    ],
    publishedAt: "2025-11-12",
    testimonialQuote: "SkillMetrics has completely revolutionized how we hire and evaluate developers. We saved hundreds of thousands of dollars in engineering hours.",
    testimonialAuthor: "Sanjay Kumar",
    testimonialRole: "VP of Engineering"
  }
];

export default async function CaseStudiesPage() {
  let studies: any[] = [];
  try {
    const dbStudies = await sql`SELECT * FROM case_studies ORDER BY created_at DESC;`;
    if (dbStudies && Array.isArray(dbStudies) && dbStudies.length > 0) {
      studies = dbStudies.map(s => ({
        ...s,
        companyName: s.company_name || s.companyName,
        companyLogo: s.company_logo || s.companyLogo,
        coverImage: s.cover_image || s.coverImage,
        publishedAt: s.published_at ? new Date(s.published_at).toISOString().split('T')[0] : s.publishedAt,
        testimonialQuote: s.testimonial_quote || s.testimonialQuote,
        testimonialAuthor: s.testimonial_author || s.testimonialAuthor,
        testimonialRole: s.testimonial_role || s.testimonialRole
      }));
    }
  } catch (e) {
    console.error("Error fetching case studies from DB:", e);
  }

  // Merge DB studies with fallback studies if needed so the catalog is rich
  const finalStudies = studies.length >= 3 ? studies : [...studies, ...FALLBACK_CASE_STUDIES.filter(f => !studies.some(s => s.slug === f.slug))];

  return <CaseStudiesClientPage studies={finalStudies} />;
}
