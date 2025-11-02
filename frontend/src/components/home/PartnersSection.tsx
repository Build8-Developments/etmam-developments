"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface Partner {
  name: string;
  website?: string;
  logo: {
    url: string;
    name: string;
  };
}

interface PartnersSectionProps {
  partners?: Partner[];
}

const PartnersSection = ({ partners }: PartnersSectionProps) => {
  const { language } = useLanguage();

  // Default partners data
  const defaultPartners = [
    { name: "Stripe", logo: "/Payment method icon1.png" },
    { name: "Amazon", logo: "/Payment method icon2.png" },
    { name: "Google", logo: "/Payment method icon.png" },
  ];

  // Use provided partners or default data
  const partnersData =
    partners && partners.length > 0
      ? partners.map((partner: Partner) => ({
          name: partner.name || "",
          logo: partner.logo?.url
            ? `http://localhost:1337${partner.logo.url}`
            : "/Payment method icon.png",
        }))
      : defaultPartners;

  // Duplicate partners array for seamless infinite scroll
  // Triple the array for smoother continuous scrolling
  const duplicatedPartners = [
    ...partnersData,
    ...partnersData,
    ...partnersData,
  ];

  return (
    <section
      className="py-8 sm:py-12 lg:py-16 bg-white overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {language === "ar" ? "شركاؤنا في النجاح" : "Our Success Partners"}
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {language === "ar"
              ? "نفتخر بشراكتنا مع أفضل الشركات والمؤسسات الرائدة في مجال الخدمات المالية والتقنية"
              : "We are proud to partner with the best companies and leading institutions in the field of financial and technical services"}
          </p>
        </div>
      </div>

      {/* Partners Logos Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 animate-scroll hover:pause-animation">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-6 hover:bg-gray-50 transition-all duration-300"
              style={{
                width: "160px",
                height: "100px",
              }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={80}
                className="object-contain max-w-full max-h-full"
                priority={index < partnersData.length}
                quality={95}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLTR {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        @keyframes scrollRTL {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: ${language === "ar" ? "scrollRTL" : "scrollLTR"} 30s linear
            infinite;
          will-change: transform;
        }

        .animate-scroll:hover,
        .pause-animation:hover .animate-scroll {
          animation-play-state: paused;
        }

        /* Ensure smooth rendering */
        .animate-scroll {
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
