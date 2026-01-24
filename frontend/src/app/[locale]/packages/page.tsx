"use client";

import {
  Header,
  Footer,
  CTASection,
  ConsultationSection,
  FAQSection,
  PartnersSection,
} from "@/components";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { CardsGridSkeleton } from "@/components/common/Skeletons";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildImageUrl } from "@/lib/api";
import { usePackagesPage } from "@/hooks/graphql";
import Link from "next/link";
import { useParams } from "next/navigation";
import { packages, packagesPageContent } from "@/mockData/pages";

export default function PackagesPage() {
  const { language } = useLanguage();
  const routeParams = useParams();
  const locale = routeParams.locale as string;
  const { data: packagesPageData, loading: loadingPackages } =
    usePackagesPage();
  const content = packagesPageContent;

  // Helper function to get string value from Strapi i18n field
  const getLocalizedValue = (value: any): string => {
    if (!value) return "";
    if (typeof value === "string") return value;
    if (typeof value === "object" && value !== null) {
      return value[language] || value.ar || value.en || "";
    }
    return String(value);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Custom Hero Section */}
      <AnimatedSection animation="fadeIn" delay={0}>
        <div
          className="relative overflow-hidden"
          style={{ isolation: "isolate" }}
        >
          <div
            className="relative py-20 lg:py-32 pt-28 md:pt-32 min-h-[400px]"
            data-decorative="true"
            style={{
              background:
                "linear-gradient(86.9deg, rgba(27, 128, 54, 0.47) -14.86%, rgba(2, 6, 3, 0.47) 94%)",
              backdropFilter: "blur(4px)",
            }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0"
              data-decorative="true"
              style={{
                backgroundImage: packagesPageData?.Hero?.backgroundImage?.url
                  ? `url(${buildImageUrl(
                      packagesPageData.Hero.backgroundImage.url
                    )})`
                  : "url(/bgabout.png)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            />

            <div
              className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
              style={{ pointerEvents: "auto" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <div className="text-white">
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {getLocalizedValue(packagesPageData?.Hero?.title) ||
                      content.hero.title[language]}
                  </h1>

                  <p
                    className="text-lg md:text-xl mb-8 leading-relaxed opacity-90"
                    style={{ fontFamily: "var(--font-almarai)" }}
                  >
                    {getLocalizedValue(packagesPageData?.Hero?.subtitle) ||
                      content.hero.description[language]}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {packagesPageData?.Hero?.primaryButton && (
                      <Link
                        href={`/${locale}${
                          packagesPageData.Hero.primaryButton.href || "/contact"
                        }`}
                        className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
                        style={{ fontFamily: "var(--font-almarai)" }}
                      >
                        {getLocalizedValue(
                          packagesPageData.Hero.primaryButton.label
                        ) || content.hero.buttons.primary[language]}
                      </Link>
                    )}
                    {packagesPageData?.Hero?.secondaryButton && (
                      <Link
                        href={`/${locale}${
                          packagesPageData.Hero.secondaryButton.href ||
                          "/offers"
                        }`}
                        className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold transition-colors"
                        style={{ fontFamily: "var(--font-almarai)" }}
                      >
                        {getLocalizedValue(
                          packagesPageData.Hero.secondaryButton.label
                        ) || content.hero.buttons.secondary[language]}
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Side - Visual Elements */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Package Stats Cards */}
                    {packagesPageData?.Hero?.stats?.map(
                      (stat: any, index: number) => (
                        <div
                          key={stat.id || index}
                          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                        >
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">
                              {stat.value}
                            </div>
                            <div
                              className="text-sm text-white/80"
                              style={{ fontFamily: "var(--font-almarai)" }}
                            >
                              {getLocalizedValue(stat.label)}
                            </div>
                          </div>
                        </div>
                      )
                    ) || (
                      <>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">
                              3
                            </div>
                            <div
                              className="text-sm text-white/80"
                              style={{ fontFamily: "var(--font-almarai)" }}
                            >
                              {content.hero.stats.packagesCount[language]}
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">
                              500
                            </div>
                            <div
                              className="text-sm text-white/80"
                              style={{ fontFamily: "var(--font-almarai)" }}
                            >
                              {content.hero.stats.startingPrice[language]}
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">
                              100%
                            </div>
                            <div
                              className="text-sm text-white/80"
                              style={{ fontFamily: "var(--font-almarai)" }}
                            >
                              {content.hero.stats.qualityGuarantee[language]}
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">
                              30
                            </div>
                            <div
                              className="text-sm text-white/80"
                              style={{ fontFamily: "var(--font-almarai)" }}
                            >
                              {content.hero.stats.warrantyDays[language]}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Packages Section */}
      <AnimatedSection animation="fadeInUp" delay={100}>
        <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {content.packages.sectionTitle?.[language] || (language === "ar" ? "اختر الباقة المناسبة لك" : "Choose Your Perfect Package")}
              </h2>
              <p
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {content.packages.sectionDescription?.[language] || (language === "ar" ? "باقات متنوعة تناسب جميع احتياجاتك" : "Various packages to suit all your needs")}
              </p>
            </div>

            {loadingPackages ? (
              <CardsGridSkeleton count={3} columns={3} showImage={false} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {(packagesPageData?.packages &&
                packagesPageData.packages.length > 0
                  ? packagesPageData.packages
                  : packages
                ).map((pkg: any, index: number) => {
                  // Transform Strapi package or use mock package
                  const packageTitle =
                    getLocalizedValue(pkg.title) ||
                    (pkg.name && typeof pkg.name === "object"
                      ? pkg.name[language]
                      : pkg.name) ||
                    "";
                  const packagePrice =
                    typeof pkg.price === "string"
                      ? pkg.price
                      : pkg.price && typeof pkg.price === "object"
                      ? pkg.price[language]
                      : String(pkg.price || "");
                  const packageFeatures =
                    pkg.feature?.map((f: any) => ({
                      text: getLocalizedValue(f.feature),
                      subFeatures: f.subFeatures?.map((sf: any) => getLocalizedValue(sf)) || []
                    })) ||
                    pkg.features?.map((f: any) => {
                      if (typeof f === "string") {
                        return { text: f, subFeatures: [] };
                      }
                      return {
                        text: typeof f === "object" && (f.ar || f.en) ? (language === "ar" ? f.ar : f.en) : getLocalizedValue(f),
                        subFeatures: f.subFeatures?.map((sf: any) => language === "ar" ? sf.ar : sf.en) || []
                      };
                    }) ||
                    [];
                  const isPopular = pkg.featured || pkg.popular || false;

                  return (
                    <div
                      key={pkg.id || index}
                      className={`group relative bg-white rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                        isPopular
                          ? "shadow-2xl border-2 border-green-500"
                          : "shadow-xl hover:shadow-2xl border-2 border-gray-100"
                      }`}
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      {/* Popular Badge */}
                      {isPopular && (
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                          <div
                            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                            style={{ fontFamily: "var(--font-almarai)" }}
                          >
                            {content.packages.popularBadge[language]}
                          </div>
                        </div>
                      )}

                      {/* Card Content */}
                      <div className="p-8 lg:p-10 flex flex-col h-full">
                        {/* Header */}
                        <div className="text-center mb-8 pt-2">
                          <h3
                            className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
                            style={{ fontFamily: "var(--font-almarai)" }}
                          >
                            {packageTitle}
                          </h3>
                          <div className="flex items-center justify-center gap-2">
                            <span
                              className={`text-5xl lg:text-6xl font-bold ${
                                isPopular ? "text-green-600" : "text-gray-900"
                              }`}
                              style={{ fontFamily: "var(--font-almarai)" }}
                            >
                              {packagePrice}
                            </span>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className={`h-1 w-20 mx-auto mb-8 rounded-full ${
                          isPopular ? "bg-gradient-to-r from-green-400 to-green-600" : "bg-gray-200"
                        }`}></div>

                        {/* Features List */}
                        <ul className="space-y-4 mb-10 flex-grow">
                          {packageFeatures.map(
                            (feature: any, featureIndex: number) => (
                              <li key={featureIndex} className="space-y-2">
                                <div className="flex items-start gap-3">
                                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                                    isPopular ? "bg-green-100" : "bg-gray-100"
                                  }`}>
                                    <svg
                                      className={`w-4 h-4 ${
                                        isPopular ? "text-green-600" : "text-green-500"
                                      }`}
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                  <span
                                    className="text-gray-900 text-base leading-relaxed font-semibold"
                                    style={{ fontFamily: "var(--font-almarai)" }}
                                  >
                                    {feature.text}
                                  </span>
                                </div>
                                
                                {/* Sub-features */}
                                {feature.subFeatures && feature.subFeatures.length > 0 && (
                                  <ul className={`${language === 'ar' ? 'mr-9' : 'ml-9'} space-y-2 mt-2`}>
                                    {feature.subFeatures.map((subFeature: string, subIndex: number) => (
                                      <li key={subIndex} className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">•</span>
                                        <span
                                          className="text-gray-600 text-sm leading-relaxed"
                                          style={{ fontFamily: "var(--font-almarai)" }}
                                        >
                                          {subFeature}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            )
                          )}
                        </ul>

                        {/* CTA Button */}
                        <Link
                          href={`/${locale}/contact`}
                          className={`block w-full text-center py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                            isPopular
                              ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl"
                              : "bg-gray-900 hover:bg-gray-800 text-white shadow-md hover:shadow-lg"
                          }`}
                          style={{ fontFamily: "var(--font-almarai)" }}
                        >
                          {content.packages.chooseButton[language]}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>

      {/* Consultation Section */}
      <AnimatedSection animation="fadeInUp" delay={200}>
        <ConsultationSection />
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection animation="slideInUp" delay={150}>
        <FAQSection
          title={getLocalizedValue(packagesPageData?.Faq?.string)}
          faqs={packagesPageData?.Faq?.faqs}
        />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="scaleIn" delay={100}>
        <CTASection
          title={getLocalizedValue(packagesPageData?.contact_card?.title)}
          buttonText={getLocalizedValue(
            packagesPageData?.contact_card?.description
          )}
        />
      </AnimatedSection>

      {/* Partners Section */}
      <AnimatedSection animation="fadeIn" delay={150}>
        <PartnersSection partners={packagesPageData?.partners?.partners} />
      </AnimatedSection>

      <Footer />
    </div>
  );
}
