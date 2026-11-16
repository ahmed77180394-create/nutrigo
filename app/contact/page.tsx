"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "subscription",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const deliveryCities = [
    { en: "Riyadh", ar: "الرياض" },
    { en: "Jeddah", ar: "جدة" },
    { en: "Khobar", ar: "الخبر" },
    { en: "Dammam", ar: "الدمام" },
    { en: "Mecca", ar: "مكة المكرمة" },
    { en: "Medina", ar: "المدينة المنورة" },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="warm" className="px-3 py-1 text-xs">
            {lang === "ar" ? "نحن هنا لمساعدتك" : "Here to Help"}
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-[#344B37] tracking-tight">
            {lang === "ar" ? "تواصل مع فريق نوتري جو" : "Get in Touch With NutriGo"}
          </h1>
          <p className="text-sm sm:text-base text-[#5A695C] leading-relaxed">
            {lang === "ar"
              ? "لديك استفسار عن خطط الوجبات، الاستشارات الغذائية، أو اشتراكات الشركات؟ يسعدنا دائماً الاستماع إليك."
              : "Have questions about meal plans, nutritional consultations, or enterprise wellness? We'd love to hear from you."}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#344B37] text-white p-8 sm:p-10 shadow-xl space-y-8">
              <div>
                <h3 className="text-2xl font-black text-white">
                  {lang === "ar" ? "معلومات التواصل المباشر" : "Direct Contact Info"}
                </h3>
                <p className="text-xs text-[#CAD0B3] mt-2 leading-relaxed">
                  {lang === "ar"
                    ? "فريق خدمة العملاء وأخصائيو التغذية متاحون يومياً للإجابة على جميع تساؤلاتك."
                    : "Our support and nutritionist advisors are available 7 days a week to support you."}
                </p>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#D99B63]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#CAD0B3] block font-semibold uppercase">
                      {lang === "ar" ? "المقر الرئيسي" : "Headquarters"}
                    </span>
                    <span className="font-medium text-white">
                      {lang === "ar"
                        ? "طريق الملك فهد، العليا، الرياض، المملكة العربية السعودية"
                        : "King Fahd Road, Olaya District, Riyadh, Saudi Arabia"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#D99B63]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#CAD0B3] block font-semibold uppercase">
                      {lang === "ar" ? "الرقم المجاني الموحد" : "Toll-Free Phone"}
                    </span>
                    <span className="font-bold text-white text-base" dir="ltr">
                      +966 800 124 9900
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#D99B63]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#CAD0B3] block font-semibold uppercase">
                      {lang === "ar" ? "البريد الإلكتروني" : "Support Email"}
                    </span>
                    <span className="font-medium text-white">care@nutrigo.sa</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#D99B63]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#CAD0B3] block font-semibold uppercase">
                      {lang === "ar" ? "أوقات العمل والتوصيل" : "Operating Hours"}
                    </span>
                    <span className="font-medium text-white">
                      {lang === "ar"
                        ? "يومياً من 5:00 صباحاً حتى 11:00 مساءً"
                        : "Daily from 5:00 AM to 11:00 PM"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Cities Coverage Card */}
            <div className="rounded-3xl bg-white border border-[#DDD6C5]/80 p-6 space-y-3">
              <h4 className="text-sm font-bold text-[#344B37] uppercase tracking-wider">
                {lang === "ar" ? "مناطق التوصيل المغطاة حالياً" : "Active Delivery Zones"}
              </h4>
              <p className="text-xs text-[#5A695C]">
                {lang === "ar"
                  ? "نوفر أسطول توصيل مبرد يومياً في المدن التالية:"
                  : "Dedicated cold-chain insulated vans delivering daily across:"}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {deliveryCities.map((city, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#FAF8F4] border border-[#DDD6C5]/70 text-xs font-semibold text-[#344B37]"
                  >
                    {city[lang]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[#DDD6C5]/80 p-8 sm:p-10 shadow-lg space-y-6">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#344B37]/10 text-[#344B37] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#344B37]">
                    {lang === "ar" ? "تم إرسال رسالتك بنجاح!" : "Message Sent Successfully!"}
                  </h3>
                  <p className="text-sm text-[#5A695C] max-w-md mx-auto">
                    {lang === "ar"
                      ? "شكراً لتواصلك معنا. سيقوم أحد مستشارينا بالتواصل معك في أقرب وقت خلال ساعات العمل."
                      : "Thank you for reaching out. One of our nutrition coordinators will respond to your inquiry shortly."}
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    {lang === "ar" ? "إرسال رسالة أخرى" : "Send Another Message"}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#344B37]">
                      {lang === "ar" ? "أرسل لنا استفسارك" : "Send Us a Message"}
                    </h3>
                    <p className="text-xs text-[#5A695C]">
                      {lang === "ar"
                        ? "املأ النموذج التالي وسيقوم فريقنا بالتواصل معك."
                        : "Fill out the fields below and our team will get back to you within 24 hours."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#344B37]">
                        {lang === "ar" ? "الاسم الكامل *" : "Full Name *"}
                      </label>
                      <Input
                        required
                        type="text"
                        placeholder={lang === "ar" ? "محمد العبدالله" : "Alex Johnson"}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-xl h-11"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#344B37]">
                        {lang === "ar" ? "البريد الإلكتروني *" : "Email Address *"}
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-xl h-11"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#344B37]">
                        {lang === "ar" ? "رقم الجوال *" : "Phone Number *"}
                      </label>
                      <Input
                        required
                        type="tel"
                        placeholder="+966 50 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded-xl h-11"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#344B37]">
                        {lang === "ar" ? "موضوع الاستفسار" : "Subject"}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full h-11 rounded-xl border border-[#DDD6C5] bg-white px-3 text-xs text-[#1E2B20] focus:outline-none focus:ring-2 focus:ring-[#344B37]"
                      >
                        <option value="subscription">
                          {lang === "ar" ? "استفسار عن باقات الاشتراك" : "Subscription Plans"}
                        </option>
                        <option value="nutrition">
                          {lang === "ar" ? "استشارة أخصائي تغذية" : "Nutritionist Advice"}
                        </option>
                        <option value="delivery">
                          {lang === "ar" ? "مواعيد وتغطية التوصيل" : "Delivery Coverage"}
                        </option>
                        <option value="corporate">
                          {lang === "ar" ? "اشتراكات الشركات والجهات" : "Corporate & Group Wellness"}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#344B37]">
                      {lang === "ar" ? "نص الرسالة *" : "Your Message *"}
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={
                        lang === "ar"
                          ? "اكتب تفاصيل استفسارك أو طلبك هنا..."
                          : "Describe your questions, custom dietary goals, or requests..."
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-2xl border border-[#DDD6C5] bg-white p-4 text-xs text-[#1E2B20] placeholder:text-[#8D9B8E] focus:outline-none focus:ring-2 focus:ring-[#344B37]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center gap-2 font-bold shadow-md"
                  >
                    <span>{lang === "ar" ? "إرسال الرسالة الآن" : "Submit Inquiry"}</span>
                    <Send className="w-4 h-4 rtl:rotate-180" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
