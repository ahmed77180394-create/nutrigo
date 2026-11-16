/**
 * Plans Data Service
 * -------------------------------------------------------------
 * Abstracted data layer for NutriGo subscription plans.
 * Currently serves data from local mocks.
 */

import { MOCK_PLANS } from "@/lib/mock-data/plans";
import { SubscriptionPlan } from "@/types/plan";

export async function getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
  return MOCK_PLANS;
}

export async function getPlanBySlug(slug: string): Promise<SubscriptionPlan | null> {
  const plan = MOCK_PLANS.find((p) => p.slug === slug);
  return plan || null;
}
