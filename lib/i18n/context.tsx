"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { DICTIONARIES, Language, Direction } from "./dictionaries";

interface LanguageContextType {
  lang: Language;
  dir: Direction;
  t: typeof DICTIONARIES["en"];
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  formatCurrency: (amount: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("nutrigo_lang") as Language | null;
    if (saved === "ar" || saved === "en") {
      setLangState(saved);
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = saved;
    } else {
      const isArabic = navigator.language.startsWith("ar");
      const defaultLang: Language = isArabic ? "ar" : "en";
      setLangState(defaultLang);
      document.documentElement.dir = isArabic ? "rtl" : "ltr";
      document.documentElement.lang = defaultLang;
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLangState(newLang);
    const newDir = newLang === "ar" ? "rtl" : "ltr";
    if (typeof window !== "undefined") {
      localStorage.setItem("nutrigo_lang", newLang);
      document.documentElement.dir = newDir;
      document.documentElement.lang = newLang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(lang === "en" ? "ar" : "en");
  };

  const dir: Direction = lang === "ar" ? "rtl" : "ltr";
  const t = DICTIONARIES[lang];

  const formatCurrency = (amount: number): string => {
    if (lang === "ar") {
      return `${amount} ر.س`;
    }
    return `${amount} SAR`;
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        dir,
        t,
        setLanguage,
        toggleLanguage,
        formatCurrency,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
