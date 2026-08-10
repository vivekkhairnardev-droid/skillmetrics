"use client";

import React from "react";
import Link from "next/link";
import {
  Factory,
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
  HardHat,
  ShieldAlert
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function HeavyManufacturingSolutionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Heavy Industrial Safety &amp; <span className="text-brand-yellow">Workforce Competency</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Enforce OSHA safety compliance, track heavy machinery &amp; crane operator licenses, eliminate high-risk shop floor incidents, and balance industrial plant capacity with real-time skill matrices.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Schedule Heavy Industrial Demo <ArrowRight className="ml-2 h-4 w-4" />
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
                <Factory className="h-3.5 w-3.5" /> Heavy Industry &amp; Fabrication
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Zero Incident Industrial Operations Powered by Licensed Personnel
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                In heavy manufacturing—from metal fabrication and foundry work to heavy machinery assembly—allowing unlicensed operators to handle overhead cranes, hydraulic presses, or high-capacity forklifts creates severe safety risks and OSHA violations.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                SkillMetrics delivers an unbreakable digital matrix that verifies licenses, tracks refresher training dates, and ensures qualified secondary operators are available for every heavy plant station.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">OSHA &amp; EHS Audit Ready</h4>
                    <p className="text-xs text-muted-foreground">Digital tracking of safety licenses &amp; EHS refreshers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Overhead Crane &amp; Rigging Certs</h4>
                    <p className="text-xs text-muted-foreground">License verification for material handling operators.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Welding &amp; CNC Machining</h4>
                    <p className="text-xs text-muted-foreground">Skill levels mapped from L1 Trainee to L4 Master Machinist.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Preventive Maintenance Cover</h4>
                    <p className="text-xs text-muted-foreground">Ensure qualified technicians inspect heavy machinery.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/heavy-manufacturing-dashboard.png"
                alt="Heavy Manufacturing Plant Operations Dashboard"
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
              Heavy Industrial Qualification Workflow
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              A comprehensive safety and competence matrix for heavy equipment, fabrication, and foundry plants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold font-mono">
                  01
                </div>
                <CardTitle className="text-lg font-bold">1. Heavy Equipment Skill Mapping</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Define required competency tiers for plasma cutters, hydraulic presses, welding bays, and overhead cranes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold font-mono">
                  02
                </div>
                <CardTitle className="text-lg font-bold">2. Digital Safety &amp; License Audits</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Safety leads perform mobile evaluations on the shop floor. Verify forklift licenses, PPE protocols, and lockout-tagout (LOTO) certifications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs relative">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold font-mono">
                  03
                </div>
                <CardTitle className="text-lg font-bold">3. Live Shop Floor Risk Prevention</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Real-time station dashboards alert managers if an unlicensed operator is assigned to high-risk heavy machinery.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY HEAVY INDUSTRIAL CAPABILITIES GRID (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="border-b border-border pb-4 space-y-1">
            <h3 className="text-2xl font-black text-foreground">Core Heavy Industrial Capabilities</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Built for steel mills, heavy machinery OEMs, fabrication shops, and industrial equipment plants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs hover:border-amber-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                  <HardHat className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">OSHA Safety &amp; EHS Compliance</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Automate tracking of OSHA safety courses, PPE compliance, and Lockout-Tagout (LOTO) mandatory refreshers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-amber-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                  <Wrench className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Crane &amp; Rigging Licensing</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Verify heavy crane, gantry, and forklift licenses with proactive expiration alerts to maintain safety compliance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-amber-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <Zap className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Welding &amp; Structural Fabrication</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Track AWS welding certifications (MIG, TIG, Submerged Arc) and structural fabrication credentials across shifts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-amber-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">High-Risk Station Alerts</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Instant visual notifications warn supervisors if high-risk machinery stations lack secondary backup operators.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-amber-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Industrial Maintenance Skills</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Map hydraulic, pneumatic, and electrical repair capabilities to minimize unplanned equipment downtime.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs hover:border-amber-500/40 transition-colors">
              <CardHeader className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-slate-500/10 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold">
                  <Factory className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-bold">Multi-Plant Industrial Control</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Centralize safety ratings, operator license databases, and skill distribution across multiple industrial sites.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC INSIGHTS FOR HEAVY MANUFACTURING (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image preview with overlay stats */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-brand-yellow rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
                <img
                  src="/emp.jpg"
                  alt="Heavy Manufacturing Operational Insights"
                  className="w-full h-auto object-cover"
                />

                {/* Floating overlay stats card */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 dark:bg-slate-900/90 backdrop-blur-md border border-border/60 rounded-lg p-4 shadow-xl flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center font-bold text-amber-600 dark:text-amber-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold">Plant Safety Benchmark</div>
                    <div className="text-sm font-extrabold text-foreground">184 Days Incident-Free Record</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Insight Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
                  Heavy Industrial Operational Insights
                </h2>
                <p className="text-muted-foreground text-sm max-w-xl">
                  How industrial leaders reduce shop floor hazards and protect workforce well-being.
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
                      Preventing Unlicensed Machinery Operation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Operating 50-ton hydraulic presses or overhead cranes requires verified license credentials. SkillMetrics flags expired licenses before shift startup, ensuring total shop floor safety.
                  </p>
                </div>

                {/* Insight Card 2 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-brand-yellow/30 border-l-4 border-l-brand-yellow hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-brand-yellow/10 flex items-center justify-center text-slate-800 dark:text-brand-yellow">
                      <Smartphone className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Shop Floor Mobile Audits on Rugged Devices
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Safety leads perform EHS walkthroughs on dust- and shock-resistant tablets, updating operator safety scores instantly across all plant command centers.
                  </p>
                </div>

                {/* Insight Card 3 */}
                <div className="bg-card p-6 rounded-xl border border-border hover:border-emerald-600/30 border-l-4 border-l-emerald-600 hover:shadow-md transition-all duration-300 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-extrabold tracking-tight">
                      Seamless OSHA &amp; ISO 45001 Compliance Reports
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    During regulatory inspections or safety audits, generate instant reports proving 100% of machine operators possess active safety credentials and PPE certifications.
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
            <h2 className="text-3xl font-extrabold text-foreground">Industrial Infrastructure for Heavy Plants</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center font-bold">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Role-Based Security</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Granular permissions ensure EHS leads, shift supervisors, and plant directors view relevant risk matrices.
              </p>
            </Card>

            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow mx-auto flex items-center justify-center font-bold">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Industrial Terminal Ready</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Optimized interface for plant floor terminals, rugged handhelds, and wall-mounted shift kiosks.
              </p>
            </Card>

            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center font-bold">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">99.99% Cloud Uptime</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                High-availability cloud backend engineered for 24/7 continuous industrial plant operations.
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
