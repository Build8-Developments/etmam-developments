import {
  Header,
  Footer,
  AboutSection,
  CTASection,
  ConsultationSection,
  FAQSection,
  PartnersSection,
  ErrorBoundary,
} from "@/components";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { buildImageUrl } from "@/lib/api";
import {
  SuccessFoundationSection,
  LeadershipSection,
  WhyChooseSection,
} from "@/components/about";
import { GET_ABOUT_PAGE } from "@/lib/graphql/queries/pages/about";
import { fetchWithLocale } from "@/lib/graphql/utils/fetchGraphQL";
import { getLocale } from "@/lib/graphql/utils/locale";
import { aboutPageContent } from "@/mockData/pages";
import Link from "next/link";

export default async function AboutPage() {
  // Get current locale
  const locale = (await getLocale()) as "ar" | "en";

  // Fetch data from Strapi with fallback to default content
  const { data: strapiData } = await fetchWithLocale({
    query: GET_ABOUT_PAGE,
    locale,
  });

  // Extract data from Strapi response
  const aboutData = strapiData?.about;

  // Always use mock data as fallback for missing fields
  const content = aboutPageContent;
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Custom Hero Section */}
        <AnimatedSection animation="fadeIn" delay={0}>
          <div className="relative overflow-hidden">
            <div
              className="relative py-20 lg:py-32 pt-28 md:pt-32 min-h-[400px]"
              style={{
                background:
                  "linear-gradient(86.9deg, rgba(27, 128, 54, 0.47) -14.86%, rgba(2, 6, 3, 0.47) 94%)",
                backdropFilter: "blur(4px)",
                pointerEvents: "none",
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: aboutData?.Hero?.backgroundImage?.url
                    ? `url(${buildImageUrl(
                        aboutData.Hero.backgroundImage.url
                      )})`
                    : "url(/bgabout.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "fixed",
                  pointerEvents: "none",
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
                      {aboutData?.Hero?.title || content.hero.title[locale]}
                    </h1>

                    <p
                      className="text-lg md:text-xl mb-8 leading-relaxed opacity-90"
                      style={{ fontFamily: "var(--font-almarai)" }}
                    >
                      {aboutData?.Hero?.subtitle ||
                        content.hero.description[locale]}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={
                          aboutData?.Hero?.primaryButton?.href || "/services"
                        }
                        className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-colors whitespace-nowrap"
                        style={{ fontFamily: "var(--font-almarai)" }}
                      >
                        {aboutData?.Hero?.primaryButton?.label ||
                          content.hero.buttons.primary[locale]}
                      </Link>
                      <Link
                        href={
                          aboutData?.Hero?.secondaryButton?.href || "/contact"
                        }
                        className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-colors whitespace-nowrap"
                        style={{ fontFamily: "var(--font-almarai)" }}
                      >
                        {aboutData?.Hero?.secondaryButton?.label ||
                          content.hero.buttons.secondary[locale]}
                      </Link>
                    </div>
                  </div>
                  {/* Right Side - Visual Elements */}
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Data Visualization Cards */}
                      {aboutData?.Hero?.stats?.map(
                        (stat: any, index: number) => (
                          <div
                            key={index}
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
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        )
                      ) || (
                        <>
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-white mb-2">
                                500+
                              </div>
                              <div
                                className="text-sm text-white/80"
                                style={{ fontFamily: "var(--font-almarai)" }}
                              >
                                {content.hero.stats.companiesFounded[locale]}
                              </div>
                            </div>
                          </div>

                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-white mb-2">
                                15+
                              </div>
                              <div
                                className="text-sm text-white/80"
                                style={{ fontFamily: "var(--font-almarai)" }}
                              >
                                {content.hero.stats.yearsExperience[locale]}
                              </div>
                            </div>
                          </div>

                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-white mb-2">
                                98%
                              </div>
                              <div
                                className="text-sm text-white/80"
                                style={{ fontFamily: "var(--font-almarai)" }}
                              >
                                {content.hero.stats.satisfactionRate[locale]}
                              </div>
                            </div>
                          </div>

                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-white mb-2">
                                24/7
                              </div>
                              <div
                                className="text-sm text-white/80"
                                style={{ fontFamily: "var(--font-almarai)" }}
                              >
                                {content.hero.stats.technicalSupport[locale]}
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

        {/* About Section with Strapi data */}
        <AnimatedSection animation="fadeInUp" delay={100}>
          <AboutSection
            title={aboutData?.aboutUs?.title}
            heading={aboutData?.aboutUs?.subtitle}
            description={aboutData?.aboutUs?.description}
            mainImage={aboutData?.aboutUs?.primaryImage}
            secondaryImage={aboutData?.aboutUs?.secondaryImage}
            statNumber={aboutData?.aboutUs?.partnersCount}
            statLabel={aboutData?.aboutUs?.partnersCountText}
            features={aboutData?.aboutUs?.content}
            ctaButton={{
              label: aboutData?.aboutUs?.ctaButton?.label || "عرض المزيد",
              href: aboutData?.aboutUs?.ctaButton?.href || "/services",
            }}
          />
        </AnimatedSection>

        {/* Success Foundation Section with Strapi data */}
        <AnimatedSection animation="fadeInLeft" delay={150}>
          <SuccessFoundationSection
            title={aboutData?.Success?.title}
            subtitle={aboutData?.Success?.subtitle}
            visionMessage={aboutData?.Success?.VisionMessage}
          />
        </AnimatedSection>

        {/* Leadership Section with Strapi data */}
        <AnimatedSection animation="scaleIn" delay={200}>
          <LeadershipSection
            title={aboutData?.Achievements?.title}
            subtitle={aboutData?.Achievements?.subtitle}
            numbersCounter={aboutData?.Achievements?.NumbersCounter}
          />
        </AnimatedSection>

        {/* Why Choose Section with Strapi data */}
        <AnimatedSection animation="fadeInRight" delay={150}>
          <WhyChooseSection
            title={aboutData?.WhyChooseUs?.title}
            subtitle={aboutData?.WhyChooseUs?.subtitle}
            content={aboutData?.WhyChooseUs?.content}
          />
        </AnimatedSection>

        {/* Consultation Section */}
        <AnimatedSection animation="fadeInUp" delay={200}>
          <ConsultationSection />
        </AnimatedSection>

        {/* FAQ Section with Strapi data */}
        <AnimatedSection animation="slideInUp" delay={150}>
          <FAQSection
            title={aboutData?.Faq?.title}
            faqs={aboutData?.Faq?.faqs}
          />
        </AnimatedSection>

        {/* CTA Section with Strapi data */}
        <AnimatedSection animation="scaleIn" delay={100}>
          <CTASection
            title={aboutData?.CTA?.title}
            buttonText={aboutData?.CTA?.buttonText}
            backgroundImage={aboutData?.CTA?.backgroundImage}
          />
        </AnimatedSection>

        {/* Partners Section with Strapi data */}
        <AnimatedSection animation="fadeIn" delay={150}>
          <PartnersSection partners={aboutData?.PartnersLogos?.partners} />
        </AnimatedSection>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}
