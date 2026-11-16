export type Language = "en" | "ar";
export type Direction = "ltr" | "rtl";

export const DICTIONARIES = {
  en: {
    // Navigation
    nav: {
      brand: "NutriGo",
      home: "Home",
      meals: "Meals",
      plans: "Plans",
      about: "About",
      contact: "Contact",
      login: "Login",
      register: "Register",
      getStarted: "Get Started",
      myAccount: "My Account",
      cart: "Cart",
    },
    // Hero
    hero: {
      badge: "Chef-Prepared & Nutritionist-Crafted",
      titleStart: "Healthy Eating,",
      titleHighlight: "Effortlessly Delivered",
      titleEnd: "to Your Doorstep.",
      description:
        "Premium, macro-balanced meals prepared fresh every morning by five-star chefs. Hit your fitness and wellness goals with zero cooking, zero grocery shopping, and zero guilt.",
      exploreMeals: "Explore Meals",
      viewPlans: "View Plans",
      statMealsDelivered: "500K+ Meals Delivered",
      statSatisfaction: "4.9/5 Rating",
      statFreshGuarantee: "100% Fresh Guaranteed",
      heroImageAlt: "Gourmet healthy food bowl with salmon, avocado and greens",
    },
    // Health Goals
    goals: {
      sectionBadge: "Tailored to You",
      title: "What is Your Health Goal?",
      subtitle:
        "Every meal plan is calibrated by certified nutritionists to match your exact caloric and macronutrient requirements.",
      weightLoss: {
        title: "Lose Weight",
        description: "High protein, portion-controlled meals designed for steady, sustainable fat loss without hunger.",
        badge: "Calorie Deficit",
      },
      buildMuscle: {
        title: "Build Muscle",
        description: "Lean meats, wholesome carbs, and 45g+ protein per meal to power hypertrophy and quick recovery.",
        badge: "High Protein",
      },
      maintainWeight: {
        title: "Maintain Weight",
        description: "Perfect micronutrient balance and wholesome energy to keep your metabolism performing at peak.",
        badge: "Balanced Macros",
      },
      eatHealthy: {
        title: "Eat Healthy",
        description: "Clean whole foods, organic produce, and heart-healthy oils for vitality and sustained daily focus.",
        badge: "Clean Nutrition",
      },
    },
    // Featured Meals
    featuredMeals: {
      sectionBadge: "Chef's Selection",
      title: "Featured Weekly Meals",
      subtitle: "Handpicked dishes from this week's rotating menu, cooked with premium fresh ingredients.",
      viewAllMeals: "View Full Menu",
      calories: "kcal",
      protein: "Protein",
      carbs: "Carbs",
      fat: "Fat",
      currency: "SAR",
      viewDetails: "View Details",
      orderMeal: "Select Meal",
    },
    // How It Works
    howItWorks: {
      sectionBadge: "Simple 3-Step Process",
      title: "How NutriGo Works",
      subtitle: "We turn wholesome, chef-grade nutrition into a seamless, enjoyable daily habit.",
      step1: {
        number: "01",
        title: "Choose Your Goal",
        description: "Tell us your lifestyle, fitness objective, calorie preference, and any ingredient allergies.",
      },
      step2: {
        number: "02",
        title: "Select Your Meals",
        description: "Customize your weekly menu from 40+ seasonal recipes or let our nutritionist automate it.",
      },
      step3: {
        number: "03",
        title: "Enjoy Healthy Eating",
        description: "Receive your temperature-controlled meals fresh daily. Heat for 2 minutes and savor.",
      },
    },
    // Subscription Plans
    plans: {
      sectionBadge: "Flexible Subscriptions",
      title: "Plans Built Around Your Routine",
      subtitle: "No lock-in contracts. Pause, skip, or modify your meals at any time with one click.",
      billedMonthly: "Billed Monthly",
      billedWeekly: "Billed Weekly",
      perDay: "day",
      perWeek: "week",
      perMonth: "month",
      popularBadge: "Most Popular",
      choosePlan: "Subscribe to Plan",
      customQuestions: "Need a custom enterprise or family plan?",
      talkToNutritionist: "Speak with a Nutritionist",
    },
    // Why NutriGo
    whyNutriGo: {
      sectionBadge: "The NutriGo Standard",
      title: "Why Healthy Eaters Choose NutriGo",
      subtitle: "We believe nutritious food should never taste like a compromise.",
      feature1: {
        title: "100% Fresh Daily Ingredients",
        description: "Never frozen. We source crisp local greens, wild seafood, and farm-raised hormone-free meats.",
      },
      feature2: {
        title: "Macro-Precision Nutrition",
        description: "Every sauce, gram of grain, and protein portion is strictly weighed and lab-verified.",
      },
      feature3: {
        title: "Insulated Chilled Delivery",
        description: "Delivered in eco-friendly insulated cooler packaging straight to your doorstep before 7:00 AM.",
      },
      feature4: {
        title: "Complete Flexibility",
        description: "Traveling this weekend? Skip, pause, or switch your delivery address with 24 hours notice.",
      },
    },
    // Testimonials
    testimonials: {
      sectionBadge: "Real Experiences",
      title: "Loved by 15,000+ Busy People",
      subtitle: "See how NutriGo transformed the daily lives and fitness journeys of our subscribers.",
      verifiedCustomer: "Verified Subscriber",
    },
    // Final CTA
    finalCta: {
      badge: "Start Your Transformation",
      title: "Fuel Your Best Self Every Single Day",
      description: "Join thousands of members enjoying effortless, chef-prepared healthy meals. Get your first box delivered tomorrow.",
      getStartedBtn: "Get Started Now",
      exploreMenuBtn: "Explore Weekly Menu",
      noCommitment: "Pause or cancel anytime • Free insulated delivery • 100% satisfaction guarantee",
    },
    // Footer
    footer: {
      tagline: "Premium healthy food subscription. Nourishing bodies, elevating standards.",
      quickLinks: "Quick Links",
      company: "Company",
      legal: "Legal",
      contactUs: "Contact Us",
      newsletterTitle: "Subscribe to Wellness",
      newsletterDesc: "Get weekly nutrition advice, chef recipes, and exclusive seasonal subscriber discounts.",
      emailPlaceholder: "Enter your email address",
      subscribeBtn: "Subscribe",
      copyright: "© 2026 NutriGo Health Technologies. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      refundPolicy: "Refund Policy",
      nutritionalDisclaimer: "Nutritional Disclaimer",
    },
    // Common & Page Specific
    common: {
      loading: "Loading...",
      back: "Back",
      all: "All",
      filterByGoal: "Filter by Goal",
      filterByDiet: "Filter by Diet",
      searchMealsPlaceholder: "Search meals by name or ingredients...",
      noMealsFound: "No meals match your criteria. Try adjusting your filters.",
      ingredients: "Key Ingredients",
      allergens: "Allergen Information",
      nutritionalFacts: "Nutritional Facts",
      prepInstructions: "Serving Instructions",
      prepNote: "Container is microwave-friendly. Heat for 90-120 seconds or enjoy chilled according to instructions.",
      reviews: "reviews",
      sar: "SAR",
      fictionalNotice: "Demo interface: No real payments or database operations are executed.",
      loginPrompt: "Sign in to manage your meal subscription and schedule deliveries.",
      registerPrompt: "Create your NutriGo account to customize your first healthy meal plan.",
    },
  },
  ar: {
    // Navigation
    nav: {
      brand: "نوتري جو",
      home: "الرئيسية",
      meals: "الوجبات",
      plans: "باقات الاشتراك",
      about: "من نحن",
      contact: "اتصل بنا",
      login: "تسجيل الدخول",
      register: "إنشاء حساب",
      getStarted: "ابدأ الآن",
      myAccount: "حسابي",
      cart: "السلة",
    },
    // Hero
    hero: {
      badge: "بإشراف كبار الطهاة وأخصائيي التغذية",
      titleStart: "أكل صحي فاخر،",
      titleHighlight: "يصلك طازجاً يومياً",
      titleEnd: "حتى باب بيتك.",
      description:
        "وجبات يومية متوازنة محسوبة الماكروز بدقة ومحضرة كل صباح بأيدي أمهر الطهاة. حقق أهدافك البدنية والصحية دون عناء الطبخ، التسوق أو القلق من السعرات.",
      exploreMeals: "استكشف الوجبات",
      viewPlans: "استعرض الباقات",
      statMealsDelivered: "أكثر من 500,000 وجبة",
      statSatisfaction: "تقييم 4.9/5",
      statFreshGuarantee: "طازج 100% يومياً",
      heroImageAlt: "طبق طعام صحي فاخر بالسلمون والأفوكادو والخضار",
    },
    // Health Goals
    goals: {
      sectionBadge: "مصمم خصيصاً لأجلك",
      title: "ما هو هدفك الصحي؟",
      subtitle: "كل باقة وجبات تتم معايرتها بعناية فائقة لتلائم احتياجات جسمك اليومية من السعرات والماكروز بدقة تامة.",
      weightLoss: {
        title: "خسارة الوزن",
        description: "وجبات غنية بالبروتين ومحددة الحصص لتحفيز حرق الدهون بصورة مستدامة دون جوع أو إرهاق.",
        badge: "عجز سعرات مدروس",
      },
      buildMuscle: {
        title: "بناء العضلات",
        description: "بروتينات نقية وكاربوهيدرات معقدة بتركيز يفوق 45 جم بروتين لكل وجبة لتعزيز البناء والاستشفاء.",
        badge: "بروتين عالي",
      },
      maintainWeight: {
        title: "المحافظة على الوزن",
        description: "توازن غذائي متكامل وعناصر حيوية تحافظ على لياقتك ونشاطك الذهني والبدني على مدار اليوم.",
        badge: "ماكروز متوازنة",
      },
      eatHealthy: {
        title: "أكل صحي متوازن",
        description: "مكونات طبيعية كاملة، خضار عضوية وزيوت صحية للقلب لنضارة وصحة عامة وطاقة متجددة.",
        badge: "تغذية نقية",
      },
    },
    // Featured Meals
    featuredMeals: {
      sectionBadge: "مختارات الشيف",
      title: "أبرز وجبات هذا الأسبوع",
      subtitle: "أطباق مختارة بعناية من قائمتنا المتجددة، مطبوخة يومياً بمكونات طازجة عالية الجودة.",
      viewAllMeals: "استعراض كامل القائمة",
      calories: "سعرة",
      protein: "بروتين",
      carbs: "كارب",
      fat: "دهون",
      currency: "ر.س",
      viewDetails: "تفاصيل الوجبة",
      orderMeal: "اختيار الوجبة",
    },
    // How It Works
    howItWorks: {
      sectionBadge: "3 خطوات بسيطة",
      title: "كيف يعمل نوتري جو؟",
      subtitle: "نحول الأكل الصحي الفاخر إلى أسلوب حياة ممتع ويومي دون أي تعقيد.",
      step1: {
        number: "01",
        title: "اختر هدفك الصحي",
        description: "حدد هدفك البدني، كمية السعرات المطلوبة، ومسببات الحساسية أو التفضيلات الغذائية.",
      },
      step2: {
        number: "02",
        title: "حدد وجباتك المفضلة",
        description: "اختر وجباتك من بين أكثر من 40 طبقاً موسمياً متجدداً، أو دع خبير التغذية يحددها لك تلقائياً.",
      },
      step3: {
        number: "03",
        title: "استمتع بأكل صحي ولذيذ",
        description: "تصلك وجباتك مبردة وطازجة يومياً قبل الموعد المحدد. سخّنها لدقيقتين واستمتع بالطعم الفاخر.",
      },
    },
    // Subscription Plans
    plans: {
      sectionBadge: "اشتراكات مرنة",
      title: "باقات مصممة لتناسب روتينك",
      subtitle: "بدون أي التزام طويل الأمد. أوقف، تخطّ أو عدّل وجباتك في أي وقت بضغطة زر واحدة.",
      billedMonthly: "اشتراك شهري",
      billedWeekly: "اشتراك أسبوعي",
      perDay: "يومياً",
      perWeek: "أسبوعياً",
      perMonth: "شهرياً",
      popularBadge: "الأكثر طلباً",
      choosePlan: "اشترك في الباقة",
      customQuestions: "تبحث عن باقة مخصصة للشركات أو العائلات؟",
      talkToNutritionist: "تحدث مع أخصائي التغذية",
    },
    // Why NutriGo
    whyNutriGo: {
      sectionBadge: "معايير نوتري جو",
      title: "لماذا يختار الرياضيون نوتري جو؟",
      subtitle: "نؤمن أن الطعام الصحي يجب ألا يكون تضحية بالمذاق أو الجودة.",
      feature1: {
        title: "مكونات طازجة 100% يومياً",
        description: "لا نستخدم أطعمة مجمدة نهائياً. نعتمد على لحوم محلية طازجة، أسماك برية، وخضار مقطوفة يومياً.",
      },
      feature2: {
        title: "دقة متناهية في الماكروز",
        description: "كل طبق، صلصة، وجرام كربوهيدرات يتم وزنه بدقة مخبرية لنضمن وصولك لأهدافك بلا تخمين.",
      },
      feature3: {
        title: "توصيل مبرد ومحكم",
        description: "تصلك الوجبات في حقائب عازلة ومبردة صديقة للبيئة إلى باب بيتك أو مكتبك في الصباح الباكر.",
      },
      feature4: {
        title: "مرونة كاملة وتحكم تام",
        description: "مسافر في عطلة نهاية الأسبوع؟ يمكنك تجميد الاشتراك أو تغيير العنوان بكل بساطة بطلب مسبق.",
      },
    },
    // Testimonials
    testimonials: {
      sectionBadge: "تجارب حقيقية",
      title: "يثق بنا أكثر من 15,000 مشترك",
      subtitle: "تعرف على كيفية مساهمة نوتري جو في تحسين روتين وتغذية مشتركينا يومياً.",
      verifiedCustomer: "مشترك موثق",
    },
    // Final CTA
    finalCta: {
      badge: "ابدأ تحولك الصحي",
      title: "ارتقِ بصحتك وطاقتك كل يوم",
      description: "انضم لآلاف المشتركين الذين يتمتعون بطعام شيفات صحي ولذيذ بدون أي عناء. صندوقك الأول يصلك غداً.",
      getStartedBtn: "اشترك الآن",
      exploreMenuBtn: "استعرض قائمة الأسبوع",
      noCommitment: "إيقاف أو إلغاء في أي وقت • توصيل مبرد مجاني • ضمان الرضا التام 100%",
    },
    // Footer
    footer: {
      tagline: "منصة اشتراكات الطعام الصحي الفاخر. نغذي الأجسام، ونرتقي بالمعايير.",
      quickLinks: "روابط سريعة",
      company: "الشركة",
      legal: "الشروط والسياسات",
      contactUs: "تواصل معنا",
      newsletterTitle: "اشترك في النشرة الصحية",
      newsletterDesc: "احصل على نصائح غذائية أسبوعية، وصفات مبتكرة، وخصومات حصرية للمشتركين.",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      subscribeBtn: "اشتراك",
      copyright: "© 2026 نوتري جو لحلول التغذية الصحية. جميع الحقوق محفوظة.",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "الشروط والأحكام",
      refundPolicy: "سياسة الاسترجاع",
      nutritionalDisclaimer: "إخلاء المسؤولية الغذائي",
    },
    // Common & Page Specific
    common: {
      loading: "جاري التحميل...",
      back: "الرجوع",
      all: "الكل",
      filterByGoal: "تصفية حسب الهدف",
      filterByDiet: "تصفية حسب النظام",
      searchMealsPlaceholder: "ابحث عن وجبة بالاسم أو المكونات...",
      noMealsFound: "لم نجد وجبات تطابق بحثك. جرب تغيير خيارات التصفية.",
      ingredients: "المكونات الأساسية",
      allergens: "مسببات الحساسية",
      nutritionalFacts: "القيم الغذائية (الماكروز)",
      prepInstructions: "طريقة التقديم والتسخين",
      prepNote: "العلبة آمنة للاستخدام في الميكروويف. سخنها لمدة 90 إلى 120 ثانية أو تناولها باردة حسب الإرشادات.",
      reviews: "تقييم",
      sar: "ر.س",
      fictionalNotice: "واجهة تجريبية للعرض: لا يتم تنفيذ عمليات دفع أو قواعد بيانات فعلية.",
      loginPrompt: "سجل الدخول لإدارة وجباتك، جدول التوصيل، وتفاصيل باقتك.",
      registerPrompt: "أنشئ حسابك في نوتري جو لتخصيص خطتك الغذائية الصحية الأولى.",
    },
  },
};
