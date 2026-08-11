"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteSettings } from "@/components/site-settings-context";

export function FeatureCards() {
  const { settings } = useSiteSettings();

  return (
    <section id="features" className="w-full bg-[#FAF8F5] dark:bg-slate-900/60 py-20 sm:py-28 border-b border-brand-red/10 dark:border-slate-800 scroll-mt-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-12">

        {/* Section Header: Heading Left, Paragraph Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200/80 dark:border-slate-800">
          <div className="space-y-3 max-w-xl text-left">

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-left">
              {settings.featuresTitle || "Everything Your Engineering Org Needs to Scale Talent"}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-md text-left md:text-right leading-relaxed">
            {settings.featuresSubtitle || "Scroll to explore how SkillMetrics automates technical evaluations, eliminates skill blind spots, and accelerates workforce capability."}
          </p>
        </div>

        {/* Sticky Stacked Cards Container (Cards stack on top of each other during scroll) */}
        <div className="relative space-y-10 pb-16">

          {/* Card 1: Sticky top-20 */}
          <div className="sticky top-20 z-10 rounded-2xl border border-stone-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl shadow-brand-red/5 dark:shadow-none p-6 sm:p-10 transition-all duration-300 hover:border-brand-red/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Text Content (Left on Desktop) */}
              <div className="lg:col-span-6 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
                  {settings.card1Title || "Skill Matrix"}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {settings.card1Desc || "A virtually 'unbreakable' tool that basically works in real-time to showcase essential skills or competencies of your staff members, particularly, need to perform a certain task."}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {settings.card1Desc2 || "Additionally, Extra features enable you to harmonize your overall organizational activities based on performance, delivery, and core competencies."}
                </p>
                <div className="pt-3">
                  <Link href="/features/skill-matrix">
                    <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red">
                      Read More <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual Image Preview (Right on Desktop) */}
              <div className="lg:col-span-6 relative overflow-hidden rounded-xl border border-border/90 shadow-md group">
                <img
                  src={settings.card1Image || "/skillmetrics.png"}
                  alt="Skill Matrix"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

            </div>
          </div>

          {/* Card 2: Sticky top-24 */}
          <div className="sticky top-24 z-15 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl shadow-slate-200/40 dark:shadow-none p-6 sm:p-10 transition-all duration-300 hover:border-brand-yellow/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Visual Image Preview (Left on Desktop) */}
              <div className="lg:col-span-6 relative overflow-hidden rounded-xl border border-border/90 shadow-md group order-2 lg:order-1">
                <img
                  src={settings.card2Image || "/emp.jpg"}
                  alt="Employee Metrics"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* Text Content (Right on Desktop) */}
              <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
                  {settings.card2Title || "Employee Metrics"}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {settings.card2Desc || "Employee competency matrix visually tracks employee skills with a super dynamic matrix grid view. Discover missing competencies, and find the right candidates for the right tasks at the right time."}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {settings.card2Desc2 || "Flexible customisations in grid view can yield you the best results in employee matrices. What are those customisations? How organisations have benefitted using these tailor-made solutions?"}
                </p>
                <div className="pt-3">
                  <Link href="/features/employee-metrics">
                    <Button variant="outline" className="font-bold">
                      Explore Employee Metrics <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Card 3: Sticky top-28 */}
          <div className="sticky top-28 z-20 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl shadow-slate-200/40 dark:shadow-none p-6 sm:p-10 transition-all duration-300 hover:border-brand-red/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Text Content (Left on Desktop) */}
              <div className="lg:col-span-6 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
                  {settings.card3Title || "AI-Based Assessments"}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {settings.card3Desc || "Interactive AI bots to create super easy assessments. Self integrated, system enabled with flexible adaptability to controlling environment makes your observation tasks hassle free and step ahead."}
                </p>
                <ul className="space-y-2.5 text-sm text-foreground font-medium pt-1">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>Hiring methods accurate &amp; simplified.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>Manual work minimized or negligible.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>Employee engagement enchantment.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>Confined and accurate.</span>
                  </li>
                </ul>
                <div className="pt-3">
                  <Link href="/features/ai-assessments">
                    <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red">
                      Read More <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual Image Preview (Right on Desktop) */}
              <div className="lg:col-span-6 relative overflow-hidden rounded-xl border border-border/90 shadow-md group">
                <img
                  src={settings.card3Image || "/ai_asses.png"}
                  alt="AI Based Assessments"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

            </div>
          </div>

          {/* Card 4: Sticky top-32 (Multi-Skilling) */}
          <div className="sticky top-32 z-25 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl shadow-slate-200/40 dark:shadow-none p-6 sm:p-10 transition-all duration-300 hover:border-brand-yellow/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Visual Image Preview (Left on Desktop) */}
              <div className="lg:col-span-6 relative overflow-hidden rounded-xl border border-border/90 shadow-md group order-2 lg:order-1">
                <img
                  src={settings.card4Image || "/multi-skilling.png"}
                  alt="Multi-skilling"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* Text Content (Right on Desktop) */}
              <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
                  {settings.card4Title || "Multi-Skilling"}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {settings.card4Desc || "Multiskilling mechanisms that make your ManPower flexible and more powerful in problem-solving & task executing WorkPower."}
                </p>
                <ul className="space-y-2.5 text-sm text-foreground font-medium pt-1">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>Equip your employees with more than one skill</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>Use the equipped multi-skills in runtime</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>Adjust your manpower as it demands the best results.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>Discover more &amp; core capabilities.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>Manage your departmental shifts, project-oriented shifts, and machine-driven shifts with one click.</span>
                  </li>
                </ul>
                <div className="pt-3">
                  <Link href="/features/multi-skilling">
                    <Button variant="outline" className="font-bold">
                      Explore Multi-Skilling <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Card 5: Sticky top-36 (Competency Mapping) */}
          <div className="sticky top-36 z-30 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl shadow-slate-200/40 dark:shadow-none p-6 sm:p-10 transition-all duration-300 hover:border-brand-red/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Text Content (Left on Desktop) */}
              <div className="lg:col-span-6 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
                  {settings.card5Title || "Competency Mapping"}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {settings.card5Desc || "Functional radars, capability graphs, and training feedback loops designed to benchmark employee proficiency across technical stacks and operational workflows."}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {settings.card5Desc2 || "Imprint workforce capabilities into central radar frameworks, track growth over time, and eliminate manual spreadsheet errors with automated capability scorecards."}
                </p>
                <ul className="space-y-2.5 text-sm text-foreground font-medium pt-1">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>Functional Radar Charts &amp; Competency Proficiency Vectors</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>Role-Based Capability Frameworks (Junior to Senior Leads)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>1-Click Capability &amp; Training Analytics Reports for HR</span>
                  </li>
                </ul>
                <div className="pt-3">
                  <Link href="/features/competency-mapping">
                    <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold shadow-brand-red">
                      View Competency Engine <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual Image Preview (Right on Desktop) */}
              <div className="lg:col-span-6 relative overflow-hidden rounded-xl border border-border/90 shadow-md group">
                <img
                  src={settings.card5Image || "/compentancy-mapping.jpg"}
                  alt="Competency Mapping"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
