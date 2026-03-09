// GET Legal Services Categories
import { gql } from "@apollo/client";

export const GET_LEGAL_SERVICE_CATEGORIES = gql`
  query LegalServiceCategories($locale: I18NLocaleCode) {
    legalServiceCategories(locale: $locale) {
      documentId
      slug
      order
      name
      description
      icon {
        url
        name
      }
    }
  }
`;

// GET Single Legal Service Category by documentId
export const GET_LEGAL_SERVICE_CATEGORY_BY_DOCUMENTID = gql`
  query LegalServiceCategory($documentId: ID!, $locale: I18NLocaleCode) {
    legalServiceCategory(documentId: $documentId, locale: $locale) {
      documentId
      slug
      order
      name
      description
      icon {
        url
        name
      }
    }
  }
`;

// GET Legal Services Subservices by Category documentId
export const GET_LEGAL_SUBSERVICES_BY_CATEGORY = gql`
  query LegalSubServicesByCategory(
    $categoryDocumentId: ID!
    $locale: I18NLocaleCode
  ) {
    legalSubServices(
      locale: $locale
      pagination: { limit: 1000 }
      filters: {
        legal_service_category: { documentId: { eq: $categoryDocumentId } }
      }
    ) {
      button_label
      currency
      shortDescription
      startFromPrice
      slug
      name
      order
      icon {
        url
        name
      }
      documentId
      finishPeriodMax
      finishPeriodMin
    }
  }
`;

// GET Legal Services Category Subservices
export const GET_LEGAL_SERVICE_CATEGORY_SUBSERVICES = gql`
  query LegalSubServices($locale: I18NLocaleCode) {
    legalSubServices(locale: $locale, pagination: { limit: 1000 }) {
      button_label
      currency
      shortDescription
      startFromPrice
      slug
      name
      order
      icon {
        url
        name
      }
      legal_service_category {
        documentId
        name
        slug
      }
      documentId
      finishPeriodMax
      finishPeriodMin
    }
  }
`;

// GET Legal Services single subservice details
export const GET_LEGAL_SERVICE_SUBSERVICE_DETAILS_BY_DOCUMENTID = gql`
  query LegalSubServices($documentId: ID!, $locale: I18NLocaleCode) {
    legalSubService(documentId: $documentId, locale: $locale) {
      currency
      description {
        id
        title
        description
        icon {
          name
          url
        }
        icon_color_code
      }
      documentId
      finishPeriodMax
      finishPeriodMin
      icon {
        name
        url
      }
      legal_service_category {
        documentId
        name
        slug
      }
      name
      requirements {
        id
        requirement
      }
      shortDescription
      slug
      startFromPrice
      steps {
        id
        title
        description
        icon {
          url
          name
        }
        icon_color_code
      }
    }
  }
`;
