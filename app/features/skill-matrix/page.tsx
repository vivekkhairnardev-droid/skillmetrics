"use client";

import React from "react";
import Link from "next/link";
import {
  Grid,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Layers,
  Users,
  FileCheck2,
  Sparkles,
  Smartphone,
  Server,
  Lock,
  Cpu,
  Clock,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function SkillMatrixPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Familiarize yourself with the <span className="text-brand-yellow">Skill Matrix</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            A real-time, unbreakable tool showcasing essential skills and core competencies of your staff members to optimize task performance and operational efficiency.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="dark" size="lg">
                View All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 1: ROBUST TRAINING & COMPETENCY (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Robust Training, Competency, Audits, Assessment, and Skill Matrix
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                <strong>Skill Metrics</strong> is the powerful &amp; ideal software service that instantly creates a skill matrix based upon your talent and competency framework. Skill metrics reduce efforts and limitations while using spreadsheets/Excel sheets.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Skill matrix can be created in a number of powerful and flexible ways, to perform gap analysis in seconds on any Department of your organization. All skill matrix is automatically color-coded to help visually identify competency, compliance, and skill gaps.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                With skill metrics, assessment of employees is as simple as:
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Build training (with drag &amp; drop) &gt; Training scheduled &gt; Exam build (with drag &amp; drop) &gt; Exam conducted &gt; Instant result &gt; Skill Metrics Build
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Easily fetched skill results help in monitoring the skill gaps within seconds, hence results in a trouble-free and accurate allocation of manpower through your organization/organizations
              </p>
            </div>

            <div className="lg:col-span-6 rounded-xl  overflow-hidden bg-card">
              <img
                src="/skillmetricss.png"
                alt="Skill Matrix Software Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIMPLE ASSESSMENT WORKFLOW BANNER (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-card border border-border/80 rounded-sm p-6 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-black text-foreground">
                With Skill Metrics, Assessment of Employees is as Simple As:
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 pt-2">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-sm text-center space-y-1.5 border border-border/60 flex flex-col justify-center">
                <span className="text-[10px] font-mono font-bold text-brand-red">STEP 1</span>
                <p className="text-xs font-bold text-foreground">Build Training (Drag &amp; Drop)</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-sm text-center space-y-1.5 border border-border/60 flex flex-col justify-center">
                <span className="text-[10px] font-mono font-bold text-brand-red">STEP 2</span>
                <p className="text-xs font-bold text-foreground">Training Scheduled</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-sm text-center space-y-1.5 border border-border/60 flex flex-col justify-center">
                <span className="text-[10px] font-mono font-bold text-brand-red">STEP 3</span>
                <p className="text-xs font-bold text-foreground">Exam Build (Drag &amp; Drop)</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-sm text-center space-y-1.5 border border-border/60 flex flex-col justify-center">
                <span className="text-[10px] font-mono font-bold text-brand-red">STEP 4</span>
                <p className="text-xs font-bold text-foreground">Exam Conducted</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-sm text-center space-y-1.5 border border-border/60 flex flex-col justify-center">
                <span className="text-[10px] font-mono font-bold text-brand-red">STEP 5</span>
                <p className="text-xs font-bold text-foreground">Instant Result</p>
              </div>
              <div className="bg-brand-red text-white p-4 rounded-sm text-center space-y-1.5 border border-brand-red flex flex-col justify-center shadow-md">
                <span className="text-[10px] font-mono font-bold text-brand-yellow">FINAL STEP</span>
                <p className="text-xs font-black">Skill Matrix Built</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-center text-muted-foreground max-w-3xl mx-auto pt-2">
              Easily fetched skill results help in monitoring the skill gaps within seconds, hence results in a trouble-free and accurate allocation of manpower through your organization/organizations.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: TOP FEATURES GRID (Rich Visual Design) */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-background dark:via-slate-900/20 dark:to-background border-b border-border/60 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-12 relative z-10">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/80 pb-6">
            <div className="space-y-2 max-w-2xl text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Top Features &amp; Capabilities
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Everything you need to automate competency tracking, eliminate manual spreadsheet friction, and align staff capabilities with operational targets.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: Training Scheduling */}
            <div className="group relative rounded-2xl border border-border/90 bg-card p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-red/15 to-brand-red/5 text-brand-red flex items-center justify-center font-bold border border-brand-red/20 group-hover:scale-105 transition-transform duration-300">
                    <Clock className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-red bg-brand-red/10 px-2.5 py-1 rounded-full border border-brand-red/20">
                    Automated
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-brand-red transition-colors">
                    Training Scheduling
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Schedule internal upskilling sessions, assign trainees based on identified skill gaps, and track attendance and progress effortlessly.
                  </p>
                </div>
              </div>
              <ul className="pt-5 mt-5 border-t border-border/60 space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                  <span>Drag-and-drop schedule calendar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                  <span>Automated trainee notifications</span>
                </li>
              </ul>
            </div>

            {/* Card 2: AI Assessments */}
            <div className="group relative rounded-2xl border border-border/90 bg-card p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold border border-amber-500/20 group-hover:scale-105 transition-transform duration-300">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    AI-Powered
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Smart Assessments
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Automated &amp; proctored skill testing for employees across departments, shift lines, and technical qualification levels.
                  </p>
                </div>
              </div>
              <ul className="pt-5 mt-5 border-t border-border/60 space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>Interactive AI question engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>Instant scorecard generation</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Competency Mapping */}
            <div className="group relative rounded-2xl border border-border/90 bg-card p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 text-emerald-600 flex items-center justify-center font-bold border border-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                    <Layers className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Real-Time
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-600 transition-colors">
                    Competency Mapping
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Map individual proficiency ratings against target role benchmarks in real-time with visual color-coded matrices.
                  </p>
                </div>
              </div>
              <ul className="pt-5 mt-5 border-t border-border/60 space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Role benchmark comparisons</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Visual radar chart insights</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Accurate Manpower Distribution */}
            <div className="group relative rounded-2xl border border-border/90 bg-card p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 text-blue-600 flex items-center justify-center font-bold border border-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                    <Users className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                    Optimal Allocation
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-blue-600 transition-colors">
                    Manpower Allocation
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Ensure qualified operators and certified staff are assigned to the right workstations at all times for peak safety.
                  </p>
                </div>
              </div>
              <ul className="pt-5 mt-5 border-t border-border/60 space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                  <span>Shift &amp; machine-driven shifts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                  <span>Zero unverified operator risk</span>
                </li>
              </ul>
            </div>

            {/* Card 5: Cut Down Spreadsheets */}
            <div className="group relative rounded-2xl border border-border/90 bg-card p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 text-purple-600 flex items-center justify-center font-bold border border-purple-500/20 group-hover:scale-105 transition-transform duration-300">
                    <FileCheck2 className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                    Zero Error
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-purple-600 transition-colors">
                    Cut Spreadsheet Friction
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Eliminate broken Excel formulas, missing certificate dates, version conflicts, and static manual spreadsheet chaos.
                  </p>
                </div>
              </div>
              <ul className="pt-5 mt-5 border-t border-border/60 space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500 shrink-0" />
                  <span>Unbreakable live database</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500 shrink-0" />
                  <span>1-Click Excel export &amp; import</span>
                </li>
              </ul>
            </div>

            {/* Card 6: Centralized System */}
            <div className="group relative rounded-2xl border border-border/90 bg-card p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-slate-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-slate-500/20 to-slate-500/5 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold border border-slate-500/20 group-hover:scale-105 transition-transform duration-300">
                    <Server className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-500/10 px-2.5 py-1 rounded-full border border-slate-500/20">
                    Enterprise
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    Centralized Ecosystem
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Single source of truth for plant managers, department heads, HR leads, and external compliance auditors.
                  </p>
                </div>
              </div>
              <ul className="pt-5 mt-5 border-t border-border/60 space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 shrink-0" />
                  <span>Role-based access permissions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 shrink-0" />
                  <span>ISO 27001 audit ready</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: INSIGHTS OF SKILL MATRIX */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
              Insights of Skill Metrics
            </h2>
          </div>

          <div className="space-y-4">
            {/* Insight Card 1 */}
            <div className="bg-card p-6 sm:p-7 rounded-xl border border-border hover:border-brand-red/30 border-l-4 border-l-brand-red hover:shadow-md transition-all duration-300 space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <div className="h-8 w-8 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <Sparkles className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
                  Why is skill assessment important?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Understanding the need of work, &amp; working to the need is the pre-eminent part of Skill assessment, right person at right time at the right work definitely results in perfect management of workload &amp; finally takes the organization to the ultimate goal <strong className="text-foreground font-extrabold">GROWTH.</strong>
              </p>
            </div>

            {/* Insight Card 2 */}
            <div className="bg-card p-6 sm:p-7 rounded-xl border border-border hover:border-brand-yellow/30 border-l-4 border-l-brand-yellow hover:shadow-md transition-all duration-300 space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <div className="h-8 w-8 rounded-lg bg-brand-yellow/10 flex items-center justify-center text-slate-800 dark:text-brand-yellow">
                  <Smartphone className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
                  Skill assessment and the people
                </h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <p>
                  Linear growth in digitization technologies has made smartphones &amp; tabs &amp; etc. An integral part of our very livelihood. We at skill metrics provide the solution that is easily accessible &amp; totally verified just at your <strong className="text-foreground font-extrabold">FINGERTIPS.</strong>
                </p>
                <p className="font-semibold text-foreground italic">
                  Yes, it is as simple as that
                </p>
              </div>
            </div>

            {/* Insight Card 3 */}
            <div className="bg-card p-6 sm:p-7 rounded-xl border border-border hover:border-emerald-600/30 border-l-4 border-l-emerald-600 hover:shadow-md transition-all duration-300 space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
                  You and Skill Metrics
                </h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Admin panel with all the masters pre-stored and easily editable.</li>
                  <li>Assigning admin roles.</li>
                  <li>Limiting/extending user roles.</li>
                  <li>Addition, subtraction, multiplication, division.</li>
                  <li>At your side cuts down the support calls tough we provide 24×7 technical support.</li>
                </ul>
                <p className="font-semibold text-foreground italic pt-1">
                  Yes, we are worth your time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BUILT FOR SECURITY, UPTIME & HIGH PERFORMANCE (Clean 3-Card Layout) */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Built for Security, Uptime &amp; High Performance
            </h2>
          </div>

          {/* 3 Columns Clean Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: Security */}
            <div className="bg-card border border-border/80 rounded-xl p-6 sm:p-8 hover:border-brand-red/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 text-center">
              <div className="space-y-4">
                <div className="h-14 w-14 rounded-full bg-brand-red/10 text-brand-red mx-auto flex items-center justify-center font-bold">
                  <Lock className="h-7 w-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-foreground">Security</h3>
                  <p className="text-xs font-semibold text-muted-foreground">Your Security, Built into Skill Metrics</p>
                </div>
                <div className="pt-2 border-t border-border/60 space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed text-left">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Skill Metrics provides 100% Security Assurance</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Skill Metrics Protect your Valuable Data from Threats and Attacks</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Ensure your Data is safe With Skill metrics As Per your Company Norms.</span>
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/features">
                  <Button variant="outline" className="w-full font-bold">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Card 2: Cross-platform */}
            <div className="bg-card border border-border/80 rounded-xl p-6 sm:p-8 hover:border-brand-yellow/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 text-center">
              <div className="space-y-4">
                <div className="h-14 w-14 rounded-full bg-brand-yellow/15 text-slate-900 dark:text-brand-yellow mx-auto flex items-center justify-center font-bold">
                  <Smartphone className="h-7 w-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-foreground">Cross-platform</h3>
                  <p className="text-xs font-semibold text-muted-foreground">Your Security, Built into Skill Metrics</p>
                </div>
                <div className="pt-2 border-t border-border/60 space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed text-left">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Skill Metrics is compatible with multiple platforms such as desktop, laptop, mobile, etc.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Easily compatible with computers, Smartphones, and Tablets, a Nice and clean User Interface Supports All versions of Android and iOS.</span>
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/features">
                  <Button variant="outline" className="w-full font-bold">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Card 3: Best performance */}
            <div className="bg-card border border-border/80 rounded-xl p-6 sm:p-8 hover:border-emerald-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 text-center">
              <div className="space-y-4">
                <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center font-bold">
                  <Server className="h-7 w-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-foreground">Best performance</h3>
                  <p className="text-xs font-semibold text-muted-foreground">Your Security, Built into Skill Metrics</p>
                </div>
                <div className="pt-2 border-t border-border/60 space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed text-left">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Skill Metrics is the best platform For Managing your skill matrix and Competency management</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Enhance your Performance Culture through Easy use Platform</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Tools Like Skill metrics, Training Records, Assessment, Reporting, Dashboards, And Radars make Your Work Easy</span>
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/features">
                  <Button variant="outline" className="w-full font-bold">Learn More</Button>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      <SubscribeSection />
      <Footer />
    </div>
  );
}
