"use client";

import React from "react";
import Link from "next/link";
import {
  Fingerprint,
  Building2,
  Cloud,
  ShieldCheck,
  Server,
  Network,
  Users,
  Code2,
  Zap,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  Database,
  Lock,
  Cpu,
  RefreshCw,
  Clock,
  LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      {/* Centralized Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-10 sm:py-14 border-b border-border/20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Biometric System &amp; HR Systems | <span className="text-brand-yellow">Cloud Server Solutions</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Optimize your HR systems with biometric device integration, HRMS sync, and secure cloud servers.
          </p>

          <div className="pt-2 flex justify-center">
            <Link href="/contact">
              <Button size="sm" className="font-bold">
                Request Integration Demo <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CORE INTEGRATION DATA SECTIONS */}
      <main className="flex-1 space-y-16 py-16 bg-slate-50 dark:bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-16">

          {/* SECTION 1: BIOMETRIC SYSTEM & ATTENDANCE */}
          <section className="space-y-8">
            <div className="border-b border-border pb-4 space-y-2">
              <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
                <Fingerprint className="h-4 w-4" />
                <span>Hardware &amp; Attendance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                Biometric System &amp; Attendance Sync
              </h2>
              <p className="text-sm text-muted-foreground max-w-3xl">
                Seamlessly connect hardware biometric devices to SkillMetrics for automated floor tracking, shift management, and real-time skill score updates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                    <Fingerprint className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-bold">Biometric Devices Integration</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Compatible with fingerprint scanners, facial recognition cameras, RFID cards, and palm readers for instant employee identification.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-brand-yellow/10 text-slate-900 dark:text-brand-yellow flex items-center justify-center font-bold">
                    <Clock className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-bold">Real-time Shift &amp; Attendance Sync</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Automated check-in/check-out tracking, timesheet generation, and multi-skilled workforce allocation per shift.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <Network className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-bold">Floor &amp; Plant Line Tracking</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Correlate physical attendance data with station matrix skill ratings to ensure qualified operators on manufacturing lines.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* SECTION 2: HR SYSTEMS & HRMS */}
          <section className="space-y-8">
            <div className="border-b border-border pb-4 space-y-2">
              <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
                <Building2 className="h-4 w-4" />
                <span>Personnel &amp; Enterprise HRMS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                HR Systems &amp; HRMS Ecosystem Sync
              </h2>
              <p className="text-sm text-muted-foreground max-w-3xl">
                Centralize employee master data, department org structures, and role competency scorecards across major HR platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="space-y-3">
                  <Badge variant="outline" className="w-fit text-[10px] uppercase font-bold">HRIS / HCM</Badge>
                  <CardTitle className="text-base font-bold">Workday HCM</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Bi-directional sync of worker profiles, role bands, department structures, and competency matrices.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="space-y-3">
                  <Badge variant="outline" className="w-fit text-[10px] uppercase font-bold">Enterprise ERP</Badge>
                  <CardTitle className="text-base font-bold">SAP SuccessFactors</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Automate talent management workflows and push evaluated skill scores directly into SAP employee files.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="space-y-3">
                  <Badge variant="outline" className="w-fit text-[10px] uppercase font-bold">HR Operations</Badge>
                  <CardTitle className="text-base font-bold">BambooHR</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Keep department org charts, employee onboarding checklists, and training records continuously aligned.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="space-y-3">
                  <Badge variant="outline" className="w-fit text-[10px] uppercase font-bold">HR Management</Badge>
                  <CardTitle className="text-base font-bold">Zoho People</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Export skill gap analytics, training certifications, and audit reports directly into Zoho People suites.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* SECTION 3: SECURE CLOUD SERVER SOLUTIONS */}
          <section className="space-y-8">
            <div className="border-b border-border pb-4 space-y-2">
              <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
                <Cloud className="h-4 w-4" />
                <span>Hosting &amp; Infrastructure</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                Cloud Server Solutions &amp; Data Security
              </h2>
              <p className="text-sm text-muted-foreground max-w-3xl">
                High-availability, enterprise-grade cloud server hosting built for maximum data security, uptime, and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                    <Cloud className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-bold">AWS &amp; Azure Private Cloud</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Isolated VPC hosting options with dedicated database clusters and high-concurrency throughput.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                    <Lock className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-bold">Data Encryption &amp; Security</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    End-to-end TLS 1.3 data-in-transit encryption and AES-256 data-at-rest protection with automated backups.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-bold">SOC-2 &amp; ISO Compliance</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Compliant with SOC-2 Type II, ISO 27001, and GDPR enterprise security standards.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* SECTION 4: LMS, DEVELOPER TOOLS & REST API */}
          <section className="space-y-8">
            <div className="border-b border-border pb-4 space-y-2">
              <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
                <Code2 className="h-4 w-4" />
                <span>Ecosystem &amp; APIs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                LMS, Developer Tools &amp; REST APIs
              </h2>
              <p className="text-sm text-muted-foreground max-w-3xl">
                Connect learning management systems, code repositories, team chat tools, and legacy software with RESTful APIs &amp; Webhooks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="space-y-2">
                  <Badge variant="outline" className="w-fit text-[10px] uppercase font-bold">LMS Sync</Badge>
                  <CardTitle className="text-base font-bold">Udemy &amp; Coursera Integration</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Automatically trigger recommended training courses when skill gaps are identified and auto-update competency badges upon completion.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="space-y-2">
                  <Badge variant="outline" className="w-fit text-[10px] uppercase font-bold">Engineering</Badge>
                  <CardTitle className="text-base font-bold">GitHub &amp; Jira Integration</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Infer engineering skill proficiencies from commit activity and correlate ticket velocities with team skill matrix scorecards.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                <CardHeader className="space-y-2">
                  <Badge variant="outline" className="w-fit text-[10px] uppercase font-bold">Developer API</Badge>
                  <CardTitle className="text-base font-bold">REST API &amp; Webhooks</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Full JSON RESTful API endpoints and encrypted webhooks to integrate SkillMetrics with custom in-house enterprise software.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
