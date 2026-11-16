"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { MOCK_MEALS } from "@/lib/mock-data/meals";
import { MealCard } from "@/components/meals/meal-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function FeaturedMealsSection() {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const featuredMeals = MOCK_MEALS.slice(0, 6);

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <Badge variant="secondary" className="px-3 py-1 text-xs">
              {t.featuredMeals.sectionBadge}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#344B37] tracking-tight">
              {t.featuredMeals.title}
            </h2>
            <p className="text-sm sm:text-base text-[#5A695C] leading-relaxed">
              {t.featuredMeals.subtitle}
            </p>
          </div>

          <div>
            <Link href="/meals">
              <Button
                variant="outline"
                className="gap-2 border-[#344B37] text-[#344B37] hover:bg-[#344B37] hover:text-[#F5F1E8]"
              >
                <span>{t.featuredMeals.viewAllMeals}</span>
                <ArrowIcon className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Meal Cards Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMeals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}
