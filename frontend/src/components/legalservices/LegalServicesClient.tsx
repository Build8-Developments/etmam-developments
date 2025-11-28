"use client";

import { AnimatedSection } from "@/components/common/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

interface LegalCompany {
  id: string;
  name: string;
  description: string;
  logo: string;
  servicesCount: number;
  isHighlighted: boolean;
}

interface LegalServicesClientProps {
  companies: LegalCompany[];
}

export default function LegalServicesClient({
  companies,
}: LegalServicesClientProps) {
  const { language } = useLanguage();

  return (
    <>
      {/* Companies Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {companies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companies.map((company, index) => (
                <AnimatedSection
                  key={company.id}
                  animation="slideInUp"
                  delay={index * 0.1}
                >
                  <Link
                    href={`/legalservices/${company.id}`}
                    className="block h-full"
                  >
                    <div
                      className={`
                      group relative bg-white rounded-2xl overflow-hidden h-full
                      transition-all duration-500 ease-out
                      shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                      hover:shadow-[0_20px_60px_rgba(27,128,54,0.15)]
                      transform hover:-translate-y-3
                      before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#1B8036]/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 before:pointer-events-none
                      hover:before:opacity-100
                      ${
                        company.isHighlighted
                          ? "ring-2 ring-[#1B8036] ring-offset-2"
                          : ""
                      }
                    `}
                    >
                      {/* Highlighted Badge */}
                      {company.isHighlighted && (
                        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-[#1B8036] to-[#145c28] text-white text-xs font-bold rounded-full shadow-lg">
                          {language === "ar" ? "⭐ مميز" : "⭐ Featured"}
                        </div>
                      )}

                      {/* Logo Header with Enhanced Gradient */}
                      <div className="relative bg-gradient-to-br from-[#1B8036] via-[#1a7532] to-[#145c28] p-10 text-white overflow-hidden">
                        {/* Animated Background Patterns */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700" />
                        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-[2] transition-transform duration-700" />

                        {/* Logo Container */}
                        <div className="relative z-10 flex items-center justify-center h-28">
                          <div
                            className="
                            w-24 h-24 bg-white rounded-2xl flex items-center justify-center p-4
                            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                            transform group-hover:scale-110 group-hover:rotate-3
                            transition-all duration-500
                          "
                          >
                            <Image
                              src={company.logo}
                              alt={company.name}
                              width={72}
                              height={72}
                              className="object-contain filter group-hover:brightness-110 transition-all duration-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content with Better Spacing */}
                      <div className="p-8 relative">
                        <h3
                          className="
                          text-2xl font-bold text-gray-900 mb-4 
                          group-hover:text-[#1B8036] 
                          transition-colors duration-300
                          leading-tight
                        "
                        >
                          {company.name}
                        </h3>

                        <p
                          className="
                          text-gray-600 mb-6 leading-relaxed line-clamp-3
                          text-base
                          group-hover:text-gray-700
                          transition-colors duration-300
                        "
                        >
                          {company.description}
                        </p>

                        {/* Services Count Badge */}
                        {company.servicesCount > 0 && (
                          <div
                            className="
                            inline-flex items-center gap-2.5 
                            px-4 py-2.5 
                            bg-gradient-to-r from-[#1B8036]/10 to-[#145c28]/10
                            rounded-xl
                            text-[#1B8036] text-sm font-bold
                            border border-[#1B8036]/20
                            group-hover:border-[#1B8036]/40
                            group-hover:shadow-lg group-hover:shadow-[#1B8036]/20
                            transition-all duration-300
                          "
                          >
                            <svg
                              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <span>
                              {language === "ar"
                                ? `${company.servicesCount} ${
                                    company.servicesCount === 1
                                      ? "خدمة"
                                      : "خدمات"
                                  }`
                                : `${company.servicesCount} ${
                                    company.servicesCount === 1
                                      ? "service"
                                      : "services"
                                  }`}
                            </span>
                          </div>
                        )}

                        {/* Call to Action Arrow */}
                        <div
                          className="
                          mt-6 pt-6 border-t border-gray-100
                          flex items-center justify-between
                        "
                        >
                          <span
                            className="
                            text-[#1B8036] font-bold text-base
                            group-hover:text-[#145c28]
                            transition-colors duration-300
                          "
                          >
                            {language === "ar"
                              ? "عرض الخدمات"
                              : "View Services"}
                          </span>
                          <div
                            className="
                            w-10 h-10 rounded-full
                            bg-gradient-to-br from-[#1B8036] to-[#145c28]
                            flex items-center justify-center
                            group-hover:shadow-lg group-hover:shadow-[#1B8036]/50
                            transform group-hover:translate-x-1
                            transition-all duration-300
                          "
                          >
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d={
                                  language === "ar"
                                    ? "M15 19l-7-7 7-7"
                                    : "M9 5l7 7-7 7"
                                }
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection animation="fadeIn">
              <div className="text-center py-24">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <svg
                    className="w-16 h-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {language === "ar"
                    ? "لا توجد جهات متاحة حالياً"
                    : "No Entities Available"}
                </h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  {language === "ar"
                    ? "نعمل على إضافة المزيد من الجهات والخدمات قريباً"
                    : "We are working on adding more entities and services soon"}
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
