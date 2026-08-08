"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Loader2,
  CheckCircle,
  AlertCircle,
  Upload,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ALL_PAGES } from "@/lib/page-definitions";

export default function SinglePageEditorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const pageDef = ALL_PAGES.find((p) => p.slug === slug);

  const [sectionData, setSectionData] = useState<Record<string, any>>({});
  const [savingSection, setSavingSection] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  useEffect(() => {
    if (slug) {
      fetchPageContent();
    }
  }, [slug]);

  const fetchPageContent = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/pages?page=${slug}`);
      const data = await res.json();
      if (data.success && data.data.length > 0) {
        const sectionMap: Record<string, any> = {};
        data.data.forEach((section: any) => {
          sectionMap[section.section_id] = section.content_json || {};
        });
        setSectionData(sectionMap);
      }
    } catch (err) {
      console.error("Failed to fetch page sections:", err);
      showNotification("error", "Failed to load page content");
    } finally {
      setLoading(false);
    }
  };

  const updateField = (sectionId: string, fieldKey: string, value: string) => {
    setSectionData((prev) => ({
      ...prev,
      [sectionId]: {
        ...(prev[sectionId] || {}),
        [fieldKey]: value,
      },
    }));
  };

  const handleSaveSection = async (sectionId: string, sectionName: string) => {
    if (!pageDef) return;
    setSavingSection(sectionId);
    try {
      const content = sectionData[sectionId] || {};
      const res = await fetch("/api/admin/pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          page_slug: pageDef.slug,
          page_name: pageDef.name,
          section_id: sectionId,
          section_name: sectionName,
          content_json: content,
        }),
      });
      const data = await res.json();
      if (data.success) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("skillmetrics_site_settings");
          localStorage.setItem("skillmetrics_updated_timestamp", Date.now().toString());
          window.dispatchEvent(new Event("site-settings-updated"));
        }
        showNotification("success", `"${sectionName}" saved successfully`);
      } else {
        showNotification("error", data.error || "Failed to save section");
      }
    } catch {
      showNotification("error", "Network error saving section");
    } finally {
      setSavingSection(null);
    }
  };

  if (!pageDef) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center space-y-4">
        <AlertCircle className="h-10 w-10 text-brand-red mx-auto" />
        <h2 className="text-lg font-bold text-slate-900">Page Not Found</h2>
        <p className="text-xs text-slate-500">The requested page slug &quot;{slug}&quot; is not registered.</p>
        <Link href="/admin/pages">
          <Button variant="outline" size="sm" className="text-xs font-bold gap-1.5">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Pages
          </Button>
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="h-[50vh] flex flex-col items-center justify-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-brand-red" />
        <p className="text-xs text-slate-500">Loading {pageDef.name} content...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Toast Notification */}
      {notification && (
        <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-2xl transition-all duration-300 ${notification.type === "success"
          ? "bg-white border-emerald-200 text-emerald-600 shadow-md"
          : "bg-white border-brand-red/20 text-brand-red shadow-md"
          }`}>
          {notification.type === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <span className="text-xs font-bold">{notification.message}</span>
        </div>
      )}

      {/* Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <Link href="/admin/pages">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-500 hover:text-slate-900 text-xs rounded-sm gap-1"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Pages
            </Button>
          </Link>
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              {pageDef.name} Editor
            </h2>
            <p className="text-[10px] text-slate-500">
              Route: <span className="font-mono bg-slate-100 px-1 py-0.5 rounded text-[9px]">{pageDef.path}</span> — {pageDef.sections.length} editable sections
            </p>
          </div>
        </div>
        <a href={pageDef.path} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="text-xs gap-1.5 rounded-sm">
            <Eye className="h-3.5 w-3.5" /> Preview Page
          </Button>
        </a>
      </div>

      {/* Sections List */}
      <div className="space-y-6">
        {pageDef.sections.map((section) => {
          const currentContent = sectionData[section.id] || {};
          const isSaving = savingSection === section.id;

          return (
            <Card key={section.id} className="bg-white border-slate-200 shadow-sm">
              <CardHeader className="border-b border-slate-100 px-6 py-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-bold text-slate-800">{section.name}</CardTitle>
                  <Badge variant="outline" className="text-[9px] font-mono">{section.id}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {section.fields.map((field) => (
                  <div key={field.key} className="space-y-2">
                    <Label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      {field.label}
                      {field.type === "image" && (
                        <span className="ml-1.5 text-brand-red font-normal normal-case">(image URL or upload)</span>
                      )}
                    </Label>

                    {field.type === "text" && (
                      <Input
                        value={currentContent[field.key] || ""}
                        onChange={(e) => updateField(section.id, field.key, e.target.value)}
                        placeholder={`Enter ${field.label.toLowerCase()}...`}
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                    )}

                    {field.type === "textarea" && (
                      <Textarea
                        value={currentContent[field.key] || ""}
                        onChange={(e) => updateField(section.id, field.key, e.target.value)}
                        placeholder={`Enter ${field.label.toLowerCase()}...`}
                        className="bg-white border-slate-200 text-slate-900 text-xs min-h-[80px] focus-visible:ring-brand-red"
                        rows={3}
                      />
                    )}

                    {field.type === "image" && (
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <Input
                            value={currentContent[field.key] || ""}
                            onChange={(e) => updateField(section.id, field.key, e.target.value)}
                            placeholder="/path/to/image.png or https://..."
                            className="bg-white border-slate-200 text-slate-900 text-xs h-9 flex-1 focus-visible:ring-brand-red"
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
                                    updateField(section.id, field.key, data.url);
                                    showNotification("success", "Image uploaded!");
                                  }
                                } catch {
                                  showNotification("error", "Upload failed");
                                }
                                e.target.value = "";
                              }}
                            />
                            <Button type="button" variant="outline" size="sm" className="text-xs gap-1 h-9 rounded-sm">
                              <Upload className="h-3 w-3" /> Upload
                            </Button>
                          </div>
                        </div>
                        {currentContent[field.key] && (
                          <div className="relative w-full max-w-xs h-32 rounded-lg border border-slate-200 overflow-hidden bg-slate-50">
                            <img
                              src={currentContent[field.key]}
                              alt={field.label}
                              className="w-full h-full object-cover"
                              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <Button
                    type="button"
                    disabled={isSaving}
                    onClick={() => handleSaveSection(section.id, section.name)}
                    className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm"
                  >
                    {isSaving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                    Save {section.name}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
