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
  X
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

import { useSiteSettings } from "@/components/site-settings-context";
import { BookDemoModal } from "@/components/book-demo-modal";

export function Navbar() {
  const { settings } = useSiteSettings();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDarkHeader = settings.navbarVariant === "modern_glass" || settings.navbarVariant === "centered_brand";

  const getHeaderVariantClasses = () => {
    switch (settings.navbarVariant as string) {
      case "modern_glass":
      case "glassmorphism":
        return "bg-slate-950/90 text-white backdrop-blur-md border-b border-slate-800 shadow-xl";
      case "minimal_enterprise":
      case "minimalist":
        return "bg-slate-50 border-b border-slate-200 text-slate-900 shadow-2xs";
      case "centered_brand":
      case "banner_top":
        return "bg-slate-900 text-white border-b border-slate-800 shadow-md";
      case "live_component":
      default:
        return "bg-white dark:bg-card border-b border-border shadow-xs";
    }
  };

  return (
    <div className="sticky top-0 z-[100] w-full">
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

      <header className={`w-full transition-all duration-300 ${getHeaderVariantClasses()}`}>
        <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-8">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group transition-all duration-200">
              <img
                src={settings.logoUrl || "/logo-3.png"}
                alt={settings.siteName || "SkillMetrics Logo"}
                className={`h-11 sm:h-12 w-auto object-contain max-w-[200px] sm:max-w-[240px] [image-rendering:-webkit-optimize-contrast] ${
                  isDarkHeader ? "brightness-125 contrast-125" : ""
                }`}
              />
            </Link>
          </div>

        {/* Desktop Nav Links with FULL WIDTH MegaMenu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">

          {/* Features FULL WIDTH MegaMenu */}
          <div className="group py-5">
            <Link href="/#features" className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${isDarkHeader ? "text-slate-300 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}>
              <span>Features</span>
              <ChevronDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform duration-200" />
            </Link>

            {/* Fixed Full Width MegaMenu Drawer (Solid Background) */}
            <div className="fixed top-[64px] left-0 w-full bg-background border-b border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50 py-8 px-8 text-left">
              <div className="container max-w-7xl mx-auto grid grid-cols-12 gap-8">

                {/* Left Column 1 & 2: Categorized Features Grid (9 Cols) */}
                <div className="col-span-9 grid grid-cols-3 gap-8">

                  {/* Column 1: SKILL EVALUATION */}
                  <div className="space-y-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                      <Layers className="h-3.5 w-3.5" />
                      <span>Skill Evaluation</span>
                    </div>
                    <div className="space-y-2">
                      <Link href="/features/skill-matrix" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
                        <div className="p-2 rounded-md bg-muted text-foreground border border-border/50 shrink-0">
                          <Layers className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-foreground">Skill Matrix</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">Real-time competency grid to discover skill gaps</div>
                        </div>
                      </Link>

                      <Link href="/features/employee-metrics" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
                        <div className="p-2 rounded-md bg-muted text-foreground border border-border/50 shrink-0">
                          <Users className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-foreground">Employee Metrics</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">Dynamic grid view with custom tailoring</div>
                        </div>
                      </Link>

                      <Link href="/features/ai-assessments" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
                        <div className="p-2 rounded-md bg-muted text-foreground border border-border/50 shrink-0">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-foreground">AI Assessments</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">Interactive bots to automate hiring accuracy</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Column 2: WORKFORCE & COMPETENCY */}
                  <div className="space-y-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                      <Target className="h-3.5 w-3.5" />
                      <span>Workforce &amp; Skilling</span>
                    </div>
                    <div className="space-y-2">
                      <Link href="/features/multi-skilling" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
                        <div className="p-2 rounded-md bg-muted text-foreground border border-border/50 shrink-0">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-foreground">Multi-Skilling</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">Runtime skill allocation &amp; shift management</div>
                        </div>
                      </Link>

                      <Link href="/features/competency-mapping" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
                        <div className="p-2 rounded-md bg-muted text-foreground border border-border/50 shrink-0">
                          <Target className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-foreground">Competency Mapping</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">Functional radars &amp; capability graphs</div>
                        </div>
                      </Link>

                      <Link href="/features/up-reskilling" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
                        <div className="p-2 rounded-md bg-muted text-foreground border border-border/50 shrink-0">
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-foreground">Up &amp; Re-Skilling</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">Workforce learning pathways</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Column 3: INSIGHTS & SECURITY */}
                  <div className="space-y-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                      <LayoutDashboard className="h-3.5 w-3.5" />
                      <span>Analytics &amp; Security</span>
                    </div>
                    <div className="space-y-2">
                      <Link href="/features/powerful-dashboards" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
                        <div className="p-2 rounded-md bg-muted text-foreground border border-border/50 shrink-0">
                          <LayoutDashboard className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-foreground">Powerful Dashboards</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">1-click reports &amp; real-time analytics</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                </div>

                {/* Right Spotlight Sidebar Card (3 Cols) */}
                <div className="col-span-3 rounded-lg border border-border bg-muted/30 p-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-[10px] uppercase font-semibold text-muted-foreground border-border">Spotlight</Badge>
                      <span className="text-[11px] font-medium text-muted-foreground">50K+ Evaluated</span>
                    </div>
                    <h4 className="font-bold text-base leading-snug text-foreground">Competency Management System</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Say goodbye to spreadsheets. Centralize overall skills, matrices, and training records.
                    </p>
                  </div>

                  <Link href="/book-demo" className="w-full">
                    <Button
                      size="sm"
                      className="w-full cursor-pointer font-medium"
                    >
                      Book a Demo
                    </Button>
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* Custom Dynamic Nav Links (excluding Features as it is the fixed MegaMenu) */}
          {(settings.navLinks || [])
            .filter((link) => link.label.toLowerCase() !== "features")
            .map((link) => (
              <Link
                key={link.id || link.url}
                href={link.url}
                className={`transition-colors font-medium ${
                  isDarkHeader
                    ? "text-slate-300 hover:text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
        </nav>

        {/* Actions: Book Demo & Free Trial Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/book-demo">
            <Button variant="outline" className="cursor-pointer font-medium">
              Book Demo
            </Button>
          </Link>

          <Link href="/book-demo">
            <Button
              className="bg-brand-red hover:bg-brand-red/90 text-white font-extrabold cursor-pointer shadow-brand-red"
            >
              Free Trial
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
        <div className="md:hidden border-b border-border bg-background px-6 py-4 space-y-4">
          <nav className="flex flex-col space-y-3 font-medium text-sm">
            <Link href="/#features" onClick={() => setMobileMenuOpen(false)} className="py-1 text-foreground font-semibold flex items-center justify-between">
              <span>Features</span>
              <span className="text-[10px] bg-brand-red/10 text-brand-red px-1.5 py-0.5 rounded font-mono font-bold">MegaMenu</span>
            </Link>
            {(settings.navLinks || [])
              .filter((link) => link.label.toLowerCase() !== "features")
              .map((link) => (
                <Link
                  key={`mobile-${link.id || link.url}`}
                  href={link.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1 ${link.url === "/docs" ? "text-brand-red font-bold" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {link.label}
                </Link>
              ))}
          </nav>
          <div className="pt-2 border-t border-border flex flex-col gap-2">
            <Link href="/book-demo" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full font-medium"
              >
                Book Demo
              </Button>
            </Link>
            <Link href="/book-demo" onClick={() => setMobileMenuOpen(false)}>
              <Button
                className="w-full bg-brand-red hover:bg-brand-red/90 text-white shadow-brand-red font-medium"
              >
                Free Trial
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
    </div>
  );
}
