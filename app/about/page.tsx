"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Award, HeartHandshake, ArrowRight, ArrowLeft } from "lucide-react";

export default function AboutPage() {
  const { lang, dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const team = [
    {
      name: { en: "Chef Jean-Luc Moreau", ar: "الشيف جان لوك مورو" },
      role: { en: "Executive Culinary Director", ar: "المدير التنفيذي للطهي" },
      bio: {
        en: "Former Michelin-starred chef specializing in modern Mediterranean cuisine and low-sodium gourmet techniques.",
        ar: "طاهٍ حائز على تصنيفات دولية رفيعة متخصص في المطبخ المتوسطي الحديث وتقنيات الطهي الصحي قليل الصوديوم.",
      },
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: { en: "Dr. Reem Al-Ghamdi", ar: "د. ريم الغامدي" },
      role: { en: "Head of Clinical Nutrition", ar: "رئيسة قسم التغذية السريرية" },
      bio: {
        en: "Ph.D. in Sports Nutrition with 12+ years formulating performance meal strategies for national athletes.",
        ar: "دكتوراه في التغذية الرياضية وخبرة تتجاوز 12 عاماً في تصميم استراتيجيات التغذية الدقيقة للرياضيين والمنتخبات.",
      },
      image: "https://images.unsplash.com/photo-1594824813629-8736d895e638?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: { en: "Tariq Mansoor", ar: "طارق منصور" },
      role: { en: "Quality & Cold-Chain Lead", ar: "مدير الجودة وسلاسل الإمداد المبرد" },
      bio: {
        en: "Overseeing state-of-the-art HACCP-certified facilities and eco-friendly temperature-controlled logistics.",
        ar: "مسؤول عن تشغيل المرافق المركزية الحاصلة على شهادات الهاسب وتطوير حلول التوصيل المبرد الصديقة للبيئة.",
      },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-start">
            <Badge variant="warm" className="px-3 py-1 text-xs">
              {lang === "ar" ? "قصة نوتري جو" : "The NutriGo Story"}
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-black text-[#344B37] leading-tight tracking-tight">
              {lang === "ar"
                ? "إعادة تعريف الأكل الصحي ليصبح أسلوب حياة فاخر وممتع"
                : "Redefining Healthy Eating as an Effortless Gourmet Habit"}
            </h1>
            <p className="text-base sm:text-lg text-[#5A695C] leading-relaxed">
              {lang === "ar"
                ? "انطلقت نوتري جو من رؤية واضحة: لماذا يرتبط الأكل الصحي دائماً بالحرمان أو الطعم الباهت؟ جمعنا بين براعة كبار الطهاة ودقة أخصائيي التغذية السريرية لنقدم وجبات طازجة 100% محسوبة الماكروز، تصلك مبردة يومياً لباب بيتك."
                : "NutriGo was founded with a single mission: healthy nutrition should never feel like a sacrifice. We bridged executive chef artistry with clinical nutrition accuracy to create fresh, lab-calibrated meals delivered chilled to your doorstep every morning."}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#DDD6C5]/70">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#344B37]">500K+</span>
                <span className="text-xs text-[#5A695C] block">
                  {lang === "ar" ? "وجبة طازجة" : "Meals Cooked"}
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#344B37]">98%</span>
                <span className="text-xs text-[#5A695C] block">
                  {lang === "ar" ? "نسبة التجديد" : "Retention Rate"}
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#344B37]">0</span>
                <span className="text-xs text-[#5A695C] block">
                  {lang === "ar" ? "أطعمة مجمدة" : "Frozen Ingredients"}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[480px] w-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
                alt="NutriGo professional chef cooking"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Quality Pillars */}
        <div className="rounded-3xl bg-white border border-[#DDD6C5]/70 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="secondary">
              {lang === "ar" ? "معايير الجودة الثابتة" : "Uncompromising Pillars"}
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#344B37]">
              {lang === "ar" ? "لماذا طعامنا مختلف؟" : "What Makes NutriGo Different?"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#DDD6C5]/50 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#344B37] text-[#F5F1E8] flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#A5AD85]" />
              </div>
              <h3 className="text-lg font-bold text-[#344B37]">
                {lang === "ar" ? "طازج 100% بدون تجميد" : "Never Frozen Guarantee"}
              </h3>
              <p className="text-xs text-[#5A695C] leading-relaxed">
                {lang === "ar"
                  ? "جميع اللحوم، الدواجن والخضار تطهى طازجة في نفس فجر يوم التوصيل دون تخزين مجمد أو مواد حافظة صناعية."
                  : "All produce and meats are sourced fresh daily and prepared the morning of delivery with zero artificial preservatives."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#DDD6C5]/50 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#D99B63] text-white flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#344B37]">
                {lang === "ar" ? "دقة الماكروز المخبرية" : "Lab-Calibrated Macros"}
              </h3>
              <p className="text-xs text-[#5A695C] leading-relaxed">
                {lang === "ar"
                  ? "يتم وزن كل عنصر غذائي بالجرام لضمان توافق نسب البروتين والكاربوهيدرات والدهون مع أهدافك بدقة متناهية."
                  : "Every sauce portion and whole-grain gram is weighed precisely to eliminate guesswork from your fitness progress."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#DDD6C5]/50 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#A5AD85] text-[#1E2B20] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#344B37]">
                {lang === "ar" ? "تغليف صديق للبيئة" : "Eco-Friendly Chilled Logistics"}
              </h3>
              <p className="text-xs text-[#5A695C] leading-relaxed">
                {lang === "ar"
                  ? "أوعية قابلة لإعادة التدوير 100% وآمنة للميكروويف مع حقائب مبردة تحفظ درجة الحرارة المثالية حتى موعد تناولك لها."
                  : "100% recyclable, microwave-safe containers transported in temperature-controlled cooler insulation."}
              </p>
            </div>
          </div>
        </div>

        {/* Leadership & Culinary Team */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="forest">
              {lang === "ar" ? "فريق الطهاة والخبراء" : "Our Culinary Team"}
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#344B37]">
              {lang === "ar" ? "عقول مبدعة وراء كل طبق" : "Crafted by World-Class Experts"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white border border-[#DDD6C5]/70 overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-64 w-full bg-[#EBE5D5]">
                  <Image
                    src={member.image}
                    alt={member.name[lang]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-[#344B37]">{member.name[lang]}</h3>
                  <span className="text-xs font-semibold text-[#D99B63] block">
                    {member.role[lang]}
                  </span>
                  <p className="text-xs text-[#5A695C] leading-relaxed pt-2">
                    {member.bio[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center rounded-3xl bg-[#344B37] text-white p-10 sm:p-14 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black">
            {lang === "ar" ? "هل أنت مستعد لبدء أسلوب حياة أرقى؟" : "Ready to Elevate Your Everyday Nutrition?"}
          </h2>
          <p className="text-sm sm:text-base text-[#CAD0B3] max-w-xl mx-auto">
            {lang === "ar"
              ? "اختر باقتك المفضلة واستمتع بوجبات صحية راقية تصلك طازجة يومياً."
              : "Choose your favorite meal plan and enjoy premium healthy meals delivered fresh daily."}
          </p>
          <Link href="/plans">
            <Button variant="warm" size="lg" className="gap-2 font-bold shadow-lg">
              <span>{lang === "ar" ? "استعرض الباقات وابدأ الآن" : "Explore Plans & Get Started"}</span>
              <ArrowIcon className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
