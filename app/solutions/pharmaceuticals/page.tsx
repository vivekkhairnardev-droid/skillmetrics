"use client";

import React from "react";
import Link from "next/link";
import {
  FlaskConical,
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
  FileSpreadsheet,
  Building2,
  Syringe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function PharmaceuticalsSolutionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Pharmaceutical cGMP &amp; <span className="text-brand-yellow">Workforce Competency</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Enforce cGMP compliance, automate 21 CFR Part 11 electronic audit trails, track sterile cleanroom operator qualifications, and safeguard batch integrity with real-time skill matrices.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Schedule Pharma Demo <ArrowRight className="ml-2 h-4 w-4" />
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
                <FlaskConical className="h-3.5 w-3.5" /> Biopharma &amp; Life Sciences
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Flawless Batch Production Driven by Validated Competencies
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                In pharmaceutical and biopharmaceutical manufacturing, an unverified operator signing off on a batch record or violating aseptic protocols can result in FDA Form 483 warnings, batch rejections, or costly plant shutdowns. SkillMetrics delivers an unbreakable digital matrix for every technician.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Replace fragmented paper records with a fully validated matrix fully compliant with 21 CFR Part 11, EU Annex 1, Annex 11, and WHO cGMP standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">21 CFR Part 11 Compliant</h4>
                    <p className="text-xs text-muted-foreground">Tamper-proof e-signatures &amp; audit trails.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Cleanroom Class A/B/C/D</h4>
                    <p className="text-xs text-muted-foreground">Aseptic technique &amp; gowning qualifications.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">eBMR Batch Integration</h4>
                    <p className="text-xs text-muted-foreground">Verify operator qualifications prior to batch execution.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">FDA &amp; EMA Audit Readiness</h4>
                    <p className="text-xs text-muted-foreground">Instant export of training matrices for inspectors.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/pharmaceuticals-dashboard.png"
                alt="Pharmaceutical Manufacturing Workforce Dashboard"
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
              Pharma Qualification &amp; Compliance Workflow
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              A GxP-compliant lifecycle managing SOP training, practical verification, and batch sign-offs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold font-mono">
                  01
                </div>
                <CardTitle className="text-lg font-bold">1. SOP &amp; Aseptic Skill Mapping</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Map required qualification levels (L1 Trainee to L4 Subject Matter Expert) for sterile fill-finish, compounding, and lyophilizators.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold font-mono">
                  02
                </div>
                <CardTitle className="text-lg font-bold">2. 21 CFR Part 11 Electronic Audits</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Supervisors conduct proctored evaluations with dual-signer electronic signatures, generating immutable audit trails for every skill update.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold font-mono">
                  03
                </div>
                <CardTitle className="text-lg font-bold">3. Live Batch &amp; Cleanroom Gatekeeping</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Skill matrices integrate with your eBMR and MES to automatically block uncertified operators from signing off on active product lots.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY PHARMA CAPABILITIES GRID (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="border-b border-border pb-4 space-y-1">
            <h3 className="text-2xl font-black text-foreground">Core Biopharma &amp; Life Sciences Capabilities</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Purpose-built for pharmaceutical plants, biomanufacturing facilities, API plants, and sterile compounding labs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs hover:border-blue-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">21 CFR Part 11 Electronic Logs</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Cryptographically secure electronic records, timestamped audit logs, and dual e-signature validation for all operator credentials.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-blue-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                  <Syringe className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Aseptic &amp; Cleanroom Qualification</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Track sterile gowning, environmental monitoring, and media fill qualifications across Class A, B, C, and D isolator suites.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-blue-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <FileSpreadsheet className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Electronic Batch Record (eBMR) Gate</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Automated checks verify that operators performing critical step sign-offs hold valid, non-expired SOP certifications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-blue-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                  <Clock className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Automated Re-Certification Alerts</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Proactive notifications alert managers 60, 30, and 15 days before mandatory SOP re-training dates expire.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-blue-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                  <Microscope className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Equipment Calibration &amp; Validation</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Ensure technicians calibrating bioreactors, HPLC systems, and autoclaves hold accredited analytical credentials.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-blue-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-slate-500/10 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold">
                  <Building2 className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Global Multi-Site Compliance</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Centralize GxP qualification metrics across global biomanufacturing plants for corporate quality oversight.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC INSIGHTS FOR PHARMACEUTICALS (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image preview with overlay stats */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-brand-yellow rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
                <img
                  src="/emp.jpg"
                  alt="Pharmaceutical Manufacturing Insights"
                  className="w-full h-auto object-cover"
                />

                {/* Floating overlay stats card */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 dark:bg-slate-900/90 backdrop-blur-md border border-border/60 rounded-lg p-4 shadow-xl flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold">cGMP Compliance Status</div>
                    <div className="text-sm font-extrabold text-foreground">98% Audit Readiness Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Insight Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
                  Pharmaceutical Operational Insights
                </h2>
                <p className="text-muted-foreground text-sm max-w-xl">
                  Strategic compliance management for high-stakes biopharma manufacturing.
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
                      Eliminating Uncertified Batch Record Sign-Offs
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    FDA inspectors scrutinize operator credentials during batch release. SkillMetrics ensures that every step signed off in your MES or eBMR is backed by an active, validated training log.
                  </p>
                </div>

                {/* Insight Card 2 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-brand-yellow/30 border-l-4 border-l-brand-yellow hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-brand-yellow/10 flex items-center justify-center text-slate-800 dark:text-brand-yellow">
                      <Smartphone className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Dual-Signer Mobile Verification in Cleanrooms
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Supervisors log aseptic evaluations right inside cleanroom suites on touch-sensitive tablets, capturing compliant dual e-signatures without disturbing sterile airflow.
                  </p>
                </div>

                {/* Insight Card 3 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-emerald-600/30 border-l-4 border-l-emerald-600 hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Audit Readiness for FDA, EMA &amp; WHO Inspections
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    When regulatory auditors arrive, generate instant 1-click qualification matrices detailing operator training histories, SOP versions, and practical evaluation dates.
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
            <h2 className="text-3xl font-extrabold text-foreground">Validated Infrastructure for Biopharma</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mx-auto flex items-center justify-center font-bold">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Strict GxP Security</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Role-based access, password-enforced e-signatures, and encrypted audit trails meeting GAMP 5 standards.
              </p>
            </Card>

            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow mx-auto flex items-center justify-center font-bold">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Cleanroom Tablet Ready</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Designed for cleanroom isolator displays, sealed mobile tablets, and MES touchscreens.
              </p>
            </Card>

            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center font-bold">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">99.99% Cloud Uptime</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Validated cloud infrastructure guaranteeing continuous data availability for round-the-clock bioprocessing.
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
