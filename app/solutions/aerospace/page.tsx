"use client";

import React from "react";
import Link from "next/link";
import {
  Plane,
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
  Wrench,
  AlertTriangle,
  Building2,
  Radio,
  Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function AerospaceSolutionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Aerospace &amp; Defense Safety &amp; <span className="text-brand-yellow">Workforce Competency</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Master AS9100 quality compliance, enforce Flight Safety Critical station qualifications, track composite &amp; avionics operator certifications, and streamline FAA/EASA audit readiness with real-time skill matrices.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Schedule Aerospace Demo <ArrowRight className="ml-2 h-4 w-4" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Plane className="h-3.5 w-3.5" /> Aerospace &amp; Defense Engineering
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Zero-Defect Flight Hardware Powered by Validated Specialists
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                In aerospace and defense manufacturing, there is no margin for error. A single uncertified technician performing torque sign-offs, carbon composite bonding, or avionics wiring can jeopardize airworthiness and lead to catastrophic component failures.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                SkillMetrics delivers an AS9100 Rev D compliant skill matrix, giving flight line managers and defense prime contractors complete real-time oversight of technician qualifications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">AS9100 Rev D Audit Ready</h4>
                    <p className="text-xs text-muted-foreground">Digital logbook of technician qualifications &amp; stamps.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Flight Safety Critical Gates</h4>
                    <p className="text-xs text-muted-foreground">Strict sign-off validation for safety-critical assemblies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Avionics &amp; Harness Mapping</h4>
                    <p className="text-xs text-muted-foreground">Verify high-density soldering &amp; crimping credentials.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">FAA / EASA Regulatory Readiness</h4>
                    <p className="text-xs text-muted-foreground">Instant export of audit logs for aviation authorities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/aerospace-dashboard.png"
                alt="Aerospace & Defense Workforce Dashboard"
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
              Aerospace Qualification &amp; Compliance Workflow
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              A rigorous qualification framework designed for defense contractors and aircraft OEMs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold font-mono">
                  01
                </div>
                <CardTitle className="text-lg font-bold">1. Flight-Critical Skill Mapping</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Establish certified proficiency tiers (L1 Trainee to L4 Master Inspector) for airframe assembly, jet engine mounts, and avionics integration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold font-mono">
                  02
                </div>
                <CardTitle className="text-lg font-bold">2. Digital AS9100 &amp; Stamp Audits</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Quality inspectors complete mobile verification checks. Validate stamp authority and non-conformance remediation logs in real time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold font-mono">
                  03
                </div>
                <CardTitle className="text-lg font-bold">3. Live Hangar &amp; Bay Gatekeeping</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Live station maps ensure only certified technicians with active stamp privileges are assigned to critical assembly bays.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY AEROSPACE CAPABILITIES GRID (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="border-b border-border pb-4 space-y-1">
            <h3 className="text-2xl font-black text-foreground">Core Aerospace &amp; Defense Capabilities</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Tailored for commercial aviation OEMs, defense prime contractors, and MRO overhaul facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs hover:border-blue-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">AS9100 Rev D Compliance</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Maintain 100% audit readiness with tamper-proof electronic records of technician stamp history and re-qualification cycles.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-blue-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                  <Compass className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Flight Safety Critical Gates</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Enforce mandatory dual-sign-off gates for flight-critical propulsion, flight controls, and structural joints.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-blue-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <Wrench className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Composite Curing &amp; Autoclave</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Track specialized certifications for carbon fiber lamination, vacuum bagging, and autoclave cure cycle monitoring.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-blue-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                  <Radio className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Avionics &amp; Wire Harnessing</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Verify technician credentials for high-density soldering, fiber optic termination, and automated wire harness testing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-blue-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">FOD Prevention Compliance</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Log mandatory Foreign Object Debris (FOD) awareness and clean-as-you-go certifications for hangar technicians.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-blue-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-slate-500/10 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold">
                  <Building2 className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Multi-Hangar Defense Matrix</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Compare technician skill levels and stamp permissions across dispersed defense manufacturing plants and MRO hangars.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC INSIGHTS FOR AEROSPACE (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image preview with overlay stats */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-brand-yellow rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
                <img
                  src="/emp.jpg"
                  alt="Aerospace & Defense Manufacturing Insights"
                  className="w-full h-auto object-cover"
                />

                {/* Floating overlay stats card */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 dark:bg-slate-900/90 backdrop-blur-md border border-border/60 rounded-lg p-4 shadow-xl flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold">AS9100 Quality Status</div>
                    <div className="text-sm font-extrabold text-foreground">98.6% Compliance Score</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Insight Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
                  Aerospace Operational Insights
                </h2>
                <p className="text-muted-foreground text-sm max-w-xl">
                  How leading aerospace OEMs protect flight safety and streamline FAA / EASA audits.
                </p>
              </div>

              <div className="space-y-4">
                {/* Insight Card 1 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-blue-500/30 border-l-4 border-l-blue-500 hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Sparkles className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Enforcing Qualification Gatekeeping for Flight Hardware
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Uncertified technician sign-offs on airframes or engine mounts represent severe liability. SkillMetrics automatically restricts stamp authorization to technicians with active, non-expired certifications.
                  </p>
                </div>

                {/* Insight Card 2 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-brand-yellow/30 border-l-4 border-l-brand-yellow hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-brand-yellow/10 flex items-center justify-center text-slate-800 dark:text-brand-yellow">
                      <Smartphone className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Hangar-Side Mobile Verification &amp; Stamp Tracking
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Quality leads perform station audits right on the assembly floor using ruggedized tablets, instantly updating technician stamp permissions without returning to administrative offices.
                  </p>
                </div>

                {/* Insight Card 3 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-emerald-600/30 border-l-4 border-l-emerald-600 hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Rapid FAA &amp; Defense Prime Audit Verification
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    During FAA, EASA, or military customer audits, export comprehensive skill matrices showing complete training histories, stamp numbers, and recertification records with zero delay.
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
            <h2 className="text-3xl font-extrabold text-foreground">Defense-Grade Infrastructure for Aerospace</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mx-auto flex items-center justify-center font-bold">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Defense Security Standards</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Granular role-based access control matching defense compliance and ITAR security protocols.
              </p>
            </Card>

            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow mx-auto flex items-center justify-center font-bold">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Hangar Mobile Kiosks</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Optimized interface for rugged industrial tablets, floor stations, and mobile technician units.
              </p>
            </Card>

            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center font-bold">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">High-Availability Uptime</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                99.99% cloud availability guaranteeing round-the-clock matrix access across global assembly hangars.
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
