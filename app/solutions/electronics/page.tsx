"use client";

import React from "react";
import Link from "next/link";
import {
  Cpu,
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
  Clock,
  Activity,
  Microscope,
  CircuitBoard,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function ElectronicsSolutionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Precision Electronics &amp; <span className="text-brand-yellow">Workforce Competency</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Track SMT operator qualifications, enforce IPC-A-610 standards, guarantee ESD safety compliance, and maximize cleanroom yield with real-time skill matrices.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Schedule Electronics Demo <ArrowRight className="ml-2 h-4 w-4" />
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
                <Cpu className="h-3.5 w-3.5" /> High Tech &amp; Hardware Manufacturing
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                High-Yield Hardware Production Powered by Certified Specialists
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                In electronic assembly and semiconductor manufacturing, minor operational oversights lead to component damage, latent ESD defects, and costly scrap. SkillMetrics ensures every technician on your Surface Mount Technology (SMT) and testing line is fully certified.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Replace fragmented training records with a centralized digital matrix compliant with IPC-A-610, J-STD-001, and ISO cleanroom standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">IPC-A-610 &amp; J-STD Certified</h4>
                    <p className="text-xs text-muted-foreground">Automated tracking for micro-soldering standards.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">ESD Safety Compliance</h4>
                    <p className="text-xs text-muted-foreground">Verify grounding and electrostatic discharge training.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">SMT &amp; AOI Line Balancing</h4>
                    <p className="text-xs text-muted-foreground">Ensure certified operators for high-speed feeders &amp; optics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Cleanroom Class Tracking</h4>
                    <p className="text-xs text-muted-foreground">Station coverage for Class 100 to Class 10,000 fabs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/electronics-dashboard.png"
                alt="Electronics & Semiconductor Manufacturing Dashboard"
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
              Electronics Workforce Qualification Workflow
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              From component insertion to automated optical inspection and micro-repair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold font-mono">
                  01
                </div>
                <CardTitle className="text-lg font-bold">1. SMT &amp; Soldering Skill Mapping</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Establish clear proficiency levels (L1 Trainee to L4 Master Specialist) for feeder setup, stencil printing, reflow ovens, and manual rework.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold font-mono">
                  02
                </div>
                <CardTitle className="text-lg font-bold">2. IPC Standard &amp; ESD Audits</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Conduct proctored practical evaluations. Verify IPC compliance, ESD wrist-strap protocol adherence, and lead-free soldering certifications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold font-mono">
                  03
                </div>
                <CardTitle className="text-lg font-bold">3. Live Cleanroom Coverage</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Color-coded matrices monitor cleanroom station readiness in real-time, preventing uncertified personnel from operating critical machinery.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY ELECTRONICS CAPABILITIES GRID (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="border-b border-border pb-4 space-y-1">
            <h3 className="text-2xl font-black text-foreground">Core Hardware &amp; Fab Capabilities</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Engineered for PCB assembly houses, EMS providers, and semiconductor fabs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                  <CircuitBoard className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">IPC-A-610 &amp; J-STD Tracking</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Automatically track soldering certifications and expiration dates for Class 1, 2, and 3 electronics assemblies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                  <Zap className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">ESD Protocol Enforcement</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Log electrostatic discharge safety compliance to protect sensitive ICs and micro-controllers from latent damage.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <Microscope className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Micro-Soldering &amp; Repair</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Identify certified technicians qualified for high-density BGA, QFN, and 0201 component rework.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                  <Activity className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">AOI &amp; SPI Inspection Coverage</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Ensure Automated Optical Inspection and Solder Paste Inspection bays are staffed by qualified optical technicians.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">First Pass Yield Protection</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Reduce component bridging, tombstoning, and insufficient solder defects by enforcing mandatory skill checks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-slate-500/10 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold">
                  <Layers className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Cleanroom Station Matrix</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Dynamic station map for ISO Class 5-8 cleanrooms ensuring gowning and airlock protocols are fully logged.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC INSIGHTS FOR ELECTRONICS (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image with overlay stats */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-yellow rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
                <img
                  src="/emp.jpg"
                  alt="Electronics Manufacturing Insights"
                  className="w-full h-auto object-cover"
                />

                {/* Floating overlay stats card */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 dark:bg-slate-900/90 backdrop-blur-md border border-border/60 rounded-lg p-4 shadow-xl flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-full bg-brand-red/10 flex items-center justify-center font-bold text-brand-red">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold">First Pass Yield Improvement</div>
                    <div className="text-sm font-extrabold text-foreground">0.23% Ultra-Low Defect Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Insight Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
                  Electronics Operational Insights
                </h2>
                <p className="text-muted-foreground text-sm max-w-xl">
                  Strategic workforce intelligence for high-density SMT and micro-electronics assembly.
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
                      Protecting Yield in High-Density Surface Mount Lines
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    SMT lines process thousands of components per minute. SkillMetrics guarantees that stencil setup, solder paste inspection, and reflow profile adjustments are executed only by Level 4 verified operators.
                  </p>
                </div>

                {/* Insight Card 2 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-brand-yellow/30 border-l-4 border-l-brand-yellow hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-brand-yellow/10 flex items-center justify-center text-slate-800 dark:text-brand-yellow">
                      <Smartphone className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Digital ESD &amp; Gown Protocol Sign-Offs
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Supervisors log ESD wrist-strap testing and cleanroom gowning compliance directly on mobile tablets before shifts begin, eliminating paper logbooks.
                  </p>
                </div>

                {/* Insight Card 3 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-emerald-600/30 border-l-4 border-l-emerald-600 hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Full Traceability for Defense &amp; Medical Hardware
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    For ISO 13485 (Medical) or AS9100 (Aerospace/Defense) builds, export complete operator certification logs associated with specific serialized circuit board batches.
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
            <h2 className="text-3xl font-extrabold text-foreground">Enterprise Infrastructure for Electronics Fabs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-brand-red/10 text-brand-red mx-auto flex items-center justify-center font-bold">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Role-Based Access</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Granular permissions ensure line leads, QA managers, and auditors view only relevant station matrices.
              </p>
            </Card>

            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow mx-auto flex items-center justify-center font-bold">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Multi-Device Compatibility</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Access skill matrices on industrial tablets, MES terminals, and desktop workstations.
              </p>
            </Card>

            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center font-bold">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">99.99% Enterprise Uptime</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Cloud infrastructure optimized for continuous 24/7 high-volume SMT production runs.
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
