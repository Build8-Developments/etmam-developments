import { gql } from "@apollo/client";

export const GET_HOME_PAGE = gql`
  query Home($locale: I18NLocaleCode) {
    home(locale: $locale) {
      Hero {
        backgroundImage {
          name
          url
        }
        description
        personImage {
          name
          url
        }
        primaryButton {
          href
          icon {
            url
            name
          }
          label
          openInNewTab
          variant
        }
        secondaryButton {
          href
          icon {
            url
            name
          }
          label
          openInNewTab
          variant
        }
        subtitle
        title
      }
      About {
        title
        statLabel
        statNumber
        heading
        description
        ctaButton {
          href
          label
          openInNewTab
          variant
        }
        features {
          description
          title
        }
        mainImage {
          url
          name
        }
        secondaryImage {
          url
          name
        }
      }
      Services {
        title
        description
        services {
          description
          icon {
            url
            name
          }
          title
          serviceLink
        }
        ctaButton {
          href
          icon {
            url
            name
          }
          label
          openInNewTab
          variant
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
          description
          order
          title
        }
      }
      Statistics {
        title
        backgroundImage {
          url
          name
        }
        stats {
          label
          number
        }
      }
      ServicesCarousel {
        title
        description
        services {
          description
          icon {
            url
            name
          }
          image {
            name
            url
          }
          title
        }
      }
      Faq {
        string
        faqs {
          answer
          order
          question
        }
      }
      CTA {
        buttonLink
        buttonText
        title
        backgroundImage {
          url
          name
        }
      }
      PartnersLogos {
        partners {
          logo {
            url
            name
          }
          name
          website
        }
      }
    }
  }
`;
