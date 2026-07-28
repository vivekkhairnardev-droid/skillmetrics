"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSiteSettings } from "@/components/site-settings-context";

export function Footer() {
  const { settings } = useSiteSettings();

  const getFooterVariantClasses = () => {
    switch (settings.footerVariant as string) {
      case "minimal_utility":
      case "light_utility":
        return "bg-slate-100 text-slate-700 border-t border-slate-200";
      case "brand_yellow":
      case "yellow_cta":
        return "bg-brand-yellow text-slate-950 border-t border-amber-400";
      case "dark_matrix":
      default:
        return "bg-slate-950 text-slate-300 border-t border-slate-800";
    }
  };

  const isLight = (settings.footerVariant as string) === "minimal_utility" || (settings.footerVariant as string) === "light_utility" || (settings.footerVariant as string) === "brand_yellow" || (settings.footerVariant as string) === "yellow_cta";

  return (
    <footer className={`w-full pt-16 pb-12 transition-colors duration-300 ${getFooterVariantClasses()}`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Column 1: Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4 pr-0 md:pr-6">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2.5 group transition-all duration-200">
                <img
                  src={settings.logoUrl || "/logo-3.png"}
                  alt={settings.siteName || "SkillMetrics Logo"}
                  className={`h-11 sm:h-12 w-auto object-contain max-w-[200px] sm:max-w-[240px] [image-rendering:-webkit-optimize-contrast] ${
                    isLight ? "" : "brightness-125 contrast-125"
                  }`}
                />
              </Link>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed max-w-sm ${isLight ? "text-slate-700" : "text-slate-400"}`}>
              {settings.tagline || "India's leading skill matrix & competency management platform. Automating workforce capability, role assessments, and technical skill tracking for modern enterprises."}
            </p>
            <div className={`flex items-center gap-3 text-xs pt-1 ${isLight ? "text-slate-600 font-medium" : "text-slate-400"}`}>
              <span>© {new Date().getFullYear()} {settings.siteName || "SkillMetrics Inc."}</span>
              <span>•</span>
              <span>All rights reserved.</span>
            </div>
          </div>

          {/* Column 2: Solutions (3 Cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <div className={`font-extrabold text-xs uppercase tracking-wider ${isLight ? "text-slate-900" : "text-white"}`}>Solutions</div>
            <ul className={`space-y-2 ${isLight ? "text-slate-700" : "text-slate-400"}`}>
              <li>
                <Link href="/#grid-features" className="hover:opacity-80 transition-opacity">
                  Skill Matrix Automation
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:opacity-80 transition-opacity">
                  Integrations &amp; Cloud Server
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:opacity-80 transition-opacity">
                  Skill Frameworks &amp; Taxonomies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition-opacity">
                  Enterprise Support &amp; SLA
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform (2 Cols) */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <div className={`font-extrabold text-xs uppercase tracking-wider ${isLight ? "text-slate-900" : "text-white"}`}>Navigation</div>
            <ul className={`space-y-2 ${isLight ? "text-slate-700" : "text-slate-400"}`}>
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:opacity-80 transition-opacity">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:opacity-80 transition-opacity">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition-opacity">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Actions (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className={`font-extrabold text-xs uppercase tracking-wider ${isLight ? "text-slate-900" : "text-white"}`}>Get Started</div>
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
