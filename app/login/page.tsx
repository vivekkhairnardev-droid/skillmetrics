"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<"admin" | "manager" | "employee">("admin");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoggedIn(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 text-foreground font-sans antialiased flex flex-col justify-between selection:bg-brand-red selection:text-white relative">
      {/* Subtle Background Mesh & Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />



      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-auto">
          
          {/* Left Column: Security & Enterprise Info (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-border/80 rounded-sm p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xs">
            <div className="space-y-6">
              {/* Brand Logo inside Card Header */}
              <div className="pb-1">
                <Link href="/" className="inline-block">
                  <img
                    src="/logo-3.png"
                    alt="SkillMetrics Logo"
                    className="h-10 w-auto object-contain [image-rendering:-webkit-optimize-contrast]"
                  />
                </Link>
              </div>



              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight leading-tight">
                  Skill &amp; Competency Intelligence Hub
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                  Access real-time workforce matrices, competency assessments, and AI skill analytics in one secure platform.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-foreground">
                  <div className="h-6 w-6 rounded-sm bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-medium">SOC-2 Type II &amp; ISO 27001 Certified Security</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-foreground">
                  <div className="h-6 w-6 rounded-sm bg-brand-yellow/20 text-foreground flex items-center justify-center shrink-0 border border-brand-yellow/30">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-yellow" />
                  </div>
                  <span className="font-medium">SAML 2.0 / Okta &amp; Google SSO Support</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-foreground">
                  <div className="h-6 w-6 rounded-sm bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 border border-brand-red/20">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-medium">AES-256 Encrypted Candidate Assessment Data</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border space-y-1">
              <p className="text-xs text-muted-foreground italic leading-relaxed">
                &ldquo;Automated technical evaluation &amp; skill tracking across 5,000+ engineers with enterprise speed.&rdquo;
              </p>
              <div className="text-[11px] font-bold text-foreground pt-1">
                — SkillMetrics Enterprise Platform
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Interactive Login Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-border rounded-sm p-8 sm:p-10 shadow-sm flex flex-col justify-center">
            {loggedIn ? (
              <div className="py-12 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground">Authentication Successful!</h3>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                  Welcome back. Redirecting to your organization&apos;s SkillMetrics workspace dashboard...
                </p>
                <Button
                  variant="outline"
                  onClick={() => setLoggedIn(false)}
                  className="mt-4 font-bold rounded-sm border-border text-foreground hover:bg-muted cursor-pointer"
                >
                  Sign Out &amp; Return
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Sign In to Account</h2>
                  <p className="text-xs text-muted-foreground">Enter your credentials to access your enterprise dashboard.</p>
                </div>

                {/* Role Based Login Selection */}
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-foreground uppercase tracking-wider">Select Account Role *</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedRole("admin")}
                      className={`flex flex-col items-center justify-center p-3 rounded-sm border text-xs font-bold transition-all cursor-pointer ${
                        selectedRole === "admin"
                          ? "border-brand-red bg-brand-red/5 text-brand-red shadow-xs ring-1 ring-brand-red"
                          : "border-border bg-slate-50 text-muted-foreground hover:bg-slate-100 hover:text-foreground"
                      }`}
                    >
                      <ShieldCheck className="h-4 w-4 mb-1" />
                      <span>Admin / HR</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedRole("manager")}
                      className={`flex flex-col items-center justify-center p-3 rounded-sm border text-xs font-bold transition-all cursor-pointer ${
                        selectedRole === "manager"
                          ? "border-brand-yellow bg-brand-yellow/10 text-foreground shadow-xs ring-1 ring-brand-yellow"
                          : "border-border bg-slate-50 text-muted-foreground hover:bg-slate-100 hover:text-foreground"
                      }`}
                    >
                      <Building2 className="h-4 w-4 mb-1 text-brand-yellow" />
                      <span>Manager</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedRole("employee")}
                      className={`flex flex-col items-center justify-center p-3 rounded-sm border text-xs font-bold transition-all cursor-pointer ${
                        selectedRole === "employee"
                          ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 shadow-xs ring-1 ring-emerald-500"
                          : "border-border bg-slate-50 text-muted-foreground hover:bg-slate-100 hover:text-foreground"
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4 mb-1 text-emerald-500" />
                      <span>Employee</span>
                    </button>
                  </div>
                </div>

                {/* Inputs */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="login-email" className="text-xs font-semibold text-foreground">Work Email Address</Label>
                    <div className="relative">
                      <Input
                        id="login-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        required
                        className="h-11 rounded-sm pl-10 bg-white border-border text-foreground placeholder:text-muted-foreground focus:border-brand-red"
                      />
                      <Mail className="h-4 w-4 text-muted-foreground absolute left-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="login-password" className="text-xs font-semibold text-foreground">Password</Label>
                      <Link href="/contact" className="text-xs font-semibold text-brand-red hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                        className="h-11 rounded-sm pl-10 pr-10 bg-white border-border text-foreground placeholder:text-muted-foreground focus:border-brand-red"
                      />
                      <Lock className="h-4 w-4 text-muted-foreground absolute left-3.5 top-3.5 pointer-events-none" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-3.5 text-muted-foreground hover:text-foreground cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 font-medium text-muted-foreground cursor-pointer select-none">
                    <input type="checkbox" className="rounded-sm border-border bg-white accent-brand-red h-4 w-4" defaultChecked />
                    Remember browser for 30 days
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full font-bold rounded-sm bg-brand-red hover:bg-brand-red/90 text-white shadow-xs cursor-pointer"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Authenticating...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Sign In as {selectedRole === "admin" ? "Admin / HR" : selectedRole === "manager" ? "Manager" : "Employee"} <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>

                {/* Bottom Link */}
                <div className="text-center pt-2 text-xs text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <Link href="/contact" className="font-bold text-foreground hover:text-brand-red hover:underline">
                    Request Demo / Contact Sales
                  </Link>
                </div>
              </form>
            )}
          </div>

        </div>
      </main>

    </div>
  );
}
