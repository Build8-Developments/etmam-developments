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

// GET Legal Services Category Subservices
export const GET_LEGAL_SERVICE_CATEGORY_SUBSERVICES = gql`
  query LegalSubServices($locale: I18NLocaleCode) {
    legalSubServices(locale: $locale) {
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
