"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Sparkles, Utensils, Calendar, ShieldCheck, Flame, ArrowRight, ArrowLeft } from "lucide-react";

export function HeroSection() {
  const { t, lang, dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -start-24 w-96 h-96 bg-[#A5AD85]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -end-24 w-96 h-96 bg-[#D99B63]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-start">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBE5D5] border border-[#DDD6C5] text-[#344B37] text-xs font-semibold tracking-wide shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#D99B63]" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#344B37] leading-[1.12] tracking-tight">
              {t.hero.titleStart}{" "}
              <span className="text-[#D99B63] underline decoration-[#A5AD85]/60 decoration-wavy decoration-2">
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.titleEnd}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5A695C] leading-relaxed max-w-xl">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link href="/meals">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto gap-2 shadow-md hover:shadow-lg text-sm sm:text-base font-bold"
                >
                  <Utensils className="w-4 h-4 text-[#A5AD85]" />
                  <span>{t.hero.exploreMeals}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/plans">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto gap-2 border-[#344B37] text-[#344B37] hover:bg-[#344B37] hover:text-[#F5F1E8] text-sm sm:text-base font-semibold"
                >
                  <Calendar className="w-4 h-4 text-[#D99B63]" />
                  <span>{t.hero.viewPlans}</span>
                </Button>
              </Link>
            </div>

            {/* Social Proof / Stats */}
            <div className="pt-6 border-t border-[#DDD6C5]/70 grid grid-cols-3 gap-3 max-w-lg">
              <div>
                <span className="block text-xl sm:text-2xl font-black text-[#344B37]">500K+</span>
                <span className="text-xs text-[#5A695C] font-medium leading-tight block">
                  {lang === "ar" ? "وجبة محضرة ومسلمة" : "Meals Delivered"}
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-[#344B37]">4.9 / 5</span>
                <span className="text-xs text-[#5A695C] font-medium leading-tight block">
                  {lang === "ar" ? "رضا المشتركين" : "Customer Rating"}
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-[#344B37]">100%</span>
                <span className="text-xs text-[#5A695C] font-medium leading-tight block">
                  {lang === "ar" ? "مكونات طازجة يومياً" : "Fresh Guarantee"}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Visual Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Circular / Rounded Food Image Card */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(52,75,55,0.18)]">
                <Image
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85"
                  alt={t.hero.heroImageAlt}
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Bottom caption overlay */}
                <div className="absolute bottom-6 inset-x-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#344B37]/90 text-xs font-semibold backdrop-blur-md mb-1.5 text-[#F5F1E8]">
                    {lang === "ar" ? "طبق اليوم المختار" : "Today's Chef Choice"}
                  </span>
                  <p className="text-base font-bold leading-tight drop-shadow-sm">
                    {lang === "ar"
                      ? "صدر دجاج بالأعشاب والبطاطا المشوية"
                      : "Rosemary Chicken Breast with Sweet Potato"}
                  </p>
                </div>
              </div>

              {/* Floating Macro Card 1 (Top End) */}
              <div className="absolute -top-4 -end-4 sm:-end-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#DDD6C5] flex items-center gap-3 animate-in fade-in duration-500">
                <div className="w-10 h-10 rounded-xl bg-[#D99B63]/20 flex items-center justify-center text-[#D99B63]">
                  <Flame className="w-5 h-5 fill-[#D99B63]" />
                </div>
                <div>
                  <span className="text-xs text-[#5A695C] block font-medium">
                    {lang === "ar" ? "بروتين صافي" : "High Protein"}
                  </span>
                  <span className="text-sm font-extrabold text-[#344B37]">48g / meal</span>
                </div>
              </div>

              {/* Floating Macro Card 2 (Bottom Start) */}
              <div className="absolute -bottom-4 -start-4 sm:-start-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#DDD6C5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#344B37] flex items-center justify-center text-[#F5F1E8]">
                  <ShieldCheck className="w-5 h-5 text-[#A5AD85]" />
                </div>
                <div>
                  <span className="text-xs text-[#5A695C] block font-medium">
                    {lang === "ar" ? "معتمد مخبرياً" : "Lab Verified"}
                  </span>
                  <span className="text-sm font-extrabold text-[#344B37]">
                    {lang === "ar" ? "سعرات دقيقة 100%" : "Exact Calories"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
