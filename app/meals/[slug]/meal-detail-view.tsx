"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Meal } from "@/types/meal";
import { useLanguage } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Clock,
  Flame,
  AlertCircle,
  Utensils,
} from "lucide-react";

export function MealDetailView({ meal }: { meal: Meal }) {
  const { lang, dir, formatCurrency, t } = useLanguage();
  const ArrowBackIcon = dir === "rtl" ? ArrowRight : ArrowLeft;
  const ArrowNextIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className="py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb / Back button */}
        <div>
          <Link
            href="/meals"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#344B37] hover:text-[#D99B63] transition-colors"
          >
            <ArrowBackIcon className="w-4 h-4" />
            <span>{lang === "ar" ? "العودة لجميع الوجبات" : "Back to All Meals"}</span>
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Big Food Image & Visual badges */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-[#EBE5D5]">
              <Image
                src={meal.image}
                alt={meal.title[lang]}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-4 start-4 flex flex-wrap gap-2">
                <span className="bg-[#344B37]/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
                  {meal.prepTime}
                </span>
                <span className="bg-white/90 text-[#344B37] text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#D99B63] text-[#D99B63]" />
                  <span>{meal.rating}</span>
                  <span className="text-[#8D9B8E] text-[10px]">({meal.reviewsCount})</span>
                </span>
              </div>
            </div>

            {/* Serving Note */}
            <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#DDD6C5]/70 flex items-start gap-3 text-xs text-[#5A695C]">
              <Clock className="w-4 h-4 text-[#D99B63] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#344B37] block font-semibold mb-0.5">
                  {t.common.prepInstructions}:
                </strong>
                {t.common.prepNote}
              </p>
            </div>
          </div>

          {/* Right Column: Nutrition, Ingredients, Allergens & Action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {meal.dietaryTags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag.replace("_", " ")}
                  </Badge>
                ))}
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-[#344B37] leading-tight">
                {meal.title[lang]}
              </h1>
              <p className="text-sm sm:text-base text-[#5A695C] leading-relaxed">
                {meal.description[lang]}
              </p>
            </div>

            {/* Nutrition Facts Grid */}
            <div className="rounded-3xl p-6 bg-white border border-[#DDD6C5]/80 shadow-[0_4px_20px_-2px_rgba(52,75,55,0.06)] space-y-4">
              <div className="flex items-center justify-between border-b border-[#DDD6C5]/50 pb-3">
                <h3 className="text-sm font-bold text-[#344B37] uppercase tracking-wider flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#D99B63]" />
                  <span>{t.common.nutritionalFacts}</span>
                </h3>
                <span className="text-xs text-[#7F875D] font-medium">
                  {lang === "ar" ? "لكل حصة غذائية" : "Per serving"}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-3 rounded-2xl bg-[#FAF8F4] border border-[#DDD6C5]/40">
                  <span className="block text-xl sm:text-2xl font-black text-[#344B37]">
                    {meal.calories}
                  </span>
                  <span className="text-[11px] text-[#7F875D] font-semibold uppercase">
                    {t.featuredMeals.calories}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FAF8F4] border border-[#DDD6C5]/40">
                  <span className="block text-xl sm:text-2xl font-black text-[#344B37]">
                    {meal.protein}g
                  </span>
                  <span className="text-[11px] text-[#7F875D] font-semibold uppercase">
                    {t.featuredMeals.protein}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FAF8F4] border border-[#DDD6C5]/40">
                  <span className="block text-xl sm:text-2xl font-black text-[#344B37]">
                    {meal.carbs}g
                  </span>
                  <span className="text-[11px] text-[#7F875D] font-semibold uppercase">
                    {t.featuredMeals.carbs}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FAF8F4] border border-[#DDD6C5]/40">
                  <span className="block text-xl sm:text-2xl font-black text-[#344B37]">
                    {meal.fat}g
                  </span>
                  <span className="text-[11px] text-[#7F875D] font-semibold uppercase">
                    {t.featuredMeals.fat}
                  </span>
                </div>
              </div>
            </div>

            {/* Ingredients List */}
            <div className="rounded-3xl p-6 bg-white border border-[#DDD6C5]/80 space-y-3">
              <h3 className="text-sm font-bold text-[#344B37] uppercase tracking-wider flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#A5AD85]" />
                <span>{t.common.ingredients}</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A695C]">
                {meal.ingredients[lang].map((ing, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A5AD85]" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Allergens warning */}
            {meal.allergens[lang].length > 0 && (
              <div className="p-4 rounded-2xl bg-[#FFF8EE] border border-[#D99B63]/40 flex items-start gap-3 text-xs text-[#9E5D24]">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#D99B63]" />
                <div>
                  <strong className="block font-semibold mb-0.5">{t.common.allergens}:</strong>
                  <span>{meal.allergens[lang].join(" • ")}</span>
                </div>
              </div>
            )}

            {/* Price and CTA box */}
            <div className="pt-4 border-t border-[#DDD6C5]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#5A695C] block">
                  {lang === "ar" ? "قيمة الوجبة ضمن الاشتراك" : "Single Meal Reference"}
                </span>
                <span className="text-3xl font-black text-[#344B37]">
                  {formatCurrency(meal.price)}
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link href="/plans" className="w-full sm:w-auto">
                  <Button
                    variant="warm"
                    size="lg"
                    className="w-full sm:w-auto gap-2 font-bold shadow-md"
                  >
                    <span>{lang === "ar" ? "اشترك وأضف لخطة أسبوعك" : "Subscribe & Add to Plan"}</span>
                    <ArrowNextIcon className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
