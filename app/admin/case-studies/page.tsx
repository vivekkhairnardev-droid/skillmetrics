"use client";

import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Plus,
  Trash2,
  Edit,
  ArrowLeft,
  Save,
  Loader2,
  CheckCircle,
  AlertCircle,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CaseStudiesStudioPage() {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const [caseForm, setCaseForm] = useState({
    id: "",
    title: "",
    slug: "",
    clientName: "",
    industry: "",
    companySize: "",
    challenge: "",
    solution: "",
    impactSummary: "",
    coverImage: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    results: [
      { metric: "", label: "" },
      { metric: "", label: "" },
      { metric: "", label: "" },
    ],
  });

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const fetchCaseStudies = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/case-studies");
      const data = await res.json();
      if (data.success) setCaseStudies(data.data);
    } catch {
      showNotification("error", "Failed to fetch case studies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) {
        setCaseForm(prev => ({ ...prev, coverImage: data.url }));
        showNotification("success", "Image uploaded successfully");
      }
    } catch {
      showNotification("error", "Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const startEdit = (c: any = null) => {
    if (c) {
      setCaseForm({
        id: c.id,
        title: c.title || "",
        slug: c.slug || "",
        clientName: c.client_name || "",
        industry: c.industry || "",
        companySize: c.company_size || "",
        challenge: c.challenge || "",
        solution: c.solution || "",
        impactSummary: c.impact_summary || "",
        coverImage: c.cover_image || "",
        seoTitle: c.seo_title || "",
        seoDescription: c.seo_description || "",
        seoKeywords: c.seo_keywords || "",
        results: c.results?.length === 3 ? c.results : [
          { metric: c.results?.[0]?.metric || "", label: c.results?.[0]?.label || "" },
          { metric: c.results?.[1]?.metric || "", label: c.results?.[1]?.label || "" },
          { metric: c.results?.[2]?.metric || "", label: c.results?.[2]?.label || "" },
        ],
      });
    } else {
      setCaseForm({
        id: "",
        title: "",
        slug: "",
        clientName: "",
        industry: "Manufacturing",
        companySize: "1,000+ employees",
        challenge: "",
        solution: "",
        impactSummary: "",
        coverImage: "",
        seoTitle: "",
        seoDescription: "",
        seoKeywords: "",
        results: [
          { metric: "85%", label: "Skill Audit Completion" },
          { metric: "3.2x", label: "Faster Assessment" },
          { metric: "$120k", label: "Annual Cost Saving" },
        ],
      });
    }
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this case study?")) return;
    try {
      const res = await fetch(`/api/admin/case-studies?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        showNotification("success", "Case study deleted");
        fetchCaseStudies();
      } else {
        showNotification("error", data.error || "Failed to delete");
      }
    } catch {
      showNotification("error", "Error deleting case study");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const method = caseForm.id ? "PUT" : "POST";
      const res = await fetch("/api/admin/case-studies", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(caseForm),
      });
      const data = await res.json();
      if (data.success) {
        showNotification("success", `Case study ${caseForm.id ? "updated" : "created"} successfully`);
        setIsEditing(false);
        fetchCaseStudies();
      } else {
        showNotification("error", data.error || "Failed to save case study");
      }
    } catch {
      showNotification("error", "Network error saving case study");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {notification && (
        <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-2xl transition-all duration-300 ${notification.type === "success"
          ? "bg-white border-emerald-200 text-emerald-600 shadow-md"
          : "bg-white border-brand-red/20 text-brand-red shadow-md"
          }`}>
          {notification.type === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <span className="text-xs font-bold">{notification.message}</span>
        </div>
      )}

      {isEditing ? (
        /* ========== EDIT / CREATE FORM ========== */
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)} className="text-slate-500 hover:text-slate-900 text-xs rounded-sm gap-1">
                <ArrowLeft className="h-3.5 w-3.5" /> Back to Case Studies
              </Button>
              <h2 className="text-lg font-bold text-slate-900">{caseForm.id ? "Edit Case Study" : "Create New Case Study"}</h2>
            </div>
            <Button onClick={handleSave} disabled={submitting} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm">
              {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              Save Case Study
            </Button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <Card className="bg-white border-slate-200 shadow-sm p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Title / Headline</Label>
                  <Input
                    required value={caseForm.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                      setCaseForm({ ...caseForm, title, slug: caseForm.id ? caseForm.slug : slug });
                    }}
                    placeholder="e.g. Scaling Workforce Competency at Global Auto"
                    className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">URL Slug</Label>
                  <Input required value={caseForm.slug} onChange={(e) => setCaseForm({ ...caseForm, slug: e.target.value })} className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Client Name</Label>
                  <Input value={caseForm.clientName} onChange={(e) => setCaseForm({ ...caseForm, clientName: e.target.value })} placeholder="Global Manufacturing Inc." className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Industry</Label>
                  <Input value={caseForm.industry} onChange={(e) => setCaseForm({ ...caseForm, industry: e.target.value })} placeholder="Automotive" className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Company Size</Label>
                  <Input value={caseForm.companySize} onChange={(e) => setCaseForm({ ...caseForm, companySize: e.target.value })} placeholder="5,000+ employees" className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Cover Image URL</Label>
                <div className="flex gap-2">
                  <Input value={caseForm.coverImage} onChange={(e) => setCaseForm({ ...caseForm, coverImage: e.target.value })} placeholder="/case-study-image.png or URL" className="bg-white border-slate-200 text-slate-900 text-xs h-9 flex-1" />
                  <div className="relative">
                    <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileUpload} disabled={uploading} />
                    <Button type="button" variant="outline" size="sm" className="text-xs gap-1 h-9 rounded-sm">
                      {uploading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Upload className="h-3 w-3" />} Upload
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">The Challenge</Label>
                  <Textarea value={caseForm.challenge} onChange={(e) => setCaseForm({ ...caseForm, challenge: e.target.value })} className="bg-white border-slate-200 text-slate-900 text-xs min-h-[80px]" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">The Solution</Label>
                  <Textarea value={caseForm.solution} onChange={(e) => setCaseForm({ ...caseForm, solution: e.target.value })} className="bg-white border-slate-200 text-slate-900 text-xs min-h-[80px]" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Impact / Results Summary</Label>
                <Textarea value={caseForm.impactSummary} onChange={(e) => setCaseForm({ ...caseForm, impactSummary: e.target.value })} className="bg-white border-slate-200 text-slate-900 text-xs min-h-[60px]" />
              </div>
            </Card>

            {/* Metrics / Key Results */}
            <Card className="bg-white border-slate-200 shadow-sm p-6 space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Metrics / Impact Data</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[0, 1, 2].map((idx) => (
                  <div key={idx} className="space-y-2 p-3 bg-slate-50 border border-slate-100 rounded-lg">
                    <Label className="text-[10px] font-bold text-slate-500 uppercase">Metric {idx + 1}</Label>
                    <Input
                      value={caseForm.results[idx]?.metric || ""}
                      onChange={(e) => {
                        const updated = [...caseForm.results];
                        updated[idx] = { metric: e.target.value, label: updated[idx]?.label || "" };
                        setCaseForm({ ...caseForm, results: updated });
                      }}
                      placeholder="e.g. 75%"
                      className="bg-white border-slate-200 text-xs h-8"
                    />
                    <Input
                      value={caseForm.results[idx]?.label || ""}
                      onChange={(e) => {
                        const updated = [...caseForm.results];
                        updated[idx] = { metric: updated[idx]?.metric || "", label: e.target.value };
                        setCaseForm({ ...caseForm, results: updated });
                      }}
                      placeholder="e.g. Time Saved"
                      className="bg-white border-slate-200 text-[10px] h-7"
                    />
                  </div>
                ))}
              </div>
            </Card>

            {/* SEO Settings */}
            <Card className="bg-white border-slate-200 shadow-sm p-6 space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">SEO Metadata</h3>
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">SEO Title</Label>
                <Input value={caseForm.seoTitle} onChange={(e) => setCaseForm({ ...caseForm, seoTitle: e.target.value })} placeholder="Leave blank to use Title" className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">SEO Meta Description</Label>
                <Textarea value={caseForm.seoDescription} onChange={(e) => setCaseForm({ ...caseForm, seoDescription: e.target.value })} className="bg-white border-slate-200 text-slate-900 text-xs min-h-[50px]" />
              </div>
            </Card>
          </form>
        </div>
      ) : (
        /* ========== LIST VIEW ========== */
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-brand-red" /> Case Studies Management
              </h2>
              <p className="text-xs text-slate-500">Manage client success stories and metrics</p>
            </div>
            <Button onClick={() => startEdit()} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm">
              <Plus className="h-4 w-4" /> Create Case Study
            </Button>
          </div>

          {loading ? (
            <div className="h-[40vh] flex flex-col items-center justify-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-brand-red" />
              <p className="text-xs text-slate-500">Loading case studies...</p>
            </div>
          ) : caseStudies.length === 0 ? (
            <Card className="bg-white border-slate-200 p-12 text-center text-xs text-slate-400">
              No case studies found. Click "Create Case Study" to add one.
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudies.map((c) => (
                <Card key={c.id} className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-brand-red/10 text-brand-red border border-brand-red/20 text-[9px] font-bold">{c.industry || "Case Study"}</Badge>
                      <span className="text-[10px] font-mono text-slate-400">{c.slug}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm line-clamp-1">{c.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{c.impact_summary || c.challenge}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100">
                    <span className="text-[10px] text-slate-500 font-semibold">{c.client_name}</span>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" onClick={() => startEdit(c)} className="text-slate-600 hover:text-slate-900 text-xs h-8 px-2.5 gap-1 rounded-sm">
                        <Edit className="h-3.5 w-3.5" /> Edit
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(c.id)} className="text-slate-400 hover:text-brand-red text-xs h-8 px-2 rounded-sm">
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
