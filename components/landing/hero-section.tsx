"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteSettings } from "@/components/site-settings-context";

export function HeroSection() {
  const { settings } = useSiteSettings();

  return (
    <section className="relative w-full lg:min-h-[80vh] flex items-center bg-paper text-slate-900 dark:text-white py-12 lg:py-0 overflow-hidden">
      {/* Subtle Warm Glow Orb */}
      <div className="absolute -left-20 -bottom-20 w-[32rem] h-[32rem] bg-brand-yellow/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 w-full">

          {/* Left Side: Prominent Image Showcase (~56% Width) */}
          <div className="w-full lg:w-[56%] relative order-1 flex justify-center lg:justify-start">

            {/* Dot Grid — Bottom Left */}
            <svg className="absolute -bottom-7 -left-7 w-32 h-32 sm:w-40 sm:h-40 z-0 pointer-events-none" aria-hidden="true">
              <pattern id="hero-dots-bl" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.8" fill="#ED2B1F" opacity="0.25" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#hero-dots-bl)" />
            </svg>

            {/* Ambient Glow Effect Behind Image */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
              <div className="w-[95%] h-[85%] rounded-full bg-brand-red/14 blur-[90px]" />
            </div>
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center -translate-x-10 translate-y-6">
              <div className="w-[75%] h-[65%] rounded-full bg-brand-yellow/12 blur-[70px]" />
            </div>

            {/* Clean Image Showcase */}
            <div className="relative z-10 w-full overflow-hidden rounded-sm shadow-lg bg-white dark:bg-slate-900">
              <img
                src={settings.heroImage || "/hero.png"}
                alt="SkillMetrics Platform Interface"
                className="w-full h-auto max-h-[620px] lg:max-h-[78vh] object-contain rounded-sm"
              />
            </div>

          </div>

          {/* Right Side: Content Column (Focused ~44% Width on Desktop) */}
          <div className="w-full lg:w-[44%] shrink-0 space-y-6 text-left order-2">

            {/* Main Display Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {settings.heroTitle || (
                <>
                  India&apos;s 1<sup className="text-[0.45em] text-slate-900 dark:text-white font-extrabold align-super ml-0.5">st</sup> <span className="text-gradient-orange">Skill Management Software</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-normal font-sans max-w-xl">
              {settings.heroSub || "Automate workforce skill matrices, benchmark role competencies, and evaluate developer capabilities 3x faster with objective AI assessments."}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
              {(() => {
                const url = settings.heroCtaLink || "/book-demo";
                const isExternal = url.startsWith("http://") || url.startsWith("https://");
                return isExternal ? (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-brand-red hover:bg-brand-red/90 text-white font-medium rounded-sm border border-brand-red shadow-none [box-shadow:none] transition-all duration-200 h-11 px-7 text-sm cursor-pointer"
                    >
                      {settings.heroCtaText || "Book a Demo"} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                ) : (
                  <Link href={url}>
                    <Button
                      size="lg"
                      className="bg-brand-red hover:bg-brand-red/90 text-white font-medium rounded-sm border border-brand-red shadow-none [box-shadow:none] transition-all duration-200 h-11 px-7 text-sm cursor-pointer"
                    >
                      {settings.heroCtaText || "Book a Demo"} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                );
              })()}

              {(() => {
                const url = settings.heroCta2Link || "/book-demo";
                const isExternal = url.startsWith("http://") || url.startsWith("https://");
                return isExternal ? (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-red transition-colors flex items-center gap-1.5 py-2">
                    <span>Prefer a walkthrough? {settings.heroCta2Text || "Book a 30-min demo"}</span> →
                  </a>
                ) : (
                  <Link href={url} className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-red transition-colors flex items-center gap-1.5 py-2">
                    <span>Prefer a walkthrough? {settings.heroCta2Text || "Book a 30-min demo"}</span> →
                  </Link>
                );
              })()}
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-4 flex-wrap text-xs text-slate-600 dark:text-slate-400 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Real-time Skill Matrices</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Automated Gap Reports</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
