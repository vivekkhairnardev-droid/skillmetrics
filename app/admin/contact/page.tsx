"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Save,
  Loader2,
  CheckCircle,
  AlertCircle,
  Building2,
  ShieldCheck,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ContactSettingsStudioPage() {
  const [contactSettings, setContactSettings] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const fetchContactSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/settings/contact");
      const data = await res.json();
      if (data.success) setContactSettings(data.data || {});
    } catch {
      showNotification("error", "Failed to load contact settings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/settings/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactSettings),
      });
      const data = await res.json();
      if (data.success) {
        showNotification("success", "Contact settings saved successfully");
        fetchContactSettings();
      } else {
        showNotification("error", data.error || "Failed to save contact settings");
      }
    } catch {
      showNotification("error", "Network error saving contact settings");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="h-[50vh] flex flex-col items-center justify-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-brand-red" />
        <p className="text-xs text-slate-500">Loading contact info...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {notification && (
        <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-2xl transition-all duration-300 ${notification.type === "success"
          ? "bg-white border-emerald-200 text-emerald-600 shadow-md"
          : "bg-white border-brand-red/20 text-brand-red shadow-md"
          }`}>
          {notification.type === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <span className="text-xs font-bold">{notification.message}</span>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Mail className="h-5 w-5 text-brand-red" /> Contact Page Studio
          </h2>
          <p className="text-xs text-slate-500">Manage hero text, office addresses, phone numbers, security disclosures &amp; form details</p>
        </div>
        <Button onClick={handleSave} disabled={submitting} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm">
          {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
          Save Contact Info
        </Button>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* HERO SECTION CARD */}
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardHeader className="border-b border-slate-100 px-6 py-4">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-yellow" /> Contact Hero Section
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Label className="text-xs text-slate-700 font-bold">Hero Title</Label>
              <Input
                value={contactSettings.hero_title || ""}
                onChange={(e) => setContactSettings({ ...contactSettings, hero_title: e.target.value })}
                placeholder="Enterprise Support, Demo & Contact Us"
                className="bg-white border-slate-200 text-slate-900 text-xs h-9"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs text-slate-700 font-bold">Hero Subtitle</Label>
              <Textarea
                value={contactSettings.hero_subtitle || ""}
                onChange={(e) => setContactSettings({ ...contactSettings, hero_subtitle: e.target.value })}
                placeholder="Have questions about custom skill matrices, enterprise security..."
                className="bg-white border-slate-200 text-slate-900 text-xs min-h-[70px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* OFFICE & CONTACT DETAILS CARD */}
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardHeader className="border-b border-slate-100 px-6 py-4">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-brand-red" /> Support &amp; Office Locations
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <Label className="text-xs text-slate-700 font-bold">Official Support Email</Label>
              <Input
                type="email"
                value={contactSettings.email || ""}
                onChange={(e) => setContactSettings({ ...contactSettings, email: e.target.value })}
                placeholder="info@skillmetrics.net"
                className="bg-white border-slate-200 text-slate-900 text-xs h-9"
              />
            </div>

            {/* UK Office */}
            <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">UK Office Details</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-[11px] text-slate-600 font-bold">Label</Label>
                  <Input
                    value={contactSettings.uk_office_label || ""}
                    onChange={(e) => setContactSettings({ ...contactSettings, uk_office_label: e.target.value })}
                    placeholder="UK Office"
                    className="bg-white border-slate-200 text-slate-900 text-xs h-8"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] text-slate-600 font-bold">Badge</Label>
                  <Input
                    value={contactSettings.uk_office_badge || ""}
                    onChange={(e) => setContactSettings({ ...contactSettings, uk_office_badge: e.target.value })}
                    placeholder="Global HQ"
                    className="bg-white border-slate-200 text-slate-900 text-xs h-8"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-[11px] text-slate-600 font-bold">Address</Label>
                <Textarea
                  value={contactSettings.uk_office_address || ""}
                  onChange={(e) => setContactSettings({ ...contactSettings, uk_office_address: e.target.value })}
                  placeholder="Flat-3, Farraline Court Strothers Lane..."
                  className="bg-white border-slate-200 text-slate-900 text-xs min-h-[55px]"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-[11px] text-slate-600 font-bold">Phone</Label>
                <Input
                  value={contactSettings.uk_office_phone || ""}
                  onChange={(e) => setContactSettings({ ...contactSettings, uk_office_phone: e.target.value })}
                  placeholder="+44 743 889 5016"
                  className="bg-white border-slate-200 text-slate-900 text-xs h-8"
                />
              </div>
            </div>

            {/* India Office */}
            <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">India Office Details</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-[11px] text-slate-600 font-bold">Label</Label>
                  <Input
                    value={contactSettings.india_office_label || ""}
                    onChange={(e) => setContactSettings({ ...contactSettings, india_office_label: e.target.value })}
                    placeholder="India Office"
                    className="bg-white border-slate-200 text-slate-900 text-xs h-8"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] text-slate-600 font-bold">Badge</Label>
                  <Input
                    value={contactSettings.india_office_badge || ""}
                    onChange={(e) => setContactSettings({ ...contactSettings, india_office_badge: e.target.value })}
                    placeholder="R&D Center"
                    className="bg-white border-slate-200 text-slate-900 text-xs h-8"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-[11px] text-slate-600 font-bold">Address</Label>
                <Textarea
                  value={contactSettings.india_office_address || ""}
                  onChange={(e) => setContactSettings({ ...contactSettings, india_office_address: e.target.value })}
                  placeholder="5th, 3rd floor, Sadashiv Motkari Complex..."
                  className="bg-white border-slate-200 text-slate-900 text-xs min-h-[55px]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-[11px] text-slate-600 font-bold">Phone Line 1</Label>
                  <Input
                    value={contactSettings.india_office_phone1 || ""}
                    onChange={(e) => setContactSettings({ ...contactSettings, india_office_phone1: e.target.value })}
                    placeholder="+91 77200 86663"
                    className="bg-white border-slate-200 text-slate-900 text-xs h-8"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] text-slate-600 font-bold">Phone Line 2</Label>
                  <Input
                    value={contactSettings.india_office_phone2 || ""}
                    onChange={(e) => setContactSettings({ ...contactSettings, india_office_phone2: e.target.value })}
                    placeholder="+91 93731 33117"
                    className="bg-white border-slate-200 text-slate-900 text-xs h-8"
                  />
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Operating Hours</Label>
                <Input
                  value={contactSettings.operating_hours || ""}
                  onChange={(e) => setContactSettings({ ...contactSettings, operating_hours: e.target.value })}
                  placeholder="Monday – Friday: 9:00 AM – 7:00 PM"
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">SLA Support Note</Label>
                <Input
                  value={contactSettings.sla_note || ""}
                  onChange={(e) => setContactSettings({ ...contactSettings, sla_note: e.target.value })}
                  placeholder="24/7 SLA Support for Enterprise Tier"
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SECURITY CARD */}
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardHeader className="border-b border-slate-100 px-6 py-4">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" /> Enterprise Security Notice
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Label className="text-xs text-slate-700 font-bold">Security Box Title</Label>
              <Input
                value={contactSettings.security_title || ""}
                onChange={(e) => setContactSettings({ ...contactSettings, security_title: e.target.value })}
                placeholder="Enterprise Grade Security & Audits"
                className="bg-white border-slate-200 text-slate-900 text-xs h-9"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs text-slate-700 font-bold">Security Description</Label>
              <Textarea
                value={contactSettings.security_description || ""}
                onChange={(e) => setContactSettings({ ...contactSettings, security_description: e.target.value })}
                placeholder="ISO 27001 & SOC-2 Type II certified..."
                className="bg-white border-slate-200 text-slate-900 text-xs min-h-[70px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* FORM HEADINGS & SUCCESS MSG CARD */}
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardHeader className="border-b border-slate-100 px-6 py-4">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-brand-red" /> Contact Form Headings &amp; Confirmation
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Form Title</Label>
                <Input
                  value={contactSettings.form_title || ""}
                  onChange={(e) => setContactSettings({ ...contactSettings, form_title: e.target.value })}
                  placeholder="Send Us a Message"
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Form Subtitle</Label>
                <Input
                  value={contactSettings.form_subtitle || ""}
                  onChange={(e) => setContactSettings({ ...contactSettings, form_subtitle: e.target.value })}
                  placeholder="Fill out the details below..."
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Success Message Title</Label>
                <Input
                  value={contactSettings.success_message || ""}
                  onChange={(e) => setContactSettings({ ...contactSettings, success_message: e.target.value })}
                  placeholder="Message Sent Successfully!"
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Success Description</Label>
                <Textarea
                  value={contactSettings.success_description || ""}
                  onChange={(e) => setContactSettings({ ...contactSettings, success_description: e.target.value })}
                  placeholder="Thank you for reaching out..."
                  className="bg-white border-slate-200 text-slate-900 text-xs min-h-[60px]"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end pt-2">
          <Button type="submit" disabled={submitting} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-10 px-6 gap-1.5 rounded-sm">
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            Save All Contact Settings
          </Button>
        </div>
      </form>
    </div>
  );
}
