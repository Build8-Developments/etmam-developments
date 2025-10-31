import { gql } from "@apollo/client";

export const GET_SERVICES_PAGE = gql`
  query Query($locale: I18NLocaleCode) {
    service(locale: $locale) {
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
      serviceCategories {
        id
        title
        description
        icon {
          name
          url
        }
        href
        servicesCount
        isHighlighted
        color
      }
      features {
        id
        icon
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

