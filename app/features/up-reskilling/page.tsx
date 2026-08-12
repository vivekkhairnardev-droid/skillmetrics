"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Milestone,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function UpReskillingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Up &amp; Re-Skilling: <span className="text-brand-yellow">Learning Pathways</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Equip your engineering and plant workforces with structured learning pathways, objective milestone tracking, and automated progress scorecards.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Schedule Upskilling Tour <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* SECTION 1: DETAILED VIEW (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Empower Employees with Dynamic Learning Targets
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                With SkillMetrics, plant managers and engineering leads can map individual career tracks to custom target proficiencies. When skill gaps are discovered, employees are automatically routed into customized learning courses.
              </p>
              <ul className="space-y-3 text-sm text-foreground font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Automated recommendation engine for training pathways</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Interactive learning modules aligned with plant certifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Real-time capability assessment post-course completion</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/skillmetricsss.png"
                alt="Upskilling pathways dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TOP SUB-FEATURES (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                  <BookOpen className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Structured Courseware</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Import internal training material or link to popular external LMS providers to coordinate course assignments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                  <Milestone className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Targeted Milestones</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Establish objective performance stages that employee capabilities are automatically measured against.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <Award className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Competency Validation</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Automatically verify skills post-learning via objective AI assessments and update the central skill matrix.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <SubscribeSection />
      <Footer />
    </div>
  );
}
