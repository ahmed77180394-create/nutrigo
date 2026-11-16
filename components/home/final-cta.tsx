"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Sparkles, Utensils, ArrowRight, ArrowLeft, ShieldCheck, Clock, RefreshCw } from "lucide-react";

export function FinalCtaSection() {
  const { t, lang, dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] bg-[#344B37] text-[#F5F1E8] overflow-hidden p-8 sm:p-14 lg:p-16 shadow-2xl">
          {/* Ambient circles */}
          <div className="absolute top-0 end-0 -mt-20 -me-20 w-80 h-80 rounded-full bg-[#A5AD85]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 start-0 -mb-20 -ms-20 w-80 h-80 rounded-full bg-[#D99B63]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#CAD0B3] text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-[#D99B63]" />
              <span>{t.finalCta.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              {t.finalCta.title}
            </h2>

            <p className="text-base sm:text-lg text-[#CAD0B3] leading-relaxed max-w-2xl mx-auto">
              {t.finalCta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/plans">
                <Button
                  variant="warm"
                  size="lg"
                  className="w-full sm:w-auto gap-2 text-base font-bold shadow-lg"
                >
                  <span>{t.finalCta.getStartedBtn}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/meals">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto gap-2 border-white/40 text-white hover:bg-white hover:text-[#344B37] text-base font-semibold"
                >
                  <Utensils className="w-4 h-4 text-[#A5AD85]" />
                  <span>{t.finalCta.exploreMenuBtn}</span>
                </Button>
              </Link>
            </div>

            {/* Micro guarantees */}
            <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-[#CAD0B3]">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#A5AD85]" />
                <span>{lang === "ar" ? "إلغاء أو إيقاف في أي وقت" : "Pause or cancel anytime"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D99B63]" />
                <span>{lang === "ar" ? "توصيل صباحي بارد" : "Chilled morning delivery"}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A5AD85]" />
                <span>{lang === "ar" ? "ضمان الرضا 100%" : "100% Satisfaction guarantee"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
