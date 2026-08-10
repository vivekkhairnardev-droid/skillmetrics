"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Trophy,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Building2,
  Users,
  ShieldCheck,
  Zap,
  BarChart3,
  Clock,
  Award,
  Sparkles,
  ArrowUpRight,
  Search,
  CheckCircle,
  XCircle,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

const SUCCESS_STORIES = [
  {
    id: "auto-oem",
    title: "Apex Automotive: 42% Reduction in Assembly Downtime",
    company: "Apex Automotive Group",
    industry: "Automotive",
    location: "Detroit, USA",
    metrics: [
      { value: "42%", label: "Downtime Cut" },
      { value: "100%", label: "IATF Compliant" },
      { value: "$1.2M", label: "Annual Overtime Saved" }
    ],
    quote: "SkillMetrics gave our shift supervisors total visibility into operator readiness. We haven't had a single assembly line stop due to missing skill backups since rollout.",
    author: "Marcus Vance",
    role: "VP of Global Manufacturing Operations",
    image: "/automotive-dashboard.png",
    storySlug: "/case-studies/auto-oem-cuts-assembly-downtime",
    tags: ["Automotive", "IATF 16949", "Line Balancing"]
  },
  {
    id: "semiconductor-fab",
    title: "SiliconCore: Zero Latent ESD Defects Across 12 Cleanrooms",
    company: "SiliconCore Microelectronics",
    industry: "Electronics",
    location: "Dresden, Germany",
    metrics: [
      { value: "99.77%", label: "First Pass Yield" },
      { value: "0", label: "ESD Defects" },
      { value: "5 min", label: "Audit Prep Time" }
    ],
    quote: "Our cleanroom audit preparation dropped from two weeks to 5 minutes. SkillMetrics makes IPC-A-610 compliance practically automatic.",
    author: "Elena Rostova",
    role: "Quality Assurance Director",
    image: "/electronics-dashboard.png",
    storySlug: "/case-studies/semiconductor-fab-zero-esd-defects",
    tags: ["Electronics", "Cleanroom", "IPC-A-610"]
  },
  {
    id: "biopharma-giant",
    title: "Aura BioMed: 3x Faster Lot Release & 100% 21 CFR Part 11 Compliance",
    company: "Aura BioMed Global",
    industry: "Pharmaceuticals",
    location: "Basel, Switzerland",
    metrics: [
      { value: "3x", label: "Faster Lot Release" },
      { value: "100%", label: "21 CFR Part 11" },
      { value: "0", label: "FDA 483 Warnings" }
    ],
    quote: "SkillMetrics eliminated audit anxiety. During our last FDA inspection, we pulled 50 operator logs in seconds with zero non-conformances.",
    author: "Dr. Jonathan Thorne",
    role: "Head of Regulatory Compliance",
    image: "/pharmaceuticals-dashboard.png",
    storySlug: "/case-studies/biopharma-automates-21-cfr-part-11",
    tags: ["Pharmaceuticals", "21 CFR Part 11", "Cleanroom Class A/B"]
  },
  {
    id: "dairy-processor",
    title: "PureDairy: 100% HACCP & Allergen Washdown Verification",
    company: "PureDairy Global Foods",
    industry: "Food & Beverage",
    location: "Auckland, New Zealand",
    metrics: [
      { value: "98.2%", label: "Hygiene Compliance" },
      { value: "0", label: "Cross-Contamination" },
      { value: "15 min", label: "Saved Per Changeover" }
    ],
    quote: "The mobile changeover checklists ensure every critical control point is manned by certified staff before a single batch starts.",
    author: "Sarah Jenkins",
    role: "Plant Operations Manager",
    image: "/food-beverage-dashboard.png",
    storySlug: "/case-studies/food-processor-haccp-compliance",
    tags: ["Food & Beverage", "HACCP", "Allergen Control"]
  },
  {
    id: "heavy-machinery",
    title: "Titan Industries: 184 Days Incident-Free in Metal Fabrication",
    company: "Titan Heavy Industries",
    industry: "Heavy Manufacturing",
    location: "Sheffield, UK",
    metrics: [
      { value: "184 Days", label: "Incident-Free" },
      { value: "100%", label: "OSHA Licensed" },
      { value: "65%", label: "Risk Reduction" }
    ],
    quote: "Safety is our top priority. SkillMetrics gave our shop floor foremen the exact tool to guarantee 100% licensed crane operator coverage.",
    author: "Robert Sterling",
    role: "Chief Safety Officer",
    image: "/heavy-manufacturing-dashboard.png",
    storySlug: "/case-studies/heavy-equipment-incident-free-record",
    tags: ["Heavy Manufacturing", "OSHA Safety", "Crane Licensing"]
  },
  {
    id: "fintech-leader",
    title: "PayGlobe: $400K Annual Savings in Engineering Hours",
    company: "PayGlobe Inc",
    industry: "Financial Services",
    location: "London, UK",
    metrics: [
      { value: "75%", label: "Screening Time Saved" },
      { value: "$400K", label: "Annual Cost Savings" },
      { value: "100%", label: "Objective AI Grading" }
    ],
    quote: "SkillMetrics has completely revolutionized how we hire and evaluate developers. We reclaimed thousands of engineering hours.",
    author: "Sanjay Kumar",
    role: "VP of Engineering",
    image: "/emp.jpg",
    storySlug: "/case-studies/fintech-leader-automates-assessments",
    tags: ["Financial Services", "Developer Matrix", "AI Assessments"]
  }
];

