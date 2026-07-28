"use client";

import React from "react";
import Link from "next/link";
import {
  BarChart2,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Award,
  ShieldAlert
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function EmployeeMetricsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <Badge className="bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Workforce Intelligence Platform
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Workforce Capability &amp; <span className="text-brand-yellow">Employee Metrics</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Understand your team's real-time skill distribution. Identify talent capabilities, flag operational vulnerabilities, and drive data-backed training programs.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Schedule a Demo Tour <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="dark" size="lg">
                Explore All Modules
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT ARE EMPLOYEE METRICS & HOW THEY HELP (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                What are Employee Competency Metrics?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Employee metrics in SkillMetrics are not just standard productivity numbers. They represent an objective, real-time map of your team's practical capabilities, certifications, and operational coverage.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                By replacing outdated spreadsheets with verified skill records, our customers get instant clarity on who is qualified to operate specific machinery, lead software components, or sign off on quality audits.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Objective Evaluation</h4>
                    <p className="text-xs text-muted-foreground">Replaces gut-feel reviews with assessment scores.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Automatic Updates</h4>
                    <p className="text-xs text-muted-foreground">Matrices sync instantly when certifications complete.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/emp.jpg"
                alt="Employee Competency Overview Chart"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS FOR CUSTOMERS (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
              How SkillMetrics Tracks and Displays Competency
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              An end-to-end continuous loop from initial mapping to live verification and reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold font-mono">
                  01
                </div>
                <CardTitle className="text-lg font-bold">1. Map Core Skill Targets</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Define the required capabilities and levels (L1 Beginner to L4 Expert) for every plant station, machine, or software engineering squad.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold font-mono">
                  02
                </div>
                <CardTitle className="text-lg font-bold">2. Evaluate &amp; Validate</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Evaluate employees automatically using proctored AI tests, or let floor managers record on-site certification logs directly in the app.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold font-mono">
                  03
                </div>
                <CardTitle className="text-lg font-bold">3. Identify &amp; Resolve Gaps</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  SkillMetrics automatically color-codes results, highlighting compliance gaps or missing backup operators so you can assign targeted training pathways.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY USE CASES (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card order-2">
              <img
                src="/multi-skilling.png"
                alt="Operational dashboard mockup"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6 order-1">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
                Empower Every Department Lead
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center shrink-0">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Operational Risk Minimization</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Instantly see if a critical production line is at risk due to shift absences, and discover qualified secondary operators automatically.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Transparent Career Tracks</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Enable workers to view their own skill profiles, identify what training modules they need to progress, and build trust in promotions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <FileCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Audit-Ready Compliance Logs</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Export full skill logs during ISO or client compliance reviews, eliminating paper checklists and missing history headaches.
                    </p>
                  </div>
                </div>
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
