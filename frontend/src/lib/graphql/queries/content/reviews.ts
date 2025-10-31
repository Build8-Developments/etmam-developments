import { gql } from "@apollo/client";

export const GET_REVIEWS = gql`
  query Reviews($locale: I18NLocaleCode) {
    reviews(
      locale: $locale
      publicationState: LIVE
      sort: "order:asc,createdAt:desc"
    ) {
      documentId
      name
      position
      company
      rating
      comment
      avatar {
        url
        name
      }
      date
      featured
      order
    }
  }
`;

export const GET_FEATURED_REVIEWS = gql`
  query FeaturedReviews($locale: I18NLocaleCode) {
    reviews(
      locale: $locale
      publicationState: LIVE
      filters: { featured: { eq: true } }
      sort: "order:asc,createdAt:desc"
    ) {
      documentId
      name
      position
      company
      rating
      comment
      avatar {
        url
        name
      }
      date
      featured
      order
    }
  }
`;

