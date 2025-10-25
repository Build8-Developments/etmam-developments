'use client';

import { useState } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export const FAQSection = () => {
  const { language } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: { ar: "كم يستغرق إنجاز الخدمة؟", en: "How long does it take to complete the service?" },
      answer: { ar: "عادة من 3 إلى 5 أيام عمل، وقد يختلف الوقت حسب اكتمال المستندات", en: "Usually 3 to 5 business days, and the time may vary depending on the completion of documents" }
    },
    {
      question: { ar: "هل أحتاج الحضور شخصياً؟", en: "Do I need to attend in person?" },
      answer: { ar: "لا، يمكن إنجاز جميع الإجراءات عن بُعد دون الحاجة للحضور شخصياً", en: "No, all procedures can be completed remotely without the need to attend in person" }
    },
    {
      question: { ar: "هل يشمل السعر جميع الرسوم الحكومية؟", en: "Does the price include all government fees?" },
      answer: { ar: "نعم، السعر يشمل جميع الرسوم الحكومية والضرائب المطلوبة", en: "Yes, the price includes all government fees and required taxes" }
    },
    {
      question: { ar: "هل يمكن تعديل البيانات بعد إتمام الخدمة؟", en: "Can data be modified after the service is completed?" },
      answer: { ar: "نعم، يمكن تعديل بعض البيانات حسب طبيعة التعديل المطلوب", en: "Yes, some data can be modified depending on the nature of the required modification" }
    },
    {
      question: { ar: "كيف يمكنني متابعة طلبي؟", en: "How can I track my order?" },
      answer: { ar: "يمكنك متابعة طلبك من خلال رقم الطلب المرسل إليك عبر الرسائل النصية", en: "You can track your order through the order number sent to you via text messages" }
    },
    {
      question: { ar: "ما هي المستندات المطلوبة؟", en: "What documents are required?" },
      answer: { ar: "تختلف المستندات حسب نوع الخدمة، وسيتم إعلامك بالتفصيل عند الطلب", en: "Documents vary according to the type of service, and you will be informed in detail upon request" }
    },
    {
      question: { ar: "هل تقدمون خدمة العملاء على مدار الساعة؟", en: "Do you provide 24/7 customer service?" },
      answer: { ar: "نعم، فريق خدمة العملاء متاح على مدار الساعة للإجابة على استفساراتكم", en: "Yes, our customer service team is available 24/7 to answer your inquiries" }
    },
    {
      question: { ar: "ما هي طرق الدفع المتاحة؟", en: "What payment methods are available?" },
      answer: { ar: "نقبل جميع طرق الدفع الإلكترونية والتحويلات البنكية", en: "We accept all electronic payment methods and bank transfers" }
    },
    {
      question: { ar: "هل يمكن الحصول على استرداد في حالة الإلغاء؟", en: "Can I get a refund in case of cancellation?" },
      answer: { ar: "نعم، يمكن الحصول على استرداد كامل في حالة الإلغاء قبل بدء الخدمة", en: "Yes, you can get a full refund in case of cancellation before the service starts" }
    },
    {
      question: { ar: "هل تقدمون خدمات في جميع أنحاء المملكة؟", en: "Do you provide services throughout the Kingdom?" },
      answer: { ar: "نعم، نقدم خدماتنا في جميع مناطق المملكة العربية السعودية", en: "Yes, we provide our services in all regions of Saudi Arabia" }
    },
    {
      question: { ar: "ما هي مدة الضمان على الخدمات؟", en: "What is the warranty period for services?" },
      answer: { ar: "نقدم ضمان لمدة سنة واحدة على جميع خدماتنا مع إمكانية التمديد", en: "We provide a one-year warranty on all our services with the possibility of extension" }
    },
    {
      question: { ar: "كيف يمكنني التواصل معكم؟", en: "How can I contact you?" },
      answer: { ar: "يمكنكم التواصل معنا عبر الهاتف، البريد الإلكتروني، أو زيارة مقرنا", en: "You can contact us via phone, email, or by visiting our headquarters" }
    }
  ];


  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-almarai)', color: '#11613A' }}>
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-8">
                {/* Question Side */}
                <div className="flex-1">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-right flex items-center justify-between group"
                  >
                    <span 
                      className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {item.question[language]}
                    </span>
                    <div className="ml-4">
                      {openItems.includes(index) ? (
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                          <svg className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                </div>
                
                {/* Answer Side */}
                <div className="flex-1">
                  {openItems.includes(index) && (
                    <p 
                      className="text-gray-600 leading-relaxed text-right"
                      style={{ fontFamily: 'var(--font-almarai)' }}
                    >
                      {item.answer[language]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
