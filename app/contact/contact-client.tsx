"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  CheckCircle2,
  Send,
  Building2,
  Globe,
  ShieldCheck,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { ContactPageData } from "@/lib/sanity/types";

// Default values (fallback if Sanity data is empty)
const defaults = {
  heroTitle: "Enterprise Support, Demo & Contact Us",
  heroSubtitle:
    "Have questions about custom skill matrices, enterprise security, or biometric integrations? Talk to our specialists.",
  email: "info@skillmetrics.net",
  ukOfficeLabel: "UK Office",
  ukOfficeBadge: "Global HQ",
  ukOfficeAddress:
    "Flat-3, Farraline Court Strothers Lane, Inverness, IV11PN, UK",
  ukOfficePhone: "+44 743 889 5016",
  indiaOfficeLabel: "India Office",
  indiaOfficeBadge: "R&D Center",
  indiaOfficeAddress:
    "5th, 3rd floor, Sadashiv Motkari Complex, Sadashiv Nagar, Opp Sagar Sweets, Govind Nagar, Nashik – 422009",
  indiaOfficePhone1: "+91 77200 86663",
  indiaOfficePhone2: "+91 93731 33117",
  operatingHours: "Monday – Friday: 9:00 AM – 7:00 PM (IST / GMT)",
  slaNote: "24/7 SLA Support for Enterprise Tier",
  securityTitle: "Enterprise Grade Security & Audits",
  securityDescription:
    "ISO 27001 & SOC-2 Type II certified. All competency assessments & biometric data encrypted via AES-256 with optional dedicated VPC deployment.",
  formTitle: "Send Us a Message",
  formSubtitle:
    "Fill out the details below and we'll get back to you immediately.",
  successMessage: "Message Sent Successfully!",
  successDescription:
    "Thank you for reaching out. Our enterprise specialist will contact you at your email address within 2 hours.",
};

function v(sanityVal: string | undefined, fallback: string): string {
  return sanityVal && sanityVal.trim() ? sanityVal : fallback;
}

