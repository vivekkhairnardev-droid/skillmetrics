"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 5000);
  };

  return (
    <section id="newsletter" className="w-full bg-slate-50 dark:bg-slate-900/40 py-20 border-b border-border/60">
      <div className="container max-w-7xl mx-auto px-4 sm:px-8">
        <div className="w-full bg-slate-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-6 border border-slate-800 shadow-xl relative overflow-hidden animate-fade-in">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Subscribe to <span className="text-brand-red">SkillMetrics</span> Insights
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
              Monthly engineering management strategies, skill benchmark reports, and technical hiring guides.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Thank you for subscribing! Check your email for our latest report.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-brand-red h-11"
                />
                <Button type="submit">
                  Subscribe Now
                </Button>
              </form>
            )}

            <p className="text-[11px] text-slate-400">
              No spam, ever. Unsubscribe at any time with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
