/**
 * Meals Data Service
 * -------------------------------------------------------------
 * Abstracted data layer for NutriGo meals.
 * Currently serves data from local mocks.
 * Supabase client queries can be plugged in here in the future without changing component code.
 */

import { MOCK_MEALS } from "@/lib/mock-data/meals";
import { Meal, HealthGoal, DietaryTag } from "@/types/meal";

export async function getMeals(filters?: {
  goal?: HealthGoal | "all";
  tag?: DietaryTag | "all";
  query?: string;
}): Promise<Meal[]> {
  let meals = [...MOCK_MEALS];

  if (filters?.goal && filters.goal !== "all") {
    meals = meals.filter((m) => m.goal === filters.goal);
  }

  if (filters?.tag && filters.tag !== "all") {
    meals = meals.filter((m) => m.dietaryTags.includes(filters.tag as DietaryTag));
  }

  if (filters?.query) {
    const q = filters.query.toLowerCase().trim();
    meals = meals.filter(
      (m) =>
        m.title.en.toLowerCase().includes(q) ||
        m.title.ar.toLowerCase().includes(q) ||
        m.description.en.toLowerCase().includes(q) ||
        m.description.ar.toLowerCase().includes(q)
    );
  }

  return meals;
}

export async function getFeaturedMeals(): Promise<Meal[]> {
  return MOCK_MEALS.filter((m) => m.featured);
}

export async function getMealBySlug(slug: string): Promise<Meal | null> {
  const meal = MOCK_MEALS.find((m) => m.slug === slug);
  return meal || null;
}
