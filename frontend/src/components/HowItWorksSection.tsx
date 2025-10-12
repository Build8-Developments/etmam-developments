'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

interface Step {
  number: number;
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
  const defaultTitle = language === 'ar' 
    ? 'خطوات بسيطة لطلب خدمتك' 
    : 'Simple Steps to Request Your Service';
  
  const defaultDescription = language === 'ar'
    ? 'نحن نؤمن بأن طلب الخدمات يجب أن يكون سهلاً ومريحاً. لذلك قمنا بتصميم عملية بسيطة ومباشرة تمكنك من الحصول على الخدمة التي تحتاجها بسرعة وكفاءة عالية.'
    : 'We believe that requesting services should be easy and comfortable. Therefore, we have designed a simple and direct process that enables you to get the service you need quickly and efficiently.';

  const defaultBannerText = language === 'ar' 
    ? 'إجراءات أبسط... إنجاز أسرع' 
    : 'Simpler procedures... Faster completion';

  const defaultSteps: Step[] = [
    {
      number: 1,
      title: language === 'ar' ? 'اختر الخدمة' : 'Choose the Service',
      description: language === 'ar' 
        ? 'تصفح خدماتنا المتنوعة من تأسيس الشركات والتراخيص والإدارة، واختر الخدمة المناسبة لك مع شرح واضح ومفصل لكل خدمة.'
        : 'Browse our diverse services from company formation, licensing, and management, and choose the service that suits you with clear and detailed explanation for each service.',
    },
    {
      number: 2,
      title: language === 'ar' ? 'قدم طلبك أونلاين' : 'Submit Your Request Online',
      description: language === 'ar'
        ? 'املأ النموذج الإلكتروني البسيط وأرسل طلبك مباشرة عبر موقعنا الإلكتروني دون الحاجة لزيارة المكتب أو التعامل مع أوراق معقدة.'
        : 'Fill out the simple electronic form and submit your request directly through our website without the need to visit the office or deal with complex paperwork.',
    },
    {
      number: 3,
      title: language === 'ar' ? 'إتمام التنفيذ' : 'Complete Execution',
      description: language === 'ar'
        ? 'فريقنا المتخصص يقوم بتنفيذ الإجراءات بسرعة واحترافية عالية، مع إبقائك على اطلاع دائم حتى اكتمال الخدمة بالكامل.'
        : 'Our specialized team executes the procedures quickly and with high professionalism, keeping you informed until the service is fully completed.',
    },
  ];

  const displaySteps = steps || defaultSteps;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative vector pattern */}
        <div className="absolute left-0 top-20 hidden lg:block">
          <Image
            src="/Vectorleft.png"
            alt="Decorative pattern"
            width={120}
            height={200}
            className="opacity-60"
          />
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-700 mb-6 font-almarai">
            {title || defaultTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-almarai leading-relaxed">
            {description || defaultDescription}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Person Image */}
          <div className="lg:order-2">
            <div className="relative max-w-lg mx-auto">
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-6">
                {/* Background image */}
                <div className="absolute inset-4 rounded-2xl overflow-hidden border-2 border-white/30">
                  <Image
                    src="/backmen.png"
                    alt="Background texture"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Main person image */}
                <div className="relative -mt-20 -ml-20">
                  <Image
                    src={personImage ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${personImage.url}` : '/men1.png'}
                    alt={personImage?.alternativeText || 'Person with laptop'}
                    width={500}
                    height={500}
                    className="object-cover rounded-3xl"
                    priority
                  />
                </div>
              </div>

              {/* Banner below image */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 mt-6 shadow-lg">
                <div className="flex items-center justify-center space-x-3">
                  <div className="bg-green-500 rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-green-700 font-semibold text-lg font-almarai">
                    {bannerText || defaultBannerText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="lg:order-1">
            <div className="space-y-8">
              {displaySteps.map((step, index) => (
                <div key={step.number} className={`flex items-start ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0">
                    <div 
                      className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                    >
                      {language === 'ar' ? 
                        (step.number === 1 ? '١' : step.number === 2 ? '٢' : '٣') : 
                        step.number
                      }
                    </div>
                    {/* Connecting line */}
                    {index < displaySteps.length - 1 && (
                      <div className="w-0.5 h-8 bg-gradient-to-b from-green-500 to-green-700 mx-auto mt-4 opacity-60"></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-700 mb-3 font-almarai">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-almarai">
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