"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Share2,
  Bookmark,
  Download,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Building2,
  FileText,
  ArrowRight,
  Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Mock data store for detail view
const resourcesData: Record<string, {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  badge: string;
  image: string;
  summary: string;
  content: {
    introduction: string;
    keyTakeaways: string[];
    sections: {
      heading: string;
      body: string;
    }[];
  };
}> = {
  "engineering-matrix-2026": {
    id: "engineering-matrix-2026",
    title: "The 2026 Enterprise Engineering Skill Matrix Playbook",
    category: "Skill Frameworks",
    readTime: "12 min read",
    publishDate: "January 15, 2026",
    author: "Engineering Practice Group",
    authorRole: "SkillMetrics Talent Architecture Team",
    badge: "Featured Matrix",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
    summary: "Standardized skill taxonomy matrices for Frontend, Backend, DevOps, and AI/ML Engineering roles across L1 to L6 competency levels.",
    content: {
      introduction: "As engineering organizations grow beyond 100+ developers, relying on subjective manager reviews for promotions and project assignments creates inconsistencies. This playbook establishes an objective, data-backed taxonomy framework across Frontend, Backend, DevOps, and AI engineering tracks.",
      keyTakeaways: [
        "Defines objective criteria for L1 (Junior) to L6 (Principal) engineering tiers.",
        "Provides 40+ granular skill rubrics evaluated via automated coding & peer reviews.",
        "Includes a plug-and-play JSON schema for direct import into SkillMetrics platform."
      ],
      sections: [
        {
          heading: "1. Why Standardized Competency Mapping Matters",
          body: "Unstructured skill tracking leads to mismatched sprint allocations, higher candidate drop-offs during hiring, and unaddressed skill gaps. By implementing standardized radars, engineering leaders gain real-time visibility into squad capabilities."
        },
        {
          heading: "2. The L1 to L6 Capability Progression Architecture",
          body: "Each level measures core engineering competencies: System Design & Architecture, Code Quality & Testing, Operational Resilience, and Technical Leadership. Level 1 focuses on task execution, while Level 6 measures enterprise system stewardship."
        },
        {
          heading: "3. Implementation Strategy for Enterprise Engineering Teams",
          body: "Begin with a baseline self-assessment followed by automated coding radar verifications. Sync scores bi-directionally with Workday or BambooHR to inform merit cycles and internal mobility."
        }
      ]
    }
  },
  "fortune-500-case-study": {
    id: "fortune-500-case-study",
    title: "How Global Tech Manufacturing Scaled Skill Assessment Across 5,000 Engineers",
    category: "Case Studies",
    readTime: "8 min read",
    publishDate: "February 02, 2026",
    author: "Enterprise Case Studies",
    authorRole: "Customer Success & Operations",
    badge: "Case Study",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    summary: "Learn how an enterprise tech manufacturer reduced bad technical hires by 90% and eliminated manual spreadsheets with SkillMetrics radars.",
    content: {
      introduction: "With over 5,000 engineers across 12 worldwide facilities, maintaining unified technical quality standards was a major operational hurdle. Manual Excel matrices led to outdated records and delayed project staffing.",
      keyTakeaways: [
        "Replaced 400+ disconnected Excel sheets with a centralized SkillMetrics dashboard.",
        "Cut technical assessment overhead by 75% using automated proctored evaluations.",
        "Achieved 90% reduction in misallocated technical resources across global shifts."
      ],
      sections: [
        {
          heading: "The Challenge: Spreadsheet Chaos & Shift Delays",
          body: "Plant managers spent hours manually verifying engineer certifications before assigning high-risk hardware maintenance tasks. Inaccuracies led to costly downtime."
        },
        {
          heading: "The Solution: Real-Time Biometric & Skill Tracking Sync",
          body: "SkillMetrics integrated with the facility’s biometric attendance systems and HRMS to automatically display validated station qualifications upon badge tap."
        },
        {
          heading: "The Business Impact: $1.2M Annual Savings",
          body: "By preventing unscheduled downtime and optimizing cross-skilled staff deployment, the organization saved $1.2M annually while boosting employee training completion rates by 68%."
        }
      ]
    }
  },
  "ai-screening-whitepaper": {
    id: "ai-screening-whitepaper",
    title: "AI-Powered Technical Proctoring & Plagiarism Defense Benchmark Report",
    category: "Whitepapers",
    readTime: "15 min read",
    publishDate: "January 28, 2026",
    author: "SkillMetrics Security Research",
    authorRole: "AI Security & Defense Lab",
    badge: "Security Report",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    summary: "An empirical security study on code hashing, screen monitor proctoring, and LLM plagiarism detection accuracy.",
    content: {
      introduction: "Generative AI tools have changed technical candidate evaluations. This report benchmarks anti-cheating defenses, code similarity hashing, and real-time proctoring integrity across 50,000 proctored assessment sessions.",
      keyTakeaways: [
        "99.4% detection rate for unauthorized LLM code generation during live tests.",
        "Zero-latency webcam and multi-monitor anomaly alerts powered by edge models.",
        "SOC-2 Type II compliant candidate data privacy & encryption standard."
      ],
      sections: [
        {
          heading: "1. Benchmark Methodology & Dataset",
          body: "Our security lab analyzed candidate behavior patterns using behavioral telemetry, copy-paste timestamps, and AST (Abstract Syntax Tree) code structure matching."
        },
        {
          heading: "2. AST Code Hashing vs. Simple Text Matching",
          body: "Unlike traditional diff tools, AST hashing identifies code structural similarities even when candidates rename variables or reorder functions to bypass detection."
        },
        {
          heading: "3. Enterprise Security & Ethical Proctoring Standards",
          body: "All proctoring streams are encrypted in transit and deleted after 30 days, adhering strictly to GDPR right-to-be-forgotten compliance."
        }
      ]
    }
  }
};

