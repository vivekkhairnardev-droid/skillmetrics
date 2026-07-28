import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Award,
  FileCheck2,
  Users,
  ShieldCheck,
  TrendingUp,
  Lock,
  Smartphone,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";

export const metadata: Metadata = {
  title: "Powerful Dashboard – Skill metrics - Skillmetrics",
  description: "Competency Reports & Skill Matrix Dashboard. Training & Competency Reports at your Fingertips Skill metrics presents effective and spontaneous reporting throughout each aspect of your skills pool and competency framework.Get Your Competency Report Data in Few Clicks. Request Demo Skills matrix & Competency Reports Dashboard Your customizable dashboard offers a high-level overview of key expertise",
  alternates: {
    canonical: "https://skillmetrics.net/powerful-dashboard/",
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  openGraph: {
    locale: "en_US",
    siteName: "Skillmetrics - Skill matrix, training records, and audits with Powerful software.",
    type: "article",
    title: "Powerful Dashboard – Skill metrics - Skillmetrics",
    description: "Competency Reports & Skill Matrix Dashboard. Training & Competency Reports at your Fingertips Skill metrics presents effective and spontaneous reporting throughout each aspect of your skills pool and competency framework.Get Your Competency Report Data in Few Clicks. Request Demo Skills matrix & Competency Reports Dashboard Your customizable dashboard offers a high-level overview of key expertise",
    url: "https://skillmetrics.net/powerful-dashboard/",
    images: [
      {
        url: "https://res.cloudinary.com/dj7chg0nf/images/v1694801938/skillmetrics-cropped/skillmetrics-cropped.png?_i=AA",
        secureUrl: "https://res.cloudinary.com/dj7chg0nf/images/v1694801938/skillmetrics-cropped/skillmetrics-cropped.png?_i=AA",
      }
    ],
  },
  twitter: {
    card: "summary",
    title: "Powerful Dashboard – Skill metrics - Skillmetrics",
    description: "Competency Reports & Skill Matrix Dashboard. Training & Competency Reports at your Fingertips Skill metrics presents effective and spontaneous reporting throughout each aspect of your skills pool and competency framework.Get Your Competency Report Data in Few Clicks. Request Demo Skills matrix & Competency Reports Dashboard Your customizable dashboard offers a high-level overview of key expertise",
    images: ["https://res.cloudinary.com/dj7chg0nf/images/v1694801938/skillmetrics-cropped/skillmetrics-cropped.png?_i=AA"],
  }
};

export default function PowerfulDashboardsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 relative z-10">


          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Competency Reports &amp; <span className="text-brand-yellow">Skill Matrix Dashboard</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Training &amp; Competency Reports at your Fingertips. SkillMetrics presents effective and spontaneous reporting throughout each aspect of your skills pool and competency framework. Get your competency report data in a few clicks.
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
                Skills Matrix &amp; Competency Reports Dashboard
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-normal">
                Your customizable dashboard offers a high-level overview of key expertise and competency matrix. For example:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-foreground font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Assessments requiring moderation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Normal competency levels</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Pending retraining and re-assessments</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Login and user engagement metrics</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Dashboard widgets offer short access to fundamental reports delivering training &amp; competency data tailor-made to your demands. Dashboard for skill matrix shows a grid view of skill levels.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl border border-border/80 overflow-hidden bg-card">
                <img
                  src="/skillmetrics.png"
                  alt="SkillMatrix Dashboard Preview"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DETAILED VIEW (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-xl border border-border/80 overflow-hidden bg-card">
                <img
                  src="/emp.jpg"
                  alt="Skills & Competencies Overview"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">

              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Skill &amp; Competency Reports
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Powerful and user-friendly reporting designed to encourage localized possession and accountability.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Super users can report on any element of the Skill and competency framework, while localized managers report on people/skills within their remission. This allows teams to be self-sufficient while offering high-level reports to succeed audits with confidence.
              </p>
              <div className="pt-2">
                <Link href="/book-demo">
                  <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red">
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TYPES OF REPORTS (White Background) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Types Of Reports
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Explore the various competency, training, and compliance reports built to provide actionable insights for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="border border-border bg-card shadow-xs hover:border-brand-red/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between group rounded-xl">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold group-hover:scale-105 transition-transform duration-200">
                  <Award className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Competency Report</CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  Visibility of all areas of competence and non-competence, with secure access to past information and supporting proof.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Card 2 */}
            <Card className="border border-border bg-card shadow-xs hover:border-brand-yellow/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between group rounded-xl">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/15 text-amber-700 dark:text-brand-yellow flex items-center justify-center font-bold group-hover:scale-105 transition-transform duration-200">
                  <LayoutDashboard className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Skill Matrix Report</CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  Create skill matrix by position, department, site, or any custom-designed view of people/skills.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Card 3 */}
            <Card className="border border-border bg-card shadow-xs hover:border-emerald-500/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between group rounded-xl">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-105 transition-transform duration-200">
                  <FileCheck2 className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Training &amp; Assessment Report</CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  View training attendance, results, and evidence. Also, quickly see all overdue or pending retraining/re-assessments.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Card 4 */}
            <Card className="border border-border bg-card shadow-xs hover:border-blue-500/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between group rounded-xl">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold group-hover:scale-105 transition-transform duration-200">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Succession Planning Report</CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  View gender and age distribution throughout different areas of the organization. Quickly discover successors based on person skill profiles or activity role requirements.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Card 5 */}
            <Card className="border border-border bg-card shadow-xs hover:border-purple-500/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between group rounded-xl">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-650 flex items-center justify-center font-bold group-hover:scale-105 transition-transform duration-200">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Compliance Report</CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  View compliance and non-compliance towards policies, procedures, skills, or communications.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Card 6 */}
            <Card className="border border-border bg-card shadow-xs hover:border-amber-500/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between group rounded-xl">
              <CardHeader className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold group-hover:scale-105 transition-transform duration-200">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold">Talent Report</CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  Check the development &amp; results of staff appraisals which includes the progress of remaining the resulting actions such as training, skills and compliance gaps.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY SKILL METRICS? (Gray Background) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
              Why Skill Metrics?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              An enterprise-grade SaaS infrastructure engineered for maximum safety, speed, and cross-platform accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Security */}
            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4 hover:border-brand-red/40 transition-colors rounded-xl">
              <div className="h-12 w-12 rounded-full bg-brand-red/10 text-brand-red mx-auto flex items-center justify-center font-bold">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Security</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Skill Metrics provides 100% Security Assurance, protecting your valuable data from threats and attacks. Ensure your data is safe and managed in full compliance with your company&apos;s norms.
              </p>
            </Card>

            {/* Card 2: Cross Platform */}
            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4 hover:border-brand-yellow/50 transition-colors rounded-xl">
              <div className="h-12 w-12 rounded-full bg-brand-yellow/15 text-amber-700 dark:text-brand-yellow mx-auto flex items-center justify-center font-bold">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Cross-Platform Support</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Compatible with desktop, laptop, mobile, and tablets. A clean, premium user interface supports all versions of Android and iOS, making updates accessible on the go.
              </p>
            </Card>

            {/* Card 3: Best Performance */}
            <Card className="border border-border bg-card shadow-xs text-center p-6 space-y-4 hover:border-emerald-500/40 transition-colors rounded-xl">
              <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center font-bold">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Best Performance</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                The ultimate platform for managing your skill matrix and competency profiles. Enhance performance culture via tools like training records, assessments, dashboards, and radars to make tracking simple.
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
