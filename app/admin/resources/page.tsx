"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
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

export default function ResourcesStudioPage() {
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const [resourceForm, setResourceForm] = useState({
    id: "",
    title: "",
    description: "",
    category: "Whitepapers",
    badge: "Guide",
    downloadUrl: "",
    image: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    publishedAt: new Date().toISOString().split("T")[0],
  });

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const fetchResources = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/resources");
      const data = await res.json();
      if (data.success) setResources(data.data);
    } catch {
      showNotification("error", "Failed to fetch resources");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
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
        setResourceForm(prev => ({ ...prev, image: data.url }));
        showNotification("success", "Image uploaded successfully");
      }
    } catch {
      showNotification("error", "Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const startEdit = (r: any = null) => {
    if (r) {
      setResourceForm({
        id: r.id,
        title: r.title || "",
        description: r.description || "",
        category: r.category || "Whitepapers",
        badge: r.badge || "Guide",
        downloadUrl: r.download_url || "",
        image: r.image || "",
        seoTitle: r.seo_title || "",
        seoDescription: r.seo_description || "",
        seoKeywords: r.seo_keywords || "",
        publishedAt: r.published_at ? new Date(r.published_at).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
      });
    } else {
      setResourceForm({
        id: "",
        title: "",
        description: "",
        category: "Whitepapers",
        badge: "Guide",
        downloadUrl: "",
        image: "",
        seoTitle: "",
        seoDescription: "",
        seoKeywords: "",
        publishedAt: new Date().toISOString().split("T")[0],
      });
    }
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this resource?")) return;
    try {
      const res = await fetch(`/api/admin/resources?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        showNotification("success", "Resource deleted");
        fetchResources();
      } else {
        showNotification("error", data.error || "Failed to delete");
      }
    } catch {
      showNotification("error", "Error deleting resource");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const method = resourceForm.id ? "PUT" : "POST";
      const res = await fetch("/api/admin/resources", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resourceForm),
      });
      const data = await res.json();
      if (data.success) {
        showNotification("success", `Resource ${resourceForm.id ? "updated" : "created"} successfully`);
        setIsEditing(false);
        fetchResources();
      } else {
        showNotification("error", data.error || "Failed to save resource");
      }
    } catch {
      showNotification("error", "Network error saving resource");
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
                <ArrowLeft className="h-3.5 w-3.5" /> Back to Resources
              </Button>
              <h2 className="text-lg font-bold text-slate-900">{resourceForm.id ? "Edit Resource" : "Create New Resource"}</h2>
            </div>
            <Button onClick={handleSave} disabled={submitting} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm">
              {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              Save Resource
            </Button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <Card className="bg-white border-slate-200 shadow-sm p-6 space-y-4">
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Resource Title</Label>
                <Input required value={resourceForm.title} onChange={(e) => setResourceForm({ ...resourceForm, title: e.target.value })} placeholder="e.g. 2026 Skills Gap Report" className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Description</Label>
                <Textarea value={resourceForm.description} onChange={(e) => setResourceForm({ ...resourceForm, description: e.target.value })} placeholder="Summary of whitepaper or guide..." className="bg-white border-slate-200 text-slate-900 text-xs min-h-[70px]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Category</Label>
                  <Input value={resourceForm.category} onChange={(e) => setResourceForm({ ...resourceForm, category: e.target.value })} placeholder="Whitepapers" className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Badge Tag</Label>
                  <Input value={resourceForm.badge} onChange={(e) => setResourceForm({ ...resourceForm, badge: e.target.value })} placeholder="Report" className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Publish Date</Label>
                  <Input type="date" value={resourceForm.publishedAt} onChange={(e) => setResourceForm({ ...resourceForm, publishedAt: e.target.value })} className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Download URL / PDF Link</Label>
                <Input value={resourceForm.downloadUrl} onChange={(e) => setResourceForm({ ...resourceForm, downloadUrl: e.target.value })} placeholder="/resources/report.pdf or external URL" className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Cover Image URL</Label>
                <div className="flex gap-2">
                  <Input value={resourceForm.image} onChange={(e) => setResourceForm({ ...resourceForm, image: e.target.value })} placeholder="/resource-cover.png or URL" className="bg-white border-slate-200 text-slate-900 text-xs h-9 flex-1" />
                  <div className="relative">
                    <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileUpload} disabled={uploading} />
                    <Button type="button" variant="outline" size="sm" className="text-xs gap-1 h-9 rounded-sm">
                      {uploading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Upload className="h-3 w-3" />} Upload
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* SEO Settings */}
            <Card className="bg-white border-slate-200 shadow-sm p-6 space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">SEO Metadata</h3>
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">SEO Title</Label>
                <Input value={resourceForm.seoTitle} onChange={(e) => setResourceForm({ ...resourceForm, seoTitle: e.target.value })} className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">SEO Meta Description</Label>
                <Textarea value={resourceForm.seoDescription} onChange={(e) => setResourceForm({ ...resourceForm, seoDescription: e.target.value })} className="bg-white border-slate-200 text-slate-900 text-xs min-h-[50px]" />
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
                <FileText className="h-5 w-5 text-brand-red" /> Resources Management
              </h2>
              <p className="text-xs text-slate-500">Manage downloadable whitepapers, guides, and reports</p>
            </div>
            <Button onClick={() => startEdit()} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm">
              <Plus className="h-4 w-4" /> Create Resource
            </Button>
          </div>

          {loading ? (
            <div className="h-[40vh] flex flex-col items-center justify-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-brand-red" />
              <p className="text-xs text-slate-500">Loading resources...</p>
            </div>
          ) : resources.length === 0 ? (
            <Card className="bg-white border-slate-200 p-12 text-center text-xs text-slate-400">
              No resources found. Click "Create Resource" to add one.
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((r) => (
                <Card key={r.id} className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-brand-red/10 text-brand-red border border-brand-red/20 text-[9px] font-bold">{r.badge || "Guide"}</Badge>
                      <span className="text-[10px] text-slate-400">{r.category}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm line-clamp-1">{r.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{r.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100">
                    <span className="text-[10px] text-slate-400">{new Date(r.published_at).toLocaleDateString()}</span>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" onClick={() => startEdit(r)} className="text-slate-600 hover:text-slate-900 text-xs h-8 px-2.5 gap-1 rounded-sm">
                        <Edit className="h-3.5 w-3.5" /> Edit
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(r.id)} className="text-slate-400 hover:text-brand-red text-xs h-8 px-2 rounded-sm">
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
