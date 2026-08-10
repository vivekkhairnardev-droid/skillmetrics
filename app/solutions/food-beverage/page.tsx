"use client";

import React from "react";
import Link from "next/link";
import {
  Utensils,
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
  AlertTriangle,
  Factory,
  CheckCircle,
  Thermometer,
  ShieldAlert
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function FoodBeverageSolutionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Food &amp; Beverage Safety &amp; <span className="text-brand-yellow">Workforce Competency</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Ensure HACCP hygiene compliance, enforce allergen changeover protocols, track Critical Control Point (CCP) qualifications, and streamline FDA audit readiness with real-time skill matrices.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Schedule Food &amp; Beverage Demo <ArrowRight className="ml-2 h-4 w-4" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Utensils className="h-3.5 w-3.5" /> Food Processing &amp; Hygiene Standards
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Zero-Contamination Processing Powered by Certified Personnel
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                In food and beverage processing, uncertified operators at critical control points can lead to cross-contamination, allergen mislabeling, batch spoilage, and severe regulatory recalls. SkillMetrics gives plant leads real-time oversight of every shift operator's hygiene certifications.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Transition seamlessly from static paper checklists to automated digital matrices compliant with HACCP, FSMA, BRCGS, and SQF standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">HACCP &amp; FSMA Audit Ready</h4>
                    <p className="text-xs text-muted-foreground">Digital logs of operator CCP training &amp; re-certifications.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Allergen Changeover Control</h4>
                    <p className="text-xs text-muted-foreground">Verify line washdown &amp; sanitation sign-offs before runs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Clean-In-Place (CIP) Tracking</h4>
                    <p className="text-xs text-muted-foreground">Log certified technicians for chemical &amp; rinse cycles.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Pasteurization &amp; Mixing Maps</h4>
                    <p className="text-xs text-muted-foreground">Ensure qualified operators for high-temp processing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/food-beverage-dashboard.png"
                alt="Food & Beverage Manufacturing Workforce Dashboard"
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
              Food Safety &amp; Hygiene Qualification Workflow
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              A structured continuous loop protecting product integrity across processing, mixing, and packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold font-mono">
                  01
                </div>
                <CardTitle className="text-lg font-bold">1. CCP &amp; Hygiene Benchmarking</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Define required competency levels (L1 Trainee to L4 Master Sanitarian) for raw material receiving, thermal processing, and filling lines.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold font-mono">
                  02
                </div>
                <CardTitle className="text-lg font-bold">2. Mobile Audits &amp; CIP Logs</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Supervisors complete 1-click mobile sanitation evaluations. Verify allergen cleanout checklists and swab testing results instantly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold font-mono">
                  03
                </div>
                <CardTitle className="text-lg font-bold">3. Live Shift &amp; Line Verification</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Real-time matrices ensure certified operators are stationed at every Critical Control Point (CCP) prior to batch startup.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY FOOD & BEVERAGE CAPABILITIES GRID (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="border-b border-border pb-4 space-y-1">
            <h3 className="text-2xl font-black text-foreground">Core Processing &amp; Quality Capabilities</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Tailored for food processing plants, beverage bottling lines, dairy facilities, and commercial bakeries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs hover:border-amber-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">HACCP &amp; FSMA Compliance</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Maintain 100% FDA audit readiness with automated digital records of operator food safety training and CCP credentials.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-amber-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Allergen Changeover Control</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Log line clearance and allergen washdowns between product runs to prevent cross-contact and product recalls.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-amber-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <Thermometer className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Thermal &amp; Pasteurization Ops</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Verify operators handling cookers, retorts, and pasteurizers hold active thermal process qualifications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-amber-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                  <Zap className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Clean-In-Place (CIP) Verification</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Ensure automated CIP sanitation cycles are initiated and audited by certified chemical safety operators.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-amber-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">CCP Unstaffed Station Alerts</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Instant notifications alert floor managers when a Critical Control Point lacks a certified backup operator.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-amber-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-slate-500/10 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold">
                  <Factory className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Multi-Facility Hygiene Matrix</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Compare compliance scores and qualification levels across regional food processing facilities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC INSIGHTS FOR FOOD & BEVERAGE (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image preview with overlay stats */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-brand-yellow rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
                <img
                  src="/emp.jpg"
                  alt="Food & Beverage Manufacturing Insights"
                  className="w-full h-auto object-cover"
                />

                {/* Floating overlay stats card */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 dark:bg-slate-900/90 backdrop-blur-md border border-border/60 rounded-lg p-4 shadow-xl flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center font-bold text-amber-600 dark:text-amber-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold">Hygiene Audit Score</div>
                    <div className="text-sm font-extrabold text-foreground">98.2% Regulatory Compliance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Insight Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
                  Food Safety Operational Insights
                </h2>
                <p className="text-muted-foreground text-sm max-w-xl">
                  How top food processors maintain zero-reproach hygiene logs and protect brand reputation.
                </p>
              </div>

              <div className="space-y-4">
                {/* Insight Card 1 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-amber-500/30 border-l-4 border-l-amber-500 hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                      <Sparkles className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Safeguarding Critical Control Points (CCPs)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    A single uncertified operator at metal detection or thermal kill-step stations can compromise an entire production run. SkillMetrics guarantees only Level 3 or 4 CCP-certified staff operate critical machinery.
                  </p>
                </div>

                {/* Insight Card 2 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-brand-yellow/30 border-l-4 border-l-brand-yellow hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-brand-yellow/10 flex items-center justify-center text-slate-800 dark:text-brand-yellow">
                      <Smartphone className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Paperless Allergen &amp; Washdown Sign-Offs
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Shift supervisors verify line cleaning and allergen washdowns on mobile industrial tablets. Sign-off histories store directly in cloud audit logs for instant review by FDA inspectors.
                  </p>
                </div>

                {/* Insight Card 3 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-emerald-600/30 border-l-4 border-l-emerald-600 hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Seamless GFSI &amp; SQF Audit Verification
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    When GFSI, BRCGS, or retail client auditors visit your plant, generate instant skill coverage reports proving 100% of line personnel hold active, non-expired food safety training.
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
            <h2 className="text-3xl font-extrabold text-foreground">Enterprise Infrastructure for Food Plants</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center font-bold">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Secure Role Permissions</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Role-based access ensures QA supervisors, plant managers, and auditors view authorized line matrices.
              </p>
            </Card>

            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow mx-auto flex items-center justify-center font-bold">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Washdown Tablet Support</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Optimized UI for stainless-steel floor kiosks, waterproof tablets, and mobile handhelds.
              </p>
            </Card>

            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center font-bold">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">99.99% Cloud Uptime</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                High-availability architecture built for continuous 24/7 food processing and bottling operations.
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
