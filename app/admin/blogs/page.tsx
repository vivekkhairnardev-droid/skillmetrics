"use client";

import React, { useState, useEffect } from "react";
import {
  BookOpen,
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
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogsStudioPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const [blogForm, setBlogForm] = useState({
    id: "",
    title: "",
    slug: "",
    excerpt: "",
    mainImage: "",
    readingTime: "",
    authorName: "",
    authorRole: "",
    authorAvatar: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    publishedAt: new Date().toISOString().split("T")[0],
    content: [{ heading: "", text: "" }],
  });

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/blogs");
      const data = await res.json();
      if (data.success) setBlogs(data.data);
    } catch {
      showNotification("error", "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
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
        setBlogForm(prev => ({ ...prev, mainImage: data.url }));
        showNotification("success", "Image uploaded successfully");
      }
    } catch {
      showNotification("error", "Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const startEdit = (blog: any = null) => {
    if (blog) {
      setBlogForm({
        id: blog.id,
        title: blog.title || "",
        slug: blog.slug || "",
        excerpt: blog.excerpt || "",
        mainImage: blog.main_image || "",
        readingTime: blog.reading_time || "",
        authorName: blog.author_name || "",
        authorRole: blog.author_role || "",
        authorAvatar: blog.author_avatar || "",
        seoTitle: blog.seo_title || "",
        seoDescription: blog.seo_description || "",
        seoKeywords: blog.seo_keywords || "",
        publishedAt: blog.published_at ? new Date(blog.published_at).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
        content: blog.content?.length > 0 ? blog.content : [{ heading: "", text: "" }],
      });
    } else {
      setBlogForm({
        id: "",
        title: "",
        slug: "",
        excerpt: "",
        mainImage: "",
        readingTime: "5 min read",
        authorName: "SkillMetrics Team",
        authorRole: "Content Team",
        authorAvatar: "",
        seoTitle: "",
        seoDescription: "",
        seoKeywords: "",
        publishedAt: new Date().toISOString().split("T")[0],
        content: [{ heading: "Introduction", text: "" }],
      });
    }
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    try {
      const res = await fetch(`/api/admin/blogs?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        showNotification("success", "Blog post deleted");
        fetchBlogs();
      } else {
        showNotification("error", data.error || "Failed to delete");
      }
    } catch {
      showNotification("error", "Error deleting blog");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const method = blogForm.id ? "PUT" : "POST";
      const res = await fetch("/api/admin/blogs", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogForm),
      });
      const data = await res.json();
      if (data.success) {
        showNotification("success", `Blog ${blogForm.id ? "updated" : "created"} successfully`);
        setIsEditing(false);
        fetchBlogs();
      } else {
        showNotification("error", data.error || "Failed to save blog");
      }
    } catch {
      showNotification("error", "Network error saving blog");
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
                <ArrowLeft className="h-3.5 w-3.5" /> Back to Blogs
              </Button>
              <h2 className="text-lg font-bold text-slate-900">{blogForm.id ? "Edit Blog Post" : "Create New Blog Post"}</h2>
            </div>
            <Button onClick={handleSave} disabled={submitting} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm">
              {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              Save Blog
            </Button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <Card className="bg-white border-slate-200 shadow-sm p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Blog Title</Label>
                  <Input
                    required value={blogForm.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                      setBlogForm({ ...blogForm, title, slug: blogForm.id ? blogForm.slug : slug });
                    }}
                    placeholder="e.g. 10 Strategies for Skill Management"
                    className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">URL Slug</Label>
                  <Input required value={blogForm.slug} onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })} placeholder="10-strategies-for-skill-management" className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">Excerpt / Summary</Label>
                <Textarea value={blogForm.excerpt} onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })} placeholder="Brief summary for cards and search..." className="bg-white border-slate-200 text-slate-900 text-xs min-h-[60px]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Cover Image URL</Label>
                  <div className="flex gap-2">
                    <Input value={blogForm.mainImage} onChange={(e) => setBlogForm({ ...blogForm, mainImage: e.target.value })} placeholder="/blog-image.png or URL" className="bg-white border-slate-200 text-slate-900 text-xs h-9 flex-1" />
                    <div className="relative">
                      <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileUpload} disabled={uploading} />
                      <Button type="button" variant="outline" size="sm" className="text-xs gap-1 h-9 rounded-sm">
                        {uploading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Upload className="h-3 w-3" />} Upload
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Reading Time</Label>
                  <Input value={blogForm.readingTime} onChange={(e) => setBlogForm({ ...blogForm, readingTime: e.target.value })} placeholder="5 min read" className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Author Name</Label>
                  <Input value={blogForm.authorName} onChange={(e) => setBlogForm({ ...blogForm, authorName: e.target.value })} className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-slate-700 font-bold">Publish Date</Label>
                  <Input type="date" value={blogForm.publishedAt} onChange={(e) => setBlogForm({ ...blogForm, publishedAt: e.target.value })} className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
                </div>
              </div>
            </Card>

            {/* SEO Settings */}
            <Card className="bg-white border-slate-200 shadow-sm p-6 space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">SEO Metadata</h3>
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">SEO Title</Label>
                <Input value={blogForm.seoTitle} onChange={(e) => setBlogForm({ ...blogForm, seoTitle: e.target.value })} placeholder="Leave blank to use Blog Title" className="bg-white border-slate-200 text-slate-900 text-xs h-9" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-slate-700 font-bold">SEO Meta Description</Label>
                <Textarea value={blogForm.seoDescription} onChange={(e) => setBlogForm({ ...blogForm, seoDescription: e.target.value })} placeholder="Meta description for search engines..." className="bg-white border-slate-200 text-slate-900 text-xs min-h-[50px]" />
              </div>
            </Card>

            {/* Article Content Sections */}
            <Card className="bg-white border-slate-200 shadow-sm p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Article Content Sections</h3>
                <Button type="button" variant="outline" size="sm" onClick={() => setBlogForm({ ...blogForm, content: [...blogForm.content, { heading: "", text: "" }] })} className="text-xs gap-1 h-8 rounded-sm">
                  <Plus className="h-3 w-3" /> Add Section
                </Button>
              </div>

              {blogForm.content.map((sec, idx) => (
                <div key={idx} className="p-4 border border-slate-100 bg-slate-50/50 rounded-lg space-y-3 relative group">
                  <div className="flex items-center justify-between">
                    <Label className="text-[10px] font-bold text-slate-400 uppercase">Section {idx + 1}</Label>
                    {blogForm.content.length > 1 && (
                      <Button type="button" variant="ghost" size="sm" onClick={() => setBlogForm({ ...blogForm, content: blogForm.content.filter((_, i) => i !== idx) })} className="text-slate-400 hover:text-brand-red h-6 w-6 p-0">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                  <Input value={sec.heading} onChange={(e) => { const updated = [...blogForm.content]; updated[idx].heading = e.target.value; setBlogForm({ ...blogForm, content: updated }); }} placeholder="Section Heading..." className="bg-white border-slate-200 text-xs h-8" />
                  <Textarea value={sec.text} onChange={(e) => { const updated = [...blogForm.content]; updated[idx].text = e.target.value; setBlogForm({ ...blogForm, content: updated }); }} placeholder="Section body text..." className="bg-white border-slate-200 text-xs min-h-[80px]" />
                </div>
              ))}
            </Card>
          </form>
        </div>
      ) : (
        /* ========== LIST VIEW ========== */
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-brand-red" /> Blogs Management
              </h2>
              <p className="text-xs text-slate-500">Create, edit, and publish blog posts</p>
            </div>
            <Button onClick={() => startEdit()} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm">
              <Plus className="h-4 w-4" /> Create Blog Post
            </Button>
          </div>

          {loading ? (
            <div className="h-[40vh] flex flex-col items-center justify-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-brand-red" />
              <p className="text-xs text-slate-500">Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <Card className="bg-white border-slate-200 p-12 text-center text-xs text-slate-400">
              No blog posts found. Click "Create Blog Post" to add one.
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogs.map((b) => (
                <Card key={b.id} className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-slate-100 text-slate-600 border border-slate-200 text-[9px] font-mono">{b.slug}</Badge>
                      <span className="text-[10px] text-slate-400">{new Date(b.published_at).toLocaleDateString()}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm line-clamp-1">{b.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{b.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100">
                    <span className="text-[10px] text-slate-400 font-semibold">{b.reading_time || "5 min read"}</span>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" onClick={() => startEdit(b)} className="text-slate-600 hover:text-slate-900 text-xs h-8 px-2.5 gap-1 rounded-sm">
                        <Edit className="h-3.5 w-3.5" /> Edit
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(b.id)} className="text-slate-400 hover:text-brand-red text-xs h-8 px-2 rounded-sm">
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
