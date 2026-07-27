"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Video,
  Award,
  ArrowRight,
  Download,
  Search,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Building2,
  Clock,
  TrendingUp,
  Bookmark,
  ChevronRight,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const resourceCategories = [
  { name: "All Resources", count: 6 },
  { name: "Skill Frameworks", count: 2 },
  { name: "Case Studies", count: 1 },
  { name: "Whitepapers", count: 1 },
  { name: "Playbooks & Guides", count: 2 },
];

const resourcesList = [
  {
    id: "engineering-matrix-2026",
    title: "The 2026 Enterprise Engineering Skill Matrix Playbook",
    category: "Skill Frameworks",
    readTime: "12 min read",
    description: "Standardized skill taxonomy matrices for Frontend, Backend, DevOps, and AI/ML Engineering roles across L1 to L6 levels.",
    badge: "Featured Matrix",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
    author: "Engineering Practice Group"
  },
  {
    id: "fortune-500-case-study",
    title: "How Global Tech Manufacturing Scaled Skill Assessment Across 5,000 Engineers",
    category: "Case Studies",
    readTime: "8 min read",
    description: "Learn how an enterprise reduced bad technical hires by 90% and eliminated manual spreadsheets with SkillMetrics radars.",
    badge: "Case Study",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
    author: "Enterprise Case Studies"
  },
  {
    id: "ai-screening-whitepaper",
    title: "AI-Powered Technical Proctoring & Plagiarism Defense Benchmark Report",
    category: "Whitepapers",
    readTime: "15 min read",
    description: "An empirical security study on code hashing, screen monitor proctoring, and LLM plagiarism detection accuracy.",
    badge: "Security Report",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
    author: "SkillMetrics Security Research"
  },
  {
    id: "multiskilling-guide",
    title: "Runtime Workforce Allocation & Multi-Skilling Playbook",
    category: "Playbooks & Guides",
    readTime: "10 min read",
    description: "Step-by-step framework to transition engineering teams to multi-skilled squads during critical project shifts.",
    badge: "Playbook",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80",
    author: "Workforce Strategy Team"
  },
  {
    id: "devops-matrix-template",
    title: "DevOps & Cloud Infrastructure Competency Mapping Template",
    category: "Skill Frameworks",
    readTime: "Download Template",
    description: "Ready-to-use rubrics covering Kubernetes, Terraform, AWS architecture, and Incident Management capability scales.",
    badge: "Template",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    author: "Cloud Infrastructure Group"
  },
  {
    id: "spreadsheet-migration-guide",
    title: "Migrating from Excel Skill Spreadsheets to Automated Dashboards",
    category: "Playbooks & Guides",
    readTime: "6 min read",
    description: "Best practices to import legacy spreadsheets without data loss and establish automated real-time score tracking.",
    badge: "Migration Guide",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    author: "Operations & Integration"
  },
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Resources");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resourcesList.filter((item) => {
    const matchesCategory =
      selectedCategory === "All Resources" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      {/* Centralized Navbar */}
      <Navbar />

      {/* COMPACT HERO SECTION */}
      <section className="bg-brand-dark text-white py-10 sm:py-14 border-b border-border/20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Skill Frameworks, Case Studies &amp; <span className="text-brand-yellow">Resources</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Explore skill matrices, engineering playbooks, whitepapers, and enterprise case studies.
          </p>
        </div>
      </section>

      {/* MAIN CONTAINER WITH SIDEBAR LAYOUT */}
      <main className="flex-1 py-10 bg-slate-50 dark:bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* LEFT SIDEBAR NAVIGATION */}
            <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-24">

              {/* Search Bar */}
              <div className="bg-card border border-border rounded-sm p-4 shadow-xs space-y-3">
                <label className="text-xs font-bold text-foreground flex items-center gap-1.5 uppercase tracking-wider">
                  <Search className="h-3.5 w-3.5 text-brand-red" /> Search Resources
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search by keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-9 text-xs bg-muted/40 border-border rounded-sm pl-3 pr-8"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Sidebar Category Menu */}
              <div className="bg-card border border-border rounded-sm p-4 shadow-xs space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-border">
                  <span className="text-xs font-bold text-foreground flex items-center gap-1.5 uppercase tracking-wider">
                    <Filter className="h-3.5 w-3.5 text-brand-yellow" /> Resource Categories
                  </span>
                </div>

                <nav className="space-y-1 pt-1">
                  {resourceCategories.map((cat) => {
                    const isActive = selectedCategory === cat.name;
                    return (
                      <button
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-xs font-bold transition-all duration-150 cursor-pointer ${isActive
                          ? "bg-slate-950 text-brand-yellow shadow-xs"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                          }`}
                      >
                        <span className="flex items-center gap-2">
                          <ChevronRight
                            className={`h-3.5 w-3.5 transition-transform ${isActive ? "rotate-90 text-brand-yellow" : "text-slate-400"
                              }`}
                          />
                          {cat.name}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-sm text-[10px] font-extrabold ${isActive
                            ? "bg-brand-yellow/20 text-brand-yellow"
                            : "bg-muted text-muted-foreground"
                            }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Enterprise Support Banner */}
              <div className="bg-slate-900 text-white rounded-sm p-4 border border-slate-800 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-brand-yellow font-bold text-xs">
                  <ShieldCheck className="h-4 w-4" /> Need Custom Frameworks?
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our engineering team can build customized skill matrices mapped to your org hierarchy.
                </p>
                <Link href="/contact" className="inline-block pt-1">
                  <span className="text-xs font-bold text-brand-yellow hover:underline flex items-center gap-1">
                    Talk to Specialists <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </div>

            </aside>

            {/* RIGHT SIDE CONTENT GRID */}
            <section className="lg:col-span-9 space-y-6">

              {/* Header Bar showing active selection & count */}
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="space-y-0.5">
                  <h2 className="text-xl font-extrabold text-foreground tracking-tight">
                    {selectedCategory}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Showing {filteredResources.length} enterprise resource{filteredResources.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Cards Grid */}
              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredResources.map((item) => (
                    <Link key={item.id} href={`/resources/${item.id}`} className="block group">
                      <Card
                        className="h-full border border-border/80 bg-card hover:border-slate-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden rounded-sm cursor-pointer p-0"
                      >
                        <div>
                          <div className="relative h-44 w-full overflow-hidden bg-muted">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-slate-950 text-brand-yellow font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm">
                                {item.badge}
                              </Badge>
                            </div>
                          </div>

                          <CardHeader className="space-y-2.5 p-5">
                            <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
                              <span className="text-brand-red font-bold uppercase tracking-wider text-[11px]">
                                {item.category}
                              </span>
                              <span className="flex items-center gap-1 text-[11px]">
                                <Clock className="h-3 w-3" />
                                {item.readTime}
                              </span>
                            </div>

                            <CardTitle className="text-base font-extrabold text-foreground leading-snug group-hover:text-brand-red transition-colors">
                              {item.title}
                            </CardTitle>

                            <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                              {item.description}
                            </CardDescription>
                          </CardHeader>
                        </div>

                        <CardContent className="px-5 pb-5 pt-0">
                          <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                            <span className="text-[11px] text-muted-foreground font-medium">{item.author}</span>
                            <span className="flex items-center gap-1 text-xs font-bold text-foreground group-hover:text-brand-red transition-colors">
                              <span>Read Resource</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center bg-card border border-border rounded-sm space-y-3">
                  <p className="text-sm font-bold text-foreground">No resources found matching your search.</p>
                  <p className="text-xs text-muted-foreground">Try clearing your search query or selecting a different category from the left sidebar.</p>
                  <Button variant="outline" size="sm" onClick={() => { setSearchQuery(""); setSelectedCategory("All Resources"); }}>
                    Reset Filters
                  </Button>
                </div>
              )}

            </section>

          </div>

        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
