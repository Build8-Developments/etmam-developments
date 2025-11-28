"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCreateContactSubmission } from "@/hooks/graphql";
import { ContactForm } from "@/components/common/ContactForm";

interface ConsultationSectionProps {
  compact?: boolean; // If true, removes outer Section wrapper and grid layout
  title?: string;
  description?: string;
}

export const ConsultationSection = ({
  compact = false,
  title,
  description,
}: ConsultationSectionProps = {}) => {
  const { language } = useLanguage();
  const { createSubmission, loading: isSubmitting } =
    useCreateContactSubmission();
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    mobileNumber: "",
    email: "",
    preferredTime: "",
    preferredLanguage: "",
    service: "",
    note: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.mobileNumber) {
      return;
    }

    try {
      const result = await createSubmission({
        variables: {
          data: {
            companyName: formData.companyName || null,
            fullName: formData.fullName,
            email: formData.email,
            phoneNumber: formData.mobileNumber,
            preferredContactTime: formData.preferredTime || null,
            language: formData.preferredLanguage || language,
            service: formData.service || null,
            note: formData.note || null,
          },
        },
      });

      console.log("Form submitted successfully:", result);
      setIsSuccess(true);

      // Reset form
      setFormData({
        companyName: "",
        fullName: "",
        mobileNumber: "",
        email: "",
        preferredTime: "",
        preferredLanguage: "",
        service: "",
        note: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      // Error handling is done in the hook's onError callback
    }
  };

  const formContent = (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 relative z-[50]"
      style={{
        isolation: "isolate",
        touchAction: "manipulation",
        pointerEvents: "auto",
      }}
    >
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {language === "ar" ? "اسم المنشأة" : "Company Name"}
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
            placeholder={
              language === "ar" ? "أدخل اسم المنشأة" : "Enter company name"
            }
            dir={language === "ar" ? "rtl" : "ltr"}
            autoComplete="organization"
          />
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {language === "ar" ? "الاسم بالكامل" : "Full Name"}
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
            placeholder={
              language === "ar" ? "أدخل الاسم بالكامل" : "Enter full name"
            }
            dir={language === "ar" ? "rtl" : "ltr"}
            autoComplete="name"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {language === "ar" ? "رقم الجوال" : "Mobile Number"}
          </label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
            placeholder={
              language === "ar" ? "أدخل رقم الجوال" : "Enter mobile number"
            }
            dir={language === "ar" ? "rtl" : "ltr"}
            autoComplete="tel"
            inputMode="tel"
          />
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {language === "ar" ? "البريد الإلكتروني" : "Email"}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
            placeholder={
              language === "ar"
                ? "أدخل البريد الإلكتروني"
                : "Enter email address"
            }
            dir={language === "ar" ? "rtl" : "ltr"}
            autoComplete="email"
            inputMode="email"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {language === "ar"
              ? "أوقات التواصل المفضلة"
              : "Preferred Contact Times"}
          </label>
          <select
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            <option value="">
              {language === "ar"
                ? "اختر الوقت المناسب"
                : "Select preferred time"}
            </option>
            <option value="morning">
              {language === "ar"
                ? "صباحاً (9 ص - 12 م)"
                : "Morning (9 AM - 12 PM)"}
            </option>
            <option value="afternoon">
              {language === "ar"
                ? "بعد الظهر (12 م - 5 م)"
                : "Afternoon (12 PM - 5 PM)"}
            </option>
            <option value="evening">
              {language === "ar"
                ? "مساءً (5 م - 9 م)"
                : "Evening (5 PM - 9 PM)"}
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {language === "ar" ? "لغة التواصل" : "Preferred Language"}
          </label>
          <select
            name="preferredLanguage"
            value={formData.preferredLanguage}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            <option value="">
              {language === "ar" ? "اختر اللغة" : "Select language"}
            </option>
            <option value="arabic">
              {language === "ar" ? "العربية" : "Arabic"}
            </option>
            <option value="english">
              {language === "ar" ? "الإنجليزية" : "English"}
            </option>
          </select>
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div></div>
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {language === "ar" ? "اختر الخدمة" : "Choose Service"}
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            <option value="">
              {language === "ar"
                ? "اختر الخدمة المطلوبة"
                : "Select required service"}
            </option>
            <option value="company_formation">
              {language === "ar" ? "تأسيس الشركات" : "Company Formation"}
            </option>
            <option value="legal_services">
              {language === "ar" ? "الخدمات القانونية" : "Legal Services"}
            </option>
            <option value="business_consulting">
              {language === "ar"
                ? "الاستشارات التجارية"
                : "Business Consulting"}
            </option>
            <option value="financial_consulting">
              {language === "ar"
                ? "الاستشارات المالية"
                : "Financial Consulting"}
            </option>
            <option value="marketing_consulting">
              {language === "ar"
                ? "الاستشارات التسويقية"
                : "Marketing Consulting"}
            </option>
            <option value="hr_consulting">
              {language === "ar" ? "الاستشارات الإدارية" : "HR Consulting"}
            </option>
            <option value="technical_consulting">
              {language === "ar"
                ? "الاستشارات التقنية"
                : "Technical Consulting"}
            </option>
          </select>
        </div>
      </div>

      {/* Row 5 - Note */}
      <div className="mb-6">
        <label
          className="block text-sm font-semibold text-gray-700 mb-2"
          style={{ fontFamily: "var(--font-almarai)" }}
        >
          {language === "ar" ? "ملاحظة" : "Note"}
        </label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-gray-800"
          placeholder={
            language === "ar"
              ? "أضف أي ملاحظات إضافية..."
              : "Add any additional notes..."
          }
          dir={language === "ar" ? "rtl" : "ltr"}
        />
      </div>

      {/* Submit Button / Success Message */}
      {isSuccess ? (
        <div className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg text-center shadow-lg flex items-center justify-center gap-3">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span style={{ fontFamily: "var(--font-almarai)" }}>
            {language === "ar" ? "تم الإرسال بنجاح" : "Sent Successfully"}
          </span>
        </div>
      ) : (
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full min-h-[48px] bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 touch-manipulation ${
            isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "hover:from-green-700 hover:to-green-800 active:scale-[0.98]"
          }`}
          style={{
            fontFamily: "var(--font-almarai)",
            touchAction: "manipulation",
          }}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>
                {language === "ar" ? "جاري الإرسال..." : "Sending..."}
              </span>
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>
                {language === "ar" ? "إرسال الرسالة" : "Send Message"}
              </span>
            </>
          )}
        </button>
      )}
    </form>
  );

  if (compact) {
    return <ContactForm />;
  }

  return (
    <section
      className="bg-gray-50 py-16 lg:py-24 relative"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-green-100 px-5 py-2.5 rounded-full mb-6 shadow-sm border border-green-200">
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span
              className="text-sm font-bold text-green-700 tracking-wide"
              style={{ fontFamily: "var(--font-almarai)" }}
            >
              {language === "ar" ? "احجز استشارتك" : "Book Consultation"}
            </span>
          </div>

          {/* Main Title */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4"
            style={{ fontFamily: "var(--font-almarai)", lineHeight: "1.2" }}
          >
            {language === "ar"
              ? "ابدأ رحلتك معنا الآن"
              : "Start Your Journey With Us"}
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-transparent to-green-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-l from-transparent to-green-500 rounded-full" />
          </div>

          {/* Description */}
          <p
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            style={{ fontFamily: "var(--font-almarai)" }}
          >
            {language === "ar"
              ? "املأ البيانات المطلوبة وسيتواصل معك فريقنا المتخصص خلال 24 ساعة لمناقشة احتياجاتك وتقديم أفضل الحلول"
              : "Fill in the required information and our specialized team will contact you within 24 hours to discuss your needs and provide the best solutions"}
          </p>

          {/* Features List */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span
                className="text-sm sm:text-base text-gray-700 font-semibold"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {language === "ar" ? "استشارة مجانية" : "Free Consultation"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span
                className="text-sm sm:text-base text-gray-700 font-semibold"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {language === "ar"
                  ? "رد سريع خلال 24 ساعة"
                  : "Quick Response in 24h"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span
                className="text-sm sm:text-base text-gray-700 font-semibold"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {language === "ar" ? "فريق متخصص" : "Expert Team"}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Form */}
          <div className="lg:order-2 lg:pr-8 relative z-20">{formContent}</div>

          {/* Text Content */}
          <div
            className={`lg:order-1 flex flex-col items-center justify-center text-center ${
              language === "ar"
                ? "lg:text-right lg:items-end"
                : "lg:text-left lg:items-start"
            } lg:pl-8 rounded-2xl overflow-hidden relative bg-gradient-to-br from-green-600 to-green-500`}
            style={{ minHeight: "400px", padding: "2.5rem 2rem" }}
          >
            {/* Decorative Icon Centered */}
            <div className="mb-4 flex justify-center w-full">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2
              className="text-2xl lg:text-4xl font-bold mb-3 text-white text-center w-full"
              style={{ fontFamily: "var(--font-almarai)", lineHeight: "1.2" }}
            >
              {title ||
                (language === "ar"
                  ? "احجز استشارتك المجانية"
                  : "Book Your Free Consultation")}
            </h2>
            <div className="w-32 h-2 bg-white/70 mb-4 rounded-full mx-auto" />
            <p
              className="text-base lg:text-lg leading-relaxed text-white/95 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-almarai)" }}
            >
              {description ||
                (language === "ar"
                  ? "عبئ النموذج الآن، ودع فريق إتمام، بخبرته في تأسيس الشركات والخدمات الإدارية، يحدد لك الحل الأنسب لاحتياجات نشاطك، ويضع خطة تنفيذية متكاملة لإنجاز جميع الإجراءات الحكومية ومتابعتها خطوة بخطوة، حتى تبدأ أعمالك بسرعة وبأقل جهد ممكن."
                  : "Fill out the form now, and let the Etmam team, with its expertise in company formation and administrative services, determine the most suitable solution for your business needs, and develop a comprehensive implementation plan to complete all government procedures and follow up step by step, so that your business starts quickly and with the least possible effort.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
