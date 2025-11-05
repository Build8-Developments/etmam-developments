export interface BlogPost {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  excerpt: {
    ar: string;
    en: string;
  };
  content: {
    ar: string;
    en: string;
  };
  image: string;
  category: string;
  author: {
    ar: string;
    en: string;
  };
  authorImage?: string;
  date: string;
  readTime: {
    ar: string;
    en: string;
  };
  comments: number;
  featured: boolean;
  tags: {
    ar: string[];
    en: string[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "national-day-95",
    title: {
      ar: "عزنا بطبعنا - اليوم الوطني السعودي 95",
      en: "Our Pride by Nature - Saudi National Day 95",
    },
    excerpt: {
      ar: "وهي تبدو غير منطقية أو مركبة من كلمات عشوائية. يقدم هذا المقال نظرة عامة حول الموضوع ويشرح أهم النقاط بطريقة مختصرة وواضحة.",
      en: "It seems illogical or composed of random words. This article provides an overview of the topic and explains the most important points in a concise and clear way.",
    },
    content: {
      ar: `
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">تحديد نوع الكيان القانوني</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">أول خطوة في تأسيس شركة في المملكة العربية السعودية هي تحديد نوع الكيان القانوني المناسب لطبيعة نشاطك التجاري. يمكنك الاختيار من بين عدة خيارات مثل:</p>
          <ul class="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>شركة ذات مسؤولية محدودة</li>
            <li>شركة مساهمة</li>
            <li>مؤسسة فردية</li>
            <li>شركة تضامن</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">حجز الاسم التجاري</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">بعد تحديد نوع الكيان، يجب حجز الاسم التجاري من خلال وزارة التجارة. يجب أن يكون الاسم فريداً ولا يتعارض مع الأسماء المسجلة مسبقاً. هذه العملية مهمة جداً لأنها تحدد هوية شركتك في السوق.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">يمكنك حجز الاسم التجاري إلكترونياً من خلال منصة "استثمر" أو زيارة فروع وزارة التجارة المنتشرة في جميع أنحاء المملكة. تأكد من أن الاسم يعكس طبيعة نشاطك التجاري ويسهل على العملاء تذكره.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">استخراج السجل التجاري</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">السجل التجاري هو الوثيقة الرسمية التي تثبت تسجيل شركتك لدى وزارة التجارة. يمكن استخراجه إلكترونياً أو من خلال زيارة فروع الوزارة. هذه الوثيقة مطلوبة لجميع المعاملات التجارية والمالية.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">تأكد من تحديث بيانات السجل التجاري بشكل دوري، خاصة عند تغيير عنوان الشركة أو إضافة أنشطة تجارية جديدة. هذا يساعد في الحفاظ على صحة البيانات الرسمية لشركتك.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">الحصول على التراخيص المطلوبة</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">حسب طبيعة النشاط التجاري، قد تحتاج إلى تراخيص إضافية من الجهات الحكومية المختلفة مثل الهيئة العامة للاستثمار أو وزارة الصحة. هذه التراخيص ضرورية لضمان الامتثال للقوانين واللوائح المحلية.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">تختلف متطلبات التراخيص حسب نوع النشاط التجاري. على سبيل المثال، المطاعم تحتاج ترخيص من وزارة الصحة، بينما الشركات التقنية قد تحتاج موافقة من الهيئة العامة للاتصالات وتقنية المعلومات.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">فتح الحساب البنكي</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">بعد الحصول على السجل التجاري، يمكنك فتح حساب بنكي للشركة. ستحتاج إلى تقديم السجل التجاري وبطاقة الهوية الوطنية للمالك أو المدراء المفوضين.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">اختر البنك المناسب لاحتياجات شركتك. بعض البنوك تقدم خدمات خاصة للشركات الصغيرة والمتوسطة، بينما أخرى تركز على الشركات الكبيرة. قارن بين الخدمات والرسوم قبل اتخاذ القرار.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">التأمين والامتثال الضريبي</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">تأكد من الحصول على التأمين المناسب لشركتك، خاصة تأمين المسؤولية العامة. كما يجب التسجيل في الهيئة العامة للزكاة والدخل للامتثال للقوانين الضريبية.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">استعن بمحاسب قانوني لمساعدتك في إعداد التقارير المالية والضريبية. هذا سيوفر عليك الوقت والجهد ويضمن الامتثال للقوانين المحلية.</p>

          <div class="bg-green-50 border-r-4 border-green-500 p-6 my-8">
            <h3 class="text-xl font-bold text-green-800 mb-3">نصيحة مهمة</h3>
            <p class="text-green-700">تأكد من تحديث جميع الوثائق والتراخيص بشكل دوري. القوانين واللوائح تتغير باستمرار، والامتثال لها يحمي شركتك من المشاكل القانونية.</p>
          </div>
        </div>
      `,
      en: `
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">Determine Legal Entity Type</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">The first step in establishing a company in Saudi Arabia is to determine the appropriate legal entity type for your business activity. You can choose from several options such as:</p>
          <ul class="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Limited Liability Company</li>
            <li>Joint Stock Company</li>
            <li>Individual Establishment</li>
            <li>Partnership Company</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">Reserve Trade Name</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">After determining the entity type, you must reserve the trade name through the Ministry of Commerce. The name must be unique and not conflict with previously registered names. This process is very important as it defines your company's identity in the market.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">You can reserve the trade name electronically through the "Invest" platform or by visiting Ministry of Commerce branches throughout the Kingdom. Make sure the name reflects the nature of your business activity and is easy for customers to remember.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">Extract Commercial Register</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">The commercial register is the official document that proves your company's registration with the Ministry of Commerce. It can be extracted electronically or by visiting ministry branches. This document is required for all commercial and financial transactions.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">Make sure to update commercial register data periodically, especially when changing the company address or adding new business activities. This helps maintain the accuracy of your company's official data.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">Obtain Required Licenses</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">Depending on the nature of the business activity, you may need additional licenses from various government agencies such as the General Investment Authority or the Ministry of Health. These licenses are necessary to ensure compliance with local laws and regulations.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">License requirements vary according to the type of business activity. For example, restaurants need a license from the Ministry of Health, while technology companies may need approval from the General Authority for Communications and Information Technology.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">Open Bank Account</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">After obtaining the commercial register, you can open a bank account for the company. You will need to provide the commercial register and national ID card for the owner or authorized managers.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">Choose the bank that suits your company's needs. Some banks offer special services for small and medium companies, while others focus on large companies. Compare services and fees before making a decision.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">Insurance and Tax Compliance</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">Make sure to get appropriate insurance for your company, especially general liability insurance. You should also register with the General Authority for Zakat and Income to comply with tax laws.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">Hire a certified accountant to help you prepare financial and tax reports. This will save you time and effort and ensure compliance with local laws.</p>

          <div class="bg-green-50 border-r-4 border-green-500 p-6 my-8">
            <h3 class="text-xl font-bold text-green-800 mb-3">Important Tip</h3>
            <p class="text-green-700">Make sure to update all documents and licenses periodically. Laws and regulations change constantly, and compliance protects your company from legal problems.</p>
          </div>
        </div>
      `,
    },
    image: "/blog3.jpg",
    category: "culture",
    author: {
      ar: "فاطمة السيد",
      en: "Fatima Al-Sayed",
    },
    authorImage: "/men1.png",
    date: "2025-04-25",
    readTime: {
      ar: "10 دقائق",
      en: "10 minutes",
    },
    comments: 0,
    featured: true,
    tags: {
      ar: ["اليوم الوطني", "السعودية", "الثقافة", "التقاليد"],
      en: ["National Day", "Saudi Arabia", "Culture", "Traditions"],
    },
  },
  {
    id: "business-growth",
    title: {
      ar: "نمو الأعمال في المملكة العربية السعودية",
      en: "Business Growth in Saudi Arabia",
    },
    excerpt: {
      ar: "دليل شامل لنمو الأعمال والاستثمار في المملكة العربية السعودية مع التركيز على الفرص المتاحة.",
      en: "Comprehensive guide to business growth and investment in Saudi Arabia with focus on available opportunities.",
    },
    content: {
      ar: `
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">الفرص الاستثمارية في السعودية</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">المملكة العربية السعودية تقدم فرص استثمارية متنوعة في مختلف القطاعات الاقتصادية. من أهم هذه القطاعات:</p>
          <ul class="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>الطاقة المتجددة</li>
            <li>التقنية والذكاء الاصطناعي</li>
            <li>السياحة والترفيه</li>
            <li>الرعاية الصحية</li>
            <li>التعليم والتدريب</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">رؤية 2030 وأثرها على الأعمال</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">رؤية المملكة 2030 تفتح آفاقاً جديدة للاستثمار والأعمال. هذه الرؤية تركز على تنويع الاقتصاد وتطوير القطاعات غير النفطية.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">من خلال هذه الرؤية، أصبحت المملكة وجهة جذابة للمستثمرين من جميع أنحاء العالم، مع توفير حوافز ضريبية ولوائح مرنة.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">خطوات بدء عمل تجاري</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">بدء عمل تجاري في السعودية يتطلب خطوات محددة وواضحة. إليك الخطوات الأساسية:</p>
          <ol class="list-decimal list-inside space-y-2 mb-8 text-gray-700">
            <li>تحديد نوع النشاط التجاري</li>
            <li>اختيار الشكل القانوني للشركة</li>
            <li>حجز الاسم التجاري</li>
            <li>استخراج السجل التجاري</li>
            <li>الحصول على التراخيص المطلوبة</li>
            <li>فتح الحساب البنكي</li>
          </ol>

          <div class="bg-blue-50 border-r-4 border-blue-500 p-6 my-8">
            <h3 class="text-xl font-bold text-blue-800 mb-3">نصيحة للمستثمرين</h3>
            <p class="text-blue-700">استفد من البرامج الحكومية الداعمة للاستثمار مثل برنامج "استثمر" و"المناطق الاقتصادية الخاصة" للحصول على مزايا إضافية.</p>
          </div>
        </div>
      `,
      en: `
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">Investment Opportunities in Saudi Arabia</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">Saudi Arabia offers diverse investment opportunities across various economic sectors. Among the most important sectors are:</p>
          <ul class="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Renewable Energy</li>
            <li>Technology and Artificial Intelligence</li>
            <li>Tourism and Entertainment</li>
            <li>Healthcare</li>
            <li>Education and Training</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">Vision 2030 and Its Impact on Business</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">Saudi Arabia's Vision 2030 opens new horizons for investment and business. This vision focuses on diversifying the economy and developing non-oil sectors.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">Through this vision, Saudi Arabia has become an attractive destination for investors from around the world, with tax incentives and flexible regulations.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">Steps to Start a Business</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">Starting a business in Saudi Arabia requires specific and clear steps. Here are the basic steps:</p>
          <ol class="list-decimal list-inside space-y-2 mb-8 text-gray-700">
            <li>Determine the type of business activity</li>
            <li>Choose the legal form of the company</li>
            <li>Reserve the trade name</li>
            <li>Extract the commercial register</li>
            <li>Obtain required licenses</li>
            <li>Open a bank account</li>
          </ol>

          <div class="bg-blue-50 border-r-4 border-blue-500 p-6 my-8">
            <h3 class="text-xl font-bold text-blue-800 mb-3">Tip for Investors</h3>
            <p class="text-blue-700">Take advantage of government programs supporting investment such as the "Invest" program and "Special Economic Zones" to get additional benefits.</p>
          </div>
        </div>
      `,
    },
    image: "/blog1.jpg",
    category: "business",
    author: {
      ar: "أحمد محمد",
      en: "Ahmed Mohammed",
    },
    authorImage: "/men1.png",
    date: "2025-04-20",
    readTime: {
      ar: "8 دقائق",
      en: "8 minutes",
    },
    comments: 5,
    featured: false,
    tags: {
      ar: ["الأعمال", "الاستثمار", "رؤية 2030", "النمو"],
      en: ["Business", "Investment", "Vision 2030", "Growth"],
    },
  },
  {
    id: "legal-updates",
    title: {
      ar: "أحدث التحديثات القانونية في المملكة",
      en: "Latest Legal Updates in the Kingdom",
    },
    excerpt: {
      ar: "مراجعة شاملة لأحدث التحديثات القانونية والتشريعية في المملكة العربية السعودية وأثرها على الأعمال.",
      en: "Comprehensive review of the latest legal and legislative updates in Saudi Arabia and their impact on business.",
    },
    content: {
      ar: `
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">التحديثات في قانون الشركات</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">شهد قانون الشركات في المملكة تحديثات مهمة تهدف إلى تسهيل عملية تأسيس الشركات وتشجيع الاستثمار. من أهم هذه التحديثات:</p>
          <ul class="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>تقليل الحد الأدنى لرأس المال</li>
            <li>تبسيط إجراءات التسجيل</li>
            <li>تحسين الخدمات الإلكترونية</li>
            <li>تسريع عملية الموافقة</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">التحديثات الضريبية</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">أعلنت الهيئة العامة للزكاة والدخل عن تحديثات مهمة في النظام الضريبي تهدف إلى دعم الشركات الصغيرة والمتوسطة.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">تشمل هذه التحديثات تخفيضات ضريبية للشركات الناشئة وإعفاءات مؤقتة لبعض القطاعات.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">التحديثات في قانون العمل</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">شهد قانون العمل تحديثات مهمة تهدف إلى حماية حقوق العمال وتحسين بيئة العمل في المملكة.</p>

          <div class="bg-yellow-50 border-r-4 border-yellow-500 p-6 my-8">
            <h3 class="text-xl font-bold text-yellow-800 mb-3">تنبيه مهم</h3>
            <p class="text-yellow-700">تأكد من مراجعة جميع التحديثات القانونية الجديدة والتأكد من امتثال شركتك لها لتجنب أي مشاكل قانونية.</p>
          </div>
        </div>
      `,
      en: `
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">Updates in Company Law</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">Saudi Arabia's company law has witnessed important updates aimed at facilitating the company formation process and encouraging investment. Among the most important updates are:</p>
          <ul class="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Reducing the minimum capital requirement</li>
            <li>Simplifying registration procedures</li>
            <li>Improving electronic services</li>
            <li>Speeding up the approval process</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">Tax Updates</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">The General Authority for Zakat and Income announced important updates to the tax system aimed at supporting small and medium companies.</p>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">These updates include tax reductions for startups and temporary exemptions for some sectors.</p>

          <h2 class="text-2xl font-bold text-gray-800 mb-6 mt-8">Labor Law Updates</h2>
          <p class="text-gray-700 leading-relaxed mb-6 text-lg">Labor law has witnessed important updates aimed at protecting workers' rights and improving the work environment in the Kingdom.</p>

          <div class="bg-yellow-50 border-r-4 border-yellow-500 p-6 my-8">
            <h3 class="text-xl font-bold text-yellow-800 mb-3">Important Notice</h3>
            <p class="text-yellow-700">Make sure to review all new legal updates and ensure your company's compliance to avoid any legal problems.</p>
          </div>
        </div>
      `,
    },
    image: "/blog2.jpg",
    category: "legal",
    author: {
      ar: "محمد العلي",
      en: "Mohammed Al-Ali",
    },
    authorImage: "/men1.png",
    date: "2025-04-15",
    readTime: {
      ar: "6 دقائق",
      en: "6 minutes",
    },
    comments: 12,
    featured: true,
    tags: {
      ar: ["القانون", "التحديثات", "الشركات", "الضرائب"],
      en: ["Law", "Updates", "Companies", "Taxes"],
    },
  },
];

export const blogCategories = [
  { id: "all", name: { ar: "الكل", en: "All" } },
  { id: "business", name: { ar: "الأعمال", en: "Business" } },
  { id: "legal", name: { ar: "القانون", en: "Legal" } },
  { id: "culture", name: { ar: "الثقافة", en: "Culture" } },
  { id: "technology", name: { ar: "التقنية", en: "Technology" } },
];