export default function ResourceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params?.id === "string" ? params.id : "engineering-matrix-2026";

  // Fallback to default if not found
  const resource = resourcesData[id] || resourcesData["engineering-matrix-2026"];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      {/* Centralized Navbar */}
      <Navbar />

      {/* HEADER & BREADCRUMB SECTION */}
      <section className="bg-brand-dark text-white py-8 border-b border-border/20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Link href="/resources" className="hover:text-brand-yellow flex items-center gap-1 transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Resources
            </Link>
            <span>/</span>
            <span className="text-brand-yellow font-medium">{resource.category}</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge className="bg-brand-yellow text-slate-950 font-extrabold text-[10px] uppercase tracking-wider">
                {resource.badge}
              </Badge>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Clock className="h-3 w-3" /> {resource.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              {resource.title}
            </h1>

            {/* Author & Meta bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs">
                  {resource.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{resource.author}</p>
                  <p className="text-[10px] text-slate-400">{resource.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Calendar className="h-3.5 w-3.5" /> {resource.publishDate}
                </span>
                <Button variant="outline" size="xs" className="h-8 border-white/20 text-white bg-white/10 hover:bg-white/20 text-xs gap-1">
                  <Share2 className="h-3 w-3" /> Share
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ARTICLE BODY & CONTENT */}
      <main className="flex-1 py-12 bg-white dark:bg-background">
        <article className="container max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
          
          {/* Featured Header Banner Image */}
          <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden border border-border shadow-md">
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Summary Box */}
          <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-brand-yellow font-extrabold text-xs uppercase tracking-wider">
              <Sparkles className="h-4 w-4" /> Executive Summary &amp; Takeaways
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              {resource.summary}
            </p>
            <ul className="space-y-2 pt-2 border-t border-slate-800">
              {resource.content.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Text Content */}
          <div className="space-y-8 text-foreground text-sm sm:text-base leading-relaxed">
            <p className="text-base sm:text-lg font-normal text-muted-foreground leading-relaxed">
              {resource.content.introduction}
            </p>

            {resource.content.sections.map((section, idx) => (
              <section key={idx} className="space-y-3 pt-4 border-t border-border/60">
                <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {/* Action CTA Banner */}
          <div className="p-8 rounded-2xl bg-slate-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">Ready to Deploy This Skill Framework?</h3>
              <p className="text-xs text-slate-300 max-w-md">
                Schedule a 15-minute walkthrough with our talent architect team to import these rubrics into your SkillMetrics account.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/contact">
                <Button size="sm" className="font-bold bg-brand-yellow text-slate-950 hover:bg-brand-yellow/90">
                  Book Architecture Demo <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Back to Resources Footer Navigation */}
          <div className="pt-6 border-t border-border flex items-center justify-between text-xs font-bold text-muted-foreground">
            <Link href="/resources" className="hover:text-foreground flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> All Resources
            </Link>
            <span className="text-slate-400">SkillMetrics Knowledge Hub</span>
          </div>

        </article>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
