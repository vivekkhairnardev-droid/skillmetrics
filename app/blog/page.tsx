"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles,
  ChevronRight,
  User,
  Loader2,
  PenSquare
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getBlogPosts, BlogPost } from "@/lib/sanity/client";

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetched = await getBlogPosts();
        setPosts(fetched || []);
      } catch (err) {
        console.error("Error loading blog posts:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts[0];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <Navbar />

      {/* HERO / BLOG HEADER */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 border-b border-border/20 relative overflow-hidden">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5 relative z-10">
          <Badge className="bg-brand-red/20 text-brand-red border border-brand-red/30 px-3 py-1 text-xs uppercase font-extrabold tracking-wider">
            Knowledge Hub &amp; Insights
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            SkillMetrics <span className="text-brand-yellow">Blog &amp; Resources</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Expert insights on skill matrix optimization, ISO audit compliance, competency mapping frameworks, and AI workforce analytics.
          </p>

          {/* Search bar & Categories */}
          {posts.length > 0 && (
            <div className="max-w-xl mx-auto pt-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search articles on skill matrices, audits, AI..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-slate-900/90 border-slate-700 text-white placeholder:text-slate-400 text-xs sm:text-sm rounded-xl focus-visible:ring-brand-red"
                />
              </div>

              <div className="flex items-center justify-center flex-wrap gap-2 pt-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? "bg-brand-red text-white shadow-md scale-105"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 py-12 bg-slate-50 dark:bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 space-y-12">

          {loading ? (
            <div className="py-20 text-center space-y-3">
              <Loader2 className="h-8 w-8 animate-spin text-brand-red mx-auto" />
              <p className="text-sm font-bold text-muted-foreground">Loading blog articles from Sanity CMS...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="py-16 text-center max-w-md mx-auto bg-card border border-dashed border-border rounded-2xl p-8 space-y-4 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-brand-red/10 text-brand-red mx-auto flex items-center justify-center">
                <PenSquare className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground">No Published Articles Yet</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Create and publish your first article inside Sanity Studio to populate this page.
              </p>
              <Link href="/studio">
                <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold text-xs">
                  Go to Sanity Studio <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {/* FEATURED POST HERO CARD */}
              {selectedCategory === "All" && !searchTerm && featuredPost && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-brand-yellow" />
                    <span className="text-xs uppercase font-extrabold text-foreground tracking-wider">Featured Insight</span>
                  </div>

                  <div className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:border-brand-red/40 transition-all">
                    <div className="lg:col-span-6 overflow-hidden bg-slate-900 flex items-center justify-center">
                      <img
                        src={featuredPost.mainImage || "/skillmetrics.png"}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 max-h-[350px]"
                      />
                    </div>

                    <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                          <Badge variant="outline" className="bg-brand-red/10 text-brand-red border-brand-red/20 font-extrabold text-[10px]">
                            {featuredPost.category}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {featuredPost.publishedAt}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {featuredPost.readingTime}
                          </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-black text-foreground leading-snug group-hover:text-brand-red transition-colors">
                          <Link href={`/blog/${featuredPost.slug}`}>
                            {featuredPost.title}
                          </Link>
                        </h2>

                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border/60">
                        <div className="flex items-center gap-2.5">
                          <div className="h-8 w-8 rounded-full bg-brand-red/10 text-brand-red font-bold flex items-center justify-center text-xs border border-brand-red/20">
                            <User className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-foreground">{featuredPost.author.name}</p>
                            <p className="text-[10px] text-muted-foreground">{featuredPost.author.role}</p>
                          </div>
                        </div>

                        <Link href={`/blog/${featuredPost.slug}`}>
                          <Button size="sm" className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold text-xs">
                            Read Article <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ALL ARTICLES GRID */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h3 className="text-xl font-extrabold text-foreground flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-brand-red" /> Articles ({filteredPosts.length})
                  </h3>
                </div>

                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12 bg-card rounded-xl border border-dashed border-border space-y-3">
                    <p className="text-sm font-bold text-foreground">No matching articles found.</p>
                    <Button variant="outline" size="sm" onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                      Reset Search
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                      <Card key={post._id} className="border border-border bg-card shadow-xs hover:shadow-lg hover:border-brand-red/30 transition-all flex flex-col justify-between group overflow-hidden">
                        <div>
                          <div className="h-44 overflow-hidden bg-slate-900 relative">
                            <img
                              src={post.mainImage || "/skillmetrics.png"}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3">
                              <Badge className="bg-slate-900/90 text-white border-none font-bold text-[10px]">
                                {post.category}
                              </Badge>
                            </div>
                          </div>

                          <CardHeader className="p-5 space-y-2">
                            <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-mono">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" /> {post.publishedAt}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {post.readingTime}
                              </span>
                            </div>

                            <CardTitle className="text-base font-bold leading-snug group-hover:text-brand-red transition-colors">
                              <Link href={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </CardTitle>

                            <CardDescription className="text-xs leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </CardDescription>
                          </CardHeader>
                        </div>

                        <CardFooter className="p-5 pt-0 flex items-center justify-between border-t border-border/40 mt-4">
                          <div className="flex items-center gap-2 pt-2">
                            <User className="h-3.5 w-3.5 text-muted-foreground" />
                            <span className="text-[11px] font-bold text-foreground">{post.author.name}</span>
                          </div>

                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="ghost" size="sm" className="text-brand-red text-xs font-bold gap-1 hover:bg-brand-red/10 pt-2">
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
