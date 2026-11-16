import { LocalizedString } from "./meal";

export interface SubscriptionPlan {
  id: string;
  slug: string;
  name: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  pricePerDay: number; // in SAR
  pricePerWeek: number; // in SAR
  pricePerMonth: number; // in SAR
  mealsPerDay: number;
  snacksPerDay: number;
  deliveryDays: number; // 5 or 6 days/week
  features: {
    en: string[];
    ar: string[];
  };
  popular?: boolean;
  recommendedFor: LocalizedString;
  badge?: LocalizedString;
}

export interface PlanSelectionState {
  planId: string;
  duration: "weekly" | "monthly";
  daysPerWeek: 5 | 6;
  calorieTarget: number;
  deliverySlot: "morning" | "evening";
}
