"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Grid,
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
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookDemoModal } from "@/components/book-demo-modal";

export default function SkillMatrixPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <Badge className="bg-brand-red/20 text-brand-red border border-brand-red/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Competency Mapping, Audits &amp; Skill Matrix
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Familiarize yourself with the <span className="text-brand-yellow">Skill Matrix</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Skill Metrics skill management software helps you create customizable training &amp; skill matrices, perform instant gap analysis, and streamline manpower allocation.
          </p>

          {/* Key Bullet Points from Homepage */}
          <div className="max-w-3xl mx-auto bg-slate-900/80 border border-slate-800 rounded-xl p-5 text-left space-y-2.5 shadow-xl backdrop-blur-xs">
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
              <span>Create a Training &amp; Skill matrix of any size</span>
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
              <span>Choose any combination of people, skills, job roles, or functions</span>
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
              <span>Customizable or generic skill targets for individuals/job roles</span>
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
              <span>Instant access to historical training &amp; assessment data, certification, and evidence</span>
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
              <span>Accompanied by a variety of powerful functionality</span>
            </div>
          </div>

          <div className="pt-3 flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              onClick={() => setDemoOpen(true)}
            >
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/features">
              <Button variant="dark" size="lg">
                View All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 1: ROBUST TRAINING & COMPETENCY */}
      <main className="flex-1 py-16 bg-slate-50 dark:bg-background space-y-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-red/10 text-brand-red font-extrabold text-xs uppercase tracking-wider">
                <Grid className="h-4 w-4" /> Centralized Skill Software
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Robust Training, Competency, Audits, Assessment, and Skill Matrix
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                <strong>Skill Metrics</strong> is the powerful &amp; ideal software service that instantly creates a skill matrix based upon your talent and competency framework. Skill metrics reduce efforts and limitations while using spreadsheets/Excel sheets.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Skill matrix can be created in a number of powerful and flexible ways, to perform gap analysis in seconds on any Department of your organization. All skill matrix is automatically color-coded to help visually identify competency, compliance, and skill gaps.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/skillmetrics.png"
                alt="Skill Matrix Software Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* SIMPLE ASSESSMENT WORKFLOW BANNER */}
          <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <Badge variant="outline" className="bg-brand-red/10 text-brand-red border-brand-red/20 font-bold uppercase text-[10px]">
                Simple Evaluation Workflow
              </Badge>
              <h3 className="text-2xl font-black text-foreground">
                With Skill Metrics, Assessment of Employees is as Simple As:
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 pt-2">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl text-center space-y-1.5 border border-border/60 flex flex-col justify-center">
                <span className="text-[10px] font-mono font-bold text-brand-red">STEP 1</span>
                <p className="text-xs font-bold text-foreground">Build Training (Drag &amp; Drop)</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl text-center space-y-1.5 border border-border/60 flex flex-col justify-center">
                <span className="text-[10px] font-mono font-bold text-brand-red">STEP 2</span>
                <p className="text-xs font-bold text-foreground">Training Scheduled</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl text-center space-y-1.5 border border-border/60 flex flex-col justify-center">
                <span className="text-[10px] font-mono font-bold text-brand-red">STEP 3</span>
                <p className="text-xs font-bold text-foreground">Exam Build (Drag &amp; Drop)</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl text-center space-y-1.5 border border-border/60 flex flex-col justify-center">
                <span className="text-[10px] font-mono font-bold text-brand-red">STEP 4</span>
                <p className="text-xs font-bold text-foreground">Exam Conducted</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl text-center space-y-1.5 border border-border/60 flex flex-col justify-center">
                <span className="text-[10px] font-mono font-bold text-brand-red">STEP 5</span>
                <p className="text-xs font-bold text-foreground">Instant Result</p>
              </div>
              <div className="bg-brand-red text-white p-4 rounded-xl text-center space-y-1.5 border border-brand-red flex flex-col justify-center shadow-md">
                <span className="text-[10px] font-mono font-bold text-brand-yellow">FINAL STEP</span>
                <p className="text-xs font-black">Skill Matrix Built</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-center text-muted-foreground max-w-3xl mx-auto pt-2">
              Easily fetched skill results help in monitoring the skill gaps within seconds, hence results in a trouble-free and accurate allocation of manpower through your organization/organizations.
            </p>
          </div>

          {/* TOP FEATURES GRID */}
          <div className="space-y-8">
            <div className="border-b border-border pb-4 space-y-1">
              <Badge variant="outline" className="text-xs uppercase font-extrabold text-brand-red">Core Capabilities</Badge>
              <h3 className="text-2xl font-black text-foreground">Top Features</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
                <CardHeader className="space-y-2">
                  <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                    <Clock className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base font-bold">Training Scheduling</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Schedule internal upskilling sessions, assign trainees, and track progress effortlessly.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
                <CardHeader className="space-y-2">
                  <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base font-bold">Assessment</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Automated &amp; proctored skill testing for employees across departments and skill levels.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
                <CardHeader className="space-y-2">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <Layers className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base font-bold">Competency Mapping</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Map individual proficiency ratings against target role benchmarks in real-time.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
                <CardHeader className="space-y-2">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                    <Users className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base font-bold">Accurate Manpower Distribution</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Ensure qualified operators and staff are assigned to the right workstations at all times.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
                <CardHeader className="space-y-2">
                  <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base font-bold">Cut Down in Spreadsheets</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Eliminate manual Excel calculations, versioning errors, and missing certificate data.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-colors">
                <CardHeader className="space-y-2">
                  <div className="h-10 w-10 rounded-lg bg-slate-500/10 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold">
                    <Server className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base font-bold">Centralized System</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    One single source of truth for plant managers, HR leads, and compliance auditors.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* INSIGHTS OF SKILL METRICS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-5 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/emp.jpg"
                alt="Insights of Skill Metrics"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="border-b border-border pb-3 space-y-1">
                <Badge variant="outline" className="text-xs uppercase font-extrabold text-brand-yellow">Key Insights</Badge>
                <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Insights of Skill Metrics</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-card p-5 rounded-xl border border-border/70 space-y-2">
                  <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-brand-yellow" /> Why is Skill Assessment Important?
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Understanding the need of work &amp; working to the need is the pre-eminent part of skill assessment. Right person at right time at the right work definitely results in perfect management of workload &amp; finally takes the organization to the ultimate goal: <strong>GROWTH</strong>.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-xl border border-border/70 space-y-2">
                  <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-brand-red" /> Skill Assessment &amp; The People
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Linear growth in digitization technologies has made smartphones &amp; tabs an integral part of our livelihood. SkillMetrics provides a solution that is easily accessible &amp; verified right at your <strong>FINGERTIPS</strong>.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-xl border border-border/70 space-y-2">
                  <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" /> You &amp; Skill Metrics
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Admin panel with all the masters pre-stored and easily editable. Assign admin roles, limit or extend user roles with 24x7 technical support included.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WHY SKILL METRICS? (3 PILLARS: SECURITY, CROSS-PLATFORM, BEST PERFORMANCE) */}
          <div className="space-y-8 pt-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Badge className="bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-bold uppercase">Why Skill Metrics?</Badge>
              <h2 className="text-3xl font-extrabold text-foreground">Built for Security, Uptime &amp; High Performance</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-brand-red/10 text-brand-red mx-auto flex items-center justify-center font-bold">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Security</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Skill Metrics provides 100% Security Assurance. Protect your valuable data from threats and attacks. Ensure your data is safe as per your company norms.
                </p>
                <Link href="/features">
                  <Button variant="ghost" size="sm" className="text-brand-red text-xs font-bold gap-1">
                    Learn More <ChevronRight className="h-3 w-3" />
                  </Button>
                </Link>
              </Card>

              <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow mx-auto flex items-center justify-center font-bold">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Cross-Platform</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Compatible with multiple platforms such as desktop, laptop, tablet, and mobile. Clean user interface supporting all modern versions of Android and iOS.
                </p>
                <Link href="/features">
                  <Button variant="ghost" size="sm" className="text-brand-red text-xs font-bold gap-1">
                    Learn More <ChevronRight className="h-3 w-3" />
                  </Button>
                </Link>
              </Card>

              <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center font-bold">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Best Performance</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Enhance your performance culture through an easy-to-use platform. Skill metrics, training records, reporting, dashboards, and radars make your work easy.
                </p>
                <Link href="/features">
                  <Button variant="ghost" size="sm" className="text-brand-red text-xs font-bold gap-1">
                    Learn More <ChevronRight className="h-3 w-3" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>

          {/* BOOK DEMO CTA BANNER */}
          <div className="bg-brand-dark text-white rounded-2xl p-8 sm:p-12 text-center space-y-5 border border-border/20 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Book a Demo for <span className="text-brand-yellow">Skill Management Software</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Schedule your live walkthrough to see how SkillMetrics simplifies skill matrices, audits, and training schedules.
            </p>
            <div className="pt-2">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold px-8 shadow-brand-red"
                onClick={() => setDemoOpen(true)}
              >
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
