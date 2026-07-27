"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, HelpCircle, FileSearch, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      {/* Centralized Navbar */}
      <Navbar />

      {/* 404 MAIN SECTION */}
      <main className="flex-1 relative flex items-center justify-center bg-brand-dark text-white py-20 sm:py-28 overflow-hidden">
        {/* Ambient Red & Yellow Background Glow Orbs */}
        <div className="absolute -left-24 -top-24 w-[30rem] h-[30rem] bg-brand-red/25 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -right-24 -bottom-24 w-[30rem] h-[30rem] bg-brand-yellow/25 rounded-full blur-[130px] pointer-events-none" />

        {/* Square Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 container max-w-3xl mx-auto px-4 text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-yellow font-extrabold text-xs tracking-wider uppercase backdrop-blur-xs">
            <FileSearch className="h-4 w-4 text-brand-yellow" /> 404 Page Not Found
          </div>

          {/* Huge Display Code */}
          <h1 className="text-7xl sm:text-9xl font-black tracking-tight text-white leading-none">
            4<span className="text-brand-red">0</span>4
          </h1>

          {/* Title & Subtitle */}
          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              Oops! This page seems to have vanished.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              The page you are looking for might have been removed, renamed, or is temporarily unavailable. Let’s get you back on track.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/">
              <Button size="lg" className="font-bold">
                <Home className="mr-2 h-4 w-4" /> Return to Homepage
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-bold">
                <HelpCircle className="mr-2 h-4 w-4" /> Contact Support
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
