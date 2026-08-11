"use client";

import { Card } from "@/components/ui/card";
import { useSiteSettings } from "@/components/site-settings-context";

const row1 = [
  { quote: "SkillMetrics cut our senior developer screening cycle from 2 weeks down to 48 hours. The automated TypeScript scorecards are scarily accurate.", initials: "RS", name: "Rajesh Sharma", role: "VP of Engineering, TechScale Global" },
  { quote: "The live competency matrix eliminated subjective guesswork in quarterly developer promotions. Every engineer has a clear roadmap.", initials: "PN", name: "Priya Nair", role: "Lead Technical Recruiter, CloudSync" },
  { quote: "Managing 150+ developers used to be spreadsheet chaos. SkillMetrics gave us instant visibility into our team's Go & AWS cloud skills.", initials: "DC", name: "David Chen", role: "Director of Software, EnterpriseFlow" },
  { quote: "Our engineering team velocity increased 35% after implementing targeted multi-skilling pathways and skill benchmarks.", initials: "VP", name: "Vikram Patel", role: "CTO, CyberShield India" },
];

const row2 = [
  { quote: "The anti-cheat suite and proctored coding assessments gave us complete confidence when hiring remote software developers across Asia.", initials: "AR", name: "Ananya Roy", role: "Head of Engineering, DevMetrics" },
  { quote: "SkillMetrics is India's most complete skill matrix software. It transformed how we evaluate and upskill technical talent.", initials: "MV", name: "Marcus Vance", role: "VP People & Talent, GlobalTech" },
  { quote: "We benchmarked 200+ developer profiles in under 3 days. The automated PDF scorecards saved us hundreds of engineering hours.", initials: "SD", name: "Sunita Deshmukh", role: "HR Director, TechFlow Systems" },
  { quote: "From junior onboarding to principal architect assessments, SkillMetrics standardizes engineering capability benchmarking.", initials: "AM", name: "Alex Mercer", role: "Lead Systems Architect, ScaleLab" },
];

function TestimonialCard({ item, variant }: { item: typeof row1[0]; variant: "red" | "yellow" }) {
  return (
    <Card className={`w-[360px] sm:w-[420px] shrink-0 p-6 flex flex-col justify-between space-y-4 border border-border ${variant === "red" ? "hover:border-brand-red/40" : "hover:border-brand-yellow/50"} transition-all bg-card whitespace-normal shadow-xs`}>
      <div className="space-y-3">
        <div className="flex items-center gap-1 text-amber-500 text-sm">{"★".repeat(5)}</div>
        <p className="text-xs sm:text-sm text-foreground italic leading-relaxed">&quot;{item.quote}&quot;</p>
      </div>
      <div className="flex items-center gap-3 pt-3 border-t border-border/60">
        <div className={`h-9 w-9 rounded-full ${variant === "red" ? "bg-brand-red/10 border-brand-red/20 text-brand-red" : "bg-brand-yellow/30 border-brand-yellow/40 text-black"} border font-extrabold text-xs flex items-center justify-center shrink-0`}>
          {item.initials}
        </div>
        <div>
          <div className="font-extrabold text-xs sm:text-sm text-foreground">{item.name}</div>
          <div className="text-[11px] text-muted-foreground">{item.role}</div>
        </div>
      </div>
    </Card>
  );
}

export function Testimonials() {
  const { settings } = useSiteSettings();

  return (
    <section id="testimonials" className="w-full bg-white dark:bg-background py-20 border-b border-border/60 scroll-mt-24 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {settings.testimonialsTitle || "What Our Clients Say"}
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            {settings.testimonialsSubtitle || "Trusted by CTOs, VPs of Engineering, and HR Leaders at leading tech enterprises."}
          </p>
        </div>

        <div className="relative w-full overflow-hidden space-y-6 py-2">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 dark:from-background dark:via-background/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 dark:from-background dark:via-background/80 to-transparent z-10" />

          {/* Row 1: Marquee Left */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-6 select-none">
              {[...row1, ...row1].map((item, idx) => (
                <TestimonialCard key={`t1-${idx}`} item={item} variant="red" />
              ))}
            </div>
          </div>

          {/* Row 2: Marquee Right */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-reverse flex items-center gap-6 select-none">
              {[...row2, ...row2].map((item, idx) => (
                <TestimonialCard key={`t2-${idx}`} item={item} variant="yellow" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
