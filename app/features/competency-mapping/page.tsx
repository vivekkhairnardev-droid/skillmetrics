"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  FileText,
  PieChart,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookDemoModal } from "@/components/book-demo-modal";

export default function CompetencyMappingPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <Badge className="bg-brand-red/20 text-brand-red border border-brand-red/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Capability Frameworks &amp; Radar Vector Analytics
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Competency Mapping: <span className="text-brand-yellow">Functional Radar Framework</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Functional radars, capability graphs, and training feedback loops designed to benchmark employee proficiency across technical stacks and operational workflows.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              onClick={() => setDemoOpen(true)}
            >
              Launch Competency Radar Engine <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/features">
              <Button variant="dark" size="lg">
                View All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="flex-1 py-16 bg-slate-50 dark:bg-background space-y-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-red/10 text-brand-red font-extrabold text-xs uppercase tracking-wider">
                <Layers className="h-4 w-4" /> Radar Analytics &amp; Scorecards
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Benchmark Employee Proficiency Across Technical Stacks
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Imprint workforce capabilities into central radar frameworks, track growth over time, and eliminate manual spreadsheet errors with automated capability scorecards.
              </p>
              <ul className="space-y-3 text-sm text-foreground font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Functional radar charts &amp; competency proficiency vectors</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Role-based capability frameworks from Junior to Senior Leads</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>1-Click capability &amp; training analytics reports for HR leadership</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/compentancy-mapping.jpg"
                alt="Competency Mapping Radar Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                  <PieChart className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Functional Radar Charts</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Visualize employee proficiency balance across hard skills, soft skills, and compliance certifications.
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
      </main>

      <Footer />
      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
