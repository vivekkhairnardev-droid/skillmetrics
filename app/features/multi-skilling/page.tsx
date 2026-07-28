"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  Shuffle,
  ShieldCheck,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookDemoModal } from "@/components/book-demo-modal";

export default function MultiSkillingPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <Badge className="bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Workforce Agility &amp; Resource Flexibility
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Multi-Skilling: <span className="text-brand-yellow">Versatile Manpower Framework</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Multiskilling mechanisms that make your manpower flexible and more powerful in problem-solving &amp; task executing workpower.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              onClick={() => setDemoOpen(true)}
            >
              Request Multi-Skilling Demo <ArrowRight className="ml-2 h-4 w-4" />
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
                src="/multi-skilling.png"
                alt="Multi-Skilling Dashboard Interface"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow font-extrabold text-xs uppercase tracking-wider">
                <RefreshCw className="h-4 w-4" /> Flexible Shift &amp; Manpower Allocation
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Adjust Manpower in Runtime for Peak Operational Results
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Cross-training employees eliminates bottlenecks caused by absenteeism or unexpected workload spikes. SkillMetrics tracks multi-skill proficiencies so managers can safely rotate staff across stations with zero quality loss.
              </p>
              <ul className="space-y-3 text-sm text-foreground font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Equip employees with more than one core operational skill</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Deploy equipped multi-skills dynamically at runtime</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Manage departmental, project, and machine shifts in 1 click</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Uncover hidden capabilities across existing team members</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                  <Shuffle className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Runtime Shift Reallocation</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Seamlessly reassign qualified operators when demand fluctuates or key staff members are absent.
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
      </main>

      <Footer />
      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
