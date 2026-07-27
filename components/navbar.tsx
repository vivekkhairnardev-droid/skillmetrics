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

export function Navbar() {
  const [bookDemoOpen, setBookDemoOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const handleBookDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
    setTimeout(() => {
      setDemoSubmitted(false);
      setBookDemoOpen(false);
    }, 2000);
  };

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-border bg-white dark:bg-card shadow-xs">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group transition-all duration-200">
            <img
              src="/logo-3.png"
              alt="SkillMetrics Logo"
              className="h-11 sm:h-12 w-auto object-contain max-w-[200px] sm:max-w-[240px] [image-rendering:-webkit-optimize-contrast]"
            />
          </Link>
        </div>

        {/* Desktop Nav Links with FULL WIDTH MegaMenu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">

          {/* Features FULL WIDTH MegaMenu */}
          <div className="group py-5">
            <Link href="/#features" className="flex items-center gap-1.5 text-muted-foreground group-hover:text-foreground transition-colors cursor-pointer py-1">
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
                      <Link href="/#features" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
                        <div className="p-2 rounded-md bg-muted text-foreground border border-border/50 shrink-0">
                          <Layers className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-foreground">Skill Matrix</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">Real-time competency grid to discover skill gaps</div>
                        </div>
                      </Link>

                      <Link href="/#features" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
                        <div className="p-2 rounded-md bg-muted text-foreground border border-border/50 shrink-0">
                          <Users className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-foreground">Employee Metrics</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">Dynamic grid view with custom tailoring</div>
                        </div>
                      </Link>

                      <Link href="/#features" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
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
                      <Link href="/#features" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
                        <div className="p-2 rounded-md bg-muted text-foreground border border-border/50 shrink-0">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-foreground">Multi-Skilling</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">Runtime skill allocation &amp; shift management</div>
                        </div>
                      </Link>

                      <Link href="/#features" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
                        <div className="p-2 rounded-md bg-muted text-foreground border border-border/50 shrink-0">
                          <Target className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-foreground">Competency Mapping</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">Functional radars &amp; capability graphs</div>
                        </div>
                      </Link>

                      <Link href="/#features" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
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
                      <Link href="/#features" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
                        <div className="p-2 rounded-md bg-muted text-foreground border border-border/50 shrink-0">
                          <LayoutDashboard className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-foreground">Powerful Dashboards</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">1-click reports &amp; real-time analytics</div>
                        </div>
                      </Link>

                      <Link href="/integrations" className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-muted/60 transition-all">
                        <div className="p-2 rounded-md bg-muted text-foreground border border-border/50 shrink-0">
                          <ShieldCheck className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-foreground">Anti-Cheat Suite</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">Plagiarism hashes &amp; environment monitoring</div>
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

                  <Button
                    size="sm"
                    onClick={() => setBookDemoOpen(true)}
                    className="w-full cursor-pointer font-medium"
                  >
                    Book a Demo
                  </Button>
                </div>

              </div>
            </div>
          </div>

          <Link href="/integrations" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Integrations
          </Link>

          <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Resources
          </Link>

          <Link href="/docs" className="text-brand-red font-bold hover:underline transition-colors flex items-center gap-1">
            Docs
          </Link>

          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Contact Us
          </Link>
        </nav>

        {/* Actions: Book Demo & Free Trial Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" onClick={() => setBookDemoOpen(true)}>
            Book Demo
          </Button>

          <Dialog open={bookDemoOpen} onOpenChange={setBookDemoOpen}>
            <DialogTrigger
              render={
                <Button>
                  Free Trial
                </Button>
              }
            />
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-foreground text-xl">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  Schedule a Live SkillMetrics Demo
                </DialogTitle>
                <DialogDescription>
                  See how SkillMetrics automates technical evaluations and skill scorecards for your engineering team.
                </DialogDescription>
              </DialogHeader>

              {demoSubmitted ? (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg">Demo Request Confirmed!</h3>
                  <p className="text-sm text-muted-foreground">Our technical specialist will email your calendar invite shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleBookDemoSubmit} className="space-y-4 py-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="demo-name">Full Name</Label>
                      <Input id="demo-name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="demo-email">Work Email</Label>
                      <Input id="demo-email" type="email" placeholder="john@company.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="demo-company-size">Company Size</Label>
                      <Select defaultValue="10-50">
                        <SelectTrigger id="demo-company-size">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1 - 10 Engineers</SelectItem>
                          <SelectItem value="10-50">10 - 50 Engineers</SelectItem>
                          <SelectItem value="50-200">50 - 200 Engineers</SelectItem>
                          <SelectItem value="200+">200+ Engineers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="demo-preferred-time">Preferred Time</Label>
                      <Select defaultValue="morning">
                        <SelectTrigger id="demo-preferred-time">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                          <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <DialogFooter className="pt-4">
                    <Button type="submit" className="w-full">
                      Confirm Demo Request
                    </Button>
                  </DialogFooter>
                </form>
              )}
            </DialogContent>
          </Dialog>
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
            <Link href="/#features" onClick={() => setMobileMenuOpen(false)} className="py-1 text-muted-foreground hover:text-foreground">Features</Link>
            <Link href="/integrations" onClick={() => setMobileMenuOpen(false)} className="py-1 text-muted-foreground hover:text-foreground">Integrations</Link>
            <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="py-1 text-muted-foreground hover:text-foreground">Resources</Link>
            <Link href="/docs" onClick={() => setMobileMenuOpen(false)} className="py-1 text-brand-red font-bold">Docs Directory</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-1 text-muted-foreground hover:text-foreground">Contact Us</Link>
          </nav>
          <div className="pt-2 border-t border-border flex flex-col gap-2">
            <Button
              variant="outline"
              onClick={() => { setMobileMenuOpen(false); setBookDemoOpen(true); }}
              className="w-full font-medium"
            >
              Book Demo
            </Button>
            <Button
              onClick={() => { setMobileMenuOpen(false); setBookDemoOpen(true); }}
              className="w-full bg-brand-red hover:bg-brand-red/90 text-white shadow-brand-red font-medium"
            >
              Free Trial
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
