"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Layers,
  Users,
  Bot,
  Zap,
  Target,
  TrendingUp,
  LayoutDashboard,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Menu,
  X,
  Car,
  Cpu,
  FlaskConical,
  Plane,
  Factory,
  Utensils,
  BookOpen,
  Trophy,
  MessageSquare,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { useSiteSettings } from "@/components/site-settings-context";
import { BookDemoModal } from "@/components/book-demo-modal";

export function Navbar() {
  const { settings } = useSiteSettings();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkHeader = settings.navbarVariant === "modern_glass" || settings.navbarVariant === "centered_brand";

  const getHeaderVariantClasses = () => {
    if (!scrolled) {
      return "bg-paper border-b border-transparent shadow-none text-foreground";
    }
    return "bg-white dark:bg-black text-foreground border-b border-slate-200/80 dark:border-slate-800/50 shadow-2xs";
  };

  return (
    <div className="sticky top-0 z-[100] w-full relative overflow-hidden">
      {/* Dynamic Announcement Banner */}
      {settings.bannerEnabled && settings.bannerText && (
        <div className="bg-brand-red text-white py-2 px-4 text-xs font-extrabold flex items-center justify-center gap-2 text-center shadow-xs">
          <span>{settings.bannerText}</span>
          {settings.bannerLink && (
            <Link href={settings.bannerLink} className="underline font-mono bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded transition-all">
              Learn More →
            </Link>
          )}
        </div>
      )}

      <header className={`w-full transition-all duration-300 has-[[data-state=open]]:!bg-white dark:has-[[data-state=open]]:!bg-black has-[[data-popup-open]]:!bg-white dark:has-[[data-popup-open]]:!bg-black has-[[data-state=open]]:!border-slate-200/80 dark:has-[[data-state=open]]:!border-slate-800/50 has-[[data-popup-open]]:!border-slate-200/80 dark:has-[[data-popup-open]]:!border-slate-800/50 has-[[data-state=open]]:!shadow-lg has-[[data-popup-open]]:!shadow-lg ${getHeaderVariantClasses()}`}>
        <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-8">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group transition-all duration-200">
              <img
                src={settings.logoUrl || "/logo-3.png"}
                alt={settings.siteName || "SkillMetrics Logo"}
                className={`h-11 sm:h-12 w-auto object-contain max-w-[200px] sm:max-w-[240px] [image-rendering:-webkit-optimize-contrast] ${isDarkHeader ? "brightness-125 contrast-125" : ""
                  }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation using Shadcn NavigationMenu */}
          <nav className="hidden md:flex items-center font-medium text-sm">
            <NavigationMenu align="center">
              <NavigationMenuList className="gap-1">
                {/* Features MegaMenu Item */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-muted/30 data-[state=open]:bg-muted/30 text-foreground/80 hover:text-foreground font-medium px-3.5 py-2 rounded-sm cursor-pointer transition-colors">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[90vw] lg:w-[1216px] max-w-7xl bg-white dark:bg-black shadow-2xl rounded-sm overflow-hidden">
                    <div className="p-6">
                      <div className="grid grid-cols-12 gap-6 text-left">

                        {/* Features Grid (9 Cols) */}
                        <div className="col-span-9 grid grid-cols-3 gap-6">

                          {/* Column 1: SKILL EVALUATION */}
                          <div className="space-y-4">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 pb-1 border-b border-border/40">
                              <span>Skill Evaluation</span>
                            </div>
                            <div className="space-y-3">
                              <NavigationMenuLink render={<Link href="/features/skill-matrix" className="group/item flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200" />}>
                                <div className="p-2.5 rounded-md bg-muted/60 text-muted-foreground border border-border/40 shrink-0 group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-700 group-hover/item:text-foreground transition-all duration-200">
                                  <Layers className="h-4.5 w-4.5" />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-sm font-bold text-foreground group-hover/item:text-foreground transition-colors">Skill Matrix</div>
                                  <div className="text-xs text-muted-foreground leading-snug">Real-time competency grid</div>
                                </div>
                              </NavigationMenuLink>

                              <NavigationMenuLink render={<Link href="/features/employee-metrics" className="group/item flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200" />}>
                                <div className="p-2.5 rounded-md bg-muted/60 text-muted-foreground border border-border/40 shrink-0 group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-700 group-hover/item:text-foreground transition-all duration-200">
                                  <Users className="h-4.5 w-4.5" />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-sm font-bold text-foreground group-hover/item:text-foreground transition-colors">Employee Metrics</div>
                                  <div className="text-xs text-muted-foreground leading-snug">Dynamic performance matrices</div>
                                </div>
                              </NavigationMenuLink>

                              <NavigationMenuLink render={<Link href="/features/ai-assessments" className="group/item flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200" />}>
                                <div className="p-2.5 rounded-md bg-muted/60 text-muted-foreground border border-border/40 shrink-0 group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-700 group-hover/item:text-foreground transition-all duration-200">
                                  <Bot className="h-4.5 w-4.5" />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-sm font-bold text-foreground group-hover/item:text-foreground transition-colors flex items-center gap-1.5">
                                    AI Assessments
                                    <Badge variant="outline" className="text-[8px] uppercase font-bold text-muted-foreground border-border px-1 py-0">AI</Badge>
                                  </div>
                                  <div className="text-xs text-muted-foreground leading-snug">Interactive capability bots</div>
                                </div>
                              </NavigationMenuLink>
                            </div>
                          </div>

                          {/* Column 2: WORKFORCE & SKILLING */}
                          <div className="space-y-4">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 pb-1 border-b border-border/40">
                              <span>Workforce &amp; Skilling</span>
                            </div>
                            <div className="space-y-3">
                              <NavigationMenuLink render={<Link href="/features/multi-skilling" className="group/item flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200" />}>
                                <div className="p-2.5 rounded-md bg-muted/60 text-muted-foreground border border-border/40 shrink-0 group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-700 group-hover/item:text-foreground transition-all duration-200">
                                  <Zap className="h-4.5 w-4.5" />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-sm font-bold text-foreground group-hover/item:text-foreground transition-colors">Multi-Skilling</div>
                                  <div className="text-xs text-muted-foreground leading-snug">Runtime skill allocation</div>
                                </div>
                              </NavigationMenuLink>

                              <NavigationMenuLink render={<Link href="/features/competency-mapping" className="group/item flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200" />}>
                                <div className="p-2.5 rounded-md bg-muted/60 text-muted-foreground border border-border/40 shrink-0 group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-700 group-hover/item:text-foreground transition-all duration-200">
                                  <Target className="h-4.5 w-4.5" />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-sm font-bold text-foreground group-hover/item:text-foreground transition-colors">Competency Mapping</div>
                                  <div className="text-xs text-muted-foreground leading-snug">Functional radar graphs</div>
                                </div>
                              </NavigationMenuLink>

                              <NavigationMenuLink render={<Link href="/features/up-reskilling" className="group/item flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200" />}>
                                <div className="p-2.5 rounded-md bg-muted/60 text-muted-foreground border border-border/40 shrink-0 group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-700 group-hover/item:text-foreground transition-all duration-200">
                                  <TrendingUp className="h-4.5 w-4.5" />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-sm font-bold text-foreground group-hover/item:text-foreground transition-colors">Up &amp; Re-Skilling</div>
                                  <div className="text-xs text-muted-foreground leading-snug">Workforce learning paths</div>
                                </div>
                              </NavigationMenuLink>
                            </div>
                          </div>

                          {/* Column 3: ANALYTICS */}
                          <div className="space-y-4">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 pb-1 border-b border-border/40">
                              <span>Analytics</span>
                            </div>
                            <div className="space-y-3">
                              <NavigationMenuLink render={<Link href="/features/powerful-dashboards" className="group/item flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200" />}>
                                <div className="p-2.5 rounded-md bg-muted/60 text-muted-foreground border border-border/40 shrink-0 group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-700 group-hover/item:text-foreground transition-all duration-200">
                                  <LayoutDashboard className="h-4.5 w-4.5" />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-sm font-bold text-foreground group-hover/item:text-foreground transition-colors">Dashboards</div>
                                  <div className="text-xs text-muted-foreground leading-snug">1-click reports &amp; matrices</div>
                                </div>
                              </NavigationMenuLink>
                            </div>
                          </div>

                        </div>

                        {/* Right Spotlight Sidebar (3 Cols) */}
                        <div className="col-span-3 rounded-xl border border-border/60 bg-gradient-to-b from-brand-red/5 to-transparent p-5 flex flex-col justify-between">
                          <div className="space-y-3">
                            <div className="p-3 rounded-md bg-muted/60 text-muted-foreground border border-border/40 w-fit">
                              <Bot className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-bold text-sm text-foreground leading-snug">AI-Powered Competency Management</h4>
                              <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                                Centralize skills, automate evaluations, and generate matrices effortlessly with AI.
                              </p>
                            </div>
                          </div>

                          <NavigationMenuLink render={<Link href="/book-demo" className="w-full mt-4" />}>
                            <Button size="sm" className="w-full cursor-pointer font-medium text-xs bg-brand-red hover:bg-brand-red/90 text-white border border-brand-red rounded-md shadow-none">
                              Book a Demo <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                            </Button>
                          </NavigationMenuLink>
                        </div>

                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Solutions MegaMenu Item (Commented Out) */}

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-muted/30 data-[state=open]:bg-muted/30 text-foreground/80 hover:text-foreground font-medium px-3.5 py-2 rounded-sm cursor-pointer transition-colors">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[90vw] lg:w-[1216px] max-w-7xl bg-white dark:bg-black shadow-2xl rounded-sm overflow-hidden">
                    <div className="p-6">
                      <div className="grid grid-cols-12 gap-6 text-left">
                        <div className="col-span-9 grid grid-cols-3 gap-5">
                          <div className="space-y-3">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 pb-2">
                              <div className="h-1 w-4 rounded-full bg-brand-red" />
                              <span>Discrete Manufacturing</span>
                            </div>
                            <div className="space-y-0.5">
                              <NavigationMenuLink render={<Link href="/solutions/automotive" className="group/item flex items-start gap-3 p-2.5 rounded-sm hover:bg-muted/30 transition-all duration-200" />}>
                                <div className="p-2 rounded-sm bg-brand-red/8 text-brand-red border border-brand-red/15 shrink-0 group-hover/item:bg-brand-red group-hover/item:text-white transition-all duration-300">
                                  <Car className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-foreground group-hover/item:text-brand-red transition-colors">Automotive</div>
                                  <div className="text-[11px] text-muted-foreground leading-snug">Assembly &amp; parts production tracking</div>
                                </div>
                              </NavigationMenuLink>
                              <NavigationMenuLink render={<Link href="/solutions/electronics" className="group/item flex items-start gap-3 p-2.5 rounded-sm hover:bg-muted/30 transition-all duration-200" />}>
                                <div className="p-2 rounded-sm bg-brand-red/8 text-brand-red border border-brand-red/15 shrink-0 group-hover/item:bg-brand-red group-hover/item:text-white transition-all duration-300">
                                  <Cpu className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-foreground group-hover/item:text-brand-red transition-colors">Electronics</div>
                                  <div className="text-[11px] text-muted-foreground leading-snug">Precision hardware competency</div>
                                </div>
                              </NavigationMenuLink>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 pb-2">
                              <div className="h-1 w-4 rounded-full bg-amber-500" />
                              <span>Process &amp; Compliance</span>
                            </div>
                            <div className="space-y-0.5">
                              <NavigationMenuLink render={<Link href="/solutions/food-beverage" className="group/item flex items-start gap-3 p-2.5 rounded-sm hover:bg-muted/30 transition-all duration-200" />}>
                                <div className="p-2 rounded-sm bg-amber-500/8 text-amber-600 border border-amber-500/15 shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-300">
                                  <Utensils className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-foreground group-hover/item:text-amber-600 transition-colors">Food &amp; Beverage</div>
                                  <div className="text-[11px] text-muted-foreground leading-snug">Quality &amp; safety standard training</div>
                                </div>
                              </NavigationMenuLink>
                              <NavigationMenuLink render={<Link href="/solutions/pharmaceuticals" className="group/item flex items-start gap-3 p-2.5 rounded-sm hover:bg-muted/30 transition-all duration-200" />}>
                                <div className="p-2 rounded-sm bg-amber-500/8 text-amber-600 border border-amber-500/15 shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-300">
                                  <FlaskConical className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-foreground group-hover/item:text-amber-600 transition-colors">Pharmaceuticals</div>
                                  <div className="text-[11px] text-muted-foreground leading-snug">GxP compliance operations</div>
                                </div>
                              </NavigationMenuLink>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 pb-2">
                              <div className="h-1 w-4 rounded-full bg-blue-500" />
                              <span>Heavy Industries</span>
                            </div>
                            <div className="space-y-0.5">
                              <NavigationMenuLink render={<Link href="/solutions/aerospace" className="group/item flex items-start gap-3 p-2.5 rounded-sm hover:bg-muted/30 transition-all duration-200" />}>
                                <div className="p-2 rounded-sm bg-blue-500/8 text-blue-600 border border-blue-500/15 shrink-0 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-300">
                                  <Plane className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-foreground group-hover/item:text-blue-600 transition-colors">Aerospace</div>
                                  <div className="text-[11px] text-muted-foreground leading-snug">Safety-critical compliance systems</div>
                                </div>
                              </NavigationMenuLink>
                              <NavigationMenuLink render={<Link href="/solutions/heavy-manufacturing" className="group/item flex items-start gap-3 p-2.5 rounded-sm hover:bg-muted/30 transition-all duration-200" />}>
                                <div className="p-2 rounded-sm bg-blue-500/8 text-blue-600 border border-blue-500/15 shrink-0 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-300">
                                  <Factory className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-foreground group-hover/item:text-blue-600 transition-colors">Heavy Manufacturing</div>
                                  <div className="text-[11px] text-muted-foreground leading-snug">Industrial plant competencies</div>
                                </div>
                              </NavigationMenuLink>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-3 rounded-sm border border-border/60 bg-gradient-to-b from-amber-500/5 to-transparent p-5 flex flex-col justify-between">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="text-[9px] uppercase font-bold text-brand-red border-brand-red/30 px-1.5 py-0">Industry CMS</Badge>
                              <span className="text-[10px] font-medium text-muted-foreground">Certified</span>
                            </div>
                            <div className="p-3 rounded-sm bg-amber-500/8 text-amber-600 border border-amber-500/20 w-fit">
                              <ShieldCheck className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-bold text-sm text-foreground leading-snug">Enterprise-Grade Training</h4>
                              <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">
                                Bespoke skill matrices built for highly regulated industrial sectors.
                              </p>
                            </div>
                          </div>
                          <NavigationMenuLink render={<Link href="/book-demo" className="w-full mt-4" />}>
                            <Button size="sm" className="w-full cursor-pointer font-medium text-xs bg-brand-red hover:bg-brand-red/90 text-white border border-brand-red rounded-sm shadow-none [box-shadow:none]">
                              Request Industry Demo <ArrowUpRight className="h-3 w-3 ml-1" />
                            </Button>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-border/60 bg-muted/20 px-6 py-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
                        <span><span className="font-bold text-foreground">6</span> Industries</span>
                        <div className="h-3 w-px bg-border" />
                        <span><span className="font-bold text-foreground">3</span> Sectors</span>
                        <div className="h-3 w-px bg-border" />
                        <span>ISO Compliant</span>
                      </div>
                      <NavigationMenuLink render={<Link href="/solutions" className="text-[11px] font-semibold text-brand-red hover:underline flex items-center gap-1" />}>
                        View all solutions <ArrowUpRight className="h-3 w-3" />
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Customers MegaMenu Item (Commented Out) */}

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-muted/30 data-[state=open]:bg-muted/30 text-foreground/80 hover:text-foreground font-medium px-3.5 py-2 rounded-sm cursor-pointer transition-colors">
                    Customers
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[90vw] lg:w-[640px] bg-white dark:bg-black shadow-2xl rounded-sm overflow-hidden">
                    <div className="relative">
                      <div className="p-5 space-y-4">
                        <NavigationMenuLink render={<Link href="/case-studies" className="group/hero block relative overflow-hidden rounded-sm border border-border/60 bg-gradient-to-br from-brand-red/5 via-transparent to-brand-yellow/5 hover:from-brand-red/10 hover:to-brand-yellow/10 transition-all duration-300 cursor-pointer" />}>
                          <div className="p-5 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className="p-3 rounded-sm bg-brand-red/10 text-brand-red border border-brand-red/20 shrink-0 group-hover/hero:bg-brand-red group-hover/hero:text-white transition-all duration-300">
                                <BookOpen className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="text-sm font-bold text-foreground">Case Studies</h4>
                                  <Badge variant="outline" className="text-[9px] uppercase font-bold text-brand-red border-brand-red/30 px-1.5 py-0">Featured</Badge>
                                </div>
                                <p className="text-xs text-muted-foreground leading-snug mt-0.5">In-depth enterprise deployment stories with measurable ROI outcomes</p>
                              </div>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover/hero:text-brand-red transition-colors shrink-0" />
                          </div>
                        </NavigationMenuLink>
                        <div className="grid grid-cols-2 gap-3">
                          <NavigationMenuLink render={<Link href="/success-stories" className="group/card block p-4 rounded-sm border border-border/60 hover:border-brand-red/30 bg-muted/5 hover:bg-muted/20 transition-all duration-300 cursor-pointer" />}>
                            <div className="flex items-start gap-3">
                              <div className="p-2 rounded-sm bg-amber-500/10 text-amber-600 border border-amber-500/20 shrink-0 group-hover/card:bg-amber-500 group-hover/card:text-white transition-all duration-300">
                                <Trophy className="h-4 w-4" />
                              </div>
                              <div className="min-w-0">
                                <h4 className="text-sm font-bold text-foreground">Success Stories</h4>
                                <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">Real-world workforce transformation results</p>
                              </div>
                            </div>
                            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-brand-red opacity-0 group-hover/card:opacity-100 transition-opacity">
                              View Outcomes <ArrowUpRight className="h-3 w-3" />
                            </div>
                          </NavigationMenuLink>
                          <NavigationMenuLink render={<Link href="/testimonials" className="group/card block p-4 rounded-sm border border-border/60 hover:border-brand-red/30 bg-muted/5 hover:bg-muted/20 transition-all duration-300 cursor-pointer" />}>
                            <div className="flex items-start gap-3">
                              <div className="p-2 rounded-sm bg-blue-500/10 text-blue-600 border border-blue-500/20 shrink-0 group-hover/card:bg-blue-500 group-hover/card:text-white transition-all duration-300">
                                <MessageSquare className="h-4 w-4" />
                              </div>
                              <div className="min-w-0">
                                <h4 className="text-sm font-bold text-foreground">Testimonials</h4>
                                <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">What industry leaders say about us</p>
                              </div>
                            </div>
                            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-brand-red opacity-0 group-hover/card:opacity-100 transition-opacity">
                              Read Reviews <ArrowUpRight className="h-3 w-3" />
                            </div>
                          </NavigationMenuLink>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/60 via-white/20 to-transparent dark:from-black/60 dark:via-black/20 dark:to-transparent pointer-events-none rounded-b-sm" />
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>


                {/* Custom Nav Links */}
                {(settings.navLinks || [])
                  .filter((link) => link.label.toLowerCase() !== "features" && link.label.toLowerCase() !== "solutions" && link.label.toLowerCase() !== "customers")
                  .map((link) => (
                    <NavigationMenuItem key={link.id || link.url}>
                      <NavigationMenuLink render={<Link href={link.url} className="bg-transparent hover:bg-muted/30 data-[active]:bg-muted/30 text-foreground/80 hover:text-foreground font-medium px-3.5 py-2 rounded-sm transition-colors cursor-pointer text-sm" />}>
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Actions: Book a Demo Button */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/book-demo">
              <Button
                className="h-8.5 px-3.5 rounded-sm border border-brand-red bg-brand-red hover:bg-brand-red/90 text-white font-medium transition-all cursor-pointer shadow-none [box-shadow:none] text-xs"
              >
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-white dark:bg-black px-6 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col font-medium text-sm">

              {/* Features Accordion */}
              <div className="border-b border-border/50">
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "features" ? null : "features")}
                  className="w-full py-3 text-foreground font-semibold flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-brand-red" />
                    Features
                  </span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${mobileExpanded === "features" ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === "features" && (
                  <div className="pb-3 pl-2 space-y-1">
                    <Link href="/features/skill-matrix" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <Layers className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Skill Matrix</div>
                        <div className="text-[11px] text-muted-foreground">Real-time competency grid</div>
                      </div>
                    </Link>
                    <Link href="/features/employee-metrics" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Employee Metrics</div>
                        <div className="text-[11px] text-muted-foreground">Dynamic matrix grid</div>
                      </div>
                    </Link>
                    <Link href="/features/ai-assessments" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <Bot className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">AI Assessments</div>
                        <div className="text-[11px] text-muted-foreground">Interactive capability bots</div>
                      </div>
                    </Link>
                    <Link href="/features/multi-skilling" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <Zap className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Multi-Skilling</div>
                        <div className="text-[11px] text-muted-foreground">Runtime skill allocation</div>
                      </div>
                    </Link>
                    <Link href="/features/competency-mapping" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Competency Mapping</div>
                        <div className="text-[11px] text-muted-foreground">Functional radar graphs</div>
                      </div>
                    </Link>
                    <Link href="/features/up-reskilling" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Up &amp; Re-Skilling</div>
                        <div className="text-[11px] text-muted-foreground">Workforce learning paths</div>
                      </div>
                    </Link>
                    <Link href="/features/powerful-dashboards" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Dashboards</div>
                        <div className="text-[11px] text-muted-foreground">1-click reports &amp; matrices</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions Accordion */}
              <div className="border-b border-border/50">
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "solutions" ? null : "solutions")}
                  className="w-full py-3 text-foreground font-semibold flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Factory className="h-4 w-4 text-brand-red" />
                    Solutions
                  </span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${mobileExpanded === "solutions" ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === "solutions" && (
                  <div className="pb-3 pl-2 space-y-1">
                    <Link href="/solutions/automotive" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <Car className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Automotive</div>
                        <div className="text-[11px] text-muted-foreground">Assembly &amp; parts production</div>
                      </div>
                    </Link>
                    <Link href="/solutions/electronics" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <Cpu className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Electronics</div>
                        <div className="text-[11px] text-muted-foreground">Precision hardware mapping</div>
                      </div>
                    </Link>
                    <Link href="/solutions/food-beverage" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <Utensils className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Food &amp; Beverage</div>
                        <div className="text-[11px] text-muted-foreground">Quality &amp; safety training</div>
                      </div>
                    </Link>
                    <Link href="/solutions/pharmaceuticals" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <FlaskConical className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Pharmaceuticals</div>
                        <div className="text-[11px] text-muted-foreground">GxP compliance operations</div>
                      </div>
                    </Link>
                    <Link href="/solutions/aerospace" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <Plane className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Aerospace</div>
                        <div className="text-[11px] text-muted-foreground">Safety-critical compliance</div>
                      </div>
                    </Link>
                    <Link href="/solutions/heavy-manufacturing" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <Factory className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Heavy Manufacturing</div>
                        <div className="text-[11px] text-muted-foreground">Industrial plant competencies</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Customers Accordion (Commented Out) */}
              {/* 
              <div className="border-b border-border/50">
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "customers" ? null : "customers")}
                  className="w-full py-3 text-foreground font-semibold flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-brand-red" />
                    Customers
                  </span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${mobileExpanded === "customers" ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === "customers" && (
                  <div className="pb-3 pl-2 space-y-1">
                    <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Case Studies</div>
                        <div className="text-[11px] text-muted-foreground">Enterprise deployments</div>
                      </div>
                    </Link>
                    <Link href="/success-stories" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Success Stories</div>
                        <div className="text-[11px] text-muted-foreground">ROI metrics &amp; outcomes</div>
                      </div>
                    </Link>
                    <Link href="/testimonials" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-muted/40 transition-all">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Testimonials</div>
                        <div className="text-[11px] text-muted-foreground">Industry leader reviews</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              */}

              {/* Other Nav Links */}
              {(settings.navLinks || [])
                .filter((link) => link.label.toLowerCase() !== "features" && link.label.toLowerCase() !== "solutions" && link.label.toLowerCase() !== "customers")
                .map((link) => (
                  <div key={`mobile-${link.id || link.url}`} className="border-b border-border/50">
                    <Link
                      href={link.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full py-3 text-muted-foreground font-medium flex items-center gap-2"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
            </nav>
            <div className="pt-2 flex flex-col gap-2">
              <Link href="/book-demo" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-medium rounded-sm border border-brand-red shadow-none [box-shadow:none] text-xs"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
