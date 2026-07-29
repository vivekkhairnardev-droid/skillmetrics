"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Calendar as CalendarIcon, FormInput, ExternalLink, Loader2 } from "lucide-react";
import { useSiteSettings } from "@/components/site-settings-context";

interface BookDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  calendlyUrl?: string;
}

export function BookDemoModal({ open, onOpenChange, calendlyUrl }: BookDemoModalProps) {
  const { settings } = useSiteSettings();
  const [activeTab, setActiveTab] = useState<"calendly" | "form">("calendly");
  const [submitted, setSubmitted] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Resolution order for Calendly URL:
  // 1. prop passed directly
  // 2. process.env.NEXT_PUBLIC_CALENDLY_URL
  // 3. settings.calendlyUrl from Sanity/Context
  // 4. Default demo link fallback
  const targetCalendlyUrl =
    calendlyUrl ||
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    (settings as any)?.calendlyUrl ||
    "https://calendly.com/vivekkhairnar-dev/new-meeting"; // Default Calendly Link

  // Clean URL to ensure iframe friendliness
  const formattedCalendlyUrl = targetCalendlyUrl.includes("?")
    ? `${targetCalendlyUrl}&embed_type=Inline&hide_gdpr_banner=1`
    : `${targetCalendlyUrl}?embed_type=Inline&hide_gdpr_banner=1`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      requirement: formData.get("requirement") as string,
    };

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to submit demo request. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col p-0 border-border bg-card shadow-2xl rounded-2xl">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 pb-3 border-b border-border/80 bg-muted/20">
          <div className="flex items-center justify-between">
            <DialogHeader className="space-y-1 text-left">
              <DialogTitle className="text-xl sm:text-2xl font-black text-foreground flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-brand-red" />
                Schedule a Live SkillMetrics Demo
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
                Select a convenient slot on our live calendar or submit a quick request.
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Toggle Tabs (Calendly vs Form) */}
          <div className="flex items-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab("calendly")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === "calendly"
                  ? "bg-brand-red text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
            >
              <CalendarIcon className="h-3.5 w-3.5" />
              Instant Calendar Booking
            </button>
            <button
              onClick={() => setActiveTab("form")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === "form"
                  ? "bg-brand-red text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
            >
              <FormInput className="h-3.5 w-3.5" />
              Direct Request Form
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="flex-1 overflow-y-auto min-h-[460px] sm:min-h-[520px] relative bg-background">
          {activeTab === "calendly" ? (
            <div className="w-full h-full relative flex flex-col items-center justify-center min-h-[500px]">
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 z-10 space-y-3">
                  <Loader2 className="h-8 w-8 text-brand-red animate-spin" />
                  <p className="text-xs font-bold text-muted-foreground">Loading Calendly Calendar...</p>
                </div>
              )}

              <iframe
                src={formattedCalendlyUrl}
                width="100%"
                height="560px"
                frameBorder="0"
                onLoad={() => setIframeLoading(false)}
                title="Select a Date & Time - Calendly"
                className="w-full min-h-[560px] border-none rounded-b-2xl"
              />

              <div className="p-3 bg-muted/40 text-center w-full border-t border-border flex items-center justify-between text-[11px] text-muted-foreground px-5">
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
                  <h3 className="text-xl font-extrabold text-foreground">Demo Request Submitted!</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Our technical engineering team will reach out to you within 24 hours with custom access.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
                  {error && (
                    <div className="p-2.5 text-[11px] font-semibold text-brand-red bg-brand-red/10 border border-brand-red/20 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold">Full Name *</Label>
                    <Input name="name" placeholder="e.g. Sarah Jenkins" required className="text-xs py-2" disabled={loading} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold">Work Email *</Label>
                      <Input name="email" type="email" placeholder="sarah@company.com" required className="text-xs py-2" disabled={loading} />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold">Company / Organization *</Label>
                      <Input name="company" placeholder="Acme Inc." required className="text-xs py-2" disabled={loading} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold">Primary Goal / Requirement</Label>
                    <Input name="requirement" placeholder="e.g. Automate Skill Matrix, ISO Audit Compliance" className="text-xs py-2" disabled={loading} />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-extrabold text-xs py-3 shadow-brand-red cursor-pointer"
                    >
                      {loading ? "Submitting..." : "Submit Demo Request"} <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
