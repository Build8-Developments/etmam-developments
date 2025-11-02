'use client';

import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useLanguage } from "@/contexts/LanguageContext";
import { useMemo } from 'react';

interface ConsultingService {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

interface ConsultingServicesClientProps {
  services: ConsultingService[];
  searchTerm: string;
}

export default function ConsultingServicesClient({ services, searchTerm }: ConsultingServicesClientProps) {
  const { language } = useLanguage();

  // Enhanced search with multiple criteria
  const filteredServices = useMemo(() => {
    if (!searchTerm.trim()) return services;
    
    const searchLower = searchTerm.toLowerCase();
    const searchTerms = searchLower.split(' ').filter(term => term.length > 0);
    
    return services.filter((service) =>
      searchTerms.every(term =>
        service.title.toLowerCase().includes(term) ||
        service.description.toLowerCase().includes(term) ||
        service.price.toLowerCase().includes(term) ||
        service.duration.toLowerCase().includes(term)
      )
    );
  }, [services, searchTerm]);

  return (
    <>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <AnimatedSection key={service.id} animation="slideInUp" delay={index * 0.1}>
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                    {/* Icon Header */}
                    <div className="bg-gradient-to-br from-[#1B8036] to-[#145c28] p-8 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                          <span className="text-3xl">{service.icon}</span>
                        </div>
                        <h3 className="text-2xl font-bold group-hover:scale-105 transition-transform">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 flex-1">
                        {service.description}
                      </p>

                      {/* Price & Duration */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-8 h-8 rounded-lg bg-[#1B8036]/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-[#1B8036]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="font-semibold">{service.price}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-8 h-8 rounded-lg bg-[#1B8036]/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-[#1B8036]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span>{service.duration}</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <a
                        href={`/consulting/${service.id}`}
                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#1B8036] to-[#145c28] text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                      >
                        {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection animation="fadeIn">
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {language === 'ar' ? 'لم يتم العثور على نتائج' : 'No Results Found'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === 'ar' 
                    ? 'جرب البحث بكلمات مختلفة أو تصفح جميع الخدمات'
                    : 'Try searching with different keywords or browse all services'
                  }
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
