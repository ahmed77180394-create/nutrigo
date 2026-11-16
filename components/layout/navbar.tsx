"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, Sparkles } from "lucide-react";

export function Navbar() {
  const { t, lang } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/meals", label: t.nav.meals },
    { href: "/plans", label: t.nav.plans },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F1E8]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(52,75,55,0.06)] border-b border-[#DDD6C5]/60"
          : "bg-[#F5F1E8]/70 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#344B37] rounded-lg"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#344B37] flex items-center justify-center text-[#F5F1E8] shadow-sm group-hover:bg-[#263829] transition-colors">
              <Leaf className="w-5 h-5 text-[#A5AD85] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#344B37]">
                Nutri<span className="text-[#D99B63]">Go</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#A5AD85] font-semibold -mt-1">
                {lang === "ar" ? "تغذية صحية فاخرة" : "Healthy Living"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#344B37] bg-[#EBE5D5] font-semibold"
                      : "text-[#5A695C] hover:text-[#344B37] hover:bg-[#EBE5D5]/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions: Language switcher, Login, Get Started CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />

            <Link href="/login">
              <Button variant="ghost" size="sm" className="font-medium text-sm">
                {t.nav.login}
              </Button>
            </Link>

            <Link href="/plans">
              <Button
                variant="primary"
                size="sm"
                className="gap-1.5 shadow-sm hover:shadow-md transition-all"
              >
                <span>{t.nav.getStarted}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#D99B63]" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#344B37] hover:bg-[#EBE5D5] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#DDD6C5] bg-[#FAF8F4] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#344B37] text-[#F5F1E8] font-semibold"
                      : "text-[#344B37] hover:bg-[#EBE5D5]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-[#DDD6C5]/70 flex flex-col gap-2.5">
            <Link href="/login" className="w-full">
              <Button variant="outline" className="w-full justify-center">
                {t.nav.login}
              </Button>
            </Link>
            <Link href="/plans" className="w-full">
              <Button variant="primary" className="w-full justify-center gap-2">
                <span>{t.nav.getStarted}</span>
                <Sparkles className="w-4 h-4 text-[#D99B63]" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
