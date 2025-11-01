"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation, IMAGE_PATHS } from "@/constants";
import { HeroProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  backgroundImage,
  personImage,
}: HeroProps) {
  const { language, isRTL } = useLanguage();

  // Default content from translations
  const defaultTitle = getTranslation("hero", "title", language);
  const defaultSubtitle = getTranslation("hero", "subtitle", language);
  const defaultHeading = getTranslation("hero", "heading", language);
  const defaultDescription = getTranslation("hero", "description", language);
  const defaultPrimaryBtn = {
    label: getTranslation("hero", "primaryButton", language),
    href: "/services",
  };
  const defaultSecondaryBtn = {
    label: getTranslation("hero", "secondaryButton", language),
    href: "/about",
  };

  return (
    <section className="relative flex items-center overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[800px] pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-16 lg:pb-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={
            backgroundImage
              ? `http://localhost:1337${backgroundImage.url}`
              : IMAGE_PATHS.backgrounds.hero
          }
          alt={backgroundImage?.alternativeText || "Background"}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(94.78deg, rgba(22, 97, 19, 0.59) 17.73%, rgba(0, 0, 0, 0.7) 113.39%)",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <div
            className={`order-2 lg:order-1 text-white space-y-4 md:space-y-6 ${
              isRTL ? "text-right lg:text-right" : "text-left lg:text-left"
            } animate-fade-in`}
          >
            <h1
              className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight transition-slow"
              style={{ fontFamily: "var(--font-almarai)" }}
            >
              {title || defaultTitle}
            </h1>
            <h2
              className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight transition-slow animate-delay-100"
              style={{ fontFamily: "var(--font-almarai)" }}
            >
              {subtitle || defaultSubtitle}
            </h2>
            <p
              className="text-primary font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight transition-slow animate-delay-200"
              style={{ fontFamily: "var(--font-almarai)" }}
            >
              {defaultHeading}
            </p>
            <p
              className="max-w-xl text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed transition-slow animate-delay-300"
              style={{ fontFamily: "var(--font-almarai)" }}
            >
              {description || defaultDescription}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={primaryButton?.href || defaultPrimaryBtn.href}
                className="bg-primary hover:bg-green-600 text-white font-semibold transition-smooth hover-lift shadow-lg hover:shadow-xl inline-flex items-center justify-center rounded-full px-8 py-3.5 md:px-10 md:py-4 lg:px-12 lg:py-4 text-base md:text-lg transform"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {primaryButton?.label || defaultPrimaryBtn.label}
              </Link>
              <Link
                href={secondaryButton?.href || defaultSecondaryBtn.href}
                className="bg-transparent hover:bg-white/10 text-white font-semibold transition-smooth hover-scale inline-flex items-center justify-center rounded-full border-2 border-white hover:border-white/80 px-8 py-3.5 md:px-10 md:py-4 lg:px-12 lg:py-4 text-base md:text-lg transform"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {secondaryButton?.label || defaultSecondaryBtn.label}
              </Link>
            </div>
          </div>

          {/* Right Column - Person Image */}
          <div className="relative order-1 lg:order-2">
            {/* Mobile/Tablet simplified visual */}
            <div className="relative mx-auto w-full max-w-[400px] h-[400px] sm:max-w-[480px] sm:h-[480px] lg:hidden">
              <Image
                src={IMAGE_PATHS.icons.ellipse}
                alt="Ellipse"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 flex items-end justify-center p-4">
                <div className="relative w-[75%] h-[85%] rounded-[48px] overflow-hidden">
                  <Image
                    src={
                      personImage
                        ? `http://localhost:1337${personImage.url}`
                        : IMAGE_PATHS.people.main
                    }
                    alt={personImage?.alternativeText || "Person"}
                    fill
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
              </div>
              <div className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-[100px] h-[110px] sm:w-[120px] sm:h-[130px] rounded-xl overflow-hidden shadow-lg bg-white">
                <Image
                  src={IMAGE_PATHS.people.small}
                  alt="Team member"
                  width={120}
                  height={130}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Desktop exact frame */}
            <div className="relative w-full max-w-[583px] h-[523.1768px] mx-auto hidden lg:block">
              {/* Outer ellipse (stroke) */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 521.8856,
                  height: 506.00177,
                  top: 17.18,
                  left: 61.11,
                  opacity: 0.5,
                  borderRadius: 14.17,
                  borderWidth: 0.94,
                  borderStyle: "solid",
                  borderColor: "#A8A8A8",
                }}
              />

              {/* Ellipse image background */}
              <div
                className="absolute"
                style={{
                  width: 449.5132,
                  height: 435.83203,
                  top: 67.07,
                  left: 82.02,
                }}
              >
                <Image
                  src={IMAGE_PATHS.icons.ellipse}
                  alt="Ellipse"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Person image */}
              <div className="absolute" style={{ top: 0, left: 170 }}>
                <div className="relative w-[283px] h-[501px] rounded-[102px] overflow-hidden">
                  <Image
                    src={
                      personImage
                        ? `http://localhost:1337${personImage.url}`
                        : IMAGE_PATHS.people.main
                    }
                    alt={personImage?.alternativeText || "Person"}
                    fill
                    className="object-cover object-bottom"
                    priority
                  />
                </div>
              </div>

              {/* Right-side circular icon */}
              <div
                className="absolute rounded-full bg-white shadow-md flex items-center justify-center"
                style={{
                  width: 59.125,
                  height: 61.8955078125,
                  top: 226.34,
                  left: 496.38,
                }}
              >
                <Image
                  src={IMAGE_PATHS.icons.main}
                  alt="Icon"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              {/* Left small card with image */}
              <div className="absolute" style={{ top: 197.28, left: 0 }}>
                <div className="w-[132.228px] h-[145.017px] rounded-2xl border border-white/80 overflow-hidden shadow-lg bg-white">
                  <Image
                    src={IMAGE_PATHS.people.small}
                    alt="Right Men"
                    width={132}
                    height={145}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
