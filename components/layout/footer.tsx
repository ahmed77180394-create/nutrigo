"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { Leaf, Mail, Phone, MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const { t, lang, dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <footer className="bg-[#1E2B20] text-[#F5F1E8] border-t border-[#344B37] pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#344B37]">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-[#344B37] flex items-center justify-center text-[#F5F1E8]">
                <Leaf className="w-5 h-5 text-[#A5AD85]" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Nutri<span className="text-[#D99B63]">Go</span>
              </span>
            </Link>
            <p className="text-[#A5AD85] text-sm leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="pt-2 space-y-2 text-xs text-[#CAD0B3]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D99B63] shrink-0" />
                <span>
                  {lang === "ar"
                    ? "طريق الملك فهد، العليا، الرياض، المملكة العربية السعودية"
                    : "King Fahd Road, Olaya District, Riyadh, Saudi Arabia"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D99B63] shrink-0" />
                <span dir="ltr">+966 800 124 9900</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D99B63] shrink-0" />
                <span>care@nutrigo.sa</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-[#CAD0B3]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/meals" className="hover:text-white transition-colors">
                  {t.nav.meals}
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-white transition-colors">
                  {t.nav.plans}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Health Goals */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
              {lang === "ar" ? "الأهداف الصحية" : "Health Goals"}
            </h4>
            <ul className="space-y-2 text-sm text-[#CAD0B3]">
              <li>
                <Link href="/meals?goal=weight_loss" className="hover:text-white transition-colors">
                  {t.goals.weightLoss.title}
                </Link>
              </li>
              <li>
                <Link href="/meals?goal=muscle_gain" className="hover:text-white transition-colors">
                  {t.goals.buildMuscle.title}
                </Link>
              </li>
              <li>
                <Link href="/meals?goal=maintain" className="hover:text-white transition-colors">
                  {t.goals.maintainWeight.title}
                </Link>
              </li>
              <li>
                <Link href="/meals?goal=healthy_eating" className="hover:text-white transition-colors">
                  {t.goals.eatHealthy.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-[#A5AD85] leading-relaxed">
              {t.footer.newsletterDesc}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(lang === "ar" ? "شكراً لاشتراكك في النشرة!" : "Thank you for subscribing!");
              }}
              className="space-y-2"
            >
              <Input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                required
                className="bg-[#2A3C2D] border-[#446148] text-white placeholder:text-[#A5AD85] text-xs h-10"
              />
              <Button
                type="submit"
                variant="warm"
                size="sm"
                className="w-full text-xs font-semibold gap-1.5 h-9"
              >
                <span>{t.footer.subscribeBtn}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#A5AD85] gap-4">
          <p>{t.footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              {t.footer.termsOfService}
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              {t.footer.refundPolicy}
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              {t.footer.nutritionalDisclaimer}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
