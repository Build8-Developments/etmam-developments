'use client';

import { useState } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { Section } from '../common';

export const ConsultationSection = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    mobileNumber: '',
    email: '',
    preferredTime: '',
    preferredLanguage: '',
    service: '',
    note: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(language === 'ar' ? 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.' : 'Your request has been submitted successfully! We will contact you soon.');
  };

  return (
    <Section className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Contact Form */}
        <div className="lg:order-2 lg:pr-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'اسم المنشأة' : 'Company Name'}
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={language === 'ar' ? 'أدخل اسم المنشأة' : 'Enter company name'}
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                />
              </div>
              <div>
                <label 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'الاسم بالكامل' : 'Full Name'}
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={language === 'ar' ? 'أدخل الاسم بالكامل' : 'Enter full name'}
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'رقم الجوال' : 'Mobile Number'}
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={language === 'ar' ? 'أدخل رقم الجوال' : 'Enter mobile number'}
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                />
              </div>
              <div>
                <label 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={language === 'ar' ? 'أدخل البريد الإلكتروني' : 'Enter email address'}
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'أوقات التواصل المفضلة' : 'Preferred Contact Times'}
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                >
                  <option value="">{language === 'ar' ? 'اختر الوقت المناسب' : 'Select preferred time'}</option>
                  <option value="morning">{language === 'ar' ? 'صباحاً (9 ص - 12 م)' : 'Morning (9 AM - 12 PM)'}</option>
                  <option value="afternoon">{language === 'ar' ? 'بعد الظهر (12 م - 5 م)' : 'Afternoon (12 PM - 5 PM)'}</option>
                  <option value="evening">{language === 'ar' ? 'مساءً (5 م - 9 م)' : 'Evening (5 PM - 9 PM)'}</option>
                </select>
              </div>
              <div>
                <label 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'لغة التواصل' : 'Preferred Language'}
                </label>
                <select
                  name="preferredLanguage"
                  value={formData.preferredLanguage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                >
                  <option value="">{language === 'ar' ? 'اختر اللغة' : 'Select language'}</option>
                  <option value="arabic">{language === 'ar' ? 'العربية' : 'Arabic'}</option>
                  <option value="english">{language === 'ar' ? 'الإنجليزية' : 'English'}</option>
                </select>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div></div>
              <div>
                <label 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: 'var(--font-almarai)' }}
                >
                  {language === 'ar' ? 'اختر الخدمة' : 'Choose Service'}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                >
                  <option value="">{language === 'ar' ? 'اختر الخدمة المطلوبة' : 'Select required service'}</option>
                  <option value="company-formation">{language === 'ar' ? 'تأسيس الشركات' : 'Company Formation'}</option>
                  <option value="legal-services">{language === 'ar' ? 'الخدمات القانونية' : 'Legal Services'}</option>
                  <option value="business-consulting">{language === 'ar' ? 'الاستشارات التجارية' : 'Business Consulting'}</option>
                  <option value="financial-consulting">{language === 'ar' ? 'الاستشارات المالية' : 'Financial Consulting'}</option>
                  <option value="marketing-consulting">{language === 'ar' ? 'الاستشارات التسويقية' : 'Marketing Consulting'}</option>
                  <option value="hr-consulting">{language === 'ar' ? 'الاستشارات الإدارية' : 'HR Consulting'}</option>
                  <option value="technical-consulting">{language === 'ar' ? 'الاستشارات التقنية' : 'Technical Consulting'}</option>
                </select>
              </div>
            </div>

            {/* Row 5 - Note */}
            <div className="mb-6">
              <label 
                className="block text-sm font-semibold text-gray-700 mb-2"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {language === 'ar' ? 'ملاحظة' : 'Note'}
              </label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder={language === 'ar' ? 'أضف أي ملاحظات إضافية...' : 'Add any additional notes...'}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Text Content */}
        <div className={`lg:order-1 text-center ${language === 'ar' ? 'lg:text-right' : 'lg:text-left'} lg:pl-8 bg-blue-50 p-6 rounded-lg`}>
          <h2 
            className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8"
            style={{ fontFamily: 'var(--font-almarai)' }}
          >
            {language === 'ar' ? 'احجز استشارتك المجانية' : 'Book Your Free Consultation'}
          </h2>
          
          <p 
            className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto lg:mx-0"
            style={{ fontFamily: 'var(--font-almarai)' }}
          >
            {language === 'ar' 
              ? 'عبئ النموذج الآن، ودع فريق إتمام، بخبرته في تأسيس الشركات والخدمات الإدارية، يحدد لك الحل الأنسب لاحتياجات نشاطك، ويضع خطة تنفيذية متكاملة لإنجاز جميع الإجراءات الحكومية ومتابعتها خطوة بخطوة، حتى تبدأ أعمالك بسرعة وبأقل جهد ممكن.'
              : 'Fill out the form now, and let the Etmam team, with its expertise in company formation and administrative services, determine the most suitable solution for your business needs, and develop a comprehensive implementation plan to complete all government procedures and follow up step by step, so that your business starts quickly and with the least possible effort.'
            }
          </p>
        </div>
      </div>
    </Section>
  );
};
