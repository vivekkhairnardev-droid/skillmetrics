"use client";

import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  LogIn,
  BookOpen,
  Layers,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Compass,
  Zap,
  CheckCircle2,
  Users,
  Grid3X3,
  Award,
  TrendingUp,
  FileText,
  Mail,
  FileSpreadsheet
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocsPage() {
  const pagesList = [
    {
      title: "Enterprise Dashboard",
      path: "/dashboard",
      badge: "Core Workspace",
      badgeColor: "bg-brand-red/10 text-brand-red border-brand-red/30",
      icon: LayoutDashboard,
      description: "The primary control center for managing engineering teams, competency matrix grids, and AI skill assessments.",
      features: [
        "Interactive Skill Matrix Grid with real-time competency ratings",
        "AI Proctoring & Candidate Assessment Scorecards",
        "Workforce Directory & Engineer Profile Search",
        "ROI Analytics & Up-skilling Pathway Heatmaps",
        "Platform Settings & Utility Configs"
      ],
      buttonText: "Open Dashboard Workspace",
      buttonVariant: "default" as const
    },
    {
      title: "Enterprise Authentication / Login",
      path: "/login",
      badge: "Security & Access",
      badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/30",
      icon: LogIn,
      description: "Secure enterprise sign-in portal supporting role-based access control, SAML 2.0, and SSO integrations.",
      features: [
        "Role-based login selection (Enterprise Admin, Engineering Lead, Candidate)",
        "SAML 2.0 & Okta / Google SSO integration readiness",
        "AES-256 encrypted authentication & audit trail logging",
        "Distraction-free, high-authority login form interface"
      ],
      buttonText: "Go to Login Page",
      buttonVariant: "outline" as const
    },
    {
      title: "Main Landing Page",
      path: "/",
      badge: "Public Portal",
      badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/30",
      icon: Compass,
      description: "The main product overview showcasing SkillMetrics' automated technical evaluation and enterprise skill tracking.",
      features: [
        "Full width Interactive Feature Showcase MegaMenu",
        "Client Proof & Enterprise Logo Carousel",
        "Spreadsheet Comparison vs Automated Skill Matrix",
        "Interactive ROI Calculator & Demo Scheduler"
      ],
      buttonText: "Visit Home Page",
      buttonVariant: "outline" as const
    },
    {
      title: "Enterprise Integrations Hub",
      path: "/integrations",
      badge: "Ecosystem & API",
      badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
      icon: Zap,
      description: "Catalog of native connectors to pair SkillMetrics with your ATS, HRIS, and developer toolchain.",
      features: [
        "Greenhouse, Lever, & Workday ATS sync connectors",
        "GitHub, GitLab, & Jira activity metric webhooks",
        "Slack & Microsoft Teams real-time notification alerts",
        "REST API & GraphQL webhook developer docs"
      ],
      buttonText: "View Integrations Page",
      buttonVariant: "outline" as const
    },
    {
      title: "Platform Resources & Guides",
      path: "/resources",
      badge: "Knowledge & Docs",
      badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/30",
      icon: BookOpen,
      description: "Documentation, engineering whitepapers, competency frameworks, and implementation guides.",
      features: [
        "Skill Taxonomy Best Practices & Grading Rubrics",
        "AI Proctoring Technical Whitepaper",
        "Enterprise Migration Guide (Spreadsheet to Matrix)",
        "Security & Compliance Certification Details"
      ],
      buttonText: "Browse Resources",
      buttonVariant: "outline" as const
    },
    {
      title: "Contact & Enterprise SLA Support",
      path: "/contact",
      badge: "Help & Sales",
      badgeColor: "bg-slate-500/10 text-slate-700 border-slate-500/30",
      icon: Mail,
      description: "Priority enterprise support channel, SLA inquiries, custom quotes, and live demo requests.",
      features: [
        "24/7 Priority Support Channel details for enterprise plans",
        "Custom deployment & private cloud onboarding inquiry form",
        "Direct contact options for engineering leadership teams"
      ],
      buttonText: "Contact Us",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-foreground font-sans antialiased flex flex-col selection:bg-brand-red selection:text-white">
      {/* Global Header Navigation */}
      <Navbar />

      {/* Hero Header */}
      <section className="bg-white border-b border-border py-12 sm:py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-brand-red/10 text-brand-red border border-brand-red/20 text-xs font-bold uppercase tracking-wider">
            <Compass className="h-3.5 w-3.5" /> Platform Site Map &amp; Docs Directory
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            Explore All SkillMetrics Pages &amp; Modules
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            Welcome to the centralized documentation directory. Below is a complete guide to every page available across the SkillMetrics platform, what features live on each page, and direct links to navigate there immediately.
          </p>
        </div>
      </section>

      {/* Pages Directory Grid */}
      <main className="flex-1 container max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {pagesList.map((page, index) => {
            const IconComponent = page.icon;
            return (
              <Card key={index} className="flex flex-col justify-between border-border/80 hover:border-brand-red/40 transition-all duration-200 shadow-xs hover:shadow-md bg-white">
                <CardHeader className="space-y-3 pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-2.5 rounded-sm bg-slate-100 text-brand-red border border-border/60">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <Badge variant="outline" className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-xs ${page.badgeColor}`}>
                      {page.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground tracking-tight">
                    {page.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                    {page.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pt-0 flex-1 flex flex-col justify-between">
                  <div className="space-y-2 pt-2 border-t border-border/50">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">What&apos;s on this page:</p>
                    <ul className="space-y-1.5 text-xs text-foreground">
                      {page.features.map((item, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link href={page.path} className="block w-full">
                      <Button
                        variant={page.buttonVariant}
                        className={`w-full justify-between cursor-pointer font-bold text-xs ${
                          page.buttonVariant === "default" ? "bg-brand-red hover:bg-brand-red/90 text-white" : ""
                        }`}
                      >
                        <span>{page.buttonText}</span>
                        <ArrowRight className="h-3.5 w-3.5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
