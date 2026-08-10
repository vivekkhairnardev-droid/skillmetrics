"use client";

import React from "react";
import Link from "next/link";
import {
  Car,
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
  Wrench,
  AlertTriangle,
  Factory,
  Gauge
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function AutomotiveSolutionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <Badge className="bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Automotive Manufacturing Solution
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Automotive Assembly &amp; <span className="text-brand-yellow">Workforce Competency</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Master assembly line skill mapping, enforce IATF 16949 compliance, prevent line stops, and empower operators with real-time multi-skilling matrices for high-precision vehicle production.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Schedule Automotive Demo <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* SECTION 1: OVERVIEW & VALUE PROP (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider">
                <Car className="h-3.5 w-3.5" /> Industry Specific Solution
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Zero-Defect Production Powered by Real-Time Competency
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Modern vehicle assembly requires absolute precision—from powertrains and EV battery mounts to final quality sign-offs. SkillMetrics gives automotive plant managers an unbreakable real-time matrix of operator capabilities.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Eliminate uncertified operator risks, ensure total compliance with IATF 16949 standards, and automatically assign qualified backup operators to prevent costly assembly line bottlenecks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">IATF 16949 Audit Ready</h4>
                    <p className="text-xs text-muted-foreground">Automated digital logbook of operator certifications.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Line Stop Risk Prevention</h4>
                    <p className="text-xs text-muted-foreground">Instant backup operator matching for missing shifts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">EV &amp; Hybrid Upskilling</h4>
                    <p className="text-xs text-muted-foreground">Structured learning pathways for high-voltage battery assembly.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Station Qualification Maps</h4>
                    <p className="text-xs text-muted-foreground">Color-coded station coverage for every plant shift.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/automotive-dashboard.png"
                alt="Automotive Manufacturing Workforce Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WORKFLOW & STEPS (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
              Automotive Competency Workflow
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              A seamless continuous process built specifically for high-volume vehicle production floors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold font-mono">
                  01
                </div>
                <CardTitle className="text-lg font-bold">1. Plant Station Benchmarking</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Map essential skill levels (L1 Beginner to L4 Master Operator) for every assembly cell, robotics station, and quality inspection bay.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold font-mono">
                  02
                </div>
                <CardTitle className="text-lg font-bold">2. Digital Evaluation &amp; Audits</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Floor supervisors perform 1-click mobile practical evaluations. Standard operating procedures (SOPs) and Poka-Yoke checklists sync instantly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold font-mono">
                  03
                </div>
                <CardTitle className="text-lg font-bold">3. Multi-Skilling &amp; Line Balance</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Live dashboards trigger immediate alerts when shift coverage falls below safety thresholds, recommending certified cross-trained operators.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY AUTOMOTIVE CAPABILITIES GRID (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="border-b border-border pb-4 space-y-1">
            <h3 className="text-2xl font-black text-foreground">Core Industry Capabilities</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Purpose-built tools for Tier-1 suppliers and OEM vehicle assembly plants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">IATF 16949 Compliance</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Maintain 100% audit readiness with tamper-proof digital logs of training records and station certifications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                  <Wrench className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Station Line Balancing</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Match operator skill levels to TAKT time requirements to keep the line moving smoothly without bottlenecks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <Zap className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">EV Transition Pathways</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Seamlessly reskill internal combustion engine (ICE) teams into high-voltage powertrain and battery specialists.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Critical Station Gap Alerts</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Automatic alerts warn managers when key stations lack certified secondary operators before shifts begin.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                  <Gauge className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Poka-Yoke &amp; Quality Sign-offs</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Link operator skill level directly to torque tool authorization and zero-defect quality check gates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-slate-500/10 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold">
                  <Factory className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Multi-Plant Management</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Compare competency scores across global manufacturing facilities in a single centralized dashboard.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC INSIGHTS FOR AUTOMOTIVE (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Dashboard Preview with overlay stats */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-yellow rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
                <img
                  src="/emp.jpg"
                  alt="Automotive Competency Insights"
                  className="w-full h-auto object-cover"
                />

                {/* Floating overlay stats card */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 dark:bg-slate-900/90 backdrop-blur-md border border-border/60 rounded-lg p-4 shadow-xl flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-full bg-brand-red/10 flex items-center justify-center font-bold text-brand-red">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold">Assembly Line Efficiency</div>
                    <div className="text-sm font-extrabold text-foreground">35% Reduction in Shift Downtime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Insight Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
                  Automotive Operational Insights
                </h2>
                <p className="text-muted-foreground text-sm max-w-xl">
                  How leading automotive manufacturers leverage SkillMetrics to drive speed, compliance, and quality.
                </p>
              </div>

              <div className="space-y-4">
                {/* Insight Card 1 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-brand-red/30 border-l-4 border-l-brand-red hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red">
                      <Sparkles className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Eliminating Line Stops with Multi-Skilled Backup Operators
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Unplanned absences on a high-speed vehicle assembly line cost thousands per minute. SkillMetrics automatically maps cross-trained team members available on the floor to step in instantly without missing a beat.
                  </p>
                </div>

                {/* Insight Card 2 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-brand-yellow/30 border-l-4 border-l-brand-yellow hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-brand-yellow/10 flex items-center justify-center text-slate-800 dark:text-brand-yellow">
                      <Smartphone className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Floor-Side Digital Evaluations on Industrial Tablets
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Floor supervisors complete operator evaluations right on rugged industrial tablets. Verification logs update instantly across the entire enterprise matrix, eliminating paper audits entirely.
                  </p>
                </div>

                {/* Insight Card 3 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-emerald-600/30 border-l-4 border-l-emerald-600 hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Seamless OEM Quality &amp; ISO/IATF Compliance
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Be 100% audit-confident when major OEM clients or ISO certification teams walk the floor. Show detailed, real-time matrix logs proving every operator at every station is fully certified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ENTERPRISE SECURITY & PERFORMANCE (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-foreground">Enterprise Infrastructure for Automotive Ops</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-brand-red/10 text-brand-red mx-auto flex items-center justify-center font-bold">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Military-Grade Security</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Role-based permissions ensure supervisors, plant heads, and auditors only access authorized plant &amp; line metrics.
              </p>
            </Card>

            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow mx-auto flex items-center justify-center font-bold">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Industrial Device Support</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Optimized for industrial tablets, handheld scanners, and desktop command centers on the factory floor.
              </p>
            </Card>

            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center font-bold">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">High-Speed Uptime</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                99.99% cloud uptime guarantees instant skill matrices and zero delay during multi-shift handovers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <SubscribeSection />
      <Footer />
    </div>
  );
}
