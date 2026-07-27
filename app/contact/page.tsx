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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      {/* HEADER */}
      <Navbar />

      {/* COMPACT HERO SECTION */}
      <section className="bg-brand-dark text-white py-10 sm:py-14 border-b border-border/20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Enterprise Support, Demo &amp; <span className="text-brand-yellow">Contact Us</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Have questions about custom skill matrices, enterprise security, or biometric integrations? Talk to our specialists.
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
                      <a href="mailto:info@skillmetrics.net" className="hover:text-brand-red transition-colors">info@skillmetrics.net</a>
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
                      <span>UK Office</span>
                      <Badge variant="outline" className="text-[10px] rounded-sm py-0 font-normal">Global HQ</Badge>
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      Flat-3, Farraline Court Strothers Lane, Inverness, IV11PN, UK
                    </p>
                    <p className="text-xs text-foreground font-semibold mt-2 flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-brand-yellow" />
                      <a href="tel:+447438895016" className="hover:underline">+44 743 889 5016</a>
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
                      <span>India Office</span>
                      <Badge variant="outline" className="text-[10px] rounded-sm py-0 font-normal">R&amp;D Center</Badge>
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      5th, 3rd floor, Sadashiv Motkari Complex, Sadashiv Nagar, Opp Sagar Sweets, Govind Nagar, Nashik – 422009
                    </p>
                    <div className="text-xs text-foreground font-semibold mt-2 space-y-1">
                      <p className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-brand-red" />
                        <a href="tel:+917720086663" className="hover:underline">+91 77200 86663</a>
                        <span className="text-muted-foreground">/</span>
                        <a href="tel:+919373133117" className="hover:underline">+91 93731 33117</a>
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
                    <p className="text-sm text-muted-foreground mt-0.5">Monday – Friday: 9:00 AM – 7:00 PM (IST / GMT)</p>
                    <p className="text-xs text-emerald-600 font-bold mt-1">24/7 SLA Support for Enterprise Tier</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-sm bg-muted/40 border border-border/80 space-y-3">
                <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                  <ShieldCheck className="h-5 w-5 text-brand-yellow" />
                  Enterprise Grade Security &amp; Audits
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  ISO 27001 &amp; SOC-2 Type II certified. All competency assessments &amp; biometric data encrypted via AES-256 with optional dedicated VPC deployment.
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
                  <h3 className="text-2xl font-extrabold text-foreground">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Our enterprise specialist will contact you at your email address within 2 hours.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4 font-bold">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold text-foreground tracking-tight">Send Us a Message</h3>
                    <p className="text-xs text-muted-foreground">Fill out the details below and we’ll get back to you immediately.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <Input id="contact-name" placeholder="John Doe" required className="h-11 rounded-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Work Email *</Label>
                      <Input id="contact-email" type="email" placeholder="john@company.com" required className="h-11 rounded-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number *</Label>
                      <Input id="contact-phone" type="tel" placeholder="+91 98765 43210" required className="h-11 rounded-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-company">Company Name</Label>
                      <Input id="contact-company" placeholder="Acme Engineering" className="h-11 rounded-sm" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">How can we help? *</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us about your skill matrix needs, team goals, or biometric / HR system integration..."
                      rows={5}
                      required
                      className="resize-none rounded-sm"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full font-bold rounded-sm cursor-pointer">
                    Submit Inquiry <Send className="ml-2 h-4 w-4" />
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
