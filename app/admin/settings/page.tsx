"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Settings,
  Save,
  Loader2,
  CheckCircle,
  AlertCircle,
  Globe,
  Search,
  ArrowRight,
  Bell,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  BarChart3,
  Bot,
  Upload
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function SiteSettingsStudioPage() {
  const [siteSettings, setSiteSettings] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const fetchSiteSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/settings/site");
      const data = await res.json();
      if (data.success) setSiteSettings(data.data || {});
    } catch {
      showNotification("error", "Failed to load site settings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSiteSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/settings/site", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(siteSettings),
      });
      const data = await res.json();
      if (data.success) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("skillmetrics_site_settings");
          localStorage.setItem("skillmetrics_updated_timestamp", Date.now().toString());
          window.dispatchEvent(new Event("site-settings-updated"));
        }
        showNotification("success", "Global SEO & site settings saved successfully!");
        fetchSiteSettings();
      } else {
        showNotification("error", data.error || "Failed to save settings");
      }
    } catch {
      showNotification("error", "Network error saving site settings");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="h-[50vh] flex flex-col items-center justify-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-brand-red" />
        <p className="text-xs text-slate-500 font-medium">Loading SEO &amp; site settings...</p>
      </div>
    );
  }

  const metaTitle =
    siteSettings.meta_title ||
    "Skill Management & Training | Competency-Based System | SkillMetrics";
  const metaDesc =
    siteSettings.meta_description ||
    "India's #1 Skill Management Software. Automate workforce skill matrices, benchmark role competencies, and evaluate candidate capabilities with AI assessments.";
  const siteUrl = siteSettings.site_url || "https://skillmetrics.net";

  const titleLength = metaTitle.length;
  const descLength = metaDesc.length;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {notification && (
        <div
          className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-2xl transition-all duration-300 ${
            notification.type === "success"
              ? "bg-white border-emerald-200 text-emerald-600 shadow-md"
              : "bg-white border-brand-red/20 text-brand-red shadow-md"
          }`}
        >
          {notification.type === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <span className="text-xs font-bold">{notification.message}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Search className="h-5 w-5 text-brand-red" /> Global SEO &amp; Search Engine Optimization
          </h2>
          <p className="text-xs text-slate-500">
            Control search engine metadata, Google indexing, AI crawler permissions, and site analytics
          </p>
        </div>
        <Button
          onClick={handleSave}
          disabled={submitting}
          className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm shadow-md cursor-pointer shrink-0"
        >
          {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
          Save All Settings
        </Button>
      </div>

      {/* Pages Redirect Banner */}
      <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Globe className="h-5 w-5 text-amber-700 shrink-0" />
          <div>
            <p className="text-xs font-bold text-slate-900">Looking to edit Home Page content &amp; sections?</p>
            <p className="text-[11px] text-slate-600">
              Hero headlines, feature cards, and section text are managed directly in the Pages Editor.
            </p>
          </div>
        </div>
        <Link href="/admin/pages">
          <Button
            variant="outline"
            size="sm"
            className="text-xs font-bold border-amber-300 text-amber-900 hover:bg-amber-100 gap-1 rounded-md"
          >
            Go to Pages Editor <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Live Google Snippet Interactive Preview */}
        <Card className="bg-white border-slate-200 shadow-sm overflow-hidden">
          <CardHeader className="border-b border-slate-100 px-6 py-4 bg-slate-50/50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" /> Live Google Search Snippet Preview
              </CardTitle>
              <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                Google &amp; AI Rich Snippet
              </span>
            </div>
            <CardDescription className="text-xs text-slate-500">
              Real-time preview of how your website appears on Google search results &amp; AI answer cards
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1 font-sans">
              <div className="flex items-center gap-2 text-[12px] text-slate-700">
                <div className="h-4 w-4 rounded-full bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-600">
                  S
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-slate-900">SkillMetrics</span>
                  <span className="text-slate-400">›</span>
                  <span className="text-slate-500 truncate max-w-[280px]">{siteUrl}</span>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-blue-700 hover:underline cursor-pointer line-clamp-1">
                {metaTitle}
              </h3>
              <p className="text-xs text-slate-600 line-clamp-2 leading-normal pt-0.5">{metaDesc}</p>
            </div>
          </CardContent>
        </Card>

        {/* Global SEO Settings */}
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardHeader className="border-b border-slate-100 px-6 py-4">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Search className="h-4 w-4 text-brand-red" /> Search Engine Optimization (SEO &amp; GEO)
            </CardTitle>
            <CardDescription className="text-xs text-slate-500">
              Configure meta tags, keywords, canonical URLs, and indexing controls
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {/* Meta Title */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label className="text-xs text-slate-700 font-bold">Meta Title (Google &amp; Social Header)</Label>
                <span
                  className={`text-[11px] font-mono ${
                    titleLength > 60 ? "text-amber-600 font-bold" : "text-slate-400"
                  }`}
                >
                  {titleLength} / 60 chars {titleLength > 60 && "(slightly long)"}
                </span>
              </div>
              <Input
                value={siteSettings.meta_title || ""}
                onChange={(e) => setSiteSettings({ ...siteSettings, meta_title: e.target.value })}
                placeholder="Skill Management & Training | Competency-Based System | SkillMetrics"
                className="bg-white border-slate-200 text-slate-900 text-xs h-9"
              />
            </div>

            {/* Meta Description */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label className="text-xs text-slate-700 font-bold">Meta Description</Label>
                <span
                  className={`text-[11px] font-mono ${
                    descLength > 160 ? "text-amber-600 font-bold" : "text-slate-400"
                  }`}
                >
                  {descLength} / 160 chars {descLength > 160 && "(slightly long)"}
                </span>
              </div>
              <Textarea
                value={siteSettings.meta_description || ""}
                onChange={(e) => setSiteSettings({ ...siteSettings, meta_description: e.target.value })}
                placeholder="India's #1 Skill Management Software. Automate workforce skill matrices..."
                className="bg-white border-slate-200 text-slate-900 text-xs min-h-[75px]"
              />
            </div>

            {/* Target Keywords */}
            <div className="space-y-1.5">
              <Label className="text-xs text-slate-700 font-bold">Target SEO Keywords (Comma Separated)</Label>
              <Input
                value={siteSettings.keywords || ""}
                onChange={(e) => setSiteSettings({ ...siteSettings, keywords: e.target.value })}
                placeholder="Skill Matrix Software, Competency Mapping, Employee Skill Tracking, AI Assessments"
                className="bg-white border-slate-200 text-slate-900 text-xs h-9"
              />
              <p className="text-[11px] text-slate-500">
                Include primary terms that your target engineering leaders &amp; recruiters search for.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Site Canonical URL */}
              <div className="space-y-1.5">
                <Label className="text-xs text-slate-700 font-bold">Canonical Base URL</Label>
                <Input
                  value={siteSettings.site_url || ""}
                  onChange={(e) => setSiteSettings({ ...siteSettings, site_url: e.target.value })}
                  placeholder="https://skillmetrics.net"
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>

              {/* Allow Indexing Switch */}
              <div className="space-y-1.5 flex flex-col justify-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <Bot className="h-3.5 w-3.5 text-emerald-600" /> Allow Search Engine &amp; AI Indexing
                    </Label>
                    <p className="text-[10px] text-slate-500">Enable Google, Bing, ChatGPT &amp; Claude bots</p>
                  </div>
                  <Switch
                    checked={siteSettings.allow_indexing ?? true}
                    onCheckedChange={(checked) => setSiteSettings({ ...siteSettings, allow_indexing: checked })}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verification & Analytics */}
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardHeader className="border-b border-slate-100 px-6 py-4">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" /> Webmaster Verification &amp; Analytics
            </CardTitle>
            <CardDescription className="text-xs text-slate-500">
              Integrate Google Search Console and Google Analytics tracking
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Google Site Verification Code</Label>
                <Input
                  value={siteSettings.google_site_verification || ""}
                  onChange={(e) => setSiteSettings({ ...siteSettings, google_site_verification: e.target.value })}
                  placeholder="e.g. google-site-verification=abc123xyz..."
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
                <p className="text-[10px] text-slate-400">Found in Google Search Console HTML Tag verification option</p>
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold flex items-center gap-1">
                  <BarChart3 className="h-3.5 w-3.5 text-blue-600" /> Google Analytics ID (GA4)
                </Label>
                <Input
                  value={siteSettings.google_analytics_id || ""}
                  onChange={(e) => setSiteSettings({ ...siteSettings, google_analytics_id: e.target.value })}
                  placeholder="e.g. G-XXXXXXXXXX"
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
                <p className="text-[10px] text-slate-400">Measurement ID for tracking website traffic</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Basic App Information & Announcement Bar */}
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardHeader className="border-b border-slate-100 px-6 py-4">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Bell className="h-4 w-4 text-amber-500" /> Application Links &amp; Announcement Bar
            </CardTitle>
            <CardDescription className="text-xs text-slate-500">
              Configure demo booking links and top announcement banners
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Calendly Booking Link</Label>
                <Input
                  value={siteSettings.calendly_url || ""}
                  onChange={(e) => setSiteSettings({ ...siteSettings, calendly_url: e.target.value })}
                  placeholder="https://calendly.com/..."
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Default Hero CTA Text</Label>
                <Input
                  value={siteSettings.hero_cta_text || ""}
                  onChange={(e) => setSiteSettings({ ...siteSettings, hero_cta_text: e.target.value })}
                  placeholder="Book a Demo"
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
            </div>

            {/* Hero Image Field */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <Label className="text-xs text-slate-700 font-bold">
                Hero Section Image <span className="text-brand-red font-normal">(URL or File Upload)</span>
              </Label>
              <div className="flex gap-2">
                <Input
                  value={siteSettings.hero_image || ""}
                  onChange={(e) => setSiteSettings({ ...siteSettings, hero_image: e.target.value })}
                  placeholder="/hero.png or https://..."
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9 flex-1"
                />
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const formData = new FormData();
                      formData.append("file", file);
                      try {
                        const res = await fetch("/api/upload", { method: "POST", body: formData });
                        const data = await res.json();
                        if (data.url) {
                          setSiteSettings((prev: any) => ({ ...prev, hero_image: data.url }));
                          showNotification("success", "Hero image uploaded!");
                        }
                      } catch {
                        showNotification("error", "Upload failed");
                      }
                      e.target.value = "";
                    }}
                  />
                  <Button type="button" variant="outline" size="sm" className="text-xs gap-1 h-9 rounded-sm">
                    <Upload className="h-3 w-3" /> Upload Image
                  </Button>
                </div>
              </div>
              {(siteSettings.hero_image || "/hero.png") && (
                <div className="relative w-full max-w-xs h-32 rounded-lg border border-slate-200 overflow-hidden bg-slate-50 mt-2">
                  <img
                    src={siteSettings.hero_image || "/hero.png"}
                    alt="Hero preview"
                    className="w-full h-full object-contain p-2"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <Label className="text-xs font-bold text-slate-800">Top Announcement Banner Bar</Label>
                <Switch
                  checked={siteSettings.banner_enabled || false}
                  onCheckedChange={(checked) => setSiteSettings({ ...siteSettings, banner_enabled: checked })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Banner Text</Label>
                  <Input
                    value={siteSettings.banner_text || ""}
                    onChange={(e) => setSiteSettings({ ...siteSettings, banner_text: e.target.value })}
                    placeholder="🚀 New ISO 27001 Compliance Module released!"
                    className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Banner Link Target</Label>
                  <Input
                    value={siteSettings.banner_link || ""}
                    onChange={(e) => setSiteSettings({ ...siteSettings, banner_link: e.target.value })}
                    placeholder="/resources or https://..."
                    className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Save Bar */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <Button
            type="submit"
            disabled={submitting}
            className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-10 px-6 gap-2 rounded-md shadow-lg cursor-pointer"
          >
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            Save All Settings
          </Button>
        </div>
      </form>
    </div>
  );
}
