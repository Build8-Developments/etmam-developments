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
import { useMemo } from "react";
import {
  useLegalServiceSubservices,
  useLegalServiceSubserviceDetail,
} from "@/hooks/graphql/useGraphQL";
import LegalServiceDetailLoading from "./loading";

export default function ServiceDetailPage() {
  const { language } = useLanguage();
  const { showToast } = useToast();
  const params = useParams();
  const locale = params.locale as string;
  const companyId = params.companyId as string;
  const serviceId = params.serviceId as string;

  // Get all subservices to find the one by slug
  const { data: allSubservices, loading: loadingSubservices } =
    useLegalServiceSubservices();

  // Find the subservice by slug
  const serviceBySlug = useMemo(() => {
    if (!allSubservices || !serviceId) return null;
    return allSubservices.find((service: any) => service.slug === serviceId);
  }, [allSubservices, serviceId]);

  // Get service details using documentId
  const { data: serviceData, loading: loadingDetail } =
    useLegalServiceSubserviceDetail(serviceBySlug?.documentId || "");

  // Combined loading state
  const isLoading = loadingSubservices || (serviceBySlug && loadingDetail);

  // Transform GraphQL data or use mock data as fallback
  const transformedService = useMemo(() => {
    // Try to use GraphQL data first
    if (serviceData && serviceBySlug) {
      const periodText =
        language === "ar"
          ? `من ${serviceData.finishPeriodMin} إلى ${serviceData.finishPeriodMax} أيام عمل`
          : `${serviceData.finishPeriodMin} to ${serviceData.finishPeriodMax} business days`;

      const priceText =
        language === "ar"
          ? `يبدأ من ${serviceData.startFromPrice} ${serviceData.currency}`
          : `Starting from ${serviceData.startFromPrice} ${serviceData.currency}`;

      const features =
        serviceData.description?.map((desc: any) => desc.title) || [];
      const requirements =
        serviceData.requirements?.map((req: any) => req.requirement) || [];
      const steps =
        serviceData.steps?.map((step: any) => ({
          title: step.title,
          description: step.description,
          icon: step.icon?.name || "default",
        })) || [];

      const companyName = serviceBySlug.legal_service_category?.name || "";

      return {
        title: serviceData.name || "",
        description: serviceData.shortDescription || "",
        price: priceText,
        duration: periodText,
        icon: serviceData.icon?.name || "document",
        companyName,
        features,
        requirements,
        steps,
      };
    }

    // Fall back to mock data
    const serviceDataMock: any = {
      "ministry-industry": {
        "company-formation": {
          title: language === "ar" ? "تأسيس الشركات" : "Company Formation",
          description:
            language === "ar"
              ? "خدمة متكاملة لتأسيس شركتك من الألف إلى الياء مع جميع المستندات المطلوبة"
              : "Comprehensive service to establish your company from A to Z with all required documents",
          price:
            language === "ar" ? "يبدأ من 2000 ريال" : "Starting from 2000 SAR",
          duration:
            language === "ar" ? "من 3 إلى 5 أيام عمل" : "3 to 5 business days",
          icon: "building",
          companyName:
            language === "ar"
              ? "وزارة الصناعة والثروة المعدنية"
              : "Ministry of Industry and Mineral Resources",
          features:
            language === "ar"
              ? [
                  "إعداد جميع المستندات المطلوبة",
                  "تسجيل الشركة في السجل التجاري",
                  "استخراج الرخص اللازمة",
                  "فتح الحساب البنكي",
                  "استشارات قانونية مجانية",
                ]
              : [
                  "Preparation of all required documents",
                  "Company registration in commercial register",
                  "Extraction of necessary licenses",
                  "Bank account opening",
                  "Free legal consultations",
                ],
          requirements:
            language === "ar"
              ? [
                  "صورة من الهوية الوطنية",
                  "صورة من السجل التجاري",
                  "عقد إيجار أو ملكية المقر",
                  "شهادة عدم المحكومية",
                  "صور شخصية حديثة",
                ]
              : [
                  "Copy of national ID",
                  "Copy of commercial register",
                  "Rental contract or property ownership",
                  "Criminal record certificate",
                  "Recent personal photos",
                ],
          steps:
            language === "ar"
              ? [
                  {
                    title: "تقديم الطلب",
                    description: "تقديم الطلب مع المستندات المطلوبة",
                    icon: "document",
                  },
                  {
                    title: "المراجعة",
                    description: "مراجعة الطلب من قبل الفريق القانوني",
                    icon: "review",
                  },
                  {
                    title: "الإعداد",
                    description: "إعداد المستندات والتراخيص",
                    icon: "prepare",
                  },
                  {
                    title: "التسجيل",
                    description: "تسجيل الشركة في الجهات المختصة",
                    icon: "register",
                  },
                  {
                    title: "التسليم",
                    description: "تسليم جميع المستندات للعميل",
                    icon: "deliver",
                  },
                ]
              : [
                  {
                    title: "Submit",
                    description: "Submit application with required documents",
                    icon: "document",
                  },
                  {
                    title: "Review",
                    description: "Review application by legal team",
                    icon: "review",
                  },
                  {
                    title: "Prepare",
                    description: "Prepare documents and licenses",
                    icon: "prepare",
                  },
                  {
                    title: "Register",
                    description: "Register company with relevant authorities",
                    icon: "register",
                  },
                  {
                    title: "Deliver",
                    description: "Deliver all documents to client",
                    icon: "deliver",
                  },
                ],
        },
        "license-extraction": {
          title: language === "ar" ? "استخراج التراخيص" : "License Extraction",
          description:
            language === "ar"
              ? "نستخرج جميع أنواع التراخيص التجارية والصناعية بسرعة ودقة"
              : "We extract all types of commercial and industrial licenses quickly and accurately",
          price:
            language === "ar" ? "يبدأ من 1500 ريال" : "Starting from 1500 SAR",
          duration:
            language === "ar" ? "من 2 إلى 4 أيام عمل" : "2 to 4 business days",
          icon: "license",
          companyName:
            language === "ar"
              ? "وزارة الصناعة والثروة المعدنية"
              : "Ministry of Industry and Mineral Resources",
          features:
            language === "ar"
              ? [
                  "استخراج التراخيص التجارية",
                  "استخراج التراخيص الصناعية",
                  "تجديد التراخيص المنتهية",
                  "تعديل بيانات التراخيص",
                  "متابعة حالة الطلب",
                ]
              : [
                  "Extract commercial licenses",
                  "Extract industrial licenses",
                  "Renew expired licenses",
                  "Modify license data",
                  "Follow up on application status",
                ],
          requirements:
            language === "ar"
              ? [
                  "السجل التجاري",
                  "عقد إيجار المقر",
                  "شهادة عدم المحكومية",
                  "صور شخصية",
                  "رسوم الترخيص",
                ]
              : [
                  "Commercial register",
                  "Premises rental contract",
                  "Criminal record certificate",
                  "Personal photos",
                  "License fees",
                ],
          steps:
            language === "ar"
              ? [
                  {
                    title: "التحديد",
                    description: "تحديد نوع الترخيص المطلوب",
                    icon: "identify",
                  },
                  {
                    title: "الجمع",
                    description: "جمع المستندات المطلوبة",
                    icon: "collect",
                  },
                  {
                    title: "التقديم",
                    description: "تقديم الطلب للجهة المختصة",
                    icon: "submit",
                  },
                  {
                    title: "المتابعة",
                    description: "متابعة حالة الطلب",
                    icon: "follow",
                  },
                  {
                    title: "الاستلام",
                    description: "استلام الترخيص",
                    icon: "receive",
                  },
                ]
              : [
                  {
                    title: "Identify",
                    description: "Determine required license type",
                    icon: "identify",
                  },
                  {
                    title: "Collect",
                    description: "Collect required documents",
                    icon: "collect",
                  },
                  {
                    title: "Submit",
                    description: "Submit application to relevant authority",
                    icon: "submit",
                  },
                  {
                    title: "Follow",
                    description: "Follow up on application status",
                    icon: "follow",
                  },
                  {
                    title: "Receive",
                    description: "Receive license",
                    icon: "receive",
                  },
                ],
        },
      },
    };

    const companyServices =
      serviceDataMock[companyId as keyof typeof serviceDataMock];
    if (!companyServices) return null;

    const mockService =
      companyServices[serviceId as keyof typeof companyServices];
    if (!mockService) return null;

    return mockService;
  }, [serviceData, serviceBySlug, companyId, serviceId, language]);

  const service = transformedService;

  // Show loading skeleton while data is being fetched
  if (isLoading) {
    return <LegalServiceDetailLoading />;
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {language === "ar" ? "الخدمة غير موجودة" : "Service Not Found"}
          </h1>
          <Link
            href={`/${locale}/legalservices/${companyId}`}
            className="text-green-600 hover:text-green-700"
          >
            {language === "ar"
              ? "العودة إلى خدمات الشركة"
              : "Back to Company Services"}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleRequestService = () => {
    if (service) {
      showToast(
        language === "ar"
          ? `تم طلب خدمة: ${service.title}`
          : `Service requested: ${service.title}`,
        "success",
        4000
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ServiceDetailComponent
        service={service}
        backHref={`/${locale}/legalservices/${companyId}`}
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
