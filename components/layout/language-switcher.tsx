"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[#DDD6C5] bg-white/80 hover:bg-white text-[#344B37] shadow-xs hover:border-[#A5AD85] transition-all cursor-pointer ${className}`}
      title={lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
      aria-label="Toggle language"
    >
      <Globe className="w-3.5 h-3.5 text-[#A5AD85]" />
      <span>{lang === "en" ? "العربية" : "English"}</span>
    </button>
  );
}
