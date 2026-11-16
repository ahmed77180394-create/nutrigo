"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Lock, Mail, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const { lang, dir } = useLanguage();
  const router = useRouter();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLogged(true);
    setTimeout(() => {
      router.push("/plans");
    }, 1500);
  };

  const fillDemoAccount = () => {
    setEmail("demo@nutrigo.sa");
    setPassword("nutrigo2026");
  };

  return (
    <div className="py-12 sm:py-20 flex items-center justify-center">
      <div className="w-full max-w-md px-4 sm:px-0">
        <div className="rounded-3xl bg-white border border-[#DDD6C5]/80 p-8 sm:p-10 shadow-xl space-y-6">
          {/* Brand & Title */}
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#344B37] text-white flex items-center justify-center mx-auto shadow-sm">
              <Leaf className="w-6 h-6 text-[#A5AD85]" />
            </div>
            <h1 className="text-2xl font-black text-[#344B37]">
              {lang === "ar" ? "تسجيل الدخول إلى نوتري جو" : "Welcome Back to NutriGo"}
            </h1>
            <p className="text-xs text-[#5A695C]">
              {lang === "ar"
                ? "أدخل بياناتك لإدارة خطتك وتحديد وجبات الأسبوع."
                : "Sign in to manage your meal calendar and subscription."}
            </p>
          </div>

          {/* Fictional Demo Notice */}
          <div className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-[#DDD6C5]/70 text-[11px] text-[#5A695C] space-y-1">
            <span className="font-bold text-[#344B37] block">
              {lang === "ar" ? "بيئة تجريبية محلية (Local Demo):" : "Local Demo Preview:"}
            </span>
            <p>
              {lang === "ar"
                ? "لا تتطلب هذه المرحلة اتصالاً بقواعد بيانات خارجية. يمكنك الضغط على الزر أدناه لتعبئة بيانات تجريبية."
                : "No external database required. Click the button below to auto-fill sample test credentials."}
            </p>
            <button
              type="button"
              onClick={fillDemoAccount}
              className="text-[#D99B63] hover:underline font-bold pt-1 cursor-pointer"
            >
              {lang === "ar" ? "تعبئة حساب تجريبي بنقرة واحدة" : "Auto-fill Demo Credentials"}
            </button>
          </div>

          {logged ? (
            <div className="p-6 rounded-2xl bg-[#344B37]/10 text-center space-y-2 animate-in fade-in">
              <CheckCircle2 className="w-8 h-8 text-[#344B37] mx-auto stroke-[2.5]" />
              <h4 className="text-sm font-bold text-[#344B37]">
                {lang === "ar" ? "تم تسجيل الدخول بنجاح!" : "Signed in successfully!"}
              </h4>
              <p className="text-xs text-[#5A695C]">
                {lang === "ar" ? "جاري نقلك إلى الباقات..." : "Redirecting to your meal plans..."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#344B37]">
                  {lang === "ar" ? "البريد الإلكتروني" : "Email Address"}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute start-3.5 top-1/2 -translate-y-1/2 text-[#8D9B8E]" />
                  <Input
                    required
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ps-10 rounded-xl h-11"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold text-[#344B37]">
                    {lang === "ar" ? "كلمة المرور" : "Password"}
                  </label>
                  <a href="#" className="text-[#D99B63] hover:underline">
                    {lang === "ar" ? "نسيت كلمة المرور؟" : "Forgot?"}
                  </a>
                </div>
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

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-center gap-2 font-bold shadow-md mt-2"
              >
                <span>{lang === "ar" ? "تسجيل الدخول" : "Sign In"}</span>
                <ArrowIcon className="w-4 h-4" />
              </Button>
            </form>
          )}

          <div className="pt-4 border-t border-[#DDD6C5]/60 text-center text-xs text-[#5A695C]">
            <span>
              {lang === "ar" ? "ليس لديك حساب بعد؟ " : "Don't have an account yet? "}
            </span>
            <Link href="/register" className="text-[#344B37] font-bold hover:underline">
              {lang === "ar" ? "أنشئ حسابك الجديد" : "Create Account"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
