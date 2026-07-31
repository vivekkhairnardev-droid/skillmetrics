"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Briefcase,
  Settings,
  Mail,
  Plus,
  Trash2,
  Edit,
  ArrowLeft,
  Save,
  Loader2,
  CheckCircle,
  AlertCircle,
  LogOut,
  Menu,
  X,
  Upload
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { authClient } from "@/lib/auth-client";

type TabType = "submissions" | "blogs" | "cases" | "resources" | "settings" | "contact_settings";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<TabType>("submissions");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Authentication States
  const [session, setSession] = useState<any>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authName, setAuthName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Data States
  const [blogs, setBlogs] = useState<any[]>([]);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [resources, setResources] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<{
    contactSubmissions: any[];
    newsletterSubscriptions: any[];
    demoRequests: any[];
  }>({ contactSubmissions: [], newsletterSubscriptions: [], demoRequests: [] });

  const [siteSettings, setSiteSettings] = useState<any>({});
  const [contactSettings, setContactSettings] = useState<any>({});

  // Editing / Form States
  const [isEditing, setIsEditing] = useState(false);
  const [editType, setEditType] = useState<"blog" | "case" | "resource" | null>(null);
  const [blogForm, setBlogForm] = useState({
    id: "",
    title: "",
    slug: "",
    excerpt: "",
    mainImage: "",
    readingTime: "",
    category: "",
    authorName: "",
    authorRole: "",
    authorAvatar: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    content: ""
  });
  const [caseForm, setCaseForm] = useState({
    id: "",
    title: "",
    slug: "",
    companyName: "",
    companyLogo: "",
    industry: "",
    excerpt: "",
    coverImage: "",
    challenge: "",
    solution: "",
    results: [] as { metric: string; label: string }[],
    testimonialQuote: "",
    testimonialAuthor: "",
    testimonialRole: "",
    content: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: ""
  });
  const [resourceForm, setResourceForm] = useState({
    id: "",
    title: "",
    slug: "",
    category: "",
    badge: "",
    readTime: "",
    summary: "",
    image: "",
    author: "",
    authorRole: "",
    keyTakeaways: [] as string[],
    content: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: ""
  });

  const [uploadingField, setUploadingField] = useState<string | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: "blog" | "case" | "resource") => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingField(fieldName);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const data = await res.json();
      if (data.url) {
        if (fieldName === "blog") {
          setBlogForm(prev => ({ ...prev, mainImage: data.url }));
        } else if (fieldName === "case") {
          setCaseForm(prev => ({ ...prev, coverImage: data.url }));
        } else if (fieldName === "resource") {
          setResourceForm(prev => ({ ...prev, image: data.url }));
        }
        showNotification("success", "Image uploaded successfully!");
      }
    } catch (err: any) {
      console.error(err);
      showNotification("error", "Failed to upload image. Please try again.");
    } finally {
      setUploadingField(null);
      // Reset input element value so same file can be uploaded again
      e.target.value = "";
    }
  };

  // Fetch Data
  const fetchData = async () => {
    setLoading(true);
    try {
      // 1. Fetch Submissions
      const subRes = await fetch("/api/admin/submissions");
      const subData = await subRes.json();
      if (subData.success) setSubmissions(subData.data);

      // 2. Fetch Blogs
      const blogRes = await fetch("/api/admin/blogs");
      const blogData = await blogRes.json();
      if (blogData.success) setBlogs(blogData.data);

      // 3. Fetch Case Studies
      const caseRes = await fetch("/api/admin/case-studies");
      const caseData = await caseRes.json();
      if (caseData.success) setCaseStudies(caseData.data);

      // 4. Fetch Resources
      const resRes = await fetch("/api/admin/resources");
      const resData = await resRes.json();
      if (resData.success) setResources(resData.data);

      // 5. Fetch Settings
      const setRes = await fetch("/api/admin/settings");
      const setData = await setRes.json();
      if (setData.success) {
        setSiteSettings(setData.data.site);
        setContactSettings(setData.data.contact);
      }
    } catch (err) {
      showNotification("error", "Failed to load database content");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data } = await authClient.getSession();
        if (data) {
          setSession(data);
          fetchData();
        } else {
          setSession(null);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setSession(null);
      } finally {
        setCheckingAuth(false);
      }
    };
    checkSession();
  }, []);

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthMessage(null);
    try {
      if (isSignUp) {
        const { data, error } = await authClient.signUp.email({
          email: authEmail,
          password: authPassword,
          name: authName || authEmail.split("@")[0]
        });
        if (error) {
          setAuthMessage({ type: "error", text: error.message || "Failed to sign up." });
        } else {
          setAuthMessage({ type: "success", text: "Signed up successfully! Redirecting..." });
          setSession(data);
          fetchData();
        }
      } else {
        const { data, error } = await authClient.signIn.email({
          email: authEmail,
          password: authPassword
        });
        if (error) {
          setAuthMessage({ type: "error", text: error.message || "Failed to sign in." });
        } else {
          setAuthMessage({ type: "success", text: "Signed in successfully! Redirecting..." });
          setSession(data);
          fetchData();
        }
      }
    } catch (err: any) {
      setAuthMessage({ type: "error", text: err.message || "An unexpected error occurred." });
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      setSession(null);
    } catch (err) {
      console.error("Failed to sign out:", err);
    }
  };

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  // Delete Handlers
  const handleDeleteSubmission = async (id: number, type: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;
    try {
      const res = await fetch(`/api/admin/submissions?id=${id}&type=${type}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        showNotification("success", "Submission deleted");
        fetchData();
      } else {
        showNotification("error", data.error || "Failed to delete");
      }
    } catch (err) {
      showNotification("error", "Network error occurred");
    }
  };

  const handleDeleteItem = async (id: number, type: "blog" | "case" | "resource") => {
    if (!confirm(`Are you sure you want to delete this ${type}?`)) return;
    let endpoint = "";
    if (type === "blog") endpoint = `/api/admin/blogs?id=${id}`;
    if (type === "case") endpoint = `/api/admin/case-studies?id=${id}`;
    if (type === "resource") endpoint = `/api/admin/resources?id=${id}`;

    try {
      const res = await fetch(endpoint, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        showNotification("success", `${type} deleted successfully`);
        fetchData();
      } else {
        showNotification("error", data.error || "Failed to delete");
      }
    } catch (err) {
      showNotification("error", "Network error occurred");
    }
  };

  // Save Handlers
  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogForm)
      });
      const data = await res.json();
      if (data.success) {
        showNotification("success", blogForm.id ? "Blog updated" : "Blog created");
        setIsEditing(false);
        setEditType(null);
        fetchData();
      } else {
        showNotification("error", data.error || "Failed to save blog");
      }
    } catch (err) {
      showNotification("error", "Network error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSaveCase = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/case-studies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(caseForm)
      });
      const data = await res.json();
      if (data.success) {
        showNotification("success", caseForm.id ? "Case study updated" : "Case study created");
        setIsEditing(false);
        setEditType(null);
        fetchData();
      } else {
        showNotification("error", data.error || "Failed to save case study");
      }
    } catch (err) {
      showNotification("error", "Network error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSaveResource = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resourceForm)
      });
      const data = await res.json();
      if (data.success) {
        showNotification("success", resourceForm.id ? "Resource updated" : "Resource created");
        setIsEditing(false);
        setEditType(null);
        fetchData();
      } else {
        showNotification("error", data.error || "Failed to save resource");
      }
    } catch (err) {
      showNotification("error", "Network error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSaveSettings = async (type: "site" | "contact", settingsData: any) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, settings: settingsData })
      });
      const data = await res.json();
      if (data.success) {
        showNotification("success", `${type === "site" ? "Site" : "Contact"} settings saved`);
        fetchData();
      } else {
        showNotification("error", data.error || "Failed to save settings");
      }
    } catch (err) {
      showNotification("error", "Network error");
    } finally {
      setSubmitting(false);
    }
  };

  // Setup Form for Editing
  const startEditBlog = (blog: any = null) => {
    if (blog) {
      setBlogForm({
        id: blog.id,
        title: blog.title || "",
        slug: blog.slug || "",
        excerpt: blog.excerpt || "",
        mainImage: blog.main_image || "",
        readingTime: blog.reading_time || "",
        category: blog.category || "",
        authorName: blog.author_name || "",
        authorRole: blog.author_role || "",
        authorAvatar: blog.author_avatar || "",
        seoTitle: blog.seo_title || "",
        seoDescription: blog.seo_description || "",
        seoKeywords: blog.seo_keywords || "",
        content: blog.content || ""
      });
    } else {
      setBlogForm({
        id: "",
        title: "",
        slug: "",
        excerpt: "",
        mainImage: "/skillmetrics.png",
        readingTime: "5 min read",
        category: "Product Updates",
        authorName: "SkillMetrics Team",
        authorRole: "Product Editorial",
        authorAvatar: "",
        seoTitle: "",
        seoDescription: "",
        seoKeywords: "",
        content: ""
      });
    }
    setEditType("blog");
    setIsEditing(true);
  };

  const startEditCase = (cs: any = null) => {
    if (cs) {
      setCaseForm({
        id: cs.id,
        title: cs.title || "",
        slug: cs.slug || "",
        companyName: cs.company_name || "",
        companyLogo: cs.company_logo || "",
        industry: cs.industry || "",
        excerpt: cs.excerpt || "",
        coverImage: cs.cover_image || "",
        challenge: cs.challenge || "",
        solution: cs.solution || "",
        results: Array.isArray(cs.results) ? cs.results : [],
        testimonialQuote: cs.testimonial_quote || "",
        testimonialAuthor: cs.testimonial_author || "",
        testimonialRole: cs.testimonial_role || "",
        content: cs.content || "",
        seoTitle: cs.seo_title || "",
        seoDescription: cs.seo_description || "",
        seoKeywords: cs.seo_keywords || ""
      });
    } else {
      setCaseForm({
        id: "",
        title: "",
        slug: "",
        companyName: "",
        companyLogo: "",
        industry: "Other",
        excerpt: "",
        coverImage: "/skillmetrics.png",
        challenge: "",
        solution: "",
        results: [],
        testimonialQuote: "",
        testimonialAuthor: "",
        testimonialRole: "",
        content: "",
        seoTitle: "",
        seoDescription: "",
        seoKeywords: ""
      });
    }
    setEditType("case");
    setIsEditing(true);
  };

  const startEditResource = (r: any = null) => {
    if (r) {
      setResourceForm({
        id: r.id,
        title: r.title || "",
        slug: r.slug || "",
        category: r.category || "",
        badge: r.badge || "",
        readTime: r.read_time || "",
        summary: r.summary || "",
        image: r.image || "",
        author: r.author || "",
        authorRole: r.author_role || "",
        keyTakeaways: Array.isArray(r.key_takeaways) ? r.key_takeaways : [],
        content: r.content || "",
        seoTitle: r.seo_title || "",
        seoDescription: r.seo_description || "",
        seoKeywords: r.seo_keywords || ""
      });
    } else {
      setResourceForm({
        id: "",
        title: "",
        slug: "",
        category: "Skill Frameworks",
        badge: "Featured Resource",
        readTime: "10 min read",
        summary: "",
        image: "/skillmetrics.png",
        author: "SkillMetrics Practice Group",
        authorRole: "Talent Architecture & Research",
        keyTakeaways: [],
        content: "",
        seoTitle: "",
        seoDescription: "",
        seoKeywords: ""
      });
    }
    setEditType("resource");
    setIsEditing(true);
  };

  // Render Loader during initial auth check
  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-brand-red" />
          <p className="text-xs text-slate-500 font-bold">Verifying Administrator Session...</p>
        </div>
      </div>
    );
  }

  // Render Login Card if not authenticated
  if (!session) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 selection:bg-brand-red/100 selection:text-white">
        <Card className="w-full max-w-md bg-white border-slate-200 shadow-xl overflow-hidden rounded-2xl">
          <div className="p-8 space-y-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <img
                src="/logo-3.png"
                alt="SkillMetrics Logo"
                className="h-12 w-auto object-contain"
              />
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Admin Dashboard</h2>
              <p className="text-xs text-slate-500">Sign in with your Neon Auth administrator account</p>
            </div>

            {authMessage && (
              <div className={`p-3 rounded-xl text-xs font-semibold ${authMessage.type === "success"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-brand-red/10 text-brand-red border border-brand-red/20"
                }`}>
                {authMessage.text}
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-slate-700">Full Name</Label>
                  <Input
                    type="text"
                    required
                    value={authName}
                    onChange={(e) => setAuthName(e.target.value)}
                    placeholder="Administrator Name"
                    className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-700">Email Address</Label>
                <Input
                  type="email"
                  required
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  placeholder="admin@skillmetrics.io"
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-700">Password</Label>
                <Input
                  type="password"
                  required
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>

              <Button type="submit" disabled={authLoading} className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-10 mt-2 rounded-sm">
                {authLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : isSignUp ? (
                  "Sign Up & Create Account"
                ) : (
                  "Sign In to Admin"
                )}
              </Button>
            </form>

            <div className="text-center pt-2">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-xs text-brand-red hover:underline font-semibold"
              >
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Create an admin account"}
              </button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // Dashboard in premium Light Mode
  return (
    <div className="h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-brand-red/100 selection:text-white overflow-hidden">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-40 px-6 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-slate-600 hover:text-slate-900 h-9 w-9 p-0 rounded-sm border border-slate-100"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <img
            src="/logo-3.png"
            alt="SkillMetrics Logo"
            className="h-10 w-auto object-contain"
          />


        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/">
            <Button variant="outline" size="sm" className="border-slate-200 text-slate-700 hover:bg-slate-50 text-xs gap-1.5 rounded-sm shadow-sm">
              <ArrowLeft className="h-3.5 w-3.5" /> View Main Site
            </Button>
          </Link>
          <Button size="sm" onClick={fetchData} className="bg-brand-yellow text-black hover:bg-brand-yellow/90 font-extrabold text-xs rounded-sm shadow-brand-yellow gap-1.5 border border-brand-yellow/20">
            Sync Data
          </Button>
        </div>
      </header>

      {/* Notifications */}
      {notification && (
        <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-2xl transition-all duration-300 ${notification.type === "success"
          ? "bg-white border-emerald-200 text-emerald-600 shadow-md"
          : "bg-white border-brand-red/20 text-brand-red shadow-md"
          }`}>
          {notification.type === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <span className="text-xs font-bold">{notification.message}</span>
        </div>
      )}

      {/* Mobile Drawer Navigation Menu */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Backdrop overlay */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Drawer container sliding from left */}
        <aside
          className={`absolute top-0 bottom-0 left-0 w-72 bg-white border-r border-slate-200 p-5 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="space-y-6">
            {/* Header of Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <img
                src="/logo-3.png"
                alt="SkillMetrics Logo"
                className="h-9 w-auto object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-500 hover:text-slate-800 h-8 w-8 rounded-sm"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Navigation links inside drawer */}
            <div className="flex flex-col gap-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 mb-2">Primary Content</div>

              <button
                onClick={() => { setActiveTab("submissions"); setIsEditing(false); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all shrink-0 ${activeTab === "submissions" && !isEditing
                  ? "bg-brand-red text-white"
                  : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                  }`}
              >
                <LayoutDashboard className="h-4 w-4" /> Submissions
                <Badge className={`ml-auto text-[9px] border-none font-extrabold ${activeTab === "submissions" && !isEditing
                  ? "bg-brand-yellow text-black"
                  : "bg-slate-100 text-slate-600"
                  }`}>
                  {submissions.contactSubmissions.length + submissions.newsletterSubscriptions.length + submissions.demoRequests.length}
                </Badge>
              </button>

              <button
                onClick={() => { setActiveTab("blogs"); setIsEditing(false); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all shrink-0 ${activeTab === "blogs" && !isEditing
                  ? "bg-brand-red text-white"
                  : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                  }`}
              >
                <BookOpen className="h-4 w-4" /> Blogs
                <Badge className={`ml-auto text-[9px] border-none font-extrabold ${activeTab === "blogs" && !isEditing
                  ? "bg-brand-yellow text-black"
                  : "bg-slate-100 text-slate-600"
                  }`}>{blogs.length}</Badge>
              </button>

              <button
                onClick={() => { setActiveTab("cases"); setIsEditing(false); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all shrink-0 ${activeTab === "cases" && !isEditing
                  ? "bg-brand-red text-white"
                  : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                  }`}
              >
                <Briefcase className="h-4 w-4" /> Case Studies
                <Badge className={`ml-auto text-[9px] border-none font-extrabold ${activeTab === "cases" && !isEditing
                  ? "bg-brand-yellow text-black"
                  : "bg-slate-100 text-slate-600"
                  }`}>{caseStudies.length}</Badge>
              </button>

              <button
                onClick={() => { setActiveTab("resources"); setIsEditing(false); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all shrink-0 ${activeTab === "resources" && !isEditing
                  ? "bg-brand-red text-white"
                  : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                  }`}
              >
                <FileText className="h-4 w-4" /> Resources
                <Badge className={`ml-auto text-[9px] border-none font-extrabold ${activeTab === "resources" && !isEditing
                  ? "bg-brand-yellow text-black"
                  : "bg-slate-100 text-slate-600"
                  }`}>{resources.length}</Badge>
              </button>

              <div className="pt-6 text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 mb-2">Layout &amp; Settings</div>

              <button
                onClick={() => { setActiveTab("settings"); setIsEditing(false); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all shrink-0 ${activeTab === "settings" && !isEditing
                  ? "bg-brand-red text-white"
                  : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                  }`}
              >
                <Settings className="h-4 w-4" /> Settings
              </button>

              <button
                onClick={() => { setActiveTab("contact_settings"); setIsEditing(false); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all shrink-0 ${activeTab === "contact_settings" && !isEditing
                  ? "bg-brand-red text-white"
                  : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                  }`}
              >
                <Mail className="h-4 w-4" /> Contact
              </button>

              <div className="pt-6 text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 mb-2">Quick Actions</div>

              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold text-slate-600 hover:text-brand-red hover:bg-brand-red/5 transition-all">
                  <ArrowLeft className="h-4 w-4" /> View Main Site
                </button>
              </Link>

              <button
                onClick={() => { fetchData(); setIsMobileMenuOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold text-slate-600 hover:text-brand-yellow hover:bg-brand-yellow/10 transition-all"
              >
                <Loader2 className="h-4 w-4" /> Sync Data
              </button>
            </div>
          </div>

          {/* Logged in user info & Sign out inside mobile drawer */}
          <div className="border-t border-slate-100 pt-4 px-3 flex flex-col gap-1.5">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Logged In As</div>
            <div className="text-xs font-bold text-slate-800 truncate" title={session?.user?.email}>
              {session?.user?.name || session?.user?.email}
            </div>
            <button onClick={() => { handleSignOut(); setIsMobileMenuOpen(false); }} className="text-left text-[11px] text-brand-red hover:underline font-bold mt-1 flex items-center gap-1.5">
              <LogOut className="h-3.5 w-3.5" /> Sign Out
            </button>
          </div>
        </aside>
      </div>

      {/* Layout Content */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Desktop Sidebar Nav */}
        <aside className="hidden md:flex md:flex-col w-64 border-r border-slate-200 p-4 bg-white justify-between shrink-0 overflow-y-auto">
          <div className="flex flex-col gap-1">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 mb-2">Primary Content</div>

            <button
              onClick={() => { setActiveTab("submissions"); setIsEditing(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all shrink-0 ${activeTab === "submissions" && !isEditing
                ? "bg-brand-red text-white hover:bg-brand-red/90"
                : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                }`}
            >
              <LayoutDashboard className="h-4 w-4" /> Submissions
              <Badge className={`ml-auto text-[9px] border-none font-extrabold ${activeTab === "submissions" && !isEditing
                ? "bg-brand-yellow text-black"
                : "bg-slate-100 text-slate-600 border border-slate-200/50"
                }`}>
                {submissions.contactSubmissions.length + submissions.newsletterSubscriptions.length + submissions.demoRequests.length}
              </Badge>
            </button>

            <button
              onClick={() => { setActiveTab("blogs"); setIsEditing(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all shrink-0 ${activeTab === "blogs" && !isEditing
                ? "bg-brand-red text-white hover:bg-brand-red/90"
                : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                }`}
            >
              <BookOpen className="h-4 w-4" /> Blogs
              <Badge className={`ml-auto text-[9px] border-none font-extrabold ${activeTab === "blogs" && !isEditing
                ? "bg-brand-yellow text-black"
                : "bg-slate-100 text-slate-600 border border-slate-200/50"
                }`}>{blogs.length}</Badge>
            </button>

            <button
              onClick={() => { setActiveTab("cases"); setIsEditing(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all shrink-0 ${activeTab === "cases" && !isEditing
                ? "bg-brand-red text-white hover:bg-brand-red/90"
                : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                }`}
            >
              <Briefcase className="h-4 w-4" /> Case Studies
              <Badge className={`ml-auto text-[9px] border-none font-extrabold ${activeTab === "cases" && !isEditing
                ? "bg-brand-yellow text-black"
                : "bg-slate-100 text-slate-600 border border-slate-200/50"
                }`}>{caseStudies.length}</Badge>
            </button>

            <button
              onClick={() => { setActiveTab("resources"); setIsEditing(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all shrink-0 ${activeTab === "resources" && !isEditing
                ? "bg-brand-red text-white hover:bg-brand-red/90"
                : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                }`}
            >
              <FileText className="h-4 w-4" /> Resources
              <Badge className={`ml-auto text-[9px] border-none font-extrabold ${activeTab === "resources" && !isEditing
                ? "bg-brand-yellow text-black"
                : "bg-slate-100 text-slate-600 border border-slate-200/50"
                }`}>{resources.length}</Badge>
            </button>

            <div className="pt-6 text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 mb-2">Layout &amp; Settings</div>

            <button
              onClick={() => { setActiveTab("settings"); setIsEditing(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all shrink-0 ${activeTab === "settings" && !isEditing
                ? "bg-brand-red text-white hover:bg-brand-red/90"
                : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                }`}
            >
              <Settings className="h-4 w-4" /> Settings
            </button>

            <button
              onClick={() => { setActiveTab("contact_settings"); setIsEditing(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all shrink-0 ${activeTab === "contact_settings" && !isEditing
                ? "bg-brand-red text-white hover:bg-brand-red/90"
                : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                }`}
            >
              <Mail className="h-4 w-4" /> Contact
            </button>
          </div>

          {/* User profile section at the bottom of the sidebar */}
          <div className="border-t border-slate-100 pt-4 px-3 flex flex-col gap-1 shrink-0">
            <div className="text-[10px] font-bold text-slate-455 uppercase tracking-wider">Logged In As</div>
            <div className="text-xs font-bold text-slate-800 truncate" title={session?.user?.email}>
              {session?.user?.name || session?.user?.email}
            </div>
            <button onClick={handleSignOut} className="text-left text-[11px] text-brand-red hover:underline font-bold mt-1.5 flex items-center gap-1.5">
              <LogOut className="h-3 w-3" /> Sign Out
            </button>
          </div>
        </aside>

        {/* Main Work Area */}
        <main className="flex-1 p-6 sm:p-8 bg-slate-50/50 overflow-y-auto h-full">
          {loading ? (
            <div className="h-[50vh] flex flex-col items-center justify-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-brand-red" />
              <p className="text-xs text-slate-500">Loading database entities...</p>
            </div>
          ) : isEditing ? (
            /* Forms Editor Layout */
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    {editType === "blog" && (blogForm.id ? "Edit Blog Post" : "Create Blog Post")}
                    {editType === "case" && (caseForm.id ? "Edit Case Study" : "Create Case Study")}
                    {editType === "resource" && (resourceForm.id ? "Edit Resource" : "Create Resource")}
                  </h2>
                  <p className="text-[10px] text-slate-500">Make modifications and click save to apply to Postgres</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => { setIsEditing(false); setEditType(null); }} className="text-slate-500 hover:text-slate-900 text-xs rounded-sm">
                  Cancel
                </Button>
              </div>

              {/* 1. Blog Form */}
              {editType === "blog" && (
                <form onSubmit={handleSaveBlog} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-xs text-slate-700 font-bold">Article Title</Label>
                      <Input
                        id="title"
                        value={blogForm.title}
                        onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                        placeholder="e.g. Automating Skill Matrices"
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="slug" className="text-xs text-slate-700 font-bold">Slug URL Path</Label>
                      <Input
                        id="slug"
                        value={blogForm.slug}
                        onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })}
                        placeholder="e.g. automating-skill-matrices"
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-xs text-slate-700 font-bold">Category</Label>
                      <Input
                        id="category"
                        value={blogForm.category}
                        onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                        placeholder="e.g. Compliance &amp; Audits"
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="readingTime" className="text-xs text-slate-700 font-bold">Reading Time</Label>
                      <Input
                        id="readingTime"
                        value={blogForm.readingTime}
                        onChange={(e) => setBlogForm({ ...blogForm, readingTime: e.target.value })}
                        placeholder="e.g. 5 min read"
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mainImage" className="text-xs text-slate-700 font-bold">Blog Image</Label>
                      <div className="flex gap-3 items-center">
                        {blogForm.mainImage && (
                          <div className="h-12 w-12 rounded-sm border border-slate-200 overflow-hidden bg-slate-50 flex-shrink-0 flex items-center justify-center">
                            <img src={blogForm.mainImage} alt="Preview" className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
                          </div>
                        )}
                        <div className="flex-1 flex gap-2">
                          <Input
                            id="mainImage"
                            value={blogForm.mainImage}
                            onChange={(e) => setBlogForm({ ...blogForm, mainImage: e.target.value })}
                            placeholder="e.g. /skillmetrics.png or paste URL"
                            className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red flex-1"
                          />
                          <div className="relative">
                            <input
                              type="file"
                              accept="image/*"
                              id="blog-image-upload"
                              className="hidden"
                              onChange={(e) => handleFileUpload(e, "blog")}
                              disabled={uploadingField === "blog"}
                            />
                            <Label
                              htmlFor="blog-image-upload"
                              className={`flex items-center gap-1.5 px-3 h-9 rounded-sm border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 cursor-pointer transition-all ${uploadingField === "blog" ? "opacity-60 pointer-events-none" : ""}`}
                            >
                              {uploadingField === "blog" ? (
                                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              ) : (
                                <Upload className="h-3.5 w-3.5" />
                              )}
                              <span>Upload</span>
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="authorName" className="text-xs text-slate-700 font-bold">Author Name</Label>
                      <Input
                        id="authorName"
                        value={blogForm.authorName}
                        onChange={(e) => setBlogForm({ ...blogForm, authorName: e.target.value })}
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="authorRole" className="text-xs text-slate-700 font-bold">Author Role</Label>
                      <Input
                        id="authorRole"
                        value={blogForm.authorRole}
                        onChange={(e) => setBlogForm({ ...blogForm, authorRole: e.target.value })}
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt" className="text-xs text-slate-700 font-bold">Short Excerpt (Summary)</Label>
                    <Textarea
                      id="excerpt"
                      value={blogForm.excerpt}
                      onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                      placeholder="Brief overview of this article..."
                      className="bg-white border-slate-200 text-slate-900 text-xs min-h-[70px] focus-visible:ring-brand-red"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content" className="text-xs text-slate-700 font-bold">Markdown Content</Label>
                    <Textarea
                      id="content"
                      value={blogForm.content}
                      onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                      placeholder="Write your article in markdown..."
                      className="bg-white border-slate-200 text-slate-900 text-xs min-h-[220px] focus-visible:ring-brand-red"
                    />
                  </div>

                  <div className="border-t border-slate-200 pt-4 space-y-4">
                    <h3 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">SEO (Search Engine Optimization)</h3>
                    
                    {/* Google Search Preview */}
                    <div className="border border-slate-100 rounded-sm p-4 bg-slate-50 space-y-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Search Engine Snippet Preview</span>
                      <div className="space-y-1">
                        <div className="text-[#1a0dab] hover:underline font-medium text-lg leading-tight truncate">
                          {blogForm.seoTitle || blogForm.title || "Untitled Blog Post"}
                        </div>
                        <div className="text-[#006621] text-xs leading-normal truncate flex items-center gap-1">
                          <span>skillmetrics.io</span>
                          <span>›</span>
                          <span>blog</span>
                          <span>›</span>
                          <span>{blogForm.slug || "post-slug"}</span>
                        </div>
                        <div className="text-[#545454] text-xs leading-snug break-words line-clamp-2">
                          {blogForm.seoDescription || blogForm.excerpt || "No description set. Add a meta description override below to specify what search engines will display."}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="seoTitle" className="text-xs text-slate-700 font-bold">Meta Title Override</Label>
                          <span className={`text-[10px] font-medium ${(blogForm.seoTitle || "").length > 60 ? "text-amber-600" : "text-slate-400"}`}>
                            {(blogForm.seoTitle || "").length}/60 chars
                          </span>
                        </div>
                        <Input
                          id="seoTitle"
                          value={blogForm.seoTitle}
                          onChange={(e) => setBlogForm({ ...blogForm, seoTitle: e.target.value })}
                          placeholder="Override search engine title"
                          className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="seoKeywords" className="text-xs text-slate-700 font-bold">Meta Keywords</Label>
                          <span className="text-[10px] text-slate-400">Press Enter or Comma to add</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 min-h-[38px] p-1.5 border border-slate-200 bg-white rounded-sm focus-within:ring-1 focus-within:ring-brand-red focus-within:border-brand-red transition-all">
                          {(blogForm.seoKeywords ? blogForm.seoKeywords.split(",").map(k => k.trim()).filter(Boolean) : []).map((kw, i) => (
                            <Badge key={i} className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-[10px] py-0.5 px-2 flex items-center gap-1 font-medium border-0 rounded-sm">
                              <span>{kw}</span>
                              <button
                                type="button"
                                onClick={() => {
                                  const currentList = blogForm.seoKeywords.split(",").map(k => k.trim()).filter(Boolean);
                                  const newList = currentList.filter((_, idx) => idx !== i);
                                  setBlogForm({ ...blogForm, seoKeywords: newList.join(", ") });
                                }}
                                className="text-slate-400 hover:text-slate-650 focus:outline-none font-bold text-xs"
                              >
                                &times;
                              </button>
                            </Badge>
                          ))}
                          <input
                            type="text"
                            placeholder={(blogForm.seoKeywords ? blogForm.seoKeywords.split(",").map(k => k.trim()).filter(Boolean) : []).length === 0 ? "Add keywords..." : ""}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === ",") {
                                e.preventDefault();
                                const val = (e.target as HTMLInputElement).value.trim();
                                if (val) {
                                  const currentList = blogForm.seoKeywords ? blogForm.seoKeywords.split(",").map(k => k.trim()).filter(Boolean) : [];
                                  if (!currentList.includes(val)) {
                                    const newList = [...currentList, val];
                                    setBlogForm({ ...blogForm, seoKeywords: newList.join(", ") });
                                  }
                                  (e.target as HTMLInputElement).value = "";
                                }
                              }
                            }}
                            className="flex-1 bg-transparent border-0 outline-none text-xs text-slate-900 p-0 h-6 min-w-[100px] focus:ring-0"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="seoDescription" className="text-xs text-slate-700 font-bold">Meta Description Override</Label>
                          <span className={`text-[10px] font-medium ${(blogForm.seoDescription || "").length > 160 ? "text-amber-600" : "text-slate-400"}`}>
                            {(blogForm.seoDescription || "").length}/160 chars
                          </span>
                        </div>
                        <Textarea
                          id="seoDescription"
                          value={blogForm.seoDescription}
                          onChange={(e) => setBlogForm({ ...blogForm, seoDescription: e.target.value })}
                          placeholder="Provide a search snippet summarizing this post..."
                          className="bg-white border-slate-200 text-slate-900 text-xs min-h-[60px] focus-visible:ring-brand-red"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4 border-t border-slate-200">
                    <Button type="button" variant="outline" onClick={() => setIsEditing(false)} className="bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900 text-xs h-9 rounded-sm">
                      Cancel
                    </Button>
                    <Button type="submit" disabled={submitting} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm">
                      {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />} Save Blog
                    </Button>
                  </div>
                </form>
              )}

              {/* 2. Case Study Form */}
              {editType === "case" && (
                <form onSubmit={handleSaveCase} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="caseTitle" className="text-xs text-slate-700 font-bold">Title</Label>
                      <Input
                        id="caseTitle"
                        value={caseForm.title}
                        onChange={(e) => setCaseForm({ ...caseForm, title: e.target.value })}
                        placeholder="e.g. FinTech Leader Automates Developer Assessments"
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="caseSlug" className="text-xs text-slate-700 font-bold">Slug URL</Label>
                      <Input
                        id="caseSlug"
                        value={caseForm.slug}
                        onChange={(e) => setCaseForm({ ...caseForm, slug: e.target.value })}
                        placeholder="e.g. fintech-leader-automates-assessments"
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="text-xs text-slate-700 font-bold">Company Name</Label>
                      <Input
                        id="companyName"
                        value={caseForm.companyName}
                        onChange={(e) => setCaseForm({ ...caseForm, companyName: e.target.value })}
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-xs text-slate-700 font-bold">Industry</Label>
                      <Input
                        id="industry"
                        value={caseForm.industry}
                        onChange={(e) => setCaseForm({ ...caseForm, industry: e.target.value })}
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="coverImage" className="text-xs text-slate-700 font-bold">Cover Image</Label>
                      <div className="flex gap-3 items-center">
                        {caseForm.coverImage && (
                          <div className="h-12 w-12 rounded-sm border border-slate-200 overflow-hidden bg-slate-50 flex-shrink-0 flex items-center justify-center">
                            <img src={caseForm.coverImage} alt="Preview" className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
                          </div>
                        )}
                        <div className="flex-1 flex gap-2">
                          <Input
                            id="coverImage"
                            value={caseForm.coverImage}
                            onChange={(e) => setCaseForm({ ...caseForm, coverImage: e.target.value })}
                            placeholder="Paste cover image URL or upload"
                            className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red flex-1"
                          />
                          <div className="relative">
                            <input
                              type="file"
                              accept="image/*"
                              id="case-image-upload"
                              className="hidden"
                              onChange={(e) => handleFileUpload(e, "case")}
                              disabled={uploadingField === "case"}
                            />
                            <Label
                              htmlFor="case-image-upload"
                              className={`flex items-center gap-1.5 px-3 h-9 rounded-sm border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 cursor-pointer transition-all ${uploadingField === "case" ? "opacity-60 pointer-events-none" : ""}`}
                            >
                              {uploadingField === "case" ? (
                                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              ) : (
                                <Upload className="h-3.5 w-3.5" />
                              )}
                              <span>Upload</span>
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="challenge" className="text-xs text-slate-700 font-bold">The Challenge</Label>
                      <Textarea
                        id="challenge"
                        value={caseForm.challenge}
                        onChange={(e) => setCaseForm({ ...caseForm, challenge: e.target.value })}
                        className="bg-white border-slate-200 text-slate-900 text-xs min-h-[60px] focus-visible:ring-brand-red"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="solution" className="text-xs text-slate-700 font-bold">The Solution</Label>
                      <Textarea
                        id="solution"
                        value={caseForm.solution}
                        onChange={(e) => setCaseForm({ ...caseForm, solution: e.target.value })}
                        className="bg-white border-slate-200 text-slate-900 text-xs min-h-[60px] focus-visible:ring-brand-red"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-slate-200 p-4 rounded-xl bg-white">
                    <div className="sm:col-span-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Metrics / Results</div>
                    <div className="space-y-2">
                      <Label className="text-[10px] text-slate-550 font-bold">Metric 1 (e.g. 75%)</Label>
                      <Input
                        value={caseForm.results[0]?.metric || ""}
                        onChange={(e) => {
                          const updated = [...caseForm.results];
                          updated[0] = { metric: e.target.value, label: updated[0]?.label || "" };
                          setCaseForm({ ...caseForm, results: updated });
                        }}
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                      <Input
                        placeholder="Label 1 (e.g. Time Saved)"
                        value={caseForm.results[0]?.label || ""}
                        onChange={(e) => {
                          const updated = [...caseForm.results];
                          updated[0] = { metric: updated[0]?.metric || "", label: e.target.value };
                          setCaseForm({ ...caseForm, results: updated });
                        }}
                        className="bg-white border-slate-200 text-slate-900 text-[10px] h-8 mt-1 focus-visible:ring-brand-red"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] text-slate-550 font-bold">Metric 2</Label>
                      <Input
                        value={caseForm.results[1]?.metric || ""}
                        onChange={(e) => {
                          const updated = [...caseForm.results];
                          updated[1] = { metric: e.target.value, label: updated[1]?.label || "" };
                          setCaseForm({ ...caseForm, results: updated });
                        }}
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                      <Input
                        placeholder="Label 2"
                        value={caseForm.results[1]?.label || ""}
                        onChange={(e) => {
                          const updated = [...caseForm.results];
                          updated[1] = { metric: updated[1]?.metric || "", label: e.target.value };
                          setCaseForm({ ...caseForm, results: updated });
                        }}
                        className="bg-white border-slate-200 text-slate-900 text-[10px] h-8 mt-1 focus-visible:ring-brand-red"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] text-slate-550 font-bold">Metric 3</Label>
                      <Input
                        value={caseForm.results[2]?.metric || ""}
                        onChange={(e) => {
                          const updated = [...caseForm.results];
                          updated[2] = { metric: e.target.value, label: updated[2]?.label || "" };
                          setCaseForm({ ...caseForm, results: updated });
                        }}
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                      <Input
                        placeholder="Label 3"
                        value={caseForm.results[2]?.label || ""}
                        onChange={(e) => {
                          const updated = [...caseForm.results];
                          updated[2] = { metric: updated[2]?.metric || "", label: e.target.value };
                          setCaseForm({ ...caseForm, results: updated });
                        }}
                        className="bg-white border-slate-200 text-slate-900 text-[10px] h-8 mt-1 focus-visible:ring-brand-red"
                      />
                    </div>
                  </div>

                  <div className="border border-slate-200 p-4 rounded-xl space-y-4 bg-white">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Testimonial</div>
                    <div className="space-y-2">
                      <Label htmlFor="quote" className="text-[10px] text-slate-500 font-bold">Quote</Label>
                      <Textarea
                        id="quote"
                        value={caseForm.testimonialQuote}
                        onChange={(e) => setCaseForm({ ...caseForm, testimonialQuote: e.target.value })}
                        className="bg-white border-slate-200 text-slate-900 text-xs min-h-[50px] focus-visible:ring-brand-red"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="author" className="text-[10px] text-slate-550 font-bold">Author Name</Label>
                        <Input
                          id="author"
                          value={caseForm.testimonialAuthor}
                          onChange={(e) => setCaseForm({ ...caseForm, testimonialAuthor: e.target.value })}
                          className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role" className="text-[10px] text-slate-550 font-bold">Author Role / Title</Label>
                        <Input
                          id="role"
                          value={caseForm.testimonialRole}
                          onChange={(e) => setCaseForm({ ...caseForm, testimonialRole: e.target.value })}
                          className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4 space-y-4">
                    <h3 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">SEO (Search Engine Optimization)</h3>
                    
                    {/* Google Search Preview */}
                    <div className="border border-slate-100 rounded-sm p-4 bg-slate-50 space-y-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Search Engine Snippet Preview</span>
                      <div className="space-y-1">
                        <div className="text-[#1a0dab] hover:underline font-medium text-lg leading-tight truncate">
                          {caseForm.seoTitle || caseForm.title || "Untitled Case Study"}
                        </div>
                        <div className="text-[#006621] text-xs leading-normal truncate flex items-center gap-1">
                          <span>skillmetrics.io</span>
                          <span>›</span>
                          <span>case-studies</span>
                          <span>›</span>
                          <span>{caseForm.slug || "case-slug"}</span>
                        </div>
                        <div className="text-[#545454] text-xs leading-snug break-words line-clamp-2">
                          {caseForm.seoDescription || caseForm.excerpt || "No description set. Add a meta description override below to specify what search engines will display."}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="caseSeoTitle" className="text-xs text-slate-700 font-bold">Meta Title Override</Label>
                          <span className={`text-[10px] font-medium ${(caseForm.seoTitle || "").length > 60 ? "text-amber-600" : "text-slate-400"}`}>
                            {(caseForm.seoTitle || "").length}/60 chars
                          </span>
                        </div>
                        <Input
                          id="caseSeoTitle"
                          value={caseForm.seoTitle}
                          onChange={(e) => setCaseForm({ ...caseForm, seoTitle: e.target.value })}
                          placeholder="Override search engine title"
                          className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="caseSeoKeywords" className="text-xs text-slate-700 font-bold">Meta Keywords</Label>
                          <span className="text-[10px] text-slate-400">Press Enter or Comma to add</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 min-h-[38px] p-1.5 border border-slate-200 bg-white rounded-sm focus-within:ring-1 focus-within:ring-brand-red focus-within:border-brand-red transition-all">
                          {(caseForm.seoKeywords ? caseForm.seoKeywords.split(",").map(k => k.trim()).filter(Boolean) : []).map((kw, i) => (
                            <Badge key={i} className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-[10px] py-0.5 px-2 flex items-center gap-1 font-medium border-0 rounded-sm">
                              <span>{kw}</span>
                              <button
                                type="button"
                                onClick={() => {
                                  const currentList = caseForm.seoKeywords.split(",").map(k => k.trim()).filter(Boolean);
                                  const newList = currentList.filter((_, idx) => idx !== i);
                                  setCaseForm({ ...caseForm, seoKeywords: newList.join(", ") });
                                }}
                                className="text-slate-400 hover:text-slate-650 focus:outline-none font-bold text-xs"
                              >
                                &times;
                              </button>
                            </Badge>
                          ))}
                          <input
                            type="text"
                            placeholder={(caseForm.seoKeywords ? caseForm.seoKeywords.split(",").map(k => k.trim()).filter(Boolean) : []).length === 0 ? "Add keywords..." : ""}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === ",") {
                                e.preventDefault();
                                const val = (e.target as HTMLInputElement).value.trim();
                                if (val) {
                                  const currentList = caseForm.seoKeywords ? caseForm.seoKeywords.split(",").map(k => k.trim()).filter(Boolean) : [];
                                  if (!currentList.includes(val)) {
                                    const newList = [...currentList, val];
                                    setCaseForm({ ...caseForm, seoKeywords: newList.join(", ") });
                                  }
                                  (e.target as HTMLInputElement).value = "";
                                }
                              }
                            }}
                            className="flex-1 bg-transparent border-0 outline-none text-xs text-slate-900 p-0 h-6 min-w-[100px] focus:ring-0"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="caseSeoDescription" className="text-xs text-slate-700 font-bold">Meta Description Override</Label>
                          <span className={`text-[10px] font-medium ${(caseForm.seoDescription || "").length > 160 ? "text-amber-600" : "text-slate-400"}`}>
                            {(caseForm.seoDescription || "").length}/160 chars
                          </span>
                        </div>
                        <Textarea
                          id="caseSeoDescription"
                          value={caseForm.seoDescription}
                          onChange={(e) => setCaseForm({ ...caseForm, seoDescription: e.target.value })}
                          placeholder="Provide a search snippet summarizing this case study..."
                          className="bg-white border-slate-200 text-slate-900 text-xs min-h-[60px] focus-visible:ring-brand-red"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4 border-t border-slate-200">
                    <Button type="button" variant="outline" onClick={() => setIsEditing(false)} className="bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900 text-xs h-9 rounded-sm">
                      Cancel
                    </Button>
                    <Button type="submit" disabled={submitting} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm">
                      {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />} Save Case Study
                    </Button>
                  </div>
                </form>
              )}

              {/* 3. Resource Form */}
              {editType === "resource" && (
                <form onSubmit={handleSaveResource} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="resTitle" className="text-xs text-slate-700 font-bold">Title</Label>
                      <Input
                        id="resTitle"
                        value={resourceForm.title}
                        onChange={(e) => setResourceForm({ ...resourceForm, title: e.target.value })}
                        placeholder="e.g. The Enterprise Guide to Competency Frameworks"
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resSlug" className="text-xs text-slate-700 font-bold">Slug URL</Label>
                      <Input
                        id="resSlug"
                        value={resourceForm.slug}
                        onChange={(e) => setResourceForm({ ...resourceForm, slug: e.target.value })}
                        placeholder="e.g. enterprise-guide-competency-frameworks"
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="resCategory" className="text-xs text-slate-700 font-bold">Category</Label>
                      <Input
                        id="resCategory"
                        value={resourceForm.category}
                        onChange={(e) => setResourceForm({ ...resourceForm, category: e.target.value })}
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resBadge" className="text-xs text-slate-700 font-bold">Badge</Label>
                      <Input
                        id="resBadge"
                        value={resourceForm.badge}
                        onChange={(e) => setResourceForm({ ...resourceForm, badge: e.target.value })}
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resReadTime" className="text-xs text-slate-700 font-bold">Read Time</Label>
                      <Input
                        id="resReadTime"
                        value={resourceForm.readTime}
                        onChange={(e) => setResourceForm({ ...resourceForm, readTime: e.target.value })}
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="resAuthor" className="text-xs text-slate-700 font-bold">Author</Label>
                      <Input
                        id="resAuthor"
                        value={resourceForm.author}
                        onChange={(e) => setResourceForm({ ...resourceForm, author: e.target.value })}
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resAuthorRole" className="text-xs text-slate-700 font-bold">Author Role</Label>
                      <Input
                        id="resAuthorRole"
                        value={resourceForm.authorRole}
                        onChange={(e) => setResourceForm({ ...resourceForm, authorRole: e.target.value })}
                        className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resImage" className="text-xs text-slate-700 font-bold">Image URL</Label>
                      <div className="flex gap-3 items-center">
                        {resourceForm.image && (
                          <div className="h-12 w-12 rounded-sm border border-slate-200 overflow-hidden bg-slate-50 flex-shrink-0 flex items-center justify-center">
                            <img src={resourceForm.image} alt="Preview" className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
                          </div>
                        )}
                        <div className="flex-1 flex gap-2">
                          <Input
                            id="resImage"
                            value={resourceForm.image}
                            onChange={(e) => setResourceForm({ ...resourceForm, image: e.target.value })}
                            placeholder="Paste resource image URL or upload"
                            className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red flex-1"
                          />
                          <div className="relative">
                            <input
                              type="file"
                              accept="image/*"
                              id="resource-image-upload"
                              className="hidden"
                              onChange={(e) => handleFileUpload(e, "resource")}
                              disabled={uploadingField === "resource"}
                            />
                            <Label
                              htmlFor="resource-image-upload"
                              className={`flex items-center gap-1.5 px-3 h-9 rounded-sm border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 cursor-pointer transition-all ${uploadingField === "resource" ? "opacity-60 pointer-events-none" : ""}`}
                            >
                              {uploadingField === "resource" ? (
                                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              ) : (
                                <Upload className="h-3.5 w-3.5" />
                              )}
                              <span>Upload</span>
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resSummary" className="text-xs text-slate-700 font-bold">Summary</Label>
                    <Textarea
                      id="resSummary"
                      value={resourceForm.summary}
                      onChange={(e) => setResourceForm({ ...resourceForm, summary: e.target.value })}
                      className="bg-white border-slate-200 text-slate-900 text-xs min-h-[50px] focus-visible:ring-brand-red"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs text-slate-700 font-bold">Key Takeaways (One per line)</Label>
                    <Textarea
                      value={resourceForm.keyTakeaways.join("\n")}
                      onChange={(e) => setResourceForm({ ...resourceForm, keyTakeaways: e.target.value.split("\n").filter(Boolean) })}
                      placeholder="Takeaway 1&#10;Takeaway 2&#10;Takeaway 3"
                      className="bg-white border-slate-200 text-slate-900 text-xs min-h-[80px] focus-visible:ring-brand-red"
                    />
                  </div>

                  <div className="border-t border-slate-200 pt-4 space-y-4">
                    <h3 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">SEO (Search Engine Optimization)</h3>
                    
                    {/* Google Search Preview */}
                    <div className="border border-slate-100 rounded-sm p-4 bg-slate-50 space-y-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Search Engine Snippet Preview</span>
                      <div className="space-y-1">
                        <div className="text-[#1a0dab] hover:underline font-medium text-lg leading-tight truncate">
                          {resourceForm.seoTitle || resourceForm.title || "Untitled Resource"}
                        </div>
                        <div className="text-[#006621] text-xs leading-normal truncate flex items-center gap-1">
                          <span>skillmetrics.io</span>
                          <span>›</span>
                          <span>resources</span>
                          <span>›</span>
                          <span>{resourceForm.slug || "resource-slug"}</span>
                        </div>
                        <div className="text-[#545454] text-xs leading-snug break-words line-clamp-2">
                          {resourceForm.seoDescription || resourceForm.summary || "No description set. Add a meta description override below to specify what search engines will display."}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="resSeoTitle" className="text-xs text-slate-700 font-bold">Meta Title Override</Label>
                          <span className={`text-[10px] font-medium ${(resourceForm.seoTitle || "").length > 60 ? "text-amber-600" : "text-slate-400"}`}>
                            {(resourceForm.seoTitle || "").length}/60 chars
                          </span>
                        </div>
                        <Input
                          id="resSeoTitle"
                          value={resourceForm.seoTitle}
                          onChange={(e) => setResourceForm({ ...resourceForm, seoTitle: e.target.value })}
                          placeholder="Override search engine title"
                          className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="resSeoKeywords" className="text-xs text-slate-700 font-bold">Meta Keywords</Label>
                          <span className="text-[10px] text-slate-400">Press Enter or Comma to add</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 min-h-[38px] p-1.5 border border-slate-200 bg-white rounded-sm focus-within:ring-1 focus-within:ring-brand-red focus-within:border-brand-red transition-all">
                          {(resourceForm.seoKeywords ? resourceForm.seoKeywords.split(",").map(k => k.trim()).filter(Boolean) : []).map((kw, i) => (
                            <Badge key={i} className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-[10px] py-0.5 px-2 flex items-center gap-1 font-medium border-0 rounded-sm">
                              <span>{kw}</span>
                              <button
                                type="button"
                                onClick={() => {
                                  const currentList = resourceForm.seoKeywords.split(",").map(k => k.trim()).filter(Boolean);
                                  const newList = currentList.filter((_, idx) => idx !== i);
                                  setResourceForm({ ...resourceForm, seoKeywords: newList.join(", ") });
                                }}
                                className="text-slate-400 hover:text-slate-650 focus:outline-none font-bold text-xs"
                              >
                                &times;
                              </button>
                            </Badge>
                          ))}
                          <input
                            type="text"
                            placeholder={(resourceForm.seoKeywords ? resourceForm.seoKeywords.split(",").map(k => k.trim()).filter(Boolean) : []).length === 0 ? "Add keywords..." : ""}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === ",") {
                                e.preventDefault();
                                const val = (e.target as HTMLInputElement).value.trim();
                                if (val) {
                                  const currentList = resourceForm.seoKeywords ? resourceForm.seoKeywords.split(",").map(k => k.trim()).filter(Boolean) : [];
                                  if (!currentList.includes(val)) {
                                    const newList = [...currentList, val];
                                    setResourceForm({ ...resourceForm, seoKeywords: newList.join(", ") });
                                  }
                                  (e.target as HTMLInputElement).value = "";
                                }
                              }
                            }}
                            className="flex-1 bg-transparent border-0 outline-none text-xs text-slate-900 p-0 h-6 min-w-[100px] focus:ring-0"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="resSeoDescription" className="text-xs text-slate-700 font-bold">Meta Description Override</Label>
                          <span className={`text-[10px] font-medium ${(resourceForm.seoDescription || "").length > 160 ? "text-amber-600" : "text-slate-400"}`}>
                            {(resourceForm.seoDescription || "").length}/160 chars
                          </span>
                        </div>
                        <Textarea
                          id="resSeoDescription"
                          value={resourceForm.seoDescription}
                          onChange={(e) => setResourceForm({ ...resourceForm, seoDescription: e.target.value })}
                          placeholder="Provide a search snippet summarizing this resource..."
                          className="bg-white border-slate-200 text-slate-900 text-xs min-h-[60px] focus-visible:ring-brand-red"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4 border-t border-slate-200">
                    <Button type="button" variant="outline" onClick={() => setIsEditing(false)} className="bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900 text-xs h-9 rounded-sm">
                      Cancel
                    </Button>
                    <Button type="submit" disabled={submitting} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm">
                      {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />} Save Resource
                    </Button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Tables and Settings Layout */
            <div className="space-y-6">
              {/* 1. Submissions Tab */}
              {activeTab === "submissions" && (
                <div className="space-y-8">
                  {/* Contact Submissions */}
                  <Card className="bg-white border-slate-200 shadow-sm p-0">
                    <CardHeader className="border-b border-slate-100 px-6 py-4 flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-sm font-bold text-slate-900">Contact Page Submissions</CardTitle>
                        <CardDescription className="text-[10px] text-slate-500">Client inquiries received via the contact page</CardDescription>
                      </div>
                      <Badge className="bg-brand-red/10 text-brand-red border border-brand-red/10 font-bold">{submissions.contactSubmissions.length}</Badge>
                    </CardHeader>
                    <CardContent className="p-0">
                      {submissions.contactSubmissions.length === 0 ? (
                        <div className="py-12 text-center text-xs text-slate-400">No submissions found.</div>
                      ) : (
                        <>
                          {/* Desktop view */}
                          <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                                  <th className="px-6 py-3">Client</th>
                                  <th className="px-6 py-3">Message</th>
                                  <th className="px-6 py-3">Details</th>
                                  <th className="px-6 py-3">Submitted At</th>
                                  <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {submissions.contactSubmissions.map((sub) => (
                                  <tr key={sub.id} className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4">
                                      <div className="font-bold text-slate-900">{sub.name}</div>
                                      <div className="text-[10px] text-slate-550">{sub.email}</div>
                                    </td>
                                    <td className="px-6 py-4 max-w-xs truncate text-slate-700" title={sub.message}>
                                      {sub.message}
                                    </td>
                                    <td className="px-6 py-4 text-slate-700">
                                      <div>{sub.phone}</div>
                                      <div className="text-[10px] text-slate-500">{sub.company || "No Company"}</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 text-[10px]">
                                      {new Date(sub.submitted_at).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDeleteSubmission(sub.id, "contact")}
                                        className="text-slate-440 hover:text-brand-red hover:bg-brand-red/10 h-7 w-7 rounded-sm"
                                      >
                                        <Trash2 className="h-3.5 w-3.5" />
                                      </Button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Mobile view */}
                          <div className="block md:hidden divide-y divide-slate-100">
                            {submissions.contactSubmissions.map((sub) => (
                              <div key={sub.id} className="p-4 space-y-2">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="font-bold text-slate-900">{sub.name}</div>
                                    <div className="text-[10px] text-slate-550">{sub.email}</div>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDeleteSubmission(sub.id, "contact")}
                                    className="text-slate-400 hover:text-brand-red hover:bg-brand-red/10 h-7 w-7 rounded-sm"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </Button>
                                </div>
                                <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-sm border border-slate-100 break-words">
                                  {sub.message}
                                </div>
                                <div className="flex justify-between text-[10px] text-slate-500 pt-1">
                                  <div>
                                    <span className="font-semibold text-slate-700">{sub.phone}</span>
                                    {sub.company && ` • ${sub.company}`}
                                  </div>
                                  <div>{new Date(sub.submitted_at).toLocaleString()}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>

                  {/* Demo Requests */}
                  <Card className="bg-white border-slate-200 shadow-sm p-0">
                    <CardHeader className="border-b border-slate-100 px-6 py-4 flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-sm font-bold text-slate-900">Book a Demo Requests</CardTitle>
                        <CardDescription className="text-[10px] text-slate-500">Prospective clients requesting platform demos</CardDescription>
                      </div>
                      <Badge className="bg-brand-red/10 text-brand-red border border-brand-red/10 font-bold">{submissions.demoRequests.length}</Badge>
                    </CardHeader>
                    <CardContent className="p-0">
                      {submissions.demoRequests.length === 0 ? (
                        <div className="py-12 text-center text-xs text-slate-400">No demo requests found.</div>
                      ) : (
                        <>
                          {/* Desktop view */}
                          <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                                  <th className="px-6 py-3">User</th>
                                  <th className="px-6 py-3">Company</th>
                                  <th className="px-6 py-3">Requirements</th>
                                  <th className="px-6 py-3">Submitted At</th>
                                  <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {submissions.demoRequests.map((sub) => (
                                  <tr key={sub.id} className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4">
                                      <div className="font-bold text-slate-900">{sub.name}</div>
                                      <div className="text-[10px] text-slate-550">{sub.email}</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-900 font-bold">{sub.company}</td>
                                    <td className="px-6 py-4 max-w-xs truncate text-slate-700" title={sub.requirement}>
                                      {sub.requirement || "No custom note"}
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 text-[10px]">
                                      {new Date(sub.submitted_at).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDeleteSubmission(sub.id, "demo")}
                                        className="text-slate-400 hover:text-brand-red hover:bg-brand-red/10 h-7 w-7 rounded-sm"
                                      >
                                        <Trash2 className="h-3.5 w-3.5" />
                                      </Button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Mobile view */}
                          <div className="block md:hidden divide-y divide-slate-100">
                            {submissions.demoRequests.map((sub) => (
                              <div key={sub.id} className="p-4 space-y-2">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="font-bold text-slate-900">{sub.name}</div>
                                    <div className="text-[10px] text-slate-550">{sub.email}</div>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDeleteSubmission(sub.id, "demo")}
                                    className="text-slate-400 hover:text-brand-red hover:bg-brand-red/10 h-7 w-7 rounded-sm"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </Button>
                                </div>
                                <div className="text-xs text-slate-900">
                                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Company</span>
                                  {sub.company}
                                </div>
                                {sub.requirement && (
                                  <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-sm border border-slate-100 break-words">
                                    {sub.requirement}
                                  </div>
                                )}
                                <div className="text-[10px] text-slate-500 pt-1 text-right">
                                  {new Date(sub.submitted_at).toLocaleString()}
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>

                  {/* Newsletter Subscriptions */}
                  <Card className="bg-white border-slate-200 shadow-sm p-0">
                    <CardHeader className="border-b border-slate-100 px-6 py-4 flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-sm font-bold text-slate-900">Newsletter Subscriptions</CardTitle>
                        <CardDescription className="text-[10px] text-slate-500">Subscribers list from newsletter form</CardDescription>
                      </div>
                      <Badge className="bg-brand-red/10 text-brand-red border border-brand-red/10 font-bold">{submissions.newsletterSubscriptions.length}</Badge>
                    </CardHeader>
                    <CardContent className="p-0">
                      {submissions.newsletterSubscriptions.length === 0 ? (
                        <div className="py-12 text-center text-xs text-slate-400">No subscriptions found.</div>
                      ) : (
                        <>
                          {/* Desktop view */}
                          <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                                  <th className="px-6 py-3">Email Address</th>
                                  <th className="px-6 py-3">Subscribed At</th>
                                  <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {submissions.newsletterSubscriptions.map((sub) => (
                                  <tr key={sub.id} className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 font-bold text-slate-900">{sub.email}</td>
                                    <td className="px-6 py-4 text-slate-500 text-[10px]">
                                      {new Date(sub.subscribed_at).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDeleteSubmission(sub.id, "newsletter")}
                                        className="text-slate-400 hover:text-brand-red hover:bg-brand-red/10 h-7 w-7 rounded-sm"
                                      >
                                        <Trash2 className="h-3.5 w-3.5" />
                                      </Button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Mobile view */}
                          <div className="block md:hidden divide-y divide-slate-100">
                            {submissions.newsletterSubscriptions.map((sub) => (
                              <div key={sub.id} className="p-4 flex items-center justify-between gap-3">
                                <div className="min-w-0 flex-1">
                                  <div className="font-bold text-slate-900 truncate">{sub.email}</div>
                                  <div className="text-[10px] text-slate-550 mt-0.5">
                                    {new Date(sub.subscribed_at).toLocaleString()}
                                  </div>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleDeleteSubmission(sub.id, "newsletter")}
                                  className="text-slate-400 hover:text-brand-red hover:bg-brand-red/10 h-7 w-7 rounded-sm shrink-0"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* 2. Blogs Tab */}
              {activeTab === "blogs" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">Blog Articles</h2>
                      <p className="text-[10px] text-slate-500">Total articles in Postgres: {blogs.length}</p>
                    </div>
                    <Button onClick={() => startEditBlog()} className="bg-brand-red hover:bg-brand-red/100 text-white font-bold text-xs h-9 gap-1 rounded-sm">
                      <Plus className="h-3.5 w-3.5" /> Add Post
                    </Button>
                  </div>

                  <Card className="bg-white border-slate-200 shadow-sm p-0">
                    <CardContent className="p-0">
                      {blogs.length === 0 ? (
                        <div className="py-12 text-center text-xs text-slate-400">No blog posts found.</div>
                      ) : (
                        <>
                          {/* Desktop view */}
                          <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                                  <th className="px-6 py-3">Article</th>
                                  <th className="px-6 py-3">Category</th>
                                  <th className="px-6 py-3">Author</th>
                                  <th className="px-6 py-3">Published Date</th>
                                  <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {blogs.map((blog) => (
                                  <tr key={blog.id} className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4">
                                      <div className="font-bold text-slate-900">{blog.title}</div>
                                      <div className="text-[10px] text-slate-550">/{blog.slug}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                      <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200 text-[10px]">{blog.category}</Badge>
                                    </td>
                                    <td className="px-6 py-4">
                                      <div className="font-bold text-slate-900">{blog.author_name}</div>
                                      <div className="text-[10px] text-slate-550">{blog.author_role}</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 text-[10px]">
                                      {new Date(blog.published_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-right flex justify-end gap-1.5">
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => startEditBlog(blog)}
                                        className="text-slate-450 hover:text-slate-900 hover:bg-slate-100 h-7 w-7 rounded-sm"
                                      >
                                        <Edit className="h-3.5 w-3.5" />
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDeleteItem(blog.id, "blog")}
                                        className="text-slate-450 hover:text-brand-red hover:bg-brand-red/10 h-7 w-7 rounded-sm"
                                      >
                                        <Trash2 className="h-3.5 w-3.5" />
                                      </Button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Mobile view */}
                          <div className="block md:hidden divide-y divide-slate-100">
                            {blogs.map((blog) => (
                              <div key={blog.id} className="p-4 space-y-3">
                                <div className="flex justify-between items-start">
                                  <div className="min-w-0">
                                    <div className="font-bold text-slate-900 leading-snug">{blog.title}</div>
                                    <div className="text-[10px] text-slate-550 mt-0.5">/{blog.slug}</div>
                                  </div>
                                  <div className="flex gap-1 shrink-0 ml-2">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => startEditBlog(blog)}
                                      className="text-slate-455 hover:text-slate-900 hover:bg-slate-100 h-7 w-7 rounded-sm"
                                    >
                                      <Edit className="h-3.5 w-3.5" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleDeleteItem(blog.id, "blog")}
                                      className="text-slate-455 hover:text-brand-red hover:bg-brand-red/10 h-7 w-7 rounded-sm"
                                    >
                                      <Trash2 className="h-3.5 w-3.5" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2 items-center justify-between text-[10px] text-slate-500 pt-1">
                                  <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200 text-[9px]">{blog.category}</Badge>
                                    <span>by <strong className="text-slate-700">{blog.author_name}</strong></span>
                                  </div>
                                  <div>{new Date(blog.published_at).toLocaleDateString()}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* 3. Case Studies Tab */}
              {activeTab === "cases" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">Case Studies</h2>
                      <p className="text-[10px] text-slate-500">Total case studies in Postgres: {caseStudies.length}</p>
                    </div>
                    <Button onClick={() => startEditCase()} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1 rounded-sm">
                      <Plus className="h-3.5 w-3.5" /> Add Case Study
                    </Button>
                  </div>

                  <Card className="bg-white border-slate-200 shadow-sm p-0">
                    <CardContent className="p-0">
                      {caseStudies.length === 0 ? (
                        <div className="py-12 text-center text-xs text-slate-400">No case studies found.</div>
                      ) : (
                        <>
                          {/* Desktop view */}
                          <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                                  <th className="px-6 py-3">Case Study</th>
                                  <th className="px-6 py-3">Company</th>
                                  <th className="px-6 py-3">Industry</th>
                                  <th className="px-6 py-3">Published Date</th>
                                  <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {caseStudies.map((cs) => (
                                  <tr key={cs.id} className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4">
                                      <div className="font-bold text-slate-900">{cs.title}</div>
                                      <div className="text-[10px] text-slate-505">/{cs.slug}</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-900 font-bold">{cs.company_name}</td>
                                    <td className="px-6 py-4">
                                      <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200 text-[10px]">{cs.industry}</Badge>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 text-[10px]">
                                      {new Date(cs.published_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-right flex justify-end gap-1.5">
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => startEditCase(cs)}
                                        className="text-slate-450 hover:text-slate-900 hover:bg-slate-100 h-7 w-7 rounded-sm"
                                      >
                                        <Edit className="h-3.5 w-3.5" />
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDeleteItem(cs.id, "case")}
                                        className="text-slate-450 hover:text-brand-red hover:bg-brand-red/10 h-7 w-7 rounded-sm"
                                      >
                                        <Trash2 className="h-3.5 w-3.5" />
                                      </Button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Mobile view */}
                          <div className="block md:hidden divide-y divide-slate-100">
                            {caseStudies.map((cs) => (
                              <div key={cs.id} className="p-4 space-y-3">
                                <div className="flex justify-between items-start">
                                  <div className="min-w-0">
                                    <div className="font-bold text-slate-900 leading-snug">{cs.title}</div>
                                    <div className="text-[10px] text-slate-505 mt-0.5">/{cs.slug}</div>
                                  </div>
                                  <div className="flex gap-1 shrink-0 ml-2">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => startEditCase(cs)}
                                      className="text-slate-450 hover:text-slate-900 hover:bg-slate-100 h-7 w-7 rounded-sm"
                                    >
                                      <Edit className="h-3.5 w-3.5" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleDeleteItem(cs.id, "case")}
                                      className="text-slate-450 hover:text-brand-red hover:bg-brand-red/10 h-7 w-7 rounded-sm"
                                    >
                                      <Trash2 className="h-3.5 w-3.5" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2 items-center justify-between text-[10px] text-slate-500 pt-1">
                                  <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200 text-[9px]">{cs.industry}</Badge>
                                    <span className="font-bold text-slate-700">{cs.company_name}</span>
                                  </div>
                                  <div>{new Date(cs.published_at).toLocaleDateString()}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* 4. Resources Tab */}
              {activeTab === "resources" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">Resources</h2>
                      <p className="text-[10px] text-slate-500">Total resources in Postgres: {resources.length}</p>
                    </div>
                    <Button onClick={() => startEditResource()} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1 rounded-sm">
                      <Plus className="h-3.5 w-3.5" /> Add Resource
                    </Button>
                  </div>

                  <Card className="bg-white border-slate-200 shadow-sm p-0">
                    <CardContent className="p-0">
                      {resources.length === 0 ? (
                        <div className="py-12 text-center text-xs text-slate-400">No resources found.</div>
                      ) : (
                        <>
                          {/* Desktop view */}
                          <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                                  <th className="px-6 py-3">Resource</th>
                                  <th className="px-6 py-3">Category</th>
                                  <th className="px-6 py-3">Badge</th>
                                  <th className="px-6 py-3">Published Date</th>
                                  <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {resources.map((r) => (
                                  <tr key={r.id} className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4">
                                      <div className="font-bold text-slate-900">{r.title}</div>
                                      <div className="text-[10px] text-slate-500">/{r.slug}</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-700">{r.category}</td>
                                    <td className="px-6 py-4">
                                      <Badge className="bg-slate-100 text-brand-red border border-slate-200 text-[10px]">{r.badge || "Resource"}</Badge>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 text-[10px]">
                                      {new Date(r.published_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-right flex justify-end gap-1.5">
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => startEditResource(r)}
                                        className="text-slate-450 hover:text-slate-900 hover:bg-slate-100 h-7 w-7 rounded-sm"
                                      >
                                        <Edit className="h-3.5 w-3.5" />
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDeleteItem(r.id, "resource")}
                                        className="text-slate-450 hover:text-brand-red hover:bg-brand-red/10 h-7 w-7 rounded-sm"
                                      >
                                        <Trash2 className="h-3.5 w-3.5" />
                                      </Button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Mobile view */}
                          <div className="block md:hidden divide-y divide-slate-100">
                            {resources.map((r) => (
                              <div key={r.id} className="p-4 space-y-3">
                                <div className="flex justify-between items-start">
                                  <div className="min-w-0">
                                    <div className="font-bold text-slate-900 leading-snug">{r.title}</div>
                                    <div className="text-[10px] text-slate-500 mt-0.5">/{r.slug}</div>
                                  </div>
                                  <div className="flex gap-1 shrink-0 ml-2">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => startEditResource(r)}
                                      className="text-slate-450 hover:text-slate-900 hover:bg-slate-100 h-7 w-7 rounded-sm"
                                    >
                                      <Edit className="h-3.5 w-3.5" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleDeleteItem(r.id, "resource")}
                                      className="text-slate-450 hover:text-brand-red hover:bg-brand-red/10 h-7 w-7 rounded-sm"
                                    >
                                      <Trash2 className="h-3.5 w-3.5" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2 items-center justify-between text-[10px] text-slate-500 pt-1">
                                  <div className="flex items-center gap-2">
                                    <Badge className="bg-slate-100 text-brand-red border border-slate-200 text-[9px]">{r.badge || "Resource"}</Badge>
                                    <span className="text-slate-700">{r.category}</span>
                                  </div>
                                  <div>{new Date(r.published_at).toLocaleDateString()}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* 5. Site Settings Tab */}
              {activeTab === "settings" && (
                <div className="max-w-4xl mx-auto space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Global Site Content &amp; Settings</h2>
                    <p className="text-[10px] text-slate-500">Customize the landing page layout and copywriting</p>
                  </div>

                  <form onSubmit={(e) => { e.preventDefault(); handleSaveSettings("site", siteSettings); }} className="space-y-6">
                    {/* Hero Section settings */}
                    <Card className="bg-white border-slate-200 shadow-sm">
                      <CardHeader className="border-b border-slate-100 px-6 py-4">
                        <CardTitle className="text-sm font-bold text-slate-800">Hero Landing Section</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-2">
                          <Label className="text-xs text-slate-700 font-bold">Hero Headline Title</Label>
                          <Input
                            value={siteSettings.hero_title || ""}
                            onChange={(e) => setSiteSettings({ ...siteSettings, hero_title: e.target.value })}
                            className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs text-slate-700 font-bold">Hero Subtitle Paragraph</Label>
                          <Textarea
                            value={siteSettings.hero_subtitle || ""}
                            onChange={(e) => setSiteSettings({ ...siteSettings, hero_subtitle: e.target.value })}
                            className="bg-white border-slate-200 text-slate-900 text-xs min-h-[70px] focus-visible:ring-brand-red"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Hero CTA Button Text</Label>
                            <Input
                              value={siteSettings.hero_cta_text || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, hero_cta_text: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Calendly URL Link</Label>
                            <Input
                              value={siteSettings.calendly_url || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, calendly_url: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Features copywriting */}
                    <Card className="bg-white border-slate-200 shadow-sm">
                      <CardHeader className="border-b border-slate-100 px-6 py-4">
                        <CardTitle className="text-sm font-bold text-slate-800">Features &amp; Comparison Headers</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Features Title</Label>
                            <Input
                              value={siteSettings.features_title || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, features_title: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Features Subtitle</Label>
                            <Input
                              value={siteSettings.features_subtitle || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, features_subtitle: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Comparison Title</Label>
                            <Input
                              value={siteSettings.comparison_title || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, comparison_title: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Comparison Subtitle</Label>
                            <Input
                              value={siteSettings.comparison_subtitle || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, comparison_subtitle: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Stats & Testimony */}
                    <Card className="bg-white border-slate-200 shadow-sm">
                      <CardHeader className="border-b border-slate-100 px-6 py-4">
                        <CardTitle className="text-sm font-bold text-slate-800">ROI &amp; Stats Configuration</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Stat 1 Value</Label>
                            <Input
                              value={siteSettings.stat1_value || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, stat1_value: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                            <Input
                              placeholder="Stat 1 Label"
                              value={siteSettings.stat1_label || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, stat1_label: e.target.value })}
                              className="bg-white border-slate-200 text-slate-600 text-[10px] h-8 mt-1.5 focus-visible:ring-brand-red"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Stat 2 Value</Label>
                            <Input
                              value={siteSettings.stat2_value || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, stat2_value: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                            <Input
                              placeholder="Stat 2 Label"
                              value={siteSettings.stat2_label || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, stat2_label: e.target.value })}
                              className="bg-white border-slate-200 text-slate-600 text-[10px] h-8 mt-1.5 focus-visible:ring-brand-red"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Stat 3 Value</Label>
                            <Input
                              value={siteSettings.stat3_value || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, stat3_value: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                            <Input
                              placeholder="Stat 3 Label"
                              value={siteSettings.stat3_label || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, stat3_label: e.target.value })}
                              className="bg-white border-slate-200 text-slate-600 text-[10px] h-8 mt-1.5 focus-visible:ring-brand-red"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">ROI Section Title</Label>
                            <Input
                              value={siteSettings.roi_title || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, roi_title: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">ROI Section Subtitle</Label>
                            <Input
                              value={siteSettings.roi_subtitle || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, roi_subtitle: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Announcement Banner */}
                    <Card className="bg-white border-slate-200 shadow-sm">
                      <CardHeader className="border-b border-slate-100 px-6 py-4 flex flex-row items-center justify-between">
                        <CardTitle className="text-sm font-bold text-slate-800">Top Announcement Banner</CardTitle>
                        <Switch
                          checked={siteSettings.banner_enabled || false}
                          onCheckedChange={(checked) => setSiteSettings({ ...siteSettings, banner_enabled: checked })}
                        />
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Banner Text Copy</Label>
                            <Input
                              disabled={!siteSettings.banner_enabled}
                              value={siteSettings.banner_text || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, banner_text: e.target.value })}
                              placeholder="e.g. ISO 27001 compliance tool is now live!"
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 disabled:opacity-40 focus-visible:ring-brand-red"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Banner Redirect Link</Label>
                            <Input
                              disabled={!siteSettings.banner_enabled}
                              value={siteSettings.banner_link || ""}
                              onChange={(e) => setSiteSettings({ ...siteSettings, banner_link: e.target.value })}
                              placeholder="e.g. /blog/automating-skill-matrices"
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 disabled:opacity-40 focus-visible:ring-brand-red"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex gap-3 justify-end pt-2">
                      <Button type="submit" disabled={submitting} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm">
                        {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />} Save Site Settings
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {/* 6. Contact Settings Tab */}
              {activeTab === "contact_settings" && (
                <div className="max-w-4xl mx-auto space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Contact Page Configuration</h2>
                    <p className="text-[10px] text-slate-500">Configure corporate address, contact email, and support parameters</p>
                  </div>

                  <form onSubmit={(e) => { e.preventDefault(); handleSaveSettings("contact", contactSettings); }} className="space-y-6">
                    <Card className="bg-white border-slate-200 shadow-sm">
                      <CardHeader className="border-b border-slate-100 px-6 py-4">
                        <CardTitle className="text-sm font-bold text-slate-800">General Inbound Settings</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Contact Page Hero Title</Label>
                            <Input
                              value={contactSettings.hero_title || ""}
                              onChange={(e) => setContactSettings({ ...contactSettings, hero_title: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Contact Page Hero Subtitle</Label>
                            <Input
                              value={contactSettings.hero_subtitle || ""}
                              onChange={(e) => setContactSettings({ ...contactSettings, hero_subtitle: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-4">
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Central Support Email</Label>
                            <Input
                              value={contactSettings.email || ""}
                              onChange={(e) => setContactSettings({ ...contactSettings, email: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">Operating Hours Copy</Label>
                            <Input
                              value={contactSettings.operating_hours || ""}
                              onChange={(e) => setContactSettings({ ...contactSettings, operating_hours: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-slate-700 font-bold">SLA/Support Response Note</Label>
                            <Input
                              value={contactSettings.sla_note || ""}
                              onChange={(e) => setContactSettings({ ...contactSettings, sla_note: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Offices settings */}
                    <Card className="bg-white border-slate-200 shadow-sm">
                      <CardHeader className="border-b border-slate-100 px-6 py-4">
                        <CardTitle className="text-sm font-bold text-slate-800">Office Locations Details</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-6">
                        {/* UK Office */}
                        <div className="space-y-4">
                          <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">UK Office Location</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label className="text-[10px] text-slate-500 font-bold">Office Label</Label>
                              <Input
                                value={contactSettings.uk_office_label || ""}
                                onChange={(e) => setContactSettings({ ...contactSettings, uk_office_label: e.target.value })}
                                className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[10px] text-slate-500 font-bold">Badge Text</Label>
                              <Input
                                value={contactSettings.uk_office_badge || ""}
                                onChange={(e) => setContactSettings({ ...contactSettings, uk_office_badge: e.target.value })}
                                className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[10px] text-slate-500 font-bold">Phone Number</Label>
                              <Input
                                value={contactSettings.uk_office_phone || ""}
                                onChange={(e) => setContactSettings({ ...contactSettings, uk_office_phone: e.target.value })}
                                className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] text-slate-500 font-bold">Postal Address</Label>
                            <Input
                              value={contactSettings.uk_office_address || ""}
                              onChange={(e) => setContactSettings({ ...contactSettings, uk_office_address: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                        </div>

                        {/* India Office */}
                        <div className="space-y-4 border-t border-slate-100 pt-4">
                          <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">India Office Location</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                            <div className="space-y-2">
                              <Label className="text-[10px] text-slate-500 font-bold">Office Label</Label>
                              <Input
                                value={contactSettings.india_office_label || ""}
                                onChange={(e) => setContactSettings({ ...contactSettings, india_office_label: e.target.value })}
                                className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[10px] text-slate-500 font-bold">Badge Text</Label>
                              <Input
                                value={contactSettings.india_office_badge || ""}
                                onChange={(e) => setContactSettings({ ...contactSettings, india_office_badge: e.target.value })}
                                className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[10px] text-slate-500 font-bold">Phone 1</Label>
                              <Input
                                value={contactSettings.india_office_phone1 || ""}
                                onChange={(e) => setContactSettings({ ...contactSettings, india_office_phone1: e.target.value })}
                                className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[10px] text-slate-500 font-bold">Phone 2</Label>
                              <Input
                                value={contactSettings.india_office_phone2 || ""}
                                onChange={(e) => setContactSettings({ ...contactSettings, india_office_phone2: e.target.value })}
                                className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] text-slate-500 font-bold">Postal Address</Label>
                            <Input
                              value={contactSettings.india_office_address || ""}
                              onChange={(e) => setContactSettings({ ...contactSettings, india_office_address: e.target.value })}
                              className="bg-white border-slate-200 text-slate-900 text-xs h-9 focus-visible:ring-brand-red"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex gap-3 justify-end pt-2">
                      <Button type="submit" disabled={submitting} className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-9 gap-1.5 rounded-sm">
                        {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />} Save Contact Settings
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
