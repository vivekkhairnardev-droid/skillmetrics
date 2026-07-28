"use client";

import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Download,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function PowerfulDashboardsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <Badge className="bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Real-time Workforce Insights
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Powerful Dashboards: <span className="text-brand-yellow">1-Click Reporting</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Gain immediate insight into site compliance, plant coverage, upskilling metrics, and team skill distributions from unified executive boards.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Schedule Dashboard Walkthrough <ArrowRight className="ml-2 h-4 w-4" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow font-extrabold text-xs uppercase tracking-wider">
                <LayoutDashboard className="h-4 w-4" /> Comprehensive Operations Intelligence
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Consolidate Distributed Plants and Staff in Real Time
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Whether monitoring 50 engineers or 5,000 operators across multiple global plants, SkillMetrics dashboards collect training validation data automatically, generating direct reports on plant compliance, shift readiness, and skill gaps.
              </p>
              <ul className="space-y-3 text-sm text-foreground font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Real-time dashboard reporting with zero manual data entry</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Automated ISO audit trail reporting and exports</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Individual performance charts tracking upskilling velocities</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/emp.jpg"
                alt="Powerful reporting dashboard"
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
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Interactive Analytics</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Slice and dice competency data by team, department, shift, or specialized technology domain.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                  <Download className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Instant Export</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Export high-fidelity PDF, Excel, and CSV matrices for audits, client reviews, or performance meetings in seconds.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <Share2 className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Auditor Share Portal</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Provision read-only portal access to external ISO auditors, eliminating printed spreadsheets and email threads.
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
