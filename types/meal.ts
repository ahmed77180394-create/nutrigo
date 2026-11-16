export type HealthGoal = "weight_loss" | "muscle_gain" | "maintain" | "healthy_eating";

export type DietaryTag = "high_protein" | "low_carb" | "gluten_free" | "dairy_free" | "keto" | "vegan";

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface Meal {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  calories: number;
  protein: number; // in grams
  carbs: number; // in grams
  fat: number; // in grams
  price: number; // sample price in SAR
  image: string;
  goal: HealthGoal;
  dietaryTags: DietaryTag[];
  ingredients: {
    en: string[];
    ar: string[];
  };
  allergens: {
    en: string[];
    ar: string[];
  };
  featured: boolean;
  rating: number;
  reviewsCount: number;
  prepTime: string; // e.g. "Ready to eat" or "2 mins reheat"
}

export interface MealFilterOptions {
  goal?: HealthGoal | "all";
  tag?: DietaryTag | "all";
  searchQuery?: string;
  maxCalories?: number;
  minProtein?: number;
}
