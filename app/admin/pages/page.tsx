"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Globe,
  Loader2,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ALL_PAGES } from "@/lib/page-definitions";

export default function PagesListPage() {
  const [pageContentLoaded, setPageContentLoaded] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllPageContentStatus();
  }, []);

  const fetchAllPageContentStatus = async () => {
    setLoading(true);
    try {
      for (const pageDef of ALL_PAGES) {
        const res = await fetch(`/api/admin/pages?page=${pageDef.slug}`);
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setPageContentLoaded(prev => ({ ...prev, [pageDef.slug]: true }));
        }
      }
    } catch (err) {
      console.error("Failed to fetch page status:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-[50vh] flex flex-col items-center justify-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-brand-red" />
        <p className="text-xs text-slate-500">Loading website pages...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Globe className="h-5 w-5 text-brand-red" /> Pages Content Manager
          </h2>
          <p className="text-xs text-slate-500">Select a page route below to edit its sections, titles, content, and imagery</p>
        </div>
        <Badge className="bg-slate-100 text-slate-600 text-[10px] font-bold border-slate-200">
          {ALL_PAGES.length} Registered Pages
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ALL_PAGES.map((pageDef) => {
          const hasContent = pageContentLoaded[pageDef.slug];
          return (
            <Link key={pageDef.slug} href={`/admin/pages/${pageDef.slug}`}>
              <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-brand-red/30 transition-all duration-200 cursor-pointer group h-full flex flex-col justify-between">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="h-9 w-9 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Globe className="h-4 w-4" />
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-brand-red transition-colors" />
                  </div>
                  <CardTitle className="text-sm font-bold text-slate-800 mt-2">{pageDef.name}</CardTitle>
                  <CardDescription className="text-[10px] text-slate-500">
                    <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-[9px]">{pageDef.path}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-[10px] text-slate-500 font-semibold">
                      {pageDef.sections.length} section{pageDef.sections.length > 1 ? "s" : ""}
                    </span>
                    {hasContent && (
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[9px] font-bold">
                        <CheckCircle className="h-2.5 w-2.5 mr-1" /> Customized
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
