"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Meal } from "@/types/meal";
import { useLanguage } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Star, Clock, ArrowRight, ArrowLeft } from "lucide-react";

export function MealCard({ meal }: { meal: Meal }) {
  const { lang, dir, formatCurrency, t } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const tagLabels: Record<string, { en: string; ar: string }> = {
    high_protein: { en: "High Protein", ar: "بروتين عالي" },
    low_carb: { en: "Low Carb", ar: "قليل الكارب" },
    gluten_free: { en: "Gluten Free", ar: "خالي من الجلوتين" },
    dairy_free: { en: "Dairy Free", ar: "خالي من الألبان" },
    keto: { en: "Keto Friendly", ar: "كيتو" },
    vegan: { en: "Plant Based", ar: "نباتي" },
  };

  return (
    <div className="group rounded-3xl border border-[#DDD6C5]/70 bg-white overflow-hidden shadow-[0_4px_20px_-2px_rgba(52,75,55,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(52,75,55,0.14)] hover:border-[#A5AD85] transition-all duration-300 flex flex-col">
      {/* Meal Image */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#EBE5D5]">
        <Image
          src={meal.image}
          alt={meal.title[lang]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Floating Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <div className="flex flex-wrap gap-1.5">
            {meal.dietaryTags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-[#1E2B20]/80 backdrop-blur-md text-[#F5F1E8] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs"
              >
                {tagLabels[tag]?.[lang] || tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-full text-xs font-bold text-[#344B37] shadow-xs">
            <Star className="w-3.5 h-3.5 fill-[#D99B63] text-[#D99B63]" />
            <span>{meal.rating}</span>
          </div>
        </div>

        {/* Prep Time pill */}
        <div className="absolute bottom-3 start-3">
          <span className="inline-flex items-center gap-1 bg-[#F5F1E8]/90 backdrop-blur-md text-[#344B37] text-[11px] font-medium px-2.5 py-0.5 rounded-full shadow-xs">
            <Clock className="w-3 h-3 text-[#A5AD85]" />
            <span>{meal.prepTime}</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-[#344B37] leading-snug group-hover:text-[#263829] transition-colors line-clamp-1">
            {meal.title[lang]}
          </h3>
          <p className="text-xs text-[#5A695C] mt-1.5 line-clamp-2 leading-relaxed">
            {meal.description[lang]}
          </p>
        </div>

        {/* Macronutrient Pills */}
        <div className="grid grid-cols-4 gap-1.5 py-2 px-3 rounded-2xl bg-[#FAF8F4] border border-[#DDD6C5]/50 text-center">
          <div>
            <span className="block text-[10px] text-[#7F875D] uppercase font-semibold">
              {t.featuredMeals.calories}
            </span>
            <span className="text-xs font-bold text-[#344B37]">{meal.calories}</span>
          </div>
          <div>
            <span className="block text-[10px] text-[#7F875D] uppercase font-semibold">
              {t.featuredMeals.protein}
            </span>
            <span className="text-xs font-bold text-[#344B37]">{meal.protein}g</span>
          </div>
          <div>
            <span className="block text-[10px] text-[#7F875D] uppercase font-semibold">
              {t.featuredMeals.carbs}
            </span>
            <span className="text-xs font-bold text-[#344B37]">{meal.carbs}g</span>
          </div>
          <div>
            <span className="block text-[10px] text-[#7F875D] uppercase font-semibold">
              {t.featuredMeals.fat}
            </span>
            <span className="text-xs font-bold text-[#344B37]">{meal.fat}g</span>
          </div>
        </div>

        {/* Price and Details Action */}
        <div className="pt-2 flex items-center justify-between border-t border-[#DDD6C5]/40">
          <div>
            <span className="text-[10px] text-[#7F875D] block">
              {lang === "ar" ? "سعر الوجبة" : "Sample price"}
            </span>
            <span className="text-lg font-extrabold text-[#344B37]">
              {formatCurrency(meal.price)}
            </span>
          </div>

          <Link href={`/meals/${meal.slug}`}>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full text-xs font-semibold gap-1.5 group/btn border-[#344B37]/40 hover:bg-[#344B37] hover:text-white"
            >
              <span>{t.featuredMeals.viewDetails}</span>
              <ArrowIcon className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 rtl:group-hover/btn:-translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
