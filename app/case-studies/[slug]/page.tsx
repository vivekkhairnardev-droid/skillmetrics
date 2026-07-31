import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  ArrowLeft,
  Building2,
  BarChart3,
  Quote,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getCaseStudyBySlug, getCaseStudies } from "@/lib/sanity/client";
import type { CaseStudy } from "@/lib/sanity/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found | SkillMetrics" };
  }

  return {
    title: study.seo?.metaTitle || `${study.title} | SkillMetrics Case Study`,
    description: study.seo?.metaDescription || study.excerpt,
    openGraph: {
      title: study.title,
      description: study.excerpt,
      type: "article",
      publishedTime: study.publishedAt,
      images: [
        {
          url: study.coverImage || "https://skillmetrics.net/skillmetrics.png",
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const allStudies = await getCaseStudies();
  const relatedStudies = allStudies.filter((s) => s.slug !== study.slug && s._id !== study._id).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.excerpt,
    image: study.coverImage || "https://skillmetrics.net/skillmetrics.png",
    datePublished: study.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "SkillMetrics",
      logo: {
        "@type": "ImageObject",
        url: "https://skillmetrics.net/logo.png",
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* CASE STUDY HEADER */}
      <section className="bg-brand-dark text-white py-12 sm:py-16 border-b border-border/20 relative overflow-hidden">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 space-y-6 relative z-10">
          <Link href="/case-studies" className="inline-flex items-center text-xs font-bold text-slate-300 hover:text-brand-yellow transition-colors gap-1.5">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Case Studies
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-slate-300 font-mono flex-wrap">
              <Badge className="bg-brand-yellow text-black font-extrabold text-[10px] uppercase">
                {study.industry}
              </Badge>
              <span className="flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5" /> {study.companyName}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> {study.publishedAt}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {study.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {study.excerpt}
            </p>

            {/* Results Metrics Bar */}
            {study.results && study.results.length > 0 && (
              <div className="flex items-center gap-6 pt-4 border-t border-slate-800">
                {study.results.map((r, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-black text-brand-yellow">{r.metric}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">{r.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CASE STUDY BODY */}
      <main className="flex-1 py-12 bg-slate-50 dark:bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 space-y-12">

          {/* Cover Image */}
          {study.coverImage && (
            <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-slate-900">
              <img
                src={study.coverImage}
                alt={study.title}
                className="w-full h-auto max-h-[450px] object-cover"
              />
            </div>
          )}

          {/* Challenge & Solution */}
          {(study.challenge || study.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.challenge && (
                <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-xs space-y-3">
                  <h3 className="text-lg font-extrabold text-brand-red flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" /> The Challenge
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {study.challenge}
                  </p>
                </div>
              )}
              {study.solution && (
                <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-xs space-y-3">
                  <h3 className="text-lg font-extrabold text-emerald-600 flex items-center gap-2">
                    <Sparkles className="h-5 w-5" /> The Solution
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {study.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Testimonial Quote */}
          {study.testimonialQuote && (
            <div className="bg-brand-dark text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <Quote className="h-8 w-8 text-brand-yellow opacity-60" />
              <p className="text-base sm:text-lg italic leading-relaxed">
                &ldquo;{study.testimonialQuote}&rdquo;
              </p>
              {study.testimonialAuthor && (
                <div className="pt-2 border-t border-slate-800">
                  <p className="text-sm font-bold text-brand-yellow">{study.testimonialAuthor}</p>
                  {study.testimonialRole && (
                    <p className="text-xs text-slate-400">{study.testimonialRole}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Rich Text Content */}
          <article className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-sm sm:text-base leading-relaxed bg-card p-6 sm:p-10 rounded-2xl border border-border/80 shadow-xs">
            {typeof study.content === "string" ? (
              <div className="space-y-6 whitespace-pre-line text-foreground font-normal">
                {study.content}
              </div>
            ) : Array.isArray(study.content) ? (
              <div className="space-y-4 text-foreground font-normal">
                {study.content.map((block: any, idx: number) => {
                  if (block._type === "block" && block.children) {
                    return <p key={idx}>{block.children.map((c: any) => c.text).join("")}</p>;
                  }
                  return null;
                })}
              </div>
            ) : (
              <p className="text-muted-foreground italic">No content available.</p>
            )}
          </article>

          {/* RELATED CASE STUDIES */}
          {relatedStudies.length > 0 && (
            <div className="space-y-6 pt-6">
              <div className="border-b border-border pb-3">
                <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-yellow" /> More Case Studies
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedStudies.map((rel) => (
                  <Card key={rel._id} className="border border-border bg-card p-5 space-y-3 hover:border-brand-yellow/30 transition-all">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px] font-bold text-amber-700 border-brand-yellow/20">
                        {rel.industry}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">{rel.companyName}</span>
                    </div>
                    <h4 className="text-sm font-bold text-foreground hover:text-brand-yellow transition-colors">
                      <Link href={`/case-studies/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{rel.excerpt}</p>
                    <Link href={`/case-studies/${rel.slug}`} className="inline-flex items-center text-xs font-bold text-brand-yellow gap-1 pt-1">
                      Read Case Study <ChevronRight className="h-3 w-3" />
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
