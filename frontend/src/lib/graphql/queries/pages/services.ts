import { gql } from "@apollo/client";

export const GET_SERVICES_PAGE = gql`
  query ServicesPage($locale: I18NLocaleCode) {
    servicesPage(locale: $locale) {
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
      ServiceCategories {
        title
        description
        categories {
          title
          description
          icon {
            url
            name
          }
          href
          servicesCount
          isHighlighted
          color
        }
      }
      Features {
        title
        description
        features {
          title
          description
          icon {
            url
            name
          }
        }
      }
      HowItWorks {
        title
        description
        bannerText
        personImage {
          url
          name
        }
        steps {
          title
          description
          order
        }
      }
      FAQ {
        title
        faqs {
          question
          answer
          order
        }
      }
      Consultation {
        title
        description
        backgroundImage {
          url
          name
        }
      }
      CTA {
        title
        buttonText
        buttonLink
        backgroundImage {
          url
          name
        }
      }
      Partners {
        partners {
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

