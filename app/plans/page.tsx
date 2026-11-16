"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { MOCK_PLANS } from "@/lib/mock-data/plans";
import { MOCK_FAQS } from "@/lib/mock-data/faqs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ChevronDown, ChevronUp, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

export default function PlansPage() {
  const { t, lang, dir, formatCurrency } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const [billingCycle, setBillingCycle] = useState<"weekly" | "monthly">("monthly");
  const [selectedPlanId, setSelectedPlanId] = useState("plan-balanced");
  const [daysPerWeek, setDaysPerWeek] = useState<5 | 6>(5);
  const [deliverySlot, setDeliverySlot] = useState<"morning" | "evening">("morning");
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");
  const [showDemoModal, setShowDemoModal] = useState(false);

  const selectedPlan = MOCK_PLANS.find((p) => p.id === selectedPlanId) || MOCK_PLANS[1];

  const calculateFinalPrice = () => {
    const base = billingCycle === "monthly" ? selectedPlan.pricePerMonth : selectedPlan.pricePerWeek;
    return daysPerWeek === 6 ? Math.round(base * 1.2) : base;
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="warm" className="px-3 py-1 text-xs">
            {lang === "ar" ? "خطط مرنة بدون التزام" : "Flexible No-Commitment Plans"}
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-[#344B37] tracking-tight">
            {lang === "ar" ? "اختر باقة الاشتراك المناسبة لك" : "Choose Your Ideal Meal Plan"}
          </h1>
          <p className="text-sm sm:text-base text-[#5A695C] leading-relaxed">
            {lang === "ar"
              ? "جميع وجباتنا محضرة طازجة يومياً بواسطة طهاة محترفين ومحسوبة الماكروز من قبل أخصائيي التغذية. يمكنك الإيقاف أو التبديل في أي وقت."
              : "All meals are prepared fresh daily by executive chefs and balanced by clinical nutritionists. Pause, skip, or cancel anytime with ease."}
          </p>

          {/* Cycle Toggle */}
          <div className="pt-4 inline-flex items-center p-1 rounded-full bg-[#EBE5D5] border border-[#DDD6C5]">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-[#344B37] text-white shadow-sm"
                  : "text-[#5A695C] hover:text-[#344B37]"
              }`}
            >
              {t.plans.billedMonthly}{" "}
              <span className="text-[10px] text-[#A5AD85] font-normal ms-1">
                ({lang === "ar" ? "خصم 15%" : "15% off"})
              </span>
            </button>
            <button
              onClick={() => setBillingCycle("weekly")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === "weekly"
                  ? "bg-[#344B37] text-white shadow-sm"
                  : "text-[#5A695C] hover:text-[#344B37]"
              }`}
            >
              {t.plans.billedWeekly}
            </button>
          </div>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MOCK_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            const price = billingCycle === "monthly" ? plan.pricePerMonth : plan.pricePerWeek;

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`cursor-pointer relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isSelected
                    ? "bg-white border-2 border-[#344B37] shadow-xl ring-2 ring-[#344B37]/10"
                    : "bg-white border border-[#DDD6C5]/70 shadow-[0_4px_20px_-2px_rgba(52,75,55,0.06)] hover:border-[#A5AD85]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 inset-x-0 flex justify-center">
                    <span className="bg-[#D99B63] text-white text-[11px] font-bold uppercase px-3.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge[lang]}
                    </span>
                  </div>
                )}

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#344B37]">{plan.name[lang]}</h3>
                      <p className="text-xs text-[#5A695C] mt-1">{plan.tagline[lang]}</p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "border-[#344B37] bg-[#344B37] text-white"
                          : "border-[#DDD6C5]"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  <div className="py-3 border-y border-[#DDD6C5]/50 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#344B37]">
                      {formatCurrency(price)}
                    </span>
                    <span className="text-xs text-[#7F875D]">
                      / {billingCycle === "monthly" ? t.plans.perMonth : t.plans.perWeek}
                    </span>
                  </div>

                  <div className="text-xs space-y-2">
                    <span className="font-bold text-[#344B37] block">
                      {lang === "ar" ? "المميزات:" : "Features included:"}
                    </span>
                    <ul className="space-y-2">
                      {plan.features[lang].map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#5A695C]">
                          <Check className="w-3.5 h-3.5 text-[#344B37] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DDD6C5]/40">
                  <Button
                    variant={isSelected ? "primary" : "outline"}
                    className="w-full text-xs font-bold"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlanId(plan.id);
                    }}
                  >
                    {isSelected
                      ? lang === "ar"
                        ? "الباقة المحددة حالياً"
                        : "Currently Selected"
                      : lang === "ar"
                      ? "اختر هذه الباقة"
                      : "Select This Plan"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Customization Box */}
        <div className="rounded-3xl bg-white border border-[#DDD6C5] p-6 sm:p-10 shadow-lg space-y-8">
          <div className="border-b border-[#DDD6C5]/60 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#D99B63] uppercase tracking-wider block">
                {lang === "ar" ? "تخصيص الخطة" : "Customization Details"}
              </span>
              <h2 className="text-2xl font-bold text-[#344B37]">
                {lang === "ar"
                  ? `تفاصيل اشتراك: ${selectedPlan.name[lang]}`
                  : `Configuring: ${selectedPlan.name[lang]}`}
              </h2>
            </div>

            <div className="text-end">
              <span className="text-xs text-[#5A695C] block">
                {lang === "ar" ? "الإجمالي التقديري" : "Estimated Total"}
              </span>
              <span className="text-3xl font-black text-[#344B37]">
                {formatCurrency(calculateFinalPrice())}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Days per week */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-[#344B37] block">
                {lang === "ar" ? "أيام التوصيل في الأسبوع" : "Delivery Days per Week"}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDaysPerWeek(5)}
                  className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                    daysPerWeek === 5
                      ? "border-[#344B37] bg-[#FAF8F4] ring-1 ring-[#344B37]"
                      : "border-[#DDD6C5] hover:bg-[#FAF8F4]"
                  }`}
                >
                  <span className="text-sm font-bold text-[#344B37] block">
                    {lang === "ar" ? "5 أيام (الأحد - الخميس)" : "5 Days (Sun - Thu)"}
                  </span>
                  <span className="text-xs text-[#5A695C]">
                    {lang === "ar" ? "الأكثر ملاءمة للعمل" : "Standard weekday routine"}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setDaysPerWeek(6)}
                  className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                    daysPerWeek === 6
                      ? "border-[#344B37] bg-[#FAF8F4] ring-1 ring-[#344B37]"
                      : "border-[#DDD6C5] hover:bg-[#FAF8F4]"
                  }`}
                >
                  <span className="text-sm font-bold text-[#344B37] block">
                    {lang === "ar" ? "6 أيام (شامل السبت)" : "6 Days (Inc. Saturday)"}
                  </span>
                  <span className="text-xs text-[#5A695C]">
                    {lang === "ar" ? "للرياضيين والمتفرغين" : "Active & weekend coverage"}
                  </span>
                </button>
              </div>
            </div>

            {/* Delivery Time Slot */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-[#344B37] block">
                {lang === "ar" ? "فترة التوصيل اليومي" : "Daily Delivery Time Slot"}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliverySlot("morning")}
                  className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                    deliverySlot === "morning"
                      ? "border-[#344B37] bg-[#FAF8F4] ring-1 ring-[#344B37]"
                      : "border-[#DDD6C5] hover:bg-[#FAF8F4]"
                  }`}
                >
                  <span className="text-sm font-bold text-[#344B37] block">
                    {lang === "ar" ? "صباحي (5:00 - 8:00 ص)" : "Early Morning (5-8 AM)"}
                  </span>
                  <span className="text-xs text-[#5A695C]">
                    {lang === "ar" ? "قبل الدوام والجامعة" : "Before workday starts"}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliverySlot("evening")}
                  className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                    deliverySlot === "evening"
                      ? "border-[#344B37] bg-[#FAF8F4] ring-1 ring-[#344B37]"
                      : "border-[#DDD6C5] hover:bg-[#FAF8F4]"
                  }`}
                >
                  <span className="text-sm font-bold text-[#344B37] block">
                    {lang === "ar" ? "مسائي (6:00 - 9:00 م)" : "Evening (6-9 PM)"}
                  </span>
                  <span className="text-xs text-[#5A695C]">
                    {lang === "ar" ? "جاهز لليوم التالي" : "Prepared for next day"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#DDD6C5]/50">
            <div className="flex items-center gap-2 text-xs text-[#5A695C]">
              <ShieldCheck className="w-4 h-4 text-[#344B37]" />
              <span>
                {lang === "ar"
                  ? "إلغاء أو تجميد في أي لحظة دون رسوم خفية"
                  : "Pause, reschedule or cancel anytime without cancellation fees"}
              </span>
            </div>

            <Button
              variant="warm"
              size="lg"
              onClick={() => setShowDemoModal(true)}
              className="w-full sm:w-auto gap-2 font-bold px-8 shadow-md"
            >
              <span>{lang === "ar" ? "تأكيد الاشتراك التجريبي" : "Confirm Demo Subscription"}</span>
              <ArrowIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Subscription FAQs */}
        <div className="max-w-3xl mx-auto space-y-6 pt-6">
          <div className="text-center space-y-2">
            <Badge variant="secondary">{lang === "ar" ? "الأسئلة الشائعة" : "FAQ"}</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#344B37]">
              {lang === "ar" ? "كل ما تريد معرفته عن الاشتراكات" : "Frequently Asked Questions"}
            </h2>
          </div>

          <div className="space-y-3">
            {MOCK_FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-[#DDD6C5]/70 bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-start font-bold text-[#344B37] text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-[#FAF8F4] transition-colors"
                  >
                    <span>{faq.question[lang]}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#A5AD85] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#A5AD85] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#5A695C] leading-relaxed border-t border-[#DDD6C5]/40 pt-3">
                      {faq.answer[lang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Demo Confirmation Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-[#DDD6C5] shadow-2xl space-y-5 text-center">
            <div className="w-14 h-14 rounded-full bg-[#344B37]/10 text-[#344B37] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#344B37]">
                {lang === "ar" ? "تم استلام طلبك التجريبي بنجاح!" : "Demo Order Received!"}
              </h3>
              <p className="text-xs text-[#5A695C] leading-relaxed">
                {lang === "ar"
                  ? `لقد اخترت ${selectedPlan.name[lang]} (${daysPerWeek} أيام أسبوعياً، فترة ${
                      deliverySlot === "morning" ? "صباحية" : "مسائية"
                    }). هذه واجهة تجريبية للمعاينة ولا يتم خصم أي مبالغ حالياً.`
                  : `You selected ${selectedPlan.name[lang]} (${daysPerWeek} days/wk, ${deliverySlot} slot). This is a frontend demo preview with no real payment transactions.`}
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-[#FAF8F4] border border-[#DDD6C5]/50 text-xs text-[#344B37] font-semibold">
              {lang === "ar"
                ? `القيمة: ${formatCurrency(calculateFinalPrice())}`
                : `Total: ${formatCurrency(calculateFinalPrice())}`}
            </div>

            <Button
              variant="primary"
              className="w-full justify-center"
              onClick={() => setShowDemoModal(false)}
            >
              {lang === "ar" ? "إغلاق والتصفح" : "Close & Continue Browsing"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
