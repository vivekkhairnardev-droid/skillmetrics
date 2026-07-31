"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  ArrowRight,
  Search,
  ChevronRight,
  Filter,
  User,
  Clock,
  BarChart3,
  Newspaper,
  PenSquare
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { BlogPost, CaseStudy, ResourceItem } from "@/lib/sanity/types";

interface UnifiedResource {
  id: string;
  title: string;
  category: string;
  readTime: string;
  description: string;
  badge: string;
  image: string;
  author: string;
  href: string;
  type: "resource" | "blog" | "case-study";
  publishedAt?: string;
}

interface ResourcesClientPageProps {
  initialBlogs: BlogPost[];
  initialCaseStudies: CaseStudy[];
  initialResources: ResourceItem[];
}

export function ResourcesClientPage({
  initialBlogs,
  initialCaseStudies,
  initialResources,
}: ResourcesClientPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Resources");
  const [searchQuery, setSearchQuery] = useState("");
  const [allResources, setAllResources] = useState<UnifiedResource[]>([]);

  useEffect(() => {
    // Convert blogs to unified format
    const blogItems: UnifiedResource[] = initialBlogs.map((p) => ({
      id: `blog-${p._id}`,
      title: p.title,
      category: "Blog Posts",
      readTime: p.readingTime || "5 min read",
      description: p.excerpt,
      badge: p.category || "Blog",
      image: p.mainImage || "/skillmetrics.png",
      author: p.author.name,
      href: `/blog/${p.slug}`,
      type: "blog" as const,
      publishedAt: p.publishedAt,
    }));

    // Convert case studies to unified format
    const caseStudyItems: UnifiedResource[] = initialCaseStudies.map((s) => ({
      id: `case-${s._id}`,
      title: s.title,
      category: "Case Studies",
      readTime: "Case Study",
      description: s.excerpt,
      badge: s.industry || "Case Study",
      image: s.coverImage || "/skillmetrics.png",
      author: s.companyName,
      href: `/case-studies/${s.slug}`,
      type: "case-study" as const,
      publishedAt: s.publishedAt,
    }));

    // Convert custom CMS resources (Skill Frameworks, Whitepapers, Playbooks, Templates)
    const resourceItems: UnifiedResource[] = initialResources.map((r) => ({
      id: `res-${r._id}`,
      title: r.title,
      category: r.category || "Skill Frameworks",
      readTime: r.readTime || "10 min read",
      description: r.summary,
      badge: r.badge || "Featured Resource",
      image: r.image || "/skillmetrics.png",
      author: r.author,
      href: `/resources/${r.slug}`,
      type: "resource" as const,
      publishedAt: r.publishedAt,
    }));

    // Combine all CMS items and sort by publication date (newest first)
    const combined = [...blogItems, ...caseStudyItems, ...resourceItems].sort((a, b) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return dateB - dateA;
    });

    setAllResources(combined);
  }, [initialBlogs, initialCaseStudies, initialResources]);

  // Build dynamic category list from actual CMS data
  const categoryCounts = allResources.reduce<Record<string, number>>((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const resourceCategories = [
    { name: "All Resources", count: allResources.length },
    ...Object.entries(categoryCounts).map(([name, count]) => ({ name, count })),
  ];

  const filteredResources = allResources.filter((item) => {
    const matchesCategory =
      selectedCategory === "All Resources" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  function typeColor(type: UnifiedResource["type"]) {
    switch (type) {
      case "blog": return "text-brand-red";
      case "case-study": return "text-brand-yellow";
      default: return "text-foreground";
    }
  }

  function typeBadgeStyle(type: UnifiedResource["type"]) {
    switch (type) {
      case "blog": return "bg-brand-red/10 text-brand-red border-brand-red/20";
      case "case-study": return "bg-brand-yellow/10 text-amber-700 border-brand-yellow/20";
      default: return "bg-slate-950 text-brand-yellow";
    }
  }

  function typeIcon(type: UnifiedResource["type"]) {
    switch (type) {
      case "blog": return <Newspaper className="h-3 w-3" />;
      case "case-study": return <BarChart3 className="h-3 w-3" />;
      default: return <FileText className="h-3 w-3" />;
    }
  }

  function typeLabel(type: UnifiedResource["type"]) {
    switch (type) {
      case "blog": return "Blog Post";
      case "case-study": return "Case Study";
      default: return "Resource";
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white py-10 sm:py-14 border-b border-border/20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Blogs, Case Studies &amp; <span className="text-brand-yellow">Resources Hub</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Your single portal for all live blog posts, enterprise case studies, skill frameworks, whitepapers, and guides—powered by Neon.
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
                  <Search className="h-3.5 w-3.5 text-brand-red" /> Search Hub
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
                    <Filter className="h-3.5 w-3.5 text-brand-yellow" /> CMS Categories
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

              {/* CMS Admin Link */}
              <div className="bg-slate-900 text-white rounded-sm p-4 border border-slate-800 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-brand-yellow font-bold text-xs">
                  <PenSquare className="h-4 w-4" /> Content Management
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Publish blogs, case studies, whitepapers, and skill frameworks.
                </p>
                <Link href="/studio" className="inline-block pt-1">
                  <span className="text-xs font-bold text-brand-yellow hover:underline flex items-center gap-1">
                    Open Studio <ArrowRight className="h-3 w-3" />
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
                    {`Showing ${filteredResources.length} item${filteredResources.length !== 1 ? "s" : ""}`}
                  </p>
                </div>
              </div>

              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredResources.map((item) => (
                    <Link key={item.id} href={item.href} className="block group">
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
                            {/* Type badge top-left */}
                            <div className="absolute top-3 left-3">
                              <Badge className={`${typeBadgeStyle(item.type)} font-extrabold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm flex items-center gap-1`}>
                                {typeIcon(item.type)} {typeLabel(item.type)}
                              </Badge>
                            </div>
                            {/* Category badge top-right */}
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-slate-950/90 text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm">
                                {item.badge}
                              </Badge>
                            </div>
                          </div>

                          <CardHeader className="space-y-2.5 p-5">
                            <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
                              <span className={`${typeColor(item.type)} font-bold uppercase tracking-wider text-[11px]`}>
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

                            <CardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                              {item.description}
                            </CardDescription>
                          </CardHeader>
                        </div>

                        <CardContent className="px-5 pb-5 pt-0">
                          <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                            <span className="text-[11px] text-muted-foreground font-medium flex items-center gap-1.5">
                              <User className="h-3 w-3" /> {item.author}
                            </span>
                            <span className="flex items-center gap-1 text-xs font-bold text-foreground group-hover:text-brand-red transition-colors">
                              <span>Read</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center bg-card border border-border rounded-sm space-y-3 p-6">
                  <PenSquare className="h-8 w-8 text-brand-yellow mx-auto" />
                  <p className="text-sm font-bold text-foreground">No resources or articles found matching your criteria.</p>
                  <div className="pt-2 flex items-center justify-center gap-3">
                    <Button variant="outline" size="sm" onClick={() => { setSearchQuery(""); setSelectedCategory("All Resources"); }}>
                      Reset Filters
                    </Button>
                    <Link href="/studio">
                      <Button size="sm" className="bg-brand-yellow text-slate-950 hover:bg-brand-yellow/90 font-bold">
                        Go to Studio
                      </Button>
                    </Link>
                  </div>
                </div>
              )}

            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
