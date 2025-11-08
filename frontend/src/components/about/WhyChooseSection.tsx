"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { buildImageUrl } from "@/lib/api";
import Image from "next/image";

interface ContentItem {
  title: string;
  description: string;
  icon?: {
    url: string;
    name: string;
  };
}

interface WhyChooseSectionProps {
  title?: string;
  subtitle?: string;
  content?: ContentItem[];
}

export default function WhyChooseSection({
  title,
  subtitle,
  content,
}: WhyChooseSectionProps) {
  const { language } = useLanguage();

  // Default content
  const defaultContent = [
    {
      title: language === "ar" ? "حلول متكاملة" : "Integrated Solutions",
      description:
        language === "ar"
          ? "من تأسيس الشركات والتراخيص إلى إدارة الأعمال. كل خدماتك في مكان واحد."
          : "From company formation and licensing to business management. All your services in one place.",
      icon: null,
    },
    {
      title: language === "ar" ? "دعم متواصل" : "Continuous Support",
      description:
        language === "ar"
          ? "فريقنا جاهز لمساعدتك والإجابة على استفساراتك في أي وقت."
          : "Our team is ready to assist you and answer your inquiries at any time.",
      icon: null,
    },
    {
      title:
        language === "ar"
          ? "إجراءات إلكترونية سلسة"
          : "Smooth Electronic Procedures",
      description:
        language === "ar"
          ? "قدم طلبك وأكمل معاملاتك عبر الموقع بسهولة."
          : "Submit your request and complete your transactions easily through the website.",
      icon: null,
    },
    {
      title:
        language === "ar"
          ? "خدمات موثوقة وسريعة"
          : "Reliable and Fast Services",
      description:
        language === "ar"
          ? "تنفيذ احترافي يوفر وقتك وجهدك."
          : "Professional execution that saves your time and effort.",
      icon: null,
    },
  ];

  // Use Strapi data if available, otherwise use default data
  const contentData = content && content.length > 0 ? content : defaultContent;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Title */}
          <h2
            className="text-3xl font-normal mb-4"
            style={{
              fontFamily: "var(--font-almarai)",
              fontWeight: 400,
              fontSize: "30px",
              lineHeight: "32px",
              letterSpacing: "-1.9%",
              color: "rgba(17, 97, 58, 1)",
            }}
          >
            {title ||
              (language === "ar" ? "لماذا تختار إتمام؟" : "Why Choose Itmam?")}
          </h2>

          {/* Subtitle */}
          <p
            className="text-lg mb-8"
            style={{
              fontFamily: "var(--font-almarai)",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "29px",
              letterSpacing: "0%",
              color: "rgba(0, 0, 0, 0.44)",
            }}
          >
            {subtitle ||
              (language === "ar"
                ? "تبسيط الإجراءات الإدارية والتجارية بخطوات واضحة وسهلة"
                : "Simplifying administrative and commercial procedures with clear and easy steps")}
          </p>

          {/* Decorative Line */}
          <div
            className="w-1 h-12 mx-auto mb-16"
            style={{
              background: "linear-gradient(180deg, #026838 0%, #000000 100%)",
              transform: "rotate(-90.28deg)",
            }}
          ></div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contentData.map((item, index) => (
              <div
                key={index}
                className="rounded-[60px] p-6 sm:p-8 text-center cursor-pointer group w-full max-w-[267px] mx-auto relative overflow-hidden"
                style={{
                  minHeight: "280px",
                  height: "auto",
                  backgroundColor: "white",
                }}
              >
                {/* Gradient overlay for hover effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-[60px]"
                  style={{
                    background:
                      "linear-gradient(181.08deg, #1B8036 3.34%, #290505 219.68%)",
                    zIndex: 0,
                  }}
                ></div>

                {/* Content wrapper with relative positioning */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-[#026838] transition-all duration-300 ease-in-out">
                    {item.icon?.url ? (
                      <Image
                        src={buildImageUrl(item.icon.url)}
                        alt={item.icon.name || item.title}
                        width={32}
                        height={32}
                        className="w-8 h-8 text-white group-hover:text-white"
                      />
                    ) : (
                      <svg
                        className="w-8 h-8 text-white group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300 ease-in-out"
                    style={{
                      fontFamily: "var(--font-almarai)",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm text-gray-600 group-hover:text-white leading-relaxed transition-colors duration-300 ease-in-out"
                    style={{
                      fontFamily: "var(--font-almarai)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
