"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { MOCK_PLANS } from "@/lib/mock-data/plans";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";

export function SubscriptionPlansSection() {
  const { t, lang, dir, formatCurrency } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<"weekly" | "monthly">("monthly");
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-16">
          <Badge variant="warm" className="px-3 py-1 text-xs">
            {t.plans.sectionBadge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#344B37] tracking-tight">
            {t.plans.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5A695C] leading-relaxed">
            {t.plans.subtitle}
          </p>

          {/* Billing Switcher (Weekly vs Monthly) */}
          <div className="pt-4 inline-flex items-center p-1 rounded-full bg-[#EBE5D5] border border-[#DDD6C5]">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-[#344B37] text-white shadow-sm"
                  : "text-[#5A695C] hover:text-[#344B37]"
              }`}
            >
              {t.plans.billedMonthly}{" "}
              <span className="text-[10px] text-[#A5AD85] font-normal ms-1">
                ({lang === "ar" ? "توفير 15%" : "Save 15%"})
              </span>
            </button>
            <button
              onClick={() => setBillingCycle("weekly")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === "weekly"
                  ? "bg-[#344B37] text-white shadow-sm"
                  : "text-[#5A695C] hover:text-[#344B37]"
              }`}
            >
              {t.plans.billedWeekly}
            </button>
          </div>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MOCK_PLANS.map((plan) => {
            const isPopular = plan.popular;
            const price = billingCycle === "monthly" ? plan.pricePerMonth : plan.pricePerWeek;
            const cycleText = billingCycle === "monthly" ? t.plans.perMonth : t.plans.perWeek;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-white border-2 border-[#D99B63] shadow-2xl lg:-translate-y-2"
                    : "bg-white border border-[#DDD6C5]/80 shadow-[0_4px_25px_-2px_rgba(52,75,55,0.06)] hover:border-[#A5AD85] hover:shadow-lg"
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 inset-x-0 flex justify-center">
                    <span className="bg-[#D99B63] text-white text-xs font-black uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                      {plan.badge ? plan.badge[lang] : t.plans.popularBadge}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Title & Tagline */}
                  <div>
                    <h3 className="text-2xl font-black text-[#344B37]">
                      {plan.name[lang]}
                    </h3>
                    <p className="text-xs text-[#5A695C] mt-1.5 leading-relaxed">
                      {plan.tagline[lang]}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="py-4 border-y border-[#DDD6C5]/50 flex items-baseline gap-2">
                    <span className="text-4xl font-black text-[#344B37]">
                      {formatCurrency(price)}
                    </span>
                    <span className="text-xs text-[#7F875D] font-medium">
                      / {cycleText}
                    </span>
                  </div>

                  {/* Plan Key Specs */}
                  <div className="grid grid-cols-2 gap-2 text-center text-xs py-2 px-3 rounded-2xl bg-[#FAF8F4]">
                    <div>
                      <span className="text-[10px] text-[#7F875D] block">
                        {lang === "ar" ? "الوجبات يومياً" : "Daily Meals"}
                      </span>
                      <span className="font-extrabold text-[#344B37]">
                        {plan.mealsPerDay} {lang === "ar" ? "وجبة" : "meals"}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#7F875D] block">
                        {lang === "ar" ? "أيام التوصيل" : "Delivery"}
                      </span>
                      <span className="font-extrabold text-[#344B37]">
                        {plan.deliveryDays} {lang === "ar" ? "أيام/أسبوع" : "days/wk"}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold text-[#344B37] uppercase tracking-wider block">
                      {lang === "ar" ? "المميزات المشمولة:" : "What's included:"}
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features[lang].map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#5A695C]">
                          <div className="w-4 h-4 rounded-full bg-[#344B37]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#344B37]">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Subscribe Button */}
                <div className="pt-8 mt-6">
                  <Link href={`/plans?select=${plan.slug}`}>
                    <Button
                      variant={isPopular ? "warm" : "primary"}
                      size="lg"
                      className="w-full justify-center gap-2 font-bold text-sm shadow-md"
                    >
                      <span>{t.plans.choosePlan}</span>
                      <ArrowIcon className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Nutritionist Banner */}
        <div className="mt-12 rounded-3xl bg-[#EBE5D5]/80 p-6 sm:p-8 border border-[#DDD6C5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-start space-y-1">
            <h4 className="text-base font-bold text-[#344B37]">
              {t.plans.customQuestions}
            </h4>
            <p className="text-xs sm:text-sm text-[#5A695C]">
              {lang === "ar"
                ? "نوفر برامج مخصصة لحساب الماكروز الدقيق للرياضيين واشتراكات الشركات بأسعار تفضيلية."
                : "We design tailored macro programs for pro athletes and corporate wellness with group benefits."}
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <Button variant="outline" className="border-[#344B37] text-xs font-semibold">
              {t.plans.talkToNutritionist}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
