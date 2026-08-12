import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { sql } from "@/lib/db";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  User,
  Tag,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getBlogPostBySlug(slug: string) {
  try {
    const res = await sql`SELECT * FROM posts WHERE slug = ${slug} LIMIT 1;`;
    if (res && res[0]) return res[0];
  } catch (e) {
    console.error("Error fetching blog post by slug:", e);
  }
  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | SkillMetrics",
    };
  }

  return {
    title: post.seo_title || `${post.title} | SkillMetrics Insights`,
    description: post.seo_description || post.excerpt,
    keywords: ["skill matrix", "competency mapping", "SkillMetrics"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.published_at || post.created_at,
      authors: [post.author_name || "SkillMetrics Team"],
      images: [
        {
          url: post.main_image || "https://skillmetrics.net/skillmetrics.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.main_image || "https://skillmetrics.net/skillmetrics.png"],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  let relatedPosts: any[] = [];
  try {
    const dbRelated = await sql`SELECT * FROM posts WHERE slug != ${slug} AND published_at IS NOT NULL ORDER BY published_at DESC LIMIT 2;`;
    if (dbRelated && Array.isArray(dbRelated)) relatedPosts = dbRelated;
  } catch (e) {
    console.error("Error fetching related posts:", e);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.main_image || "https://skillmetrics.net/skillmetrics.png",
    "datePublished": post.published_at || post.created_at,
    "author": {
      "@type": "Person",
      "name": post.author_name || "SkillMetrics Team",
      "jobTitle": post.author_role || "Engineering Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SkillMetrics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://skillmetrics.net/skillmetrics.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <section className="bg-brand-dark text-white py-12 sm:py-16 border-b border-border/20 relative overflow-hidden">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 space-y-6 relative z-10">
          <Link href="/blog" className="inline-flex items-center text-xs font-bold text-slate-300 hover:text-brand-yellow transition-colors gap-1.5">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to All Articles
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-slate-300 font-mono flex-wrap">
              <Badge className="bg-brand-red text-white font-extrabold text-[10px] uppercase">
                {post.category || "Insight"}
              </Badge>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> {post.published_at ? new Date(post.published_at).toLocaleDateString() : "Recent"}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {post.reading_time || "5 min read"}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {post.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-red/20 border border-brand-red/30 flex items-center justify-center text-brand-red font-bold text-xs">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{post.author_name || "SkillMetrics Team"}</p>
                  <p className="text-[10px] text-slate-400">{post.author_role || "Engineering Team"}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800 h-8 w-8">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800 h-8 w-8">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 py-12 bg-slate-50 dark:bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
          {post.main_image && (
            <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-slate-900">
              <img
                src={post.main_image}
                alt={post.title}
                className="w-full h-auto max-h-[450px] object-cover"
              />
            </div>
          )}

          <article className="prose max-w-none bg-card p-6 sm:p-10 rounded-2xl border border-border/80 shadow-xs">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }} />
            ) : (
              <p className="text-muted-foreground italic">No content available.</p>
            )}
          </article>

          {relatedPosts.length > 0 && (
            <div className="space-y-6 pt-6">
              <div className="border-b border-border pb-3">
                <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-yellow" /> Related Articles
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <Card key={rel.id} className="border border-border bg-card p-5 space-y-3 hover:border-brand-red/30 transition-all">
                    <Badge variant="outline" className="text-[10px] font-bold text-brand-red border-brand-red/20">
                      {rel.category || "Insight"}
                    </Badge>
                    <h4 className="text-sm font-bold text-foreground hover:text-brand-red transition-colors">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{rel.excerpt}</p>
                    <Link href={`/blog/${rel.slug}`} className="inline-flex items-center text-xs font-bold text-brand-red gap-1 pt-1">
                      Read Post <ChevronRight className="h-3 w-3" />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
