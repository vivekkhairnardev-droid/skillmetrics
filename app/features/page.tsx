"use client";

import React from "react";
import Link from "next/link";
import {
  Grid,
  BarChart2,
  Cpu,
  RefreshCw,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  LayoutDashboard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const features = [
  {
    slug: "skill-matrix",
    title: "Skill Matrix",
    category: "Workforce Competency",
    description: "A real-time, unbreakable tool showcasing essential skills and core competencies of your staff members to optimize task performance and operational efficiency.",
    icon: Grid,
    href: "/features/skill-matrix",
    image: "/skillmetrics.png",
    highlights: [
      "Real-time organizational skill visibility",
      "Automated gap analysis per station/shift",
      "Core competency harmonization"
    ]
  },
  {
    slug: "employee-metrics",
    title: "Employee Metrics",
    category: "Performance Tracking",
    description: "Visually track employee skills with a dynamic matrix grid view. Discover missing competencies, and assign the right candidates to the right tasks at the right time.",
    icon: BarChart2,
    href: "/features/employee-metrics",
    image: "/emp.jpg",
    highlights: [
      "Dynamic matrix grid customization",
      "Instant missing competency detection",
      "Tailor-made organizational reporting"
    ]
  },
  {
    slug: "ai-assessments",
    title: "AI-Based Assessments",
    category: "Automated Evaluation",
    description: "Interactive AI bots to create effortless assessments. Self-integrated and system-enabled with flexible adaptability for proctored, hassle-free evaluation.",
    icon: Cpu,
    href: "/features/ai-assessments",
    image: "/ai_asses.png",
    highlights: [
      "AI-proctored automated testing",
      "Accurate & simplified hiring methods",
      "Negligible manual overhead"
    ]
  },
  {
    slug: "multi-skilling",
    title: "Multi-Skilling",
    category: "Resource Agility",
    description: "Multiskilling mechanisms that make your workforce flexible and powerful in problem-solving, shift balancing, and runtime task execution.",
    icon: RefreshCw,
    href: "/features/multi-skilling",
    image: "/multi-skilling.png",
    highlights: [
      "Equip teams with versatile skillsets",
      "Runtime shift & machine reallocation",
      "Departmental shift optimization"
    ]
  },
  {
    slug: "competency-mapping",
    title: "Competency Mapping",
    category: "Capability Radar",
    description: "Functional radars, capability graphs, and training feedback loops designed to benchmark employee proficiency across technical stacks and plant workflows.",
    icon: Layers,
    href: "/features/competency-mapping",
    image: "/compentancy-mapping.jpg",
    highlights: [
      "Functional competency radar vectors",
      "Junior to Senior capability frameworks",
      "1-Click HR & leadership analytics"
    ]
  },
  {
    slug: "up-reskilling",
    title: "Up & Re-Skilling",
    category: "Workforce Learning",
    description: "Equip your engineering and plant workforces with structured learning pathways, objective milestone tracking, and automated progress scorecards.",
    icon: TrendingUp,
    href: "/features/up-reskilling",
    image: "/skillmetrics.png",
    highlights: [
      "Automated training pathway recommendation",
      "LMS course integration & milestone tracking",
      "Competency validation post-learning"
    ]
  },
  {
    slug: "powerful-dashboards",
    title: "Powerful Dashboards",
    category: "Real-time Analytics",
    description: "Gain immediate insight into site compliance, plant coverage, upskilling metrics, and team skill distributions from unified executive boards.",
    icon: LayoutDashboard,
    href: "/features/powerful-dashboards",
    image: "/emp.jpg",
    highlights: [
      "No manual data entry reporting",
      "ISO compliance audit exports",
      "Upskilling velocity analytics"
    ]
  }
];

export default function FeaturesIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5 relative z-10">
          <Badge className="bg-brand-red/20 text-brand-red border border-brand-red/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Platform Capabilities Overview
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Enterprise Skill Management &amp; <span className="text-brand-yellow">Workforce Intelligence</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Explore the core modules of SkillMetrics built for engineering leaders, plant managers, and enterprise HR teams.
          </p>
        </div>
      </section>

      {/* FEATURES GRID SECTION */}
      <main className="flex-1 py-16 bg-slate-50 dark:bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat) => {
              const IconComp = feat.icon;
              return (
                <Card
                  key={feat.slug}
                  className="border border-border/80 bg-card hover:border-brand-red/40 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden group"
                >
                  <div className="space-y-4">
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={feat.image}
                        alt={feat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-brand-dark/90 text-brand-yellow text-[10px] uppercase font-bold backdrop-blur-xs">
                        {feat.category}
                      </Badge>
                    </div>

                    <CardHeader className="pt-2 pb-0 space-y-2">
                      <div className="flex items-center gap-2 text-brand-red">
                        <IconComp className="h-5 w-5" />
                        <CardTitle className="text-xl font-black">{feat.title}</CardTitle>
                      </div>
                      <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                        {feat.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-2 space-y-2">
                      <ul className="space-y-1.5 text-xs text-foreground font-medium">
                        {feat.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>

                  <div className="p-6 pt-4 border-t border-border/60">
                    <Link href={feat.href}>
                      <Button className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs gap-2">
                        Explore {feat.title} <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
