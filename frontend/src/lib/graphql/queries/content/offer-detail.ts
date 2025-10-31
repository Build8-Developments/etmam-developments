import { gql } from "@apollo/client";

export const GET_OFFER_DETAILS = gql`
  query OfferDetails($locale: I18NLocaleCode) {
    offerDetails(
      locale: $locale
      publicationState: LIVE
      sort: "createdAt:desc"
    ) {
      documentId
      title
      slug
      subtitle
      description {
        blocks {
          type
          children {
            text
            type
          }
        }
      }
      image {
        url
        name
      }
      discount
      originalPrice
      discountedPrice
      currency
      features {
        title
        description
        icon {
          url
          name
        }
      }
      benefits {
        title
        description
        icon {
          url
          name
        }
      }
      validUntil
      termsAndConditions
      callToAction {
        label
        href
        variant
        icon {
          url
          name
        }
        openInNewTab
      }
    }
  }
`;

export const GET_OFFER_DETAIL_BY_SLUG = gql`
  query OfferDetailBySlug($slug: String!, $locale: I18NLocaleCode) {
    offerDetails(
      locale: $locale
      publicationState: LIVE
      filters: { slug: { eq: $slug } }
    ) {
      documentId
      title
      slug
      subtitle
      description {
        blocks {
          type
          children {
            text
            type
          }
        }
      }
      image {
        url
        name
      }
      discount
      originalPrice
      discountedPrice
      currency
      features {
        title
        description
        icon {
          url
          name
        }
      }
      benefits {
        title
        description
        icon {
          url
          name
        }
      }
      validUntil
      termsAndConditions
      callToAction {
        label
        href
        variant
        icon {
          url
          name
        }
        openInNewTab
      }
    }
  }
`;

