"use client";

import React from "react";
import Link from "next/link";
import {
  Cpu,
  ArrowRight,
  Bot,
  ShieldCheck,
  Zap,
  Award,
  Code2,
  Activity,
  Check,
  Scale,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function AIAssessmentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            AI-Driven Assessments: <span className="text-brand-yellow">Verified Technical Capability</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Move past basic multiple-choice quizzes. SkillMetrics generates bespoke, position-relevant tasks, monitors integrity metrics, executes code analysis, and automatically links outcomes directly to your workforce skill matrix.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
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

              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Evaluate Practical Skills in Minutes, Not Weeks
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Traditional pre-hire screening platforms rely on static databases of coding questions, which candidates can quickly find online. SkillMetrics AI creates bespoke evaluations tailored to your company's actual tech stack, database schemas, and standard operating procedures (SOPs).
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-brand-red">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Dynamic Sandbox Testing</h4>
                    <p className="text-xs text-muted-foreground">Candidates compile and execute code inside an isolated container, running tests against mock network environments and real-world libraries.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-brand-red">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Behavioral Proctor Telemetry</h4>
                    <p className="text-xs text-muted-foreground">Smart eye-gaze validation, tab-switching prevention, clipboard restrictions, and timing profile signatures stop cheating before it starts.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-brand-red">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Immediate Profile Integration</h4>
                    <p className="text-xs text-muted-foreground">Scores immediately synchronize to update team matrices, identify missing training gaps, and notify engineering leads.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-slate-50 dark:bg-card p-4 sm:p-6 relative">
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">AI Evaluator Active</span>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-950 text-slate-300 font-mono text-xs p-4 rounded-lg space-y-2 border border-slate-800 shadow-inner">
                  <p className="text-slate-500">// Ingesting internal SOP framework...</p>
                  <p className="text-brand-yellow">✓ Detected: 12 Local Database Schemas</p>
                  <p className="text-brand-yellow">✓ Detected: Next.js + PostgreSQL Boilerplate</p>
                  <p className="text-slate-500">// Constructing specialized query evaluation task...</p>
                  <p className="text-white">🚀 [Task Ready]: Multi-stage data normalization & index analysis.</p>
                </div>
                <div className="border border-border/60 bg-white dark:bg-slate-900/60 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-foreground">Assessment Blueprint: DB Architecture</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red">SOP Align</span>
                  </div>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Evaluates connection pooling & transaction boundaries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Measures query performance on large indices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Scores resource safety profiles (SQL Injection resilience)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS LIFECYCLE (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-12">
          <div className="space-y-3 max-w-3xl mx-auto">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              How the SkillMetrics AI Evaluation Engine Operates
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Our end-to-end framework goes beyond testing syntax. It understands depth, ensures integrity, and maps growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <Card className="border border-border/80 bg-card relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
              <CardContent className="pt-6 space-y-3">
                <span className="text-[10px] font-black text-brand-red uppercase tracking-wider block">STAGE 01</span>
                <h3 className="text-lg font-extrabold text-foreground">SOP Ingestion</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Provide your target job profile, core repository dependencies, standard operating guidelines, or manual SOP logs. Our AI digests them to understand exact competency benchmarks.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/80 bg-card relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-yellow" />
              <CardContent className="pt-6 space-y-3">
                <span className="text-[10px] font-black text-brand-yellow uppercase tracking-wider block">STAGE 02</span>
                <h3 className="text-lg font-extrabold text-foreground">Bespoke Synthesis</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The engine dynamically synthesizes a custom testing environment. Questions are formulated as active problem-solving scenarios rather than static flashcards.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/80 bg-card relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-900 dark:bg-slate-700" />
              <CardContent className="pt-6 space-y-3">
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-wider block">STAGE 03</span>
                <h3 className="text-lg font-extrabold text-foreground">Proctored Sandbox</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Candidates write solutions in an interactive browser terminal. Continuous anti-plagiarism algorithms, tab locking, and gaze-tracking maintain audit-ready security.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/80 bg-card relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
              <CardContent className="pt-6 space-y-3">
                <span className="text-[10px] font-black text-brand-red uppercase tracking-wider block">STAGE 04</span>
                <h3 className="text-lg font-extrabold text-foreground">AST Matrix Updates</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The submission is compiled, checked against runtime tests, and graded using Abstract Syntax Tree analyzers. Results instantly sync to target team skill matrices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE CAPABILITIES GRID (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-12">
          <div className="space-y-3 max-w-3xl mx-auto">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Enterprise Features Built for Security & Scale
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Maintain compliance standards, automate workflows, and build an airtight assessment program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <Card className="border border-border/80 bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                  <Bot className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Dynamic Prompt Generation</CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  No static question leaks. The AI compiles distinct challenges for every candidate based on custom plant matrices and standard operational SOPs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border/80 bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-brand-red">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Non-Intrusive Proctoring</CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  Prevent impersonation or search queries with automated AI video logs, tab-activity tracking, clipboard restrictions, and keystroke verification.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border/80 bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <Award className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">AST Code Verification</CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  Automatically score code using Abstract Syntax Trees to analyze resource safety, computational complexity (Big-O), and coding standards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border/80 bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                  <Scale className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">ISO Audit Ready</CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  Export complete forensic session records and compiler outcomes directly to satisfy ISO compliance and industrial audit benchmarks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border/80 bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-yellow-500/10 text-yellow-600 flex items-center justify-center font-bold">
                  <Zap className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">HRIS & LMS Integration</CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  Connect results directly to popular HR suites (Workday, SuccessFactors) and learning management paths to trigger automatic training plans.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border/80 bg-card shadow-xs hover:border-brand-red/40 transition-colors">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-slate-500/10 text-slate-650 dark:text-slate-350 flex items-center justify-center font-bold">
                  <BookOpen className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Multi-Language Execution</CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  Supports secure sandbox environments for Node.js, Python, Java, SQL, Go, C++, Nginx configuration testing, and shell scripts out-of-the-box.
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
