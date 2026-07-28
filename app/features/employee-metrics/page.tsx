"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BarChart2,
  CheckCircle2,
  ArrowRight,
  Users,
  Search,
  Sliders,
  TrendingUp,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookDemoModal } from "@/components/book-demo-modal";

export default function EmployeeMetricsPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <Badge className="bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Workforce Performance Analytics
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Employee Metrics: <span className="text-brand-yellow">Dynamic Grid Analytics</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Visually track employee skills with a dynamic matrix grid view. Discover missing competencies, and assign the right candidates to the right tasks at the right time.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              onClick={() => setDemoOpen(true)}
            >
              Explore Sample Matrix Demo <ArrowRight className="ml-2 h-4 w-4" />
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
            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card order-2 lg:order-1">
              <img
                src="/emp.jpg"
                alt="Employee Metrics Grid Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow font-extrabold text-xs uppercase tracking-wider">
                <BarChart2 className="h-4 w-4" /> Tailor-Made Employee Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Discover Missing Competencies Before They Disrupt Production
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Flexible customizations in grid view yield the best results in workforce allocation. See who needs training, who is ready for promotion, and which lines are at risk of skill deficits.
              </p>
              <ul className="space-y-3 text-sm text-foreground font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Customizable department &amp; machine filter matrices</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Visual indicator badges for level 1 to level 4 proficiency</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Instant candidate matching for open project tickets</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                  <Sliders className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Custom Grid Views</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Tailor grid parameters to match plant hierarchy, shift rotations, or engineering team squads.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                  <Search className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Skill Gap Identification</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Automatically highlight missing operational skillsets across plants and department squads.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Training ROI Tracking</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Measure performance improvements post-training and calculate employee upskilling velocity.
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
