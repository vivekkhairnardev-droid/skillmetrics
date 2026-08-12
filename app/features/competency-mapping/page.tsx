"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  FileText,
  PieChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function CompetencyMappingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Competency Mapping: <span className="text-brand-yellow">Unified Standards</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Map workforce skills directly to company role hierarchies. Create transparent expectations, benchmark performance targets, and standardise operations across different sites.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Schedule Competency Mapping Demo <ArrowRight className="ml-2 h-4 w-4" />
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
                Establish a Transparent Competency Framework Across Plants
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Take the guesswork out of job levels and role definitions. With SkillMetrics, define exact skill matrices for every seniority role and engineering grade. Let team members track their progress and understand exactly what is required to qualify for promotion.
              </p>
              <ul className="space-y-3 text-sm text-foreground font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Align skill expectations with plant operations and production roles</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Assign clear milestone targets from Level 1 (novice) to Level 4 (expert)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Standardize job descriptions and capabilities across multi-site departments</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/multi-skilling.png"
                alt="Competency mapping software interface"
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
                  <PieChart className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Skill Gap Analytics</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Spot compliance issues and talent shortages immediately across custom plant regions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                  <Target className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Role-Based Benchmarks</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Define targeted skill vectors for each seniority tier and track progress toward promotion eligibility.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <FileText className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Executive Analytics Reports</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Export PDF &amp; CSV competency summaries for quarterly HR reviews and executive board presentations.
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
