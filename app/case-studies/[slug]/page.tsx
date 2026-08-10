import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { sql } from "@/lib/db";
import {
  Calendar,
  ArrowLeft,
  Building2,
  BarChart3,
  Quote,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const FALLBACK_CASE_STUDIES: Record<string, any> = {
  "auto-oem-cuts-assembly-downtime": {
    title: "Global Auto OEM Cuts Assembly Line Downtime by 42%",
    slug: "auto-oem-cuts-assembly-downtime",
    company_name: "Apex Automotive Group",
    industry: "Automotive",
    excerpt: "How a premier vehicle manufacturer deployed SkillMetrics station matrices across 4 assembly plants to eliminate skill-gaps and prevent unexpected line stops.",
    cover_image: "/automotive-dashboard.png",
    challenge: "Apex Automotive experienced frequent station delays due to uncertified backup operators stepping into critical TAKT-time assembly roles.",
    solution: "Implemented SkillMetrics live station balancing matrices and automated IATF 16949 audit logs across all shift supervisors.",
    published_at: "2026-02-10",
    testimonial_quote: "SkillMetrics gave us total visibility into operator readiness. We haven't had a single line stop due to missing skill backups since rollout.",
    testimonial_author: "Marcus Vance",
    testimonial_role: "VP of Global Manufacturing Operations",
    content: `### The Challenge

Apex Automotive operates 4 major vehicle assembly plants across North America. Shift supervisors were struggling with last-minute shift absences, frequently assigning secondary operators to complex sub-assembly stations without verifying their latest IATF 16949 torque certifications.

### The Solution

By deploying **SkillMetrics Automotive Matrix**, plant managers gained a real-time, color-coded dashboard of every shift operator's certified competency levels:
- **Station Line Balancing**: Automatically matches certified Level 3 & 4 operators to TAKT-time workstations.
- **IATF Audit Logs**: Instant digital verification of safety sign-offs and torque calibrations.
- **Critical Gap Alerts**: Proactive notifications flag stations lacking secondary backup operators before shifts begin.

### Results & ROI

Within 90 days of deployment across all 4 plants:
- **42% Reduction** in shift downtime and TAKT-time delays.
- **100% Audit Compliance** during third-party IATF 16949 recertification.
- Over **$1.2M saved** in avoided emergency shift overtime.`
  },
  "semiconductor-fab-zero-esd-defects": {
    title: "Semiconductor Fab Achieves Zero Latent ESD Defects",
    slug: "semiconductor-fab-zero-esd-defects",
    company_name: "SiliconCore Microelectronics",
    industry: "Electronics",
    excerpt: "Tracking IPC-A-610 standards and ESD safety credentials across 12 cleanrooms to boost first-pass yield to 99.77%.",
    cover_image: "/electronics-dashboard.png",
    challenge: "Micro-soldering defects and unverified cleanroom gowning protocols led to high scrap rates during SMT board assembly runs.",
    solution: "Deployed digital ESD grounding checks and automated operator micro-soldering skill verification for Class 100 cleanroom bays.",
    published_at: "2026-01-24",
    testimonial_quote: "Our cleanroom audit preparation dropped from two weeks to 5 minutes. SkillMetrics makes IPC compliance practically effortless.",
    testimonial_author: "Elena Rostova",
    testimonial_role: "Quality Assurance Director",
    content: `### The Challenge

High-density PCB assembly requires strict adherence to IPC-A-610 standards. SiliconCore Microelectronics noticed latent ESD defects in high-reliability circuit boards caused by operators whose ESD grounding certifications had silently lapsed.

### The Solution

SiliconCore integrated **SkillMetrics Electronics Matrix** across 12 ISO Class 5 to Class 8 cleanroom bays:
- **ESD & Cleanroom Logbooks**: Digital sign-offs mandatory prior to entering cleanroom airlocks.
- **Micro-Soldering Verification**: Automated tracking of J-STD-001 and IPC-A-610 certifications.
- **AOI & SPI Integration**: Linked operator skill levels directly to Automated Optical Inspection defect logs.

### Results & Impact

- **99.77% First Pass Yield** achieved across high-volume surface mount lines.
- **Zero Latent ESD Failures** reported in customer field audits over 12 months.
- **Instant FDA & ISO 13485** export capability for medical-grade circuit board batches.`
  },
  "biopharma-automates-21-cfr-part-11": {
    title: "Biopharma Giant Automates 21 CFR Part 11 Audit Readiness",
    slug: "biopharma-automates-21-cfr-part-11",
    company_name: "Aura BioMed Global",
    industry: "Pharmaceuticals",
    excerpt: "Streamlining sterile fill-finish qualification logs and electronic batch sign-offs across 6 biomanufacturing sites.",
    cover_image: "/pharmaceuticals-dashboard.png",
    challenge: "Manual paper training logs created compliance risks during FDA 21 CFR Part 11 inspections and slowed down lot release times.",
    solution: "SkillMetrics introduced dual-signer e-signatures, automated SOP expiration alerts, and eBMR qualification gates.",
    published_at: "2026-01-15",
    testimonial_quote: "SkillMetrics eliminated the audit anxiety. During our last FDA inspection, we pulled 50 operator logs in seconds without a single finding.",
    testimonial_author: "Dr. Jonathan Thorne",
    testimonial_role: "Head of Regulatory Compliance",
    content: `### The Challenge

In sterile fill-finish biopharmaceutical manufacturing, an uncertified technician signing off on an Electronic Batch Manufacturing Record (eBMR) can result in FDA Form 483 observations and batch rejections worth millions.

### The Solution

Aura BioMed rolled out **SkillMetrics Pharmaceuticals Matrix**:
- **21 CFR Part 11 Cryptographic Logs**: Tamper-proof audit trails with dual-signer electronic signatures.
- **Sterile Cleanroom Gatekeeping**: Restricts access to Class A & B isolator suites based on active media fill certifications.
- **Automated SOP Recertification**: Proactive 60-day alerts ensure operators update SOP qualifications before expiration.

### Results & Impact

- **3x Faster Batch Release Times** due to instant electronic qualification checks.
- **Zero FDA 483 Warnings** during annual multi-site regulatory inspections.
- 100% complete digital traceability across 6 global biomanufacturing facilities.`
  },
  "food-processor-haccp-compliance": {
    title: "Food Processor Achieves 100% HACCP & Allergen Compliance",
    slug: "food-processor-haccp-compliance",
    company_name: "PureDairy Global Foods",
    industry: "Food & Beverage",
    excerpt: "Eliminating cross-contamination risks and automating shift washdown sign-offs across high-speed packaging lines.",
    cover_image: "/food-beverage-dashboard.png",
    challenge: "Allergen line changeovers required rigid cleaning sign-offs that paper logbooks failed to verify consistently.",
    solution: "Shift supervisors switched to mobile tablet checklists verifying CCP operator certifications and CIP washdown protocols.",
    published_at: "2025-12-18",
    testimonial_quote: "The mobile changeover checklists ensure every critical control point is manned by certified staff before a single batch starts.",
    testimonial_author: "Sarah Jenkins",
    testimonial_role: "Plant Operations Manager",
    content: `### The Challenge

PureDairy operates multi-product beverage filling lines where allergen changeovers (e.g. dairy to soy/nut blends) must be impeccably cleaned and verified by trained sanitarians to avoid life-threatening consumer recalls.

### The Solution

PureDairy deployed **SkillMetrics Food & Beverage Matrix**:
- **Mobile CIP Checklists**: Shift leads complete washdown sign-offs on waterproof floor tablets.
- **Critical Control Point (CCP) Guard**: Blocks production start if uncertified operators are assigned to thermal kill steps or metal detectors.
- **Allergen Traceability Logs**: Instant digital archives accessible during GFSI and SQF audits.

### Results & Impact

- **98.2% Hygiene Compliance Score** across all processing lines.
- **Zero Cross-Contamination Incidents** since platform implementation.
- **15 Minutes Saved** per allergen changeover through streamlined digital verification.`
  },
  "heavy-equipment-incident-free-record": {
    title: "Heavy Equipment Maker Reaches 180+ Days Incident-Free",
    slug: "heavy-equipment-incident-free-record",
    company_name: "Titan Heavy Industries",
    industry: "Heavy Manufacturing",
    excerpt: "Enforcing OSHA safety licenses, crane operator credentials, and Lockout-Tagout protocols across metal fabrication shops.",
    cover_image: "/heavy-manufacturing-dashboard.png",
    challenge: "High shop floor machinery rotation increased the risk of unlicensed operators handling overhead cranes and hydraulic presses.",
    solution: "SkillMetrics station risk matrix flagged uncertified operators instantly, blocking high-risk station assignments.",
    published_at: "2025-11-30",
    testimonial_quote: "Safety is our number one metric. SkillMetrics gave our shop floor foremen the exact tools needed to guarantee 100% licensed operator coverage.",
    testimonial_author: "Robert Sterling",
    testimonial_role: "Chief Safety Officer",
    content: `### The Challenge

Handling 50-ton overhead cranes and high-pressure hydraulic metal presses requires current operator licensing and EHS safety refreshers. Titan Heavy Industries needed a reliable way to verify licenses on noise-heavy shop floors.

### The Solution

Titan Heavy Industries implemented **SkillMetrics Heavy Manufacturing Matrix**:
- **Crane & Rigging License Verification**: Automated expiration tracking for heavy equipment operators.
- **Shop Floor Risk Warnings**: Color-coded alerts warn shift managers if high-risk stations lack secondary backup cover.
- **Rugged Tablet Audits**: Safety supervisors execute daily EHS walkthroughs directly on industrial floor handhelds.

### Results & Impact

- **184 Consecutive Days Incident-Free** recorded across fabrication shops.
- **100% OSHA Safety Compliance** achieved during unannounced plant inspections.
- **65% Reduction in Shop Floor Risk Alerts** within 6 months.`
  },
  "fintech-leader-automates-assessments": {
    title: "FinTech Leader Automates Developer Skill Matrices",
    slug: "fintech-leader-automates-assessments",
    company_name: "PayGlobe Inc",
    industry: "Financial Services",
    excerpt: "How a tier-1 fintech provider reduced candidate screening time by 75% and reclaimed thousands of developer interview hours.",
    cover_image: "/emp.jpg",
    challenge: "PayGlobe was spending 30+ hours of senior developer time per week on manual interviews with high candidate dropout rates.",
    solution: "Integrated SkillMetrics AI screening workflows to automatically evaluate candidate programming proficiency and system design competence.",
    published_at: "2025-11-12",
    testimonial_quote: "SkillMetrics has completely revolutionized how we hire and evaluate developers. We saved hundreds of thousands of dollars in engineering hours.",
    testimonial_author: "Sanjay Kumar",
    testimonial_role: "VP of Engineering",
    content: `### The Challenge

PayGlobe was scaling its core engineering team and needed to hire over 100 senior developers across microservices, security, and cloud infrastructure. Senior engineers were burning out spending 30+ hours per week conducting technical screening interviews.

### The Solution

PayGlobe integrated **SkillMetrics Developer Competency Engine**:
- **Automated AI Code Assessments**: Evaluated technical candidates objectively before scheduling live interviews.
- **Real-Time Skill Matrices**: Benchmark existing engineering team capabilities against global tech stacks.
- **Objective Scorecards**: Standardized developer evaluation criteria across all hiring panels.

### Results & Impact

- **75% Reduction in Technical Screening Time** for hiring managers.
- **Over $400,000 Saved Annually** in engineering interview hours.
- **Increased Developer Morale** and faster candidate offer acceptance.`
  }
};

async function getCaseStudyBySlug(slug: string) {
  try {
    const res = await sql`SELECT * FROM case_studies WHERE slug = ${slug} LIMIT 1;`;
    if (res && res[0]) return res[0];
  } catch (e) {
    console.error("Error fetching case study by slug:", e);
  }
  return FALLBACK_CASE_STUDIES[slug] || null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found | SkillMetrics" };
  }

  return {
    title: study.seo_title || `${study.title} | SkillMetrics Case Study`,
    description: study.seo_description || study.excerpt,
    keywords: ["skill matrix", "competency mapping", "SkillMetrics", "case study", study.industry || "Manufacturing"],
    openGraph: {
      title: study.title,
      description: study.excerpt,
      type: "article",
      publishedTime: study.published_at || study.created_at,
      images: [
        {
          url: study.cover_image || "https://skillmetrics.net/skillmetrics.png",
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  let relatedStudies: any[] = [];
  try {
    const dbRelated = await sql`SELECT * FROM case_studies WHERE slug != ${slug} ORDER BY created_at DESC LIMIT 2;`;
    if (dbRelated && Array.isArray(dbRelated) && dbRelated.length > 0) {
      relatedStudies = dbRelated;
    }
  } catch (e) {
    console.error("Error fetching related case studies:", e);
  }

  if (relatedStudies.length === 0) {
    relatedStudies = Object.values(FALLBACK_CASE_STUDIES).filter(s => s.slug !== slug).slice(0, 2);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.excerpt,
    image: study.cover_image || "https://skillmetrics.net/skillmetrics.png",
    datePublished: study.published_at || study.created_at,
    publisher: {
      "@type": "Organization",
      name: "SkillMetrics",
      logo: {
        "@type": "ImageObject",
        url: "https://skillmetrics.net/skillmetrics.png",
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <section className="bg-brand-dark text-white py-12 sm:py-16 border-b border-border/20 relative overflow-hidden">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 space-y-6 relative z-10">
          <Link href="/case-studies" className="inline-flex items-center text-xs font-bold text-slate-300 hover:text-brand-yellow transition-colors gap-1.5">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Case Studies
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-slate-300 font-mono flex-wrap">
              <Badge className="bg-brand-yellow text-black font-extrabold text-[10px] uppercase">
                {study.industry || "Case Study"}
              </Badge>
              <span className="flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5" /> {study.company_name || study.companyName || "Enterprise"}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> {study.published_at ? new Date(study.published_at).toLocaleDateString() : "Recent"}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {study.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {study.excerpt}
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 py-12 bg-slate-50 dark:bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
          {study.cover_image && (
            <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-slate-900">
              <img
                src={study.cover_image || study.coverImage}
                alt={study.title}
                className="w-full h-auto max-h-[450px] object-cover"
              />
            </div>
          )}

          {(study.challenge || study.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.challenge && (
                <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-xs space-y-3">
                  <h3 className="text-lg font-extrabold text-brand-red flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" /> The Challenge
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {study.challenge}
                  </p>
                </div>
              )}
              {study.solution && (
                <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-xs space-y-3">
                  <h3 className="text-lg font-extrabold text-emerald-600 flex items-center gap-2">
                    <Sparkles className="h-5 w-5" /> The Solution
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {study.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {(study.testimonial_quote || study.testimonialQuote) && (
            <div className="bg-brand-dark text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <Quote className="h-8 w-8 text-brand-yellow opacity-60" />
              <p className="text-base sm:text-lg italic leading-relaxed">
                &ldquo;{study.testimonial_quote || study.testimonialQuote}&rdquo;
              </p>
              {(study.testimonial_author || study.testimonialAuthor) && (
                <div className="pt-2 border-t border-slate-800">
                  <p className="text-sm font-bold text-brand-yellow">{study.testimonial_author || study.testimonialAuthor}</p>
                  {(study.testimonial_role || study.testimonialRole) && (
                    <p className="text-xs text-slate-400">{study.testimonial_role || study.testimonialRole}</p>
                  )}
                </div>
              )}
            </div>
          )}

          <article className="prose max-w-none bg-card p-6 sm:p-10 rounded-2xl border border-border/80 shadow-xs">
            {study.content ? (
              <div dangerouslySetInnerHTML={{ __html: marked.parse(study.content) }} />
            ) : (
              <p className="text-muted-foreground italic">No detailed content available.</p>
            )}
          </article>

          {relatedStudies.length > 0 && (
            <div className="space-y-6 pt-6">
              <div className="border-b border-border pb-3">
                <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-yellow" /> More Case Studies
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedStudies.map((rel) => (
                  <Card key={rel.id || rel.slug} className="border border-border bg-card p-5 space-y-3 hover:border-brand-yellow/30 transition-all">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px] font-bold text-amber-700 border-brand-yellow/20">
                        {rel.industry || "Case Study"}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">{rel.company_name || rel.companyName}</span>
                    </div>
                    <h4 className="text-sm font-bold text-foreground hover:text-brand-yellow transition-colors">
                      <Link href={`/case-studies/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{rel.excerpt}</p>
                    <Link href={`/case-studies/${rel.slug}`} className="inline-flex items-center text-xs font-bold text-brand-yellow gap-1 pt-1">
                      Read Case Study <ChevronRight className="h-3 w-3" />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
