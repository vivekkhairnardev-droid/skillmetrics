"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SubscribeSection } from "@/components/subscribe-section";
import { HeroSection } from "@/components/landing/hero-section";
import { TrustedPartners } from "@/components/landing/trusted-partners";
import { FeatureCards } from "@/components/landing/feature-cards";
import { WhyChoose } from "@/components/landing/why-choose";
import { ExcelComparison } from "@/components/landing/excel-comparison";
import { WhySkillMetrics } from "@/components/landing/why-skillmetrics";
import { RoiSection } from "@/components/landing/roi-section";
import { Testimonials } from "@/components/landing/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* HERO SECTION */}
      <HeroSection />

      {/* TRUSTED PARTNERS LOGO BAR */}
      <TrustedPartners />

      {/* FEATURE SECTION: STACKED STICKY CARDS */}
      <FeatureCards />

      {/* Main Container */}
      <main className="w-full">

        {/* SECTION 1: CORE PLATFORM CAPABILITIES */}
        <WhyChoose />

        {/* SECTION 2: EXCEL VS SKILLMETRICS COMPARISON */}
        <ExcelComparison />

        {/* SECTION 3: WHY SKILLMETRICS */}
        <WhySkillMetrics />

        {/* SECTION 4: ROI / COST SAVINGS */}
        <RoiSection />

        {/* SECTION 5: TESTIMONIALS */}
        <Testimonials />

        {/* SECTION 6: NEWSLETTER */}
        <SubscribeSection />

      </main>

      <Footer />
    </div>
  );
}
