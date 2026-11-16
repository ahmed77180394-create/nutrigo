"use client";

import React from "react";
import { LanguageProvider, useLanguage } from "@/lib/i18n/context";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

function InnerAppShell({ children }: { children: React.ReactNode }) {
  const { dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#1E2B20]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <InnerAppShell>{children}</InnerAppShell>
    </LanguageProvider>
  );
}
