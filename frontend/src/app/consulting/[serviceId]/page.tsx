"use client";

import {
  Header,
  Footer,
  CTASection,
  ServiceDetailPage as ServiceDetailComponent,
  ConsultationSection,
} from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/contexts/ToastContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  useConsultingServiceDetail,
  useConsultingServices,
} from "@/hooks/graphql/useGraphQL";
import { useMemo } from "react";
import { consultingServices as mockConsultingServices } from "@/mockData/services";

export default function ConsultingServiceDetailPage() {
  const { language } = useLanguage();
  const { showToast } = useToast();
  const params = useParams();
  const { serviceId } = params;

  // First, get all services to find the documentId by order (which is shared across locales)
  const { data: allServices } = useConsultingServices();

  // Find the service by order (serviceId in URL is the order number)
  const serviceByOrder = useMemo(() => {
    if (!allServices || !serviceId) return null;
    const orderNum = parseInt(serviceId as string, 10);
    return allServices.find((service: any) => service.order === orderNum);
  }, [allServices, serviceId]);

  // Get service details using documentId
  const { data: serviceData } = useConsultingServiceDetail(
    serviceByOrder?.documentId || ""
  );

  // Transform GraphQL data or use mock data as fallback
  const transformedService = useMemo(() => {
    // Try to use GraphQL data first
    if (serviceData && serviceByOrder) {
      const periodText =
        language === "ar"
          ? `من ${serviceData.finishPeriodMin} إلى ${serviceData.finishPeriodMax} أيام عمل`
          : `${serviceData.finishPeriodMin} to ${serviceData.finishPeriodMax} business days`;

      const priceText =
        language === "ar"
          ? `يبدأ من ${serviceData.startFromPrice} ${serviceData.currency}`
          : `Starting from ${serviceData.startFromPrice} ${serviceData.currency}`;

      // Extract features from description array if available
      const features =
        serviceData.description?.map((desc: any) => desc.title) || [];

      // Extract requirements
      const requirements =
        serviceData.requirements?.map((req: any) => req.requirement) || [];

      // Transform steps
      const steps =
        serviceData.steps?.map((step: any) => ({
          title: step.title,
          description: step.description,
          icon: step.icon?.name || "default",
        })) || [];

      return {
        title: serviceData.name || "",
        description: serviceData.shortDescription || "",
        price: priceText,
        duration: periodText,
        icon: serviceData.icon?.name || "consulting",
        features,
        requirements,
        steps,
      };
    }

    // Fall back to mock data
    console.log("Using mock data fallback for consulting service:", serviceId);
    const mockService = mockConsultingServices.find(
      (service) => service.id === serviceId
    );
    if (!mockService) {
      console.warn("Service not found in mock data:", serviceId);
      return null;
    }

    return {
      title: mockService.title[language],
      description: mockService.description[language],
      price: mockService.price[language],
      duration: mockService.duration[language],
      icon: mockService.icon,
      features: mockService.features[language],
      requirements: mockService.requirements[language],
      steps: mockService.steps.map((step) => ({
        title: step.title[language],
        description: step.description[language],
        icon: step.icon,
      })),
    };
  }, [serviceData, serviceByOrder, serviceId, language]);

  // Only show error if service not found in either GraphQL or mock data
  if (!transformedService) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {language === "ar" ? "الخدمة غير موجودة" : "Service Not Found"}
          </h1>
          <Link
            href="/consulting"
            className="text-green-600 hover:text-green-700"
          >
            {language === "ar"
              ? "العودة إلى الخدمات الاستشارية"
              : "Back to Consulting Services"}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleRequestService = () => {
    if (transformedService) {
      showToast(
        language === "ar"
          ? `تم طلب خدمة: ${transformedService.title}`
          : `Service requested: ${transformedService.title}`,
        "success",
        4000
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ServiceDetailComponent
        service={transformedService}
        backHref="/consulting"
        onRequestService={handleRequestService}
      />

      {/* Consultation Section */}
      <ConsultationSection />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
}
