"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 text-slate-300 pt-16 pb-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Column 1: Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4 pr-0 md:pr-6">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2.5 group transition-all duration-200">
                <img
                  src="/logo-3.png"
                  alt="SkillMetrics Logo"
                  className="h-11 sm:h-12 w-auto object-contain max-w-[200px] sm:max-w-[240px] [image-rendering:-webkit-optimize-contrast] brightness-125 contrast-125"
                />
              </Link>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              India&apos;s leading skill matrix &amp; competency management platform. Automating workforce capability, role assessments, and technical skill tracking for modern enterprises.
            </p>
            <div className="flex items-center gap-3 text-slate-400 text-xs pt-1">
              <span>© {new Date().getFullYear()} SkillMetrics Inc.</span>
              <span>•</span>
              <span>All rights reserved.</span>
            </div>
          </div>

          {/* Column 2: Solutions (3 Cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <div className="font-extrabold text-xs uppercase tracking-wider text-white">Solutions</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/#grid-features" className="hover:text-white transition-colors">
                  Skill Matrix Automation
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-white transition-colors">
                  Integrations &amp; Cloud Server
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Skill Frameworks &amp; Taxonomies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Enterprise Support &amp; SLA
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform (2 Cols) */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <div className="font-extrabold text-xs uppercase tracking-wider text-white">Navigation</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Actions (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-extrabold text-xs uppercase tracking-wider text-white">Get Started</div>
            <Link href="/contact" className="block">
              <Button size="sm" className="w-full font-bold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/contact" className="block">
              <Button variant="dark" size="sm" className="w-full font-bold">
                Free Trial
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
