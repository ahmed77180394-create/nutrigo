"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { Badge } from "@/components/ui/badge";
import { Leaf, Scale, Truck, Sliders, CheckCircle2 } from "lucide-react";

export function WhyNutriGoSection() {
  const { t, lang } = useLanguage();

  const reasons = [
    {
      title: t.whyNutriGo.feature1.title,
      description: t.whyNutriGo.feature1.description,
      icon: Leaf,
      color: "bg-[#344B37] text-[#F5F1E8]",
    },
    {
      title: t.whyNutriGo.feature2.title,
      description: t.whyNutriGo.feature2.description,
      icon: Scale,
      color: "bg-[#D99B63] text-white",
    },
    {
      title: t.whyNutriGo.feature3.title,
      description: t.whyNutriGo.feature3.description,
      icon: Truck,
      color: "bg-[#A5AD85] text-[#1E2B20]",
    },
    {
      title: t.whyNutriGo.feature4.title,
      description: t.whyNutriGo.feature4.description,
      icon: Sliders,
      color: "bg-[#344B37] text-[#F5F1E8]",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white/70 border-t border-[#DDD6C5]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative h-[440px] sm:h-[500px] w-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
                alt="NutriGo fresh kitchen preparation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 inset-x-6 text-white space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#344B37]/90 text-xs font-semibold backdrop-blur-md">
                  <CheckCircle2 className="w-4 h-4 text-[#A5AD85]" />
                  <span>{lang === "ar" ? "معايير السلامة والجودة العالمية" : "HACCP & ISO Certified Kitchens"}</span>
                </div>
                <p className="text-sm font-medium text-white/90">
                  {lang === "ar"
                    ? "مطابخ مركزية مصنفة بأعلى درجات النظافة والاحترافية لتحضير كل وجبة."
                    : "Grade-A certified hygienic kitchens cooking 100% scratch-made recipes."}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Features */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-3">
              <Badge variant="secondary" className="px-3 py-1 text-xs">
                {t.whyNutriGo.sectionBadge}
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#344B37] tracking-tight">
                {t.whyNutriGo.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5A695C] leading-relaxed">
                {t.whyNutriGo.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#DDD6C5]/60 hover:bg-white hover:shadow-md transition-all space-y-3"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#344B37]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5A695C] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
