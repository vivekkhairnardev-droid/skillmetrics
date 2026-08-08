"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Briefcase,
  Settings,
  Mail,
  Globe,
  ArrowLeft,
  Loader2,
  LogOut,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [session, setSession] = useState<any>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check auth session
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data } = await authClient.getSession();
        setSession(data || null);
      } catch {
        setSession(null);
      } finally {
        setCheckingAuth(false);
      }
    };
    checkSession();
  }, []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthMessage(null);
    try {
      const { data, error } = await authClient.signIn.email({
        email: authEmail,
        password: authPassword,
      });
      if (error) {
        setAuthMessage({ type: "error", text: error.message || "Failed to sign in." });
      } else {
        setSession(data);
      }
    } catch (err: any) {
      setAuthMessage({ type: "error", text: err.message || "Unexpected error." });
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      setSession(null);
    } catch {
      console.error("Failed to sign out");
    }
  };

  const navigationItems = [
    { label: "Submissions", icon: LayoutDashboard, href: "/admin" },
    { label: "Blogs", icon: BookOpen, href: "/admin/blogs" },
    { label: "Case Studies", icon: Briefcase, href: "/admin/case-studies" },
    { label: "Resources", icon: FileText, href: "/admin/resources" },
    { label: "Pages Content", icon: Globe, href: "/admin/pages" },
    { label: "Site Settings", icon: Settings, href: "/admin/settings" },
    { label: "Contact Info", icon: Mail, href: "/admin/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-brand-red" />
          <p className="text-xs text-slate-500 font-bold">Verifying Session...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white border-slate-200 shadow-xl overflow-hidden rounded-2xl">
          <div className="p-8 space-y-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <img src="/logo-3.png" alt="SkillMetrics Logo" className="h-12 w-auto object-contain" />
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Admin Portal Sign In</h2>
              <p className="text-xs text-slate-500">Sign in with your admin credentials</p>
            </div>

            {authMessage && (
              <div className={`p-3 rounded-xl text-xs font-semibold ${authMessage.type === "success"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-brand-red/10 text-brand-red border border-brand-red/20"
                }`}>
                {authMessage.text}
              </div>
            )}

            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-700">Email Address</Label>
                <Input
                  type="email" required value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  placeholder="admin@skillmetrics.io"
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-700">Password</Label>
                <Input
                  type="password" required value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-white border-slate-200 text-slate-900 text-xs h-9"
                />
              </div>
              <Button type="submit" disabled={authLoading} className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs h-10 mt-2 rounded-sm">
                {authLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign In"}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-brand-red/100 selection:text-white overflow-hidden">
      {/* Top Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-40 px-6 py-3.5 flex items-center justify-between shrink-0 ">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost" size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-slate-600 hover:text-slate-900 h-9 w-9 p-0 rounded-sm border border-slate-100"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link href="/admin" className="flex items-center gap-2">
            <img src="/logo-3.png" alt="SkillMetrics Logo" className="h-9 w-auto object-contain" />
            <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
              Admin
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/" target="_blank">
            <Button variant="outline" size="sm" className="border-slate-200 text-slate-700 hover:bg-slate-50 text-xs gap-1.5 rounded-sm shadow-sm">
              <ExternalLink className="h-3.5 w-3.5" /> View Public Site
            </Button>
          </Link>
        </div>
      </header>

      {/* Mobile Sidebar Drawer */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div onClick={() => setIsMobileMenuOpen(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
        <aside className={`absolute top-0 bottom-0 left-0 w-72 bg-white border-r border-slate-200 p-5 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <img src="/logo-3.png" alt="Logo" className="h-8 w-auto object-contain" />
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-500 hover:text-slate-800 h-8 w-8 rounded-sm">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 mb-1">Studio Menu</div>
              {navigationItems.map(link => {
                const active = isActive(link.href);
                return (
                  <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <button className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all ${active
                      ? "bg-brand-red text-white"
                      : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                      }`}>
                      <link.icon className="h-4 w-4" /> {link.label}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 px-3 flex flex-col gap-1.5">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Logged In As</div>
            <div className="text-xs font-bold text-slate-800 truncate">{session?.user?.name || session?.user?.email}</div>
            <button onClick={() => { handleSignOut(); setIsMobileMenuOpen(false); }} className="text-left text-[11px] text-brand-red hover:underline font-bold mt-1 flex items-center gap-1.5">
              <LogOut className="h-3.5 w-3.5" /> Sign Out
            </button>
          </div>
        </aside>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex md:flex-col w-60 border-r border-slate-200 p-4 bg-white justify-between shrink-0 overflow-y-auto">
          <div className="flex flex-col gap-1">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 mb-2">Navigation</div>
            {navigationItems.map(link => {
              const active = isActive(link.href);
              return (
                <Link key={link.href} href={link.href}>
                  <button className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-bold transition-all ${active
                    ? "bg-brand-red text-white hover:bg-brand-red/90 shadow-sm"
                    : "text-slate-600 hover:text-brand-red hover:bg-brand-red/5"
                    }`}>
                    <link.icon className="h-4 w-4" /> {link.label}
                  </button>
                </Link>
              );
            })}
          </div>

          <div className="border-t border-slate-100 pt-4 px-3 flex flex-col gap-1 shrink-0">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Logged In As</div>
            <div className="text-xs font-bold text-slate-800 truncate">{session?.user?.name || session?.user?.email}</div>
            <button onClick={handleSignOut} className="text-left text-[11px] text-brand-red hover:underline font-bold mt-1.5 flex items-center gap-1.5">
              <LogOut className="h-3 w-3" /> Sign Out
            </button>
          </div>
        </aside>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-6 sm:p-8 bg-slate-50/50 overflow-y-auto h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
