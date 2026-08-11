"use client";

import { CheckCircle2 } from "lucide-react";
import { useSiteSettings } from "@/components/site-settings-context";

export function WhySkillMetrics() {
  const { settings } = useSiteSettings();

  return (
    <section id="why-us" className="w-full bg-white py-20 sm:py-28 border-b border-brand-red/10 dark:border-slate-800 scroll-mt-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: Product Image */}
          <div className="lg:col-span-6 relative overflow-hidden rounded-sm border border-border/90 shadow-xl group">
            <img
              src={settings.whyUsImage || "/skillmetrics.png"}
              alt="Why Engineering Leaders Choose SkillMetrics"
              className="w-full h-auto object-cover rounded-sm transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>

          {/* Right Side: Text & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-snug">
                {settings.whyUsTitle || "Why Engineering Leaders Choose SkillMetrics"}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                {settings.whyUsSubtitle || "Built specifically to eliminate engineering interview friction, reduce bad hires, and maximize developer productivity across your engineering organization."}
              </p>
            </div>

            <ul className="space-y-3.5 pt-2 text-sm sm:text-base text-foreground font-medium">
              {[
                settings.whyUsBullet1 || "Get rid of cumbersome manual spreadsheet, broken excel formulas.",
                settings.whyUsBullet2 || "Identify key staff members.",
                settings.whyUsBullet3 || "Minimise/Maximise trainings as circumstances demand.",
                settings.whyUsBullet4 || "Build & assign exact trainings aligned to skills.",
                settings.whyUsBullet5 || "One click Reports.",
                settings.whyUsBullet6 || "Collaborative view dashboards.",
                settings.whyUsBullet7 || "Better employee insights with highly interactive radars."
              ].filter(Boolean).map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
