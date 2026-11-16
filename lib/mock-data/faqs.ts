import { LocalizedString } from "@/types/meal";

export interface FAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  category: "delivery" | "meals" | "subscription";
}

export const MOCK_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: {
      en: "How are the meals delivered and kept fresh?",
      ar: "كيف يتم توصيل الوجبات وضمان بقائها طازجة؟",
    },
    answer: {
      en: "Our meals are prepared fresh every single morning by our culinary team. They are packed in insulated temperature-controlled cooler boxes and delivered right to your doorstep before your chosen time slot.",
      ar: "تُعد وجباتنا طازجة كل صباح في مطابخنا المعتمدة، ثم تعبأ في صناديق مبردة عازلة للحرارة وتصلك مباشرة لباب منزلك أو مكتبك قبل الموعد المحدد لاختيارك.",
    },
    category: "delivery",
  },
  {
    id: "faq-2",
    question: {
      en: "Can I pause or skip days if I am traveling?",
      ar: "هل يمكنني إيقاف الاشتراك مؤقتاً أو تخطي أيام عند السفر؟",
    },
    answer: {
      en: "Yes! You have complete freedom to pause your subscription or skip specific delivery days through your dashboard with just 24 hours prior notice. Unused days roll over automatically.",
      ar: "نعم بالتأكيد! يمكنك إيقاف اشتراكك أو تخطي أيام محددة بسهولة عبر حسابك بطلب مسبق قبل 24 ساعة، وتُحفظ أيامك المتبقية في رصيدك التلقائي.",
    },
    category: "subscription",
  },
  {
    id: "faq-3",
    question: {
      en: "Can I swap meals and exclude food allergens?",
      ar: "هل يمكنني تغيير الأطباق واستبعاد مسببات الحساسية؟",
    },
    answer: {
      en: "Absolutely. Every week you can pick your preferred dishes from our rotating seasonal menu and specify allergies or dislikes (such as dairy, seafood, nuts, or cilantro).",
      ar: "بكل تأكيد. يمكنك أسبوعياً اختيار وجباتك المفضلة من قائمتنا الدورية وتحديد أي مكونات ترغب باستبعادها كالمكسرات، الألبان، المأكولات البحرية أو غيرها.",
    },
    category: "meals",
  },
  {
    id: "faq-4",
    question: {
      en: "How do I heat and consume the meals?",
      ar: "كيف أقوم بتسخين وتناول الوجبات؟",
    },
    answer: {
      en: "Our meal containers are 100% food-grade and microwave-safe. Simply remove the outer label and heat for 90 to 120 seconds, or transfer to an oven dish for a gourmet finish.",
      ar: "علب الوجبات مصنوعة من مواد آمنة ومعتمدة 100% صالحة للميكروويف. فقط انزع الغطاء وسخّن الوجبة لمدة 90 إلى 120 ثانية لتستمتع بمذاق طازج ولذيذ.",
    },
    category: "meals",
  },
];
