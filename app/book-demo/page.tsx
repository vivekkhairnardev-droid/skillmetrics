"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useSiteSettings } from "@/components/site-settings-context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Calendar as CalendarIcon,
  FormInput,
  ExternalLink,
  Loader2,
  Users,
  ShieldCheck,
  Building,
  Target
} from "lucide-react";

export default function BookDemoPage() {
  const { settings } = useSiteSettings();
  const [activeTab, setActiveTab] = useState<"calendly" | "form">("calendly");
  const [submitted, setSubmitted] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  // Resolving Calendly URL
  const targetCalendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    (settings as any)?.calendlyUrl ||
    "https://calendly.com/d/cfs8-7x6-q4h"; // Default Calendly Link

  const formattedCalendlyUrl = targetCalendlyUrl.includes("?")
    ? `${targetCalendlyUrl}&embed_type=Inline&hide_gdpr_banner=1`
    : `${targetCalendlyUrl}?embed_type=Inline&hide_gdpr_banner=1`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full relative overflow-hidden py-12 sm:py-16 md:py-20">
        {/* Glow Effects */}
        <div className="absolute -left-20 top-20 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-20 bottom-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Social Proof / Value Props */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 pr-0 lg:pr-4">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-red/10 text-brand-red font-extrabold text-xs uppercase tracking-wider">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  <span>Live Scheduling</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                  Experience <span className="text-brand-red">SkillMetrics</span> Live
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  See how engineering leaders automate technical evaluations, eliminate role capability spreadsheets, and accelerate workforce mapping.
                </p>

                {/* Key Benefits */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                      <Target className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-foreground">Interactive Skill Matrix Setup</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">We will help you sketch a trial competency grid matching your current tech stack.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                      <Users className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-foreground">Custom Role Calibration</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">Configure assessment levels (Junior, Mid, Senior, Lead Architect) for your team.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-foreground">Enterprise Security &amp; Compliance</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">Review ISO compliance, anti-plagiarism mechanisms, and LMS integrations.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Quote */}
              <div className="rounded-xl border border-border bg-card/60 p-5 space-y-3 shadow-xs">
                <p className="text-xs sm:text-sm italic text-muted-foreground leading-relaxed">
                  &ldquo;SkillMetrics standardizes capability mapping. We transitioned from loose spreadsheets to real-time skill scorecards for 300+ engineers.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-brand-yellow/20 text-foreground font-black text-xs flex items-center justify-center shrink-0">
                    SS
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-foreground">Siddharth Sharma</h5>
                    <p className="text-[10px] text-muted-foreground">Director of Engineering, CyberShield</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Calendly / Form Container */}
            <div className="lg:col-span-7 rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden min-h-[550px]">
              
              {/* Header Selector Tabs */}
              <div className="p-4 sm:p-6 pb-2 border-b border-border/80 bg-muted/10 flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-bold text-base sm:text-lg text-foreground">Schedule Demo</h3>
                  <p className="text-xs text-muted-foreground">Pick a slot or use our request form.</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("calendly")}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === "calendly"
                        ? "bg-brand-red text-white shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    }`}
                  >
                    <CalendarIcon className="h-3.5 w-3.5" />
                    Instant Calendar
                  </button>
                  <button
                    onClick={() => setActiveTab("form")}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === "form"
                        ? "bg-brand-red text-white shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    }`}
                  >
                    <FormInput className="h-3.5 w-3.5" />
                    Direct Request Form
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 relative min-h-[480px]">
                {activeTab === "calendly" ? (
                  <div className="w-full h-full relative flex flex-col justify-between min-h-[480px]">
                    {iframeLoading && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 z-10 space-y-3">
                        <Loader2 className="h-8 w-8 text-brand-red animate-spin" />
                        <p className="text-xs font-bold text-muted-foreground">Loading Calendar...</p>
                      </div>
                    )}

                    <iframe
                      src={formattedCalendlyUrl}
                      width="100%"
                      height="500px"
                      frameBorder="0"
                      onLoad={() => setIframeLoading(false)}
                      title="Select a Date & Time - Calendly"
                      className="w-full min-h-[500px] border-none"
                    />

                    <div className="p-3 bg-muted/20 text-center w-full border-t border-border flex items-center justify-between text-[11px] text-muted-foreground px-5">
                      <span>Powered by Calendly</span>
                      <a
                        href={targetCalendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-brand-red font-bold hover:underline"
                      >
                        Open in new tab <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 sm:p-8">
                    {submitted ? (
                      <div className="py-12 text-center space-y-4">
                        <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/20">
                          <CheckCircle2 className="h-8 w-8 animate-bounce" />
                        </div>
                        <h3 className="text-xl font-extrabold text-foreground">Request Submitted!</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                          Thank you for your interest. A solutions engineer will email you within 24 hours to confirm scheduling details.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
                        <div className="space-y-1.5">
                          <Label className="text-xs font-bold">Full Name *</Label>
                          <Input placeholder="e.g. Sarah Jenkins" required className="text-xs py-2" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label className="text-xs font-bold">Work Email *</Label>
                            <Input type="email" placeholder="sarah@company.com" required className="text-xs py-2" />
                          </div>
                          <div className="space-y-1.5">
                            <Label className="text-xs font-bold">Company / Organization *</Label>
                            <Input placeholder="Acme Inc." required className="text-xs py-2" />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <Label className="text-xs font-bold">Primary Goal / Requirement</Label>
                          <Input placeholder="e.g. Automate Skill Matrix, ISO Audit Compliance" className="text-xs py-2" />
                        </div>

                        <div className="pt-4">
                          <Button
                            type="submit"
                            className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-extrabold text-xs py-3 shadow-brand-red"
                          >
                            Submit Request <ArrowRight className="ml-1.5 h-4 w-4" />
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