export default function SuccessStoriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredStories = selectedIndustry === "All"
    ? SUCCESS_STORIES
    : SUCCESS_STORIES.filter(s => s.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <Badge className="bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Customer Impact &amp; Outcomes
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Enterprise <span className="text-brand-yellow">Success Stories</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Discover how leading manufacturers, biopharma giants, and tech enterprises eliminate skill blind spots, guarantee regulatory compliance, and cut shift downtime with SkillMetrics.
          </p>

          {/* KEY METRICS BANNER */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-yellow">98.8%</div>
              <div className="text-[11px] text-slate-400 font-bold uppercase mt-1">Avg Compliance Score</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-yellow">42%</div>
              <div className="text-[11px] text-slate-400 font-bold uppercase mt-1">Shift Downtime Reduction</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-yellow">3x</div>
              <div className="text-[11px] text-slate-400 font-bold uppercase mt-1">Faster Audit Prep</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-yellow">$1.2M+</div>
              <div className="text-[11px] text-slate-400 font-bold uppercase mt-1">Avg Annual Enterprise ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="py-6 bg-white dark:bg-background border-b border-border/60 sticky top-16 z-30 shadow-xs backdrop-blur-md">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2">
            {["All", "Automotive", "Electronics", "Pharmaceuticals", "Food & Beverage", "Heavy Manufacturing", "Financial Services"].map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  selectedIndustry === ind
                    ? "bg-brand-yellow text-slate-950 shadow-md scale-105"
                    : "bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:text-foreground hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES CATALOG GRID */}
      <main className="flex-1 py-14 bg-slate-50 dark:bg-slate-900/40">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStories.map((story) => (
              <Card key={story.id} className="border border-border/80 bg-card shadow-lg hover:shadow-xl hover:border-brand-yellow/40 transition-all rounded-2xl overflow-hidden flex flex-col justify-between group">
                <div>
                  {/* Image Banner */}
                  <div className="h-56 overflow-hidden bg-slate-900 relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <Badge className="bg-slate-900/90 text-white font-extrabold text-[10px] uppercase">
                        {story.industry}
                      </Badge>
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-md text-foreground font-bold text-[10px]">
                        {story.location}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="p-6 space-y-3">
                    <div className="text-xs font-extrabold text-brand-red uppercase tracking-wider">
                      {story.company}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground leading-snug group-hover:text-brand-yellow transition-colors">
                      <Link href={story.storySlug}>
                        {story.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-6 space-y-4">
                    {/* Metrics 3-Col Box */}
                    <div className="grid grid-cols-3 gap-2 bg-slate-100 dark:bg-slate-900/80 p-3 rounded-xl border border-border/60">
                      {story.metrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-black text-brand-yellow">{m.value}</div>
                          <div className="text-[9px] text-muted-foreground font-bold uppercase">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Quote Box */}
                    <blockquote className="text-xs italic text-muted-foreground border-l-2 border-brand-yellow pl-3 py-1 leading-relaxed">
                      &ldquo;{story.quote}&rdquo;
                      <footer className="text-[10px] font-bold text-foreground not-italic mt-1.5">
                        — {story.author}, <span className="text-muted-foreground">{story.role}</span>
                      </footer>
                    </blockquote>
                  </CardContent>
                </div>

                <div className="p-6 pt-2 border-t border-border/40 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {story.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-muted/60 text-muted-foreground px-2 py-0.5 rounded-md font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link href={story.storySlug}>
                    <Button size="sm" className="bg-brand-yellow hover:bg-brand-yellow/90 text-slate-950 font-extrabold text-xs">
                      Read Story <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* BEFORE & AFTER TRANSFORMATION COMPARISON */}
          <section className="bg-card border border-border rounded-2xl p-6 sm:p-10 space-y-8 shadow-xl">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Badge className="bg-brand-red/10 text-brand-red border border-brand-red/20 text-[10px] font-extrabold uppercase">
                Workforce Transformation
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Before vs. After SkillMetrics
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                How modern industrial plants move from operational friction to real-time skill clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* BEFORE CARD */}
              <div className="bg-red-500/5 dark:bg-red-950/20 border border-red-500/20 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2.5 text-red-600 dark:text-red-400 font-extrabold text-base">
                  <XCircle className="h-5 w-5 shrink-0" />
                  <span>Legacy Spreadsheets &amp; Paper Checklists</span>
                </div>
                <ul className="space-y-2.5 text-xs text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Outdated Excel sheets leading to uncertified operator assignments.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Shift downtime when backup operators lack certified station credentials.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>2 weeks of manual labor preparing paper logs for ISO &amp; FDA audits.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Zero visibility into plant-wide skill gaps or upcoming license expirations.</span>
                  </li>
                </ul>
              </div>

              {/* AFTER CARD */}
              <div className="bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-extrabold text-base">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span>SkillMetrics Live Competency Platform</span>
                </div>
                <ul className="space-y-2.5 text-xs text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Live color-coded skill grid automatically verifying qualifications in real-time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>42% reduction in shift downtime through automated line balancing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>1-click digital audit export for ISO, IATF 16949, 21 CFR Part 11, and OSHA.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Automated alerts 60 days before certifications expire to prevent safety gaps.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FINAL CTA CARD */}
          <div className="bg-brand-dark text-white rounded-2xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Ready to Accelerate Your <span className="text-brand-yellow">Workforce Impact</span>?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Join Fortune 500 manufacturers and technology leaders who rely on SkillMetrics to streamline skill matrices and eliminate operational downtime.
              </p>
              <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
                <Link href="/book-demo">
                  <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red">
                    Schedule Customer Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button variant="dark" size="lg">
                    Explore Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SubscribeSection />
      <Footer />
    </div>
  );
}
