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
    "https://calendly.com/vivekkhairnar-dev/new-meeting"; // Default Calendly Link

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

        <div className="container max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
          
          {/* Centered Header Section */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
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
          </div>

          {/* Centered Calendar / Form Container */}
          <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden min-h-[750px]">
            
            {/* Header Selector Tabs */}
            <div className="p-4 sm:p-6 pb-2 border-b border-border/80 bg-muted/10 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1 text-left">
                <h3 className="font-bold text-base sm:text-lg text-foreground">Schedule Demo</h3>
                <p className="text-xs text-muted-foreground">Pick a slot or use our request form.</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("calendly")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === "calendly"
                    ? "bg-brand-red text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    }`}
                >
                  <CalendarIcon className="h-3.5 w-3.5" />
                  Instant Calendar
                </button>
                <button
                  onClick={() => setActiveTab("form")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === "form"
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
            <div className="flex-1 relative min-h-[660px]">
              {activeTab === "calendly" ? (
                <div className="w-full h-full relative flex flex-col justify-between min-h-[660px]">
                  {iframeLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 z-10 space-y-3">
                      <Loader2 className="h-8 w-8 text-brand-red animate-spin" />
                      <p className="text-xs font-bold text-muted-foreground">Loading Calendar...</p>
                    </div>
                  )}

                  <iframe
                    src={formattedCalendlyUrl}
                    width="100%"
                    height="660px"
                    frameBorder="0"
                    scrolling="no"
                    onLoad={() => setIframeLoading(false)}
                    title="Select a Date & Time - Calendly"
                    className="w-full min-h-[660px] border-none overflow-hidden"
                    style={{ overflow: "hidden" }}
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
                    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto text-left">
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

          {/* Social Proof/Value Props Row */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            <div className="rounded-xl border border-border bg-card/60 p-5 space-y-2 shadow-xs">
              <div className="h-8 w-8 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mb-1">
                <Target className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-foreground">Interactive Skill Matrix Setup</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">We will help you sketch a trial competency grid matching your current tech stack.</p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-5 space-y-2 shadow-xs">
              <div className="h-8 w-8 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mb-1">
                <Users className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-foreground">Custom Role Calibration</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Configure assessment levels (Junior, Mid, Senior, Lead Architect) for your team.</p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-5 space-y-2 shadow-xs">
              <div className="h-8 w-8 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mb-1">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-foreground">Enterprise Security &amp; Compliance</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Review ISO compliance, anti-plagiarism mechanisms, and LMS integrations.</p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
