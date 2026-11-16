"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { Flame, Dumbbell, Scale, Apple, ArrowRight, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HealthGoalsSection() {
  const { t, lang, dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const goals = [
    {
      id: "weight_loss",
      title: t.goals.weightLoss.title,
      description: t.goals.weightLoss.description,
      badge: t.goals.weightLoss.badge,
      icon: Flame,
      color: "bg-[#D99B63]/15 text-[#D99B63]",
      borderHover: "hover:border-[#D99B63]",
      slug: "weight_loss",
    },
    {
      id: "muscle_gain",
      title: t.goals.buildMuscle.title,
      description: t.goals.buildMuscle.description,
      badge: t.goals.buildMuscle.badge,
      icon: Dumbbell,
      color: "bg-[#344B37]/15 text-[#344B37]",
      borderHover: "hover:border-[#344B37]",
      slug: "muscle_gain",
    },
    {
      id: "maintain",
      title: t.goals.maintainWeight.title,
      description: t.goals.maintainWeight.description,
      badge: t.goals.maintainWeight.badge,
      icon: Scale,
      color: "bg-[#A5AD85]/25 text-[#5A695C]",
      borderHover: "hover:border-[#A5AD85]",
      slug: "maintain",
    },
    {
      id: "healthy_eating",
      title: t.goals.eatHealthy.title,
      description: t.goals.eatHealthy.description,
      badge: t.goals.eatHealthy.badge,
      icon: Apple,
      color: "bg-[#344B37]/10 text-[#344B37]",
      borderHover: "hover:border-[#344B37]",
      slug: "healthy_eating",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white/60 border-y border-[#DDD6C5]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <Badge variant="warm" className="px-3 py-1 text-xs">
            {t.goals.sectionBadge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#344B37] tracking-tight">
            {t.goals.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5A695C] leading-relaxed">
            {t.goals.subtitle}
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((g) => {
            const Icon = g.icon;
            return (
              <Link
                key={g.id}
                href={`/meals?goal=${g.slug}`}
                className={`group rounded-3xl p-6 bg-white border border-[#DDD6C5]/70 shadow-[0_4px_20px_-2px_rgba(52,75,55,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${g.borderHover} hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${g.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FAF8F4] text-[#5A695C] border border-[#DDD6C5]/50">
                      {g.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#344B37] group-hover:text-[#263829]">
                      {g.title}
                    </h3>
                    <p className="text-xs text-[#5A695C] mt-2 leading-relaxed">
                      {g.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#DDD6C5]/40 flex items-center justify-between text-xs font-bold text-[#344B37] group-hover:text-[#D99B63] transition-colors">
                  <span>{lang === "ar" ? "استعرض الوجبات" : "Explore Meals"}</span>
                  <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
