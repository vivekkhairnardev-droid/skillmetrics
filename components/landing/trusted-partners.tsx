"use client";

import { useEffect, useState } from "react";

const companyLogos = [
  { name: "DANA", src: "/company-logos/dana-logo.png" },
  { name: "Gabriel", src: "/company-logos/gabriel.png" },
  { name: "Hindalco", src: "/company-logos/hindalco.png" },
  { name: "IAC", src: "/company-logos/iac.png" },
  { name: "Mahindra", src: "/company-logos/mahindra.png" },
  { name: "Sandvik", src: "/company-logos/sandvik.png" },
];

export function TrustedPartners() {
  return (
    <section className="w-full bg-white py-12 sm:py-14 border-t border-b border-brand-red/10 dark:border-slate-800/80 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-8">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
          Trusted by Engineering Leaders in Industry-Leading Manufacturing Enterprises
        </p>

        {/* Smooth Infinite Marquee Strip with Edge Gradient Mask & Larger Logos */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] pt-2">
          <div className="flex animate-marquee items-center gap-14 sm:gap-24">
            {[...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos].map((company, idx) => (
              <div
                key={`marquee-logo-${idx}`}
                className="flex items-center justify-center shrink-0 h-20 sm:h-28 px-4 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={company.src}
                  alt={company.name}
                  className="h-16 sm:h-22 w-auto max-w-[280px] object-contain mix-blend-multiply dark:brightness-200 opacity-90 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
