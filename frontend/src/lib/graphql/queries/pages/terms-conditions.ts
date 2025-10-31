import { gql } from "@apollo/client";

export const GET_TERMS_CONDITIONS = gql`
  query TermsAndConditionsPage($locale: I18NLocaleCode) {
    termsAndConditionsPage(locale: $locale) {
      Hero {
        title
        subtitle
        primaryButton {
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
      locale
      privacy_policy {
        content {
          title
          order
          contents
        }
        icon {
          url
          name
        }
        subtitle
        title
      }
    }
  }
`;
