"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { buildImageUrl } from "@/lib/api";
import Image from "next/image";

interface StatisticsSectionProps {
  title?: string;
  stats?: Array<{
    number: string;
    label: string;
  }>;
  backgroundImage?: {
    url: string;
    alternativeText: string;
  };
}

export default function StatisticsSection({
  title,
  stats,
  backgroundImage,
}: StatisticsSectionProps) {
  const { language, isRTL } = useLanguage();

  // Default content based on the image description
  const defaultTitle =
    language === "ar"
      ? "ابدأ رحلة عملك نحو مستقبل أكثر استدامة وأمانا"
      : "Start your business journey towards a more sustainable and secure future";

  const defaultStats = [
    {
      number: language === "ar" ? "+١٥" : "+15",
      label:
        language === "ar"
          ? "المواد البلاستيكية المدرجة"
          : "Listed plastic materials",
    },
    {
      number: language === "ar" ? "+٣٥٠" : "+350k",
      label:
        language === "ar"
          ? "المورد والمشتري الموثوق به"
          : "Trusted supplier and buyer",
    },
    {
      number: language === "ar" ? "+١٥" : "+15k",
      label:
        language === "ar" ? "مدينة تدعم التوصيل" : "City supporting delivery",
    },
    {
      number: language === "ar" ? "+١٥" : "+15",
      label:
        language === "ar" ? "معدل رضا المستخدمين" : "User satisfaction rate",
    },
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage ? buildImageUrl(backgroundImage.url) : "/bg.jpg"}
          alt={backgroundImage?.alternativeText || "Statistics Background"}
          fill
          className="object-cover"
        />
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2
            className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl mx-auto"
            style={{
              fontFamily: "var(--font-almarai)",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            {title || defaultTitle}
          </h2>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {displayStats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                {/* Number */}
                <div
                  className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-3"
                  style={{
                    fontFamily: "Cairo",
                    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  {stat.number}
                </div>

                {/* Label */}
                <div
                  className="text-white/90 font-semibold text-sm md:text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-almarai)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
