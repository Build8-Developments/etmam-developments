"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGE_PATHS } from "@/constants";
import { buildImageUrl } from "@/lib/api";
import Image from "next/image";
import styles from "@/styles/components/HowItWorksSection.module.css";

interface Step {
  number?: number;
  order?: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title?: string;
  description?: string;
  personImage?: {
    url: string;
    alternativeText: string;
  };
  bannerText?: string;
  steps?: Step[];
}

export default function HowItWorksSection({
  title,
  description,
  personImage,
  bannerText,
  steps,
}: HowItWorksProps) {
  const { language, isRTL } = useLanguage();

  // Default content
  const defaultTitle =
    language === "ar"
      ? "خطوات بسيطة لطلب خدمتك"
      : "Simple Steps to Request Your Service";

  const defaultDescription =
    language === "ar"
      ? "نحن نؤمن بأن طلب الخدمات يجب أن يكون سهلاً ومريحاً. لذلك قمنا بتصميم عملية بسيطة ومباشرة تمكنك من الحصول على الخدمة التي تحتاجها بسرعة وكفاءة عالية."
      : "We believe that requesting services should be easy and comfortable. Therefore, we have designed a simple and direct process that enables you to get the service you need quickly and efficiently.";

  const defaultBannerText =
    language === "ar"
      ? "إجراءات أبسط... إنجاز أسرع"
      : "Simpler procedures... Faster completion";

  const defaultSteps: Step[] = [
    {
      number: 1,
      title: language === "ar" ? "اختر الخدمة" : "Choose the Service",
      description:
        language === "ar"
          ? "تصفح خدماتنا المتنوعة من الخدمات القانونية والاستشارية. اختر الخدمة الأنسب لاحتياجاتك من صفحة الخدمات الرئيسية."
          : "Browse our diverse range of legal and consulting services. Choose the most suitable service for your needs from our main services page.",
    },
    {
      number: 2,
      title:
        language === "ar" ? "قدم طلبك أونلاين" : "Submit Your Request Online",
      description:
        language === "ar"
          ? "املأ النموذج الإلكتروني المخصص بخطوات سهلة وبسيطة، وأرسل طلبك مباشرة عبر الموقع دون الحاجة لزيارة المكتب أو التعامل مع أوراق معقدة."
          : "Fill out the dedicated electronic form with easy and simple steps, and send your request directly through the website without the need to visit the office or deal with complex paperwork.",
    },
    {
      number: 3,
      title: language === "ar" ? "إتمام التنفيذ" : "Complete Execution",
      description:
        language === "ar"
          ? "بعد استلام الطلب، يباشر فريقنا المختص بمتابعة وتنفيذ جميع الإجراءات بسرعة واحترافية. نحرص على إبقائك على اطلاع بكل مرحلة."
          : "After receiving the request, our specialized team will promptly and professionally follow up and execute all procedures. We ensure to keep you informed at every stage.",
    },
  ];

  const displaySteps = steps || defaultSteps;

  return (
    <section className={styles.howItWorksSection}>
      <div className={styles.howItWorksContainer}>
        {/* Header Section */}
        <div className={styles.headerSection}>
          <h2 className={styles.headerTitle}>{title || defaultTitle}</h2>
          <p className={styles.headerDescription}>
            {description || defaultDescription}
          </p>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Left Side - Person Image */}
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              {/* Green frame */}
              <div className={styles.greenFrame}>
                {/* Main person image - positioned to extend beyond the frame */}
                <div className={styles.personImageContainer}>
                  <Image
                    src={
                      personImage
                        ? buildImageUrl(personImage.url)
                        : IMAGE_PATHS.people.alt
                    }
                    alt={personImage?.alternativeText || "Person with laptop"}
                    width={507}
                    height={507}
                    className={styles.personImage}
                    priority
                  />
                </div>
              </div>

              {/* Banner positioned overlapping the bottom of the frame */}
              <div className={styles.bannerContainer}>
                <div className={styles.bannerContent}>
                  <div className={styles.bannerIcon}>
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className={styles.bannerText}>
                    {bannerText || defaultBannerText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className={styles.stepsColumn}>
            <div className={styles.stepsContainer}>
              {displaySteps.map((step, index) => (
                <div
                  key={`step-${step.number || index}-${index}`}
                  className={`${styles.stepItem} ${
                    isRTL ? styles.rtl : styles.ltr
                  }`}
                  style={{
                    direction: language === "ar" ? "rtl" : "ltr",
                  }}
                >
                  {/* Step Number Circle */}
                  <div className={styles.stepNumberContainer} suppressHydrationWarning>
                    <div
                      className={`${styles.stepNumberCircle} ${
                        isRTL ? styles.rtl : styles.ltr
                      }`}
                      style={{
                        direction: language === "ar" ? "rtl" : "ltr",
                        textAlign: "center",
                      }}
                    >
                      {(() => {
                        const stepNum = step.number || step.order || index + 1;
                        if (language === "ar") {
                          // Convert to Arabic numerals
                          const arabicNumerals = [
                            "٠",
                            "١",
                            "٢",
                            "٣",
                            "٤",
                            "٥",
                            "٦",
                            "٧",
                            "٨",
                            "٩",
                          ];
                          return String(stepNum)
                            .split("")
                            .map(
                              (digit) =>
                                arabicNumerals[parseInt(digit)] || digit
                            )
                            .join("");
                        }
                        return stepNum;
                      })()}
                    </div>
                    {/* Connecting line */}
                    {index < displaySteps.length - 1 && (
                      <div className={styles.connectingLine}></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className={styles.stepContent}>
                    <h3
                      className={`${styles.stepTitle} ${
                        isRTL ? styles.rtl : styles.ltr
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`${styles.stepDescription} ${
                        isRTL ? styles.rtl : styles.ltr
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
