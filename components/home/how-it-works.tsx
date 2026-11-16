"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Badge } from "@/components/ui/badge";
import { Target, UtensilsCrossed, PackageCheck } from "lucide-react";

export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: t.howItWorks.step1.number,
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
      icon: Target,
      color: "bg-[#344B37] text-white",
    },
    {
      number: t.howItWorks.step2.number,
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
      icon: UtensilsCrossed,
      color: "bg-[#D99B63] text-white",
    },
    {
      number: t.howItWorks.step3.number,
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
      icon: PackageCheck,
      color: "bg-[#A5AD85] text-[#1E2B20]",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F4] border-y border-[#DDD6C5]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <Badge variant="forest" className="px-3 py-1 text-xs">
            {t.howItWorks.sectionBadge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#344B37] tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5A695C] leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-3xl p-8 border border-[#DDD6C5]/70 shadow-[0_4px_25px_-2px_rgba(52,75,55,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Big Step Number in background */}
                <span className="absolute top-4 end-6 text-5xl font-black text-[#DDD6C5]/30 select-none pointer-events-none">
                  {step.number}
                </span>

                <div className="space-y-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${step.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-[#344B37]">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#5A695C] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DDD6C5]/40 flex items-center gap-2 text-xs font-semibold text-[#A5AD85]">
                  <span className="w-2 h-2 rounded-full bg-[#D99B63]" />
                  <span>
                    {idx === 0
                      ? "Personalized algorithm"
                      : idx === 1
                      ? "40+ rotating weekly dishes"
                      : "Daily chilled morning arrival"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
