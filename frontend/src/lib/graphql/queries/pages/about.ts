import { gql } from "@apollo/client";

export const GET_ABOUT_PAGE = gql`
  query Query($locale: I18NLocaleCode) {
    about(locale: $locale) {
      Hero {
        title
        subtitle
        primaryButton {
          href
          label
        }
        secondaryButton {
          href
          label
        }
        stats {
          label
          value
        }
        backgroundImage {
          name
          url
        }
      }
      aboutUs {
        title
        subtitle
        partnersCount
        partnersCountText
        description
        trustDescription
        visionDescription
        primaryImage {
          name
          url
        }
        secondaryImage {
          name
          url
        }
      }
      Success {
        subtitle
        title
        VisionMessage {
          MessageDescription
          VisionDescription
          VisionTitle
          MessageImage {
            name
            url
          }
          MessageTitle
          VisionImage {
            name
            url
          }
        }
      }
      Achievements {
        title
        subtitle
        NumbersCounter {
          label
          value
        }
      }
      WhyChooseUs {
        title
        subtitle
        content {
          description
          title
          icon {
            name
            url
          }
        }
      }
      ContactUsCard {
        title
        description
      }
      Faq {
        title
        faqs {
          answer
          order
          question
        }
      }
      CTA {
        title
        buttonText
        buttonLink
        backgroundImage {
          name
          url
        }
      }
      PartnersLogos {
        partners {
          name
          website
          logo {
            name
            url
          }
        }
      }
    }
  }
`;
