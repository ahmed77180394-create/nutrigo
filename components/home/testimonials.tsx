"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { MOCK_TESTIMONIALS } from "@/lib/mock-data/testimonials";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F4] border-y border-[#DDD6C5]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <Badge variant="warm" className="px-3 py-1 text-xs">
            {t.testimonials.sectionBadge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#344B37] tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5A695C] leading-relaxed">
            {t.testimonials.subtitle}
          </p>
          <div className="pt-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EBE5D5] text-[11px] text-[#5A695C]">
              {lang === "ar"
                ? "نماذج تجريبية توضيحية لآراء المشتركين (Demo Fictional Testimonials)"
                : "Fictional Demo Testimonials for illustrative preview purposes"}
            </span>
          </div>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-7 bg-white border border-[#DDD6C5]/70 shadow-[0_4px_25px_-2px_rgba(52,75,55,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D99B63] text-[#D99B63]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#A5AD85]/40" />
                </div>

                {/* Quote */}
                <p className="text-sm text-[#344B37] italic leading-relaxed">
                  &ldquo;{item.quote[lang]}&rdquo;
                </p>

                {/* Achieved Result Badge */}
                <div className="p-2.5 rounded-xl bg-[#FAF8F4] border border-[#DDD6C5]/40 text-xs font-semibold text-[#344B37] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A5AD85] shrink-0" />
                  <span>{item.result[lang]}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-[#DDD6C5]/50 flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#A5AD85] shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name[lang]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#344B37] flex items-center gap-1">
                    <span>{item.name[lang]}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#344B37]" />
                  </h4>
                  <p className="text-xs text-[#5A695C]">
                    {item.role[lang]} • {item.location[lang]}
                  </p>
                  <span className="text-[10px] font-semibold text-[#D99B63] block mt-0.5">
                    {item.planName[lang]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
