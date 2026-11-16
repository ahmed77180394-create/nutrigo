"use client";

import React from "react";
import { HeroSection } from "@/components/home/hero-section";
import { HealthGoalsSection } from "@/components/home/health-goals";
import { FeaturedMealsSection } from "@/components/home/featured-meals";
import { HowItWorksSection } from "@/components/home/how-it-works";
import { SubscriptionPlansSection } from "@/components/home/subscription-plans";
import { WhyNutriGoSection } from "@/components/home/why-nutrigo";
import { TestimonialsSection } from "@/components/home/testimonials";
import { FinalCtaSection } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <HealthGoalsSection />
      <FeaturedMealsSection />
      <HowItWorksSection />
      <SubscriptionPlansSection />
      <WhyNutriGoSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </div>
  );
}
