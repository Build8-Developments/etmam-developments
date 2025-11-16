"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCreateContactSubmission } from "@/hooks/graphql";

interface ContactFormProps {
  className?: string;
}

interface FormData {
  companyName: string;
  fullName: string;
  mobileNumber: string;
  email: string;
  preferredTime: string;
  preferredLanguage: string;
  service: string;
  note: string;
}

export const ContactForm = ({ className = "" }: ContactFormProps) => {
  const { language } = useLanguage();
  const { createSubmission, loading: isSubmitting } = useCreateContactSubmission();
  
  const [formData, setFormData] = useState<FormData>({
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 ${className}`}
      style={{
        position: 'relative',
        zIndex: 110,
        isolation: 'isolate',
        touchAction: 'manipulation',
        pointerEvents: 'auto',
      }}
    >
      {/* Success Message */}
      {isSuccess && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-green-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h4
                className="text-green-800 font-semibold mb-1"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {language === "ar" ? "تم الإرسال بنجاح!" : "Successfully Sent!"}
              </h4>
              <p
                className="text-green-700 text-sm"
                style={{ fontFamily: "var(--font-almarai)" }}
              >
                {language === "ar"
                  ? "شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن."
                  : "Thank you for contacting us. We will get back to you as soon as possible."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Row 1: Company Name & Full Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
            htmlFor="companyName"
          >
            {language === "ar" ? "اسم المنشأة" : "Company Name"}
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
            placeholder={
              language === "ar" ? "أدخل اسم المنشأة" : "Enter company name"
            }
            dir={language === "ar" ? "rtl" : "ltr"}
            autoComplete="organization"
            style={{
              touchAction: 'manipulation',
              pointerEvents: 'auto',
            }}
          />
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
            htmlFor="fullName"
          >
            {language === "ar" ? "الاسم بالكامل" : "Full Name"}
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
            placeholder={
              language === "ar" ? "أدخل الاسم بالكامل" : "Enter full name"
            }
            dir={language === "ar" ? "rtl" : "ltr"}
            autoComplete="name"
            style={{
              touchAction: 'manipulation',
              pointerEvents: 'auto',
            }}
          />
        </div>
      </div>

      {/* Row 2: Mobile & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
            htmlFor="mobileNumber"
          >
            {language === "ar" ? "رقم الجوال" : "Mobile Number"}
          </label>
          <input
            type="tel"
            id="mobileNumber"
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
            style={{
              touchAction: 'manipulation',
              pointerEvents: 'auto',
            }}
          />
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
            htmlFor="email"
          >
            {language === "ar" ? "البريد الإلكتروني" : "Email"}
          </label>
          <input
            type="email"
            id="email"
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
            style={{
              touchAction: 'manipulation',
              pointerEvents: 'auto',
            }}
          />
        </div>
      </div>

      {/* Row 3: Preferred Time & Language */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
            htmlFor="preferredTime"
          >
            {language === "ar" ? "الوقت المفضل للتواصل" : "Preferred Contact Time"}
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800 bg-white"
            dir={language === "ar" ? "rtl" : "ltr"}
            style={{
              touchAction: 'manipulation',
              pointerEvents: 'auto',
            }}
          >
            <option value="">
              {language === "ar" ? "اختر الوقت المفضل" : "Select preferred time"}
            </option>
            <option value="morning">
              {language === "ar" ? "صباحاً (9 ص - 12 م)" : "Morning (9 AM - 12 PM)"}
            </option>
            <option value="afternoon">
              {language === "ar" ? "ظهراً (12 م - 3 م)" : "Afternoon (12 PM - 3 PM)"}
            </option>
            <option value="evening">
              {language === "ar" ? "مساءً (3 م - 6 م)" : "Evening (3 PM - 6 PM)"}
            </option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
            htmlFor="preferredLanguage"
          >
            {language === "ar" ? "اللغة المفضلة" : "Preferred Language"}
          </label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            value={formData.preferredLanguage}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800 bg-white"
            dir={language === "ar" ? "rtl" : "ltr"}
            style={{
              touchAction: 'manipulation',
              pointerEvents: 'auto',
            }}
          >
            <option value="">
              {language === "ar" ? "اختر اللغة المفضلة" : "Select preferred language"}
            </option>
            <option value="ar">{language === "ar" ? "العربية" : "Arabic"}</option>
            <option value="en">{language === "ar" ? "الإنجليزية" : "English"}</option>
          </select>
        </div>
      </div>

      {/* Row 4: Service Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div></div>
        <div>
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            style={{ fontFamily: "var(--font-almarai)" }}
            htmlFor="service"
          >
            {language === "ar" ? "الخدمة المطلوبة" : "Service Required"}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800 bg-white"
            dir={language === "ar" ? "rtl" : "ltr"}
            style={{
              touchAction: 'manipulation',
              pointerEvents: 'auto',
            }}
          >
            <option value="">
              {language === "ar" ? "اختر الخدمة" : "Select service"}
            </option>
            <option value="company-formation">
              {language === "ar" ? "تأسيس الشركات" : "Company Formation"}
            </option>
            <option value="legal-services">
              {language === "ar" ? "الخدمات القانونية" : "Legal Services"}
            </option>
            <option value="consulting">
              {language === "ar" ? "الاستشارات" : "Consulting"}
            </option>
            <option value="other">
              {language === "ar" ? "أخرى" : "Other"}
            </option>
          </select>
        </div>
      </div>

      {/* Row 5: Note */}
      <div className="mb-6">
        <label
          className="block text-sm font-semibold text-gray-700 mb-2"
          style={{ fontFamily: "var(--font-almarai)" }}
          htmlFor="note"
        >
          {language === "ar" ? "ملاحظات إضافية" : "Additional Notes"}
        </label>
        <textarea
          id="note"
          name="note"
          value={formData.note}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-gray-800"
          placeholder={
            language === "ar"
              ? "أخبرنا المزيد عن احتياجاتك..."
              : "Tell us more about your needs..."
          }
          dir={language === "ar" ? "rtl" : "ltr"}
          style={{
            touchAction: 'manipulation',
            pointerEvents: 'auto',
          }}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[48px] bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
        style={{
          fontFamily: "var(--font-almarai)",
          touchAction: "manipulation",
          pointerEvents: 'auto',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          opacity: isSubmitting ? 0.7 : 1,
        }}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
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
    </form>
  );
};
