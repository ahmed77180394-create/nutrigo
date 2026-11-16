"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { MOCK_MEALS } from "@/lib/mock-data/meals";
import { MealCard } from "@/components/meals/meal-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, Utensils, X } from "lucide-react";
import { HealthGoal, DietaryTag } from "@/types/meal";

export default function MealsPage() {
  const { t, lang } = useLanguage();
  const [selectedGoal, setSelectedGoal] = useState<HealthGoal | "all">("all");
  const [selectedDiet, setSelectedDiet] = useState<DietaryTag | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const goalOptions = [
    { id: "all", label: { en: "All Goals", ar: "جميع الأهداف" } },
    { id: "weight_loss", label: { en: "Lose Weight", ar: "خسارة الوزن" } },
    { id: "muscle_gain", label: { en: "Build Muscle", ar: "بناء العضلات" } },
    { id: "maintain", label: { en: "Maintain Weight", ar: "تثبيت الوزن" } },
    { id: "healthy_eating", label: { en: "Eat Healthy", ar: "أكل صحي" } },
  ];

  const dietOptions = [
    { id: "all", label: { en: "All Diets", ar: "جميع الأنظمة" } },
    { id: "high_protein", label: { en: "High Protein", ar: "بروتين عالي" } },
    { id: "low_carb", label: { en: "Low Carb", ar: "قليل الكارب" } },
    { id: "gluten_free", label: { en: "Gluten Free", ar: "خالي من الجلوتين" } },
    { id: "dairy_free", label: { en: "Dairy Free", ar: "خالي من الألبان" } },
    { id: "keto", label: { en: "Keto", ar: "كيتو" } },
  ];

  const filteredMeals = useMemo(() => {
    return MOCK_MEALS.filter((meal) => {
      // Goal filter
      if (selectedGoal !== "all" && meal.goal !== selectedGoal) {
        return false;
      }
      // Diet tag filter
      if (selectedDiet !== "all" && !meal.dietaryTags.includes(selectedDiet)) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle =
          meal.title.en.toLowerCase().includes(q) || meal.title.ar.toLowerCase().includes(q);
        const matchesDesc =
          meal.description.en.toLowerCase().includes(q) ||
          meal.description.ar.toLowerCase().includes(q);
        const matchesIngredient =
          meal.ingredients.en.some((i) => i.toLowerCase().includes(q)) ||
          meal.ingredients.ar.some((i) => i.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesIngredient) {
          return false;
        }
      }
      return true;
    });
  }, [selectedGoal, selectedDiet, searchQuery]);

  const clearFilters = () => {
    setSelectedGoal("all");
    setSelectedDiet("all");
    setSearchQuery("");
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="warm" className="px-3 py-1 text-xs">
            {lang === "ar" ? "قائمة الشيف الأسبوعية" : "Weekly Rotating Menu"}
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-[#344B37] tracking-tight">
            {lang === "ar" ? "الوجبات الصحية الفاخرة" : "Chef-Crafted Healthy Meals"}
          </h1>
          <p className="text-sm sm:text-base text-[#5A695C] leading-relaxed">
            {lang === "ar"
              ? "استكشف قائمتنا الغنية بأشهى الأطباق المحسوبة السعرات والماكروز بدقة لتحقيق هدفك البدني."
              : "Explore our rich selection of fresh, macro-balanced gourmet meals designed for every fitness goal."}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-6 rounded-3xl bg-white border border-[#DDD6C5]/80 shadow-[0_4px_25px_-2px_rgba(52,75,55,0.06)] space-y-6">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 absolute start-4 top-1/2 -translate-y-1/2 text-[#8D9B8E]" />
            <Input
              type="text"
              placeholder={t.common.searchMealsPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ps-11 pe-10 h-12 rounded-2xl bg-[#FAF8F4] border-[#DDD6C5]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute end-4 top-1/2 -translate-y-1/2 text-[#8D9B8E] hover:text-[#344B37]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Goal Filter Tabs */}
          <div>
            <div className="flex items-center gap-2 mb-2.5 text-xs font-bold text-[#344B37] uppercase tracking-wider">
              <Utensils className="w-3.5 h-3.5 text-[#A5AD85]" />
              <span>{t.common.filterByGoal}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {goalOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedGoal(opt.id as HealthGoal | "all")}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedGoal === opt.id
                      ? "bg-[#344B37] text-white shadow-xs"
                      : "bg-[#FAF8F4] text-[#5A695C] hover:bg-[#EBE5D5] border border-[#DDD6C5]/60"
                  }`}
                >
                  {opt.label[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Dietary Filter Tags */}
          <div>
            <div className="flex items-center gap-2 mb-2.5 text-xs font-bold text-[#344B37] uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#D99B63]" />
              <span>{t.common.filterByDiet}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {dietOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedDiet(opt.id as DietaryTag | "all")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedDiet === opt.id
                      ? "bg-[#D99B63] text-white shadow-xs font-semibold"
                      : "bg-[#FAF8F4] text-[#5A695C] hover:bg-[#EBE5D5] border border-[#DDD6C5]/60"
                  }`}
                >
                  {opt.label[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Active filter counter & reset */}
          <div className="flex items-center justify-between pt-2 border-t border-[#DDD6C5]/50 text-xs text-[#5A695C]">
            <span>
              {lang === "ar"
                ? `عرض ${filteredMeals.length} من أصل ${MOCK_MEALS.length} وجبة`
                : `Showing ${filteredMeals.length} of ${MOCK_MEALS.length} meals`}
            </span>
            {(selectedGoal !== "all" || selectedDiet !== "all" || searchQuery) && (
              <button
                onClick={clearFilters}
                className="text-[#D99B63] hover:underline font-semibold cursor-pointer"
              >
                {lang === "ar" ? "إعادة ضبط التصفية" : "Reset Filters"}
              </button>
            )}
          </div>
        </div>

        {/* Meals Grid */}
        {filteredMeals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMeals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#DDD6C5] p-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EBE5D5] flex items-center justify-center mx-auto text-[#344B37]">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#344B37]">
              {lang === "ar" ? "لم نجد وجبات مطابقة" : "No matching meals found"}
            </h3>
            <p className="text-sm text-[#5A695C] max-w-md mx-auto">
              {t.common.noMealsFound}
            </p>
            <Button variant="outline" onClick={clearFilters}>
              {lang === "ar" ? "مسح جميع الفلاتر" : "Clear All Filters"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
