"use client";

import React from "react";
import Link from "next/link";
import {
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  Shuffle,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function MultiSkillingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <Badge className="bg-brand-red/20 text-brand-red border border-brand-red/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Operational Versatility &amp; Agility
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Multi-Skilling: <span className="text-brand-yellow">Operational Versatility</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Enhance workforce fluidity. Cross-train your operators and engineering staff to manage multiple machines, resolve plant bottlenecks, and cover key absences.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Schedule Multi-Skilling Demo <ArrowRight className="ml-2 h-4 w-4" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-red/10 text-brand-red font-extrabold text-xs uppercase tracking-wider">
                <RefreshCw className="h-4 w-4" /> Workforce Fluidity Optimization
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Minimize Production Bottlenecks With Multi-Skilled Operators
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Single-point dependencies represent a massive risk to operations and manufacturing schedules. SkillMetrics makes it simple to map secondary and tertiary capability matrices so you always have verified backup operators ready for any machine or engineering role.
              </p>
              <ul className="space-y-3 text-sm text-foreground font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Map secondary skills to cross-train technicians across tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Highlight single-person dependencies to mitigate shift risks</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Track multi-skill compliance and training progression automatically</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/multi-skilling.png"
                alt="Multi-skilling software metrics view"
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
                  <Shuffle className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Dynamic Scheduling Grid</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Swap operations, shift slots, or machine schedules seamlessly based on real-time operator availability.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                  <Zap className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Cross-Training Automation</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Identify secondary and tertiary skill paths for staff to build a fully versatile engineering workforce.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <Clock className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">1-Click Machine Shift Sync</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Synchronize machine-driven shifts with employee multi-skill profiles in real time.
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
