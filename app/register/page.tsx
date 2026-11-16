"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Lock, Mail, User, Phone, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const { lang, dir } = useLanguage();
  const router = useRouter();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("weight_loss");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
    setTimeout(() => {
      router.push("/plans");
    }, 1500);
  };

  return (
    <div className="py-12 sm:py-20 flex items-center justify-center">
      <div className="w-full max-w-lg px-4 sm:px-0">
        <div className="rounded-3xl bg-white border border-[#DDD6C5]/80 p-8 sm:p-10 shadow-xl space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#344B37] text-white flex items-center justify-center mx-auto shadow-sm">
              <Leaf className="w-6 h-6 text-[#A5AD85]" />
            </div>
            <h1 className="text-2xl font-black text-[#344B37]">
              {lang === "ar" ? "ابدأ رحلتك مع نوتري جو" : "Join NutriGo Today"}
            </h1>
            <p className="text-xs text-[#5A695C]">
              {lang === "ar"
                ? "أنشئ حسابك لبناء خطة تغذية دقيقة تناسب روتينك اليومي."
                : "Create your account to design a precision nutrition plan tailored to your lifestyle."}
            </p>
          </div>

          {registered ? (
            <div className="p-6 rounded-2xl bg-[#344B37]/10 text-center space-y-2 animate-in fade-in">
              <CheckCircle2 className="w-8 h-8 text-[#344B37] mx-auto stroke-[2.5]" />
              <h4 className="text-sm font-bold text-[#344B37]">
                {lang === "ar" ? "تم إنشاء الحساب بنجاح!" : "Account created successfully!"}
              </h4>
              <p className="text-xs text-[#5A695C]">
                {lang === "ar" ? "جاري تحويلك لاختيار الباقة..." : "Redirecting you to customize your plan..."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#344B37]">
                    {lang === "ar" ? "الاسم الكامل *" : "Full Name *"}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute start-3.5 top-1/2 -translate-y-1/2 text-[#8D9B8E]" />
                    <Input
                      required
                      type="text"
                      placeholder={lang === "ar" ? "سلطان العلي" : "Jordan Vance"}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="ps-10 rounded-xl h-11"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#344B37]">
                    {lang === "ar" ? "رقم الجوال *" : "Phone Number *"}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute start-3.5 top-1/2 -translate-y-1/2 text-[#8D9B8E]" />
                    <Input
                      required
                      type="tel"
                      placeholder="+966 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="ps-10 rounded-xl h-11"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#344B37]">
                  {lang === "ar" ? "البريد الإلكتروني *" : "Email Address *"}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute start-3.5 top-1/2 -translate-y-1/2 text-[#8D9B8E]" />
                  <Input
                    required
                    type="email"
                    placeholder="user@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ps-10 rounded-xl h-11"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#344B37]">
                  {lang === "ar" ? "هدفك الصحي الأساسي *" : "Primary Health Goal *"}
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full h-11 rounded-xl border border-[#DDD6C5] bg-white px-3 text-xs text-[#1E2B20] focus:outline-none focus:ring-2 focus:ring-[#344B37]"
                >
                  <option value="weight_loss">
                    {lang === "ar" ? "خسارة الوزن وحرق الدهون" : "Lose Weight (Calorie Deficit)"}
                  </option>
                  <option value="muscle_gain">
                    {lang === "ar" ? "بناء العضلات والكتلة الصافية" : "Build Muscle (High Protein)"}
                  </option>
                  <option value="maintain">
                    {lang === "ar" ? "تثبيت الوزن وتوازن الطاقة" : "Maintain Weight (Balanced)"}
                  </option>
                  <option value="healthy_eating">
                    {lang === "ar" ? "أكل صحي عضوي عام" : "Clean Healthy Eating"}
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#344B37]">
                  {lang === "ar" ? "كلمة المرور *" : "Password *"}
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute start-3.5 top-1/2 -translate-y-1/2 text-[#8D9B8E]" />
                  <Input
                    required
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="ps-10 rounded-xl h-11"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center gap-2 font-bold shadow-md"
                >
                  <span>{lang === "ar" ? "إنشاء الحساب ومتابعة الاختيار" : "Create Account & Continue"}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Button>
              </div>
            </form>
          )}

          <div className="pt-4 border-t border-[#DDD6C5]/60 text-center text-xs text-[#5A695C]">
            <span>
              {lang === "ar" ? "لديك حساب بالفعل؟ " : "Already have an account? "}
            </span>
            <Link href="/login" className="text-[#344B37] font-bold hover:underline">
              {lang === "ar" ? "تسجيل الدخول" : "Sign In"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
