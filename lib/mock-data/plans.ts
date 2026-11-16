import { SubscriptionPlan } from "@/types/plan";

export const MOCK_PLANS: SubscriptionPlan[] = [
  {
    id: "plan-starter",
    slug: "starter",
    name: {
      en: "Starter Plan",
      ar: "الباقة الأساسية (Starter)",
    },
    tagline: {
      en: "Perfect for busy professionals who want lunch or dinner sorted effortlessly.",
      ar: "الخيار المثالي لمن يرغب في حسم وجبة رئيسية يومية صحية بكل سهولة وسرعة.",
    },
    description: {
      en: "1 Chef-crafted fresh meal per day with flexible scheduling and macro-balanced recipes.",
      ar: "وجبة واحدة يومياً محضرة طازجة بأعلى معايير الجودة ومحسوبة السعرات والماكروز بدقة.",
    },
    pricePerDay: 42,
    pricePerWeek: 210, // 5 days
    pricePerMonth: 840,
    mealsPerDay: 1,
    snacksPerDay: 0,
    deliveryDays: 5,
    popular: false,
    recommendedFor: {
      en: "Workplace lunches, healthy dinners, or beginner healthy eaters",
      ar: "وجبات العمل، أو عشاء صحي خفيف، أو لمن يبدأ رحلة الأكل الصحي",
    },
    features: {
      en: [
        "1 Fresh gourmet meal daily (Lunch or Dinner)",
        "5 or 6 delivery days per week",
        "Full macronutrient & calorie control",
        "Free morning or evening delivery slot",
        "Pause or skip days anytime with 24h notice",
        "Eco-friendly insulated packaging",
      ],
      ar: [
        "وجبة رئيسية طازجة يومياً (غداء أو عشاء)",
        "توصيل 5 أو 6 أيام في الأسبوع حسب اختيارك",
        "تحكم كامل في السعرات والماكروز",
        "توصيل مجاني في الموعد الصباحي أو المسائي",
        "إمكانية إيقاف أو تعديل الأيام بسهولة قبل 24 ساعة",
        "تغليف صديق للبيئة ومبرد يحافظ على الجودة",
      ],
    },
    badge: {
      en: "Essential",
      ar: "الأنسب للبداية",
    },
  },
  {
    id: "plan-balanced",
    slug: "balanced",
    name: {
      en: "Balanced Plan",
      ar: "الباقة المتوازنة (Balanced)",
    },
    tagline: {
      en: "Our most popular package for steady lifestyle transformation and sustained energy.",
      ar: "باقتنا الأكثر طلباً لتحقيق توازن يومي متكامل وطاقة مستدامة طوال اليوم.",
    },
    description: {
      en: "2 Complete meals per day (Lunch + Dinner) plus 1 nutritionist-approved snack.",
      ar: "وجبتان رئيسيتان متكاملتان (غداء + عشاء) بالإضافة إلى سناك صحي معتمد من أخصائي التغذية.",
    },
    pricePerDay: 74,
    pricePerWeek: 370,
    pricePerMonth: 1480,
    mealsPerDay: 2,
    snacksPerDay: 1,
    deliveryDays: 5,
    popular: true,
    recommendedFor: {
      en: "Weight management, busy couples, and active lifestyle individuals",
      ar: "خسارة أو تثبيت الوزن، الموظفين ورواد الأعمال وأصحاب نمط الحياة النشط",
    },
    features: {
      en: [
        "2 Chef meals daily (Lunch + Dinner)",
        "1 Healthy protein snack or fresh juice included",
        "Personalized calorie range (1,200 - 2,400 kcal)",
        "Free daily doorstep delivery",
        "Direct chat support with our clinical nutritionist",
        "Custom allergen exclusion guarantee",
        "Full meal swapping flexibility weekly",
      ],
      ar: [
        "وجبتان رئيسيتان يومياً (غداء + عشاء)",
        "سناك بروتين صحي أو عصير طازج يومياً",
        "تحديد السعرات حسب هدفك (من 1,200 إلى 2,400 سعرة)",
        "توصيل مجاني يومي حتى باب بيتك",
        "استشارة ومتابعة عبر المحادثة مع أخصائي تغذية",
        "استبعاد المكونات ومسببات الحساسية حسب رغبتك",
        "حرية استبدال واختيار الوجبات أسبوعياً",
      ],
    },
    badge: {
      en: "Most Popular",
      ar: "الأكثر طلباً",
    },
  },
  {
    id: "plan-complete",
    slug: "complete",
    name: {
      en: "Complete Athlete & Performance Plan",
      ar: "الباقة الشاملة (Complete)",
    },
    tagline: {
      en: "Total culinary freedom with 100% of your daily nutrition prepared and delivered.",
      ar: "تغطية غذائية متكاملة 100% لجميع وجباتك اليومية من الصباح حتى المساء.",
    },
    description: {
      en: "3 Full meals (Breakfast, Lunch, Dinner) plus 2 functional snacks tailored to your macros.",
      ar: "3 وجبات رئيسية يومياً (إفطار، غداء، عشاء) بالإضافة إلى سناكين وظيفيين محسوبة الماكروز بالجرام.",
    },
    pricePerDay: 98,
    pricePerWeek: 490,
    pricePerMonth: 1960,
    mealsPerDay: 3,
    snacksPerDay: 2,
    deliveryDays: 6,
    popular: false,
    recommendedFor: {
      en: "Athletes, bodybuilding, high-performance professionals, and zero-cooking lifestyle",
      ar: "الرياضيين، بناء العضلات، ومن يرغب بالتفرغ التام بدون تسوق أو طبخ",
    },
    features: {
      en: [
        "3 Full meals (Breakfast, Lunch & Dinner)",
        "2 Functional snacks (Protein bars, Chia pots, Shakes)",
        "Ultra-precise macro targets (Protein up to 180g+)",
        "Dedicated VIP nutritionist consultation monthly",
        "Priority morning express delivery",
        "Weekly body composition progress tracking",
        "Unlimited meal customization without fees",
      ],
      ar: [
        "3 وجبات رئيسية (فطور، غداء، عشاء)",
        "سناكان يومياً (ألواح بروتين، بودنغ الشيا، سموذي)",
        "دقة متناهية في حساب البروتين والماكروز (حتى 180 جم+)",
        "جلسة استشارة شهرية مخصصة مع كبير أخصائيي التغذية",
        "أولوية التوصيل السريع في الصباح الباكر",
        "متابعة شهرية لتطور القياسات ونسبة الدهون",
        "تخصيص كامل ومفتوح للأطباق دون أي رسوم إضافية",
      ],
    },
    badge: {
      en: "Ultimate Results",
      ar: "النتائج القصوى",
    },
  },
];
