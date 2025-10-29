import { gql } from "@apollo/client";

// GET Consulting Services
export const GET_SHORT_CONSULTING_SERVICES = gql`
  query ConsultingServices {
    consultingServices {
      button_label
      currency
      finishPeriodMax
      finishPeriodMin
      icon {
        url
        name
      }
      name
      order
      shortDescription
      slug
      startFromPrice
    }
  }
`;

// GET one Consulting Service details
export const GET_CONSULTING_SERVICE_BY_DOCUMENTID = gql`
  query ConsultingServices($documentId: ID!) {
    consultingService(documentId: $documentId) {
      currency
      description {
        title
        description
        icon {
          url
          documentId
        }
        icon_color_code
        id
      }
      shortDescription
      requirements {
        id
        requirement
      }
      name
      icon {
        url
        name
      }
      startFromPrice
      finishPeriodMin
      finishPeriodMax
      steps {
        id
        title
        description
        icon {
          name
          url
        }
        icon_color_code
      }
    }
  }
`;
