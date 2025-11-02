import { gql } from "@apollo/client";

export const GET_OFFERS_PAGE = gql`
  query Query($locale: I18NLocaleCode) {
    offer(locale: $locale) {
      Hero {
        id
        title
        subtitle
        primaryButton {
          id
          label
          href
          variant
          icon {
            url
            name
          }
          openInNewTab
        }
        secondaryButton {
          id
          label
          href
          variant
          icon {
            url
            name
          }
          openInNewTab
        }
        backgroundImage {
          url
          name
        }
        stats {
          id
          value
          label
        }
      }
      Available_Offers {
        id
        image {
          url
          name
        }
        title
        subtitle
      }
      contact {
        id
        title
        description
      }
      Faq {
        title
        faqs {
          question
          answer
          order
        }
      }
      cta {
        id
        title
        buttonText
        buttonLink
        backgroundImage {
          url
          name
        }
      }
      partners {
        partners {
          id
          name
          logo {
            url
            name
          }
          website
        }
      }
    }
  }
`;
