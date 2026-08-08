import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { sql } from "@/lib/db";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getResourceBySlug(id: string) {
  try {
    const res = await sql`SELECT * FROM resources WHERE slug = ${id} OR id::text = ${id} LIMIT 1;`;
    if (res && res[0]) return res[0];
  } catch (e) {
    console.error("Error fetching resource by id/slug:", e);
  }
  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const resource = await getResourceBySlug(id);

  if (!resource) {
    return { title: "Resource Not Found | SkillMetrics" };
  }

  return {
    title: resource.seo_title || `${resource.title} | SkillMetrics Resources`,
    description: resource.seo_description || resource.summary || resource.description,
    keywords: ["skill matrix", "competency mapping", "SkillMetrics", "resource"],
    openGraph: {
      title: resource.title,
      description: resource.summary || resource.description,
      type: "article",
      publishedTime: resource.published_at || resource.created_at,
      images: [
        {
          url: resource.image || "https://skillmetrics.net/skillmetrics.png",
          width: 1200,
          height: 630,
          alt: resource.title,
        },
      ],
    },
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const resource = await getResourceBySlug(id);

  if (!resource) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.summary || resource.description,
    image: resource.image || "https://skillmetrics.net/skillmetrics.png",
    datePublished: resource.published_at || resource.created_at,
    publisher: {
      "@type": "Organization",
      name: "SkillMetrics",
      logo: {
        "@type": "ImageObject",
        url: "https://skillmetrics.net/skillmetrics.png",
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

      <section className="bg-brand-dark text-white py-8 sm:py-12 border-b border-border/20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Link href="/resources" className="hover:text-brand-yellow flex items-center gap-1 transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Resources Hub
            </Link>
            <span>/</span>
            <span className="text-brand-yellow font-medium">{resource.category || "Resource"}</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge className="bg-brand-yellow text-slate-950 font-extrabold text-[10px] uppercase tracking-wider">
                {resource.badge || "Guide"}
              </Badge>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Clock className="h-3 w-3" /> {resource.read_time || "10 min read"}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              {resource.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs">
                  {(resource.author_name || "S").charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{resource.author_name || "SkillMetrics Team"}</p>
                  <p className="text-[10px] text-slate-400">{resource.author_role || "Practice Group"}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Calendar className="h-3.5 w-3.5" /> {resource.published_at ? new Date(resource.published_at).toLocaleDateString() : "Recent"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 py-12 bg-white dark:bg-background">
        <article className="container max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
          {resource.image && (
            <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden border border-border shadow-md bg-slate-900">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {resource.summary && (
            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-brand-yellow font-extrabold text-xs uppercase tracking-wider">
                <Sparkles className="h-4 w-4" /> Executive Summary
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {resource.summary}
              </p>
            </div>
          )}

          <div className="prose max-w-none bg-card p-6 sm:p-10 rounded-2xl border border-border/80 shadow-xs">
            {resource.content ? (
              <div dangerouslySetInnerHTML={{ __html: marked.parse(resource.content) }} />
            ) : (
              <p className="text-muted-foreground italic">No content available.</p>
            )}
          </div>

          <div className="p-8 rounded-2xl bg-slate-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">Need Custom Skill Frameworks?</h3>
              <p className="text-xs text-slate-300 max-w-md">
                Talk with our talent architecture team to map custom competencies for your organization.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/contact">
                <Button size="sm" className="font-bold bg-brand-yellow text-slate-950 hover:bg-brand-yellow/90">
                  Contact Specialist <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-border flex items-center justify-between text-xs font-bold text-muted-foreground">
            <Link href="/resources" className="hover:text-foreground flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> All Resources Hub
            </Link>
            <span className="text-slate-400">SkillMetrics Knowledge Hub</span>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
