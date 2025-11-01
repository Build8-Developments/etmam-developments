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
          label
        }
        secondaryButton {
          href
          label
        }
        subtitle
        title
      }
      About {
        title
        subtitle
        description
        trustDescription
        visionDescription
        primaryImage {
          url
          name
        }
        secondaryImage {
          url
          name
        }
        partnersCount
        partnersCountText
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
          label
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
