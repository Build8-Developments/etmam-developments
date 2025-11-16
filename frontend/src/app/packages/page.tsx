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
import { useLanguage } from "@/contexts/LanguageContext";
import { buildImageUrl } from "@/lib/api";
import { usePackagesPage } from "@/hooks/graphql";
import Link from "next/link";
import { packages, packagesPageContent } from "@/mockData/pages";

export default function PackagesPage() {
  const { language } = useLanguage();
  const { data: packagesPageData } = usePackagesPage();
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
        <div className="relative overflow-hidden" style={{ isolation: 'isolate' }}>
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
                        href={
                          packagesPageData.Hero.primaryButton.href || "/contact"
                        }
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
                        href={
                          packagesPageData.Hero.secondaryButton.href ||
                          "/offers"
                        }
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
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  pkg.feature?.map((f: any) => getLocalizedValue(f.feature)) ||
                  pkg.features?.map((f: any) =>
                    typeof f === "string" ? f : getLocalizedValue(f)
                  ) ||
                  [];
                const isPopular = pkg.featured || pkg.popular || false;

                return (
                  <div
                    key={pkg.id || index}
                    className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                      isPopular
                        ? "ring-2 ring-green-500 transform scale-105"
                        : ""
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span
                          className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                          style={{ fontFamily: "var(--font-almarai)" }}
                        >
                          {content.packages.popularBadge[language]}
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3
                        className="text-2xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: "var(--font-almarai)" }}
                      >
                        {packageTitle}
                      </h3>
                      <div
                        className="text-4xl font-bold text-green-600"
                        style={{ fontFamily: "var(--font-almarai)" }}
                      >
                        {packagePrice}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {packageFeatures.map(
                        (feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span
                              className="text-gray-600"
                              style={{ fontFamily: "var(--font-almarai)" }}
                            >
                              {feature}
                            </span>
                          </li>
                        )
                      )}
                    </ul>

                    <Link
                      href="/contact"
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                        isPopular
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                      }`}
                      style={{ fontFamily: "var(--font-almarai)" }}
                    >
                      {content.packages.chooseButton[language]}
                    </Link>
                  </div>
                );
              })}
            </div>
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
