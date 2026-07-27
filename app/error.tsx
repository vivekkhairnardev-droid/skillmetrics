"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home, HelpCircle } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an analytics or error tracking service
    console.error("Unhandled Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      {/* Centralized Navbar */}
      <Navbar />

      {/* ERROR MAIN SECTION */}
      <main className="flex-1 relative flex items-center justify-center bg-brand-dark text-white py-20 sm:py-28 overflow-hidden">
        {/* Ambient Red Glow Orbs */}
        <div className="absolute -left-24 -top-24 w-[30rem] h-[30rem] bg-brand-red/30 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -right-24 -bottom-24 w-[30rem] h-[30rem] bg-brand-yellow/20 rounded-full blur-[130px] pointer-events-none" />

        {/* Square Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 container max-w-3xl mx-auto px-4 text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red font-extrabold text-xs tracking-wider uppercase backdrop-blur-xs">
            <AlertTriangle className="h-4 w-4 text-brand-red" /> 500 Application Error
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-3 max-w-xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight leading-tight">
              Something Went Wrong
            </h1>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              An unexpected error occurred while rendering this page. Our technical team has been notified automatically.
            </p>
          </div>

          {/* Error Digest / Snippet if available */}
          {error?.digest && (
            <div className="max-w-md mx-auto p-3 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-slate-400">
              Error Digest Code: {error.digest}
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => reset()}
              className="font-bold cursor-pointer"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Try Again
            </Button>

            <Link href="/">
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-bold">
                <Home className="mr-2 h-4 w-4" /> Return to Home
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="ghost" size="lg" className="text-slate-300 hover:text-white hover:bg-white/10 font-bold">
                <HelpCircle className="mr-2 h-4 w-4" /> Report Issue
              </Button>
            </Link>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-slate-800 bg-slate-950 text-slate-300 py-10 text-center">
        <p className="text-sm text-slate-400">© 2026 SkillMetrics Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
