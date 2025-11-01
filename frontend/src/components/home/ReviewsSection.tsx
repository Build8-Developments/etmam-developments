"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReviews } from "@/hooks/graphql";
import { getTranslation, IMAGE_PATHS } from "@/constants";

interface Review {
  id: string | number;
  name: string;
  position: string;
  company: string;
  rating: number;
  comment: string;
  date?: string;
  avatar?: string;
}

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
  reviews?: Review[];
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  title,
  subtitle,
  reviews: propReviews,
}) => {
  const { language, isRTL } = useLanguage();
  const { data: strapiReviews } = useReviews();

  const defaultTitle = getTranslation("reviews", "title", language);
  const defaultSubtitle = getTranslation("reviews", "subtitle", language);

  // Default reviews for fallback
  const defaultReviews: Review[] = useMemo(
    () => [
      {
        id: 1,
        name: language === "ar" ? "سارة أحمد" : "Sarah Ahmed",
        position:
          language === "ar" ? "صاحبة مشروع صغير" : "Small Business Owner",
        company: language === "ar" ? "مطعم سارة" : "Sarah's Restaurant",
        rating: 5,
        comment:
          language === "ar"
            ? "كنت محتاجة أسجل مطعمي وكان الموضوع معقد جداً. إتمام ساعدوني في شهر واحد وكل شيء تمام."
            : "I needed to register my restaurant and it was very complicated. Etmam helped me in one month and everything is perfect.",
        avatar: IMAGE_PATHS.people.alt,
      },
      {
        id: 2,
        name: language === "ar" ? "عبدالله المطيري" : "Abdullah Al-Mutairi",
        position: language === "ar" ? "مطور تطبيقات" : "App Developer",
        company: language === "ar" ? "فري لانسر" : "Freelancer",
        rating: 4,
        comment:
          language === "ar"
            ? "خدمة كويسة، بس كان في تأخير شوية في بعض الأوراق. بس في النهاية تم كل شيء."
            : "Good service, but there was some delay with some papers. But in the end everything was done.",
        avatar: IMAGE_PATHS.people.main,
      },
      {
        id: 3,
        name: language === "ar" ? "فاطمة القحطاني" : "Fatima Al-Qahtani",
        position: language === "ar" ? "مديرة متجر إلكتروني" : "E-store Manager",
        company: language === "ar" ? "متجر فاطمة" : "Fatima's Store",
        rating: 5,
        comment:
          language === "ar"
            ? "أشكر فريق إتمام على المساعدة في تسجيل متجري الإلكتروني. كانوا متجاوبين ومتابعين معايا."
            : "Thanks to Etmam team for helping me register my e-store. They were responsive and followed up with me.",
        avatar: IMAGE_PATHS.people.small,
      },
      {
        id: 4,
        name: language === "ar" ? "محمد الشمري" : "Mohammed Al-Shammari",
        position: language === "ar" ? "مهندس" : "Engineer",
        company:
          language === "ar" ? "شركة البناء الحديث" : "Modern Construction Co.",
        rating: 5,
        comment:
          language === "ar"
            ? "خدمة ممتازة، ساعدونا في استخراج رخصة البناء بسرعة. أنصح بيها."
            : "Excellent service, they helped us get the construction license quickly. I recommend them.",
        avatar: IMAGE_PATHS.people.main,
      },
      {
        id: 5,
        name: language === "ar" ? "نورا الزهراني" : "Nora Al-Zahrani",
        position: language === "ar" ? "مصممة جرافيك" : "Graphic Designer",
        company: language === "ar" ? "استوديو نورا" : "Nora's Studio",
        rating: 4,
        comment:
          language === "ar"
            ? "الخدمة كويسة، بس الأسعار شوية غالية مقارنة بغيرها. بس النتيجة كانت مرضية."
            : "The service is good, but the prices are a bit high compared to others. But the result was satisfactory.",
        avatar: IMAGE_PATHS.people.alt,
      },
      {
        id: 6,
        name: language === "ar" ? "خالد العتيبي" : "Khalid Al-Otaibi",
        position: language === "ar" ? "تاجر" : "Trader",
        company: language === "ar" ? "تجارة خالد" : "Khalid Trading",
        rating: 5,
        comment:
          language === "ar"
            ? "خدمة سريعة ومضمونة. ساعدونا في تسجيل شركة التجارة في أسبوعين. شكراً لكم."
            : "Fast and guaranteed service. They helped us register the trading company in two weeks. Thank you.",
        avatar: IMAGE_PATHS.people.small,
      },
    ],
    [language]
  );

  // Transform Strapi reviews or use provided reviews or default
  const displayReviews = useMemo(() => {
    // If reviews prop is provided, use it
    if (propReviews && propReviews.length > 0) {
      return propReviews;
    }

    // If Strapi reviews exist, transform them
    if (strapiReviews && strapiReviews.length > 0) {
      return strapiReviews.map((review: any) => {
        const reviewDate = review.date
          ? new Date(review.date).toLocaleDateString(
              language === "ar" ? "ar-SA" : "en-US"
            )
          : undefined;

        return {
          id: review.documentId || review.id || "",
          name: review.name || "",
          // Note: In the Strapi data, position and company fields appear to be swapped
          // position field contains order number, company field contains the actual position/title
          position: review.company || "",
          company: review.position || "",
          rating: review.rating || 5,
          comment: review.comment || "",
          date: reviewDate,
          avatar: review.avatar?.url
            ? `http://localhost:1337${review.avatar.url}`
            : IMAGE_PATHS.people.main,
        };
      });
    }

    // Fallback to default reviews
    return defaultReviews;
  }, [strapiReviews, propReviews, language, defaultReviews]);

  return (
    <section className="py-16 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-almarai)",
              fontWeight: "700",
              fontSize: "clamp(28px, 4vw, 42px)",
              lineHeight: "clamp(36px, 5vw, 56px)",
              color: "#11613A",
            }}
          >
            {title || defaultTitle}
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-almarai)",
              fontWeight: "400",
              fontSize: "clamp(16px, 2.5vw, 18px)",
              lineHeight: "clamp(24px, 3.5vw, 28px)",
            }}
          >
            {subtitle || defaultSubtitle}
          </p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayReviews.map((review: Review, index: number) => (
            <div
              key={review.id || index}
              className="bg-gray-50 rounded-xl p-6 transition-smooth shadow-md hover:shadow-xl border border-gray-200 transform"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Stars */}
              <div className="flex items-center mb-4 gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 transition-slow hover-scale ${
                      i < review.rating ? "text-amber-400" : "text-gray-300"
                    }`}
                    fill={i < review.rating ? "#f59e0b" : "#d1d5db"}
                    viewBox="0 0 20 20"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <p
                className="text-gray-700 mb-6"
                style={{
                  fontFamily: "var(--font-almarai)",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "24px",
                }}
              >
                {review.comment}
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <Image
                    src={review.avatar || IMAGE_PATHS.people.main}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4
                    className="text-gray-900 font-semibold text-sm"
                    style={{
                      fontFamily: "var(--font-almarai)",
                    }}
                  >
                    {review.name}
                  </h4>
                  <p
                    className="text-gray-500 text-xs"
                    style={{
                      fontFamily: "var(--font-almarai)",
                    }}
                  >
                    {review.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
