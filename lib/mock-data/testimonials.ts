import { LocalizedString } from "@/types/meal";

export interface Testimonial {
  id: string;
  name: LocalizedString;
  role: LocalizedString;
  location: LocalizedString;
  avatar: string;
  rating: number;
  quote: LocalizedString;
  planName: LocalizedString;
  result: LocalizedString;
}

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: {
      en: "Faisal Al-Otaibi",
      ar: "فيصل العتيبي",
    },
    role: {
      en: "Fintech Product Manager",
      ar: "مدير منتجات مالية",
    },
    location: {
      en: "Riyadh, Saudi Arabia",
      ar: "الرياض، المملكة العربية السعودية",
    },
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    quote: {
      en: "NutriGo completely removed the stress of cooking and meal prepping during intense launch weeks. The food tastes like a high-end restaurant, not diet food.",
      ar: "نوتري جو أزاح عني تماماً عبء الطبخ والتفكير في الوجبات خلال فترات ضغط العمل. الطعم راقٍ جداً كأنه طبق من مطعم فاخر وليس طعام دايت تقليدي.",
    },
    planName: {
      en: "Balanced Plan",
      ar: "الباقة المتوازنة",
    },
    result: {
      en: "Lost 6 kg in 8 weeks with zero cravings",
      ar: "خسارة 6 كجم في 8 أسابيع دون حرمان",
    },
  },
  {
    id: "test-2",
    name: {
      en: "Sarah Al-Mansoor",
      ar: "سارة المنصور",
    },
    role: {
      en: "Architect & Marathon Runner",
      ar: "مهندسة معمارية وعداءة ماراثون",
    },
    location: {
      en: "Jeddah, Saudi Arabia",
      ar: "جدة، المملكة العربية السعودية",
    },
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    quote: {
      en: "As an endurance runner, precision matters. Knowing my protein and complex carb breakdown to the gram has elevated my energy and recovery noticeably.",
      ar: "كممارسة لرياضة الجري والتحمل، دقة الماكروز تفرق معي جداً. حساب البروتين والكارب بالجرام حسّن من طاقتي وسرعة استشفائي العضلي بشكل ملحوظ.",
    },
    planName: {
      en: "Complete Athlete",
      ar: "الباقة الشاملة",
    },
    result: {
      en: "Maintained lean muscle & PR recovery time",
      ar: "المحافظة على الكتلة العضلية وتحسين وقت الاستشفاء",
    },
  },
  {
    id: "test-3",
    name: {
      en: "Dr. Khalid Benhamida",
      ar: "د. خالد بن حميدة",
    },
    role: {
      en: "Cardiologist & Health Advocate",
      ar: "طبيب قلب ومهتم بنمط الحياة الصحي",
    },
    location: {
      en: "Khobar, Saudi Arabia",
      ar: "الخبر، المملكة العربية السعودية",
    },
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    quote: {
      en: "I frequently recommend NutriGo to patients seeking clean, low-sodium, nutrient-dense nutrition. The ingredients and olive oils used are truly uncompromising.",
      ar: "أنصح دائماً بوجبات نوتري جو لمراجعي عيادتي الراغبين بنظام غذائي نقي متوازن قليل الصوديوم. جودة الزيوت والمكونات المستخدمة تدل على احترافية استثنائية.",
    },
    planName: {
      en: "Starter Plan",
      ar: "الباقة الأساسية",
    },
    result: {
      en: "Normalized lipid profile & sustained energy",
      ar: "تحسن مؤشرات الدم الحيوية ومستوى نشاط يومي ممتاز",
    },
  },
];
