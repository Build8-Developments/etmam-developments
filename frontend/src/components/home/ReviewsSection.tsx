"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation, IMAGE_PATHS } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  reviews,
}) => {
  const { language, isRTL } = useLanguage();

  const defaultTitle = getTranslation("reviews", "title", language);
  const defaultSubtitle = getTranslation("reviews", "subtitle", language);

  // Default reviews for fallback
  const defaultReviews: Review[] = [
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
  ];

  // Use provided reviews or default
  const displayReviews = reviews && reviews.length > 0 ? reviews : defaultReviews;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-green-700 mb-4"
            style={{
              fontFamily: "var(--font-almarai)",
            }}
          >
            {title || defaultTitle}
          </h2>
          <p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-almarai)",
            }}
          >
            {subtitle || defaultSubtitle}
          </p>
        </div>

        {/* Reviews Slider */}
        <div className="max-w-7xl mx-auto relative px-12 md:px-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="pb-16"
          >
            {displayReviews.map((review: Review, index: number) => (
              <SwiperSlide key={review.id || index}>
                <div
                  className="bg-white rounded-2xl p-8 transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-green-500 h-full"
                >
                  {/* Stars */}
                  <div className="flex items-center justify-center mb-6 gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 ${
                          i < review.rating ? "text-amber-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Comment */}
                  <p
                    className="text-gray-700 text-base leading-relaxed mb-8 text-center min-h-[100px]"
                    style={{
                      fontFamily: "var(--font-almarai)",
                    }}
                  >
                    {review.comment}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-green-100">
                      <Image
                        src={review.avatar || IMAGE_PATHS.people.main}
                        alt={review.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h4
                        className="text-gray-900 font-bold text-base mb-1"
                        style={{
                          fontFamily: "var(--font-almarai)",
                        }}
                      >
                        {review.name}
                      </h4>
                      <p
                        className="text-gray-500 text-sm"
                        style={{
                          fontFamily: "var(--font-almarai)",
                        }}
                      >
                        {review.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className={`swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isRTL ? "right-0" : "left-0"
            }`}
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d={isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
              />
            </svg>
          </button>
          <button
            className={`swiper-button-next-custom absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isRTL ? "left-0" : "right-0"
            }`}
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
              />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s;
          cursor: pointer;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #16a34a;
          width: 32px;
          border-radius: 6px;
        }
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          cursor: pointer;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        @media (max-width: 768px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            width: 40px;
            height: 40px;
          }
          .swiper-button-prev-custom svg,
          .swiper-button-next-custom svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;
