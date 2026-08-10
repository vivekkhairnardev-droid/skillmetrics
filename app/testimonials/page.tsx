"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  Quote,
  CheckCircle2,
  Building2,
  Users,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  ThumbsUp,
  MessageSquare,
  BadgeCheck,
  Factory
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Marcus Vance",
    role: "VP of Global Manufacturing Operations",
    company: "Apex Automotive Group",
    industry: "Automotive",
    category: "Plant Operations",
    rating: 5,
    verified: true,
    avatarBg: "bg-amber-500",
    initials: "MV",
    quote: "SkillMetrics transformed our assembly plants from manual spreadsheet chaos to real-time skill clarity. Our TAKT-time delays dropped by 42% in under 90 days, and our shift leads finally have full confidence during operator substitutions.",
    highlight: "42% Reduction in TAKT-time delays"
  },
  {
    id: "t2",
    name: "Elena Rostova",
    role: "Quality Assurance Director",
    company: "SiliconCore Microelectronics",
    industry: "Electronics",
    category: "Quality & Regulatory",
    rating: 5,
    verified: true,
    avatarBg: "bg-blue-600",
    initials: "ER",
    quote: "Preparing for IPC-A-610 and ISO 13485 audits used to take two full weeks of pulling paper training logs across 12 cleanrooms. With SkillMetrics, we generate instant 1-click audit reports during inspections with zero findings.",
    highlight: "Audit prep reduced from 2 weeks to 5 minutes"
  },
  {
    id: "t3",
    name: "Dr. Jonathan Thorne",
    role: "Head of Regulatory Compliance",
    company: "Aura BioMed Global",
    industry: "Pharmaceuticals",
    category: "Quality & Regulatory",
    rating: 5,
    verified: true,
    avatarBg: "bg-emerald-600",
    initials: "JT",
    quote: "In sterile biomanufacturing, an unverified electronic sign-off can stall batch releases for weeks. SkillMetrics dual-signer cryptographic logs and 21 CFR Part 11 validation gave us 100% audit confidence.",
    highlight: "3x Faster eBMR lot release times"
  },
  {
    id: "t4",
    name: "Sarah Jenkins",
    role: "Plant Operations Manager",
    company: "PureDairy Global Foods",
    industry: "Food & Beverage",
    category: "Plant Operations",
    rating: 5,
    verified: true,
    avatarBg: "bg-purple-600",
    initials: "SJ",
    quote: "Allergen line changeovers are high-risk. SkillMetrics mobile floor tablet checklists ensure every critical control point is manned by certified sanitarians before a single batch runs.",
    highlight: "Zero cross-contamination incidents"
  },
  {
    id: "t5",
    name: "Robert Sterling",
    role: "Chief Safety Officer",
    company: "Titan Heavy Industries",
    industry: "Heavy Manufacturing",
    category: "EHS & Safety",
    rating: 5,
    verified: true,
    avatarBg: "bg-amber-600",
    initials: "RS",
    quote: "Safety is non-negotiable when operating 50-ton overhead cranes. SkillMetrics station risk matrix flags expired machinery licenses automatically, keeping our shop floor 100% OSHA compliant.",
    highlight: "184 consecutive incident-free days"
  },
  {
    id: "t6",
    name: "Sanjay Kumar",
    role: "VP of Engineering",
    company: "PayGlobe Inc",
    industry: "Financial Services",
    category: "Engineering & Tech",
    rating: 5,
    verified: true,
    avatarBg: "bg-brand-red",
    initials: "SK",
    quote: "Our senior developers were spending 30+ hours per week conducting manual screening interviews. SkillMetrics AI candidate screening automated code evaluations and saved us over $400K annually.",
    highlight: "$400,000 annual engineering cost savings"
  },
  {
    id: "t7",
    name: "Catherine Dupuis",
    role: "Director of Aerospace Quality Systems",
    company: "AeroPrecision Systems",
    industry: "Aerospace & Defense",
    category: "Quality & Regulatory",
    rating: 5,
    verified: true,
    avatarBg: "bg-slate-700",
    initials: "CD",
    quote: "Managing AS9100 Rev D flight safety critical skills across multiple assembly hangars was a compliance headache. SkillMetrics digitized our mobile stamp tracking and simplified FAA audit prep.",
    highlight: "100% AS9100 Rev D audit pass rate"
  },
  {
    id: "t8",
    name: "Vikram Malhotra",
    role: "Head of Learning & Development",
    company: "TechScale Global",
    industry: "Enterprise Software",
    category: "Engineering & Tech",
    rating: 5,
    verified: true,
    avatarBg: "bg-indigo-600",
    initials: "VM",
    quote: "SkillMetrics upskilling matrices allow us to map developer growth across cloud and AI stacks seamlessly. Employees love seeing their clear career progression radars.",
    highlight: "88% employee engagement boost"
  }
];

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTestimonials = selectedCategory === "All"
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <Badge className="bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Customer Testimonials &amp; Reviews
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Loved by Operations, Quality &amp; <span className="text-brand-yellow">HR Leaders</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Read how CTOs, VPs of Manufacturing, Quality Directors, and EHS Leads trust SkillMetrics to power their workforce competency matrices and streamline audit compliance.
          </p>

          {/* RATING SUMMARY STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-1 text-brand-yellow text-xl font-black">
                <span>4.9</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
              </div>
              <div className="text-[11px] text-slate-400 font-bold uppercase mt-1">Average Customer Rating</div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-yellow">99.4%</div>
              <div className="text-[11px] text-slate-400 font-bold uppercase mt-1">Annual Client Retention</div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-yellow">50+</div>
              <div className="text-[11px] text-slate-400 font-bold uppercase mt-1">Enterprise Clients</div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-yellow">100K+</div>
              <div className="text-[11px] text-slate-400 font-bold uppercase mt-1">Workforce Skills Tracked</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER BAR */}
      <section className="py-6 bg-white dark:bg-background border-b border-border/60 sticky top-16 z-30 shadow-xs backdrop-blur-md">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2">
            {["All", "Plant Operations", "Quality & Regulatory", "Engineering & Tech", "EHS & Safety"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-brand-yellow text-slate-950 shadow-md scale-105"
                    : "bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:text-foreground hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS GRID */}
      <main className="flex-1 py-14 bg-slate-50 dark:bg-slate-900/40">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.map((t) => (
              <Card key={t.id} className="border border-border/80 bg-card shadow-lg hover:shadow-xl hover:border-brand-yellow/40 transition-all rounded-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 space-y-6 relative group">
                <div className="space-y-4">
                  {/* Top Bar: Stars + Highlight Badge */}
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                      ))}
                    </div>
                    <Badge variant="outline" className="bg-brand-yellow/10 text-amber-800 dark:text-brand-yellow border-brand-yellow/30 font-extrabold text-[10px]">
                      {t.highlight}
                    </Badge>
                  </div>

                  {/* Quote Body */}
                  <blockquote className="text-sm sm:text-base text-foreground leading-relaxed italic relative">
                    <Quote className="h-8 w-8 text-brand-yellow/20 absolute -top-3 -left-2 -z-10" />
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info & Verified Customer Badge */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`h-11 w-11 rounded-full ${t.avatarBg} text-white font-extrabold flex items-center justify-center text-sm shadow-md shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-foreground flex items-center gap-1.5">
                        {t.name}
                        {t.verified && (
                          <BadgeCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                      <div className="text-[11px] font-bold text-brand-red mt-0.5">{t.company}</div>
                    </div>
                  </div>

                  <Badge variant="secondary" className="text-[9px] uppercase font-mono tracking-wider shrink-0 hidden sm:inline-flex">
                    {t.industry}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          {/* TRUST WALL & AUDIT COMPLIANCE STANDARDS */}
          <section className="bg-card border border-border rounded-2xl p-8 sm:p-12 space-y-8 text-center shadow-xl">
            <div className="max-w-2xl mx-auto space-y-2">
              <Badge className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-[10px] font-extrabold uppercase">
                Audited &amp; Certified
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Trusted Across Global Regulatory Frameworks
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                SkillMetrics matrices are built to satisfy strict global compliance and quality management standards.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              <div className="bg-slate-50 dark:bg-slate-900/80 p-5 rounded-xl border border-border/60 space-y-2">
                <div className="text-lg font-black text-brand-yellow">ISO 9001 &amp; 27001</div>
                <div className="text-xs text-muted-foreground font-semibold">Quality &amp; InfoSec Audits</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/80 p-5 rounded-xl border border-border/60 space-y-2">
                <div className="text-lg font-black text-brand-yellow">IATF 16949</div>
                <div className="text-xs text-muted-foreground font-semibold">Automotive Assembly</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/80 p-5 rounded-xl border border-border/60 space-y-2">
                <div className="text-lg font-black text-brand-yellow">21 CFR Part 11</div>
                <div className="text-xs text-muted-foreground font-semibold">FDA Biopharma eBMR</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/80 p-5 rounded-xl border border-border/60 space-y-2">
                <div className="text-lg font-black text-brand-yellow">AS9100 Rev D</div>
                <div className="text-xs text-muted-foreground font-semibold">Aerospace &amp; Defense</div>
              </div>
            </div>
          </section>

          {/* CALL TO ACTION */}
          <div className="bg-brand-dark text-white rounded-2xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Join 50+ Enterprise Leaders Scaling <span className="text-brand-yellow">Workforce Excellence</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                See how SkillMetrics can eliminate manual spreadsheet errors and streamline compliance for your plant or engineering team.
              </p>
              <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
                <Link href="/book-demo">
                  <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red">
                    Schedule Customer Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/success-stories">
                  <Button variant="dark" size="lg">
                    View Success Stories
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
