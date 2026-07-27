"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Grid3X3,
  Award,
  Users,
  TrendingUp,
  Settings,
  Search,
  Bell,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  User,
  LogOut,
  ChevronRight,
  Sparkles,
  Plus,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  PanelLeftClose,
  PanelLeftOpen,
  ChevronDown,
  BookOpen,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";

export default function DashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const engineersData = [
    { name: "Aarav Sharma", dept: "Backend Eng", skill: "Go / Kubernetes", level: "Senior Lead", score: 94, status: "Verified" },
    { name: "Priya Patel", dept: "Frontend Web", skill: "React / Next.js", level: "Mid Level", score: 88, status: "Verified" },
    { name: "Vikram Malhotra", dept: "Cloud Infra", skill: "AWS / Terraform", level: "Staff Architect", score: 96, status: "Verified" },
    { name: "Ananya Roy", dept: "Data & AI", skill: "Python / PyTorch", level: "Senior Eng", score: 91, status: "Under Assessment" },
    { name: "Rohan Gupta", dept: "DevOps Eng", skill: "CI/CD / Docker", level: "Junior Eng", score: 79, status: "Pending Audit" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-foreground font-sans antialiased flex flex-col lg:flex-row">
      {/* LEFT SIDEBAR NAVIGATION (LIGHT THEME, COLLAPSIBLE & NON-SCROLLABLE) */}
      <aside className={`w-full bg-white text-slate-700 border-r border-border flex flex-col justify-between shrink-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden transition-all duration-300 ${sidebarCollapsed ? "lg:w-20 p-2.5" : "lg:w-64 p-3 sm:px-4 sm:py-3"
        }`}>
        <div className="space-y-3">
          {/* Brand Logo */}
          <div className="w-full flex items-center justify-start py-0">
            <Link href="/" className="w-full flex justify-start">
              <img
                src="/logo-3.png"
                alt="SkillMetrics Logo"
                className={`w-full h-auto object-contain [image-rendering:-webkit-optimize-contrast] transition-all ${sidebarCollapsed ? "max-h-8 object-center" : "max-h-12 object-left"
                  }`}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5 pt-1">
            <button
              onClick={() => setActiveTab("overview")}
              title="Dashboard"
              className={`flex items-center gap-3 rounded-sm text-xs font-bold transition-all cursor-pointer ${activeTab === "overview"
                  ? "bg-brand-red text-white shadow-xs"
                  : "text-slate-600 hover:text-foreground hover:bg-slate-100/90 font-semibold"
                } ${sidebarCollapsed ? "w-10 h-10 p-0 justify-center mx-auto" : "w-full px-3 py-2.5"}`}
            >
              <LayoutDashboard className="h-5 w-5 shrink-0" />
              {!sidebarCollapsed && <span>Dashboard</span>}
            </button>

            <button
              onClick={() => setActiveTab("matrix")}
              title="Skill Matrix Grid"
              className={`flex items-center gap-3 rounded-sm text-xs font-bold transition-all cursor-pointer ${activeTab === "matrix"
                  ? "bg-brand-red text-white shadow-xs"
                  : "text-slate-600 hover:text-foreground hover:bg-slate-100/90 font-semibold"
                } ${sidebarCollapsed ? "w-10 h-10 p-0 justify-center mx-auto" : "w-full px-3 py-2.5"}`}
            >
              <Grid3X3 className="h-5 w-5 shrink-0" />
              {!sidebarCollapsed && <span>Skill Matrix Grid</span>}
            </button>

            <button
              onClick={() => setActiveTab("assessments")}
              title="AI Assessments"
              className={`flex items-center gap-3 rounded-sm text-xs font-bold transition-all cursor-pointer ${activeTab === "assessments"
                  ? "bg-brand-red text-white shadow-xs"
                  : "text-slate-600 hover:text-foreground hover:bg-slate-100/90 font-semibold"
                } ${sidebarCollapsed ? "w-10 h-10 p-0 justify-center mx-auto" : "w-full px-3 py-2.5"}`}
            >
              <Award className="h-5 w-5 shrink-0" />
              {!sidebarCollapsed && <span>AI Assessments</span>}
            </button>

            <button
              onClick={() => setActiveTab("workforce")}
              title="Workforce Directory"
              className={`flex items-center gap-3 rounded-sm text-xs font-bold transition-all cursor-pointer ${activeTab === "workforce"
                  ? "bg-brand-red text-white shadow-xs"
                  : "text-slate-600 hover:text-foreground hover:bg-slate-100/90 font-semibold"
                } ${sidebarCollapsed ? "w-10 h-10 p-0 justify-center mx-auto" : "w-full px-3 py-2.5"}`}
            >
              <Users className="h-5 w-5 shrink-0" />
              {!sidebarCollapsed && <span>Workforce Directory</span>}
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              title="ROI Analytics"
              className={`flex items-center gap-3 rounded-sm text-xs font-bold transition-all cursor-pointer ${activeTab === "analytics"
                  ? "bg-brand-red text-white shadow-xs"
                  : "text-slate-600 hover:text-foreground hover:bg-slate-100/90 font-semibold"
                } ${sidebarCollapsed ? "w-10 h-10 p-0 justify-center mx-auto" : "w-full px-3 py-2.5"}`}
            >
              <TrendingUp className="h-5 w-5 shrink-0" />
              {!sidebarCollapsed && <span>ROI Analytics</span>}
            </button>
          </nav>
        </div>

        {/* Sidebar Footer Bottom Links & Exit */}
        <div className="pt-4 border-t border-slate-200 space-y-1">
          <button
            onClick={() => setActiveTab("settings")}
            title="Platform Settings"
            className={`flex items-center gap-3 rounded-sm text-xs font-bold transition-all cursor-pointer ${activeTab === "settings"
                ? "bg-brand-red text-white shadow-xs"
                : "text-slate-600 hover:text-foreground hover:bg-slate-100/90 font-semibold"
              } ${sidebarCollapsed ? "w-10 h-10 p-0 justify-center mx-auto" : "w-full px-3 py-2"}`}
          >
            <Settings className="h-4.5 w-4.5 shrink-0" />
            {!sidebarCollapsed && <span>Settings &amp; Config</span>}
          </button>

          <Link href="/resources" className="block">
            <button
              title="Documentation & Docs"
              className={`flex items-center gap-3 rounded-sm text-xs font-semibold text-slate-600 hover:text-foreground hover:bg-slate-100/90 transition-all cursor-pointer ${sidebarCollapsed ? "w-10 h-10 p-0 justify-center mx-auto" : "w-full px-3 py-2"
                }`}
            >
              <BookOpen className="h-4.5 w-4.5 shrink-0" />
              {!sidebarCollapsed && <span>Documentation</span>}
            </button>
          </Link>

          <button
            onClick={() => alert("Enterprise Support SLA: Active (24/7 Priority Channel)")}
            title="Help & Support"
            className={`flex items-center gap-3 rounded-sm text-xs font-semibold text-slate-600 hover:text-foreground hover:bg-slate-100/90 transition-all cursor-pointer ${sidebarCollapsed ? "w-10 h-10 p-0 justify-center mx-auto" : "w-full px-3 py-2"
              }`}
          >
            <HelpCircle className="h-4.5 w-4.5 shrink-0" />
            {!sidebarCollapsed && <span>Help &amp; Support</span>}
          </button>

          <div className="pt-2 border-t border-slate-200">
            <Link href="/login" className="block">
              <button
                title="Log Out"
                className={`flex items-center gap-3 rounded-sm text-xs font-bold text-brand-red bg-red-50/90 border border-red-200/80 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all cursor-pointer shadow-2xs ${sidebarCollapsed ? "w-10 h-10 p-0 justify-center mx-auto" : "w-full px-3 py-2"
                  }`}
              >
                <LogOut className="h-4.5 w-4.5 shrink-0" />
                {!sidebarCollapsed && <span>Log Out</span>}
              </button>
            </Link>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT WORKSPACE */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* COMPACT DASHBOARD TOP HEADER WITH SHADCN DROPDOWN */}
        <header className="bg-white border-b border-border h-14 px-4 sm:px-6 flex items-center justify-between gap-4 sticky top-0 z-20 shadow-2xs">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Sidebar Toggle Button in Topbar */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              className="p-2 rounded-sm border border-border bg-slate-50 text-foreground hover:bg-slate-100 transition-colors cursor-pointer hidden lg:flex items-center justify-center"
            >
              {sidebarCollapsed ? (
                <PanelLeftOpen className="h-4 w-4 text-brand-red" />
              ) : (
                <PanelLeftClose className="h-4 w-4 text-slate-700" />
              )}
            </button>

            {/* Command Search Bar Trigger (Ctrl + K) */}
            <button
              onClick={() => setCommandOpen(true)}
              className="flex items-center justify-between w-full sm:w-80 h-9 px-3 rounded-sm border border-border bg-slate-50 hover:bg-slate-100/90 text-muted-foreground text-xs transition-all cursor-pointer shadow-xs"
            >
              <span className="flex items-center gap-2">
                <Search className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                <span className="truncate">Search engineers, matrices, skills...</span>
              </span>
              <kbd className="pointer-events-none inline-flex h-4.5 select-none items-center gap-1 rounded-sm border border-border bg-white px-1.5 font-mono text-[9px] font-bold text-muted-foreground shadow-2xs shrink-0">
                <span className="text-[10px]">⌘</span>K
              </kbd>
            </button>
          </div>

          {/* Notifications & Shadcn User Profile Dropdown */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-sm border border-border bg-slate-50 text-muted-foreground hover:text-foreground relative cursor-pointer transition-colors">
              <Bell className="h-4 w-4" />
              <span className="h-2 w-2 rounded-full bg-brand-red absolute top-1 right-1" />
            </button>

            {/* Shadcn Avatar-Only Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="p-0.5 rounded-sm border border-border bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-red/50">
                <div className="h-8 w-8 rounded-sm bg-brand-red text-white font-extrabold flex items-center justify-center text-xs shadow-xs border border-brand-red/30">
                  VK
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="right" className="w-64 p-2 space-y-1 rounded-sm border-border shadow-xl">
                {/* User Details Header inside Dropdown */}
                <div className="flex items-center gap-3 p-2.5 rounded-sm bg-slate-50 border border-border/80 mb-1">
                  <div className="h-9 w-9 rounded-sm bg-brand-red text-white font-extrabold flex items-center justify-center text-sm shrink-0 border border-brand-red/40 shadow-2xs">
                    VK
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-extrabold text-foreground truncate leading-tight">Vivek Kumar</p>
                    <p className="text-[10px] font-bold text-muted-foreground truncate leading-tight mt-0.5">vivek@skillmetrics.io</p>
                    <Badge variant="outline" className="mt-1 text-[9px] font-extrabold text-brand-red border-brand-red/30 bg-brand-red/5 px-1.5 py-0 rounded-xs">
                      Enterprise Admin
                    </Badge>
                  </div>
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="gap-3 py-2 px-2.5 rounded-sm">
                  <User className="h-4 w-4 text-brand-red shrink-0" />
                  <span className="font-semibold text-xs">View Profile &amp; Role</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="gap-3 py-2 px-2.5 rounded-sm">
                  <Settings className="h-4 w-4 text-slate-600 shrink-0" />
                  <span className="font-semibold text-xs">Account Settings</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="gap-3 py-2 px-2.5 rounded-sm">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-xs">Security &amp; Audit Logs</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="gap-3 py-2 px-2.5 rounded-sm text-red-600 font-bold hover:bg-red-50 hover:text-red-700">
                  <Link href="/login" className="flex items-center gap-3 w-full">
                    <LogOut className="h-4 w-4 shrink-0" />
                    <span className="text-xs">Exit &amp; Sign Out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* WORKSPACE INNER CANVAS */}
        <main className="p-4 sm:p-8 space-y-8 flex-1">

          {/* TOP WELCOME & QUICK ACTIONS */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-sm bg-emerald-500/10 text-emerald-600 text-xs font-semibold border border-emerald-500/20 mb-1">
                <ShieldCheck className="h-3.5 w-3.5" /> Live Enterprise Environment
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                Workforce Competency Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Real-time visibility into engineering capability, skill gaps, and active assessments.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button size="sm" className="font-bold rounded-sm gap-2 cursor-pointer">
                <Plus className="h-4 w-4" /> Create Skill Matrix
              </Button>
              <Button size="sm" variant="outline" className="font-bold rounded-sm gap-2 cursor-pointer">
                <FileSpreadsheet className="h-4 w-4 text-emerald-600" /> Export Excel Log
              </Button>
            </div>
          </div>

          {/* KPI STAT CARDS (4 CARDS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Stat 1 */}
            <div className="bg-white p-5 rounded-sm border border-border shadow-xs space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
                <span>Evaluated Engineers</span>
                <Users className="h-4 w-4 text-brand-red" />
              </div>
              <div className="text-2xl font-black text-foreground tracking-tight">2,845</div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                <ArrowUpRight className="h-3.5 w-3.5" /> +12.4% this month
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-5 rounded-sm border border-border shadow-xs space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
                <span>Active Skill Matrices</span>
                <Grid3X3 className="h-4 w-4 text-brand-yellow" />
              </div>
              <div className="text-2xl font-black text-foreground tracking-tight">142</div>
              <div className="text-xs text-muted-foreground font-medium">Across 18 departments</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-5 rounded-sm border border-border shadow-xs space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
                <span>Avg Competency Index</span>
                <Award className="h-4 w-4 text-emerald-500" />
              </div>
              <div className="text-2xl font-black text-foreground tracking-tight">87.4 / 100</div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                <ArrowUpRight className="h-3.5 w-3.5" /> +4.2 points YoY
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white p-5 rounded-sm border border-border shadow-xs space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
                <span>Cost &amp; Time Savings</span>
                <Sparkles className="h-4 w-4 text-brand-yellow" />
              </div>
              <div className="text-2xl font-black text-foreground tracking-tight">$1.2M</div>
              <div className="text-xs text-muted-foreground font-medium">85% evaluation time saved</div>
            </div>
          </div>

          {/* MAIN GRID: WORKFORCE TABLE & SKILL BREAKDOWN */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left 8 Cols: Workforce Skill Matrix Directory */}
            <div className="lg:col-span-8 bg-white border border-border rounded-sm p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-foreground">Engineers Skill Evaluation Log</h3>
                  <p className="text-xs text-muted-foreground">Recent candidate &amp; employee assessment scores.</p>
                </div>
                <Button size="sm" variant="outline" className="text-xs font-bold rounded-sm">
                  View All (2,845)
                </Button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-y border-border text-muted-foreground uppercase tracking-wider">
                    <tr>
                      <th className="p-3 font-bold">Engineer</th>
                      <th className="p-3 font-bold">Department</th>
                      <th className="p-3 font-bold">Primary Capability</th>
                      <th className="p-3 font-bold">Role Level</th>
                      <th className="p-3 font-bold">Competency Score</th>
                      <th className="p-3 font-bold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {engineersData.map((eng, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 font-bold text-foreground flex items-center gap-2">
                          <div className="h-7 w-7 rounded-sm bg-slate-100 border border-border flex items-center justify-center font-extrabold text-[11px] text-foreground">
                            {eng.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          {eng.name}
                        </td>
                        <td className="p-3 text-muted-foreground font-medium">{eng.dept}</td>
                        <td className="p-3 font-semibold text-foreground">{eng.skill}</td>
                        <td className="p-3 text-muted-foreground">{eng.level}</td>
                        <td className="p-3 font-bold">
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-slate-100 h-2 rounded-full overflow-hidden border border-border">
                              <div
                                className={`h-full ${eng.score >= 90 ? "bg-emerald-500" : eng.score >= 80 ? "bg-brand-yellow" : "bg-brand-red"
                                  }`}
                                style={{ width: `${eng.score}%` }}
                              />
                            </div>
                            <span>{eng.score}%</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-bold border ${eng.status === "Verified"
                              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                              : eng.status === "Under Assessment"
                                ? "bg-brand-yellow/20 text-foreground border-brand-yellow/30"
                                : "bg-brand-red/10 text-brand-red border-brand-red/20"
                              }`}
                          >
                            {eng.status === "Verified" ? (
                              <CheckCircle2 className="h-3 w-3" />
                            ) : (
                              <AlertCircle className="h-3 w-3" />
                            )}
                            {eng.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right 4 Cols: Skill Distribution & Quick Activity */}
            <div className="lg:col-span-4 space-y-6">

              {/* Card 1: Skill Distribution */}
              <div className="bg-white border border-border rounded-sm p-6 shadow-xs space-y-4">
                <h3 className="text-base font-extrabold text-foreground">Skill Coverage Breakdown</h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span>Cloud &amp; DevOps</span>
                      <span className="text-emerald-600">92% Covered</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[92%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span>Backend &amp; Microservices</span>
                      <span className="text-emerald-600">88% Covered</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span>Frontend &amp; UX</span>
                      <span className="text-brand-yellow">76% Covered</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-yellow h-full w-[76%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span>AI / Machine Learning</span>
                      <span className="text-brand-red">64% (Skill Gap)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-red h-full w-[64%]" />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-muted/40 rounded-sm border border-border/80 text-xs space-y-1">
                  <p className="font-bold text-foreground flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-brand-yellow" /> AI Recommendation
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Prioritize 12 engineers in Backend Eng for Python / PyTorch training to bridge the AI capability gap by Q3.
                  </p>
                </div>
              </div>

              {/* Card 2: Security & Audit SLA */}
              <div className="bg-brand-dark text-white border border-border/20 rounded-sm p-6 space-y-3 relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-yellow uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4" /> ISO 27001 &amp; Biometric Audit
                </div>
                <h4 className="text-sm font-bold leading-snug">Enterprise Assessment SLA Active</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All ongoing assessments are protected by real-time proctoring and AES-256 encrypted submission logs.
                </p>
              </div>

            </div>

          </div>

        </main>
      </div>

      {/* SHADCN COMMAND SEARCH DIALOG (CTRL + K) */}
      <Dialog open={commandOpen} onOpenChange={setCommandOpen}>
        <DialogContent className="sm:max-w-xl p-0 overflow-hidden rounded-sm border-border shadow-2xl">
          {/* Search Bar Header */}
          <div className="flex items-center border-b border-border px-4 py-3.5 bg-slate-50">
            <Search className="h-4 w-4 text-brand-red mr-3 shrink-0" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search engineers, matrices, capabilities..."
              className="w-full bg-transparent text-sm text-foreground focus:outline-none placeholder:text-muted-foreground font-medium"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-muted-foreground hover:text-foreground font-bold px-2 py-0.5 rounded-sm hover:bg-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results / Navigation Suggestions */}
          <div className="max-h-80 overflow-y-auto p-3 space-y-4">
            {/* Category 1: Engineers & Candidates */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 mb-1.5">
                Engineers &amp; Assessments Log
              </p>
              <div className="space-y-1">
                {engineersData
                  .filter((eng) =>
                    eng.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    eng.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    eng.skill.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((eng, idx) => (
                    <div
                      key={idx}
                      onClick={() => setCommandOpen(false)}
                      className="flex items-center justify-between p-2 rounded-sm hover:bg-slate-100/90 text-xs font-semibold cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-sm bg-brand-red/10 text-brand-red font-extrabold flex items-center justify-center text-[11px] border border-brand-red/20">
                          {eng.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <p className="text-foreground font-bold leading-tight">{eng.name}</p>
                          <p className="text-[10px] text-muted-foreground">{eng.dept} • {eng.skill}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-[10px] rounded-sm font-bold border-border bg-white">
                        {eng.score}% Score
                      </Badge>
                    </div>
                  ))}
              </div>
            </div>

            {/* Category 2: Platform Shortcuts */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 mb-1.5">
                Workspace Shortcuts
              </p>
              <div className="space-y-1">
                <div
                  onClick={() => {
                    setActiveTab("matrix");
                    setCommandOpen(false);
                  }}
                  className="flex items-center justify-between p-2 rounded-sm hover:bg-slate-100/90 text-xs font-semibold cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2 text-foreground font-bold">
                    <Grid3X3 className="h-4 w-4 text-brand-yellow" />
                    <span>Skill Matrix Grid</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">View Matrix</span>
                </div>

                <div
                  onClick={() => {
                    setActiveTab("assessments");
                    setCommandOpen(false);
                  }}
                  className="flex items-center justify-between p-2 rounded-sm hover:bg-slate-100/90 text-xs font-semibold cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2 text-foreground font-bold">
                    <Award className="h-4 w-4 text-emerald-500" />
                    <span>AI Assessments &amp; Proctoring</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">Launch Action</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Shortcuts */}
          <div className="border-t border-border p-2.5 bg-slate-50 text-[10px] text-muted-foreground flex items-center justify-between px-4">
            <span className="flex items-center gap-1">
              Press <kbd className="font-mono font-bold bg-white border border-border px-1.5 py-0.5 rounded-sm">⌘K</kbd> to toggle search anywhere
            </span>
            <span className="flex items-center gap-1">
              <kbd className="font-mono font-bold bg-white border border-border px-1.5 py-0.5 rounded-sm">ESC</kbd> to close
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
