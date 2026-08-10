"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sun,
  Moon,
  Calendar,
  ArrowRight,
  BarChart3,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Code2,
  Copy,
  Send,
  Menu,
  X,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Zap,
  Layers,
  Users,
  Bot,
  Target,
  TrendingUp,
  LayoutDashboard,
  BookOpen,
  Newspaper,
  Video,
  Sparkles,
  Download,
  ChevronsLeftRight,
  FileSpreadsheet,
  AlertTriangle,
  Bell,
  Clock
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useSiteSettings } from "@/components/site-settings-context";
import { SubscribeSection } from "@/components/subscribe-section";
import { WhyChoose } from "@/components/landing/why-choose";

export default function Home() {
  const { settings } = useSiteSettings();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [logoIndex, setLogoIndex] = useState(0);

  const companyLogos = [
    { name: "DANA", src: "/company-logos/dana-logo.png" },
    { name: "Gabriel", src: "/company-logos/gabriel.png" },
    { name: "Hindalco", src: "/company-logos/hindalco.png" },
    { name: "IAC", src: "/company-logos/iac.png" },
    { name: "Mahindra", src: "/company-logos/mahindra.png" },
    { name: "Sandvik", src: "/company-logos/sandvik.png" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % companyLogos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [companyLogos.length]);

  const handlePrevLogos = () => {
    setLogoIndex((prev) => (prev - 1 + companyLogos.length) % companyLogos.length);
  };

  const handleNextLogos = () => {
    setLogoIndex((prev) => (prev + 1) % companyLogos.length);
  };

  const visibleLogos = [0, 1, 2, 3].map(
    (offset) => companyLogos[(logoIndex + offset) % companyLogos.length]
  );




  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Sleek Minimalist Navbar */}
      <Navbar />

      {/* HERO SECTION - CLEAN PAPER BG SPLIT LAYOUT WITH LEFT IMAGE & RIGHT CONTENT */}
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

      {/* TRUSTED PARTNERS LOGO BAR - INFINITE MARQUEE WITH ENLARGED LOGOS (SEAMLESS WARM PAPER CONTINUATION) */}
      <section className="w-full bg-white py-12 sm:py-14 border-t border-b border-brand-red/10 dark:border-slate-800/80 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
            Trusted by Engineering Leaders in Industry-Leading Manufacturing Enterprises
          </p>

          {/* Smooth Infinite Marquee Strip with Edge Gradient Mask & Larger Logos */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] pt-2">
            <div className="flex animate-marquee items-center gap-14 sm:gap-24">
              {[...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos].map((company, idx) => (
                <div
                  key={`marquee-logo-${idx}`}
                  className="flex items-center justify-center shrink-0 h-20 sm:h-28 px-4 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={company.src}
                    alt={company.name}
                    className="h-16 sm:h-22 w-auto max-w-[280px] object-contain mix-blend-multiply dark:brightness-200 opacity-90 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION: STACKED STICKY OVERLAPPING CARDS SCROLL FEATURE (WARM BRAND-RED PAPER NEUTRAL) */}
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

      {/* Main Container */}
      <main className="w-full">

        {/* SECTION 1: CORE PLATFORM CAPABILITIES (WARM PAPER BACKGROUND) */}
        <WhyChoose />

        {/* SECTION 2: SKILLMETRICS VS EXCEL INTERACTIVE COMPARISON SLIDER */}
        <section id="excel-vs-skillmetrics" className="w-full bg-[#FAF8F5] dark:bg-background py-20 border-b border-border/60 scroll-mt-24">
          <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                {settings.comparisonTitle || "Legacy Excel Spreadsheets vs. SkillMetrics Intelligence"}
              </h2>
              <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
                {settings.comparisonSubtitle || "Drag the interactive slider below to see how error-prone manual spreadsheets compare to automated, real-time AI skill matrix tracking."}
              </p>
            </div>

            {/* INTERACTIVE COMPARISON CONTAINER — MATRIX VISUAL MATCH */}
            <div className="relative w-full h-[540px] sm:h-[580px] rounded-xl overflow-hidden border border-border shadow-2xl select-none group bg-white">

              {/* LAYER 1 (BACKGROUND): TRADITIONAL EXCEL WINDOW & MATRIX GRID */}
              <div className="absolute inset-0 w-full h-full bg-slate-100 text-slate-900 flex flex-col font-sans">

                {/* Excel Window Header */}
                <div className="bg-[#107c41] text-white px-4 py-2 flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-red-400 inline-block" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400 inline-block" />
                      <span className="h-3 w-3 rounded-full bg-green-400 inline-block" />
                    </div>
                    <span className="bg-emerald-800 text-emerald-100 text-[10px] px-2 py-0.5 rounded font-mono">AutoSave ON</span>
                    <span className="font-mono text-xs font-bold text-white">FoodProductionA_TrainingMatrix_280124.xlsx</span>
                  </div>
                  <div className="text-[11px] text-emerald-200 font-mono">Excel (Static Sheet)</div>
                </div>

                {/* Excel Ribbon Bar */}
                <div className="bg-slate-200 border-b border-slate-300 px-4 py-1 flex items-center gap-4 text-xs text-slate-700 font-medium">
                  <span className="font-bold text-slate-900 border-b-2 border-[#107c41] pb-0.5">Home</span>
                  <span>Insert</span>
                  <span>Draw</span>
                  <span>Page Layout</span>
                  <span>Formulas</span>
                  <span>Data</span>
                  <span>Review</span>
                  <span>View</span>
                  <span>Automate</span>
                </div>

                {/* Excel Formula Bar */}
                <div className="bg-white border-b border-slate-300 px-4 py-1 flex items-center gap-3 text-xs font-mono text-slate-600">
                  <span className="font-bold text-slate-400">A1</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-slate-400">fx</span>
                  <span className="text-red-600 font-medium">=VLOOKUP(A4, MatrixSheet!$A$1:$Z$100, 3, FALSE)</span>
                </div>

                {/* Excel Matrix Simulation Body */}
                <div className="p-4 overflow-x-auto flex-1 bg-white font-sans text-xs">
                  {/* Title & Stats */}
                  <div className="flex items-center gap-3 pb-3">
                    <span className="text-base font-bold text-slate-900">Food and beverage</span>
                    <span className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-full">6 Employees</span>
                    <span className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-full">8 Skills</span>
                  </div>

                  {/* Spreadsheet Grid */}
                  <div className="border border-slate-300 rounded overflow-hidden">
                    <div className="bg-slate-50 border-b border-slate-300 p-2 flex flex-col gap-1 text-slate-600 text-xs font-medium">
                      <div className="flex items-center gap-1.5">
                        <ChevronDown className="h-3.5 w-3.5 text-slate-500" /> Shift lines
                      </div>
                      <div className="flex items-center gap-1.5 pl-4">
                        <ChevronDown className="h-3.5 w-3.5 text-slate-500" /> Team A
                      </div>
                    </div>

                    <table className="w-full text-left border-collapse border-t border-slate-300 text-xs">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-300">
                          <th className="p-2 border-r border-slate-300 w-8"></th>
                          <th className="p-2 border-r border-slate-300 min-w-[200px] font-bold text-slate-800">Skill Name</th>

                          {/* 6 Employee Vertical Column Headers */}
                          {["Barabas Abbott", "Arlene McCoy", "Courtney Henry", "Dianne Russell", "Mike Lawson", "John Jackson"].map((name, i) => (
                            <th key={i} className="p-2 border-r border-slate-300 text-center align-bottom h-28 w-12">
                              <div className="flex flex-col items-center gap-2 h-full justify-end">
                                <span className="text-[11px] font-medium text-slate-700 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                  {name}
                                </span>
                                <div className="h-6 w-6 rounded-full bg-slate-300 text-slate-700 text-[9px] font-bold flex items-center justify-center border border-slate-400">
                                  {name.split(' ').map(n => n[0]).join('')}
                                </div>
                              </div>
                            </th>
                          ))}

                          {/* Summary Columns */}
                          <th className="p-2 border-r border-slate-300 text-center align-bottom h-28 w-10 bg-slate-200/60">
                            <span className="text-[11px] font-bold text-slate-700 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                              Achieved
                            </span>
                          </th>
                          <th className="p-2 border-r border-slate-300 text-center align-bottom h-28 w-10 bg-slate-200/60">
                            <span className="text-[11px] font-bold text-slate-700 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                              Required
                            </span>
                          </th>
                          <th className="p-2 text-center align-bottom h-28 w-10 bg-slate-200/60">
                            <span className="text-[11px] font-bold text-slate-700 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                              Gap
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-300 font-mono text-[11px]">
                        <tr>
                          <td rowSpan={4} className="p-2 border-r border-slate-300 bg-slate-100 text-slate-500 font-sans font-bold text-center align-middle" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                            Production line A
                          </td>
                          <td className="p-2 border-r border-slate-300 font-sans text-slate-800 font-medium">Industrial equipment operation</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-red-100 text-red-700 font-bold">0</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center font-sans font-bold text-slate-800 bg-slate-50">5</td>
                          <td className="p-2 border-r border-slate-300 text-center font-sans font-bold text-slate-800 bg-slate-50">6</td>
                          <td className="p-2 text-center font-sans bg-slate-50"><span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white font-extrabold text-[10px]">1</span></td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="p-2 border-r border-slate-300 font-sans text-slate-800 font-medium">Food safety and hygiene standards</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-red-200 text-red-800 font-bold">#VALUE!</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center font-sans font-bold text-slate-800 bg-slate-50">6</td>
                          <td className="p-2 border-r border-slate-300 text-center font-sans font-bold text-slate-800 bg-slate-50">0</td>
                          <td className="p-2 text-center font-sans bg-slate-50"><span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500 text-white font-extrabold text-[10px]">6</span></td>
                        </tr>
                        <tr>
                          <td className="p-2 border-r border-slate-300 font-sans text-slate-800 font-medium">Batch cooking and production</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-amber-100 text-amber-800 font-bold">#N/A</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-red-200 text-red-800 font-bold">0</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-amber-100 text-amber-800 font-bold">#N/A</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center font-sans font-bold text-slate-800 bg-slate-50">5</td>
                          <td className="p-2 border-r border-slate-300 text-center font-sans font-bold text-slate-800 bg-slate-50">6</td>
                          <td className="p-2 text-center font-sans bg-slate-50"><span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white font-extrabold text-[10px]">1</span></td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="p-2 border-r border-slate-300 font-sans text-slate-800 font-medium">Quality check and control</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-emerald-100 text-emerald-800 font-bold">1</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-red-200 text-red-800 font-bold">#REF!</td>
                          <td className="p-2 border-r border-slate-300 text-center bg-red-200 text-red-800 font-bold">#REF!</td>
                          <td className="p-2 border-r border-slate-300 text-center font-sans font-bold text-slate-800 bg-slate-50">4</td>
                          <td className="p-2 border-r border-slate-300 text-center font-sans font-bold text-slate-800 bg-slate-50">6</td>
                          <td className="p-2 text-center font-sans bg-slate-50"><span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white font-extrabold text-[10px]">2</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Excel Bottom Warning Banner */}
                <div className="bg-red-50 border-t border-red-200 px-4 py-2 flex items-center justify-between text-xs text-red-700 font-sans font-semibold">
                  <span className="flex items-center gap-1.5">
                    <AlertTriangle className="h-4 w-4 text-red-600 shrink-0" />
                    ❌ Traditional Excel Matrix — Broken formula references (`#VALUE!`, `#REF!`), unverified static entries.
                  </span>
                </div>
              </div>

              {/* LAYER 2 (FOREGROUND): SKILLMETRICS MODERN MATRIX DASHBOARD */}
              <div
                className="absolute inset-0 w-full h-full bg-white text-slate-900 flex flex-col justify-between border-l-2 border-brand-red shadow-2xl transition-all duration-75"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                {/* Top Navigation Bar with SkillMetrics Logo */}
                <div className="border-b border-slate-200 px-6 py-2.5 flex items-center justify-between bg-white shrink-0">
                  <div className="flex items-center gap-8">
                    <a href="#" className="flex items-center">
                      <img
                        src="/logo-3.png"
                        alt="SkillMetrics Logo"
                        className="h-7 w-auto object-contain"
                      />
                    </a>
                    <nav className="hidden sm:flex items-center gap-6 text-xs font-semibold text-slate-500">
                      <span className="text-brand-red border-b-2 border-brand-red pb-1 font-bold cursor-pointer">Matrices</span>
                      <span className="hover:text-slate-900 cursor-pointer">Employees</span>
                      <span className="hover:text-slate-900 cursor-pointer">Skills</span>
                      <span className="hover:text-slate-900 cursor-pointer">Organization</span>
                    </nav>
                  </div>
                  <Badge className="bg-emerald-500 text-white font-bold text-[11px] px-2.5 py-0.5">
                    Live AI Engine Active
                  </Badge>
                </div>

                {/* Matrix Dashboard Main Content */}
                <div className="p-4 sm:p-5 overflow-x-auto flex-1 bg-white font-sans text-xs">
                  {/* Title & Stats */}
                  <div className="flex items-center gap-3 pb-3">
                    <span className="text-base font-bold text-slate-900">Food and beverage</span>
                    <span className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-full">6 Employees</span>
                    <span className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-full">8 Skills</span>
                  </div>

                  {/* Matrix Component Table Container */}
                  <div className="border border-slate-200 rounded-lg overflow-hidden shadow-2xs">
                    {/* Dropdown Section Headers */}
                    <div className="bg-slate-50/80 border-b border-slate-200 p-2 flex flex-col gap-1 text-slate-700 text-xs font-medium">
                      <div className="flex items-center gap-1.5">
                        <ChevronDown className="h-3.5 w-3.5 text-slate-500" /> Shift lines
                      </div>
                      <div className="flex items-center gap-1.5 pl-4">
                        <ChevronDown className="h-3.5 w-3.5 text-slate-500" /> Team A
                      </div>
                    </div>

                    <table className="w-full text-left border-collapse border-t border-slate-200 text-xs">
                      <thead>
                        <tr className="bg-white border-b border-slate-200">
                          <th className="p-2 border-r border-slate-200 w-8"></th>
                          <th className="p-2 border-r border-slate-200 min-w-[200px] font-bold text-slate-800">Skill Name</th>

                          {/* 6 Employee Column Headers with Vertical Names + Avatars */}
                          {[
                            { name: "Barabas Abbott", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
                            { name: "Arlene McCoy", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
                            { name: "Courtney Henry", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
                            { name: "Dianne Russell", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
                            { name: "Mike Lawson", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
                            { name: "John Jackson", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80" },
                          ].map((emp, i) => (
                            <th key={i} className="p-2 border-r border-slate-200 text-center align-bottom h-28 w-12">
                              <div className="flex flex-col items-center gap-2 h-full justify-end">
                                <span className="text-[11px] font-semibold text-slate-700 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                  {emp.name}
                                </span>
                                <div className="relative h-6 w-6 rounded-full overflow-hidden border border-slate-300 shadow-2xs">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={emp.avatar} alt={emp.name} className="h-full w-full object-cover" />
                                </div>
                              </div>
                            </th>
                          ))}

                          {/* Summary Column Vertical Headers */}
                          <th className="p-2 border-r border-slate-200 text-center align-bottom h-28 w-10 bg-slate-50">
                            <span className="text-[11px] font-bold text-slate-600 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                              Achieved
                            </span>
                          </th>
                          <th className="p-2 border-r border-slate-200 text-center align-bottom h-28 w-10 bg-slate-50">
                            <span className="text-[11px] font-bold text-slate-600 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                              Required
                            </span>
                          </th>
                          <th className="p-2 text-center align-bottom h-28 w-10 bg-slate-50">
                            <span className="text-[11px] font-bold text-slate-600 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                              Gap
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 font-medium">
                        {/* ROW 1 */}
                        <tr>
                          <td rowSpan={4} className="p-2 border-r border-slate-200 bg-slate-50 text-slate-500 font-bold text-center align-middle" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                            Production line A
                          </td>
                          <td className="p-2 border-r border-slate-200 text-slate-800 font-semibold">Industrial equipment operation</td>

                          {/* Employee Icons */}
                          <td className="p-2 border-r border-slate-200 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 border-2 border-red-500 text-red-600 font-bold text-xs" title="Overdue / Gap">
                              <Clock className="h-3.5 w-3.5 text-red-600" />
                            </span>
                          </td>
                          {[1, 2, 3, 4, 5].map((_, idx) => (
                            <td key={idx} className="p-2 border-r border-slate-200 text-center">
                              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 border-2 border-emerald-400 text-emerald-600 font-bold text-xs">
                                <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" />
                              </span>
                            </td>
                          ))}

                          {/* Summary */}
                          <td className="p-2 border-r border-slate-200 text-center font-bold text-slate-800 bg-slate-50/50">5</td>
                          <td className="p-2 border-r border-slate-200 text-center font-bold text-slate-800 bg-slate-50/50">6</td>
                          <td className="p-2 text-center bg-slate-50/50">
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white font-extrabold text-[11px]">1</span>
                          </td>
                        </tr>

                        {/* ROW 2 */}
                        <tr className="bg-slate-50/20">
                          <td className="p-2 border-r border-slate-200 text-slate-800 font-semibold">Food safety and hygiene standards</td>
                          {[0, 1, 2, 3, 4, 5].map((_, idx) => (
                            <td key={idx} className="p-2 border-r border-slate-200 text-center">
                              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 text-xs">
                                <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[2.5]" />
                              </span>
                            </td>
                          ))}

                          {/* Summary */}
                          <td className="p-2 border-r border-slate-200 text-center font-bold text-slate-800 bg-slate-50/50">6</td>
                          <td className="p-2 border-r border-slate-200 text-center font-bold text-slate-800 bg-slate-50/50">0</td>
                          <td className="p-2 text-center bg-slate-50/50">
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500 text-white font-extrabold text-[11px]">6</span>
                          </td>
                        </tr>

                        {/* ROW 3 */}
                        <tr>
                          <td className="p-2 border-r border-slate-200 text-slate-800 font-semibold">Batch cooking and production</td>
                          <td className="p-2 border-r border-slate-200 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 border-2 border-emerald-400 text-emerald-600">
                              <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" />
                            </span>
                          </td>
                          <td className="p-2 border-r border-slate-200 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-100 border-2 border-amber-400 text-amber-700 relative">
                              <Bell className="h-3 w-3 text-amber-700" />
                              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-blue-500" />
                            </span>
                          </td>
                          <td className="p-2 border-r border-slate-200 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 border-2 border-red-500 text-red-600">
                              <Clock className="h-3.5 w-3.5 text-red-600" />
                            </span>
                          </td>
                          <td className="p-2 border-r border-slate-200 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 border-2 border-emerald-400 text-emerald-600">
                              <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" />
                            </span>
                          </td>
                          <td className="p-2 border-r border-slate-200 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-100 border-2 border-amber-400 text-amber-700 relative">
                              <Bell className="h-3 w-3 text-amber-700" />
                              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-blue-500" />
                            </span>
                          </td>
                          <td className="p-2 border-r border-slate-200 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 border-2 border-emerald-400 text-emerald-600">
                              <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" />
                            </span>
                          </td>

                          {/* Summary */}
                          <td className="p-2 border-r border-slate-200 text-center font-bold text-slate-800 bg-slate-50/50">5</td>
                          <td className="p-2 border-r border-slate-200 text-center font-bold text-slate-800 bg-slate-50/50">6</td>
                          <td className="p-2 text-center bg-slate-50/50">
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white font-extrabold text-[11px]">1</span>
                          </td>
                        </tr>

                        {/* ROW 4 */}
                        <tr className="bg-slate-50/20">
                          <td className="p-2 border-r border-slate-200 text-slate-800 font-semibold">Quality check and control</td>
                          <td className="p-2 border-r border-slate-200 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 border-2 border-emerald-400 text-emerald-600">
                              <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" />
                            </span>
                          </td>
                          <td className="p-2 border-r border-slate-200 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 border-2 border-emerald-400 text-emerald-600 relative">
                              <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" />
                              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-blue-500" />
                            </span>
                          </td>
                          <td className="p-2 border-r border-slate-200 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 border-2 border-emerald-400 text-emerald-600">
                              <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" />
                            </span>
                          </td>
                          <td className="p-2 border-r border-slate-200 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 border-2 border-emerald-400 text-emerald-600">
                              <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" />
                            </span>
                          </td>
                          <td className="p-2 border-r border-slate-200 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 border-2 border-red-500 text-red-600 font-bold text-xs">
                              !
                            </span>
                          </td>
                          <td className="p-2 border-r border-slate-200 text-center">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 border-2 border-red-500 text-red-600 font-bold text-xs">
                              !
                            </span>
                          </td>

                          {/* Summary */}
                          <td className="p-2 border-r border-slate-200 text-center font-bold text-slate-800 bg-slate-50/50">4</td>
                          <td className="p-2 border-r border-slate-200 text-center font-bold text-slate-800 bg-slate-50/50">6</td>
                          <td className="p-2 text-center bg-slate-50/50">
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white font-extrabold text-[10px]">2</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* SkillMetrics Bottom Banner */}
                <div className="bg-brand-red/5 border-t border-brand-red/20 px-6 py-2 flex items-center justify-between text-xs font-bold text-brand-red shrink-0">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                    ⚡ SkillMetrics Automated Engine — Real-time verified matrix tracking, zero manual formula errors.
                  </span>
                  <span className="text-[11px] font-extrabold bg-brand-red text-white px-2.5 py-0.5 rounded shadow-xs">
                    100% Automated
                  </span>
                </div>
              </div>

              {/* SLIDER DIVIDER LINE & HANDLE */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-brand-red z-30 pointer-events-none shadow-[0_0_15px_rgba(237,43,31,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg border-2 border-white cursor-ew-resize group-hover:scale-110 transition-transform">
                  <ChevronsLeftRight className="h-5 w-5" />
                </div>
              </div>

              {/* INVISIBLE RANGE INPUT OVERLAY FOR TOUCH & MOUSE DRAGGING */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                aria-label="SkillMetrics vs Excel comparison slider"
              />
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY SKILLMETRICS (WARM PAPER THEME) */}
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

              {/* Right Side: Text & Highlights (No Cards) */}
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

        {/* ROI / COST SAVINGS HIGHLIGHT SECTION */}
        <section className="w-full bg-[#FAF8F5] dark:bg-background py-20 border-b border-border/60">
          <div className="container max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left Column: Heading, Text & Actions (6 Cols) */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight">
                  {settings.roiTitle || "Save Up To $1M+ In Annual Engineering & Hiring Costs"}
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {settings.roiSubtitle || "By automating technical candidate screening, eliminating mis-hires, and reclaiming developer interview hours, SkillMetrics delivers measurable enterprise savings from Month 1."}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 justify-center lg:justify-start">
                  <Link href="/book-demo">
                    <Button size="lg">
                      Get a Quote
                    </Button>
                  </Link>
                  <Link href="/book-demo">
                    <Button variant="outline" size="lg">
                      Calculate Your ROI
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: 2x2 Impact Metrics Card Grid (6 Cols) */}
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

        {/* SECTION 4: WHAT OUR CLIENTS SAY - 2 ROW INFINITE CAROUSEL */}
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
              {/* Left & Right Fade Overlay Gradients */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 dark:from-background dark:via-background/80 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 dark:from-background dark:via-background/80 to-transparent z-10" />

              {/* Row 1: Marquee Left */}
              <div className="flex overflow-hidden">
                <div className="animate-marquee flex items-center gap-6 select-none">
                  {[
                    {
                      quote: "SkillMetrics cut our senior developer screening cycle from 2 weeks down to 48 hours. The automated TypeScript scorecards are scarily accurate.",
                      initials: "RS",
                      name: "Rajesh Sharma",
                      role: "VP of Engineering, TechScale Global"
                    },
                    {
                      quote: "The live competency matrix eliminated subjective guesswork in quarterly developer promotions. Every engineer has a clear roadmap.",
                      initials: "PN",
                      name: "Priya Nair",
                      role: "Lead Technical Recruiter, CloudSync"
                    },
                    {
                      quote: "Managing 150+ developers used to be spreadsheet chaos. SkillMetrics gave us instant visibility into our team's Go & AWS cloud skills.",
                      initials: "DC",
                      name: "David Chen",
                      role: "Director of Software, EnterpriseFlow"
                    },
                    {
                      quote: "Our engineering team velocity increased 35% after implementing targeted multi-skilling pathways and skill benchmarks.",
                      initials: "VP",
                      name: "Vikram Patel",
                      role: "CTO, CyberShield India"
                    },
                    {
                      quote: "SkillMetrics cut our senior developer screening cycle from 2 weeks down to 48 hours. The automated TypeScript scorecards are scarily accurate.",
                      initials: "RS",
                      name: "Rajesh Sharma",
                      role: "VP of Engineering, TechScale Global"
                    },
                    {
                      quote: "The live competency matrix eliminated subjective guesswork in quarterly developer promotions. Every engineer has a clear roadmap.",
                      initials: "PN",
                      name: "Priya Nair",
                      role: "Lead Technical Recruiter, CloudSync"
                    },
                    {
                      quote: "Managing 150+ developers used to be spreadsheet chaos. SkillMetrics gave us instant visibility into our team's Go & AWS cloud skills.",
                      initials: "DC",
                      name: "David Chen",
                      role: "Director of Software, EnterpriseFlow"
                    },
                    {
                      quote: "Our engineering team velocity increased 35% after implementing targeted multi-skilling pathways and skill benchmarks.",
                      initials: "VP",
                      name: "Vikram Patel",
                      role: "CTO, CyberShield India"
                    }
                  ].map((item, idx) => (
                    <Card key={`t1-${idx}`} className="w-[360px] sm:w-[420px] shrink-0 p-6 flex flex-col justify-between space-y-4 border border-border hover:border-brand-red/40 transition-all bg-card whitespace-normal shadow-xs">
                      <div className="space-y-3">
                        <div className="flex items-center gap-1 text-amber-500 text-sm">
                          {"★".repeat(5)}
                        </div>
                        <p className="text-xs sm:text-sm text-foreground italic leading-relaxed">
                          "{item.quote}"
                        </p>
                      </div>
                      <div className="flex items-center gap-3 pt-3 border-t border-border/60">
                        <div className="h-9 w-9 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red font-extrabold text-xs flex items-center justify-center shrink-0">
                          {item.initials}
                        </div>
                        <div>
                          <div className="font-extrabold text-xs sm:text-sm text-foreground">{item.name}</div>
                          <div className="text-[11px] text-muted-foreground">{item.role}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Row 2: Marquee Right */}
              <div className="flex overflow-hidden">
                <div className="animate-marquee-reverse flex items-center gap-6 select-none">
                  {[
                    {
                      quote: "The anti-cheat suite and proctored coding assessments gave us complete confidence when hiring remote software developers across Asia.",
                      initials: "AR",
                      name: "Ananya Roy",
                      role: "Head of Engineering, DevMetrics"
                    },
                    {
                      quote: "SkillMetrics is India's most complete skill matrix software. It transformed how we evaluate and upskill technical talent.",
                      initials: "MV",
                      name: "Marcus Vance",
                      role: "VP People & Talent, GlobalTech"
                    },
                    {
                      quote: "We benchmarked 200+ developer profiles in under 3 days. The automated PDF scorecards saved us hundreds of engineering hours.",
                      initials: "SD",
                      name: "Sunita Deshmukh",
                      role: "HR Director, TechFlow Systems"
                    },
                    {
                      quote: "From junior onboarding to principal architect assessments, SkillMetrics standardizes engineering capability benchmarking.",
                      initials: "AM",
                      name: "Alex Mercer",
                      role: "Lead Systems Architect, ScaleLab"
                    },
                    {
                      quote: "The anti-cheat suite and proctored coding assessments gave us complete confidence when hiring remote software developers across Asia.",
                      initials: "AR",
                      name: "Ananya Roy",
                      role: "Head of Engineering, DevMetrics"
                    },
                    {
                      quote: "SkillMetrics is India's most complete skill matrix software. It transformed how we evaluate and upskill technical talent.",
                      initials: "MV",
                      name: "Marcus Vance",
                      role: "VP People & Talent, GlobalTech"
                    },
                    {
                      quote: "We benchmarked 200+ developer profiles in under 3 days. The automated PDF scorecards saved us hundreds of engineering hours.",
                      initials: "SD",
                      name: "Sunita Deshmukh",
                      role: "HR Director, TechFlow Systems"
                    },
                    {
                      quote: "From junior onboarding to principal architect assessments, SkillMetrics standardizes engineering capability benchmarking.",
                      initials: "AM",
                      name: "Alex Mercer",
                      role: "Lead Systems Architect, ScaleLab"
                    }
                  ].map((item, idx) => (
                    <Card key={`t2-${idx}`} className="w-[360px] sm:w-[420px] shrink-0 p-6 flex flex-col justify-between space-y-4 border border-border hover:border-brand-yellow/50 transition-all bg-card whitespace-normal shadow-xs">
                      <div className="space-y-3">
                        <div className="flex items-center gap-1 text-amber-500 text-sm">
                          {"★".repeat(5)}
                        </div>
                        <p className="text-xs sm:text-sm text-foreground italic leading-relaxed">
                          "{item.quote}"
                        </p>
                      </div>
                      <div className="flex items-center gap-3 pt-3 border-t border-border/60">
                        <div className="h-9 w-9 rounded-full bg-brand-yellow/30 border border-brand-yellow/40 text-black font-extrabold text-xs flex items-center justify-center shrink-0">
                          {item.initials}
                        </div>
                        <div>
                          <div className="font-extrabold text-xs sm:text-sm text-foreground">{item.name}</div>
                          <div className="text-[11px] text-muted-foreground">{item.role}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5: NEWSLETTER */}
        <SubscribeSection />



      </main>

      {/* CLEAN MINIMALIST DARK ENTERPRISE FOOTER */}
      <Footer />
    </div>
  );
}
