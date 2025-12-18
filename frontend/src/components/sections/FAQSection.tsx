'use client';

import { useState } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

interface FAQItem {
  question: string;
  answer: string;
  order?: number;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

export const FAQSection = ({ title, subtitle, faqs }: FAQSectionProps) => {
  const { language } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  // Default FAQ data
  const defaultFaqData = [
    {
      question: { ar: "كم يستغرق إنجاز الخدمة؟", en: "How long does it take to complete the service?" },
      answer: { ar: "عادة من 3 إلى 5 أيام عمل، وقد يختلف الوقت حسب اكتمال المستندات والإجراءات المطلوبة.", en: "Usually 3 to 5 business days, and the time may vary depending on the completion of documents and required procedures." }
    },
    {
      question: { ar: "هل أحتاج الحضور شخصياً؟", en: "Do I need to attend in person?" },
      answer: { ar: "لا، يمكن إنجاز جميع الإجراءات عن بُعد دون الحاجة للحضور شخصياً. نحن نتولى كل شيء نيابة عنك.", en: "No, all procedures can be completed remotely without the need to attend in person. We handle everything on your behalf." }
    },
    {
      question: { ar: "هل يشمل السعر جميع الرسوم الحكومية؟", en: "Does the price include all government fees?" },
      answer: { ar: "نعم، السعر يشمل جميع الرسوم الحكومية والضرائب المطلوبة. لا توجد رسوم مخفية.", en: "Yes, the price includes all government fees and required taxes. There are no hidden fees." }
    },
    {
      question: { ar: "هل يمكن تعديل البيانات بعد إتمام الخدمة؟", en: "Can data be modified after the service is completed?" },
      answer: { ar: "نعم، يمكن تعديل بعض البيانات حسب طبيعة التعديل المطلوب. تواصل معنا لمعرفة التفاصيل.", en: "Yes, some data can be modified depending on the nature of the required modification. Contact us for details." }
    },
    {
      question: { ar: "كيف يمكنني متابعة طلبي؟", en: "How can I track my order?" },
      answer: { ar: "يمكنك متابعة طلبك من خلال رقم الطلب المرسل إليك عبر الرسائل النصية أو البريد الإلكتروني.", en: "You can track your order through the order number sent to you via text messages or email." }
    },
    {
      question: { ar: "ما هي طرق الدفع المتاحة؟", en: "What payment methods are available?" },
      answer: { ar: "نقبل جميع طرق الدفع الإلكترونية، البطاقات الائتمانية، والتحويلات البنكية.", en: "We accept all electronic payment methods, credit cards, and bank transfers." }
    }
  ];

  // Helper function to get localized value
  const getLocalizedValue = (value: any): { ar: string; en: string } => {
    if (!value) return { ar: '', en: '' };
    if (typeof value === 'string') return { ar: value, en: value };
    if (typeof value === 'object' && value !== null) {
      return {
        ar: value.ar || value[language] || '',
        en: value.en || value[language] || ''
      };
    }
    return { ar: String(value), en: String(value) };
  };

  // Use Strapi data if available, otherwise use default data
  const faqData = faqs && faqs.length > 0 
    ? faqs.map(faq => {
        const question = getLocalizedValue(faq.question);
        const answer = getLocalizedValue(faq.answer);
        return { question, answer };
      })
    : defaultFaqData;

  return (
    <section 
      className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50/30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 start-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 end-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span 
              className="text-sm font-semibold text-green-700"
              style={{ fontFamily: 'var(--font-almarai)' }}
            >
              {language === 'ar' ? 'إجابات سريعة' : 'Quick Answers'}
            </span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent" 
            style={{ fontFamily: 'var(--font-almarai)' }}
          >
            {title || (language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions')}
          </h2>
          
          <p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-almarai)' }}
          >
            {subtitle || (language === 'ar' 
              ? 'نجيب على أكثر الأسئلة شيوعاً لمساعدتك في اتخاذ القرار الصحيح' 
              : 'We answer the most common questions to help you make the right decision')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-5">
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div 
                key={index}
                className={`
                  group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden
                  transition-all duration-500 ease-out
                  ${isOpen 
                    ? 'shadow-xl shadow-green-500/10 ring-2 ring-green-500/20' 
                    : 'shadow-md hover:shadow-lg hover:shadow-green-500/5'
                  }
                `}
              >
                {/* Gradient Border Effect */}
                <div 
                  className={`
                    absolute inset-0 bg-gradient-to-r from-green-500 via-green-400 to-green-600 opacity-0 
                    transition-opacity duration-300
                    ${isOpen ? 'opacity-100' : 'group-hover:opacity-50'}
                  `}
                  style={{ padding: '2px', borderRadius: 'inherit' }}
                >
                  <div className="w-full h-full bg-white rounded-[inherit]" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="w-full p-5 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 text-start"
                    aria-expanded={isOpen}
                  >
                    {/* Number Badge */}
                    <div 
                      className={`
                        flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl
                        flex items-center justify-center font-bold text-lg sm:text-xl
                        transition-all duration-300
                        ${isOpen 
                          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30' 
                          : 'bg-gray-100 text-gray-500 group-hover:bg-green-100 group-hover:text-green-600'
                        }
                      `}
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    
                    {/* Question */}
                    <span 
                      className={`
                        flex-1 text-base sm:text-lg lg:text-xl font-semibold
                        transition-colors duration-300
                        ${isOpen ? 'text-green-700' : 'text-gray-800 group-hover:text-green-600'}
                      `}
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {item.question[language]}
                    </span>
                    
                    {/* Toggle Icon */}
                    <div 
                      className={`
                        flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full
                        flex items-center justify-center
                        transition-all duration-500
                        ${isOpen 
                          ? 'bg-green-500 text-white rotate-180' 
                          : 'bg-gray-100 text-gray-500 group-hover:bg-green-100 group-hover:text-green-600'
                        }
                      `}
                    >
                      <svg 
                        className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </div>
                  </button>
                  
                  {/* Answer */}
                  <div 
                    className={`
                      overflow-hidden transition-all duration-500 ease-out
                      ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6 lg:pb-8 ps-[4.5rem] sm:ps-[5.5rem] lg:ps-[6.5rem]">
                      <div className="relative">
                        {/* Decorative Line */}
                        <div className="absolute start-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-300 rounded-full -ms-6 sm:-ms-8" />
                        
                        <p 
                          className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
                          style={{ fontFamily: 'var(--font-almarai)', lineHeight: '1.8' }}
                        >
                          {item.answer[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p 
            className="text-gray-600 mb-4"
            style={{ fontFamily: 'var(--font-almarai)' }}
          >
            {language === 'ar' ? 'لم تجد إجابة لسؤالك؟' : "Didn't find an answer to your question?"}
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300"
            style={{ fontFamily: 'var(--font-almarai)' }}
          >
            <span>{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
