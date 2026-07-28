"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Eye,
  Terminal,
  Fingerprint
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export default function AntiCheatSuitePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">
          <Badge className="bg-brand-red/20 text-brand-red border border-brand-red/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Enterprise Security Suite
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Anti-Cheat Suite: <span className="text-brand-yellow">AI Proctoring &amp; Hashes</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Enforce maximum integrity during developer assessments and plant certifications with smart proctoring, session locks, and plagiarism verification.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red"
              >
                Schedule Security Demo <ArrowRight className="ml-2 h-4 w-4" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-red/10 text-brand-red font-extrabold text-xs uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" /> Maximum Integrity Assurance
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Secure Assessments with Dynamic Proctoring Controls
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                SkillMetrics utilizes a multi-layered security framework to verify the authenticity of candidate submissions. Tab-switch logs, webcam activity signals, and smart code-plagiarism detection work together to provide verified assessment scorecards you can trust.
              </p>
              <ul className="space-y-3 text-sm text-foreground font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Real-time code structure similarity and plagiarism analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Browser environment lockdown and tab-switch warning limits</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Biometric verification and random video proctor snapshot logs</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-border/80 shadow-2xl overflow-hidden bg-card">
              <img
                src="/ai_asses.png"
                alt="Anti cheat proctoring interface"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TOP SUB-FEATURES (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                  <Fingerprint className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Identity Verification</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Verify the test-taker using automated IP geofencing and random webcam snapshots.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                  <Eye className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Environment Proctoring</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Track focus shifts, console logs, copy-paste events, and keyboard behaviors during the test.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border bg-card shadow-xs">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <Terminal className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Plagiarism Hash Sync</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Automatically compare candidate code hashes against public repositories and past test submissions.
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