export function ContactPageClient({ settings }: { settings: ContactPageData }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Failed to submit message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to submit inquiry. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      {/* HEADER */}
      <Navbar />

      {/* COMPACT HERO SECTION */}
      <section className="bg-brand-dark text-white py-10 sm:py-14 border-b border-border/20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            {v(settings.heroTitle, defaults.heroTitle).split("Contact Us").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <React.Fragment key={i}>
                  {part}
                  <span className="text-brand-yellow">Contact Us</span>
                </React.Fragment>
              ) : (
                <React.Fragment key={i}>{part}</React.Fragment>
              )
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {v(settings.heroSubtitle, defaults.heroSubtitle)}
          </p>
        </div>
      </section>

      {/* CONTACT FORM & INFO SECTION */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background flex-1">
        <div className="container max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Side: Contact Information & Office Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Contact Information
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our team responds to all enterprise inquiries within 2 business hours.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email Card */}
                <div className="flex items-start gap-4 p-4 rounded-sm bg-muted/30 border border-border/60">
                  <div className="h-10 w-10 rounded-sm bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 border border-brand-red/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-foreground">Official E-mail</h4>
                    <p className="text-sm text-muted-foreground mt-0.5 font-medium">
                      <a href={`mailto:${v(settings.email, defaults.email)}`} className="hover:text-brand-red transition-colors">
                        {v(settings.email, defaults.email)}
                      </a>
                    </p>
                  </div>
                </div>

                {/* UK Office */}
                <div className="flex items-start gap-4 p-4 rounded-sm bg-muted/30 border border-border/60">
                  <div className="h-10 w-10 rounded-sm bg-brand-yellow/10 text-brand-yellow flex items-center justify-center shrink-0 border border-brand-yellow/20">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-foreground flex items-center gap-2">
                      <span>{v(settings.ukOfficeLabel, defaults.ukOfficeLabel)}</span>
                      <Badge variant="outline" className="text-[10px] rounded-sm py-0 font-normal">
                        {v(settings.ukOfficeBadge, defaults.ukOfficeBadge)}
                      </Badge>
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {v(settings.ukOfficeAddress, defaults.ukOfficeAddress)}
                    </p>
                    <p className="text-xs text-foreground font-semibold mt-2 flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-brand-yellow" />
                      <a href={`tel:${v(settings.ukOfficePhone, defaults.ukOfficePhone).replace(/\s/g, "")}`} className="hover:underline">
                        {v(settings.ukOfficePhone, defaults.ukOfficePhone)}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Indian Office */}
                <div className="flex items-start gap-4 p-4 rounded-sm bg-muted/30 border border-border/60">
                  <div className="h-10 w-10 rounded-sm bg-foreground/10 text-foreground flex items-center justify-center shrink-0 border border-foreground/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-foreground flex items-center gap-2">
                      <span>{v(settings.indiaOfficeLabel, defaults.indiaOfficeLabel)}</span>
                      <Badge variant="outline" className="text-[10px] rounded-sm py-0 font-normal">
                        {v(settings.indiaOfficeBadge, defaults.indiaOfficeBadge)}
                      </Badge>
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {v(settings.indiaOfficeAddress, defaults.indiaOfficeAddress)}
                    </p>
                    <div className="text-xs text-foreground font-semibold mt-2 space-y-1">
                      <p className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-brand-red" />
                        <a href={`tel:${v(settings.indiaOfficePhone1, defaults.indiaOfficePhone1).replace(/\s/g, "")}`} className="hover:underline">
                          {v(settings.indiaOfficePhone1, defaults.indiaOfficePhone1)}
                        </a>
                        <span className="text-muted-foreground">/</span>
                        <a href={`tel:${v(settings.indiaOfficePhone2, defaults.indiaOfficePhone2).replace(/\s/g, "")}`} className="hover:underline">
                          {v(settings.indiaOfficePhone2, defaults.indiaOfficePhone2)}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-4 rounded-sm bg-muted/30 border border-border/60">
                  <div className="h-10 w-10 rounded-sm bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-foreground">Operating Hours</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {v(settings.operatingHours, defaults.operatingHours)}
                    </p>
                    <p className="text-xs text-emerald-600 font-bold mt-1">
                      {v(settings.slaNote, defaults.slaNote)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-sm bg-muted/40 border border-border/80 space-y-3">
                <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                  <ShieldCheck className="h-5 w-5 text-brand-yellow" />
                  {v(settings.securityTitle, defaults.securityTitle)}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {v(settings.securityDescription, defaults.securityDescription)}
                </p>
              </div>
            </div>

            {/* Right Side: Interactive Form */}
            <div className="lg:col-span-7 bg-card border border-border rounded-sm p-6 sm:p-10 shadow-xs">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground">
                    {v(settings.successMessage, defaults.successMessage)}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                    {v(settings.successDescription, defaults.successDescription)}
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4 font-bold">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                      {v(settings.formTitle, defaults.formTitle)}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {v(settings.formSubtitle, defaults.formSubtitle)}
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 text-xs font-semibold text-brand-red bg-brand-red/10 border border-brand-red/20 rounded-sm animate-shake">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <Input id="contact-name" name="name" placeholder="John Doe" required className="h-11 rounded-sm" disabled={loading} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Work Email *</Label>
                      <Input id="contact-email" name="email" type="email" placeholder="john@company.com" required className="h-11 rounded-sm" disabled={loading} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number *</Label>
                      <Input id="contact-phone" name="phone" type="tel" placeholder="+91 98765 43210" required className="h-11 rounded-sm" disabled={loading} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-company">Company Name</Label>
                      <Input id="contact-company" name="company" placeholder="Acme Engineering" className="h-11 rounded-sm" disabled={loading} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">How can we help? *</Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about your skill matrix needs, team goals, or biometric / HR system integration..."
                      rows={5}
                      required
                      className="resize-none rounded-sm"
                      disabled={loading}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full font-bold rounded-sm cursor-pointer" disabled={loading}>
                    {loading ? "Submitting Inquiry..." : "Submit Inquiry"} <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
