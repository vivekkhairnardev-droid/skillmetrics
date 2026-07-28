"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  ArrowRight,
  Building2,
  BarChart3,
  Loader2,
  PenSquare,
  Quote,
  TrendingUp,
  ChevronRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getCaseStudies, CaseStudy } from "@/lib/sanity/client";

export default function CaseStudiesPage() {
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  useEffect(() => {
    async function load() {
      try {
        const fetched = await getCaseStudies();
        setStudies(fetched || []);
      } catch (err) {
        console.error("Error loading case studies:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const industries = ["All", ...Array.from(new Set(studies.map((s) => s.industry)))];

  const filteredStudies = studies.filter((study) => {
    const matchesSearch =
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "All" || study.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const featuredStudy = studies[0];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-yellow/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5 relative z-10">
          <Badge className="bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Client Success Stories
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            SkillMetrics <span className="text-brand-yellow">Case Studies</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover how leading enterprises transformed their workforce skill management with SkillMetrics.
          </p>

          {/* Search & Industry Filters */}
          {studies.length > 0 && (
            <div className="max-w-xl mx-auto pt-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search case studies by company, industry..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-slate-900/90 border-slate-700 text-white placeholder:text-slate-400 text-xs sm:text-sm rounded-xl focus-visible:ring-brand-yellow"
                />
              </div>

              <div className="flex items-center justify-center flex-wrap gap-2 pt-1">
                {industries.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      selectedIndustry === ind
                        ? "bg-brand-yellow text-black shadow-md scale-105"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="flex-1 py-12 bg-slate-50 dark:bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 space-y-12">

          {loading ? (
            <div className="py-20 text-center space-y-3">
              <Loader2 className="h-8 w-8 animate-spin text-brand-yellow mx-auto" />
              <p className="text-sm font-bold text-muted-foreground">Loading case studies from Sanity CMS...</p>
            </div>
          ) : studies.length === 0 ? (
            <div className="py-16 text-center max-w-md mx-auto bg-card border border-dashed border-border rounded-2xl p-8 space-y-4 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-brand-yellow/10 text-brand-yellow mx-auto flex items-center justify-center">
                <PenSquare className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground">No Case Studies Published Yet</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Create and publish your first case study inside Sanity Studio to populate this page.
              </p>
              <Link href="/studio">
                <Button className="bg-brand-yellow hover:bg-brand-yellow/90 text-black font-extrabold text-xs">
                  Go to Sanity Studio <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {/* FEATURED CASE STUDY */}
              {selectedIndustry === "All" && !searchTerm && featuredStudy && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-brand-yellow" />
                    <span className="text-xs uppercase font-extrabold text-foreground tracking-wider">Featured Case Study</span>
                  </div>

                  <div className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:border-brand-yellow/40 transition-all">
                    <div className="lg:col-span-6 overflow-hidden bg-slate-900 flex items-center justify-center">
                      <img
                        src={featuredStudy.coverImage || "/skillmetrics.png"}
                        alt={featuredStudy.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 max-h-[350px]"
                      />
                    </div>

                    <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono flex-wrap">
                          <Badge variant="outline" className="bg-brand-yellow/10 text-amber-700 border-brand-yellow/20 font-extrabold text-[10px]">
                            {featuredStudy.industry}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Building2 className="h-3 w-3" /> {featuredStudy.companyName}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {featuredStudy.publishedAt}
                          </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-black text-foreground leading-snug group-hover:text-brand-yellow transition-colors">
                          <Link href={`/case-studies/${featuredStudy.slug}`}>
                            {featuredStudy.title}
                          </Link>
                        </h2>

                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {featuredStudy.excerpt}
                        </p>

                        {/* Results metrics */}
                        {featuredStudy.results && featuredStudy.results.length > 0 && (
                          <div className="flex items-center gap-4 pt-2">
                            {featuredStudy.results.slice(0, 3).map((r, i) => (
                              <div key={i} className="text-center">
                                <div className="text-lg font-black text-brand-yellow">{r.metric}</div>
                                <div className="text-[10px] text-muted-foreground font-bold uppercase">{r.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <Link href={`/case-studies/${featuredStudy.slug}`}>
                        <Button size="sm" className="bg-brand-yellow hover:bg-brand-yellow/90 text-black font-extrabold text-xs">
                          Read Full Case Study <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* ALL CASE STUDIES GRID */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h3 className="text-xl font-extrabold text-foreground flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-brand-yellow" /> Case Studies ({filteredStudies.length})
                  </h3>
                </div>

                {filteredStudies.length === 0 ? (
                  <div className="text-center py-12 bg-card rounded-xl border border-dashed border-border space-y-3">
                    <p className="text-sm font-bold text-foreground">No matching case studies found.</p>
                    <Button variant="outline" size="sm" onClick={() => { setSearchTerm(""); setSelectedIndustry("All"); }}>
                      Reset Search
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredStudies.map((study) => (
                      <Card key={study._id} className="border border-border bg-card shadow-xs hover:shadow-lg hover:border-brand-yellow/30 transition-all flex flex-col justify-between group overflow-hidden">
                        <div>
                          <div className="h-44 overflow-hidden bg-slate-900 relative">
                            <img
                              src={study.coverImage || "/skillmetrics.png"}
                              alt={study.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3">
                              <Badge className="bg-slate-900/90 text-white border-none font-bold text-[10px]">
                                {study.industry}
                              </Badge>
                            </div>
                          </div>

                          <CardHeader className="p-5 space-y-2">
                            <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-mono">
                              <span className="flex items-center gap-1">
                                <Building2 className="h-3 w-3" /> {study.companyName}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" /> {study.publishedAt}
                              </span>
                            </div>

                            <CardTitle className="text-base font-bold leading-snug group-hover:text-brand-yellow transition-colors">
                              <Link href={`/case-studies/${study.slug}`}>
                                {study.title}
                              </Link>
                            </CardTitle>

                            <CardDescription className="text-xs leading-relaxed line-clamp-3">
                              {study.excerpt}
                            </CardDescription>
                          </CardHeader>
                        </div>

                        <CardFooter className="p-5 pt-0 flex items-center justify-between border-t border-border/40 mt-4">
                          {study.results && study.results.length > 0 ? (
                            <div className="flex items-center gap-2 pt-2">
                              <BarChart3 className="h-3.5 w-3.5 text-brand-yellow" />
                              <span className="text-[11px] font-bold text-foreground">
                                {study.results[0].metric} {study.results[0].label}
                              </span>
                            </div>
                          ) : (
                            <div />
                          )}

                          <Link href={`/case-studies/${study.slug}`}>
                            <Button variant="ghost" size="sm" className="text-brand-yellow text-xs font-bold gap-1 hover:bg-brand-yellow/10 pt-2">
                              Read <ChevronRight className="h-3 w-3" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
