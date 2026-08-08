"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Save,
  Loader2,
  CheckCircle,
  AlertCircle,
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
    <div className="space-y-6 max-w-4xl mx-auto">
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
            <Mail className="h-5 w-5 text-brand-red" /> Contact Info &amp; Details
          </h2>
          <p className="text-xs text-slate-500">Update support email, phone numbers, address, and social links</p>
        </div>
        <Button onClick={handleSave} disabled={submitting} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm">
          {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
          Save Contact Info
        </Button>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <Card className="bg-white border-slate-200 shadow-sm">
          <CardHeader className="border-b border-slate-100 px-6 py-4">
            <CardTitle className="text-sm font-bold text-slate-800">Support &amp; Location Information</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Contact Email</Label>
                <Input
                  type="email"
                  value={contactSettings.email || ""}
                  onChange={(e) => setContactSettings({ ...contactSettings, email: e.target.value })}
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Phone Number</Label>
                <Input
                  value={contactSettings.phone || ""}
                  onChange={(e) => setContactSettings({ ...contactSettings, phone: e.target.value })}
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-slate-700 font-bold">Office Address</Label>
              <Textarea
                value={contactSettings.address || ""}
                onChange={(e) => setContactSettings({ ...contactSettings, address: e.target.value })}
                className="bg-white border-slate-200 text-slate-900 text-xs min-h-[60px]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">LinkedIn URL</Label>
                <Input
                  value={contactSettings.linkedin_url || ""}
                  onChange={(e) => setContactSettings({ ...contactSettings, linkedin_url: e.target.value })}
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Twitter / X URL</Label>
                <Input
                  value={contactSettings.twitter_url || ""}
                  onChange={(e) => setContactSettings({ ...contactSettings, twitter_url: e.target.value })}
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
