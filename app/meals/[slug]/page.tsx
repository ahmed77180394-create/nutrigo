import React from "react";
import { notFound } from "next/navigation";
import { MOCK_MEALS } from "@/lib/mock-data/meals";
import { MealDetailView } from "./meal-detail-view";

export function generateStaticParams() {
  return MOCK_MEALS.map((meal) => ({
    slug: meal.slug,
  }));
}

export default async function MealDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meal = MOCK_MEALS.find((m) => m.slug === slug);

  if (!meal) {
    notFound();
  }

  return <MealDetailView meal={meal} />;
}
