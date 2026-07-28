import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col justify-between overflow-hidden">
      {/* Top Animated Progress Pulse Bar */}
      <div className="w-full h-1 bg-slate-100 dark:bg-slate-900 overflow-hidden">
        <div className="h-full bg-brand-red animate-pulse w-3/4 shadow-brand-red" />
      </div>

      {/* Header Skeleton Navbar */}
      <header className="w-full border-b border-border py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800" />
          <Skeleton className="h-6 w-32 rounded bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Skeleton className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-800" />
          <Skeleton className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-800" />
          <Skeleton className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-800" />
        </div>
        <Skeleton className="h-9 w-28 rounded-md bg-brand-red/20" />
      </header>

      {/* Main Body Skeleton Grid */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-12 space-y-10">
        {/* Hero Display Skeleton */}
        <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
          <Skeleton className="h-6 w-40 rounded-full bg-slate-200 dark:bg-slate-800" />
          <Skeleton className="h-12 w-full sm:w-[500px] rounded-lg bg-slate-200 dark:bg-slate-800" />
          <Skeleton className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-10 w-32 rounded-md bg-brand-red/30" />
            <Skeleton className="h-10 w-32 rounded-md bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>

        {/* 3-Column Card Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border border-border rounded-xl p-6 space-y-4 bg-card shadow-xs">
              <Skeleton className="h-10 w-10 rounded-lg bg-slate-200 dark:bg-slate-800" />
              <Skeleton className="h-6 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
              <Skeleton className="h-16 w-full rounded bg-slate-200 dark:bg-slate-800" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
