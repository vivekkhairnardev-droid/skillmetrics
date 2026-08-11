"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSiteSettings } from "@/components/site-settings-context";

export function RoiSection() {
  const { settings } = useSiteSettings();

  return (
    <section className="w-full bg-[#FAF8F5] dark:bg-background py-20 border-b border-border/60">
      <div className="container max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Heading, Text & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight">
              {settings.roiTitle || "Save Up To $1M+ In Annual Engineering & Hiring Costs"}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              {settings.roiSubtitle || "By automating technical candidate screening, eliminating mis-hires, and reclaiming developer interview hours, SkillMetrics delivers measurable enterprise savings from Month 1."}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 justify-center lg:justify-start">
              <Link href="/book-demo">
                <Button size="lg">Get a Quote</Button>
              </Link>
              <Link href="/book-demo">
                <Button variant="outline" size="lg">Calculate Your ROI</Button>
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Impact Metrics */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 bg-muted/40 border border-border/80 rounded-sm p-6 sm:p-8 text-center shadow-xs">
              <div className="bg-card border border-border/60 rounded-sm p-5 shadow-2xs space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-brand-yellow">{settings.stat1Value || "1 Lakh+"}</div>
                <div className="text-xs text-muted-foreground font-extrabold uppercase tracking-wider">{settings.stat1Label || "Skilled Up"}</div>
              </div>
              <div className="bg-card border border-border/60 rounded-sm p-5 shadow-2xs space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-foreground">{settings.stat2Value || "50+"}</div>
                <div className="text-xs text-muted-foreground font-extrabold uppercase tracking-wider">{settings.stat2Label || "Organizations"}</div>
              </div>
              <div className="bg-card border border-border/60 rounded-sm p-5 shadow-2xs space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-brand-red">{settings.stat3Value || "50,000+"}</div>
                <div className="text-xs text-muted-foreground font-extrabold uppercase tracking-wider">{settings.stat3Label || "Reskilled"}</div>
              </div>
              <div className="bg-card border border-border/60 rounded-sm p-5 shadow-2xs space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-foreground">30,000+</div>
                <div className="text-xs text-muted-foreground font-extrabold uppercase tracking-wider">Multiskilled</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
