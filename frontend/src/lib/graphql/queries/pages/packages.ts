import { gql } from "@apollo/client";

export const GET_PACKAGES_PAGE = gql`
  query Query($locale: I18NLocaleCode) {
    package(locale: $locale) {
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
          name
          url
        }
        stats {
          id
          value
          label
        }
      }
      packages {
        id
        title
        price
        featured
        feature {
          feature
        }
      }
      contact_card {
        id
        title
        description
      }
      Faq {
        id
        string
        faqs {
          id
          question
          answer
          order
        }
      }
      partners {
        id
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
